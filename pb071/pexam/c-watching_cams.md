---
title: Practice exam C
description: |
  Stalking cars…
---

# Watching Cams

:::caution Exam environment

* During the exam you will be provided with a barebone _exam session_ on the
  _faculty computers_.
* In browser you are only allowed to have the following tabs open:
  * [C documentation](https://en.cppreference.com)
  * page containing the assignment
* You **are not** allowed to use your own source code, e.g. prepared beforehand
  or from the seminars.
* You have **5 minutes** to read through the assignment and ask any follow-up
  questions should be there something unclear.
* You have **60 minutes** to work on the assignment, afterward your work will be
  discussed with your seminar tutor.

:::

Your task is to write a program `cams` that will be processing input from the
cams that are capable of identifying license plates on the cars and then
evaluate the queries on the given data. Your contributions to the society are
very much appreciated and may (or may not) be used for (each or none) of the
following purposes:

* stalking people leaving and coming back home,
* retroactively making people pay for the parking,
* providing evidence of people speeding on highways,
* tracking people that don't pay tolls, or
* convict employees leaving the work prematurely.

## Format of the input files

Input for your program consists of the data from the cameras and queries. You
will be **always** given the data from the cameras as a path to a file, whereas
user should be able to specify `-` (i.e. `stdin`) as the path to queries.

:::tip Validation of data

For the sake of simplicity (and partially relieving the time pressure), you
**are not** required to validate the dates you are given on the input (e.g. leap
years, days in months, etc.).

This is caused by the fact that you will be given just a timestamp that you
**don't** need to process in any (other than suggested ways for debugging).

:::

### Data from the cameras

Each “scan” (i.e. reading) of the cameras consists of the following data:

* _camera ID_:  non-negative integer identifying a camera
* _plate_:  string of unknown length that can consist of any characters apart
  from whitespace
* _timestamp_: timedate of the scan as an unsigned integer (represented as a
  UNIX time)

  :::tip

  When programming on UN\*X(-like) systems, you can assume that the `time_t`
  structure from the system header `time.h` **is** the `unsigned int` that you
  are provided in the input file.

  :::

And they are compiled into one reading such as:

    camera_ID: plate timestamp

There should be always **at least one** space in between each part of the
reading. Reading are separated by the commas, which may, but don't have to, be
accompanied by whitespace around.

#### Examples

Few examples of the data from the cameras follow

```
10: ABC-12-34 1664608712, 289: XYZ-98-76         1665416417,
25: ABC-12-34   1633078256  , 42: TryToCatchMe 1671602419,
11: EL9-987 1679541338 ,2 :  Foo-666 1683170082,42: YourMum 1683170082,
42: TryToCatchMe 1671602419   ,    1234: TryToCatchMe 1671602419,
19: ABC-12-34 1664659649, 69:YouShould-not-pLaCe-4ny-expectations%on^the(input 1680307994,
9 : 9B9-161 1665416417     , 10: 1a1-999 1671602419,1:lmao 1633078256
```

### Queries

Querying the processed data is done by providing a license plate. You can expect
that the license plates are separated by `\n` (newline, also known as
_ňjůlajn_) **with no other whitespace around**.

#### Examples

Few examples of the queries follow

    ABC-12-34
    TryToCatchMe
    Foo-666
    EL9-987


## Format of the output

:::info

All the examples above consider using data from the first example of the input.

:::

You may encounter these situations (and handle them in the following order):
1. License plate was not found

   ```
   404-not-found
   *** 404-not-found ***
      License plate was not found.
   ```
1. License plate was found

   In such case, you are expected to print out the dates and cameras that has
   captured the license plate.

   If there are multiple scans present and the timespan (i.e. time difference
   between the scans is bigger than 60 minutes, you are to separate them by a
   newline).

   ```
   ABC-12-34
   *** ABC-12-34 ***
      25: Fri Oct  1 10:50:56 2021
      10: Sat Oct  1 09:18:32 2022

      19: Sat Oct  1 23:27:29 2022
   ```

   :::tip

   Since you are given the timestamp in a `time_t` compatible type on UN\*X, you
   can safely use `ctime` for printing the timestamp as a _human readable_ time
   when outputting the date and time.

   :::


:::tip

For a better readability you can include one more newline after the last line
of the output.

:::

## Example usage

You can also have a look at example usage of your program. We can run your
program from the shell like

    $ ./cams example_1.txt -

And then provide the queries, since we specified `-` as the file for the queries

    > ABC-12-34
    *** ABC-12-34 ***
       25: Fri Oct  1 10:50:56 2021
       10: Sat Oct  1 09:18:32 2022

       19: Sat Oct  1 23:27:29 2022

    > NonExistentLicensePlate
    *** NonExistentLicensePlate ***
       License plate was not found.

    > EL9-987
    *** EL9-987 ***
       11: Thu Mar 23 04:15:38 2023

    > TryToCatchMe
    *** TryToCatchMe ***
       42: Wed Dec 21 07:00:19 2022
       42: Wed Dec 21 07:00:19 2022
       1234: Wed Dec 21 07:00:19 2022

:::info

Lines prefixed with `> ` in the example above represent the user input.

:::

## Requirements and notes

* Define **structures** (and **enumerations**, if applicable) for the parsed
  information from the files.
* For keeping the “records”, use some **dynamic** data structure.
  * Don't forget to consider pros and cons of using _specific_ data structures
    before going through implementing.
* You **are not required** to produce 1:1 output to the provided examples, they
  are just a hint to not waste your time tinkering with a user experience.
* If any of the operations on the input files should fail,
  **you are expected to** handle the situation _accordingly_.
* Failures of any other common functions (e.g. functions used for memory
  management) should be handled in **the same way** as they were in the
  homeworks and seminars.
* Your program **must free** all the resources before exiting.
