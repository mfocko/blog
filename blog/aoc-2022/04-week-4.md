---
title: 4th week of Advent of Code '22 in Rust
description: Surviving fourth week in Rust.
date: 2023-07-07T15:14
slug: aoc-2022/4th-week
authors: mf
tags:
- advent-of-code
- advent-of-code-2022
- rust
hide_table_of_contents: false
---

Let's go through the fourth week of [_Advent of Code_] in Rust.

<!--truncate-->

## [Day 22: Monkey Map](https://adventofcode.com/2022/day/22)

:::info tl;dr

Simulating a movement on a 2D map with given instructions. Map becomes a cube in
the 2nd part…

:::

:::caution Rant

This was the most obnoxious problem of this year… and a lot of Rust issues have
been hit.

:::

### Solution

It seems like a very simple problem to solve, but with very obnoxious changes in
the 2nd part and also it's relatively hard to decompose »properly«.

#### Column iterator

In the first part of the problem it was needed to know the boundaries of each
row and column, since I stored them in `Vec<Vec<char>>` and padded with spaces
to ensure I have a rectangular 2D “array”. However when you wanted to go through
each row and column to determine the boundaries, it was very easy to do for the
rows (cause each row is a `Vec` element), but not for the columns, since they
span multiple rows.

For this use case I have implemented my own _column iterator_:
```rust
pub struct ColumnIterator<'a, T> {
    map: &'a [Vec<T>],
    column: usize,

    i: usize,
}

impl<'a, T> ColumnIterator<'a, T> {
    pub fn new(map: &'a [Vec<T>], column: usize) -> ColumnIterator<'a, T> {
        Self { map, column, i: 0 }
    }
}

impl<'a, T> Iterator for ColumnIterator<'a, T> {
    type Item = &'a T;

    fn next(&mut self) -> Option<Self::Item> {
        if self.i >= self.map.len() {
            return None;
        }

        self.i += 1;
        Some(&self.map[self.i - 1][self.column])
    }
}
```

Given this piece of an iterator, it is very easy to factor out the common
functionality between the rows and columns into:
```rust
let mut find_boundaries = |constructor: fn(usize) -> Orientation,
                           iterator: &mut dyn Iterator<Item = &char>,
                           upper_bound,
                           i| {
    let mut first_non_empty = iterator.enumerate().skip_while(|&(_, &c)| c == ' ');
    let start = first_non_empty.next().unwrap().0 as isize;

    let mut last_non_empty = first_non_empty.skip_while(|&(_, &c)| c != ' ');
    let end = last_non_empty.next().unwrap_or((upper_bound, &'_')).0 as isize;

    boundaries.insert(constructor(i), start..end);
};
```

And then use it as such:
```rust
// construct all horizontal boundaries
(0..map.len()).for_each(|row| {
    find_boundaries(
        Orientation::horizontal,
        &mut map[row].iter(),
        map[row].len(),
        row,
    );
});

// construct all vertical boundaries
(0..map[0].len()).for_each(|col| {
    find_boundaries(
        Orientation::vertical,
        &mut ColumnIterator::new(&map, col),
        map.len(),
        col,
    );
});
```

#### Walking around the map

Once the 2nd part got introduced, you start to think about a way how not to
copy-paste a lot of stuff (I haven't avoided it anyways…). In this problem, I've
chosen to introduce a trait (i.e. _interface_) for 2D and 3D walker.
```rust
trait Wrap: Clone {
    type State;

    // simulation
    fn is_blocked(&self) -> bool;
    fn step(&mut self, steps: isize);
    fn turn_left(&mut self);
    fn turn_right(&mut self);

    // movement
    fn next(&self) -> (Self::State, Direction);

    // final answer
    fn answer(&self) -> Output;
}
```

Each walker maintains its own state and also provides the functions that are
used during the simulation. The “promised” methods are separated into:
* _simulation_-related: that are used during the simulation from the `.fold()`
* _movement_-related: just a one method that holds most of the logic differences
  between 2D and 3D
* _final answer_: which extracts the _proof of solution_ from the
  implementation-specific walker

Both 2D and 3D versions borrow the original input and therefore you must
annotate the lifetime of it:
```rust
struct Wrap2D<'a> {
    input: &'a Input,
    position: Position,
    direction: Direction,
}
impl<'a> Wrap2D<'a> {
    fn new(input: &'a Input) -> Wrap2D<'a> {
// …
```

#### Problems

I have used a lot of closures for this problem and once I introduced a parameter
that was of unknown type (apart from the fact it implements a specific trait), I
got suggested a “fix” for the compilation error that resulted in something that
was not possible to parse, cause it, more than likely, violated the grammar.

In a similar fashion, I have been suggested changes that led to a code that
didn't make sense by just looking at it (there was no need to try the changes),
for example one suggested change in the closure parameter caused disapperance of
the parameter name. :smile:

#### Clippy

I have to admit that Clippy was rather helpful here, I'll include two examples
of rather smart suggestions.

When writing the parsing for this problem, the first thing I have spotted on the
`char` was the `.is_digit()` function that takes a radix as a parameter. Clippy
noticed that I use `radix = 10` and suggested switching to `.is_ascii_digit()`
that does exactly the same thing:
```diff
-                .take_while(|c| c.is_digit(10))
+                .take_while(|c| c.is_ascii_digit())
```

Another useful suggestion appeared when working with the iterators and I wanted
to get the $n$-th element from it. You know the `.skip()`, you know the
`.next()`, just “slap” them together and we're done for :grin: Well, I got
suggested to use `.nth()` that does exactly the combination of the two mentioned
methods on iterators:
```diff
-            match it.clone().skip(skip).next().unwrap() {
+            match it.clone().nth(skip).unwrap() {
```

## [Day 23: Unstable Diffusion](https://adventofcode.com/2022/day/23)

:::info tl;dr

Simulating movement of elves around with a set of specific rules.

:::

### Solution

There's not much to mention since it's just a cellular automaton simulation
(even though the AoC rules for cellular automatons usually get out of hand
:wink:).

Although I had a need to determine boundaries of the elves' positions and ended
up with a nasty DRY violation. Knowing that you you're looking for maximum and
minimum that are, of course, exactly the same except for initial values and
comparators, it looks like a rather simple fix, but typing in Rust is something
else, right? In the end I settled for a function that computes both boundaries
without any duplication while using a closure:
```rust
fn get_bounds(positions: &Input) -> (Vector2D<isize>, Vector2D<isize>) {
    let f = |init, cmp: &dyn Fn(isize, isize) -> isize| {
        positions
            .iter()
            .fold(Vector2D::new(init, init), |acc, elf| {
                Vector2D::new(cmp(acc.x(), elf.x()), cmp(acc.y(), elf.y()))
            })
    };

    (f(isize::MAX, &min::<isize>), f(isize::MIN, &max::<isize>))
}
```

This function returns a pair of 2D vectors that represent opposite points of the
bounding rectangle of all elves.

You might ask why would we need a closure and the answer is that `positions`
cannot be captured from within the nested function, only via closure. One more
fun fact on top of that is the type of the comparator
```rust
&dyn Fn(isize, isize) -> isize
```
Once we remove the `dyn` keyword, compiler yells at us and also includes a way
how to get a more thorough explanation of the error by running

    $ rustc --explain E0782

which shows us

    Trait objects must include the `dyn` keyword.
    
    Erroneous code example:
    
    ```
    trait Foo {}
    fn test(arg: Box<Foo>) {} // error!
    ```
    
    Trait objects are a way to call methods on types that are not known until
    runtime but conform to some trait.
    
    Trait objects should be formed with `Box<dyn Foo>`, but in the code above
    `dyn` is left off.
    
    This makes it harder to see that `arg` is a trait object and not a
    simply a heap allocated type called `Foo`.
    
    To fix this issue, add `dyn` before the trait name.
    
    ```
    trait Foo {}
    fn test(arg: Box<dyn Foo>) {} // ok!
    ```
    
    This used to be allowed before edition 2021, but is now an error.

:::danger Rant

Not all of the explanations are helpful though, in some cases they might be even
more confusing than helpful, since they address _very simple_ use cases.

As you can see, even in this case there are two sides to the explanations:
* it explains why you need to use `dyn`, but
* it still mentions that trait objects need to be heap-allocated via `Box<T>`
  that, as you can see in my snippet, **does not** apply here :smile: IMO it's
  caused by the fact that we are borrowing it and therefore we don't need to
  care about the size or whereabouts of it.

:::

:::info C++ parallel

If you dive into the explanation above, you can notice that the `Box<dyn Trait>`
pattern is very helpful for using types that are not known during compile-time.
You would use a very similar approach in C++ when parsing some data structure
from input (let's say JSON for example).

On the other hand, in this case, it doesn't really make much sense, cause you
can clearly see that the types **are known** during the compile-time, which in
C++ could be easily resolved by templating the helper function.

:::

## [Day 24: Blizzard Basin](https://adventofcode.com/2022/day/24)

:::info tl;dr

Navigating your way through a basin with series of blizzards that move around
you as you move.

:::

:::caution

It's second to last day and I went “_bonkers_” on the Rust :smile: Proceed to
read _Solution_ part on your own risk.

:::

### Solution

You are given a map with blizzards all over the place and you're supposed to
find the minimum time it requires you to walk through the basin without getting
in any of the blizzards.

#### Breakdown

Relatively simple, yet a bit annoying, approach can be taken. It's technically
a shortest-path algorithm implementation with some relaxation restrictions and
being able to stay on one position for some time, so each _vertex_ of the graph
is determined by the position on the map and the _timestamp_. I have chosen to
use `Vector3D<usize>`, since `x` and `y` attributes can be used for the position
and, well, let's use `z` for a timestamp, cause why not, right? :wink:

#### Evaluating the blizzards

:::caution

I think that this is the most perverted abuse of the traits in the whole 4 weeks
of AoC in Rust…

:::

The blizzards move along their respective directions in time and loop around in
their respective row/column. Each vertex holds position **and** time, so we can
_just_ index the basin with the vertex itself, right? Yes, we can :smiling_imp:

:::tip Fun fact

While writing this part, I've recognized unnecessary verbosity in the code and
cleaned it up a bit. The changed version is shown here and the original was just
more verbose.

:::

I'll skip the boring parts of checking bounds and entry/exit of the basin :wink:
We can easily calculate positions of the blizzards using a modular arithmetics:
```rust
impl Index<Position> for Basin {
    type Output = char;

    fn index(&self, index: Position) -> &Self::Output {
        // ‹skipped boring parts›

        // We need to account for the loops of the blizzards
        let width = self.cols - 2;
        let height = self.rows - 2;

        let blizzard_origin = |size, d, t, i| ((i - 1 + size + d * (t % size)) % size + 1) as usize;
        [
            (
                index.y() as usize,
                blizzard_origin(width, -1, index.z(), index.x()),
                '>',
            ),
            (
                index.y() as usize,
                blizzard_origin(width, 1, index.z(), index.x()),
                '<',
            ),
            (
                blizzard_origin(height, -1, index.z(), index.y()),
                index.x() as usize,
                'v',
            ),
            (
                blizzard_origin(height, 1, index.z(), index.y()),
                index.x() as usize,
                '^',
            ),
        ]
        .iter()
        .find_map(|&(y, x, direction)| {
            if self.map[y][x] == direction {
                Some(&self.map[y][x])
            } else {
                None
            }
        })
        .unwrap_or(&'.')
    }
}
```

As you can see, there is an expression for calculating the original position and
it's used multiple times, so why not take it out to a lambda, right? :wink:

I couldn't get the `rustfmt` to format the `for`-loop nicely, so I've just
decided to go with iterating over an elements of a slice. I have used, once
again, a combination of two functions (`find_map` in this case) to do 2 things
at once and at the end, if we haven't found any blizzard, we just return the
empty space.

I think it's a very _nice_ (and naughty) way how to use the `Index` trait, don't
you think?

#### Shortest-path algorithm

For the shortest path you can choose and adjust any of the common shortest-path
algorithms, in my case, I have decided to use [_A\*_] instead of Dijkstra's
algorithm, since it better reflects the _cost_ function.

:::info Comparison of costs

With the Dijkstra's algorithm I would proceed with the `time` attribute used as
a priority for the queue.

Whereas with the _A\*_, I have chosen to use both time and Manhattan distance
that promotes vertices closer to the exit **and** with a minimum time taken.

:::

Cost function is, of course, a closure :wink:
```rust
let cost = |p: Position| p.z() as usize + exit.y().abs_diff(p.y()) + exit.x().abs_diff(p.x());
```

And also for checking the possible moves from the current vertex, I have
implemented, yet another, closure that yields an iterator with the next moves:
```rust
let next_positions = |p| {
    [(0, 0, 1), (0, -1, 1), (0, 1, 1), (-1, 0, 1), (1, 0, 1)]
        .iter()
        .filter_map(move |&(x, y, t)| {
            let next_p = p + Vector3D::new(x, y, t);

            if basin[next_p] == '.' {
                Some(next_p)
            } else {
                None
            }
        })
};
```

#### Min-heap

In this case I had a need to use the priority queue taking the elements with the
lowest cost as the prioritized ones. Rust only offers you the [`BinaryHeap`] and
that is a max-heap. One of the ways how to achieve a min-heap is to put the
elements in wrapped in a [`Reverse`] (as is even showed in the linked [docs of
the `BinaryHeap`]). However the wrapping affects the type of the heap and also
popping the most prioritized elements yields values wrapped in the `Reverse`.

For this purpose I have just taken the max-heap and wrapped it as a whole in a
separate structure providing just the desired methods:
```rust
use std::cmp::{Ord, Reverse};
use std::collections::BinaryHeap;

pub struct MinHeap<T> {
    heap: BinaryHeap<Reverse<T>>,
}

impl<T: Ord> MinHeap<T> {
    pub fn new() -> MinHeap<T> {
        MinHeap {
            heap: BinaryHeap::new(),
        }
    }

    pub fn push(&mut self, item: T) {
        self.heap.push(Reverse(item))
    }

    pub fn pop(&mut self) -> Option<T> {
        self.heap.pop().map(|Reverse(x)| x)
    }
}

impl<T: Ord> Default for MinHeap<T> {
    fn default() -> Self {
        Self::new()
    }
}
```

Rest is just the algorithm implementation which is not that interesting.

## [Day 25: Full of Hot Air](https://adventofcode.com/2022/day/25)

:::info tl;dr

Playing around with a numbers in a _special_ base.

:::

Getting flashbacks to the _IB111 Foundations of Programming_… Very nice “problem”
with a rather easy solution, as the last day always seems to be.

### Solution

Implementing 2 functions, converting from the _SNAFU base_ and back to the _SNAFU_
_base_ representation. Let's do a bit more though! I have implemented two functions:
* `from_snafu`
* `to_snafu`

Now it is apparent that all I do is number to string and string to number. Hmm…
that sounds familiar, doesn't it? Let's introduce a structure for the SNAFU numbers
and implement the traits that we need.

Let's start with a structure:
```rust
#[derive(Debug, PartialEq, Eq, PartialOrd, Ord)]
struct SNAFU {
    value: i64,
}
```

#### Converting from `&str`

We will start by implementing the `FromStr` trait that will help us parse our input.
This is rather simple, I can just take the `from_snafu` function, copy-paste it
into the `from_str` method and the number I get will be wrapped in `Result` and
`SNAFU` structure.

#### Converting to `String`

This is more fun. In some cases you need to implement only one trait and others
are automatically implemented using that one trait. In our case, if you look in
the documentation, you can see that `ToString` trait is automatically implemented
for any type that implements `Display` trait.

Let's implement the `Display` trait then. We should be able to use the `to_snafu`
function and just take the `self.value` from the `SNAFU` structure.

And for the convenience of tests, we can also implement a rather simple `From<i64>`
trait for the `SNAFU`.

#### Adjusting the code

After those changes we need to adjust the code and tests.

Parsing of the input is very easy, before we have used the lines, now we parse
everything:
```diff
     fn parse_input<P: AsRef<Path>>(pathname: P) -> Input {
-        file_to_lines(pathname)
+        file_to_structs(pathname)
     }
```

Part 1 needs to be adjusted a bit too:
```diff
     fn part_1(input: &Input) -> Output {
-        to_snafu(input.iter().map(|s| from_snafu(s)).sum())
+        SNAFU::from(input.iter().map(|s| s.value).sum::<i64>()).to_string()
     }
```

You can also see that it simplifies the meaning a bit and it is more explicit than
the previous versions.

And for the tests:
```diff
     #[test]
     fn test_from() {
-        for (n, s) in EXAMPLES.iter() {
-            assert_eq!(from_snafu(s), *n);
+        for (&n, s) in EXAMPLES.iter() {
+            assert_eq!(s.parse::<SNAFU>().unwrap().value, n);
         }
     }
 
     #[test]
     fn test_to() {
-        for (n, s) in EXAMPLES.iter() {
-            assert_eq!(to_snafu(*n), s.to_string());
+        for (&n, s) in EXAMPLES.iter() {
+            assert_eq!(SNAFU::from(n).to_string(), s.to_string());
         }
```

## Summary

Let's wrap the whole thing up! Keeping in mind both AoC and the Rust…

![Finished advent calendar :smile:](/img/blog/aoc-2022/04-week-4/calendar.png)

### Advent of Code

This year was quite fun, even though most of the solutions and posts came in
later on (*cough* in '23 *cough*). Day 22 was the most obnoxious one… And also
it feels like I used priority queues and tree data structures **a lot** :eyes:

### with Rust

I must admit that a lot of compiler warnings and errors were very useful. Even
though I still found some instances where they didn't help at all or cause even
worse issues than I had. Compilation times have been addressed with the caching.

Building my first tree data structure in Rust has been a very “interesting”
journey. Being able to write a more generic BFS algorithm that allows you to not
duplicate code while still mantaining the desired functionality contributes to
a very readable code.

I am definitely much more aware of the basic things that bloated Python is
missing, yet Rust has them…

Using explicit types and writing down placeholder functions with `todo!()`
macros is very pleasant, since it allows you to easily navigate the type system
during the development when you don't even need to be sure how are you going to
put the smaller pieces together.

I have used a plethora of traits and also implemented some of them to either be
idiomatic, or exploit the syntactic sugar they offer. Deriving the default trait
implementation is also very helpful in a lot of cases, e.g. debugging output,
copying, equality comparison, etc.

I confess to touching more “cursed” parts of the Rust, such as macros to
declutter the copy-paste for tests or writing my own structures that need to
carry a lifetime for their own fields.

tl;dr Relatively pleasant language until you hit brick wall :wink:

---

See you next year! Maybe in Rust, maybe not :upside_down_face:

[_Advent of Code_]: https://adventofcode.com
[_A\*_]: https://en.wikipedia.org/wiki/A*_search_algorithm
[`BinaryHeap`]: https://doc.rust-lang.org/std/collections/struct.BinaryHeap.html
[`Reverse`]: https://doc.rust-lang.org/std/cmp/struct.Reverse.html
[docs of the `BinaryHeap`]: https://doc.rust-lang.org/std/collections/struct.BinaryHeap.html#min-heap
