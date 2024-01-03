#ifndef _BF_HPP
#define _BF_HPP

#include <cassert>
#include <iostream>
#include <utility>
#include <vector>

#include "graph.hpp"

static auto _check_vertex(const graph& g,
                          std::vector<std::vector<int>>& distances, int v,
                          bool check_only = false) -> bool {
  bool improvement_found = false;

  // unpack the vertex coordinates
  int y = v / g.width();
  int x = v % g.width();

  // skip the cells we cannot reach
  if (distances[y][x] == graph::unreachable()) {
    return false;
  }

  // go through the neighbours
  auto u = std::make_pair(x, y);
  for (const auto& [dx, dy] : DIRECTIONS) {
    auto v = std::make_pair(x + dx, y + dy);
    auto cost = g.cost(u, v);

    // if we can move to the cell and it's better, relax¹ it
    if (cost != graph::unreachable() &&
        distances[y][x] + cost < distances[y + dy][x + dx]) {
      if (check_only) {
        return true;
      }

      distances[y + dy][x + dx] = distances[y][x] + cost;
      improvement_found = true;
    }
  }

  return improvement_found;
}

auto bf(const graph& g, const vertex_t& source, const vertex_t& destination)
    -> int {
  // ‹source› must be within the bounds
  assert(g.has(source));

  // ‹destination› must be within the bounds
  assert(g.has(destination));

  // we need to initialize the distances
  std::vector<std::vector<int>> distances(
      g.height(), std::vector(g.width(), graph::unreachable()));

  // ‹source› destination denotes the beginning where the cost is 0
  auto [sx, sy] = source;
  distances[sy][sx] = 0;

  // now we need to improve the paths as long as possible
  bool improvement_found;
  do {
    // reset the flag at the beginning
    improvement_found = false;

    // go through all of the vertices
    for (int v = g.height() * g.width() - 1; v >= 0; --v) {
      improvement_found = _check_vertex(g, distances, v) || improvement_found;
    }
  } while (improvement_found);

  return distances[destination.second][destination.first];
}

auto bf_finite(const graph& g, const vertex_t& source,
               const vertex_t& destination) -> int {
  // ‹source› must be within the bounds
  assert(g.has(source));

  // ‹destination› must be within the bounds
  assert(g.has(destination));

  // we need to initialize the distances
  std::vector<std::vector<int>> distances(
      g.height(), std::vector(g.width(), graph::unreachable()));

  // ‹source› destination denotes the beginning where the cost is 0
  auto [sx, sy] = source;
  distances[sy][sx] = 0;

  // now we only iterate as many times as cells that we have
  for (int i = g.height() * g.width(); i > 0; --i) {
    // go through all of the vertices
    for (int v = g.height() * g.width() - 1; v >= 0; --v) {
      _check_vertex(g, distances, v);
    }
  }

  return distances[destination.second][destination.first];
}

auto bellman_ford(const graph& g, const vertex_t& source)
    -> std::vector<std::vector<int>> {
  // ‹source› must be within the bounds
  assert(g.has(source));

  // we need to initialize the distances
  std::vector<std::vector<int>> distances(
      g.height(), std::vector(g.width(), graph::unreachable()));

  // ‹source› destination denotes the beginning where the cost is 0
  auto [sx, sy] = source;
  distances[sy][sx] = 0;

  // now we only iterate as many times as cells that we have
  for (int i = g.height() * g.width(); i > 0; --i) {
    // go through all of the vertices
    for (int v = g.height() * g.width() - 1; v >= 0; --v) {
      _check_vertex(g, distances, v);
    }
  }

  // now we check for the negative loops
  for (int v = g.height() * g.width() - 1; v >= 0; --v) {
    if (_check_vertex(g, distances, v, true)) {
      std::cerr << "[Bellman-Ford] Found a negative loop\n";
      break;
    }
  }

  return distances;
}

#endif /* _BF_HPP */
