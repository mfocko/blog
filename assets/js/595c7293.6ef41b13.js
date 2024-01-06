"use strict";(self.webpackChunkfi=self.webpackChunkfi||[]).push([[5634],{58396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(85893),s=t(11151);const r={id:"seminar-08",title:"8th seminar",description:"Manipulating with files only char-by-char and a magic tree.\n"},o="8th seminar bonus assignment",c={id:"bonuses/seminar-08",title:"8th seminar",description:"Manipulating with files only char-by-char and a magic tree.\n",source:"@site/c/bonuses/08.md",sourceDirName:"bonuses",slug:"/bonuses/seminar-08",permalink:"/c/bonuses/seminar-08",draft:!1,unlisted:!1,editUrl:"https://github.com/mfocko/blog/tree/main/c/bonuses/08.md",tags:[],version:"current",lastUpdatedAt:1704558496,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"seminar-08",title:"8th seminar",description:"Manipulating with files only char-by-char and a magic tree.\n"},sidebar:"autogeneratedBar",previous:{title:"5th and 6th seminar",permalink:"/c/bonuses/seminar-05-06"},next:{title:"10th seminar",permalink:"/c/bonuses/seminar-10"}},a={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Warning",id:"warning",level:2},{value:"Testing",id:"testing",level:2},{value:"Task no. 1: Counting (0.75 K\u20a1)",id:"task-no-1-counting-075-k",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Bonus part (0.75 K\u20a1)",id:"bonus-part-075-k",level:3},{value:"Task no. 2: Weird trees (1 K\u20a1)",id:"task-no-2-weird-trees-1-k",level:2},{value:"Submitting",id:"submitting",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"8th-seminar-bonus-assignment",children:"8th seminar bonus assignment"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"pathname:///files/c/bonuses/08.tar.gz",children:"Source"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"In this bonus you can implement two tasks, one of them has a bonus part with generic\nsolution."}),"\n",(0,i.jsx)(n.p,{children:"One is focused on counting ananas or in case of generic version any substring in\nthe file, but with a restriction on the function you use."}),"\n",(0,i.jsx)(n.p,{children:"Other one has a more algorithmic spirit."}),"\n",(0,i.jsx)(n.p,{children:"For this bonus you can get at maximum 2.5 K\u20a1."}),"\n",(0,i.jsx)(n.h2,{id:"warning",children:"Warning"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DO NOT COMMIT test data"})," to your own git repository, since the tests include\nfiles that exceed 10MB by themselves. Even if they are on separate branch, they\ntake up the space."]}),"\n",(0,i.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,i.jsxs)(n.p,{children:["For testing you are provided with python script (requires ",(0,i.jsx)(n.code,{children:"click"})," to be installed:\n",(0,i.jsx)(n.code,{children:"pip3 install --user click"}),") and ",(0,i.jsx)(n.code,{children:"Makefile"})," that provides following targets:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"check-counting"})," - runs the ",(0,i.jsx)(n.code,{children:"counting"})," tests"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"check-counting-bonus"})," - runs the ",(0,i.jsx)(n.code,{children:"counting"})," tests with bonus implemented"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"check"})," - runs both ",(0,i.jsx)(n.code,{children:"counting"})," and ",(0,i.jsx)(n.code,{children:"counting-bonus"})," tests"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"clean"})," - removes output files from the test runs"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"task-no-1-counting-075-k",children:"Task no. 1: Counting (0.75 K\u20a1)"}),"\n",(0,i.jsx)(n.p,{children:"Your first task is to make smallish program that counts occurences of specific\n(or given) word from file and writes the number to other file."}),"\n",(0,i.jsx)(n.p,{children:"Usage of the program is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Usage: ./counting <input-file> <output-file> [string-to-be-counted]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Arguments that are passed to the program represent:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<input-file>"})," - path to the file where we count the words"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<output-file>"})," - path to the file where we output the count"]}),"\n",(0,i.jsxs)(n.li,{children:["(optional argument) ",(0,i.jsx)(n.code,{children:"[string-to-be-counted]"})," - in case you implement bonus,\notherwise we default to word ",(0,i.jsx)(n.code,{children:"ananas"})," ;)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In skeleton you are given 3 empty, but documented, functions to implement."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"count_anything"})," - function accepts input file and substring to be counted in\nthe file, returns the count."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"count_ananas"})," - same as ",(0,i.jsx)(n.code,{children:"count_anything"}),", but specialized for ananases, the\ndefault implementation from the skeleton expects you to implement ",(0,i.jsx)(n.code,{children:"count_anything"}),"\nand therefore it just calls the other function."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"write_number"})," - function that writes the number to the file, why would you\nneed the function is explained later :)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.p,{children:["For manipulation with the files you are only allowed to use ",(0,i.jsx)(n.code,{children:"fopen"}),", ",(0,i.jsx)(n.code,{children:"fclose"}),",\n",(0,i.jsx)(n.code,{children:"fgetc"})," and ",(0,i.jsx)(n.code,{children:"fputc"}),". Functions like ",(0,i.jsx)(n.code,{children:"fprintf"})," (except for ",(0,i.jsx)(n.code,{children:"stderr"})," or logging) and\n",(0,i.jsx)(n.code,{children:"fscanf"})," are ",(0,i.jsx)(n.strong,{children:"forbidden"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"In case you struggle and want to use one of those functions, the solution will be\npenalized by 50% of points."}),"\n",(0,i.jsx)(n.h3,{id:"bonus-part-075-k",children:"Bonus part (0.75 K\u20a1)"}),"\n",(0,i.jsxs)(n.p,{children:["Bonus part of this assignment is to implement ",(0,i.jsx)(n.code,{children:"count_anything"})," rather than ",(0,i.jsx)(n.code,{children:"count_ananas"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Smaller hint: This task does not need dynamic allocation :) You just need one\ngood helper function and the right idea ;)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"task-no-2-weird-trees-1-k",children:"Task no. 2: Weird trees (1 K\u20a1)"}),"\n",(0,i.jsxs)(n.p,{children:["In this task we are crossing our paths with ",(0,i.jsx)(n.em,{children:"algorithms and data structures"}),".\nYour task is to write a program that constructs tree from the file that is given\nas an argument and pretty-prints it."]}),"\n",(0,i.jsxs)(n.p,{children:["Input file consists of lines, that include ",(0,i.jsx)(n.code,{children:"key"})," and ",(0,i.jsx)(n.code,{children:"rank"})," in form ",(0,i.jsx)(n.code,{children:"key;rank"}),"\nor ",(0,i.jsx)(n.code,{children:"nil"}),". Why would we have ",(0,i.jsx)(n.code,{children:"nil"})," in a file? The file represents pre-order iteration\nthrough the tree. Leaves never have rank different than 0, so you can safely assume\n2 non-existing ",(0,i.jsx)(n.code,{children:"nil"}),"s in the input after you read such node ;)"]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Example input file"}),(0,i.jsx)("th",{children:"Tree it represents"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"8;4\n5;3\n3;2\n2;1\n1;0\nnil\n4;0\n7;1\n6;0\nnil\n11;2\n10;1\n9;0\nnil\n12;0\n"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"tree",src:t(30073).Z+"",width:"633",height:"684"})})})]})]}),"\n",(0,i.jsxs)(n.p,{children:["In this task you are only provided with different trees in the ",(0,i.jsx)(n.code,{children:"test-trees"})," directory.\nImplementation and format of the pretty-print is totally up to you. :)"]}),"\n",(0,i.jsx)(n.p,{children:"Example of mine for the tree above:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"8 (rank = 4)\n+-- 5 (rank = 3)\n|   +-- 3 (rank = 2)\n|   |   +-- 2 (rank = 1)\n|   |   |   +-- 1 (rank = 0)\n|   |   +-- 4 (rank = 0)\n|   +-- 7 (rank = 1)\n|       +-- 6 (rank = 0)\n+-- 11 (rank = 2)\n    +-- 10 (rank = 1)\n    |   +-- 9 (rank = 0)\n    +-- 12 (rank = 0)\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Can you find out what are those trees? :)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"submitting",children:"Submitting"}),"\n",(0,i.jsx)(n.p,{children:"In case you have any questions, feel free to reach out to me."}),"\n",(0,i.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},30073:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/tree-c9e37f87f9095c00fad33ea034485ce6.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var i=t(67294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);