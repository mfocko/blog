---
slug: garbage_collect
title: Practice exam B
description: |
  Garbage everywhere…
last_update:
  date: 2023-05-08
---

# Garbage Collection

:::caution Exam environment

- During the exam you will be provided with a barebone _exam session_ on the
  _faculty computers_.
- In browser you are only allowed to have the following tabs open:
  - [C documentation](https://en.cppreference.com)
  - page containing the assignment
- You **are not** allowed to use your own source code, e.g. prepared beforehand
  or from the seminars.
- You have **5 minutes** to read through the assignment and ask any follow-up
  questions should be there something unclear.
- You have **60 minutes** to work on the assignment, afterward your work will be
  discussed with your seminar tutor.

:::

You have gotten into a trouble during your regular upgrade of your archLinux[^1]
installation… You've been carelessly running the upgrades for months and forgot
about clearing up the caches.

Your task is to write a program `garbage_collect` that will evaluate the shell
history provided as a file and will try to find files or directories that are
suspiciously big and decide which of them should be deleted to free some space.

## Format of the shell history

You are provided one file consisting of the captured buffer of the terminal. You
can see only two commands being used:

1. `cd ‹somewhere›` that changes the current working directory.

   At the beginning you start in the root of the filesystem (i.e. `/`).

   You are **guaranteed** that `‹somewhere›` is:

   - `.` that is a current working directory (i.e. does nothing),
   - `..` that moves you up one level (in case you are in `/`, does nothing), or
   - is a valid directory in the current working directory.

   :::caution

   There are no guarantees or restrictions on the names of the files or
   directories!

   :::

1. `ls` that will list files in the current working directory and their
   respective sizes. If there is a directory in the current working it has `dir`
   instead of the size.

```
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ cd .
$ cd .
$ cd .
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k
```

For this input, you will get following file system:

```
- / (dir, size=48381165)
  - a (dir, size=94853)
    - e (dir, size=584)
      - i (file, size=584)
    - f (file, size=29116)
    - g (file, size=2557)
    - h.lst (file, size=62596)
  - b.txt (file, size=14848514)
  - c.dat (file, size=8504156)
  - d (dir, size=24933642)
    - j (file, size=4060174)
    - d.log (file, size=8033020)
    - d.ext (file, size=5626152)
    - k (file, size=7214296)
```

## Format of the output

Your program should support 2 switches:

- `-gt ‹min_size›` that will print out suspiciously big files.
- `-f ‹total_size› ‹min_unused›` that will print out a file to be deleted.

### `-gt ‹min_size›`

With this switch you are provided one additional argument:

- `min_size` that is the lower bound (inclusive) for size of any file or
  directory that is supposed to be listed.

When your program is being run with this switch, it is is supposed to print out
all files **and** directories that are bigger than the provided `min_size`.

### `-f ‹total_size› ‹min_unused›`

With this switch you are provided two additional arguments:

- `total_size` that is a total size of the filesystem[^2].
- `min_unused` that is a minimum of free space required for an upgrade.

Your program should find **exactly one** file or a directory that is of the
smallest size, but big enough to free enough space for the upgrade to proceed.

In other words, if that file or directory is deleted, following should hold:

$$
\mathtt{total\_size} - \mathtt{used} \geq \mathtt{min\_unused}
$$

## Example usage

You can have a look at the example usage of your program. We can run your
program from the shell like

    $ ./garbage_collect shell_history.txt -gt 10000000
    24933642 /d
    14848514 /b.txt
    48381165 /

    $ ./garbage_collect shell_history.txt -f 70000000 30000000
    24933642 /d

## Requirements and notes

- Define **structures** (and **enumerations**, if applicable) for the parsed
  information from the files.
- For keeping the “records”, use some **dynamic** data structure.
  - Don't forget to consider pros and cons of using _specific_ data structures
    before going through implementing.
- You **are not required** to produce 1:1 output to the provided examples, they
  are just a hint to not waste your time tinkering with a user experience.
- If any of the operations on the input files should fail,
  **you are expected to** handle the situation _accordingly_.
- Failures of any other common functions (e.g. functions used for memory
  management) should be handled in **the same way** as they were in the
  homeworks and seminars.
- Your program **must free** all the resources before exiting.

[^1]: Also applies to Fedora, but… we use arch btw :wink:
[^2]: duh!
