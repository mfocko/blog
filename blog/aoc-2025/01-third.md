---
title: First third of Advent of Code ‘25 in Java
description: First third of Advent of Code ‘25.
date: 2025-12-08T06:00
slug: aoc-2025/third-01
authors: mf
tags:
  - advent-of-code
  - advent-of-code-2025
  - java
hide_table_of_contents: false
---

Let's talk about the preparations for this year's [_Advent of Code_] and its
first third.

<!--truncate-->

## Preparations

As usual I prepare the repo for the year and also some kind of a library with
helpers that I use regularly during the AoC challenges.

### Library with helpers

Library for AoC consists mostly of parsing helpers, as there's a long-going meme
of referring to _Advent of Code_ as _Advent of Parsing_. Additionally it's also
helpful to have 2D/3D vectors and maybe math functions or iterators.

Basic list of helpers I've prepared for myself for the _Advent of Code in Java_:

- _IO_ - for reading an input; as it has a common structure, the sample and the
  challenge input itself

- _iterators_ - implementation of the column iterators that are usually needed
  for iterating over maps, if they occur in the challenge input

- _streams_ - implementation of some algorithms that generate streams

- _math_ - GCD and LCM implementations for now as they are not included in the
  Java itself

- _vectors_ - as always…

#### `static` classes

You can probably tell from the prrevious list of helpers that almost all of the
required functionality does not depend on having an instance of a class itself.

For example the GCD and LCM doesn't need any instance, they're just simple
functions.

Yet during the testing I've discovered that there's no easy way to deal with
such thing. Classes in Java can be made `static`, but only if they're nested
within some other class which makes them hidden from outside.

:::danger

Fun thing stemming from this hinderance is the fact that it lowers the test
coverage, as the default constructor is made `private` and throws an exception
to ensure the class cannot be initialized, as it doesn't even make sense…

:::

#### Generics for numerics

One thing I hated the most about implementing the vectors is the fact that you
cannot make the vectors generic…

This is caused by non-existing interface for primitive data types. Therefore
it's not possible to create a generic class for vector.

I had to result to implementing two different classes that differ only in the
underlying data type of the coordinates:

```java
// Representing a 2D or 3D vector having the floating-point coordinates.
public class FVec {}

// Representing a 2D or 3D vector having the integral (as ‹Long›) coordinates.
public class IVec {}
```

#### Parsing input

I have started with a simple class that allows me to read the input by lines and
do very simple parsing.

:::tip

During the testing I've found out that there's an issue with releasing the
resources, if you read the input via stream, you might either close the file
before finishing the reading, or don't close it at all.

The best solution to this is to implement an `AutoCloseable` interface and then
you can use the input class as:

```java
try (var input = new Input(1, "sample")) {
  // read whatever you want
}
```

:::

I will leave out the boring technical part and just show how the input class
works:

```java
public Stream<String> lines() {
  return bufferedReader.lines();
}

public String asString() {
  return lines()
    .reduce((a, b) -> String.format("%s\n%s", a, b))
    .orElse("");
}

public Stream<Integer> asInts() {
  return lines().map(Integer::parseInt);
}

public Stream<Integer> asCommaSeparatedInts() {
  return Arrays
    .stream(asString().split(","))
    .map(Integer::parseInt);
}
```

#### `Stream` helpers from LeetCode

Also I've been able to snatch some `Stream` helpers after doing the LeetCode
challenges. They cover the following functionality:

- `range()` that generates a stream in a similar fashion as the Python function,
  you might know, would

- `indices()` that returns a stream of indices over an array or a `List<T>`

- `product()` that takes two functions that can generate streams and returns
  a stream of cartesian product over said streams

- `zip()` that “zips” two streams; providing both customizable zipping and
  simple zip that just returns pairs of values

### Abstract class for representing a day

Each day runs in the same way, the only difference is in the parsing and solving
the challenge itself. Each day has both parts, nowadays a sample input with
provided answers for testing. Therefore I have created for myself an abstract
class that takes care of these things:

```java
abstract class Day<T1, T2> {
  abstract void precompute();

  abstract T1 part1();
  abstract T2 part2();

  abstract void runAll();
}
```

:::tip Generics

`T1` and `T2` represent return types of the results from the parts of the
challenge. They're usually the same type, but sometime they may differ.

:::

I have added a `precompute()` method in case there are some things that could be
precomputed for both parts right after parsing.

Also with Java I've run into a limitation that doesn't allow me to test sample
inputs and run for the challenge input without a lot of copy-paste, so I've
created an abstract `runAll()` method which gets called when running the whole
app and can be used in a following way:

```java
@Override
void runAll() {
  new Day01("sample").test(42, 69);
  new Day01("input").run();
}
```

Still an annoying and technically a copy-paste, but somehow better.

### Build system and whatnot

Since it's Java and I have my own library in a separate repository there's
a need to use some kind of a build system and also other tools.

#### gradle

It has already been some years I had Java course at the university, where we
used Maven. And I've read some stuff about gradle, also it was used in the AoC
template for Kotlin done by the JetBrains, so it wasn't very hard to adapt.

Though there were some issues hit, I'll get to them later on.

#### spotless

While writing the library I noticed that it's rather hard to have consistent
formatting and the VSCode extensions don't do a very good job with formatting
and cleaning up imports and such. I searched a bit on :duck: and found
[_spotless_].

Looking at the git repository now I have to admit that it can be applied to a
multitude of languages, so they must be doing something right…

#### testing

For the library I've decided to use whatever was in the gradle template for Java
library.

As for the puzzle solutions themselves… That's rough to decide:

- with Kotlin it was a matter of simple `check()` statements that throw an
  exception if the assertion fails

- with Rust I had a very good experience using my own macro machinery to create
  a _mod_ with tests for each day; I have to admit that this setup together with
  [_bacon_] has been the best I've ever achieved

This time I have decided to go with two separate “runners” in the abstract class
for each day:

- `run()` that simply runs and reports from each part:

  ```java
  void run() {
    System.out.format("\n[TRACE] Running input:\t‹%s›\n", inputType);

    System.out.println("  [INFO] Running precompute()");
    precompute();

    System.out.print("  [INFO] Part 1:\t");
    System.out.println(part1());

    System.out.print("  [INFO] Part 2:\t");
    System.out.println(part2());
  }
  ```

- and `test(x, y)` that does basically the same, but also checks the results:

  ```java
  void test(T1 answer1, T2 answer2) {
    System.out.format("\n[TRACE] Testing input:\t‹%s›\n", inputType);

    System.out.println("  [INFO] Running precompute()");
    precompute();

    if (answer1 != null) {
      System.out.print("  [INFO] Part 1:\t");

      var result1 = part1();
      if (!result1.equals(answer1)) {
        System.out.printf("[KO] Given answer: ‹%s› (expected ‹%s›)\n", result1, answer1);
      } else {
        System.out.println("[OK]");
      }
    }

    if (answer2 != null) {
      System.out.print("  [INFO] Part 2:\t");

      var result2 = part2();
      if (!result2.equals(answer2)) {
        System.out.printf("[KO] Given answer: ‹%s› (expected ‹%s›)\n", result2, answer2);
      } else {
        System.out.println("[OK]");
      }
    }
  }

  void test(T1 answer1) {
    test(answer1, null);
  }
  ```

## [Day 1: Secret Entrance](https://adventofcode.com/2025/day/1)

:::info tl;dr

A sprinkling of modular arithmetics trying to crack a code to a vault.

:::

I didn't expect to smack an `enum` class and `record` right away on the first
day, but here we go.

Overall haven't hit any issues. Except for the fact that closures are something
that Java has never been designed for… Which means that you cannot modify
references of higher data types or values of primitive data types of variables
from an outer scope of a closure… This is something that I don't really like
and it kinda defeats a purpose of `.reduce()` or `.forEach()`.

## [Day 2: Gift Shop](https://adventofcode.com/2025/day/2)

:::info tl;dr

Comma-separated ranges… Quite obvious `int` won't do here… Adjustment for
second part can be a bit worse if you try to go for the simplest possible
solution :)

:::

You could choose to solve this by having “fun” with strings, or if you are
capable of running the mental masturbation, you can also have fun with decimal
numeral system.

Chosen the latter, though the adjustment for the second part was not that easy…

Leading zeroes were something that caused some trouble on my end, but I got over
it.

## [Day 3: Lobby](https://adventofcode.com/2025/day/3)

:::info tl;dr

Min-maxxing the joltage on the batteries. Starts to feel like there's a theme
of screwing around with base 10 numeral system :eyes:

:::

Part 1 was relatively easy… a lot of copy-paste in the first solution.

Part 2… that was not okay and it took some time to get over it. Probably had
a bad sleep or something, I knew what I want to do, but I just couldn't write it
in the code and always hit some problem, almost felt like a _whack-a-mole_.

## [Day 4: Printing Department](https://adventofcode.com/2025/day/4)

:::info tl;dr

Having fun with rolls of toilet paper on a 2D grid…

:::

Pretty straightforward for solving… Initial solution contained quite a lot of
copy-paste, of course.

Trying to refactor the solution brought to surface first issues with Java… What
I hate the most, is the fact that I am not able to make type aliases correctly.
The closest I've gotten to a type alias is something like:

```java
private class Index extends Pair<Integer, Integer> {}
```

However that creates issues on its own, because, well, it utilizes the
inheritance to construct a type alias. And the properties of the inheritance are
the issue here.

More specifically, as you may know from OOP, you can reference objects of
`Index` as `Pair<Integer, Integer>` as they “extend” the latter type, but you
cannot do that in the other way… Because `Pair<Integer, Integer>` doesn't have
to, and usually doesn't, implement anything under the `Index`. Even though we
don't add anything, there's not an easy way to tell…

This is the first day where I started to abuse the relatively new `Stream`
features of Java :wink: More specifically, part 2 of the puzzle was to repeat
part 1 until you run out of possible candidates. You can probably tell that the
first go-to of anyone would be to go for `do-while` loop, which I did in the
initial solution, but then I thought that it might be possible to just “abuse”
the `Stream` :smiling_imp: so I did…

```java
return Stream.iterate(
  removableRoles().toList(),
  indices -> !indices.isEmpty(),
  indices -> {
    indices.forEach(idx -> map[idx.first()][idx.second()] = 'x');
    return removableRoles().toList();
  })
  .mapToLong(roles -> roles.size())
  .sum();
```

[_advent of code_]: https://adventofcode.com
[_spotless_]: https://github.com/diffplug/spotless
[_bacon_]: https://github.com/Canop/bacon
