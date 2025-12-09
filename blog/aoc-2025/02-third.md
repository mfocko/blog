---
title: Second third of Advent of Code ‘25 in Java
description: Second third of Advent of Code ‘25.
date: 2025-12-10T03:14
slug: aoc-2025/third-02
authors: mf
tags:
  - advent-of-code
  - advent-of-code-2025
  - java
hide_table_of_contents: false
---

Let's go through the second third of this year’s [_Advent of Code_].

<!--truncate-->

## [Day 5: Cafeteria](https://adventofcode.com/2025/day/5)

:::info tl;dr

Ranges??? AGAIN??? Bit more annoying than the last time though. For the part 1
you check how many items of your “shopping list” fall into any of the ranges.

And for the part 2, you get to find how many IDs are covered by those ranges.

:::

Pretty eazy to solve, given that you chose a good representation for the input.
Even _spotless_ thought it's a good idea to keep the solution for part 1 on one
line :wink:

I have also tried using the IDEA instead of the VSCode, but… I've hit different
issues with the IDE :man_facepalming:

- VSCode has trouble with the source dependencies defined by gradle and that's
  why any completion or type inference in the editor fails miserably :)

- as for the IDEA… type inference and completion works, but it has the same
  problem except for the fact that it »disassembles« compiled `*.class` files of
  the library and that's how it gets type inference and completion to work, but…

  still no javadoc and on top of that running the “app” is problematic, as I
  have not been able to get any output from the app in case it fails with an
  exception :smile: not even with `--stacktrace`… the output just vanishes

So in the end I've decided to revert back to the VSCode, as running the app is
a bit more comfortable than fighting the runner in IDEA.

### Parsing intermezzo \#1

This is the day when I decided to improve the parsing situation. From the
previous years and other languages I've noticed some patterns, with Java… I did
not notice any :eyes:

- For Rust there's a `FromStr` trait that allows you to use `T::from_str()` that
  can either return the parsed structure or an error.

- In Kotlin there was a funny “convention” of extending strings with a method
  `.toSomething()` which would allow you to do: `"1,2".toPoint()` or something
  similar.

- In C# there's a pretty good construct of

  ```cs
  public static bool TryParse(string? s, out T result);
  ```

  It seems a bit complex, but basically it allows you to get a result of the
  conversion as a return value (the `bool` indicates success or failure) and at
  the same time you can populate an `out` variable with the parsed data. Overall
  it can be combined into:

  ```cs
  var stringRepresentation = "1,2";
  if (Point.TryParse(stringRepresentation, out var point)) {
    Console.WriteLine($"Parsed point of x={point.x} y={point.y}");
  } else {
    Console.WriteLine($"Failed to parse: ‹{stringRepresentation}›");
  }
  ```

As I have not been able to find any convention about that in Java, apart from
the parsing method for primitive data types: `Integer.parseInt()`
or `Long.parseLong()`. I have decided to come up with something suitable for AoC
myself:

```java
public abstract class StringParser<T> {
  public abstract T from(String s);

  public Stream<T> from(Stream<String> xs) {
    return xs.map(it -> from(it));
  }

  public Stream<T> from(List<String> xs) {
    return from(xs.stream());
  }

  public Stream<T> from(String[] xs) {
    return from(Arrays.stream(xs));
  }
}
```

We have a few adapters over the unimplemented method, so it is easy to parse
multiple values at once. And one abstract method that defines parsing from
a single string.

:::tip

Of course, it is also possible to create anonymous objects of `StringParser<T>`
that don't have to be named, they just need to implement that `.from()` method.

:::

During the testing I have found out that… it works well, but at the same time is
quite verbose:

```java
@Test
public void testParse() {
  try (var input = new Input(69, "regression")) {
    char[][] map =
        new char[][] {
          "123049575901212312312313".toCharArray(),
          "123123130999555554444433".toCharArray(),
          "000111100022222330000000".toCharArray(),
        };
    assertArrayEquals(
        map,
        input.parse(
            new StringParser<char[][]>() {
              @Override
              public char[][] from(String s) {
                return Arrays.stream(s.split("\n"))
                    .map(row -> row.trim().toCharArray())
                    .toArray(char[][]::new);
              }
            }));
  }
}
```

As you can tell there's a lot of boilerplate still… And that's where I got
inspired by the higher-order functions in Java. Even though they accept
“callable” objects, you don't that much boilerplate around them. And the reason
why you don't is a _functional interface_.

#### Functional interface

:::info

Functional interface is a concept of an interface that has **exactly** one
abstract method. Since there's exactly one method, you can create an instance
of a functional interface with lambda, method or constructor reference.

:::

Given this annotation, I have converted `StringParser<T>` into:

```java
@FunctionalInterface
public interface StringParser<T> {
  T from(String s);
}
```

And to be able to utilize the other methods, if needed:

```java
public class Parser<T> implements StringParser<T> {
  private final StringParser<T> parser;

  public Parser(StringParser<T> parser) {
    if (parser == null) {
	      throw new IllegalArgumentException("‹parser› cannot be null");
    }
    this.parser = parser;
  }

  public T from(String s) {
    return parser.from(s);
  }

  public Stream<T> from(Stream<String> xs) {
    return xs.map(it -> from(it));
  }

  public Stream<T> from(List<String> xs) {
    return from(xs.stream());
  }

  public Stream<T> from(String[] xs) {
    return from(Arrays.stream(xs));
  }
}
```

And the parser above can now be written as:

```java
@Test
public void testParse() {
  try (var input = new Input(69, "regression")) {
    char[][] map =
        new char[][] {
          "123049575901212312312313".toCharArray(),
          "123123130999555554444433".toCharArray(),
          "000111100022222330000000".toCharArray(),
        };
    assertArrayEquals(
        map,
        input.parse(
            s -> {
              return Arrays.stream(s.split("\n"))
                  .map(row -> row.trim().toCharArray())
                  .toArray(char[][]::new);
            }));
  }
}
```

## [Day 6: Trash Compactor](https://adventofcode.com/2025/day/6)

For this day we also have a photo from this year's setup at 6am :wink:

![](/img/blog/aoc-2025/02-third/setup.png)

:::info tl;dr

_Advent of Parsing_, here we go! Part 1? Easy! Part 2? You get to pay for your
parsing decisions in the part 1 :)

Whole day is about a simple addition, or multiplication, of numbers in a column
as you have definitely learned at the elementary schoold, but the part 2 shows
you that sometimes not everything is aligned as it's supposed to be…

:::

And the old _Advent of Parsing_ is back…

```
123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  
```

Surely that whitespace around the numbers has no meaning, right? RIGHT?!?!

:::danger Spoiler alert

It does… _sigh_

:::

Part 1 was relatively OK, just treat the last row as special, since it has
operators and then for the other rows, split on whitespace and trim all other
whitespace.

:::tip N.B.

This was the day when my column iterator came in handy :tada:

:::

As for the second part… that was not fun… had to rewrite almost all of the
parsing. After making up an algorithm for handling the different representation
of numbers (one column of **digits** being a number), and still getting wrong
results, I noticed that the alignment from both sides matters :man_facepalming:

However after the refactoring I got to a solution that accepts an operator and
a stream of numbers, so it boiled down to one function doing “the math” and the
two other (for each part) just passing a stream of numbers to it…

## [Day 7: Laboratories](https://adventofcode.com/2025/day/7)

:::info tl;dr

Splitting beams, until… you're splitting timelines :)

:::

Part 1 was not the easiest to comprehend when reading it for the first time.
However if you get what you're supposed to do (and do not try to be smart about
it), it is rather easy to solve.

During the refactoring I've done several improvements, though… I have to admit
that in the end I might've overdone it a bit and it's kinda… perverted.

Since you're splitting beams on the splitters, the initial solution contained
a following bit of copy-paste:

```java
if (manifold[y][x - 1] == '.') {
  // …
}

if (manifold[y][x + 1] == '.') {
  // …
}
```

Which I have managed to refactor into:

```java
for (int dx : new int[] {-1, 1}) {
  if (manifold[y][x + dx] != '.') {
    continue;
  }
  // …
}
```

And I couldn't stop there… I have also decided to use `switch`-expressions where
possible. For example the computation of possible timelines from part 2:

```java
dp[y][x] =
    switch (manifold[y][x]) {
      case 'S', '|' -> get(y + 1, x);
      case '^' -> get(y, x - 1) + get(y, x + 1);
      default -> throw new IllegalStateException("no need to evaluate empty cells");
    };
```

Furthermore I have decided to convert the `for-each`-loop above into a stream…
and once I got a knack for it… I have created an adapter for consuming the queue
as a stream :man_facepalming:

```java
private <T> Stream<T> consumeHeap(Queue<T> heap) {
  return Stream.iterate(
      heap.poll(),
     _it -> heap.poll()
    )
    .takeWhile(it -> it != null);
}
```

Fun thing is, since the stream is lazily evaluated, you can add more elements
to the heap while iterating through it. So it basically can work as
a `for-each`-loop through the heap as long as there's something in it.

### Changes to library

#### `Pair.of()`

For the cases where it is possible to use type inference, I have stolen a helper
from [@semuil] to avoid unnecessary clutter, i.e., `new` and `<>`:

```java
new Pair<>(x, y)
// turns into
Pair.of(x, y)
```

## [Day 8: Playground](https://adventofcode.com/2025/day/8)

:::info tl;dr

Substituting for electricians and going through the piles of cables…

:::

The core of this puzzle was to repeateadly connect the closest boxes together.

:::tip

Probably the most appropriate way to approach this problem is to use union-find.
Since it's something I'd include in the library, I've decided to just use
min-heap and go from there.

:::

Now the first part was relatively easy to solve, though the abstraction hurt
a bit here. More specifically we want to partition the boxes into subsets in
such order that the one with the closest distance are together in one subset.

So… you need to be able to track to which partition each box belongs. Therefore
the easiest solution was to simply keep indices in the heap and keep an array
with “marks” for each partition.

And this is where I screwed up royally and was not able to find my mistake for
some time :smile:

To sum up what we're going to do:

> We pick the closest two boxes from the queue, if they're already in the same
> partition, we can safely ignore and proceed. Otherwise we need to merge the
> partitions into one.

This should be achieved with the following code:

```java
consumeHeap(queue)
  .limit(maxConnections)
  .forEach(
    it -> {
      var a = it.first();
      var b = it.second();

      if (mapping[a] == mapping[b]) {
        return;
      }

      for (var i = 0; i < mapping.length; ++i) {
        if (mapping[i] == mapping[b]) {
          mapping[i] = mapping[a];
        }
      }
    });
```

Except for one smaller issue… that I was not able to find for the longest time
possible :smile:

```java
//      vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        if (mapping[i] == mapping[b]) {
          mapping[i] = mapping[a];
        }
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
```

`for`-loop is supposed to take each box from the same partition as the latter
box from the two closest ones and move it to the partition of the first box. And
it does that… but once it wipes the mark of the original parition, cause it is
equal to itself (duh…), we lose the track and everything from that point onwards
stays in the original partition.

That was a rookie and quite stupid mistake that cost a lot of time…

:::tip

Fun fact, if the indices were evaluated using the strict evaluation strategy,
the overwriting would happen afterwards and therefore this problem could've been
avoided. But… they're not, it's a `for`-loop with side effects.

And, even if, I used the streams, the stream of indices would've been evaluated
lazily.

:::

As both parts are quite similar, I have managed to refactor the common logic
into:

```java
@Override
Long part1() {
  consumeHeap(queue).limit(maxConnections).forEach(this::connect);
  // construct the answer to part 1
}

@Override
Long part2() {
  Pair<Integer, Integer> it = null;
  while (sizes.size() != 1) {
    it = queue.poll();
    connect(it);
  }
  // construct the answer to part 2
}
```

### Changes to library

#### Euclidean distance

Since the _Euclidean distance_ used in this puzzle seemed handy, I moved it out
to the library. Funnily as part of the optimization I've used the squared
Euclidean distance throughout this puzzle, so the interface includes both actual
distance and the distance squared.

[_advent of code_]: https://adventofcode.com
[@semuil]: https://github.com/S3MU1L/advent-of-code-2025
