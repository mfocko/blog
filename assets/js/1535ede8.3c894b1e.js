"use strict";(self.webpackChunkfi=self.webpackChunkfi||[]).push([[5376],{44969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(85893),i=t(11151);const r={id:"seminar-10",title:"10th seminar",description:"Finding bugs in a hangman.\n"},o=void 0,a={id:"bonuses/seminar-10",title:"10th seminar",description:"Finding bugs in a hangman.\n",source:"@site/c/bonuses/10.md",sourceDirName:"bonuses",slug:"/bonuses/seminar-10",permalink:"/c/bonuses/seminar-10",draft:!1,unlisted:!1,editUrl:"https://github.com/mfocko/blog/tree/main/c/bonuses/10.md",tags:[],version:"current",lastUpdatedAt:1704558496,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"seminar-10",title:"10th seminar",description:"Finding bugs in a hangman.\n"},sidebar:"autogeneratedBar",previous:{title:"8th seminar",permalink:"/c/bonuses/seminar-08"},next:{title:"Practice Exams",permalink:"/c/category/practice-exams"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Project",id:"project",level:2},{value:"Summary of the gameplay",id:"summary-of-the-gameplay",level:3},{value:"Suggested workflow",id:"suggested-workflow",level:2},{value:"Tasks",id:"tasks",level:2},{value:"Dictionary",id:"dictionary",level:2},{value:"Submitting",id:"submitting",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"pathname:///files/c/bonuses/10.tar.gz",children:"Source"})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"For this bonus you are given almost finished project - The Hangman Game. Your\ntask is to try the game, in case you find any bugs point them out and cover as\nmuch of the game as possible with tests."}),"\n",(0,s.jsx)(n.p,{children:"For this bonus you can get at maximum 2 K\u20a1."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Item"}),(0,s.jsx)(n.th,{children:"Bonus"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Fixing bugs from failing tests"}),(0,s.jsx)(n.td,{children:"0.25"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"word_guessed"})}),(0,s.jsx)(n.td,{children:"0.50"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hidden bug"}),(0,s.jsx)(n.td,{children:"0.50"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Extending tests, undetectable bugs or evil bug"}),(0,s.jsx)(n.td,{children:"0.37"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Refactor"}),(0,s.jsx)(n.td,{children:"0.38"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"project",children:"Project"}),"\n",(0,s.jsxs)(n.p,{children:["Project consists of 2 source files - ",(0,s.jsx)(n.code,{children:"hangman.c"})," and ",(0,s.jsx)(n.code,{children:"main.c"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"main.c"})," is quite short and concise, there is nothing for you to do."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"hangman.c"})," contains implementation of the game. In case you feel lost, consult\nthe documentation in ",(0,s.jsx)(n.code,{children:"hangman.h"})," that represents an interface that can be used\nfor implementing the game."]}),"\n",(0,s.jsxs)(n.p,{children:["Apart from those sources this project is a bit more complicated. ",(0,s.jsx)(n.em,{children:"Game loop"})," is\nrealised via single encapsulated function that complicates the testing. Because\nof that, there are 2 kinds of tests:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Unit tests"})," - that are present in ",(0,s.jsx)(n.code,{children:"test_hangman.c"})," and can be run via:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ make check-unit\n"})}),"\n",(0,s.jsx)(n.p,{children:"They cover majorly functions that can be tested easily via testing framework."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Functional tests"})," - same as in ",(0,s.jsx)(n.code,{children:"seminar-08"})," and are focused on testing the\nprogram as whole. Basic smoke test is already included in ",(0,s.jsx)(n.code,{children:"usage"})," test case."]}),"\n",(0,s.jsx)(n.p,{children:"They can be run via:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ make check-functional\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When testing ",(0,s.jsx)(n.code,{children:"hangman"})," function (the game loop), it is suggested to create\nfunctional tests."]}),"\n",(0,s.jsx)(n.p,{children:"When submitting the files for review, please leave out functional tests that\nwere given as a part of the assignment, so that it is easier to navigate, I\nwill drag the common files myself. :)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Whole test suite can be run via:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ make check\n"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"summary-of-the-gameplay",children:"Summary of the gameplay"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Secret word gets chosen from the file that's path is given as an argument."}),"\n",(0,s.jsx)(n.li,{children:"You get 8 guesses."}),"\n",(0,s.jsx)(n.li,{children:"Invalid characters don't count."}),"\n",(0,s.jsx)(n.li,{children:"Already guessed characters don't count, even if not included in the secret."}),"\n",(0,s.jsxs)(n.li,{children:["You can guess the whole word at once","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you get it right, you won, game ends."}),"\n",(0,s.jsx)(n.li,{children:"If you don't get it right, you get to see the secret, game ends."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"In case of end of input, game finishes via force."}),"\n",(0,s.jsx)(n.li,{children:"In case of invalid input, no guesses are subtracted, game carries on."}),"\n",(0,s.jsx)(n.li,{children:"Letters and words are not case sensitive."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"suggested-workflow",children:"Suggested workflow"}),"\n",(0,s.jsxs)(n.p,{children:["As we have talked about on the seminar, I suggest you to follow\n",(0,s.jsx)(n.em,{children:"Test-Driven Development"}),"\nin this case."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"TDD workflow",src:t(27420).Z+"",width:"2814",height:"1652"})}),"\n",(0,s.jsx)(n.p,{children:"In our current scenario we are already in the stage of refactoring and fixing the\nbugs. Therefore try to follow this succession of steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Try to reproduce the bug."}),"\n",(0,s.jsx)(n.li,{children:"Create a test that proves the presence of the bug."}),"\n",(0,s.jsx)(n.li,{children:"Fix the bug."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In case you are submitting the bonus via GitLab, it is helpful to commit tests\nbefore commiting the fixes, so that it is apparent that the bug is manifested.\nExample of ",(0,s.jsx)(n.code,{children:"git log"})," (notice that the first line represents latest commit):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"feat: Implement fizz_buzzer\ntest: Add tests for fizz_buzzer\nfix: Fix NULL-check in print_name\ntest: Add test for NULL in print_name\n"})}),"\n",(0,s.jsx)(n.h2,{id:"tasks",children:"Tasks"}),"\n",(0,s.jsx)(n.p,{children:"As to your tasks, there are multiple things wrong in this project."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'There are 2 "bugs" that cannot be detected via tests, i.e. they are not bugs\nthat affect functionality of the game.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["There is one evil bug in ",(0,s.jsx)(n.code,{children:"get_word"}),". It is not required to be fixed ;) Assign\nit the lowest priority."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"There are some tests failing. Please try to figure it out, so you have green\ntests for the rest :)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["We have gotten a bug report for ",(0,s.jsx)(n.code,{children:"word_guessed"}),", all we got is"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["doesn't work when there are too many ",(0,s.jsx)(n.code,{children:"a"}),"s"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Please try to replicate the bug and create a tests, so we don't get any\nregression later on."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"One hidden bug :) Closely non-specified, we cannot reproduce it and we were\ndrunk while playing the game, so we don't remember a thing. :/"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Try to cover as much code via the tests as possible. We are not going to look\nat the metrics, but DRY is violated a lot, so as a last task try to remove as\nmuch of the duplicit code as possible."}),"\n",(0,s.jsx)(n.p,{children:"Tests should help you a lot in case there are some regressions."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["In case you wonder why there are always 3 same words in the file with words, it\nis because of the ",(0,s.jsx)(n.code,{children:"get_word"})," bug. It is not a bug that can be easily fixed, so\nit is a not requirement at all and you can still get all points for the bonus ;)"]}),"\n",(0,s.jsx)(n.h2,{id:"dictionary",children:"Dictionary"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Functional_testing",children:"Functional tests"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Smoke_testing_%28software%29",children:"Smoke test"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself",children:"DRY"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"submitting",children:"Submitting"}),"\n",(0,s.jsx)(n.p,{children:"In case you have any questions, feel free to reach out to me."}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},27420:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tdd_lifecycle-327ad9ee0ed8318ed11e19a28e02b2cc.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(67294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);