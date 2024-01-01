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

  // finding the distances from the bottom left corner to the 2 rows above
  auto cost = bf_finite(g, std::make_pair(1, 9), std::make_pair(1, 7));
  std::cout << "[Finite BF] Cost: " << cost << "\n";

  auto distances = bellman_ford(g, std::make_pair(1, 9));
  std::cout << "[Bellman-Ford] Cost: " << distances[7][1] << "\n";

  return 0;
}
