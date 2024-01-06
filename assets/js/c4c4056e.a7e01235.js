"use strict";(self.webpackChunkfi=self.webpackChunkfi||[]).push([[635],{61381:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var r=n(85893),s=n(11151);const o={id:"index",slug:"/paths/bf-to-astar",title:"From BF to A*",description:"Figuring out shortest-path problem from the BF to the A* algorithm.\n",tags:["cpp","brute force","bellman ford","dynamic programming","dijkstra","greedy","a star"],last_update:{date:new Date("2024-01-01T00:00:00.000Z")}},a=void 0,i={id:"paths/2024-01-01-bf-to-astar/index",title:"From BF to A*",description:"Figuring out shortest-path problem from the BF to the A* algorithm.\n",source:"@site/algorithms/11-paths/2024-01-01-bf-to-astar/index.md",sourceDirName:"11-paths/2024-01-01-bf-to-astar",slug:"/paths/bf-to-astar",permalink:"/algorithms/paths/bf-to-astar",draft:!1,unlisted:!1,editUrl:"https://github.com/mfocko/blog/tree/main/algorithms/11-paths/2024-01-01-bf-to-astar/index.md",tags:[{label:"cpp",permalink:"/algorithms/tags/cpp"},{label:"brute force",permalink:"/algorithms/tags/brute-force"},{label:"bellman ford",permalink:"/algorithms/tags/bellman-ford"},{label:"dynamic programming",permalink:"/algorithms/tags/dynamic-programming"},{label:"dijkstra",permalink:"/algorithms/tags/dijkstra"},{label:"greedy",permalink:"/algorithms/tags/greedy"},{label:"a star",permalink:"/algorithms/tags/a-star"}],version:"current",lastUpdatedAt:1704067200,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{id:"index",slug:"/paths/bf-to-astar",title:"From BF to A*",description:"Figuring out shortest-path problem from the BF to the A* algorithm.\n",tags:["cpp","brute force","bellman ford","dynamic programming","dijkstra","greedy","a star"],last_update:{date:"2024-01-01T00:00:00.000Z"}},sidebar:"autogeneratedBar",previous:{title:"Paths in Graphs",permalink:"/algorithms/category/paths-in-graphs"},next:{title:"BF",permalink:"/algorithms/paths/bf-to-astar/bf"}},l={},h=[{value:"Intro",id:"intro",level:2},{value:"Boilerplate",id:"boilerplate",level:2}];function c(t){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"intro",children:"Intro"}),"\n",(0,r.jsx)(e.p,{children:"We will delve into the details and ideas of the most common path-finding\nalgorithms. For the purpose of demonstrating some \u201cfeatures\u201d of the improved\nalgorithms, we will use a 2D map with some rules that will allow us to show cons\nand pros of the shown algorithms."}),"\n",(0,r.jsx)(e.p,{children:"Let's have a look at the example map:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"#############\n#..#..*.*.**#\n##***.....**#\n#..########.#\n#...###...#.#\n#..#...##.#.#\n#..#.*.#..#.#\n#....#....#.#\n########*.*.#\n#...........#\n#############\n"})}),"\n",(0,r.jsx)(e.p,{children:"We can see three different kinds of cells:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"#"})," which represent walls, that cannot be entered at all"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"*"})," which represent vortices that can be entered at the cost of 5 coins"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"."})," which represent normal cells that can be entered for 1 coin (which is the\nbase price of moving around the map)"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Let's dissect a specific position on the map to get a better grasp of the rules:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:" .\n#S*\n .\n"})}),"\n",(0,r.jsxs)(e.p,{children:["We are standing in the cell marked with ",(0,r.jsx)(e.code,{children:"S"})," and we have the following options"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["move to the north (",(0,r.jsx)(e.code,{children:"."}),") with the cost of 1 coin,"]}),"\n",(0,r.jsxs)(e.li,{children:["move to the west (",(0,r.jsx)(e.code,{children:"#"}),") ",(0,r.jsx)(e.strong,{children:"is not"})," allowed because of the wall,"]}),"\n",(0,r.jsxs)(e.li,{children:["move to the east (",(0,r.jsx)(e.code,{children:"*"}),") is allowed with the cost of 5 coins, and finally"]}),"\n",(0,r.jsxs)(e.li,{children:["move to the south (",(0,r.jsx)(e.code,{children:"."}),") with the cost of 1 coin."]}),"\n"]}),"\n",(0,r.jsx)(e.admonition,{type:"info",children:(0,r.jsxs)(e.p,{children:["Further on I will follow the same scheme for marking cells with an addition of\n",(0,r.jsx)(e.code,{children:"D"})," to denote the ",(0,r.jsx)(e.em,{children:"destination"})," to which we will be finding the shortest path."]})}),"\n",(0,r.jsx)(e.h2,{id:"boilerplate",children:"Boilerplate"}),"\n",(0,r.jsx)(e.p,{children:"For working with this map I have prepared a basic structure for the graph in C++\nthat will abstract some of the internal workings of our map, namely:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"remembers the costs of moving around"}),"\n",(0,r.jsxs)(e.li,{children:["provides a simple function that returns price for moving ",(0,r.jsx)(e.strong,{children:"directly"})," between\ntwo positions on the map"]}),"\n",(0,r.jsx)(e.li,{children:"allows us to print the map out, just in case we'd need some adjustments to be\nmade"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["We can see the ",(0,r.jsx)(e.code,{children:"graph"})," header here:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"#ifndef _GRAPH_HPP\n#define _GRAPH_HPP\n\n#include <cmath>\n#include <limits>\n#include <ostream>\n#include <utility>\n#include <vector>\n\nusing vertex_t = std::pair<int, int>;\n\nstruct graph {\n  graph(const std::vector<std::vector<char>>& map)\n      : map(map),\n        _height(static_cast<int>(map.size())),\n        _width(map.empty() ? 0 : static_cast<int>(map[0].size())) {}\n\n  static auto unreachable() -> int { return UNREACHABLE; }\n  static auto normal_cost() -> int { return NORMAL_COST; }\n  static auto vortex_cost() -> int { return VORTEX_COST; }\n\n  auto cost(const vertex_t& u, const vertex_t& v) const -> int {\n    auto [ux, uy] = u;\n    auto [vx, vy] = v;\n\n    auto md = std::abs(ux - vx) + std::abs(uy - vy);\n    switch (md) {\n      // \u2039u = v\u203a; staying on the same cell\n      case 0:\n        return 0;\n      // \u2039u\u203a and \u2039v\u203a are neighbours\n      case 1:\n        break;\n      // \u2039u\u203a and \u2039v\u203a are not neighbouring cells\n      default:\n        return UNREACHABLE;\n    }\n\n    // boundary check\n    if (vy < 0 || vy >= _height || vx < 0 || vx >= _width) {\n      return UNREACHABLE;\n    }\n\n    switch (map[vy][vx]) {\n      case '#':\n        return UNREACHABLE;\n      case '*':\n        return VORTEX_COST;\n      default:\n        return NORMAL_COST;\n    }\n  }\n\n  auto width() const -> int { return _width; }\n  auto height() const -> int { return _height; }\n  auto has(const vertex_t& v) const -> bool {\n    auto [x, y] = v;\n    return (0 <= y && y < _height) && (0 <= x && x < _width);\n  }\n\n  friend std::ostream& operator<<(std::ostream& os, const graph& g);\n\n private:\n  std::vector<std::vector<char>> map;\n  int _height, _width;\n\n  const static int UNREACHABLE = std::numeric_limits<int>::max();\n  // XXX: modify here to change the price of entering the vortex\n  const static int VORTEX_COST = 5;\n  const static int NORMAL_COST = 1;\n};\n\nstd::ostream& operator<<(std::ostream& os, const graph& g) {\n  for (const auto& row : g.map) {\n    for (const char cell : row) {\n      os << cell;\n    }\n    os << \"\\n\";\n  }\n\n  return os;\n}\n\n#endif /* _GRAPH_HPP */\n"})}),"\n",(0,r.jsx)(e.admonition,{title:"Source code",type:"info",children:(0,r.jsxs)(e.p,{children:["You can find all the source code referenced in this series\n",(0,r.jsx)(e.a,{href:"pathname:///files/algorithms/paths/bf-to-astar.tar.gz",children:"here"}),"."]})}),"\n",(0,r.jsx)(e.p,{children:"Let's finally start with some algorithms!"})]})}function d(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(c,{...t})}):c(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>i,a:()=>a});var r=n(67294);const s={},o=r.createContext(s);function a(t){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);