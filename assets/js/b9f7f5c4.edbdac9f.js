"use strict";(self.webpackChunkfi=self.webpackChunkfi||[]).push([[9179],{76699:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=i(85893),t=i(11151);const s={title:"Environment",description:"Suggestions for setting up a local environment for C++ course.\n",last_update:{date:new Date("2023-02-18T00:00:00.000Z")}},r=void 0,l={id:"environment",title:"Environment",description:"Suggestions for setting up a local environment for C++ course.\n",source:"@site/cpp/environment.md",sourceDirName:".",slug:"/environment",permalink:"/cpp/environment",draft:!1,unlisted:!1,editUrl:"https://github.com/mfocko/blog/tree/main/cpp/environment.md",tags:[],version:"current",lastUpdatedAt:1676678400,formattedLastUpdatedAt:"Feb 18, 2023",frontMatter:{title:"Environment",description:"Suggestions for setting up a local environment for C++ course.\n",last_update:{date:"2023-02-18T00:00:00.000Z"}},sidebar:"autogeneratedBar",previous:{title:"Placeholders",permalink:"/cpp/exceptions-and-raii/placeholders"}},a={},c=[{value:"Required tools per OS",id:"required-tools-per-os",level:2},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3},{value:"macOS",id:"macos",level:3},{value:"nix(OS)",id:"nixos",level:3},{value:"IDEs",id:"ides",level:2},{value:"git",id:"git",level:2},{value:"pre-commit (link)",id:"pre-commit-link",level:3},{value:"Testing",id:"testing",level:2},{value:"catch2",id:"catch2",level:3},{value:"Google Test",id:"google-test",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"required-tools-per-os",children:"Required tools per OS"}),"\n",(0,o.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,o.jsxs)(n.p,{children:["Most likely WSL, VM or VPS. If you consider setting up either of those PITA, then\nVSCode + SSH to ",(0,o.jsx)(n.em,{children:"aisa"})," might be the best option for you."]}),"\n",(0,o.jsxs)(n.admonition,{title:"VSCode @ aisa",type:"warning",children:[(0,o.jsx)(n.p,{children:"Be careful when using VSCode on aisa, most notably:"}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"VSCode can leave lingering processes running in the background that can \u201eeat\nup\u201c your quota for running processes.\nAFAIK UNIX team has implemented some periodic clean up of those."}),"\n",(0,o.jsx)(n.li,{children:"Disk quota can be also affected, because of the C/C++ extension toolkit that\nhas a cache for IntelliSense."}),"\n"]})]}),"\n",(0,o.jsxs)(n.p,{children:["Either of those will be linux distros, so jump to ",(0,o.jsx)(n.a,{href:"#linux",children:"next section"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"linux",children:"Linux"}),"\n",(0,o.jsx)(n.p,{children:"Majority (if not all) of the provided materials include makefile (contains absolute\npath, so in case of linting and compiling, you need to adjust to your needs). You\nbasically need following list of tools:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"gcc"})," - for compiling"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"clang-tidy"})," - for linting (depends on distribution, might be provided with\nclang itself or in separate package, e.g. ",(0,o.jsx)(n.code,{children:"clang-tools-extra"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"clang-format"})," - for your own sanity of keeping consistent formatting"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"make"})," - since you are provided makefiles and it might be quickest to set up"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"valgrind"})," - in case you manage to create memory errors in your code"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In case of Fedora it is following set of packages:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"sudo dnf install -y clang clang-tools-extra valgrind gcc make\n# If you decide to use google test: add `gtest` or `llvm-googletest` for clang\n"})}),"\n",(0,o.jsx)(n.h3,{id:"macos",children:"macOS"}),"\n",(0,o.jsxs)(n.p,{children:["In case of macOS you should be able to find all of the packages in brew.sh, except\n",(0,o.jsx)(n.code,{children:"valgrind"}),", not sure if you can solve with podman/docker."]}),"\n",(0,o.jsx)(n.p,{children:"There is also an alterantive to homebrew, that is nixpkgs."}),"\n",(0,o.jsx)(n.h3,{id:"nixos",children:"nix(OS)"}),"\n",(0,o.jsx)(n.p,{children:"In case you run nixOS or linux distribution with nixpkgs or you use nixpkgs as a\nreplacement for homebrew on macOS. You should be fine with the following config:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-nix",children:'with import <nixpkgs> {};\nstdenv.mkDerivation {\n  name = "cppenv";\n  buildInputs = [\n    clang-tools\n\n    gnumake\n\n    gmock # used for google test\n    valgrind # not sure about macOS though\n  ];\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ides",children:"IDEs"}),"\n",(0,o.jsx)(n.p,{children:"Choice of the IDE is mostly up to you, you do not need to use IDE at all ;)"}),"\n",(0,o.jsx)(n.p,{children:"I would probably recommend VSCode + appropriate extension or CLion if you are used\nto the JetBrains IDEs."}),"\n",(0,o.jsx)(n.h2,{id:"git",children:"git"}),"\n",(0,o.jsxs)(n.p,{children:["I recommend you using some basic versioning for your code, even though you submit\nonly the sources on ",(0,o.jsx)(n.em,{children:"aisa"}),". There are specific reasons why I suggest it:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["if you build a ",(0,o.jsx)(n.em,{children:"commit, tag and submit"})," habit, you might be able to address\nsome of the smaller problems in your sources even before submission; more info\nin the ",(0,o.jsx)(n.a,{href:"#pre-commit",children:"pre-commit section"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In case you are planning to use git branches for separating different\nassignments and/or merge requests I suggest you to keep specifications and\nskeletons on your default branch, since ",(0,o.jsx)(n.em,{children:"frag"})," on ",(0,o.jsx)(n.em,{children:"aisa"})," automatically downloads\neverything that is not present and by that can create conflicts when switching\nbranches."]}),"\n",(0,o.jsx)(n.admonition,{title:"Commit conventions",type:"tip",children:(0,o.jsx)(n.p,{children:"When creating smaller and well defined commits, you can more easily argue about\ncorrectness of your implementation and also identify bugs, since they are better\ncontained."})}),"\n",(0,o.jsxs)(n.p,{children:["Since frag creates a lot of support files (majority of them are dotfiles, i.e.\nhidden files), I recommend you to use following\n",(0,o.jsx)(n.a,{href:"pathname:///files/cpp/environment/gitignore",children:"gitignore"})," configuration that\nshould cover most of the scenarios."]}),"\n",(0,o.jsxs)(n.h3,{id:"pre-commit-link",children:["pre-commit (",(0,o.jsx)(n.a,{href:"https://pre-commit.com/",children:"link"}),")"]}),"\n",(0,o.jsx)(n.p,{children:'Pre-commit basically allows you to "check" your code before committing. It functions\nas a git hook, i.e. you want to make a commit, pre-commit checks it before-hand.'}),"\n",(0,o.jsx)(n.p,{children:"In case of C++ there are few use-cases:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"formatting"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"linting"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"building and/or running tests, in case you feel like masochist"}),"\n",(0,o.jsx)(n.p,{children:"However this might be a challenging task to implement, since most of the tasks\nare published from the beginning."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In case of formatting and linting, there are already existing hooks (there is a\nlist of supported ones on the page), but there is also an option for you setting\nit up yourself (it is just a matter of specifying command and files it should run\non)."}),"\n",(0,o.jsxs)(n.admonition,{title:"Formatting",type:"tip",children:[(0,o.jsxs)(n.p,{children:["For formatting you can the following ",(0,o.jsx)(n.a,{href:"https://github.com/pre-commit/mirrors-clang-format#using-clang-format-with-pre-commit",children:"git hook"}),"."]}),(0,o.jsxs)(n.p,{children:["This hook follows the formatting conventions defined by the ",(0,o.jsx)(n.code,{children:".clang-format"})," file\nthat is looked up recursively all the way to the root of the filesystem, therefore\nit is ideal to keep it in the root of the git repository."]}),(0,o.jsxs)(n.p,{children:["You can look up the different codestyles ",(0,o.jsx)(n.a,{href:"https://gitlab.fi.muni.cz/pb071/codestyles",children:"here"}),"."]})]}),"\n",(0,o.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,o.jsx)(n.p,{children:"I have tried 2 frameworks for testing, one of them will be probably showcased in\nlectures. If you have not picked one yet, you can take an inspiration from the\nfollowing."}),"\n",(0,o.jsx)(n.h3,{id:"catch2",children:"catch2"}),"\n",(0,o.jsx)(n.p,{children:"It is quite popular, only one header-file, also might be easier to set up."}),"\n",(0,o.jsxs)(n.p,{children:["Might feel slow to compile, this can be addressed by having one object file with\nprecompiled ",(0,o.jsx)(n.code,{children:"main"})," for tests, e.g."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:'/* File: catch_main.cpp\n * Compile it with: g++ $(CXXFLAGS) -c catch_main.cpp\n *\n * Once you have source file with tests, e.g. test_something.cpp, compile it in\n * a similar fashion: g++ $(CXXFLAGS) -c test_something.cpp $(LDLIBS)\n *\n * And link them together:\n * g++ catch_main.o test_something.o -o test_something\n *\n * Now you can run ./test_something and if you change it, you do not need to compile\n * the main again.\n */\n#define CATCH_CONFIG_MAIN\n#include "catch.hpp"\n'})}),"\n",(0,o.jsx)(n.h3,{id:"google-test",children:"Google Test"}),"\n",(0,o.jsxs)(n.p,{children:["It is faster compared to catch2, even if you do not precompile the ",(0,o.jsx)(n.code,{children:"main"}),". Might\nbe more complicated to set up, since there are multiple files (it is not one header\nfile). Not very user friendly on ",(0,o.jsx)(n.em,{children:"aisa"}),". However can be installed through package\nmanager."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var o=i(67294);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);