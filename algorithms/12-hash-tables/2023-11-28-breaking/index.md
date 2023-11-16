---
id: breaking
title: Breaking Hash Table
description: |
  How to get the linear time complexity in a hash table.
tags:
  - cpp
  - python
  - hash-tables
last_update:
  date: 2023-11-28
---

We will try to break a hash table and discuss possible ways how to prevent such
issues to occur.

## Introduction

Hash tables are very commonly used to represent sets or dictionaries. Even when
you look up solution to some problem that requires set or dictionary, it is more
than likely that you'll find something that references usage of hash table. You
might think it's the only possible option[^1] or it's the best one[^2].

One of the reasons to prefer hash tables over any other representation is the
fact that they are **supposed** to be faster than the alternatives, but the
truth lies somewhere in between.

One of the other possible implementations of the set is a balanced tree. One of
the most common implementations rely on the _red-black tree_, but you may see
also others like the _AVL tree_[^3] or _B-tree_[^4].

## Hash Table v. Trees

The interesting part are the differences between those implementations. Why
should you choose hash table, or why should you choose the tree implementation?
Let's compare the differences one by one.

### Requirements

We will start with the fundamentals on which the underlying data structures
rely. We can also consider them as _requirements_ that must be met to be able to
use the underlying data structure.

Hash table relies on the _hash function_ that is supposed to distribute the keys
in such way that they're evenly spread across the slots in the array where the
keys (or pairs, for dictionary) are stored, but at the same time they're
somewhat unique, so no clustering occurs.

Trees depend on the _ordering_ of the elements. Trees maintain the elements in
a sorted fashion, so for any pair of the elements that are used as keys, you
need to be able to decide which one of them is _smaller or equal to_ the other.

Hash function can be easily created by using the bits that _uniquely_ identify
a unique element. On the other hand, ordering may not be as easy to define.

:::tip Example

If you are familiar with complex numbers, they are a great example of a key that
does not have ordering (unless you go element-wise for the sake of storing them
in a tree; though the ordering **is not** defined on them).

Hashing them is much easier though, you can just “combine” the hashes of real
and imaginary parts of the complex number to get a hash of the complex number
itself.

:::

### Underlying data structure

The most obvious difference is the _core_ of the idea behind these data
structures. Hash tables rely on data being stored in one continuous piece of
memory (the array) where you can “guess” (by using the hash function) the
location of what you're looking for in constant time and also access that
location in the, said, constant time[^5]. In case the hash function is
_not good enough_[^6], you need to go in blind, and if it comes to the worst,
check everything.

:::tip tl;dr

- I know where should I look
- I can look there instantenously
- If my guesses are very wrong, I might need to check everything

:::

On the other hand, tree implementations rely on the self-balancing trees in
which you don't get as _amazing_ results as with the hash table, but they're
consistent. Given that we have self-balancing tree, the height is same for
**every** input.

:::tip tl;dr

- I don't know where to look
- I know how to get there
- Wherever I look, it takes me about the same time

:::

Let's compare side by side:

| time complexity |       hash table       |         tree          |
| --------------: | :--------------------: | :-------------------: |
|        expected |        constant        | depends on the height |
|      worst-case | gotta check everything | depends on the height |

## Major Factors of Hash Tables

Let's have a look at the major factors that affect the efficiency and
functioning of a hash table. We have already mentioned the hash function that
plays a crucial role, but there are also different ways how you can implement
a hash table, so we will have a look at those too.

### Hash functions

:::info

We will start with a definition of hash function in a mathematical definition
and type signature in some known language:

$$
  h : T \rightarrow \mathbb{N}
$$

For a language we will just take the definition from C++[^7]:

```cpp
std::size_t operator()(const T& key) const;
```

If you compare with the mathematical definition, it is very similar, except for
the fact that the memory is not unlimited, so _natural number_ turned into an
_unsigned integer type_ (on majority of platforms it will be a 64-bit unsigned
integer).

:::

As we have already touched above, hash function gives “a guess” where to look
for the key (either when doing a look up, or for insertion to guess a suitable
spot for the insertion).

Hash functions are expected to have a so-called _avalanche effect_ which means
that the smallest change to the key should result in a massive change of hash.

Avalanche effect technically guarantees that even when your data are clustered
together, it should lower the amount of conflicts that can occur.

:::tip Exercise for the reader

Try to give an example of a hash function that is not good at all.

:::

### Implementation details

There are different variations of the hash tables. You've most than likely seen
an implementation that keeps linked lists for buckets. However there are also
other variations that use probing instead and so on.

With regards to the implementation details, we need to mention the fact that
even with the bounded hash (as we could've seen above), you're not likely to
have all the buckets for different hashes available. Most common approach to
this is having a smaller set of buckets and modifying the hash to fit within.

One of the most common approaches is to keep lengths of the hash tables in the
powers of 2 which allows bit-masking to take place.

:::tip Example

Let's say we're given `h = 0xDEADBEEF` and we have `l = 65536=2^16` spots in our
hash table. What can we do here?

Well, we definitely have a bigger hash than spots available, so we need to
“shrink” it somehow. Most common practice is to take the lower bits of the hash
to represent an index in the table:

```
h & (l - 1)
```

_Why does this work?_ Firstly we subtract 1 from the length (indices run from
`0..=(l - 1)`, since table is zero-indexed). Therefore if we do _binary and_ on
any number, we always get a valid index within the table. Let's find the index
for our hash:

```
0xDEADBEEF & 0xFFFF = 0xBEEF
```

:::

[^1]: not true
[^2]: also not true
[^3]: actually first of its kind (the self-balanced trees)
[^4]:
    Rust chose to implement this instead of the common choice of the red-black
    or AVL tree; main difference lies in the fact that B-trees are not binary
    trees

[^5]:
    This, of course, does not hold true for the educational implementations of
    the hash tables where conflicts are handled by storing the items in the
    linked lists. In practice linked lists are not that commonly used for
    addressing this issue as it has even worse impact on the efficiency of the
    data structure.

[^6]: My guess is not very good, or it's really bad…
[^7]: https://en.cppreference.com/w/cpp/utility/hash
