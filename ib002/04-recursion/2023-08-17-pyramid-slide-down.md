---
id: pyramid-slide-down
title: Introduction to dynamic programming
description: |
  Solving a problem in different ways.
tags:
- java
- recursion
- exponential
- greedy
- dynamic-programming
- top-down-dp
- bottom-up-dp
last_updated:
  date: 2023-08-17
---

In this post we will try to solve one problem in different ways.

## Problem

The problem we are going to solve is one of _CodeWars_ katas and is called
[Pyramid Slide Down](https://www.codewars.com/kata/551f23362ff852e2ab000037).

We are given a 2D array of integers and we are to find the _slide down_.
_Slide down_ is a maximum sum of consecutive numbers from the top to the bottom.

Let's have a look at few examples. Consider the following pyramid:
```
   3
  7 4
 2 4 6
8 5 9 3
```

This pyramid has following slide down:
```
   *3
  *7 4
 2 *4 6
8 5 *9 3
```

And its value is `23`.

We can also have a look at a _bigger_ example:
```
                75
               95 64
              17 47 82
             18 35 87 10
            20  4 82 47 65
            19  1 23  3 34
         88  2 77 73  7 63 67
        99 65  4 28  6 16 70 92
       41 41 26 56 83 40 80 70 33
      41 48 72 33 47 32 37 16 94 29
     53 71 44 65 25 43 91 52 97 51 14
    70 11 33 28 77 73 17 78 39 68 17 57
   91 71 52 38 17 14 91 43 58 50 27 29 48
 63 66  4 68 89 53 67 30 73 16 69 87 40 31
 4 62 98 27 23 9 70 98 73 93 38 53 60  4 23
```
Slide down in this case is equal to `1074`.

## Solving the problem

:::caution

I will describe the following ways you can approach this problem and implement
them in _Java_[^1].

:::

For all of the following solutions I will be using basic `main` function that
will output `true`/`false` based on the expected output of our algorithm. Any
other differences will lie only in the solutions of the problem. You can see the
`main` here:
```java
public static void main(String[] args) {
    System.out.print("Test #1: ");
    System.out.println(longestSlideDown(new int[][] {
            { 3 },
            { 7, 4 },
            { 2, 4, 6 },
            { 8, 5, 9, 3 }
    }) == 23 ? "passed" : "failed");

    System.out.print("Test #2: ");
    System.out.println(longestSlideDown(new int[][] {
            { 75 },
            { 95, 64 },
            { 17, 47, 82 },
            { 18, 35, 87, 10 },
            { 20, 4, 82, 47, 65 },
            { 19, 1, 23, 75, 3, 34 },
            { 88, 2, 77, 73, 7, 63, 67 },
            { 99, 65, 4, 28, 6, 16, 70, 92 },
            { 41, 41, 26, 56, 83, 40, 80, 70, 33 },
            { 41, 48, 72, 33, 47, 32, 37, 16, 94, 29 },
            { 53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14 },
            { 70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57 },
            { 91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48 },
            { 63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31 },
            { 4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23 },
    }) == 1074 ? "passed" : "failed");
}
```

## Naïve solution

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

### Time complexity

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

:::warning

It would've been more complicated to get an exact result. In the equation above
we are assuming that the width of the pyramid is bound by the height.

:::

Hopefully we can agree that this is not the best we can do. :wink:

## Greedy solution

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

### Time complexity

We have switched from _adding the maximum_ to _following the “bigger” path_, so
we improved the time complexity tremendously. We just go down the pyramid all
the way to the bottom. Therefore we are getting:
$$
\mathcal{O}(rows)
$$

We have managed to convert our exponential solution into a linear one.

### Running the tests

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

## Top-down DP

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

### Time complexity

If you think that evaluating time complexity for this approach is a bit more
tricky, you are right. Keeping the cache in mind, it is not the easiest thing
to do. However there are some observations that might help us figure this out:

1. Slide down from each position is calculated only once.
2. Once calculated, we use the result from the cache.

Knowing this, we still cannot, at least easily, describe the time complexity of
finding the best slide down from a specific position, **but** we can bound it
from above for the **whole** run from the top. Now the question is how we can do
that!

Overall we are doing the same things for almost[^2] all of the positions within
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

   :::caution

   You might have noticed it's still not that easy, cause we're not having full
   cache right from the beginning, but the sum of those logarithms cannot be
   expressed in a nice way, so taking the upper bound, i.e. expecting the cache
   to be full at all times, is the best option for nice and readable complexity
   of the whole approach.

   :::

   Our final upper bound of this work is therefore $\log_2{n}$.
2. We retrieve it from the cache. Same as in first point, but only twice, so we
   get $2 \cdot \log_2{n}$. 

   :::caution

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

### Memory complexity

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

:::caution

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

## Bottom-up DP

If you try to think in depth about the top-down DP solution, you might notice
that the _core_ of it stands on caching the calculations that have been already
done on the lower “levels” of the pyramid. Our bottom-up implementation will be
using this fact!

:::tip

As I have said in the _top-down DP_ section, it is the easiest way to implement
DP (unless the cached function has complicated parameters, in that case it might
get messy).

Bottom-up dynamic programming can be more effective, but may be more complicated
to implement right from the beginning.

:::

Let's see how we can implement it:
```java
public static int longestSlideDown(int[][] pyramid) {
    // In the beginning we declare new array. At this point it is easier to just
    // work with the one dimension, i.e. just allocating the space for the rows.
    int[][] slideDowns = new int[pyramid.length][];

    // Bottom row gets just copied, there's nothing else to do… It's the base
    // case.
    slideDowns[pyramid.length - 1] = Arrays.copyOf(pyramid[pyramid.length - 1],
            pyramid[pyramid.length - 1].length);

    // Then we need to propagate the found slide downs for each of the levels
    // above.
    for (int y = pyramid.length - 2; y >= 0; --y) {
        // We start by copying the values lying in the row we're processing.
        // They get included in the final sum and we need to allocate the space
        // for the precalculated slide downs anyways.
        int[] row = Arrays.copyOf(pyramid[y], pyramid[y].length);

        // At this we just need to “fetch” the partial results from “neighbours”
        for (int x = 0; x < row.length; ++x) {
            // We look under our position, since we expect the rows to get
            // shorter, we can safely assume such position exists.
            int under = slideDowns[y + 1][x];

            // Then we have a look to the right, such position doesn't have to
            // exist, e.g. on the right edge, so we validate the index, and if
            // it doesn't exist, we just assign minimum of the ‹int› which makes
            // sure that it doesn't get picked in the ‹Math.max()› call.
            int toRight = x + 1 < slideDowns[y + 1].length
                            ? slideDowns[y + 1][x + 1]
                            : Integer.MIN_VALUE;

            // Finally we add the best choice at this point.
            row[x] += Math.max(under, toRight);
        }

        // And save the row we've just calculated partial results for to the
        // “table”.
        slideDowns[y] = row;
    }

    // At the end we can find our seeked slide down at the top cell.
    return slideDowns[0][0];
}
```

I've tried to explain the code as much as possible within the comments, since it
might be more beneficial to see right next to the “offending” lines.

As you can see, in this approach we go from the other side[^3], the bottom of
the pyramid and propagate the partial results up.

:::info How is this different from the _greedy_ solution???

If you try to compare them, you might find a very noticable difference. The
greedy approach is going from the top to the bottom without **any** knowledge of
what's going on below. On the other hand, bottom-up DP is going from the bottom
(_DUH…_) and **propagates** the partial results to the top. The propagation is
what makes sure that at the top I don't choose the best **local** choice, but
the best **overall** result I can achieve.

:::

### Time complexity

Time complexity of this solution is rather simple. We allocate an array for the
rows and then for each row, we copy it and adjust the partial results. Doing
this we get:
$$
\mathcal{O}(rows + 2n)
$$

Of course, this is an upper bound, since we iterate through the bottom row only
once.

### Memory complexity

We're allocating an array for the pyramid **again** for our partial results, so
we get:
$$
\mathcal{O}(n)
$$

:::tip

If we were writing this in C++ or Rust, we could've avoided that, but not
really.

C++ would allow us to **copy** the pyramid rightaway into the parameter, so we
would be able to directly change it. However it's still a copy, even though we
don't need to allocate anything ourselves. It's just implicitly done for us.

Rust is more funny in this case. If the pyramids weren't used after the call of
`longest_slide_down`, it would simply **move** them into the functions. If they
were used afterwards, the compiler would force you to either borrow it, or
_clone-and-move_ for the function.

---

Since we're doing it in Java, we get a reference to the _original_ array and we
can't do whatever we want with it.

:::

## Summary

And we've finally reached the end. We have seen 4 different “solutions”[^4] of
the same problem using different approaches. Different approaches follow the
order in which you might come up with them, each approach influences its
successor and represents the way we can enhance the existing implementation.

---

:::info source

You can find source code referenced in the text
[here](pathname:///files/ib002/recursion/pyramid-slide-down.tar.gz).

:::

[^1]: cause why not, right!?
[^2]: except the bottom row
[^3]: definitely not an RHCP reference :wink:
[^4]: one was not correct, thus the quotes