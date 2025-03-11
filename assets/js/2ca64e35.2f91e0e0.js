"use strict";(self.webpackChunkfi=self.webpackChunkfi||[]).push([[1070],{3377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"recursion/2022-11-29-karel/karel","title":"Recursion and backtracking with Robot Karel","description":"A problem with too many restrictions.\\n","source":"@site/algorithms/04-recursion/2022-11-29-karel/index.md","sourceDirName":"04-recursion/2022-11-29-karel","slug":"/recursion/karel","permalink":"/algorithms/recursion/karel","draft":false,"unlisted":false,"editUrl":"https://github.com/mfocko/blog/tree/main/algorithms/04-recursion/2022-11-29-karel/index.md","tags":[{"inline":true,"label":"python","permalink":"/algorithms/tags/python"},{"inline":true,"label":"karel","permalink":"/algorithms/tags/karel"},{"inline":true,"label":"recursion","permalink":"/algorithms/tags/recursion"},{"inline":true,"label":"backtracking","permalink":"/algorithms/tags/backtracking"}],"version":"current","lastUpdatedAt":1669680000000,"frontMatter":{"id":"karel","slug":"/recursion/karel","title":"Recursion and backtracking with Robot Karel","description":"A problem with too many restrictions.\\n","tags":["python","karel","recursion","backtracking"],"last_update":{"date":"2022-11-29T00:00:00.000Z"}},"sidebar":"autogeneratedBar","previous":{"title":"Recursion","permalink":"/algorithms/category/recursion"},"next":{"title":"Solution to the problem","permalink":"/algorithms/recursion/karel/solution"}}');var i=t(74848),o=t(28453);const s={id:"karel",slug:"/recursion/karel",title:"Recursion and backtracking with Robot Karel",description:"A problem with too many restrictions.\n",tags:["python","karel","recursion","backtracking"],last_update:{date:new Date("2022-11-29T00:00:00.000Z")}},l=void 0,a={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Your environment and problem description",id:"your-environment-and-problem-description",level:2},{value:"Environment",id:"environment",level:3},{value:"Interface",id:"interface",level:3},{value:"Problem",id:"problem",level:3},{value:"Simple problem to get familiar with the robot",id:"simple-problem-to-get-familiar-with-the-robot",level:2},{value:"Brainstorm the idea",id:"brainstorm-the-idea",level:2},{value:"\xbbRough\xab pseudocode",id:"rough-pseudocode",level:2},{value:"\xbbProper\xab pseudocode",id:"proper-pseudocode",level:2},{value:"Library",id:"library",level:2},{value:"Solution",id:"solution",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///files/algorithms/recursion/karel-1.tar.gz",children:"Sources"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"In this exercise we will be working with a Robot Karel and with a \xbbvery\xab limited\nresources. The point of this exercise is to show how powerful recursion and\nbacktracking can be even without anything else at your hand."}),"\n",(0,i.jsx)(n.h2,{id:"your-environment-and-problem-description",children:"Your environment and problem description"}),"\n",(0,i.jsx)(n.h3,{id:"environment",children:"Environment"}),"\n",(0,i.jsx)(n.p,{children:"You are given a robot that is present in a maze and is looking for an exit. Maze\nconsists of different walls and exit is marked with a single so-called \u201cbeeper\u201d."}),"\n",(0,i.jsx)(n.p,{children:"Walking into a wall results in a permanent damage of the robot."}),"\n",(0,i.jsx)(n.h3,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(n.p,{children:"You can control the robot using the following interface:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["actions \u200b\xad\u2014 you can use them to change the current state of the robot and its\nsurroundings","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"robot.step()"})," \u2014 moves robot one step further"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"robot.turn_left()"})," \u2014 turns robot 90-degrees counter-clockwise","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["notice that you are not given ",(0,i.jsx)(n.code,{children:"turn_right"})," or ",(0,i.jsx)(n.code,{children:"turn_around"}),", but feel free\nto implement them yourself"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"robot.pick_beeper()"})," and opposite operation ",(0,i.jsx)(n.code,{children:"robot.put_beeper()"})," \u2014 that\nallows you to either pick or put \u201cbeeper\u201d from or onto the current position"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["queries \u2014 you can use them to check the current state of the robot and its\nsurroundings","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"robot.beepers_present()"})," \u2014 to check if there are any beepers at the robot's\ncurrent location"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"robot.left_is_clear()"})," \u2014 to check if you can step to the left","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["analogically for ",(0,i.jsx)(n.code,{children:"front"})," and ",(0,i.jsx)(n.code,{children:"right"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{title:"caution",type:"warning",children:[(0,i.jsx)(n.p,{children:"Helper functions / procedures are allowed. Return values are allowed."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Variables are prohibited!"})})]}),"\n",(0,i.jsx)(n.h3,{id:"problem",children:"Problem"}),"\n",(0,i.jsx)(n.p,{children:"Your task is to decide whether there is an exit from the maze or not. You can see\nan example of a maze here:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image of the maze",src:t(6404).A+"",width:"770",height:"839"})}),"\n",(0,i.jsx)(n.h2,{id:"simple-problem-to-get-familiar-with-the-robot",children:"Simple problem to get familiar with the robot"}),"\n",(0,i.jsx)(n.p,{children:"If you feel completely lost after the previous description, let me start you off\nwith a simpler problem."}),"\n",(0,i.jsx)(n.p,{children:"You are standing in front of the stairs, your task is to walk up the stairs."}),"\n",(0,i.jsx)(n.p,{children:"You can see an example of such map here:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image of the stairs",src:t(97023).A+"",width:"1058",height:"1161"})}),"\n",(0,i.jsx)(n.h2,{id:"brainstorm-the-idea",children:"Brainstorm the idea"}),"\n",(0,i.jsx)(n.p,{children:"As a first step write down any ideas and things that you have noticed or came to\nyour mind. Ideally:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Write down a nested list of the problems"}),"\n",(0,i.jsx)(n.li,{children:"Write down list of problems that can happen"}),"\n",(0,i.jsxs)(n.li,{children:["Write down ",(0,i.jsx)(n.strong,{children:"anything"})," you consider important to solving the problem"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{title:"Example",type:"tip",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Problem"}),": I want to find out whether the display on smartphone should rotate."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["nested list of problems","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Check if display has been rotated","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Read data from some sensor","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"From what sensor"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"In what format are the data I have read?"}),"\n",(0,i.jsx)(n.li,{children:"How do I communicate with the sensor?"}),"\n",(0,i.jsx)(n.li,{children:"What is the meaning of the data that I got?"}),"\n",(0,i.jsx)(n.li,{children:"How can I process it?"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["any problems that can happen","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"What if the sensor doesn't work?"}),"\n",(0,i.jsx)(n.li,{children:"What if the data doesn't conform to the specification?"}),"\n",(0,i.jsx)(n.li,{children:"What if my formulas are wrong?"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["anything important","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"I could probably use gyroscope."}),"\n",(0,i.jsx)(n.li,{children:"I should probably look up the datasheet for that module."}),"\n",(0,i.jsx)(n.li,{children:"I could write some tests to verify that my computations are correct."}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"rough-pseudocode",children:"\xbbRough\xab pseudocode"}),"\n",(0,i.jsxs)(n.p,{children:["As a next step write a ",(0,i.jsx)(n.strong,{children:"mock up"})," of a pseudocode solving the problem, you are\nallowed to use comments as placeholders for bigger chunks of code."]}),"\n",(0,i.jsx)(n.p,{children:"Those comments are also a very good hints for decomposition and short, but\ndescriptive, commnets (if they are short enough and you decide not to factor them\nout to separate functions)."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"The smaller the function is, the easier it is to test it and argue about its\ncorrectness."})}),"\n",(0,i.jsx)(n.h2,{id:"proper-pseudocode",children:"\xbbProper\xab pseudocode"}),"\n",(0,i.jsxs)(n.p,{children:["If you are satisfied with the ",(0,i.jsx)(n.em,{children:"\xbbrough\xab pseudocode"}),", it's time to convert it into\na proper one. Get rid of the uncertain pieces of functionality and replace them\nwith proper pseudocode, i.e. list of the things that should happen in its place."]}),"\n",(0,i.jsx)(n.h2,{id:"library",children:"Library"}),"\n",(0,i.jsxs)(n.p,{children:["If you got here, and you ",(0,i.jsx)(n.strong,{children:"actually"})," wrote down the pseudocode, you can try your\nsolution after downloading the sources linked at the beginning. If you download\nthe ZIP-file, you can there:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"generate_mazes.py"})," - that was used to generate the same maze with beepers in\ndifferent locations"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"karel_tk.py"})," - library which can run Karel given the his world"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["documentation can be found ",(0,i.jsx)(n.a,{href:"https://www.fi.muni.cz/~xfocko/ib111/10/docs/",children:"here"})]}),"\n",(0,i.jsx)(n.li,{children:"also requires Tk Python library to be installed (it should be included in\nmajority of Python installations)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"*.kw"})," - which represent multiple worlds for Karel I have prepared"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"skeleton.py"})," - skeleton for your solution, needs to be put in the same directory\nas ",(0,i.jsx)(n.code,{children:"karel_tk.py"})," and takes path to the world as a first argument, example usage:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ python3 skeleton.py stairs.kw\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"of course, this file can be renamed ;)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(n.p,{children:"Solution to this problem will be released as a second part, so that you can try\nit out by yourself without any influence of \u201cexample solution\u201d."}),"\n",(0,i.jsx)(n.p,{children:"If you want to get any feedback, feel free to mail me your solution (including\nall the steps that lead to your final solution, if you wish to get feedback on\nthose too)."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6404:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/maze-a374d908bc9445061e15faeddc71641e.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}},97023:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/stairs-5ee5d03905645aeb13eeaa7774451a64.png"}}]);