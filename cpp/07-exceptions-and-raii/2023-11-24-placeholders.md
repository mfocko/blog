---
slug: placeholders
title: Placeholders
description: |
  Placeholders that are quite convenient to use when working on the code.
last_update:
  date: 2023-11-24
---

Here we will try to implement some placeholders that you can find in other
languages, but I miss them in the C++. I'm taking the inspiration from languages
like Rust (all that we will implement) or Kotlin (`TODO`) that have them
implemented.

You may ask what placeholders do we need in the code, in our case we will be
talking about TODOs and unexpected situations, such as not implemented branches.

Namely we will implement

- `todo`,
- `unimplemented`, and
- `unreachable`.

## Design

If we take the two languages mentioned above as examples, there are at least two
ways how to implement them:

1. _panic_ when they are reached (as they do in Rust), or
2. _raise_ an exception when they are reached (as they do in Kotlin).

I will choose raising an exception, since the closest equivalent of _panic_ in
C++ would be `assert`s that are (by default) disabled in the _release builds_.

However I am too lazy to do:

```cpp
throw todo();
// or
throw todo("optional note");
```

Therefore we will implement exceptions and also wrap them in functions, so that
we can do:

```cpp
todo();
// or
todo("optional note");
```

:::tip

Wrapping them in a function (or macro) will allow us to do a little magic trick.

:::

## Implementation

We're going to utilize the exceptions, so we'll need to include the `exception`
header and we will start with a simple `_todo` exception class.

```cpp
#include <exception>
#include <string>

class _todo : public std::exception {
    std::string cause;

   public:
    _todo() : cause("not yet implemented") {}
    _todo(std::string&& excuse) : cause("not yet implemented: " + excuse) {}
    virtual const char* what() const throw() { return cause.c_str(); }
};
```

In this case we have 2 constructors:

1. default constructor without any parameters that will return just
   `not yet implemented`
2. and one parametrized with an “excuse” that will return string like:
   `not yet implemented: ‹excuse›`

If we were to use it now, we would need to do something like:

```cpp
#include "placeholders.hpp"

int main() {
    throw _todo();
    return 0;
}
```

## Wrapping in a function

I am a lazy person, so we will wrap the exception in a function that will throw
it:

```cpp
void todo() {
    throw _todo();
}
```

This can be used like:

```cpp
#include "placeholders.hpp"

int main() {
    todo();
    return 0;
}
```

## Magic trick

At the beginning I've mentioned that by wrapping the exceptions in a helper
functions that will throw them, we can do a nice magic trick :smile: This trick
will consist of formatted string and for that we will use
[`std::format`](https://en.cppreference.com/w/cpp/utility/format/format) that is
available since C++20.

We just need to add one more overload for our `todo()`:

```cpp
#include <format>

template< class... Args >
void todo(std::format_string<Args...> fmt, Args&&... args) {
    throw _todo(std::format(fmt, args...));
}
```

## Finishing off with 2 more exceptions

Now we can repeat the same process for the other two exceptions I've mentioned

- `unimplemented`, and
- `unreachable`.

In the end we should end up with something like this:

```cpp
#include <exception>
#include <format>
#include <string>

class _todo : public std::exception {
    std::string cause;

   public:
    _todo() : cause("not yet implemented") {}
    _todo(std::string&& excuse) : cause("not yet implemented: " + excuse) {}
    virtual const char* what() const throw() { return cause.c_str(); }
};

void todo() { throw _todo(); }

template <class... Args>
void todo(std::format_string<Args...> fmt, Args&&... args) {
    throw _todo(std::format(fmt, args...));
}

class _unimplemented : public std::exception {
    std::string cause;

   public:
    _unimplemented() : cause("not implemented") {}
    _unimplemented(std::string&& excuse)
        : cause("not implemented: " + excuse) {}
    virtual const char* what() const throw() { return cause.c_str(); }
};

void unimplemented() { throw _unimplemented(); }

template <class... Args>
void unimplemented(std::format_string<Args...> fmt, Args&&... args) {
    throw _unimplemented(std::format(fmt, args...));
}

class _unreachable : public std::exception {
    std::string cause;

   public:
    _unreachable() : cause("entered unreachable code") {}
    _unreachable(std::string&& excuse)
        : cause("entered unreachable code: " + excuse) {}
    virtual const char* what() const throw() { return cause.c_str(); }
};

void unreachable() { throw _unreachable(); }

template <class... Args>
void unreachable(std::format_string<Args...> fmt, Args&&... args) {
    throw _unreachable(std::format(fmt, args...));
}
```

:::info

Final source code: [`placeholders.hpp`](pathname:///files/cpp/exceptions-and-raii/placeholders/placeholders.hpp)

:::

## Post-mortem

One of the things, I've forgotten about, is the fact that static analysis of
your code has no way to know those helper functions we've created as shortcuts
don't return and just throw the exception right away. Therefore we need to mark
them with `[[noreturn]]` to let the static analysis know that we **never**
return from such functions. For example:

```cpp
[[noreturn]] void unreachable() { throw _unreachable(); }

template <class... Args>
[[noreturn]] void unreachable(std::format_string<Args...> fmt, Args&&... args) {
    throw _unreachable(std::format(fmt, args...));
}
```
