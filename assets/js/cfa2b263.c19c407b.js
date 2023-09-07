"use strict";(self.webpackChunkfi=self.webpackChunkfi||[]).push([[3086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={title:"Sort the matrix diagonally",description:"Compiler assisted development.",date:"2023-03-04T23:15",slug:"leetcode/sort-diagonally",authors:"mf",tags:["cpp","leetcode","iterators"],hide_table_of_contents:!1},r=void 0,s={permalink:"/blog/leetcode/sort-diagonally",editUrl:"https://gitlab.com/mfocko/blog/tree/main/blog/leetcode/sort-matrix-diagonally.md",source:"@site/blog/leetcode/sort-matrix-diagonally.md",title:"Sort the matrix diagonally",description:"Compiler assisted development.",date:"2023-03-04T23:15:00.000Z",formattedDate:"March 4, 2023",tags:[{label:"cpp",permalink:"/blog/tags/cpp"},{label:"leetcode",permalink:"/blog/tags/leetcode"},{label:"iterators",permalink:"/blog/tags/iterators"}],readingTime:16.99,hasTruncateMarker:!0,authors:[{name:"Matej Focko",email:"me+blog@mfocko.xyz",title:"a.k.a. @mf",url:"https://gitlab.com/mfocko",imageURL:"https://github.com/mfocko.png",key:"mf"}],frontMatter:{title:"Sort the matrix diagonally",description:"Compiler assisted development.",date:"2023-03-04T23:15",slug:"leetcode/sort-diagonally",authors:"mf",tags:["cpp","leetcode","iterators"],hide_table_of_contents:!1},prevItem:{title:"3rd week of Advent of Code '22 in Rust",permalink:"/blog/aoc-2022/3rd-week"},nextItem:{title:"2nd week of Advent of Code '22 in Rust",permalink:"/blog/aoc-2022/2nd-week"}},l={authorsImageUrls:[void 0]},d=[{value:"Problem description",id:"problem-description",level:2},{value:"Example",id:"example",level:3},{value:"Skeleton and initial adjustments",id:"skeleton-and-initial-adjustments",level:2},{value:"Na\xefve solution",id:"na\xefve-solution",level:2},{value:"Implementing the <code>diagonals</code>",id:"implementing-the-diagonals",level:2},{value:"Iterating over diagonals",id:"iterating-over-diagonals",level:3},{value:"Implementing the iterator over diagonals",id:"implementing-the-iterator-over-diagonals",level:3},{value:"Implementing the <code>diagonal</code> itself",id:"implementing-the-diagonal-itself",level:2},{value:"Implementing <code>diagonal_iter</code>",id:"implementing-diagonal_iter",level:3}],p={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let's try to solve one of the LeetCode challenges in easy and hard mode at the\nsame time."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Link to the problem: ",(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/sort-the-matrix-diagonally/"},"https://leetcode.com/problems/sort-the-matrix-diagonally/"))),(0,i.kt)("h2",{id:"problem-description"},"Problem description"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"matrix diagonal")," is a diagonal line of cells starting from some cell in\neither the topmost row or leftmost column and going in the bottom-right direction\nuntil reaching the matrix's end. For example, the ",(0,i.kt)("strong",{parentName:"p"},"matrix diagonal")," starting\nfrom ",(0,i.kt)("inlineCode",{parentName:"p"},"mat[2][0]"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"mat")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"6 x 3")," matrix, includes cells ",(0,i.kt)("inlineCode",{parentName:"p"},"mat[2][0]"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"mat[3][1]"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"mat[4][2]"),"."),(0,i.kt)("p",null,"Given an ",(0,i.kt)("inlineCode",{parentName:"p"},"m x n")," matrix ",(0,i.kt)("inlineCode",{parentName:"p"},"mat")," of integers, sort each matrix diagonal in ascending\norder and return the resulting matrix."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/01/21/1482_example_1_2.png",alt:"Image describing the problem"})),(0,i.kt)("h2",{id:"skeleton-and-initial-adjustments"},"Skeleton and initial adjustments"),(0,i.kt)("p",null,"We are given the following skeleton for the C++ and the given challenge:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<vector<int>> diagonalSort(vector<vector<int>>& mat) {\n        \n    }\n};\n")),(0,i.kt)("p",null,"The task is to sort the passed matrix diagonally and then return it. First of all,\nI don't like to solve this in a web browser, so we'll need to adjust it accordingly\nfor running it locally. We'll start by including the ",(0,i.kt)("inlineCode",{parentName:"p"},"vector")," header and using\nfully-qualified namespaces",(0,i.kt)("sup",{parentName:"p",id:"fnref-1-b611be"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1-b611be",className:"footnote-ref"},"1"))," and also adding few tests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <cassert>\n#include <vector>\n\nusing matrix = std::vector<std::vector<int>>;\n\nclass Solution {\npublic:\n    matrix diagonalSort(matrix& mat)\n    {\n    }\n};\n\nstatic void test_case_1()\n{\n    // Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]\n    // Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]\n\n    Solution s;\n    assert((s.diagonalSort(std::vector { std::vector { 3, 3, 1, 1 },\n                std::vector { 2, 2, 1, 2 },\n                std::vector { 1, 1, 1, 2 } })\n        == std::vector { std::vector { 1, 1, 1, 1 },\n            std::vector { 1, 2, 2, 2 },\n            std::vector { 1, 2, 3, 3 } }));\n}\n\nstatic void test_case_2()\n{\n    // Input: mat =\n    // [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]\n    // Output:\n    // [[5,17,4,1,52,7],[11,11,25,45,8,69],[14,23,25,44,58,15],[22,27,31,36,50,66],[84,28,75,33,55,68]]\n\n    Solution s;\n    assert((s.diagonalSort(std::vector { std::vector { 11, 25, 66, 1, 69, 7 },\n                std::vector { 23, 55, 17, 45, 15, 52 },\n                std::vector { 75, 31, 36, 44, 58, 8 },\n                std::vector { 22, 27, 33, 25, 68, 4 },\n                std::vector { 84, 28, 14, 11, 5, 50 } })\n        == std::vector { std::vector { 5, 17, 4, 1, 52, 7 },\n            std::vector { 11, 11, 25, 45, 8, 69 },\n            std::vector { 14, 23, 25, 44, 58, 15 },\n            std::vector { 22, 27, 31, 36, 50, 66 },\n            std::vector { 84, 28, 75, 33, 55, 68 } }));\n}\n\nint main()\n{\n    test_case_1();\n    test_case_2();\n\n    return 0;\n}\n")),(0,i.kt)("p",null,"We need to return the matrix, but we're given a reference to the input matrix. We\ncan easily abuse the C++ here and just switch the reference to value, this way\nthe matrix will be copied when passed to the function, we can sort the copy and\njust return it back. And we also get yelled by the compiler for the fact that the\nmethod doesn't return anything yet, so to make it \u201cshut up\u201d we will just return\nthe input for now:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"-    matrix diagonalSort(matrix& mat)\n+    matrix diagonalSort(matrix mat)\n     {\n+        return mat;\n     }\n")),(0,i.kt)("p",null,"Now, we get the copy and we're good to go."),(0,i.kt)("h2",{id:"na\xefve-solution"},"Na\xefve solution"),(0,i.kt)("p",null,"As you may know, C++ offers a plethora of functions that can be used to your\nadvantage, given that you know how to \u201cbend\u201d the data structures accordingly."),(0,i.kt)("p",null,"What does that mean for us? Well, we have an ",(0,i.kt)("inlineCode",{parentName:"p"},"std::sort"),", we can use it, right?\nLet's have a look at it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template< class RandomIt >\nvoid sort( RandomIt first, RandomIt last );\n")),(0,i.kt)("p",null,"This overload is more than we need. What does it do? It just sorts the elements\nin the range ",(0,i.kt)("inlineCode",{parentName:"p"},"[first, last)")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"operator<")," on them. We can't sort the whole\nmatrix using this, but\u2026 we can sort just \xbbone\xab diagonal without doing much work\non our end."),(0,i.kt)("p",null,"What is the ",(0,i.kt)("inlineCode",{parentName:"p"},"RandomIt")," type though? If we look more into the documentation, we\ncan easily find the requirements for it and also learn that it's a ",(0,i.kt)("em",{parentName:"p"},"random access"),"\n",(0,i.kt)("em",{parentName:"p"},"iterator")," and allows swapping its values at the same time."),(0,i.kt)("admonition",{title:"Random access iterator",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"What is the ",(0,i.kt)("em",{parentName:"p"},"random access iterator")," though? We can find it in a documentation\nand see the following description:"),(0,i.kt)("blockquote",{parentName:"admonition"},(0,i.kt)("p",{parentName:"blockquote"},"A ",(0,i.kt)("strong",{parentName:"p"},"LegacyRandomAccessIterator")," is a ",(0,i.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/named_req/BidirectionalIterator"},"LegacyBidirectionalIterator"),"\nthat can be moved to point to any element in constant time.")),(0,i.kt)("p",{parentName:"admonition"},"After that we can see all the requirements for it being listed. I don't feel like\nreading them right now, so we will just use it and see where the compilation blows\nup, i.e. \u201c",(0,i.kt)("em",{parentName:"p"},"compiler-assisted development"),"\u201d",(0,i.kt)("sup",{parentName:"p",id:"fnref-2-b611be"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2-b611be",className:"footnote-ref"},"2"))," if you will ;)")),(0,i.kt)("p",null,"Now we know that we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"std::sort")," to sort the diagonal itself, but we also\nneed to get the diagonals somehow. I'm rather lazy, so I'll just delegate it to\nsomeone else",(0,i.kt)("sup",{parentName:"p",id:"fnref-3-b611be"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3-b611be",className:"footnote-ref"},"3")),". And that way we get"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"matrix diagonalSort(matrix mat)\n{\n    // we iterate over the diagonals\n    for (auto d : diagonals(mat)) {\n        // and we sort each diagonal\n        std::sort(d.begin(), d.end());\n    }\n\n    // we take the matrix by copy, so we can sort in-situ and return the copy\n    // that we sorted\n    return mat;\n}\n")),(0,i.kt)("p",null,"This solution looks very simple, doesn't it? Well, cause it is.\nLet's try compiling it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"matrix-sort.cpp:11:23: error: use of undeclared identifier 'diagonals' [clang-diagnostic-error]\n        for (auto d : diagonals(mat)) {\n                      ^\nFound compiler error(s).\nmake: *** [makefile:14: tidy] Error 1\n")),(0,i.kt)("p",null,"OK, seems about right. We haven't implemented the ",(0,i.kt)("inlineCode",{parentName:"p"},"diagonals")," yet. And based on\nwhat we've written so far, we need a function or a class ",(0,i.kt)("inlineCode",{parentName:"p"},"diagonals")," that will\ngive us the diagonals we need."),(0,i.kt)("h2",{id:"implementing-the-diagonals"},"Implementing the ",(0,i.kt)("inlineCode",{parentName:"h2"},"diagonals")),(0,i.kt)("p",null,"Cool, so we need the function that will let us go through each and every diagonal\nin our matrix. We use the ",(0,i.kt)("em",{parentName:"p"},"for-range")," loop, so whatever we get back from the\n",(0,i.kt)("inlineCode",{parentName:"p"},"diagonals")," must support ",(0,i.kt)("inlineCode",{parentName:"p"},".begin()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".end()"),". Since I am a masochist, we will\ndo such functionality for a matrix of any type, not just the ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," from the challenge."),(0,i.kt)("p",null,"As I said, we need to be able to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"construct the object"),(0,i.kt)("li",{parentName:"ul"},"get the beginning"),(0,i.kt)("li",{parentName:"ul"},"get the end (the \u201csentinel\u201d)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template <typename T>\nclass diagonals {\n    using matrix_t = std::vector<std::vector<T>>;\n\n    matrix_t& _matrix;\n\npublic:\n    diagonals(matrix_t& m)\n        : _matrix(m)\n    {\n    }\n    diagonals_iter begin()\n    {\n        /* TODO */\n    }\n    diagonals_iter end()\n    {\n        /* TODO */\n    }\n};\n")),(0,i.kt)("p",null,"Now we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"diagonals")," that we can use to go through the diagonals. We haven't\nimplemented the core of it yet. Let's go through what we have for now."),(0,i.kt)("p",null,"We have a templated class with templated ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," that is used as a placeholder for any\ntype we would store in the matrix. Because I'm lazy, I have defined the ",(0,i.kt)("inlineCode",{parentName:"p"},"matrix_t"),"\ntype that is a \u201cshortcut\u201d for ",(0,i.kt)("inlineCode",{parentName:"p"},"std::vector<std::vector<T>>"),", so I don't have to\ntype it out all the time. Of course, we need to store the matrix, we are given,\nas a private attribute. And then just have the constructor and the 2 methods we\nneed for the ",(0,i.kt)("em",{parentName:"p"},"for-range"),"."),(0,i.kt)("h3",{id:"iterating-over-diagonals"},"Iterating over diagonals"),(0,i.kt)("p",null,"Now that we have an object that will allow us to iterate through the diagonals,\nwe need to implement the iterating itself. We need to go through all of them, so\nwe have multiple options how to do so. I have decided to start from the \u201cmain\u201d\ndiagonal that starts at ",(0,i.kt)("inlineCode",{parentName:"p"},"(0, 0)")," index and then proceed with the diagonals starting\nin the first row, followed by the rest of the diagonals in the first column."),(0,i.kt)("p",null,"We need to be able to tell that we've iterated through all of them, and also we\nneed to know which diagonal is next. For that purpose we will pass the indices\nof the first cell on the diagonal. That way we can always tell how to move forward."),(0,i.kt)("p",null,"We will start by updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"begin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"end")," to reflect our choice accordingly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"diagonals_iter begin() { return diagonals_iter { _matrix, 0, 0 }; }\ndiagonals_iter end() { return diagonals_iter { _matrix, 0, _matrix.size() }; }\n")),(0,i.kt)("p",null,"For the ",(0,i.kt)("inlineCode",{parentName:"p"},"begin")," we return the first diagonal that starts at ",(0,i.kt)("inlineCode",{parentName:"p"},"(0, 0)"),". And because\nwe have decided to do the diagonals in the first column at the end, the first\ndiagonal that is not a valid one is the one at ",(0,i.kt)("inlineCode",{parentName:"p"},"(0, height)"),". Apart from the\nindices, we also need to pass reference to the matrix itself."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You may have noticed that we also include the diagonals that have length 1,\nspecifically the ones at ",(0,i.kt)("inlineCode",{parentName:"p"},"(0, height - 1)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"(width - 1, 0)"),". We are implementing\nan iterator that ",(0,i.kt)("strong",{parentName:"p"},"should not")," care about the way it's being used. Therefore, we\ndon't care about the fact they don't need to be sorted.")),(0,i.kt)("p",null,"Cool, let's leave the iterator itself to someone else, right?",(0,i.kt)("sup",{parentName:"p",id:"fnref-4-b611be"},(0,i.kt)("a",{parentName:"sup",href:"#fn-4-b611be",className:"footnote-ref"},"4"))),(0,i.kt)("h3",{id:"implementing-the-iterator-over-diagonals"},"Implementing the iterator over diagonals"),(0,i.kt)("p",null,"We can start with a simple skeleton based on the information that we pass from\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"diagonals"),". Also to utilize the ",(0,i.kt)("inlineCode",{parentName:"p"},"matrix_t")," and also contain implementation\ndetails hidden away, we will put this code into the ",(0,i.kt)("inlineCode",{parentName:"p"},"diagonals")," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class diagonals_iter {\n    matrix_t& m;\n    std::size_t x;\n    std::size_t y;\n\npublic:\n    diagonals_iter(matrix_t& matrix, std::size_t x, std::size_t y)\n        : m(matrix)\n        , x(x)\n        , y(y)\n    {\n    }\n};\n")),(0,i.kt)("p",null,"In this case we will be implementing a \u201csimple\u201d forward iterator, so we don't\nneed to implement a lot. Notably it will be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"inequality operator (we need to know when we reach the end and have nothing to\niterate over)"),(0,i.kt)("li",{parentName:"ul"},"preincrementation operator (we need to be able to move around the iterable)"),(0,i.kt)("li",{parentName:"ul"},"dereference operator (we need to be able to retrieve the objects we iterate\nover)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class diagonals_iter {\n    matrix_t& m;\n    std::size_t x;\n    std::size_t y;\n\npublic:\n    diagonals_iter(matrix_t& matrix, std::size_t x, std::size_t y)\n        : m(matrix)\n        , x(x)\n        , y(y)\n    {\n    }\n\n    bool operator!=(const diagonals_iter& rhs) const\n    {\n        // iterators are not equal if they reference different matrices, or\n        // their positions differ\n        return m != rhs.m || x != rhs.x || y != rhs.y;\n    }\n\n    diagonals_iter& operator++()\n    {\n        if (y != 0) {\n            // iterating through diagonals down the first column\n            y++;\n            return *this;\n        }\n\n        // iterating the diagonals along the first row\n        x++;\n        if (x == m.front().size()) {\n            // switching to diagonals in the first column\n            x = 0;\n            y++;\n        }\n\n        return *this;\n    }\n\n    diagonal<T> operator*() const { return diagonal { m, x, y }; }\n};\n")),(0,i.kt)("p",null,"Let's go one-by-one. Inequality operator is rather simple, just compare iterator's\nattributes field-by-field. If you think about it, checking inequality of two 2D\nvectors may be a bit inefficient, therefore, we can swap around and check it as\na last thing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"-        return m != rhs.m || x != rhs.x || y != rhs.y;\n+        return x != rhs.x || y != rhs.y || m != rhs.m;\n")),(0,i.kt)("p",null,"Preincrementation is where the magic happens. If you have a better look, you can\nsee two branches of this operation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"y != 0")," (we're iterating over the diagonals in the first column)\nIn this case, we just bump the row and we're done."),(0,i.kt)("li",{parentName:"ol"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"y == 0")," (we're iterating over the diagonals in the first row)\nIn this case, we bump the column and check if we haven't gotten out of bounds,\ni.e. the end of the first row. If we get out of the bounds, we're continuing\nwith the second diagonal in the first column.")),(0,i.kt)("p",null,"Dereferencing the iterator must \u201cyield\u201d something. In our case it will be the\ndiagonal that we want to sort. For sorting we need just the iterators that can\nmove around said diagonal. The simplest thing, we can do, is to delegate it to\nsomething else. In our case it will be a class called ",(0,i.kt)("inlineCode",{parentName:"p"},"diagonal"),"."),(0,i.kt)("h2",{id:"implementing-the-diagonal-itself"},"Implementing the ",(0,i.kt)("inlineCode",{parentName:"h2"},"diagonal")," itself"),(0,i.kt)("p",null,"After implementing the iterator over diagonals, we know that all we need to describe\na diagonal is the matrix itself and the \u201cstart\u201d of the diagonal (row and column).\nAnd we also know that the diagonal must provide some iterators for the ",(0,i.kt)("inlineCode",{parentName:"p"},"std::sort"),"\nfunction. We can start with the following skeleton:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template <typename T>\nclass diagonal {\n    using matrix_t = std::vector<std::vector<T>>;\n\n    matrix_t& matrix;\n    std::size_t x;\n    std::size_t y;\n\npublic:\n    diagonal(matrix_t& matrix, std::size_t x, std::size_t y)\n        : matrix(matrix)\n        , x(x)\n        , y(y)\n    {\n    }\n\n    diagonal_iter begin() const { return diagonal_iter { matrix, x, y }; }\n\n    diagonal_iter end() const\n    {\n        auto max_x = matrix[y].size();\n        auto max_y = matrix.size();\n\n        // we need to find the distance in which we get out of bounds (either in\n        // column or row)\n        auto steps = std::min(max_x - x, max_y - y);\n\n        return diagonal_iter { matrix, x + steps, y + steps };\n    }\n};\n")),(0,i.kt)("p",null,"Initialization is rather simple, we just \u201ckeep\u201d the stuff we get, ",(0,i.kt)("inlineCode",{parentName:"p"},"begin")," is the\nsimplest, we just delegate."),(0,i.kt)("p",null,"In case of the ",(0,i.kt)("inlineCode",{parentName:"p"},"end"),", it gets more complicated. We need to know where is the \u201cend\u201d\nof the diagonal. Since ",(0,i.kt)("inlineCode",{parentName:"p"},"end")," should point to the first element \u201cafter\u201d the iterable,\nwe know that it's the first position of the iterator where either ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," becomes\n",(0,i.kt)("inlineCode",{parentName:"p"},"matrix.size()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," becomes ",(0,i.kt)("inlineCode",{parentName:"p"},"matrix[y].size()"),". Also we are moving along diagonal,\nduh, therefore we can deduce the first \u201cposition\u201d afterwards by minimal amount of\nsteps to get out of the any column or row, hence ",(0,i.kt)("inlineCode",{parentName:"p"},"std::min(max_x - x, max_y - y)"),".\nFinal position is then computed simply by adding the steps to the beginning of\nthe diagonal."),(0,i.kt)("p",null,"Now we just need to finish the iterator for the diagonal itself and we're done."),(0,i.kt)("h3",{id:"implementing-diagonal_iter"},"Implementing ",(0,i.kt)("inlineCode",{parentName:"h3"},"diagonal_iter")),(0,i.kt)("p",null,"This part is the hardest from all we need to do. It's because of the requirements\nof the ",(0,i.kt)("inlineCode",{parentName:"p"},"std::sort")," that requires us to implement a ",(0,i.kt)("em",{parentName:"p"},"random access iterator"),". I have\nbriefly described it above, and \u201cin a nutshell\u201d it means that we need to implement\nan iterator that can move in constant time along the diagonal in any amount of\nsteps."),(0,i.kt)("p",null,"Let's go through all of the functionality that our iterator needs to support to\nbe used in ",(0,i.kt)("inlineCode",{parentName:"p"},"std::sort"),". We need the usual operations like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"equality/inequality"),(0,i.kt)("li",{parentName:"ul"},"incrementation"),(0,i.kt)("li",{parentName:"ul"},"dereferencing")),(0,i.kt)("p",null,"We will also add all the types that our iterator uses with the category of the\niterator, i.e. what interface it supports:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class diagonal_iter {\n    // we need to keep reference to the matrix itself\n    matrix_t& m;\n\n    // we need to be able to tell our current position\n    std::size_t x;\n    std::size_t y;\n\npublic:\n    using difference_type = std::ptrdiff_t;\n    using value_type = T;\n    using pointer = T*;\n    using reference = T&;\n    using iterator_category = std::random_access_iterator_tag;\n\n    diagonal_iter(matrix_t& matrix,\n        std::size_t x,\n        std::size_t y)\n        : m(matrix)\n        , x(x)\n        , y(y)\n    {\n    }\n\n    bool operator==(const diagonal_iter& rhs) const\n    {\n        return x == rhs.x && y == rhs.y && m == rhs.m;\n    }\n\n    diagonal_iter& operator++()\n    {\n        // we are moving along the diagonal, so we increment both \u2039x\u203a and \u2039y\u203a at\n        // the same time\n        x++;\n        y++;\n        return *this;\n    }\n\n    reference operator*() const { return m[y][x]; }\n};\n")),(0,i.kt)("p",null,"This is pretty similar to the previous iterator, but now we need to implement the\nremaining requirements of the ",(0,i.kt)("em",{parentName:"p"},"random access iterator"),". Let's see what those are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"decrementation - cause we need to be able to move backwards too, since ",(0,i.kt)("em",{parentName:"li"},"random "),(0,i.kt)("em",{parentName:"li"},"access iterator")," extends the interface of ",(0,i.kt)("em",{parentName:"li"},"bidirectional iterator")),(0,i.kt)("li",{parentName:"ul"},"moving the iterator in either direction by steps given as an integer"),(0,i.kt)("li",{parentName:"ul"},"being able to tell the distance between two iterators"),(0,i.kt)("li",{parentName:"ul"},"define an ordering on the iterators")),(0,i.kt)("p",null,"Let's fill them in:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class diagonal_iter {\n    // we need to keep reference to the matrix itself\n    matrix_t& m;\n\n    // we need to be able to tell our current position\n    std::size_t x;\n    std::size_t y;\n\npublic:\n    using difference_type = std::ptrdiff_t;\n    using value_type = T;\n    using pointer = T*;\n    using reference = T&;\n    using iterator_category = std::random_access_iterator_tag;\n\n    diagonal_iter(matrix_t& matrix,\n        std::size_t x,\n        std::size_t y)\n        : m(matrix)\n        , x(x)\n        , y(y)\n    {\n    }\n\n    bool operator==(const diagonal_iter& rhs) const\n    {\n        return x == rhs.x && y == rhs.y && m == rhs.m;\n    }\n\n    diagonal_iter& operator++()\n    {\n        // we are moving along the diagonal, so we increment both \u2039x\u203a and \u2039y\u203a at\n        // the same time\n        x++;\n        y++;\n        return *this;\n    }\n\n    reference operator*() const { return m[y][x]; }\n\n    // exactly opposite to the incrementation\n    diagonal_iter operator--()\n    {\n        x--;\n        y--;\n        return *this;\n    }\n\n    // moving \u2039n\u203a steps back is same as calling decrementation \u2039n\u203a-times, so we\n    // can just return a new iterator and subtract \u2039n\u203a from both coordinates in\n    // the matrix\n    diagonal_iter operator-(difference_type n) const\n    {\n        return diagonal_iter { m, x - n, y - n };\n    }\n\n    // here we assume that we are given two iterators on the same diagonal\n    difference_type operator-(const diagonal_iter& rhs) const\n    {\n        assert(m == rhs.m);\n        return x - rhs.x;\n    }\n\n    // counterpart of moving \u2039n\u203a steps backwards\n    diagonal_iter operator+(difference_type n) const\n    {\n        return diagonal_iter { m, x + n, y + n };\n    }\n\n    // we compare the coordinates, and also assume that those 2 iterators are\n    // lying on the same diagonal\n    bool operator<(const diagonal_iter& rhs) const\n    {\n        assert(m == rhs.m);\n        return x < rhs.x && y < rhs.y;\n    }\n};\n")),(0,i.kt)("p",null,"At this point we could probably try and compile it, right? If we do so, we will\nget yelled at by a compiler for the following reasons:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/usr/bin/../lib/gcc/x86_64-redhat-linux/12/../../../../include/c++/12/bits/stl_algo.h:1792:11: error: object of type 'diagonal<int>::diagonal_iter' cannot be assigned because its copy assignment operator is implicitly deleted [clang-diagnostic-error]\n          __last = __next;\n                 ^\n/usr/bin/../lib/gcc/x86_64-redhat-linux/12/../../../../include/c++/12/bits/stl_algo.h:1817:11: note: in instantiation of function template specialization 'std::__unguarded_linear_insert<diagonal<int>::diagonal_iter, __gnu_cxx::__ops::_Val_less_iter>' requested here\n            std::__unguarded_linear_insert(__i,\n                 ^\n/usr/bin/../lib/gcc/x86_64-redhat-linux/12/../../../../include/c++/12/bits/stl_algo.h:1849:9: note: in instantiation of function template specialization 'std::__insertion_sort<diagonal<int>::diagonal_iter, __gnu_cxx::__ops::_Iter_less_iter>' requested here\n          std::__insertion_sort(__first, __first + int(_S_threshold), __comp);\n               ^\n/usr/bin/../lib/gcc/x86_64-redhat-linux/12/../../../../include/c++/12/bits/stl_algo.h:1940:9: note: in instantiation of function template specialization 'std::__final_insertion_sort<diagonal<int>::diagonal_iter, __gnu_cxx::__ops::_Iter_less_iter>' requested here\n          std::__final_insertion_sort(__first, __last, __comp);\n               ^\n/usr/bin/../lib/gcc/x86_64-redhat-linux/12/../../../../include/c++/12/bits/stl_algo.h:4820:12: note: in instantiation of function template specialization 'std::__sort<diagonal<int>::diagonal_iter, __gnu_cxx::__ops::_Iter_less_iter>' requested here\n      std::__sort(__first, __last, __gnu_cxx::__ops::__iter_less_iter());\n           ^\nmatrix-sort.cpp:161:18: note: in instantiation of function template specialization 'std::sort<diagonal<int>::diagonal_iter>' requested here\n            std::sort(d.begin(), d.end());\n                 ^\nmatrix-sort.cpp:17:19: note: copy assignment operator of 'diagonal_iter' is implicitly deleted because field 'm' is of reference type 'diagonal<int>::matrix_t &' (aka 'vector<std::vector<int>> &')\n        matrix_t& m;\n                  ^\n/usr/bin/../lib/gcc/x86_64-redhat-linux/12/../../../../include/c++/12/bits/stl_algo.h:1830:2: error: no matching function for call to '__unguarded_linear_insert' [clang-diagnostic-error]\n        std::__unguarded_linear_insert(__i,\n        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n/usr/bin/../lib/gcc/x86_64-redhat-linux/12/../../../../include/c++/12/bits/stl_algo.h:1850:9: note: in instantiation of function template specialization 'std::__unguarded_insertion_sort<diagonal<int>::diagonal_iter, __gnu_cxx::__ops::_Iter_less_iter>' requested here\n          std::__unguarded_insertion_sort(__first + int(_S_threshold), __last,\n               ^\n/usr/bin/../lib/gcc/x86_64-redhat-linux/12/../../../../include/c++/12/bits/stl_algo.h:1940:9: note: in instantiation of function template specialization 'std::__final_insertion_sort<diagonal<int>::diagonal_iter, __gnu_cxx::__ops::_Iter_less_iter>' requested here\n          std::__final_insertion_sort(__first, __last, __comp);\n               ^\n/usr/bin/../lib/gcc/x86_64-redhat-linux/12/../../../../include/c++/12/bits/stl_algo.h:4820:12: note: in instantiation of function template specialization 'std::__sort<diagonal<int>::diagonal_iter, __gnu_cxx::__ops::_Iter_less_iter>' requested here\n      std::__sort(__first, __last, __gnu_cxx::__ops::__iter_less_iter());\n           ^\nmatrix-sort.cpp:161:18: note: in instantiation of function template specialization 'std::sort<diagonal<int>::diagonal_iter>' requested here\n            std::sort(d.begin(), d.end());\n                 ^\n/usr/bin/../lib/gcc/x86_64-redhat-linux/12/../../../../include/c++/12/bits/stl_algo.h:1782:5: note: candidate template ignored: substitution failure [with _RandomAccessIterator = diagonal<int>::diagonal_iter, _Compare = __gnu_cxx::__ops::_Val_less_iter]\n    __unguarded_linear_insert(_RandomAccessIterator __last,\n    ^\n/usr/bin/../lib/gcc/x86_64-redhat-linux/12/../../../../include/c++/12/bits/stl_algo.h:1923:11: error: object of type 'diagonal<int>::diagonal_iter' cannot be assigned because its copy assignment operator is implicitly deleted [clang-diagnostic-error]\n          __last = __cut;\n                 ^\n/usr/bin/../lib/gcc/x86_64-redhat-linux/12/../../../../include/c++/12/bits/stl_algo.h:1937:9: note: in instantiation of function template specialization 'std::__introsort_loop<diagonal<int>::diagonal_iter, long, __gnu_cxx::__ops::_Iter_less_iter>' requested here\n          std::__introsort_loop(__first, __last,\n               ^\n/usr/bin/../lib/gcc/x86_64-redhat-linux/12/../../../../include/c++/12/bits/stl_algo.h:4820:12: note: in instantiation of function template specialization 'std::__sort<diagonal<int>::diagonal_iter, __gnu_cxx::__ops::_Iter_less_iter>' requested here\n      std::__sort(__first, __last, __gnu_cxx::__ops::__iter_less_iter());\n           ^\nmatrix-sort.cpp:161:18: note: in instantiation of function template specialization 'std::sort<diagonal<int>::diagonal_iter>' requested here\n            std::sort(d.begin(), d.end());\n                 ^\nmatrix-sort.cpp:17:19: note: copy assignment operator of 'diagonal_iter' is implicitly deleted because field 'm' is of reference type 'diagonal<int>::matrix_t &' (aka 'vector<std::vector<int>> &')\n        matrix_t& m;\n                  ^\n")),(0,i.kt)("p",null,"That's a lot of noise, isn't it? Let's focus on the important parts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/usr/bin/../lib/gcc/x86_64-redhat-linux/12/../../../../include/c++/12/bits/stl_algo.h:1792:11: error: object of type 'diagonal<int>::diagonal_iter' cannot be assigned because its copy assignment operator is implicitly deleted [clang-diagnostic-error]\n\u2026\nmatrix-sort.cpp:17:19: note: copy assignment operator of 'diagonal_iter' is implicitly deleted because field 'm' is of reference type 'diagonal<int>::matrix_t &' (aka 'vector<std::vector<int>> &')\n        matrix_t& m;\n                  ^\n")),(0,i.kt)("p",null,"Ah! We have a reference in our iterator, and this prevents us from having a copy\nassignment operator (that is used \u201csomewhere\u201d in the sorting algorithm). Well\u2026\nLet's just wrap it!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"# we need to keep a different type than reference\n-        matrix_t& m;\n+        std::reference_wrapper<matrix_t> m;\n\n# in comparison we need to get the reference out of the wrapper first\n-            return x == rhs.x && y == rhs.y && m == rhs.m;\n+            return x == rhs.x && y == rhs.y && m.get() == rhs.m.get();\n\n# same when we return a reference to the \u201ccell\u201d in the matrix\n-        reference operator*() const { return m[y][x]; }\n+        reference operator*() const { return m.get()[y][x]; }\n\n# and finally in the assertions that we set for the \u201cdistance\u201d and \u201cless than\u201d\n-            assert(m == rhs.m);\n+            assert(m.get() == rhs.m.get());\n")),(0,i.kt)("p",null,"We're done now! We have written an iterator over diagonals for a 2D ",(0,i.kt)("inlineCode",{parentName:"p"},"vector"),". You can have a look at the final result ",(0,i.kt)("a",{parentName:"p",href:"pathname:///files/blog/leetcode/sort-matrix-diagonally/matrix-sort.cpp"},"here"),"."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1-b611be"},"just because I'm used to it and don't care about your opinion ;)",(0,i.kt)("a",{parentName:"li",href:"#fnref-1-b611be",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2-b611be"},"exercise at your own risk",(0,i.kt)("a",{parentName:"li",href:"#fnref-2-b611be",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3-b611be"},"me in 5 minutes in fact, but don't make me scared",(0,i.kt)("a",{parentName:"li",href:"#fnref-3-b611be",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-4-b611be"},"me in the next section\u2026",(0,i.kt)("a",{parentName:"li",href:"#fnref-4-b611be",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);