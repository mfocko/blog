---
title: Environment
description: |
  Suggestions for setting up a local environment for C++ course.
last_update:
  date: 2023-02-18
---

## Required tools per OS

### Windows

Most likely WSL, VM or VPS. If you consider setting up either of those PITA, then
VSCode + SSH to _aisa_ might be the best option for you.

:::caution VSCode @ aisa

Be careful when using VSCode on aisa, most notably:

1. VSCode can leave lingering processes running in the background that can „eat
   up“ your quota for running processes.
   AFAIK UNIX team has implemented some periodic clean up of those.
2. Disk quota can be also affected, because of the C/C++ extension toolkit that
   has a cache for IntelliSense.

:::

Either of those will be linux distros, so jump to [next section](#linux).

### Linux

Majority (if not all) of the provided materials include makefile (contains absolute
path, so in case of linting and compiling, you need to adjust to your needs). You
basically need following list of tools:

- `gcc` - for compiling
- `clang-tidy` - for linting (depends on distribution, might be provided with
  clang itself or in separate package, e.g. `clang-tools-extra`)
- `clang-format` - for your own sanity of keeping consistent formatting
- `make` - since you are provided makefiles and it might be quickest to set up
- `valgrind` - in case you manage to create memory errors in your code

In case of Fedora it is following set of packages:

```sh
sudo dnf install -y clang clang-tools-extra valgrind gcc make
# If you decide to use google test: add `gtest` or `llvm-googletest` for clang
```

### macOS

In case of macOS you should be able to find all of the packages in brew.sh, except
`valgrind`, not sure if you can solve with podman/docker.

There is also an alterantive to homebrew, that is nixpkgs.

### nix(OS)

In case you run nixOS or linux distribution with nixpkgs or you use nixpkgs as a
replacement for homebrew on macOS. You should be fine with the following config:

```nix
with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "cppenv";
  buildInputs = [
    clang-tools

    gnumake

    gmock # used for google test
    valgrind # not sure about macOS though
  ];
}
```

## IDEs

Choice of the IDE is mostly up to you, you do not need to use IDE at all ;)

I would probably recommend VSCode + appropriate extension or CLion if you are used
to the JetBrains IDEs.

## git

I recommend you using some basic versioning for your code, even though you submit
only the sources on _aisa_. There are specific reasons why I suggest it:

- if you build a _commit, tag and submit_ habit, you might be able to address
  some of the smaller problems in your sources even before submission; more info
  in the [pre-commit section](#pre-commit)

In case you are planning to use git branches for separating different
assignments and/or merge requests I suggest you to keep specifications and
skeletons on your default branch, since _frag_ on _aisa_ automatically downloads
everything that is not present and by that can create conflicts when switching
branches.

:::tip Commit conventions

When creating smaller and well defined commits, you can more easily argue about
correctness of your implementation and also identify bugs, since they are better
contained.

:::

Since frag creates a lot of support files (majority of them are dotfiles, i.e.
hidden files), I recommend you to use following
[gitignore](pathname:///files/pb161/environment/gitignore) configuration that
should cover most of the scenarios.

### pre-commit ([link](https://pre-commit.com/))

Pre-commit basically allows you to "check" your code before committing. It functions
as a git hook, i.e. you want to make a commit, pre-commit checks it before-hand.

In case of C++ there are few use-cases:

- formatting
- linting
- building and/or running tests, in case you feel like masochist

  However this might be a challenging task to implement, since most of the tasks
  are published from the beginning.

In case of formatting and linting, there are already existing hooks (there is a
list of supported ones on the page), but there is also an option for you setting
it up yourself (it is just a matter of specifying command and files it should run
on).

:::tip Formatting

For formatting you can the following [git hook](https://github.com/pre-commit/mirrors-clang-format#using-clang-format-with-pre-commit).

This hook follows the formatting conventions defined by the `.clang-format` file
that is looked up recursively all the way to the root of the filesystem, therefore
it is ideal to keep it in the root of the git repository.

You can look up the different codestyles [here](https://gitlab.fi.muni.cz/pb071/codestyles).

:::

## Testing

I have tried 2 frameworks for testing, one of them will be probably showcased in
lectures. If you have not picked one yet, you can take an inspiration from the
following.

### catch2

It is quite popular, only one header-file, also might be easier to set up.

Might feel slow to compile, this can be addressed by having one object file with
precompiled `main` for tests, e.g.

```cpp
/* File: catch_main.cpp
 * Compile it with: g++ $(CXXFLAGS) -c catch_main.cpp
 *
 * Once you have source file with tests, e.g. test_something.cpp, compile it in
 * a similar fashion: g++ $(CXXFLAGS) -c test_something.cpp $(LDLIBS)
 *
 * And link them together:
 * g++ catch_main.o test_something.o -o test_something
 *
 * Now you can run ./test_something and if you change it, you do not need to compile
 * the main again.
 */
#define CATCH_CONFIG_MAIN
#include "catch.hpp"
```

### Google Test

It is faster compared to catch2, even if you do not precompile the `main`. Might
be more complicated to set up, since there are multiple files (it is not one header
file). Not very user friendly on _aisa_. However can be installed through package
manager.
