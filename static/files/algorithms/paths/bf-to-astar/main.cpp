#include <iostream>
#include <string>
#include <utility>
#include <vector>

#include "astar.hpp"
#include "bf.hpp"
#include "dijkstra.hpp"
#include "graph.hpp"

auto line_to_vector(const std::string& l) -> std::vector<char> {
  return std::vector(l.begin(), l.end());
}

auto main() -> int {
  graph g{std::vector{
      line_to_vector(std::string("#############")),
      line_to_vector(std::string("#..#..*.*.**#")),
      line_to_vector(std::string("##***.....**#")),
      line_to_vector(std::string("#..########.#")),
      line_to_vector(std::string("#...###...#.#")),
      line_to_vector(std::string("#..#...##.#.#")),
      line_to_vector(std::string("#..#.*.#..#.#")),
      line_to_vector(std::string("#....#....#.#")),
      line_to_vector(std::string("########*.*.#")),
      line_to_vector(std::string("#...........#")),
      line_to_vector(std::string("#############")),
  }};
  std::cout << "Normal cost: " << g.normal_cost() << "\n";
  std::cout << "Vortex cost: " << g.vortex_cost() << "\n";
  std::cout << "Graph:\n" << g;

  return 0;
}
