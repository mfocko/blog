---
id: python
slug: /hash-tables/breaking/python
title: Breaking Python
description: |
  Actually getting the worst-case time complexity in Python.
tags:
  - cpp
  - python
  - hash-tables
last_update:
  date: 2023-11-28
---

# Breaking the Hash Table in Python

Our language of choice for bringing the worst out of the hash table is _Python_.

Let's start by talking about the hash function and why we've chosen Python for
this. Hash function for integers in Python is simply _identity_, as you might've
guessed, there's no avalanche effect. Another thing that helps us is the fact
that integers in Python are technically `BigInt`s[^1]. This allows us to put bit
more pressure on the hashing function.

From the perspective of the implementation, it is a hash table that uses probing
to resolve conflicts. This also means that it's a contiguous space in memory.
Indexing works like in the provided example above. When the hash table reaches
a _breaking point_ (defined somewhere in the C code), it reallocates the table
and rehashes everything.

:::tip

Resizing and rehashing can reduce the conflicts. That is coming from the fact
that the position in the table is determined by the hash and the size of the
table itself.

:::

## Preparing the attack

Knowing the things above, it is not that hard to construct a method how to cause
as many conflicts as possible. Let's go over it:

1. We know that integers are hashed to themselves.
2. We also know that from that hash we use only lower bits that are used as
   indices.
3. We also know that there's a rehashing on resize that could possibly fix the
   conflicts.

We will test with different sequences:

1. ordered one, numbers through 1 to N
2. ordered one in a reversed order, numbers through N back to 1
3. numbers that are shifted to the left, so they create conflicts until resize
4. numbers that are shifted to the left, but resizing helps only in the end
5. numbers that are shifted to the left, but they won't be taken in account even
   after final resize

For each of these sequences, we will insert 10⁷ elements and look each of them
up for 10 times in a row.

As a base of our benchmark, we will use a `Strategy` class and then for each
strategy we will just implement the sequence of numbers that it uses:

```py
class Strategy:
    def __init__(self, data_structure=set):
        self._table = data_structure()

    @cached_property
    def elements(self):
        raise NotImplementedError("Implement for each strategy")

    @property
    def name(self):
        raise NotImplementedError("Implement for each strategy")

    def run(self):
        print(f"\nBenchmarking:\t\t{self.name}")

        # Extract the elements here, so that the evaluation of them does not
        # slow down the relevant part of benchmark
        elements = self.elements

        # Insertion phase
        start = monotonic_ns()
        for x in elements:
            self._table.add(x)
        after_insertion = monotonic_ns()

        print(f"Insertion phase:\t{(after_insertion - start) / 1000000:.2f}ms")

        # Lookup phase
        start = monotonic_ns()
        for _ in range(LOOPS):
            for x in elements:
                assert x in self._table
        after_lookups = monotonic_ns()

        print(f"Lookup phase:\t\t{(after_lookups - start) / 1000000:.2f}ms")
```

### Sequences

Let's have a look at how we generate the numbers to be inserted:

- ordered sequence (ascending)
  ```py
  x for x in range(N_ELEMENTS)
  ```
- ordered sequence (descending)
  ```py
  x for x in reversed(range(N_ELEMENTS))
  ```
- progressive sequence that “heals” on resize
  ```py
  (x << max(5, x.bit_length())) for x in range(N_ELEMENTS)
  ```
- progressive sequence that “heals” in the end
  ```py
  (x << max(5, x.bit_length())) for x in reversed(range(N_ELEMENTS))
  ```
- conflicts everywhere
  ```py
  x << 32 for x in range(N_ELEMENTS)
  ```

## Results

Let's have a look at the obtained results after running the code:

|                  Technique                   | Insertion phase | Lookup phase |
| :------------------------------------------: | --------------: | -----------: |
|         ordered sequence (ascending)         |      `558.60ms` |  `3304.26ms` |
|        ordered sequence (descending)         |      `554.08ms` |  `3365.84ms` |
| progressive sequence that “heals” on resize  |     `3781.30ms` | `28565.71ms` |
| progressive sequence that “heals” in the end |     `3280.38ms` | `26494.61ms` |
|             conflicts everywhere             |     `4027.54ms` | `29132.92ms` |

You can see a noticable “jump” in the time after switching to the “progressive”
sequence. The last sequence that has conflicts all the time has the worst time,
even though it's rather comparable with the first progressive sequence with
regards to the insertion phase.

If we were to compare the _always conflicting_ one with the first one, we can
see that insertion took over 7× longer and lookups almost 9× longer.

You can have a look at the code [here](pathname:///files/algorithms/hash-tables/breaking/benchmark.py).

## Comparing with the tree

:::danger

Source code can be found [here](pathname:///files/algorithms/hash-tables/breaking/benchmark.cpp).

_Viewer discretion advised._

:::

Python doesn't have a tree structure for sets/maps implemented, therefore for
a comparison we will run a similar benchmark in C++. By running the same
sequences on both hash table and tree (RB-tree) we will obtain the following
results:

|      Technique       | Insertion (hash) | Lookup (hash) | Insertion (tree) | Lookup (tree) |
| :------------------: | ---------------: | ------------: | ---------------: | ------------: |
| ordered (ascending)  |          `316ms` |       `298ms` |         `2098ms` |      `5914ms` |
| ordered (descending) |          `259ms` |       `315ms` |         `1958ms` |     `14747ms` |
|    progressive a)    |         `1152ms` |      `6021ms` |         `2581ms` |     `16074ms` |
|    progressive b)    |         `1041ms` |      `6096ms` |         `2770ms` |     `15986ms` |
|      conflicts       |          `964ms` |      `1633ms` |         `2559ms` |     `13285ms` |

:::note

We can't forget that implementation details be involved. Hash function is still
the identity, to my knowledge.

:::

One interesting thing to notice is the fact that the progressive sequences took
the most time in lookups (which is not same as in the Python).

Now, if we have a look at the tree implementation, we can notice two very
distinctive things:

1. Tree implementations are not affected by the input, therefore (except for the
   first sequence) we can see **very consistent** times.
2. Compared to the hash table the times are much higher and not very ideal.

The reason for the 2nd point may not be very obvious. From the technical
perspective it makes some sense. Let's dive into it!

If we take a hash table, it is an array in a memory, therefore it is contiguous
piece of memory. (For more information I'd suggest looking into the 1st blog
post below in references section by _Bjarne Stroustrup_)

On the other hand, if we take a look at the tree, each node holds some
attributes and pointers to the left and right descendants of itself. Even if we
maintain a reasonable height of the tree (keep the tree balanced), we still need
to follow the pointers which point to the nodes _somewhere_ on the heap. When
traversing the tree, we get a consistent time complexity, but at the expense of
jumping between the nodes on the heap which takes some time.

:::danger

This is not supposed to leverage the hash table and try to persuade people not
to use the tree representations. There are benefits coming from the respective
data structures, even if the time is not the best.

Overall if we compare the worst-case time complexities of the tree and hash
table, tree representation comes off better.

:::

:::tip Challenge

Try to benchmark with the similar approach in the Rust. Since Rust uses
different hash function, it would be the best to just override the hash, this
way you can also avoid the hard part of this attack (making up the numbers that
will collide).

:::

---

## References

1. Bjarne Stroustrup.
   [Are lists evil?](https://www.stroustrup.com/bs_faq.html#list)

[^1]: Arbitrary-sized integers, they can get as big as your memory allows.
