"use strict";(self.webpackChunkfi=self.webpackChunkfi||[]).push([[8807],{21431:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(85893),i=t(11151);const o={id:"seminar-03",title:"3rd seminar",description:"Select sort implementation on arrays.\n",last_update:{date:new Date("2023-03-07T00:00:00.000Z")}},r=void 0,c={id:"bonuses/seminar-03",title:"3rd seminar",description:"Select sort implementation on arrays.\n",source:"@site/c/bonuses/03.md",sourceDirName:"bonuses",slug:"/bonuses/seminar-03",permalink:"/c/bonuses/seminar-03",draft:!1,unlisted:!1,editUrl:"https://github.com/mfocko/blog/tree/main/c/bonuses/03.md",tags:[],version:"current",lastUpdatedAt:1678147200,formattedLastUpdatedAt:"Mar 7, 2023",frontMatter:{id:"seminar-03",title:"3rd seminar",description:"Select sort implementation on arrays.\n",last_update:{date:"2023-03-07T00:00:00.000Z"}},sidebar:"autogeneratedBar",previous:{title:"Bonuses",permalink:"/c/category/bonuses"},next:{title:"4th seminar",permalink:"/c/bonuses/seminar-04"}},a={},l=[{value:"Light version (<code>main_light.c</code>)",id:"light-version-main_lightc",level:2},{value:"Full fat version (<code>main.c</code>)",id:"full-fat-version-mainc",level:2},{value:"Submitting",id:"submitting",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{title:"caution",type:"warning",children:(0,s.jsxs)(n.p,{children:["Deadline for the submission of the bonus is ",(0,s.jsx)(n.strong,{children:"March 16th 24:00"}),"."]})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["In case you have any questions, feel free to reach out either by email, Discord\nor just by submitting an issue ",(0,s.jsx)(n.a,{href:"https://gitlab.fi.muni.cz/xfocko/kb/-/issues/new",children:"here"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["This assignment has two versions. For the light version you can get 1.5 K\u20a1. For\nthe ",(0,s.jsx)(n.em,{children:"full fat"})," 3 K\u20a1. ",(0,s.jsx)(n.strong,{children:"You can choose only one of them"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To both of them you are given some basic tests. You can also have a look at the\ncode used by the tests and use it to your advantage."}),"\n",(0,s.jsx)(n.p,{children:"Details can be found in the doxygen comments included in the source files."}),"\n",(0,s.jsxs)(n.h2,{id:"light-version-main_lightc",children:["Light version (",(0,s.jsx)(n.code,{children:"main_light.c"}),")"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"pathname:///files/c/bonuses/03/main_light.c",children:"Source"})}),"\n",(0,s.jsx)(n.p,{children:"For the light version you have 3 functions to finish:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"swap"})," - that swaps two ints passed by pointers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"maximum"})," - that returns index of the biggest ",(0,s.jsx)(n.code,{children:"int"})," in the array."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"select_sort"})," - that sorts passed array using Select Sort."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"full-fat-version-mainc",children:["Full fat version (",(0,s.jsx)(n.code,{children:"main.c"}),")"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"pathname:///files/c/bonuses/03/main.c",children:"Source"})}),"\n",(0,s.jsx)(n.p,{children:"For the full fat version you have 4 functions to implement:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"swap"})," - that swaps two variables passed by pointers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"maximum"})," - that returns index of the biggest element in the array using the\ncomparator."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"select_sort"})," - that sorts passed array using Select Sort."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"int_comparator"})," - that is used for generic sort and maximum"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To 2nd and 3rd function you are given a pseudocode that you can use to implement\nit."}),"\n",(0,s.jsxs)(n.admonition,{title:"Function pointers",type:"tip",children:[(0,s.jsxs)(n.p,{children:["In the skeleton of the \u201cfull fat\u201d version you might have noticed a weird type\nsignature of both the ",(0,s.jsx)(n.code,{children:"maximum"})," and ",(0,s.jsx)(n.code,{children:"select_sort"})," functions. Those functions get\npassed a ",(0,s.jsx)(n.em,{children:"function pointer"})," to the comparator that you use for comparing the\nrespective elements in the passed in array."]}),(0,s.jsx)(n.p,{children:"If we take the parameter from one of the functions from the skeleton:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"int (*comp)(const void *, const void *)\n"})}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"comp"})," is a function pointer to a function that takes two pointers of unspecified\ntype, i.e. pure address to the memory (you don't know what stored in there), and\nreturns an ",(0,s.jsx)(n.code,{children:"int"}),"."]}),(0,s.jsxs)(n.p,{children:["You can pass the function by simply using its name. (There is no need to use ",(0,s.jsx)(n.code,{children:"&"}),"\nto get its address.) And you can also call the function by \u201ccalling\u201d the function\npointer, e.g. ",(0,s.jsx)(n.code,{children:"comp(left, right)"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"submitting",children:"Submitting"}),"\n",(0,s.jsx)(n.p,{children:"For submitting the bonus assignment you can follow the same procedure as for\nsubmitting the homeworks, that is:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["On branch ",(0,s.jsx)(n.code,{children:"main"})," add the provided skeleton."]}),"\n",(0,s.jsxs)(n.li,{children:["Checkout new branch ",(0,s.jsx)(n.code,{children:"seminar-bonus-03"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Add your solution to the newly created branch."}),"\n",(0,s.jsxs)(n.li,{children:["Create a MR to the ",(0,s.jsx)(n.code,{children:"main"})," branch with me (",(0,s.jsx)(n.code,{children:"@xfocko"}),") as the reviewer."]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"Directory structure for bonuses",type:"tip",children:[(0,s.jsxs)(n.p,{children:["Ideally create a directory ",(0,s.jsx)(n.code,{children:"seminar-bonuses"})," in the root of your repository with\nbonuses in their own subdirectories."]}),(0,s.jsx)(n.p,{children:"Structure of your repository can look like this:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:".\n\u251c\u2500\u2500 bonuses\n\u2502   \u2514\u2500\u2500 seminar-03\n\u251c\u2500\u2500 hello\n\u251c\u2500\u2500 hw01\n\u251c\u2500\u2500 hw02\n\u251c\u2500\u2500 seminar-01\n\u251c\u2500\u2500 seminar-02\n\u2514\u2500\u2500 seminar-03\n"})}),(0,s.jsx)(n.p,{children:"or"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:".\n\u251c\u2500\u2500 bonus-seminar-03\n\u251c\u2500\u2500 hello\n\u251c\u2500\u2500 hw01\n\u251c\u2500\u2500 hw02\n\u251c\u2500\u2500 seminar-01\n\u251c\u2500\u2500 seminar-02\n\u2514\u2500\u2500 seminar-03\n"})}),(0,s.jsx)(n.p,{children:"Structure of the bonuses is entirely up to you, just keep it consistent."})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(67294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);