---
id: index
slug: /paths/bf-to-astar
title: From BF to A*
description: |
  Figuring out shortest-path problem from the BF to the A* algorithm.
tags:
- cpp
- brute force
- bellman ford
- dynamic programming
- dijkstra
- greedy
- a star
last_update:
  date: 2024-01-01
---

## Intro

We will delve into the details and ideas of the most common path-finding
algorithms. For the purpose of demonstrating some “features” of the improved
algorithms, we will use a 2D map with some rules that will allow us to show cons
and pros of the shown algorithms.

Let's have a look at the example map:
```
#############
#..#..*.*.**#
##***.....**#
#..########.#
#...###...#.#
#..#...##.#.#
#..#.*.#..#.#
#....#....#.#
########*.*.#
#...........#
#############
```

We can see three different kinds of cells:
1. `#` which represent walls, that cannot be entered at all
2. `*` which represent vortices that can be entered at the cost of 5 coins
3. `.` which represent normal cells that can be entered for 1 coin (which is the
   base price of moving around the map)

Let's dissect a specific position on the map to get a better grasp of the rules:
```
 .
#S*
 .
```
We are standing in the cell marked with `S` and we have the following options
* move to the north (`.`) with the cost of 1 coin,
* move to the west (`#`) **is not** allowed because of the wall,
* move to the east (`*`) is allowed with the cost of 5 coins, and finally
* move to the south (`.`) with the cost of 1 coin.

:::info

Further on I will follow the same scheme for marking cells with an addition of
`D` to denote the _destination_ to which we will be finding the shortest path.

:::

## Boilerplate

For working with this map I have prepared a basic structure for the graph in C++
that will abstract some of the internal workings of our map, namely:
* remembers the costs of moving around
* provides a simple function that returns price for moving **directly** between
  two positions on the map
* allows us to print the map out, just in case we'd need some adjustments to be
  made

We can see the `graph` header here:
```cpp
#ifndef _GRAPH_HPP
#define _GRAPH_HPP

#include <cmath>
#include <limits>
#include <ostream>
#include <utility>
#include <vector>

using vertex_t = std::pair<int, int>;

struct graph {
  graph(const std::vector<std::vector<char>>& map)
      : map(map),
        _height(static_cast<int>(map.size())),
        _width(map.empty() ? 0 : static_cast<int>(map[0].size())) {}

  static auto unreachable() -> int { return UNREACHABLE; }
  static auto normal_cost() -> int { return NORMAL_COST; }
  static auto vortex_cost() -> int { return VORTEX_COST; }

  auto cost(const vertex_t& u, const vertex_t& v) const -> int {
    auto [ux, uy] = u;
    auto [vx, vy] = v;

    auto hd = std::abs(ux - vx) + std::abs(uy - vy);
    switch (hd) {
      // ‹u = v›; staying on the same cell
      case 0:
        return 0;
      // ‹u› and ‹v› are neighbours
      case 1:
        break;
      // ‹u› and ‹v› are not neighbouring cells
      default:
        return UNREACHABLE;
    }

    // boundary check
    if (vy < 0 || vy >= _height || vx < 0 || vx >= _width) {
      return UNREACHABLE;
    }

    switch (map[vy][vx]) {
      case '#':
        return UNREACHABLE;
      case '*':
        return VORTEX_COST;
      default:
        return NORMAL_COST;
    }
  }

  auto width() const -> int { return _width; }
  auto height() const -> int { return _height; }
  auto has(const vertex_t& v) const -> bool {
    auto [x, y] = v;
    return (0 <= y && y < _height) && (0 <= x && x < _width);
  }

  friend std::ostream& operator<<(std::ostream& os, const graph& g);

 private:
  std::vector<std::vector<char>> map;
  int _height, _width;

  const static int UNREACHABLE = std::numeric_limits<int>::max();
  // XXX: modify here to change the price of entering the vortex
  const static int VORTEX_COST = 5;
  const static int NORMAL_COST = 1;
};

std::ostream& operator<<(std::ostream& os, const graph& g) {
  for (const auto& row : g.map) {
    for (const char cell : row) {
      os << cell;
    }
    os << "\n";
  }

  return os;
}

#endif /* _GRAPH_HPP */
```

:::info Source code

You can find all the source code referenced in this series
[here](pathname:///files/algorithms/paths/bf-to-astar.tar.gz).

:::

Let's finally start with some algorithms!
