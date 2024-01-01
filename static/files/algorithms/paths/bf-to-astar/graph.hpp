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

    auto md = std::abs(ux - vx) + std::abs(uy - vy);
    switch (md) {
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
