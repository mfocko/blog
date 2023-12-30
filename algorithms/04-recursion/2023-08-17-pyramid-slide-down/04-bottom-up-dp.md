---
id: bottom-up-dp
slug: /recursion/pyramid-slide-down/bottom-up-dp
title: Bottom-up DP solution
description: |
  Bottom-up DP solution of the Pyramid Slide Down.
tags:
  - java
  - dynamic-programming
  - bottom-up-dp
last_update:
  date: 2023-08-17
---

# Bottom-up dynamic programming

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

As you can see, in this approach we go from the other side[^1], the bottom of
the pyramid and propagate the partial results up.

:::info How is this different from the _greedy_ solution???

If you try to compare them, you might find a very noticable difference. The
greedy approach is going from the top to the bottom without **any** knowledge of
what's going on below. On the other hand, bottom-up DP is going from the bottom
(_DUH…_) and **propagates** the partial results to the top. The propagation is
what makes sure that at the top I don't choose the best **local** choice, but
the best **overall** result I can achieve.

:::

## Time complexity

Time complexity of this solution is rather simple. We allocate an array for the
rows and then for each row, we copy it and adjust the partial results. Doing
this we get:

$$
\mathcal{O}(rows + 2n)
$$

Of course, this is an upper bound, since we iterate through the bottom row only
once.

## Memory complexity

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

# Summary

And we've finally reached the end. We have seen 4 different “solutions”[^2] of
the same problem using different approaches. Different approaches follow the
order in which you might come up with them, each approach influences its
successor and represents the way we can enhance the existing implementation.

---

:::info source

You can find source code referenced in the text
[here](pathname:///files/algorithms/recursion/pyramid-slide-down.tar.gz).

:::

[^1]: definitely not an RHCP reference :wink:
[^2]: one was not correct, thus the quotes
