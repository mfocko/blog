---
id: mitigations
title: Possible Mitigations
description: |
  Talking about the ways how to prevent the attacks on the hash table.
tags:
  - cpp
  - python
  - hash-tables
last_update:
  date: 2023-11-28
---

There are multiple ways the issues created above can be mitigated. Still we can
only make it better, we cannot guarantee the ideal time complexity…

For the sake of simplicity (and referencing an article by _Neal Wu_ on the same
topic; in references below) I will use the C++ to describe the mitigations.

## Random seed

One of the options how to avoid this kind of an attack is to introduce a random
seed to the hash. That way it is not that easy to choose the _nasty_ numbers.

```cpp
struct custom_hash {
    size_t operator()(uint64_t x) const {
        return x + 7529;
    }
};
```

As you may have noticed, this is not very helpful, since it just shifts the
issue by some number. Better option is to use a shift from random number
generator:

```cpp
struct custom_hash {
    size_t operator()(uint64_t x) const {
        static const uint64_t FIXED_RANDOM =
            chrono::steady_clock::now().time_since_epoch().count();
        return x + FIXED_RANDOM;
    }
};
```

In this case the hash is using a high-precision clock to shift the number, which
is much harder to break.

## Better random seed

Building on the previous solution, we can do some _bit magic_ instead of the
shifting:

```cpp
struct custom_hash {
    size_t operator()(uint64_t x) const {
        static const uint64_t FIXED_RANDOM =
            chrono::steady_clock::now().time_since_epoch().count();
        x ^= FIXED_RANDOM;
        return x ^ (x >> 16);
    }
};
```

This not only shifts the number, it also manipulates the underlying bits of the
hash. In this case we're also applying the `XOR` operation.

## Adjusting the hash function

Another option is to switch up the hash function.

For example Rust uses [_SipHash_](https://en.wikipedia.org/wiki/SipHash) by
default.

On the other hand, you can usually specify your own hash function, here we will
follow the article by _Neal_ that uses so-called _`splitmix64`_.

```cpp
static uint64_t splitmix64(uint64_t x) {
    // http://xorshift.di.unimi.it/splitmix64.c
    x += 0x9e3779b97f4a7c15;
    x = (x ^ (x >> 30)) * 0xbf58476d1ce4e5b9;
    x = (x ^ (x >> 27)) * 0x94d049bb133111eb;
    return x ^ (x >> 31);
}
```

As you can see, this definitely doesn't do identity on the integers :smile:

## Combining both

Can we make it better? Of course! Use multiple mitigations at the same time. In
our case, we will both inject the random value **and** use the _`splitmix64`_:

```cpp
struct custom_hash {
    static uint64_t splitmix64(uint64_t x) {
        // http://xorshift.di.unimi.it/splitmix64.c
        x += 0x9e3779b97f4a7c15;
        x = (x ^ (x >> 30)) * 0xbf58476d1ce4e5b9;
        x = (x ^ (x >> 27)) * 0x94d049bb133111eb;
        return x ^ (x >> 31);
    }

    size_t operator()(uint64_t x) const {
        static const uint64_t FIXED_RANDOM =
            chrono::steady_clock::now().time_since_epoch().count();
        return splitmix64(x + FIXED_RANDOM);
    }
};
```

## Fallback for extreme cases

As we have mentioned above, Python resolves the conflicts by probing (it looks
for empty space somewhere else in the table, but it's deterministic about it, so
it's not “_oops, this is full, let's go one-by-one and find some spot_”). In the
case of C++ and Java, they resolve the conflicts by linked lists, as is the
usual text-book depiction of the hash table.

However Java does something more intelligent. Once you go over the threshold of
conflicts in one spot, it converts the linked list to an RB-tree that is sorted
by the hash and key respectively.

:::tip

You may wonder what sense does it make to define an ordering on the tree by the
hash, if we're dealing with conflicts. Well, there are less buckets than the
range of the hash, so if we take lower bits, we can have a conflict even though
the hashes are not the same.

:::

You might have noticed that if we get a **really bad** hashing function, this is
not very helpful. It is not, **but** it can help in other cases.

:::danger

As the ordering on the keys of the hash table is not required and may not be
implemented, the tree may be ordered by just the hash.

:::

---

## References

1. Neal Wu.
   [Blowing up `unordered_map`, and how to stop getting hacked on it](https://codeforces.com/blog/entry/62393).
