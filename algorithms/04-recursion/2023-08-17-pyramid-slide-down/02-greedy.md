---
id: greedy
slug: /recursion/pyramid-slide-down/greedy
title: Greedy solution
description: |
  Greedy solution of the Pyramid Slide Down.
tags:
  - java
  - greedy
last_update:
  date: 2023-08-17
---

We will try to optimize it a bit. Let's start with a relatively simple _greedy_
approach.

:::info Greedy algorithms

_Greedy algorithms_ can be described as algorithms that decide the action on the
optimal option at the moment.

:::

We can try to adjust the naïve solution. The most problematic part are the
recursive calls. Let's apply the greedy approach there:

```java
public static int longestSlideDown(int[][] pyramid, int row, int col) {
    if (row == pyramid.length - 1) {
        // BASE: We're at the bottom
        return pyramid[row][col];
    }

    if (col + 1 >= pyramid[row + 1].length
            || pyramid[row + 1][col] > pyramid[row + 1][col + 1]) {
        // If we cannot go right or it's not feasible, we continue to the left.
        return pyramid[row][col] + longestSlideDown(pyramid, row + 1, col);
    }

    // Otherwise we just move to the right.
    return pyramid[row][col] + longestSlideDown(pyramid, row + 1, col + 1);
}
```

OK, if we cannot go right **or** the right path adds smaller value to the sum,
we simply go left.

## Time complexity

We have switched from _adding the maximum_ to _following the “bigger” path_, so
we improved the time complexity tremendously. We just go down the pyramid all
the way to the bottom. Therefore we are getting:

$$
\mathcal{O}(rows)
$$

We have managed to convert our exponential solution into a linear one.

## Running the tests

However, if we run the tests, we notice that the second test failed:

```
Test #1: passed
Test #2: failed
```

What's going on? Well, we have improved the time complexity, but greedy
algorithms are not the ideal solution to **all** problems. In this case there
may be a solution that is bigger than the one found using the greedy algorithm.

Imagine the following pyramid:

```
      1
     2  3
   5  6  7
  8  9 10 11
99 13 14 15 16
```

We start at the top:

1. Current cell: `1`, we can choose from `2` and `3`, `3` looks better, so we
   choose it.
2. Current cell: `3`, we can choose from `6` and `7`, `7` looks better, so we
   choose it.
3. Current cell: `7`, we can choose from `10` and `11`, `11` looks better, so we
   choose it.
4. Current cell: `11`, we can choose from `15` and `16`, `16` looks better, so
   we choose it.

Our final sum is: `1 + 3 + 7 + 11 + 16 = 38`, but in the bottom left cell we
have a `99` that is bigger than our whole sum.

:::tip

Dijkstra's algorithm is a greedy algorithm too, try to think why it is correct.

:::
