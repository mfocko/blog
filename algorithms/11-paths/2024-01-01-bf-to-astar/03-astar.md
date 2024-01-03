---
id: astar
slug: /paths/bf-to-astar/astar
title: A* algorithm
description: |
  Moving from Dijkstra's algorithm into the A* algorithm.
tags:
  - cpp
  - dynamic programming
  - astar
last_update:
  date: 2024-01-03
---

## Intro

Let's start by the recap of what we've achieved so far:

1. We have implemented a naïve brute-force algorithm that tries to relax paths
   as long as there are any paths to be relaxed.
2. Then we have fixed an issue caused by negative loops that can result in
   a non-terminating run of our brute-force method. At this moment we have made
   some small arguments why are bounding is enough and doesn't prevent any
   shortest path to _not be_ discovered.
3. Finally we have converted our bounded brute-force algorithm into the
   Bellman-Ford algorithm.
4. We have mentioned the worst-case time complexity of our bounded naïve
   approach and also the Bellman-Ford algorithm. Our worst-case depended on the
   fact that we assumed the worst possible ordering of the relaxations. However
   we could also try to relax in the most ideal ordering which could result in a
   faster algorithm and that's how we got to the Dijkstra's algorithm.

Now the question is, could we improve the Dijkstra's algorithm to get even
better results? And the answer is _maybe_!

Dijkstra's algorithm chooses the next cheapest vertex for relaxing. This is good
as long as there is no additional information. However, imagine a roadmap of
some country. If you're in the middle of the map and you want to go south, it
doesn't make much sense for you to go to the north (in the opposite direction),
but a little bit might make sense, so that you can switch to highway and go much
faster.

The important question here is how to _influence_ the algorithm, so that it does
choose the path that _makes more sense_ rather than the one that costs the
least.

## A\* description

The _A\* algorithm_ can be considered a modification of Dijkstra's algorithm. The
cost is still the same, we cannot change it, right? However when we pick the
vertices from the heap, we can influence the order by some _heuristic_. In this
case, we introduce a function that can suggest how feasible the vertex is.

## Roadmap heuristic

Let's have a look at the heuristic we could use for the roadmap example. There
are roads (the edges) and towns (the vertices). Cost could be an average time to
travel the road. What heuristic could we use to influence our algorithm to
choose a better ordering of the vertices when relaxing?

In the former example we've said that it doesn't make much sense to go in the
opposite direction than our goal is… We could choose the distance from our goal
as the heuristic, e.g. right now we're 100 km away from our goal, using this
road makes us 50 km away and using the other road we will be 200 km away.

## Heuristic for our map

Our map is a bit simpler, but we can use a very similar principle. We will use
the _Manhattan distance_, which is defined in a following way:

$$
\vert x_a - x_b \vert + \vert y_a - y_b \vert
$$

Since we cannot move in diagonals, it makes sense to maintain the distance in
the actual steps from the goal.

## Passing the heuristic

In our case, when we're using C++, we can just template the function that will
calculate the shortest path and pass the heuristic as a parameter.

## Implementation

Actual implementation is very easy once we have the Dijkstra's algorithm:

```cpp
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
```

## Running on our map

For this algorithm I will also show the example of a call:

```cpp
distances = astar(g, std::make_pair(1, 9), [](const auto& u) {
  auto [x, y] = u;
  return std::abs(1 - x) + std::abs(7 - y);
});
std::cout << "[A*] Cost: " << distances[7][1] << "\n";
```

First argument to the function is the graph itself. Second argument is the
source vertex where we start. And finally the lambda returns
_Manhattan distance_ to the goal.

And we get the following result:

```
Normal cost: 1
Vortex cost: 5
Graph:
#############
#..#..*.*.**#
##***.....**#
#..########.#
#...###...#.#
#..#...##.#.#
#..#.*.#..#.#
#D...#....#.#
########*.*.#
#S..........#
#############
[Finite BF] Cost: 22
[Bellman-Ford] Cost: 22
[Dijkstra] Cost: 22
[A*] Cost: 22
```

## Comparison

Now you may wonder how does it compare to the previous algorithms. Supposedly it
should be faster. Let's add counters and debugging output when we update
distance to our goal. And now if we run our code, we get the following output:

```
Normal cost: 1
Vortex cost: 5
Graph:
#############
#..#..*.*.**#
##***.....**#
#..########.#
#...###...#.#
#..#...##.#.#
#..#.*.#..#.#
#D...#....#.#
########*.*.#
#S..........#
#############
Relaxing path to goal in 40. relaxation
Relaxing path to goal in 68. relaxation
Relaxing path to goal in 89. relaxation
[Finite BF] Cost: 22
Relaxing path to goal in 40. relaxation
Relaxing path to goal in 68. relaxation
Relaxing path to goal in 89. relaxation
[Bellman-Ford] Cost: 22
Relaxing path to goal in 41. iteration
[Dijkstra] Cost: 22
Relaxing path to goal in 31. iteration
[A*] Cost: 22
```

From the output we can easily deduce that for both brute-force and Bellman-Ford,
which are in our case identical, we actually relax three times and for the last
time in the 89th iteration.

Dijkstra's algorithm manages to find the shortest path to our goal already in
the 41st iteration.

And finally after introducing some heuristic, we could find the shortest path
in the 31st iteration.

:::danger

Please keep in mind that choosing bad heuristic can actually lead to worse
results than using no heuristic at all.

:::

## Summary

And there we have it. We have made our way from the brute-force algorithm all
the way to more optimal ones. Hopefully we could notice how the small
improvements of the already existing algorithms made them much better.
