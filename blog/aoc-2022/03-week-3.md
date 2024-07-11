---
title: 3rd week of Advent of Code '22 in Rust
description: Surviving third week in Rust.
date: 2023-07-06T21:00
slug: aoc-2022/3rd-week
authors: mf
tags:
  - advent-of-code
  - advent-of-code-2022
  - rust
hide_table_of_contents: false
---

Let's go through the third week of [_Advent of Code_] in Rust.

<!--truncate-->

## [Day 15: Beacon Exclusion Zone](https://adventofcode.com/2022/day/15)

:::info tl;dr

Triangulating a distress beacon based on the information from the sensors.

:::

### Solution

Relatively easy thing to implement, no major Rust issues hit.

## [Day 16: Proboscidea Volcanium](https://adventofcode.com/2022/day/16)

:::info tl;dr

Finding a max flow in a graph given some time constraints.

:::

### Solution

I have used some interesting things to implement this and make it easier for me.

#### Indexing in graph

I have come across a situation where I needed to keep more information regarding
the graph… In that case you can, of course, create a structure and keep it in,
but once you have multiple members in the structure it gets harder to work with
since you need to address the fields in the structure. When you work with graph,
you frequently need to access the vertices and in this case it felt a lot easier
to implement the indexing in a graph, rather than explicitly access the
underlying data structure.

Here you can see a rather short snippet from the solution that allows you to
“index” the graph:

```rust
impl Index<&str> for Graph {
    type Output = Vertex;

    fn index(&self, index: &str) -> &Self::Output {
        &self.g[index]
    }
}
```

#### Cartesian product

During the implementation I had to utilize Floyd-Warshall algorithm for finding
the shortest path between pairs of vertices and utilized the `iproduct!` macro
from the [`itertools`]. It is a very useful higher-order function that allows
you to keep the nesting of the loops at a minimum level while still maintaining
the same functionality.

#### “Implementing” an iterator

For the second part, you get to split the work between 2 actors. That way you
can achieve higher efficiency of the whole process that you're planning, but it
also makes it harder to evaluate algorithmically, since you need to check the
different ways the work can be split.

Being affected by _functional programming brain damage_:tm:, I have chosen to
do this part by function that returns an iterator over the possible ways:

```rust
fn pairings(
    valves: &BTreeSet<String>,
) -> impl Iterator<Item = (BTreeSet<String>, BTreeSet<String>)> + '_ {
    let mapping = valves.iter().collect_vec();

    let max_mask = 1 << (valves.len() - 1);

    (0..max_mask).map(move |mask| {
        let mut elephant = BTreeSet::new();
        let mut human = BTreeSet::new();

        for (i, &v) in mapping.iter().enumerate() {
            if (mask & (1 << i)) == 0 {
                human.insert(v.clone());
            } else {
                elephant.insert(v.clone());
            }
        }

        (human, elephant)
    })
}
```

## [Day 17: Pyroclastic Flow](https://adventofcode.com/2022/day/17)

:::info tl;dr

Simulating an autonomous Tetris where pieces get affected by a series of jets of
hot gas.

:::

### Solution

Similarly to the previous day I have created some iterators :smile:

#### Collision detection

Once you need to check for collisions it is very helpful to be able to just
iterate through the positions that can actually collide with the wall or other
piece.

To get the desired behaviour, you can just compose few smaller functions:

```rust
fn occupied(shape: &[Vec<char>]) -> impl Iterator<Item = Position> + '_ {
    shape.iter().enumerate().flat_map(|(y, row)| {
        row.iter().enumerate().filter_map(move |(x, c)| {
            if c == &'#' {
                Some(Vector2D::new(x as isize, y as isize))
            } else {
                None
            }
        })
    })
}
```

In the end, we get relative positions which we can adjust later when given the
specific positions from iterator. You can see some interesting parts in this:

- `.enumerate()` allows us to get both the indices (coordinates) and the line
  or, later on, the character itself,
- `.flat_map()` flattens the iterator, i.e. when we return another iterator,
  they just get chained instead of iterating over iterators (which sounds pretty
  disturbing, doesn't it?),
- and finally `.filter_map()` which is pretty similar to the “basic” `.map()`
  with a one, key, difference that it expects the items of an iterator to be
  mapped to an `Option<T>` from which it ignores nothing (as in `None` :wink:)
  and also unwraps the values from `Some(…)`.

#### Infinite iterator

In the solution we cycle through both Tetris-like shapes that fall down and the
jets that move our pieces around. Initially I have implemented my own infinite
iterator that just yields the indices. It is a very simple, yet powerful, piece
of code:

```rust
struct InfiniteIndex {
    size: usize,
    i: usize,
}

impl InfiniteIndex {
    fn new(size: usize) -> InfiniteIndex {
        InfiniteIndex { size, i: size - 1 }
    }
}

impl Iterator for InfiniteIndex {
    type Item = usize;

    fn next(&mut self) -> Option<Self::Item> {
        self.i = (self.i + 1) % self.size;
        Some(self.i)
    }
}
```

However when I'm looking at the code now, it doesn't really make much sense…
Guess what, we can use a built-in function that is implemented on iterators for
that! The function is called `.cycle()`

On the other hand, I am not going to switch to that function, since it would
introduce an another myriad of issues caused by the fact that I create iterators
right away in the constructor of my structure and the iterators would borrow
both the jets and shapes which would introduce a lifetime dependency into the
structure.

## [Day 18: Boiling Boulders](https://adventofcode.com/2022/day/18)

:::info tl;dr

Let's compute a surface area of some obsidian approximated via coordinates of
cubes.

:::

### Solution

This day is kinda interesting, because it shows how easily you can complicate the
problem and also how much can you screw yourself over with the optimization and
“smart” approach.

For the first part you need to find the surface area of an obsidian that is
approximated by cubes. Now, that is a very easy thing to do, just keep the track
of already added cubes, and check if the newly added cube touches any face of any
other cube. Simple, and with a `BTreeSet` relatively efficient way to do it.

However the second part lets you on a secret that there may be some surface area
from the “inside” too and you want to know only the one from the outside of the
obsidian. I have seen some solutions later, but if you check your data, you might
notice that the bounding box of all the cubes isn't that big at all. Therefore I
chose to pre-construct the box beforehand, fill in the cubes and then just run a
BFS turning all the lava on the outside into the air. Now you just need to check
cubes and count how many of their faces touch the air.

## [Day 19: Not Enough Minerals](https://adventofcode.com/2022/day/19)

:::info tl;dr

Finding out the best strategy for building robots to collect geodes.

:::

### Solution

Not much interesting stuff to mention apart from the suggestion to never believe
that the default implementation given by `derive` macro is what you want, it
doesn't have to be. :smile:

## [Day 20: Grove Positioning System](https://adventofcode.com/2022/day/20)

:::info tl;dr

Shuffling around the _circular linked list_ to find the coordinates.

:::

Now, small rant for this day is in place. They've never mentioned that coordinates
can repeat and therefore the values are non-unique. This is something that did
not happen in the given sample, but was present in the user input. It took »a lot«
to realize that this is the issue.

### Solution

I have tried implementing a circular linked list for this… and I have failed
miserably. To be fair, I still have no clue why. It was “fun” to play around with
the `Rc<RefCell<T>>`. In the end I failed on _wrong answer_. I have also encountered
a rather interesting issue with `.borrow_mut()` method being used on `Rc<RefCell<T>>`.

#### `.borrow_mut()`

Consider the following snippet of the code (taken from the documentation):

```rust
use std::cell::{RefCell, RefMut};
use std::collections::HashMap;
use std::rc::Rc;
// use std::borrow::BorrowMut;

fn main() {
    let shared_map: Rc<RefCell<_>> = Rc::new(RefCell::new(HashMap::new()));
    // Create a new block to limit the scope of the dynamic borrow
    {
        let mut map: RefMut<_> = shared_map.borrow_mut();
        map.insert("africa", 92388);
        map.insert("kyoto", 11837);
        map.insert("piccadilly", 11826);
        map.insert("marbles", 38);
    }

    // Note that if we had not let the previous borrow of the cache fall out
    // of scope then the subsequent borrow would cause a dynamic thread panic.
    // This is the major hazard of using `RefCell`.
    let total: i32 = shared_map.borrow().values().sum();
    println!("{total}");
}
```

We allocate a hash map on the heap and then in the inner block, we borrow it as
a mutable reference, so that we can use it.

:::note

It is a very primitive example for `Rc<RefCell<T>>` and mutable borrow.

:::

If you uncomment the 4th line with `use std::borrow::BorrowMut;`, you cannot
compile the code anymore, because of

```
   Compiling playground v0.0.1 (/playground)
error[E0308]: mismatched types
  --> src/main.rs:10:34
   |
10 |         let mut map: RefMut<_> = shared_map.borrow_mut();
   |                      ---------   ^^^^^^^^^^^^^^^^^^^^^^^ expected struct `RefMut`, found mutable reference
   |                      |
   |                      expected due to this
   |
   = note:         expected struct `RefMut<'_, _>`
           found mutable reference `&mut Rc<RefCell<HashMap<_, _>>>`

error[E0599]: no method named `insert` found for struct `RefMut<'_, _>` in the current scope
  --> src/main.rs:11:13
   |
11 |         map.insert("africa", 92388);
   |             ^^^^^^ method not found in `RefMut<'_, _>`

error[E0599]: no method named `insert` found for struct `RefMut<'_, _>` in the current scope
  --> src/main.rs:12:13
   |
12 |         map.insert("kyoto", 11837);
   |             ^^^^^^ method not found in `RefMut<'_, _>`

error[E0599]: no method named `insert` found for struct `RefMut<'_, _>` in the current scope
  --> src/main.rs:13:13
   |
13 |         map.insert("piccadilly", 11826);
   |             ^^^^^^ method not found in `RefMut<'_, _>`

error[E0599]: no method named `insert` found for struct `RefMut<'_, _>` in the current scope
  --> src/main.rs:14:13
   |
14 |         map.insert("marbles", 38);
   |             ^^^^^^ method not found in `RefMut<'_, _>`

Some errors have detailed explanations: E0308, E0599.
For more information about an error, try `rustc --explain E0308`.
error: could not compile `playground` due to 5 previous errors
```

It might seem **a bit** ridiculous. However, I got to a point where the compiler
suggested `use std::borrow::BorrowMut;` and it resulted in breaking parts of the
code that worked previously. I think it may be a good idea to go over what is
happening here.

##### `.borrow_mut()` on `Rc<RefCell<T>>`

Let's consider a variable `x` of type `Rc<RefCell<T>>`. What happens when you
call `.borrow_mut()` on it? We can look at the `Rc` type, and… hang on! There is
neither `.borrow_mut()` method or `BorrowMut` trait implemented. How can we do it
then?

Let's go further and we can see that `RefCell<T>` implements a `.borrow_mut()`
method. OK, but how can we call it on the `Rc<T>`? Easily! `Rc<T>` implements
`Deref<T>` and therefore you can call methods on `Rc<T>` objects as if they were
`T` objects. If we read on _`Deref` coercion_, we can see the following:

> If `T` implements `Deref<Target = U>`, …:
>
> - …
> - `T` implicitly implements all the (immutable) methods of the type `U`.

What is the requirement for the `.borrow_mut()` on `RefCell<T>`? Well, it needs
`&self`, so the `Deref` implements the `.borrow_mut()` for the `Rc<RefCell<T>>`.

##### `BorrowMut` trait

I have not been able to find a lot on this trait. My guess is that it provides a
method instead of a syntactic sugar (`&mut x`) for the mutable borrow. And also
it provides default implementations for the types:

```rust
impl BorrowMut<str> for String

impl<T> BorrowMut<T> for &mut T
where
    T: ?Sized,

impl<T> BorrowMut<T> for T
where
    T: ?Sized,

impl<T, A> BorrowMut<[T]> for Vec<T, A>
where
    A: Allocator,

impl<T, A> BorrowMut<T> for Box<T, A>
where
    A: Allocator,
    T: ?Sized,

impl<T, const N: usize> BorrowMut<[T]> for [T; N]
```

##### Conflict

Now the question is why did it break the code… My first take was that the type
`Rc<RefCell<T>>` has some _specialized_ implementation of the `.borrow_mut()` and
the `use` overrides it with the default, which is true **in a sense**. However
there is no _specialized_ implementation. Let's have a look at the trait and the
type signature on the `RefCell<T>`:

```rust
// trait
pub trait BorrowMut<Borrowed>: Borrow<Borrowed>
where
    Borrowed: ?Sized,
{
    fn borrow_mut(&mut self) -> &mut Borrowed;
}

// ‹RefCell<T>.borrow_mut()› type signature
pub fn borrow_mut(&self) -> RefMut<'_, T>
```

I think that we can definitely agree on the fact that `RefMut<'_, T>` is not the
`RefCell<T>`.

**In my opinion**, `RefCell<T>` implements a **separate** `.borrow_mut()` rather
than implementing the interface, because it **cannot** satisfy the type requirements
of the trait.

:::warning[caution]

I wonder how are we expected to deal with this conflict, if and when, we need
both the `.borrow_mut()` of the trait and `.borrow_mut()` of the `RefCell<T>`.

:::

:::tip Fun fact

I was suggested by the compiler to do `use std::borrow::BorrowMut;` and break the
code.

So much for the _almighty_ and _helpful_ compiler…

:::

## [Day 21: Monkey Math](https://adventofcode.com/2022/day/21)

:::info tl;dr

Computing an expression tree and then also finding ideal value for a node.

:::

### Solution

Relatively simple, until you get to the 2nd part where you start to practice
a lot of the copy-paste. I have managed to sneak some perverted stuff in there
though :) Let's go through the details.

#### `Default` trait

For the first time and twice I had a need to have a default value for my types,
enumerations in this case. Rust offers a very nice trait[^1] that is described
as:

> A trait for giving a type a useful default value.

I guess it sums it up nicely. The more interesting part about this is the fact
that you can use the _macro machinery_ to save yourself some typing. If you have
enumeration of which the default value doesn't bear any parameter, you can just
do[^2]:

```rust
#[derive(Default)]
enum Color {
    #[default]
    White,
    Gray,
    Black,
}
```

#### Abusing negation

If you want to use a _unary minus_ operator on your own type, you can implement
a `Neg` trait[^3]. I was dealing with a binary tree and needed a way how to look
at the other side, so I have just implemented the negation for flipping between
left and right :smile:

[^1]: [`Default`](https://doc.rust-lang.org/std/default/trait.Default.html) docs
[^2]: Pardon my example from the graph algorithms ;)
[^3]: [`Neg`](https://doc.rust-lang.org/std/ops/trait.Neg.html) docs

[_advent of code_]: https://adventofcode.com
[`itertools`]: https://crates.io/crates/itertools
[this reddit post and the comment]: https://www.reddit.com/r/adventofcode/comments/zb98pn/comment/iyq0ono
