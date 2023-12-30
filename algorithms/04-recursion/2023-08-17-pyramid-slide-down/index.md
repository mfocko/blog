---
id: pyramid-slide-down
slug: /recursion/pyramid-slide-down
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
last_update:
  date: 2023-08-17
---

In this series we will try to solve one problem in different ways.

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

[^1]: cause why not, right!?
