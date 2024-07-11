---
id: naive
slug: /recursion/pyramid-slide-down/naive
title: Naïve solution
description: |
  Naïve solution of the Pyramid Slide Down.
tags:
  - java
  - recursion
  - exponential
last_update:
  date: 2023-08-17
---

Our naïve solution consists of trying out all the possible slides and finding
the one with maximum sum.

```java
public static int longestSlideDown(int[][] pyramid, int row, int col) {
    if (row >= pyramid.length || col < 0 || col >= pyramid[row].length) {
        // BASE: We have gotten out of bounds, there's no reasonable value to
        // return, so we just return the ‹MIN_VALUE› to ensure that it cannot
        // be maximum.
        return Integer.MIN_VALUE;
    }

    if (row == pyramid.length - 1) {
        // BASE: Bottom of the pyramid, we just return the value, there's
        // nowhere to slide anymore.
        return pyramid[row][col];
    }

    // Otherwise we account for the current position and return maximum of the
    // available “slides”.
    return pyramid[row][col] + Math.max(
            longestSlideDown(pyramid, row + 1, col),
            longestSlideDown(pyramid, row + 1, col + 1));
}

public static int longestSlideDown(int[][] pyramid) {
    // We start the slide in the top cell of the pyramid.
    return longestSlideDown(pyramid, 0, 0);
}
```

As you can see, we have 2 overloads:

```java
int longestSlideDown(int[][] pyramid);
int longestSlideDown(int[][] pyramid, int row, int col);
```

First one is used as a _public interface_ to the solution, you just pass in the
pyramid itself. Second one is the recursive “algorithm” that finds the slide
down.

It is a relatively simple solution… There's nothing to do at the bottom of the
pyramid, so we just return the value in the _cell_. Otherwise we add it and try
to slide down the available cells below the current row.

## Time complexity

If you get the source code and run it yourself, it runs rather fine… I hope you
are wondering about the time complexity of the proposed solution and, since it
really is a naïve solution, the time complexity is pretty bad. Let's find the
worst case scenario.

Let's start with the first overload:

```java
public static int longestSlideDown(int[][] pyramid) {
    return longestSlideDown(pyramid, 0, 0);
}
```

There's not much to do here, so we can safely say that the time complexity of
this function is bounded by $$T(n)$$, where $$T$$ is our second overload. This
doesn't tell us anything, so let's move on to the second overload where we are
going to define the $$T(n)$$ function.

```java
public static int longestSlideDown(int[][] pyramid, int row, int col) {
    if (row >= pyramid.length || col < 0 || col >= pyramid[row].length) {
        // BASE: We have gotten out of bounds, there's no reasonable value to
        // return, so we just return the ‹MIN_VALUE› to ensure that it cannot
        // be maximum.
        return Integer.MIN_VALUE;
    }

    if (row == pyramid.length - 1) {
        // BASE: Bottom of the pyramid, we just return the value, there's
        // nowhere to slide anymore.
        return pyramid[row][col];
    }

    // Otherwise we account for the current position and return maximum of the
    // available “slides”.
    return pyramid[row][col] + Math.max(
            longestSlideDown(pyramid, row + 1, col),
            longestSlideDown(pyramid, row + 1, col + 1));
}
```

Fun fact is that the whole “algorithm” consists of just 2 `return` statements
and nothing else. Let's dissect them!

First `return` statement is the base case, so it has a constant time complexity.

Second one a bit tricky. We add two numbers together, which we'll consider as
constant, but for the right part of the expression we take maximum from the left
and right paths. OK… So what happens? We evaluate the `longestSlideDown` while
choosing the under and right both. They are separate computations though, so we
are branching from each call of `longestSlideDown`, unless it's a base case.

What does that mean for us then? We basically get

$$
T(y) =
\begin{cases}
1                    & \text{, if } y = rows \\
1 + 2 \cdot T(y + 1) & \text{, otherwise}
\end{cases}
$$

That looks rather easy to compute, isn't it? If you sum it up, you'll get:

$$
T(rows) \in \mathcal{O}(2^{rows})
$$

If you wonder why, I'll try to describe it intuitively:

1. In each call to `longestSlideDown` we do some work in constant time,
   regardless of being in the base case. Those are the `1`s in both cases.
2. If we are not in the base case, we move one row down **twice**. That's how we
   obtained `2 *` and `y + 1` in the _otherwise_ case.
3. We move row-by-row, so we move down `y`-times and each call splits to two
   subtrees.
4. Overall, if we were to represent the calls as a tree, we would get a full
   binary tree of height `y`, in each node we do some work in constant time,
   therefore we can just sum the ones.

:::danger

It would've been more complicated to get an exact result. In the equation above
we are assuming that the width of the pyramid is bound by the height.

:::

Hopefully we can agree that this is not the best we can do. :wink:
