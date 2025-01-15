---
title: Mixed feelings on Rust
description: |
  Discussing my mixed feelings about the Rust language.
date: 2024-01-28
authors:
  - key: mf
    title: a.k.a. passionate language hater
tags:
  - rust
  - memory safety
  - cult
  - hype
hide_table_of_contents: false
---

Rust has become a rather popular language these days. I've managed to get my
hands dirty with it during _[Advent of Code]_ ‘22 and partially ‘23. I've also
used it for few rounds of _[Codeforces]_ and I have to try very hard to maintain
some variety of languages for LeetCode challenges along with Rust. I'll disclaim
up front that I won't be only positive, since this post is a result of multiple
discussions about Rust and I stand by _“All that glitters is not gold”_, so if
you can't stand your favorite language being criticized in any way, don't even
proceed. :wink:

<!--truncate-->

## Memory safety

I'll start by kicking the biggest benefit of the language, the memory safety.
Let's be honest here, majority of the checks rely on the static analysis, cause
you can't do anything else during the compile-time, right? Therefore we can
basically say that we are relying on the compiler to “solve” all of our issues.

:::danger

I'm not doubting the fact that compiler can prevent **a lot** of the memory
errors, I'm just saying it's not realistic to cover **everything**.

:::

### Compiler

I guess we can safely[^2] agree on the fact that we 100% rely on the compiler to
_have our back_. Is the compiler bug-free? I doubt it. This is not meant in an
offensive way to the Rust compiler developers, but we need to be realistic here.
It's a compiler, even older and larger projects like _gcc_ or _llvm_ can't avoid
bugs to appear.

When I was trying out Rust for some of the LeetCode challenges I've stumbled
upon the following warning:
![Example of a compiler bug](https://i.imgur.com/NfPLF6o.png)

:::danger [Issue](https://github.com/rust-lang/rust/issues/59159)

The issue here comes from the fact that we have 2 simultaneous references to the
same memory (one is mutable and one immutable). If you cannot think of any way
this can break, I'll give you a rather simple example from C++ where this could
cause an issue.

Imagine a function that has some complex object and also calls a coroutine which
utilizes read-only reference to that object. When the coroutine suspends, the
caller can modify the object. This can break the integrity of data read by the
coroutine.

- Yes, this **can** cause a memory error.
- Yes, this **hasn't** been handled until someone noticed it.

Fixing this bug is not backwards compatible, cause you're covering a case that
hasn't been covered before.

:::

### Enforcing the safety

One of the ways Rust enforces the safety is by restricting what you can do, like
the example above. Aforementioned issue _can_ happen, but **doesn't have to**.
Rule of the thumb in the Rust compiler is to _“block”_ anything that can be an
issue, static analysis can't do much more, it cannot decide whether it's safe to
do it or not.

Satisfying the Rust compiler is sometimes a brutal pain in the ass, because you
cannot do things like you're used to, you need to work around them _somehow_.

:::tip

Key difference between Rust and C or C++ lies in the fact that Rust chooses to
_ban_ all “potentially offensive” actions, C and C++ _relies_ on **you** to be
sure it's safe to do.

![C++ v. Rust](https://i.imgur.com/0vbkYPp.png)

:::

### Consequences

Where are we heading with this approach of “if it compiles, it runs” though?
In this aspect I have a rather similar opinion as with regards to the ChatGPT
and its derivatives.

If you teach people to 100% depend on the compiler, they will do it, cause it's
_easy_. All you need to do is make the compiler _shut up_[^3]. Giving up the
_intellectual masturbation_ about the memory safety will make you lose your edge
over the time. When we get to the point of everyone being in the mindset
mentioned above, who's going to maintain the compiler? This is the place where
you **need to** think about the memory safety and furthermore in a much more
general way than in your own projects, because it is the thing that everyone
_blindly believes in_ in the end.

I'm not saying that everyone should give up Rust and think about their memory
management and potential memory issues. I'm just saying that going the easy way
will make people _dull_ and they should think about it anyways, that's how the
issue above has been discovered. If everyone walked past and didn't think about
it, no one would discover this issue till it bit them hard.

:::tip Standard library

Even the standard library is littered with `unsafe` blocks that are prefixed
with comments in style:

```rs
// SAFETY: …
```

The fact that the _casual_ Rust dev doesn't have to think much about safety,
cause the compiler has their back, doesn't mean that the Rust compiler dev
doesn't either.

I gotta admit that I adopted this concept in other languages (even in Python),
cause you can encounter situations where it doesn't have to be clear _why_ you
can do _what_ you're doing.

:::

## Development & design

Development of Rust is… very fast. One positive is that they're trying to be as
backward compatible as possible at least by verifying against all the published
crates in the process. Of course, you cannot be backward compatible about fixing
the bugs that have been found, but such is life.

### Fast development cycle

One of the negatives of the fast development cycle is the fact that they're
using the latest features already in the next release of Rust. Yes, it is
something that you can use for verifying and testing your own changes, but at
the same time it places a requirement of the latest release to compile the next
one.

:::tip

If you check `gcc` for example, they have a requirement of minimal version of
compiler that you need for the build. Though gcc's requirement is not so _needy_
as the Rust one.

:::

One of the other negatives is the introduction of bugs. If you're pushing
changes, somewhat mindlessly, at such a fast pace, it is inevitable to introduce
a bunch bugs in the process. Checking the GitHub issue tracker with

```
is:issue is:open label:C-bug label:T-compiler
```

yields **2,224** open issues at the time of writing this post.

### RFCs

You can find **a lot** of RFCs for Rust. Some of them are more questionable than
the others. Fun thing is that a lot of them make it to the nightly builds, so
they can be tested and polished off. Even the questionable ones… I'll leave
a few examples for a better understanding.

One of such features is the `do yeet` expression:

```rust
#![feature(yeet_expr)]

fn foo() -> Result<String, i32> {
    do yeet 4;
}
assert_eq!(foo(), Err(4));

fn bar() -> Option<String> {
    do yeet;
}
assert_eq!(bar(), None);
```

It allows you to “yeet” the errors out of the functions that return `Result` or
`Option`.

[One](https://github.com/rust-lang/rfcs/pull/3503) of the more recent ones is
the ability to include Cargo manifests into the sources, so you can do something
like:

```rust
#!/usr/bin/env cargo
---
[dependencies]
clap = { version = "4.2", features = ["derive"] }
---

use clap::Parser;

#[derive(Parser, Debug)]
#[clap(version)]
struct Args {
    #[clap(short, long, help = "Path to config")]
    config: Option<std::path::PathBuf>,
}

fn main() {
    let args = Args::parse();
    println!("{:?}", args);
}
```

I would say you can get almost anything into the language…

## Community and hype train

Rust community is a rather unique thing. A lot of people will hate me for this,
but I can't help, but to compare them to _militant vegans_. I'll go through some
of the things related to it, so I can support my opinion at least.

_Rust is the best language._ It is not. There is no best language, each has its
own positives and negatives, you need to choose the language that's **the most**
**suitable for your use case**. There are areas where Rust excels, though I have
to admit it's very close to being a universal hammer regardless of how suitable
it is. There is a very steep learning curve to it, beginnings in Rust are very
painful.

_Rewrite everything in Rust._ Just no. There are multiple feedbacks on doing
rewrites, it is very common to fix _N_ bugs with a rewrite while introducing
_N + 1_ other bugs in the process. It doesn't solve anything unless there are
some strong reasons to go with it. Majority of such suggested rewrites don't
have those reasons though.

_Language ‹x› is bad, though in Rust…_ Cherry-picking one specific pain point of
one language and reflecting how it is better in other language can go both ways.
For example it is rather easy to pick the limitations imposed by Rust compiler
and show how it's possible in other languages :man_shrugging:

I don't mind any of those opinions, you're free to have them, as long as you
don't rub them in my face which is not the usual case… This experience makes it
just worse for me, part of this post may be also influenced by this fact.

### Rust in Linux

:::warning[caution]

As someone who has seen the way Linux kernel is built in the RHEL ecosystem, how
complex the whole thing is and how much resources you need to proceed, I have
very strong opinions on this topic.

:::

It took years of work to even “incorporate” Rust into the Linux codebase, just
to get the “Hello World!”. I don't have anything against the idea of writing
drivers in Rust, I bet it can catch a lot of common mistakes, but still
introducing Rust to the kernel is another step to enlarge the monster.

I have to admit though that the _Apple GPU_ driver for Linux written in Rust is
quite impressive. Apart from that there are not so many benefits, yet…

## Packaging

I'll divide the packaging into the packaging of the language itself and the
programs written in Rust.

Let's start with the `cargo` itself though. Package managers of the languages
usually get a lot of hate (you can take `npm` or `pip` as examples[^1]). If
you've ever tried out Rust, I bet you already know where I'm going with this.
Yes, I mean the compilation times, or even Cargo downloading _whole_ index of
crates just so you can update that one dependency (and 3 millions of indirect
deps). When I was doing AoC ‘22 in Rust, I've set up `sccache` right away on the
first day.

Let's move to the packaging of the Rust itself, it's tedious. Rust has a very
fast development cycle and doesn't even try to make the builds backward
compatible. If there is a new release of Rust, there is a very high chance that
you cannot build that release with anything other than **the latest** Rust
release. If you have ever touched the packaging, you know that this is something
that can cause a lot of problems, cause you need the second-to-latest version to
compile the latest version, don't forget that this applies inductively… People
running _Gentoo_ could tell you a lot about this.

:::info

Compiling the compilers takes usually more time than compiling the kernel
itself…

:::

I cannot speak about packaging of Rust programs in other than RHEL-based
distros, though I can speak about RHEL ecosystem. Fedora packaging guidelines
specify that you need to build each and every dependency of the program
separately. I wanted to try out _AlmaLinux_ and install Alacritty there and I
failed miserably. The solution that worked, consisted of ignoring the packaging
guidelines, running `cargo build` and consuming the binaries afterwards.
Dependencies of the Rust programs are of a similar nature as JS dependencies.

> I'm tipping my fedora[^2] in the general direction of the maintainers of Rust
> packages in RHEL ecosystem. I wouldn't be able to do this without losing my
> sanity.

## Likes

If you've come all the way here and you're a Rustacean, I believe I've managed
to get your blood boiling, so it's time to finish this off by stuff I like about
Rust. I doubt I will be able to cover everything, but I can try at least. You
have to admit it's much easier to remember the bad stuff as opposed to the good.
:wink:

### Workflow and toolchain

I prefered using Rust for the _Advent of Code_ and _Codeforces_ as it provides
a rather easy way to test the solutions before running them with the challenge
input (or test runner). I can give an example from the _Advent of Code_:

```rust
use aoc_2023::*;

type Output1 = i32;
type Output2 = Output1;

struct DayXX {}
impl Solution<Output1, Output2> for DayXX {
    fn new<P: AsRef<Path>>(pathname: P) -> Self {
        let lines: Vec<String> = file_to_lines(pathname);

        todo!()
    }

    fn part_1(&mut self) -> Output1 {
        todo!()
    }

    fn part_2(&mut self) -> Output2 {
        todo!()
    }
}

fn main() -> Result<()> {
    DayXX::main()
}

test_sample!(day_XX, DayXX, 42, 69);
```

This was the skeleton I've used and the macro at the end is my own creation that
expands to:

```rust
#[cfg(test)]
mod day_XX {
    use super::*;

    #[test]
    fn part_1() {
        let path = DayXX::get_sample(1);
        let mut day = DayXX::new(path);
        assert_eq!(day.part_1(), 42);
    }

    #[test]
    fn part_2() {
        let path = DayXX::get_sample(2);
        let mut day = DayXX::new(path);
        assert_eq!(day.part_2(), 69);
    }
}
```

When you're solving the problem, all you need to do is switch between
`cargo test` and `cargo run` to check the answer to either sample or the
challenge input itself.

Introduce [bacon] and it gets even better. Bacon is a CLI tool that wraps around
the `cargo` and allows you to check, run, lint or run tests on each file save.
It's a very pleasant thing for a so-called _compiler-assisted_ development.

Speaking of linting from within the bacon, you cannot leave out the [clippy].
Not only it can whip your ass because of errors, but it can also produce a lot
of helpful suggestions, for example passing slices by borrow instead of
borrowing the `Vec` itself when you don't need it.

### Standard library

There's **a lot** included in the standard library. It almost feels like you
have all you need[^4]. I like placeholders (like `todo!()`, `unreachable!()`,
`unimplemented!()`) to the extent of
[implementing](/cpp/exceptions-and-raii/placeholders) them as exceptions in C++.

You can find almost anything. Though you can also hit some very weird issues
with some of the nuances of the type system.

### `unsafe`

This might be something that people like to avoid as much as possible. However I
think that forming a habit of commenting posibly unsafe operations in **any**
language is a good habit, as I've mentioned above. You should be able to argue
why you can do something safely, even if the compiler is not kicking your ass
because of it.

Excerpt of such comment from work:

```py
# SAFETY: Taking first package instead of specific package should be
# safe, since we have put a requirement on »one« ‹upstream_project_url›
# per Packit config, i.e. even if we're dealing with a monorepo, there
# is only »one« upstream. If there is one upstream, there is only one
# set of GPG keys that can be allowed.
return self.downstream_config.packages[
    self.downstream_config._first_package
].allowed_gpg_keys
```

### Traits

One of the other things I like are the traits. They are more restrictive than
templates or concepts in C++, but they're doing their job pretty good. If you
are building library and require multiple traits to be satisfied it means a lot
of copy-paste, but that's soon to be fixed by the [trait aliases].

:::tip Comparing to other languages

On Wikipedia I've seen trait being defined as a more restrictive type class as
you may know it from the Haskell for example. C++ isn't behind either with its
_constraints and concepts_. I would say that we can order them in the following
order based on the complexity they can express:

```
Rust's trait < Haskell's type class < C++'s concept
```

:::

You can also hit some issues, like me when trying to support conversions between
underlying numeric types of a 2D vectors or support for using an operator from
both sides (I couldn't get `c * u` to work in the same way as `u * c` because
the first one requires you to implement the trait of a built-in type).

:::warning Implementation

Implementing traits lies in

```rust
impl SomeTrait for SomeStruct {
    // implementation goes here
}
```

One of the things I **would love to** see is being able to define the helper
functions within the same block. As of now, the only things allowed are the ones
that are required by the trait, which in the end results in a randomly lying
functions around (or in a implementation of the structure itself). I don't like
this mess at all…

:::

### Influence of functional paradigm

You can see a big influence of the functional paradigm. Not only in iterators,
but also in the other parts of the language. For example I prefer `Option<T>` or
`Result<T, E>` to `null`s and exceptions. Pattern matching together with
compiler both enforces handling of the errors and rather user-friendly way of
doing it.

Not to mention `.and_then()` and such. However spending most of the time with
the AoC you get pretty annoyed of the repetitive `.unwrap()` during parsing,
since you are guaranteed correct input.

### Macros

Macros are a very strong pro of Rust. And no, we're not going to talk about the
procedural macros…

As I've shown above I've managed to “tame” a lot of copy-paste in the tests for
the AoC by utilizing a macro that generated a very basic template for the tests.

As I have mentioned the traits above, I cannot forget to give props to `derive`
macro that allows you to “deduce” the default implementation. It is very helpful
for a tedious tasks like implementing `Debug` (for printing out the structures)
or comparisons, though with the comparisons you need to be careful about the
default implementation, it has already bitten me once or twice.

## Summary

Overall there are many things about the Rust I like and would love to see them
implemented in other languages. However there are also many things I don't like.
Nothing is **exclusively** black and white.

[advent of code]: https://adventofcode.com
[bacon]: https://dystroy.org/bacon/
[clippy]: https://github.com/rust-lang/rust-clippy
[codeforces]: https://codeforces.com
[trait aliases]: https://github.com/rust-lang/rfcs/blob/master/text/1733-trait-alias.md

[^1]:
    not to even mention multiple different packaging standards Python has, which
    is borderline https://xkcd.com/927/

[^2]: pun intended
[^3]: It's not that easy with the Rust compiler, but OK…
[^4]:
    unlike Python where there's whole universe in the language itself, yet there
    are essential things not present…
