"use strict";(self.webpackChunkfi=self.webpackChunkfi||[]).push([[8769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={id:"seminar-03",title:"3rd seminar",description:"Select sort implementation on arrays.\n",last_update:{date:new Date("2023-03-07T00:00:00.000Z")}},r=void 0,s={unversionedId:"bonuses/seminar-03",id:"bonuses/seminar-03",title:"3rd seminar",description:"Select sort implementation on arrays.\n",source:"@site/pb071/bonuses/03.md",sourceDirName:"bonuses",slug:"/bonuses/seminar-03",permalink:"/pb071/bonuses/seminar-03",draft:!1,editUrl:"https://gitlab.com/mfocko/blog/tree/main/pb071/bonuses/03.md",tags:[],version:"current",lastUpdatedAt:1678147200,formattedLastUpdatedAt:"Mar 7, 2023",frontMatter:{id:"seminar-03",title:"3rd seminar",description:"Select sort implementation on arrays.\n",last_update:{date:"2023-03-07T00:00:00.000Z"}},sidebar:"autogeneratedBar",previous:{title:"Bonuses",permalink:"/pb071/category/bonuses"},next:{title:"4th seminar",permalink:"/pb071/bonuses/seminar-04"}},l={},p=[{value:"Light version (<code>main_light.c</code>)",id:"light-version-main_lightc",level:2},{value:"Full fat version (<code>main.c</code>)",id:"full-fat-version-mainc",level:2},{value:"Submitting",id:"submitting",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Deadline for the submission of the bonus is ",(0,o.kt)("strong",{parentName:"p"},"March 16th 24:00"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In case you have any questions, feel free to reach out either by email, Discord\nor just by submitting an issue ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.fi.muni.cz/xfocko/kb/-/issues/new"},"here"),".")),(0,o.kt)("p",null,"This assignment has two versions. For the light version you can get 1.5 K\u20a1. For\nthe ",(0,o.kt)("em",{parentName:"p"},"full fat")," 3 K\u20a1. ",(0,o.kt)("strong",{parentName:"p"},"You can choose only one of them"),"."),(0,o.kt)("p",null,"To both of them you are given some basic tests. You can also have a look at the\ncode used by the tests and use it to your advantage."),(0,o.kt)("p",null,"Details can be found in the doxygen comments included in the source files."),(0,o.kt)("h2",{id:"light-version-main_lightc"},"Light version (",(0,o.kt)("inlineCode",{parentName:"h2"},"main_light.c"),")"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"pathname:///files/pb071/bonuses/03/main_light.c"},"Source")),(0,o.kt)("p",null,"For the light version you have 3 functions to finish:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"swap")," - that swaps two ints passed by pointers."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"maximum")," - that returns index of the biggest ",(0,o.kt)("inlineCode",{parentName:"li"},"int")," in the array."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"select_sort")," - that sorts passed array using Select Sort.")),(0,o.kt)("h2",{id:"full-fat-version-mainc"},"Full fat version (",(0,o.kt)("inlineCode",{parentName:"h2"},"main.c"),")"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"pathname:///files/pb071/bonuses/03/main.c"},"Source")),(0,o.kt)("p",null,"For the full fat version you have 4 functions to implement:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"swap")," - that swaps two variables passed by pointers."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"maximum")," - that returns index of the biggest element in the array using the\ncomparator."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"select_sort")," - that sorts passed array using Select Sort."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"int_comparator")," - that is used for generic sort and maximum")),(0,o.kt)("p",null,"To 2nd and 3rd function you are given a pseudocode that you can use to implement\nit."),(0,o.kt)("admonition",{title:"Function pointers",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In the skeleton of the \u201cfull fat\u201d version you might have noticed a weird type\nsignature of both the ",(0,o.kt)("inlineCode",{parentName:"p"},"maximum")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"select_sort")," functions. Those functions get\npassed a ",(0,o.kt)("em",{parentName:"p"},"function pointer")," to the comparator that you use for comparing the\nrespective elements in the passed in array."),(0,o.kt)("p",{parentName:"admonition"},"If we take the parameter from one of the functions from the skeleton:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int (*comp)(const void *, const void *)\n")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"comp")," is a function pointer to a function that takes two pointers of unspecified\ntype, i.e. pure address to the memory (you don't know what stored in there), and\nreturns an ",(0,o.kt)("inlineCode",{parentName:"p"},"int"),"."),(0,o.kt)("p",{parentName:"admonition"},"You can pass the function by simply using its name. (There is no need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"&"),"\nto get its address.) And you can also call the function by \u201ccalling\u201d the function\npointer, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"comp(left, right)"),".")),(0,o.kt)("h2",{id:"submitting"},"Submitting"),(0,o.kt)("p",null,"For submitting the bonus assignment you can follow the same procedure as for\nsubmitting the homeworks, that is:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On branch ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," add the provided skeleton."),(0,o.kt)("li",{parentName:"ol"},"Checkout new branch ",(0,o.kt)("inlineCode",{parentName:"li"},"seminar-bonus-03"),"."),(0,o.kt)("li",{parentName:"ol"},"Add your solution to the newly created branch."),(0,o.kt)("li",{parentName:"ol"},"Create a MR to the ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," branch with me (",(0,o.kt)("inlineCode",{parentName:"li"},"@xfocko"),") as the reviewer.")),(0,o.kt)("admonition",{title:"Directory structure for bonuses",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Ideally create a directory ",(0,o.kt)("inlineCode",{parentName:"p"},"seminar-bonuses")," in the root of your repository with\nbonuses in their own subdirectories."),(0,o.kt)("p",{parentName:"admonition"},"Structure of your repository can look like this:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 bonuses\n\u2502   \u2514\u2500\u2500 seminar-03\n\u251c\u2500\u2500 hello\n\u251c\u2500\u2500 hw01\n\u251c\u2500\u2500 hw02\n\u251c\u2500\u2500 seminar-01\n\u251c\u2500\u2500 seminar-02\n\u2514\u2500\u2500 seminar-03\n")),(0,o.kt)("p",{parentName:"admonition"},"or"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 bonus-seminar-03\n\u251c\u2500\u2500 hello\n\u251c\u2500\u2500 hw01\n\u251c\u2500\u2500 hw02\n\u251c\u2500\u2500 seminar-01\n\u251c\u2500\u2500 seminar-02\n\u2514\u2500\u2500 seminar-03\n")),(0,o.kt)("p",{parentName:"admonition"},"Structure of the bonuses is entirely up to you, just keep it consistent.")))}c.isMDXComponent=!0}}]);