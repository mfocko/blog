---
title: Final third of Advent of Code ‘25 in Java
description: Final third of Advent of Code ‘25.
date: 2025-12-14T03:14
slug: aoc-2025/third-03
authors: mf
tags:
  - advent-of-code
  - advent-of-code-2025
  - java
hide_table_of_contents: false
---

Let's go through the final third of this year’s [_Advent of Code_].

<!--truncate-->

## [Day 9: Movie Theater](https://adventofcode.com/2025/day/9)

:::info tl;dr

Covering the floor with red tiles… and maybe also some green in case it would
be too simple.

:::

First part was pretty easy, very simple thing to literally brute-force. On the
other hand… the second part was a bit worse.

My idea was a pretty primitive one, just do the same thing as in the first part
and filter out the options that are not valid.

Turns out that the process of deciding what is and what is not valid **is** the
problem.

In the end I have managed to refactor the solution into:

```java
@Override
Long part1() {
  return getBiggestTriangle(_r -> true);
}

@Override
Long part2() {
  return getBiggestTriangle(this::isValidRectangle);
}
```

### Changes to library

#### “Queue consumer”

This was the second day when I had to utilize the _heap consumer_[^1], so I have
decided to factor it out to the library. Since the method itself accepts
an object implementing `Queue<T>` interface, I have renamed it
to `consumeQueue()`:

```java
/**
 * Creates a stream that consumes elements from a queue.
 *
 * @param <T> the type of elements in the queue
 * @param queue the queue to consume elements from
 * @return a stream of elements from the queue, in the order they are polled,
 *     terminating when the queue becomes empty (when {@code poll()} returns
 *     {@code null})
 */
public static <T> Stream<T> consumeQueue(Queue<T> queue) {
  return Stream
    .iterate(queue.poll(), _it -> queue.poll())
    .takeWhile(it -> it != null);
}
```

#### `pairs()` and helpers

For iterating over the possible choices, in this puzzle, I had to generate all
possible pairs from an input. Overall it made sense to just implement a method
that takes a stream and generates the pairs:

```java
public static <T> Stream<Pair<T, T>> pairs(Supplier<Stream<T>> xs) {
  return zip(indices().boxed(), xs.get())
      .flatMap(p ->
        xs.get()
          .skip(p.first() + 1)
          .map(y -> Pair.of(p.second(), y)));
}
```

However, in the end, I needed some other helpers to get there… Namely it was
easier to implement infinite `indices()` rather then iterate the stream twice.

Also you can notice that `pairs()` gets passed a `Supplier<Stream<T>>` rather
than the stream itself. That's coming from the fact that streams can be iterated
through only once, so I need to have a functional object that _generates_ a new
stream each time I need it.

## [Day 10: Factory](https://adventofcode.com/2025/day/10)

:::info tl;dr

Pressing buttons to light up christmas lights in specific configuration. Until
you realize it's not about the _on_ and _off_, but about the _“joltage”_…

:::

This day… was **a scam**. For the first part you had to light up lights on the
machine in a specific configuration. Part of the input were buttons that contain
a list of lights that get toggled with each press.

A lot of people chose to go with integral representation of the lights and
buttons and then just applying simple XOR.

I didn't try to simplify the inputs, so I've ended up with lists (or sets) of
integers and used BFS for solving the first part.

And… second part is where the fun starts.

:::info

Input consisted of multitude of machines where each one is represented by:

- _indicator lights_ - used in part 1
- _buttons_ - that toggle indicator lights
- _joltage_ - used in part 2

:::

For the part 2 you have to find minimal number of presses to raise joltage to
the seeked joltage…

The search space for this problem is enormous… I've tried a very naïve approach
of preprocessing the buttons for each machine in such order that narrows the
search space. This approach was _relatively_ effective, but not effective enough
:smile: To cut the story short, I've ended up with 97 % of the input processed,
but got stuck there for 3.5 hours after which I killed it.

Once the solution has been running for about 30 minutes, I have started to pick
away here and there to optimize bit by bit. And it was pretty effective! To sum
it up:

- I had a method to generate counters (i.e., `long[]` of zeros); in the initial
  solution I used `range().map().toArray()`, switched it to simple `new long[]`

- for read-only operations, where possible, I've switched to parallel streams
  instead of sequential

- changed the strategy of exploring the search space; instead of going from
  minimum needed to maximum possible presses of a button, I've turned it around
  and went from maximum possible to minimum needed, which prunes the unreachable
  branches quicker

- and finally the recursive calls that get called for each button press…
  for each of this calls I create a separate “goal” joltage the search is
  supposed to address, that way I can paralelize those too

And this has gotten me from 3.5 hours (still missing the last 4 results) to 6
minutes.

## [Day 11: Reactor](https://adventofcode.com/2025/day/11)

:::info tl;dr

Counting possible paths through a network of devices.

:::

Relatively easy way to solve this. Can be done recursively, it's basically just
going through the graph, trying to find a way to the _goal_. And at the same
time counting how many ways there are…

I have to admit that I **did not** expect to get burnt at this Java-specific
thing on the 11th day :smile: I've been teaching at _Intro to programming_ for
years that sometimes it's not a good idea to use niche features specific only to
one or two languages, yet… At first I didn't realize at all that

```java
if (from == sink) {
  return 1l;
}
```

does something totally different than

```java
if (from.equals(sink)) {
  return 1l;
}
```

`==` compares references, and, as opposed to other languages like C++ or C#,
cannot be overriden. However I noticed this mistake rather quickly, cause the
graph traversal doesn't terminate, duh…

I expected to make this mistake during the beginning, not at the second to last
day.

## [Day 12: Christmas Tree Farm](https://adventofcode.com/2025/day/12)

:::info tl;dr

Puzzle about tiling problem. However the challenge input is a bit more simpler
than the complicated sample…

:::

At the first look, the problem looks extremely annoying. And it kinda is… The
fun thing is that it is possible to solve simply by expecting a bit more area,
as a buffer, to be occupied by the tiles and simply checking whether it could
fit.

What's even more funny is the fact that the provided sample is quite picky about
this, i.e., you need to account for 20 % buffer to make it pass. However the
challenge input… that works without any buffer…

### Final changes to the library

#### `Parser.of()`

I've tried to simplify the parser a bit, so I introduced a method `Parser.of()`
to be able to construct instances of parsers without the need to use `new` and
`<>` for type inference of the resulting types to be produced by parsing…

## Summary

![Finished advent calendar :smile:](/img/blog/aoc-2025/03-third/calendar.png)

### Advent of Code itself

I have a bit of mixed feelings. Thankfully, this year, there was only one day
that was particularly obnoxious with regards to parsing.

There were only 12 days instead of the usual 25. I have tried to solve all days
at 6am (CET) and… I'm not very used to writing Java at 6am to be honest :smile:
So I definitely don't mind an early end on that front :eyes: Though it is quite
known that the complexity of the tasks grows towards the end of the AoC, so this
year might seem a bit _easy-going_? I can understand the need for a bit
of a challenge.

### Java

Even though Java is the first language I've learnt and also learnt to hate
further on, it was quite pleasent experience in my opinion. I confess to abusing
the streams and other FP-like “features”.

I definitely hate the boilerplate for each day… but looking back at it, it makes
it quite customizable, so, for example, in [day #8] I was able to simply add the
constraint (which was different for sample and challenge input) to constructor
and it allowed pretty easy testing and computing the challenge at the same time.

### Toolchain

I didn't feel comfortable working with either IDEA or VSCode. They each have
their own quirks, e.g., not working completion (which is definitely helpful with
streams and data structures), or issues running the puzzles in a way that would
fit my workflow.

OTOH it was a quite pleasant experience with testing (apart from constructors in
classes that are not instantiated) and also doc-generation. Though I feel that
javadoc is still… bit obscure format for me.

[^1]: the method I have implementing for converting a min-heap into a stream

[_advent of code_]: https://adventofcode.com
[day #8]: /blog/aoc-2025/third-02#day-8-playground
