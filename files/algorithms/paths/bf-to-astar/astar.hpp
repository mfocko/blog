#ifndef _ASTAR_HPP
#define _ASTAR_HPP

#include <algorithm>
#include <cassert>
#include <functional>
#include <optional>
#include <utility>
#include <vector>

#include "graph.hpp"

auto astar(const graph& g, const vertex_t& source, const auto& h)
    -> std::vector<std::vector<int>> {
  // make sure that ‹source› exists
  assert(g.has(source));

  // initialize the distances
  std::vector<std::vector<int>> distances(
      g.height(), std::vector(g.width(), graph::unreachable()));

  // initialize the visited
  std::vector<std::vector<bool>> visited(g.height(),
                                         std::vector(g.width(), false));

  // ‹source› destination denotes the beginning where the cost is 0
  auto [sx, sy] = source;
  distances[sy][sx] = 0;

  pqueue_t priority_queue{std::make_pair(0 + h(source), source)};
  std::optional<pqueue_item_t> item{};
  while ((item = popq(priority_queue))) {
    auto [cost, u] = *item;
    auto [x, y] = u;

    // we have already found the shortest path
    if (visited[y][x]) {
      continue;
    }
    visited[y][x] = true;

    for (const auto& [dx, dy] : DIRECTIONS) {
      auto v = std::make_pair(x + dx, y + dy);
      auto cost = g.cost(u, v);

      // if we can move to the cell and it's better, relax¹ it and update queue
      if (cost != graph::unreachable() &&
          distances[y][x] + cost < distances[y + dy][x + dx]) {
        distances[y + dy][x + dx] = distances[y][x] + cost;
        pushq(priority_queue,
              std::make_pair(distances[y + dy][x + dx] + h(v), v));
      }
    }
  }

  return distances;
}

#endif /* _ASTAR_HPP */
