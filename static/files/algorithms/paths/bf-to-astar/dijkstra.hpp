#ifndef _DIJKSTRA_HPP
#define _DIJKSTRA_HPP

#include <algorithm>
#include <cassert>
#include <functional>
#include <optional>
#include <utility>
#include <vector>

#include "graph.hpp"

namespace {
using pqueue_item_t = std::pair<int, vertex_t>;
using pqueue_t = std::vector<pqueue_item_t>;

auto pushq(pqueue_t& q, pqueue_item_t v) -> void {
  q.push_back(v);
  std::push_heap(q.begin(), q.end(), std::greater<>{});
}

auto popq(pqueue_t& q) -> std::optional<pqueue_item_t> {
  if (q.empty()) {
    return {};
  }

  std::pop_heap(q.begin(), q.end(), std::greater<>{});
  pqueue_item_t top = q.back();
  q.pop_back();

  return std::make_optional(top);
}
}  // namespace

auto dijkstra(const graph& g, const vertex_t& source)
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

  pqueue_t priority_queue{std::make_pair(0, source)};
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
        pushq(priority_queue, std::make_pair(distances[y + dy][x + dx], v));
      }
    }
  }

  return distances;
}

#endif /* _DIJKSTRA_HPP */
