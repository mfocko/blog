---
id: top-down-dp
slug: /recursion/pyramid-slide-down/top-down-dp
title: Top-down DP solution
description: |
  Top-down DP solution of the Pyramid Slide Down.
tags:
  - java
  - dynamic-programming
  - top-down-dp
last_update:
  date: 2023-08-17
---

# Top-down dynamic programming

_Top-down dynamic programming_ is probably the most common approach, since (at
least looks like) is the easiest to implement. The whole point is avoiding the
unnecessary computations that we have already done.

In our case, we can use our naïve solution and put a _cache_ on top of it that
will make sure, we don't do unnecessary calculations.

```java
// This “structure” is required, since I have decided to use ‹TreeMap› which
// requires the ordering on the keys. It represents one position in the pyramid.
record Position(int row, int col) implements Comparable<Position> {
    public int compareTo(Position r) {
        if (row != r.row) {
            return Integer.valueOf(row).compareTo(r.row);
        }

        if (col != r.col) {
            return Integer.valueOf(col).compareTo(r.col);
        }

        return 0;
    }
}

public static int longestSlideDown(
        int[][] pyramid,
        TreeMap<Position, Integer> cache,
        Position position) {
    int row = position.row;
    int col = position.col;

    if (row >= pyramid.length || col < 0 || col >= pyramid[row].length) {
        // BASE: out of bounds
        return Integer.MIN_VALUE;
    }

    if (row == pyramid.length - 1) {
        // BASE: bottom of the pyramid
        return pyramid[position.row][position.col];
    }

    if (!cache.containsKey(position)) {
        // We haven't computed the position yet, so we run the same “formula” as
        // in the naïve version »and« we put calculated slide into the cache.
        // Next time we want the slide down from given position, it will be just
        // retrieved from the cache.
        int slideDown = Math.max(
                longestSlideDown(pyramid, cache, new Position(row + 1, col)),
                longestSlideDown(pyramid, cache, new Position(row + 1, col + 1)));
        cache.put(position, pyramid[row][col] + slideDown);
    }

    return cache.get(position);
}

public static int longestSlideDown(int[][] pyramid) {
    // At the beginning we need to create a cache and share it across the calls.
    TreeMap<Position, Integer> cache = new TreeMap<>();
    return longestSlideDown(pyramid, cache, new Position(0, 0));
}
```

You have probably noticed that `record Position` have appeared. Since we are
caching the already computed values, we need a “reasonable” key. In this case we
share the cache only for one _run_ (i.e. pyramid) of the `longestSlideDown`, so
we can cache just with the indices within the pyramid, i.e. the `Position`.

:::tip Record

_Record_ is relatively new addition to the Java language. It is basically an
immutable structure with implicitly defined `.equals()`, `.hashCode()`,
`.toString()` and getters for the attributes.

:::

Because of the choice of `TreeMap`, we had to additionally define the ordering
on it.

In the `longestSlideDown` you can notice that the computation which used to be
at the end of the naïve version above, is now wrapped in an `if` statement that
checks for the presence of the position in the cache and computes the slide down
just when it's needed.

## Time complexity

If you think that evaluating time complexity for this approach is a bit more
tricky, you are right. Keeping the cache in mind, it is not the easiest thing
to do. However there are some observations that might help us figure this out:

1. Slide down from each position is calculated only once.
2. Once calculated, we use the result from the cache.

Knowing this, we still cannot, at least easily, describe the time complexity of
finding the best slide down from a specific position, **but** we can bound it
from above for the **whole** run from the top. Now the question is how we can do
that!

Overall we are doing the same things for almost[^1] all of the positions within
the pyramid:

1. We calculate and store it (using the partial results stored in cache). This
   is done only once.

   For each calculation we take 2 values from the cache and insert one value.
   Because we have chosen `TreeMap`, these 3 operations have logarithmic time
   complexity and therefore this step is equivalent to $3 \cdot \log_2{n}$.

   However for the sake of simplicity, we are going to account only for the
   insertion, the reason is rather simple, if we include the 2 retrievals here,
   it will be interleaved with the next step, therefore it is easier to keep the
   retrievals in the following point.

   :::warning[caution]

   You might have noticed it's still not that easy, cause we're not having full
   cache right from the beginning, but the sum of those logarithms cannot be
   expressed in a nice way, so taking the upper bound, i.e. expecting the cache
   to be full at all times, is the best option for nice and readable complexity
   of the whole approach.

   :::

   Our final upper bound of this work is therefore $\log_2{n}$.

2. We retrieve it from the cache. Same as in first point, but only twice, so we
   get $2 \cdot \log_2{n}$.

   :::warning[caution]

   It's done twice because of the `.containsKey()` in the `if` condition.

   :::

Okay, we have evaluated work done for each of the cells in the pyramid and now
we need to put it together.

Let's split the time complexity of our solution into two operands:

$$
\mathcal{O}(r + s)
$$

$r$ will represent the _actual_ calculation of the cells and $s$ will represent
the additional retrievals on top of the calculation.

We calculate the values only **once**, therefore we can safely agree on:

$$
\begin{align*}
r &= n \cdot \log{n} \\
\end{align*}
$$

What about the $s$ though? Key observation here is the fact that we have 2
lookups on the tree in each of them **and** we do it twice, cause each cell has
at most 2 parents:

$$
\begin{align*}
s &= n \cdot 2 \cdot \left( 2 \cdot \log{n} \right) \\
s &= 4 \cdot n \cdot \log{n}
\end{align*}
$$

:::tip

You might've noticed that lookups actually take more time than the construction
of the results. This is not entirely true, since we have included the
`.containsKey()` and `.get()` from the `return` statement in the second part.

If we were to represent this more precisely, we could've gone with:

$$
\begin{align*}
r &= 3 \cdot n \cdot \log{n} \\
s &= 2 \cdot n \cdot \log{n}
\end{align*}
$$

On the other hand we are summing both numbers together, therefore in the end it
doesn't really matter.

(_Feel free to compare the sums of both “splits”._)

:::

And so our final time complexity for the whole _top-down dynamic programming_
approach is:

$$
\mathcal{O}(r + s) \\
\mathcal{O}(n \cdot \log{n} + 4 \cdot n \cdot \log{n}) \\
\mathcal{O}(5 \cdot n \cdot \log{n}) \\
\mathcal{O}(n \cdot \log{n})
$$

As you can see, this is worse than our _greedy_ solution that was incorrect, but
it's better than the _naïve_ one.

## Memory complexity

With this approach we need to talk about the memory complexity too, because we
have introduced cache. If you think that the memory complexity is linear to the
input, you are right. We start at the top and try to find each and every slide
down. At the end we get the final result for `new Position(0, 0)`, so we need to
compute everything below.

That's how we obtain:

$$
\mathcal{O}(n)
$$

$n$ represents the total amount of cells in the pyramid, i.e.

$$
\sum_{y=0}^{\mathtt{pyramid.length} - 1} \mathtt{pyramid}\left[y\right]\mathtt{.length}
$$

:::warning[caution]

If you're wondering whether it's correct because of the second `if` in our
function, your guess is right. However we are expressing the complexity in the
Bachmann-Landau notation, so we care about the **upper bound**, not the exact
number.

:::

:::tip Can this be optimized?

Yes, it can! Try to think about a way, how can you minimize the memory
complexity of this approach. I'll give you a hint:

$$
\mathcal{O}(rows)
$$

:::

[^1]: except the bottom row
