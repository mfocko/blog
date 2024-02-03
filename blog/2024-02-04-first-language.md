---
title: First programming language
description: |
  Thinking about the issues that can arise from making a wrong choice for a
  first programming language.
date: 2024-02-04
authors:
  - key: mf
    title: a.k.a. passionate Python hater
tags:
  - teaching
  - beginners
hide_table_of_contents: false
---

Let's talk about the first language beginners come into contact with hands
on.

I recall my first-time experience with programming quite vividly and also at the
time of writing this post I have been teaching _Foundations of Programming_ for
5 years already.

<!--truncate-->

:::caution Spoiler alert

At one point or another, this post will turn into full-blown Python rant as it
is the most common choice for the first language and not very suitable in my
opinion.

I'm also purposefully leaving out educational “languages” like [Scratch],
[Baltík] or [Imagine].

:::

## My journey

:::info

I'll start with my own journey, so you can take in account any bias that I have.

:::

I will describe it by taking two _very_ different paths, self-study and the high
school experience. Self-study path begins just a year or two before the high
school and majority of the time they overlap which certainly creates a unique
experience.

### Self-study

My first time touching a proper programming language was around ‘11 and it was
a VB.NET[^1]. If you have a look at this language, it is a rather verbose
language. However if you understand English, it is very easy to read because of
said verbosity. When you dig deeper, you may find some very weird stuff
going on, like indexing of arrays, or even allocating arrays that preallocates
one more or one less[^2] element than the specified size. Syntax is also quite
unusual with apostrophes marking the comments. You could say each language has
its own peculiarities.

Overall it's not that bad and the book I've had[^3] was rather nice. In
retrospective I would say that VB.NET is very nice first language, because it's
easy to write and read and yet is quite powerful.

Next step in my journey was Java. I have followed the book _Java 7_ by
_Herbert Schildt_. Java has been with me for a long time. I have to admit that
I've been going through this book for multiple years and more than likely it's
the root my “hate” towards Java.

In retrospective I consider Java very primitive language. You might disagree
with me on this one, but if you think about it, Java is very simple language in
the sense of syntax and what it can do[^4]. And yes, there are lots of people
that consider C# the _Microsoft's Java_[^5], but you cannot hide the fact that
in the recent releases there are features that are almost 1:1 taken from the C#
and implemented in the Java. Most of them are _quality of life_ things that make
the life of the developers less painful. All in all, there are still many things
that you need to work around in Java by abusing interfaces and design patterns
and some of those things can be done in a very simple way in other languages[^6]

Around the time of attending the high school, C appeared in my life… I think
I've seen C for the first time in the lectures from FIT CTU[^7]. After C we have
a mayhem of anything and everything.

Looking back I have to admit that I've managed to move from Java towards C# as
the preferred language, though this has not been reflected in my professional
experience (both working and teaching) and I haven't even touched the C#
recently apart from some LeetCode challenges.

### High school

Pascal

Python

## Common choices

### Python

### JavaScript

### C or C++

### Pascal

## What to look for

## My picks

[scratch]: https://scratch.mit.edu/
[baltík]: https://www.sgpsys.com/infovek/index.htm
[imagine]: https://imagine.input.sk/index.html

[^1]: https://en.wikipedia.org/wiki/Visual_Basic_(.NET)
[^2]: I don't even remember which one :smile:
[^3]: https://www.oreilly.com/library/view/microsoft-visual-basic/9780735645332/
[^4]:
    We also need to keep in mind the aphorism: “All that glitters is not gold”
    and the fact that syntax sugar can be abused and get very hard to process
    for people; yes… I'm looking at you Python…

[^5]: vomits violently because of the Microsoft; C# is nice though
[^6]: decorators are something for a long-haul discussion by itself…
[^7]: https://www.youtube.com/playlist?list=PL0VUmynWzoOlYMAqekeklZzCPUDKh3Nsj
