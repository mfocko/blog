"use strict";(self.webpackChunkfi=self.webpackChunkfi||[]).push([[3731],{48157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(85893),a=n(11151);const i={id:"breaking",slug:"/hash-tables/breaking",title:"Breaking hash table",description:"How to get the linear time complexity in a hash table.\n",tags:["cpp","python","hash-tables"],last_update:{date:new Date("2023-11-28T00:00:00.000Z")}},r=void 0,o={id:"hash-tables/2023-11-28-breaking/breaking",title:"Breaking hash table",description:"How to get the linear time complexity in a hash table.\n",source:"@site/algorithms/12-hash-tables/2023-11-28-breaking/index.md",sourceDirName:"12-hash-tables/2023-11-28-breaking",slug:"/hash-tables/breaking",permalink:"/algorithms/hash-tables/breaking",draft:!1,unlisted:!1,editUrl:"https://github.com/mfocko/blog/tree/main/algorithms/12-hash-tables/2023-11-28-breaking/index.md",tags:[{label:"cpp",permalink:"/algorithms/tags/cpp"},{label:"python",permalink:"/algorithms/tags/python"},{label:"hash-tables",permalink:"/algorithms/tags/hash-tables"}],version:"current",lastUpdatedAt:1701129600,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{id:"breaking",slug:"/hash-tables/breaking",title:"Breaking hash table",description:"How to get the linear time complexity in a hash table.\n",tags:["cpp","python","hash-tables"],last_update:{date:"2023-11-28T00:00:00.000Z"}},sidebar:"autogeneratedBar",previous:{title:"Hash Tables",permalink:"/algorithms/category/hash-tables"},next:{title:"Breaking Python",permalink:"/algorithms/hash-tables/breaking/python"}},h={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Hash Table v. Trees",id:"hash-table-v-trees",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Underlying data structure",id:"underlying-data-structure",level:3},{value:"Major Factors of Hash Tables",id:"major-factors-of-hash-tables",level:2},{value:"Hash functions",id:"hash-functions",level:3},{value:"Implementation details",id:"implementation-details",level:3}];function c(e){const t={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",section:"section",semantics:"semantics",span:"span",strong:"strong",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"We will try to break a hash table and discuss possible ways how to prevent such\nissues to occur."}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["Hash tables are very commonly used to represent sets or dictionaries. Even when\nyou look up solution to some problem that requires set or dictionary, it is more\nthan likely that you'll find something that references usage of the hash table.\nYou might think it's the only possible option",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),", or it's the best one",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["One of the reasons to prefer hash tables over any other representation is the\nfact that they are ",(0,s.jsx)(t.strong,{children:"supposed"})," to be faster than the alternatives, but the\ntruth lies somewhere in between."]}),"\n",(0,s.jsxs)(t.p,{children:["One of the other possible implementations of the set is a balanced tree. Majorly\noccurring implementations rely on the ",(0,s.jsx)(t.em,{children:"red-black tree"}),", but you may see also\nothers like an ",(0,s.jsx)(t.em,{children:"AVL tree"}),(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})," or ",(0,s.jsx)(t.em,{children:"B-tree"}),(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"hash-table-v-trees",children:"Hash Table v. Trees"}),"\n",(0,s.jsx)(t.p,{children:"The most interesting part are the differences between their implementations. Why\nshould you choose hash table, or why should you choose the tree implementation?\nLet's compare the differences one by one."}),"\n",(0,s.jsx)(t.h3,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(t.p,{children:["We will start with the fundamentals on which the underlying data structures\nrely. We can also consider them as ",(0,s.jsx)(t.em,{children:"requirements"})," that must be met to be able to\nuse the underlying data structure."]}),"\n",(0,s.jsxs)(t.p,{children:["Hash table relies on the ",(0,s.jsx)(t.em,{children:"hash function"})," that is supposed to distribute the keys\nin such way that they're evenly spread across the slots where the keys (or\npairs, for dictionary) are stored, but at the same time they're somewhat unique,\nso no clustering occurs."]}),"\n",(0,s.jsxs)(t.p,{children:["Trees depend on the ",(0,s.jsx)(t.em,{children:"ordering"})," of the elements. They maintain the elements in\na sorted fashion, so for any pair of the elements that are used as keys, you\nneed to be able to decide which one of them is ",(0,s.jsx)(t.em,{children:"smaller or equal to"})," the other."]}),"\n",(0,s.jsxs)(t.p,{children:["Hash function can be easily created by using the bits that ",(0,s.jsx)(t.em,{children:"uniquely"})," identify\na unique element. On the other hand, ordering may not be as easy to define."]}),"\n",(0,s.jsxs)(t.admonition,{title:"Example",type:"tip",children:[(0,s.jsxs)(t.p,{children:["If you are familiar with complex numbers, they are a great example of a key that\ndoes not have ordering (unless you go element-wise for the sake of storing them\nin a tree; though the ordering ",(0,s.jsx)(t.strong,{children:"is not"})," defined on them)."]}),(0,s.jsx)(t.p,{children:"Hashing them is much easier though, you can just \u201ccombine\u201d the hashes of the\nreal and imaginary parts of the complex number to get a hash of the complex\nnumber itself."})]}),"\n",(0,s.jsx)(t.h3,{id:"underlying-data-structure",children:"Underlying data structure"}),"\n",(0,s.jsxs)(t.p,{children:["The most obvious difference is the ",(0,s.jsx)(t.em,{children:"core"})," of the idea behind these data\nstructures. Hash tables rely on data being stored in one continuous piece of\nmemory (the array) where you can \u201cguess\u201d (by using the hash function) the\nlocation of what you're looking for in a constant time and also access that\nlocation in the, said, constant time",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-5",id:"user-content-fnref-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})}),". In case the hash function is\n",(0,s.jsx)(t.em,{children:"not good enough"}),(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-6",id:"user-content-fnref-6","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"6"})}),", you need to go in ",(0,s.jsx)(t.em,{children:"blind"}),", and if it comes to the worst,\ncheck everything."]}),"\n",(0,s.jsx)(t.admonition,{title:"tl;dr",type:"tip",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"I know where should I look"}),"\n",(0,s.jsx)(t.li,{children:"I can look there instantenously"}),"\n",(0,s.jsx)(t.li,{children:"If my guesses are very wrong, I might need to check everything"}),"\n"]})}),"\n",(0,s.jsxs)(t.p,{children:["On the other hand, tree implementations rely on the self-balancing trees in\nwhich you don't get as ",(0,s.jsx)(t.em,{children:"amazing"})," results as with the hash table, but they're\n",(0,s.jsx)(t.strong,{children:"consistent"}),". Given that we have a self-balancing tree, the height of the tree\nis same for ",(0,s.jsx)(t.strong,{children:"every"})," input and therefore checking for any element can take the\nsame time even in the worst case."]}),"\n",(0,s.jsx)(t.admonition,{title:"tl;dr",type:"tip",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"I don't know where to look"}),"\n",(0,s.jsx)(t.li,{children:"I know how to get there"}),"\n",(0,s.jsx)(t.li,{children:"Wherever I look, it takes me about the same time"}),"\n"]})}),"\n",(0,s.jsx)(t.p,{children:"Let's compare side by side:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"time complexity"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"hash table"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"tree"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"expected"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"constant"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"depends on the height"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"worst-case"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"gotta check everything"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"depends on the height"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"major-factors-of-hash-tables",children:"Major Factors of Hash Tables"}),"\n",(0,s.jsx)(t.p,{children:"Let's have a look at the major factors that affect the efficiency and\nfunctioning of a hash table. We have already mentioned the hash function that\nplays a crucial role, but there are also different ways how you can implement\na hash table, so we will have a look at those too."}),"\n",(0,s.jsx)(t.h3,{id:"hash-functions",children:"Hash functions"}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"We will start with a definition of hash function in a mathematical definition\nand type signature in some known language:"}),(0,s.jsx)(t.span,{className:"katex-display",children:(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsxs)(t.mrow,{children:[(0,s.jsx)(t.mi,{children:"h"}),(0,s.jsx)(t.mo,{children:":"}),(0,s.jsx)(t.mi,{children:"T"}),(0,s.jsx)(t.mo,{children:"\u2192"}),(0,s.jsx)(t.mi,{mathvariant:"double-struck",children:"N"})]}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"  h : T \\rightarrow \\mathbb{N}"})]})})}),(0,s.jsxs)(t.span,{className:"katex-html","aria-hidden":"true",children:[(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"0.6944em"}}),(0,s.jsx)(t.span,{className:"mord mathnormal",children:"h"}),(0,s.jsx)(t.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.jsx)(t.span,{className:"mrel",children:":"}),(0,s.jsx)(t.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"0.6833em"}}),(0,s.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,s.jsx)(t.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.jsx)(t.span,{className:"mrel",children:"\u2192"}),(0,s.jsx)(t.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"0.6889em"}}),(0,s.jsx)(t.span,{className:"mord mathbb",children:"N"})]})]})]})}),(0,s.jsxs)(t.p,{children:["For a type signature we will just take the declaration from C++",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-7",id:"user-content-fnref-7","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"7"})}),":"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"std::size_t operator()(const T& key) const;\n"})}),(0,s.jsxs)(t.p,{children:["If you compare with the mathematical definition, it is very similar, except for\nthe fact that the memory is not unlimited, so the ",(0,s.jsx)(t.em,{children:"natural number"})," turned into\nan ",(0,s.jsx)(t.em,{children:"unsigned integer type"})," (on majority of platforms it will be a 64-bit\nunsigned integer)."]})]}),"\n",(0,s.jsx)(t.p,{children:"As we have already touched above, hash function gives \u201ca guess\u201d where to look\nfor the key (either when doing a look up, or for insertion to guess a suitable\nspot for the insertion)."}),"\n",(0,s.jsxs)(t.p,{children:["Hash functions are expected to have a so-called ",(0,s.jsx)(t.em,{children:"avalanche effect"})," which means\nthat the smallest change to the key should result in a massive change of hash.\nAvalanche effect technically guarantees that even when your data are clustered\ntogether, it should lower the amount of conflicts that can occur."]}),"\n",(0,s.jsx)(t.admonition,{title:"Exercise for the reader",type:"tip",children:(0,s.jsx)(t.p,{children:"Try to give an example of a hash function that is not good at all."})}),"\n",(0,s.jsx)(t.h3,{id:"implementation-details",children:"Implementation details"}),"\n",(0,s.jsx)(t.p,{children:"There are different variations of the hash tables. You've more than likely seen\nan implementation that keeps linked lists for buckets. However there are also\nother variations that use probing instead."}),"\n",(0,s.jsx)(t.p,{children:"With regards to the implementation details, we need to mention the fact that\neven with the bounded hash (as we could've seen above), you're not likely to\nhave all the buckets for different hashes available. Most common approach to\nthis is having a smaller set of buckets and modifying the hash to fit within."}),"\n",(0,s.jsx)(t.p,{children:"One of the most common approaches is to keep lengths of the hash tables in the\npowers of 2 which allows bit-masking to take place."}),"\n",(0,s.jsxs)(t.admonition,{title:"Example",type:"tip",children:[(0,s.jsxs)(t.p,{children:["Let's say we're given ",(0,s.jsx)(t.code,{children:"h = 0xDEADBEEF"})," and we have ",(0,s.jsx)(t.code,{children:"l = 65536=2^16"})," spots in our\nhash table. What can we do here?"]}),(0,s.jsx)(t.p,{children:"Well, we definitely have a bigger hash than spots available, so we need to\n\u201cshrink\u201d it somehow. The most common practice is to take the lower bits of the\nhash to represent an index in the table:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"h & (l - 1)\n"})}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Why does this work?"})," Firstly we subtract 1 from the length (indices run from\n",(0,s.jsx)(t.code,{children:"\u27e80 ; l - 1\u27e9"}),", since table is zero-indexed). Therefore if we do ",(0,s.jsx)(t.em,{children:"binary and"})," on\nany number, we always get a valid index within the table. Let's find the index\nfor our hash:"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"0xDEADBEEF & 0xFFFF = 0xBEEF\n"})})]}),"\n",(0,s.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,s.jsxs)(t.p,{children:["not true ",(0,s.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-2",children:["\n",(0,s.jsxs)(t.p,{children:["also not true ",(0,s.jsx)(t.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-3",children:["\n",(0,s.jsxs)(t.p,{children:["actually the first of its kind (the self-balanced trees) ",(0,s.jsx)(t.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-4",children:["\n",(0,s.jsxs)(t.p,{children:["Rust chose to implement this instead of the common choice of the red-black\nor AVL tree; main difference lies in the fact that B-trees are not binary\ntrees ",(0,s.jsx)(t.a,{href:"#user-content-fnref-4","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-5",children:["\n",(0,s.jsxs)(t.p,{children:["This, of course, does not hold true for the educational implementations of\nthe hash tables where conflicts are handled by storing the items in the\nlinked lists. In practice linked lists are not that commonly used for\naddressing this issue as it has even worse impact on the efficiency of the\ndata structure. ",(0,s.jsx)(t.a,{href:"#user-content-fnref-5","data-footnote-backref":"","aria-label":"Back to reference 5",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-6",children:["\n",(0,s.jsxs)(t.p,{children:["My guess is not very good, or it's really bad\u2026 ",(0,s.jsx)(t.a,{href:"#user-content-fnref-6","data-footnote-backref":"","aria-label":"Back to reference 6",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-7",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://en.cppreference.com/w/cpp/utility/hash",children:"https://en.cppreference.com/w/cpp/utility/hash"})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-7","data-footnote-backref":"","aria-label":"Back to reference 7",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(67294);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);