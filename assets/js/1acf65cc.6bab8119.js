"use strict";(self.webpackChunkfi=self.webpackChunkfi||[]).push([[8529],{4568:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(5893),t=s(1151);const r={slug:"garbage_collect",title:"Practice exam B",description:"Garbage everywhere\u2026\n",last_update:{date:new Date("2023-05-08T00:00:00.000Z")}},a="Garbage Collection",o={id:"pexam/b-garbage_collect",title:"Practice exam B",description:"Garbage everywhere\u2026\n",source:"@site/c/pexam/b-garbage_collect.md",sourceDirName:"pexam",slug:"/pexam/garbage_collect",permalink:"/c/pexam/garbage_collect",draft:!1,unlisted:!1,editUrl:"https://github.com/mfocko/blog/tree/main/c/pexam/b-garbage_collect.md",tags:[],version:"current",lastUpdatedAt:1683504e3,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{slug:"garbage_collect",title:"Practice exam B",description:"Garbage everywhere\u2026\n",last_update:{date:"2023-05-08T00:00:00.000Z"}},sidebar:"autogeneratedBar",previous:{title:"Practice Exams",permalink:"/c/category/practice-exams"},next:{title:"Practice exam C",permalink:"/c/pexam/cams"}},l={},c=[{value:"Format of the shell history",id:"format-of-the-shell-history",level:2},{value:"Format of the output",id:"format-of-the-output",level:2},{value:"<code>-gt \u2039min_size\u203a</code>",id:"-gt-min_size",level:3},{value:"<code>-f \u2039total_size\u203a \u2039min_unused\u203a</code>",id:"-f-total_size-min_unused",level:3},{value:"Example usage",id:"example-usage",level:2},{value:"Requirements and notes",id:"requirements-and-notes",level:2}];function d(e){const n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",section:"section",semantics:"semantics",span:"span",strong:"strong",sup:"sup",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"garbage-collection",children:"Garbage Collection"}),"\n",(0,i.jsx)(n.admonition,{title:"Exam environment",type:"caution",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["During the exam you will be provided with a barebone ",(0,i.jsx)(n.em,{children:"exam session"})," on the\n",(0,i.jsx)(n.em,{children:"faculty computers"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In browser you are only allowed to have the following tabs open:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.cppreference.com",children:"C documentation"})}),"\n",(0,i.jsx)(n.li,{children:"page containing the assignment"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["You ",(0,i.jsx)(n.strong,{children:"are not"})," allowed to use your own source code, e.g. prepared beforehand\nor from the seminars."]}),"\n",(0,i.jsxs)(n.li,{children:["You have ",(0,i.jsx)(n.strong,{children:"5 minutes"})," to read through the assignment and ask any follow-up\nquestions should be there something unclear."]}),"\n",(0,i.jsxs)(n.li,{children:["You have ",(0,i.jsx)(n.strong,{children:"60 minutes"})," to work on the assignment, afterward your work will be\ndiscussed with your seminar tutor."]}),"\n"]})}),"\n",(0,i.jsxs)(n.p,{children:["You have gotten into a trouble during your regular upgrade of your archLinux",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"\ninstallation\u2026 You've been carelessly running the upgrades for months and forgot\nabout clearing up the caches."]}),"\n",(0,i.jsxs)(n.p,{children:["Your task is to write a program ",(0,i.jsx)(n.code,{children:"garbage_collect"})," that will evaluate the shell\nhistory provided as a file and will try to find files or directories that are\nsuspiciously big and decide which of them should be deleted to free some space."]}),"\n",(0,i.jsx)(n.h2,{id:"format-of-the-shell-history",children:"Format of the shell history"}),"\n",(0,i.jsx)(n.p,{children:"You are provided one file consisting of the captured buffer of the terminal. You\ncan see only two commands being used:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cd \u2039somewhere\u203a"})," that changes the current working directory."]}),"\n",(0,i.jsxs)(n.p,{children:["At the beginning you start in the root of the filesystem (i.e. ",(0,i.jsx)(n.code,{children:"/"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["You are ",(0,i.jsx)(n.strong,{children:"guaranteed"})," that ",(0,i.jsx)(n.code,{children:"\u2039somewhere\u203a"})," is:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"."})," that is a current working directory (i.e. does nothing),"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".."})," that moves you up one level (in case you are in ",(0,i.jsx)(n.code,{children:"/"}),", does nothing), or"]}),"\n",(0,i.jsx)(n.li,{children:"is a valid directory in the current working directory."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"There are no guarantees or restrictions on the names of the files or\ndirectories!"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ls"})," that will list files in the current working directory and their\nrespective sizes. If there is a directory in the current working it has ",(0,i.jsx)(n.code,{children:"dir"}),"\ninstead of the size."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ ls\ndir a\n14848514 b.txt\n8504156 c.dat\ndir d\n$ cd a\n$ cd .\n$ cd .\n$ cd .\n$ ls\ndir e\n29116 f\n2557 g\n62596 h.lst\n$ cd e\n$ ls\n584 i\n$ cd ..\n$ cd ..\n$ cd d\n$ ls\n4060174 j\n8033020 d.log\n5626152 d.ext\n7214296 k\n"})}),"\n",(0,i.jsx)(n.p,{children:"For this input, you will get following file system:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"- / (dir, size=48381165)\n  - a (dir, size=94853)\n    - e (dir, size=584)\n      - i (file, size=584)\n    - f (file, size=29116)\n    - g (file, size=2557)\n    - h.lst (file, size=62596)\n  - b.txt (file, size=14848514)\n  - c.dat (file, size=8504156)\n  - d (dir, size=24933642)\n    - j (file, size=4060174)\n    - d.log (file, size=8033020)\n    - d.ext (file, size=5626152)\n    - k (file, size=7214296)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"format-of-the-output",children:"Format of the output"}),"\n",(0,i.jsx)(n.p,{children:"Your program should support 2 switches:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-gt \u2039min_size\u203a"})," that will print out suspiciously big files."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-f \u2039total_size\u203a \u2039min_unused\u203a"})," that will print out a file to be deleted."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"-gt-min_size",children:(0,i.jsx)(n.code,{children:"-gt \u2039min_size\u203a"})}),"\n",(0,i.jsx)(n.p,{children:"With this switch you are provided one additional argument:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"min_size"})," that is the lower bound (inclusive) for size of any file or\ndirectory that is supposed to be listed."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When your program is being run with this switch, it is is supposed to print out\nall files ",(0,i.jsx)(n.strong,{children:"and"})," directories that are bigger than the provided ",(0,i.jsx)(n.code,{children:"min_size"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"-f-total_size-min_unused",children:(0,i.jsx)(n.code,{children:"-f \u2039total_size\u203a \u2039min_unused\u203a"})}),"\n",(0,i.jsx)(n.p,{children:"With this switch you are provided two additional arguments:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"total_size"})," that is a total size of the filesystem",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"min_unused"})," that is a minimum of free space required for an upgrade."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Your program should find ",(0,i.jsx)(n.strong,{children:"exactly one"})," file or a directory that is of the\nsmallest size, but big enough to free enough space for the upgrade to proceed."]}),"\n",(0,i.jsx)(n.p,{children:"In other words, if that file or directory is deleted, following should hold:"}),"\n",(0,i.jsx)(n.span,{className:"katex-display",children:(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"t"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"o"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"t"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"a"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"l"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"_"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"s"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"i"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"z"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"e"})]}),(0,i.jsx)(n.mo,{children:"\u2212"}),(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"u"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"s"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"e"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"d"})]}),(0,i.jsx)(n.mo,{children:"\u2265"}),(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"m"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"i"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"n"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"_"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"u"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"n"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"u"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"s"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"e"}),(0,i.jsx)(n.mi,{mathvariant:"monospace",children:"d"})]})]}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\mathtt{total\\_size} - \\mathtt{used} \\geq \\mathtt{min\\_unused}"})]})})}),(0,i.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.7063em",verticalAlign:"-0.0951em"}}),(0,i.jsx)(n.span,{className:"mord",children:(0,i.jsx)(n.span,{className:"mord mathtt",children:"total_size"})}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(n.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,i.jsx)(n.span,{className:"mord",children:(0,i.jsx)(n.span,{className:"mord mathtt",children:"used"})}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(n.span,{className:"mrel",children:"\u2265"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.7063em",verticalAlign:"-0.0951em"}}),(0,i.jsx)(n.span,{className:"mord",children:(0,i.jsx)(n.span,{className:"mord mathtt",children:"min_unused"})})]})]})]})}),"\n",(0,i.jsx)(n.h2,{id:"example-usage",children:"Example usage"}),"\n",(0,i.jsx)(n.p,{children:"You can have a look at the example usage of your program. We can run your\nprogram from the shell like"}),"\n",(0,i.jsx)(n.p,{children:"$ ./garbage_collect shell_history.txt -gt 10000000\n24933642 /d\n14848514 /b.txt\n48381165 /"}),"\n",(0,i.jsx)(n.p,{children:"$ ./garbage_collect shell_history.txt -f 70000000 30000000\n24933642 /d"}),"\n",(0,i.jsx)(n.h2,{id:"requirements-and-notes",children:"Requirements and notes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Define ",(0,i.jsx)(n.strong,{children:"structures"})," (and ",(0,i.jsx)(n.strong,{children:"enumerations"}),", if applicable) for the parsed\ninformation from the files."]}),"\n",(0,i.jsxs)(n.li,{children:["For keeping the \u201crecords\u201d, use some ",(0,i.jsx)(n.strong,{children:"dynamic"})," data structure.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Don't forget to consider pros and cons of using ",(0,i.jsx)(n.em,{children:"specific"})," data structures\nbefore going through implementing."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["You ",(0,i.jsx)(n.strong,{children:"are not required"})," to produce 1:1 output to the provided examples, they\nare just a hint to not waste your time tinkering with a user experience."]}),"\n",(0,i.jsxs)(n.li,{children:["If any of the operations on the input files should fail,\n",(0,i.jsx)(n.strong,{children:"you are expected to"})," handle the situation ",(0,i.jsx)(n.em,{children:"accordingly"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Failures of any other common functions (e.g. functions used for memory\nmanagement) should be handled in ",(0,i.jsx)(n.strong,{children:"the same way"})," as they were in the\nhomeworks and seminars."]}),"\n",(0,i.jsxs)(n.li,{children:["Your program ",(0,i.jsx)(n.strong,{children:"must free"})," all the resources before exiting."]}),"\n"]}),"\n",(0,i.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(n.p,{children:["Also applies to Fedora, but\u2026 we use arch btw ","\ud83d\ude09 ",(0,i.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-2",children:["\n",(0,i.jsxs)(n.p,{children:["duh! ",(0,i.jsx)(n.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var i=s(7294);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);