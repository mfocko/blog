"use strict";(self.webpackChunkfi=self.webpackChunkfi||[]).push([[6689],{55268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=n(85893),s=n(11151);const o={title:"DevConf.cz 2024",description:"Sharing my experience on DevConf.cz 2024.\n",date:new Date("2024-06-19T00:00:00.000Z"),authors:[{key:"mf",title:"a.k.a. exhausted DevConf attendee"}],tags:["\ud83c\udfed","red-hat","fedora","devconf","conferences"]},i=void 0,r={permalink:"/blog/2024/06/19/devconf-2024",editUrl:"https://github.com/mfocko/blog/tree/main/blog/2024-06-19-devconf-2024.md",source:"@site/blog/2024-06-19-devconf-2024.md",title:"DevConf.cz 2024",description:"Sharing my experience on DevConf.cz 2024.\n",date:"2024-06-19T00:00:00.000Z",formattedDate:"June 19, 2024",tags:[{label:"\ud83c\udfed",permalink:"/blog/tags/\ud83c\udfed"},{label:"red-hat",permalink:"/blog/tags/red-hat"},{label:"fedora",permalink:"/blog/tags/fedora"},{label:"devconf",permalink:"/blog/tags/devconf"},{label:"conferences",permalink:"/blog/tags/conferences"}],readingTime:5.355,hasTruncateMarker:!0,authors:[{name:"Matej Focko",email:"me+blog@mfocko.xyz",title:"a.k.a. exhausted DevConf attendee",url:"https://gitlab.com/mfocko",imageURL:"https://github.com/mfocko.png",key:"mf"}],frontMatter:{title:"DevConf.cz 2024",description:"Sharing my experience on DevConf.cz 2024.\n",date:"2024-06-19T00:00:00.000Z",authors:[{key:"mf",title:"a.k.a. exhausted DevConf attendee"}],tags:["\ud83c\udfed","red-hat","fedora","devconf","conferences"]},unlisted:!1,nextItem:{title:"LTS distributions",permalink:"/blog/2024/02/07/lts-distros"}},h={authorsImageUrls:[void 0]},l=[{value:"Day 1",id:"day-1",level:2},{value:"Day 2",id:"day-2",level:2},{value:"Day 3",id:"day-3",level:2},{value:"Picks from the Packit Team",id:"picks-from-the-packit-team",level:2},{value:"Wrap up",id:"wrap-up",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"I'd like to share my experience and views on some of the talks that I've\nattended on the DevConf.cz 2024."}),"\n",(0,a.jsx)(t.h2,{id:"day-1",children:"Day 1"}),"\n",(0,a.jsx)(t.p,{children:"Let's start with the first day which was Thursday this year as opposed to the\nprevious years when the conference started on Friday and finished on Sunday."}),"\n",(0,a.jsxs)(t.p,{children:["Let's start with the ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/AD3HWR/",children:"keynote"})}),". The keynote wasn't very intersting, at some of\nthe slides actually felt like advertisement for other talks on the topic of the\nAI\u2026"]}),"\n",(0,a.jsxs)(t.p,{children:["Next talk about ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/3UKGLB/",children:"event-driven Ansible"})})," was way more interesting. It allows you\nto run Ansible playbooks after provisioning hosts, or on certain events, such as\ndiscovered vulnerabilities. On one hand it feels like a very nice thing, but on\nthe other one I can't help but to think how you need to write the playbooks, so\nthat they are generic enough. One more example that's been given comes from the\npossibility to react to tickets, e.g., outages and this feels like something\nthat could be abused to cause DoS."]}),"\n",(0,a.jsxs)(t.p,{children:["Afterwards we've seen two lightning talks, one about\n",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/KSDRWL/",children:"choosing the right OpenShift size"})})," which was a pretty quick, but detailly\nlisted all of the possible ways you can deploy OpenShift. This lightning talk\nwas followed by the first AI (lightning) talk I've attended about\n",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/H9QFLM/",children:"rapid prototyping"})})," of the open-source AI models."]}),"\n",(0,a.jsxs)(t.p,{children:["As someone who's involved in the automation of the RPM packaging and testing, of\ncourse, we had to attend ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/NNKT3F/",children:"Learning from Nix"})}),". Nix has a very intriguing\nconcept which is pretty powerful, but painful at the same time. This can be\nsummed up pretty nicely by ",(0,a.jsx)(t.a,{href:"https://twitch.tv/tsoding",children:"Tsoding"})," who got asked about some tips & tricks for\nsomeone who wants to try out NixOS:"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Just don't."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"And now we're moving into a section where everything revolves about the Packit\nTeam :)"}),"\n",(0,a.jsxs)(t.p,{children:["First talk about ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/ECU7QS/",children:"changelogs"})})," was an interactive session that was (probably)\nmeant to share different approaches we take to handle this rather convoluted\ntopic that involves changelogs on both upstream and also on downstream with no\nrules",(0,a.jsx)(t.sup,{children:(0,a.jsx)(t.a,{href:"#user-content-fn-1-ba1b92",id:"user-content-fnref-1-ba1b92","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://i.imgur.com/YHstMAt.jpg",alt:"changelogs"})}),"\n",(0,a.jsxs)(t.p,{children:["Next one was about ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/7C38GJ/",children:"static analysis"})})," done by ",(0,a.jsx)(t.a,{href:"https://openscanhub.dev/",children:"OpenScanHub"}),". I like the idea of\nrunning the static analysis that can uncover nasty bugs (as it has been even\nshowed in the talk) at the same time as they are introduced. I gotta admit that\nafter seeing the UI of the ",(0,a.jsx)(t.a,{href:"https://openscanhub.fedoraproject.org/",children:"deployed OpenScanHub"})," on the Fedora Infra, I couldn't\nhelp but to think about the ",(0,a.jsx)(t.a,{href:"https://x.com/usgraphics",children:"United States Graphics Company"})," ","\ud83d\ude04"," The UI is\nto the point, no fancy annoying shit, you get what you need, it's hard to get\nlost. ",(0,a.jsx)(t.strong,{children:"Just simplicity."})," Best kind of UI/UX in my opinion."]}),"\n",(0,a.jsxs)(t.p,{children:["After the OpenScanHub talk we're getting to talks that were taken in a totally\ndifferent direction from the usual talks you're used to ","\ud83d\ude09"," First one was\ngiven title of ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/X8SYDG/",children:"\u201cIndiana Jones and obsoleted projects\u201d"})})," by ",(0,a.jsx)(t.a,{href:"https://rodina-sucha.cz/@mirek",children:"Mirek"}),". He talked\nabout projects that got obsoleted, but started with projects that had no\nrelation to IT field at all. I'd mark this talk as a ",(0,a.jsx)(t.em,{children:"stand up"})," without any\nhesitation."]}),"\n",(0,a.jsxs)(t.p,{children:["And finally we will wrap up the first day with the talk where speakers spoke the\nleast\u2026 ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/BDMWF3/",children:"\u201cLet the users speak!\u201d"})})," that involved users of both Packit and\nTesting Farm who spoke about their use case and benefits they gained from using\nboth services in a symbiosis."]}),"\n",(0,a.jsx)(t.h2,{id:"day-2",children:"Day 2"}),"\n",(0,a.jsxs)(t.p,{children:["On the second day I've attended less talks to not burn myself out :) I've\nstarted with an AI-related talk with title ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/QSF9QQ/",children:"\u201cAI: Open source will save us!\u201d"})}),",\neven though this talk has been improvised, as the speakers from the schedule\ncouldn't have attended, it provided a nice overview what ",(0,a.jsx)(t.a,{href:"https://github.com/instructlab/instructlab",children:"InstructLab"})," can do\nand how can you \u201cfeed\u201d the relevant info into the language models by yourself."]}),"\n",(0,a.jsxs)(t.p,{children:["After that I attended a ",(0,a.jsx)(t.em,{children:"\u201ccoffee enthusiasts Meetup\u201d"})," which was very nice and,\nof course, an organized chaos ","\ud83d\ude09"]}),"\n",(0,a.jsxs)(t.p,{children:["Before attending the social event I wrapped up the second day with a lightning\ntalk about ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/SXWE7K/",children:"recent updates in Toolbx"})}),". I've used both ",(0,a.jsx)(t.a,{href:"https://containertoolbx.org/",children:"toolbx"})," and\n",(0,a.jsx)(t.a,{href:"https://distrobox.it/",children:"distrobox"}),", so it's nice to see the improvements in progress and also that both\nprojects are well and lively."]}),"\n",(0,a.jsx)(t.h2,{id:"day-3",children:"Day 3"}),"\n",(0,a.jsxs)(t.p,{children:["On the third day I've attended only in the afternoon. \u201cStarted\u201d my day with\na discussion ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/8PARM8/",children:"\u201cLeadership: Where people skills meet programmers\u201d"})})," which was\nvery nice for gaining an insight into how developer, manager and QE lead roles\noverlap."]}),"\n",(0,a.jsxs)(t.p,{children:["That talk has been followed up by a talk about ",(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/8T88MT/",children:"role rotation"})," in our Packit\nTeam. I would say it is a nice \u201cupgrade\u201d to the agile process which allows you\nto not create a single point of failure in the mundane and repetitive processes\nwithin your team."]}),"\n",(0,a.jsxs)(t.p,{children:["And this day has been finished off with a talk about ",(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/WVNJZS/",children:"shifting left"})," in Podman.\nIt's nice to see how other teams utilize our Packit Service and also the\nservices we rely on, such as ",(0,a.jsx)(t.a,{href:"https://copr.fedorainfracloud.org/",children:"Copr"})," or ",(0,a.jsx)(t.a,{href:"https://docs.testing-farm.io/Testing%20Farm/0.1/index.html",children:"Testing Farm"}),". With the help of Cockpit\ntests they can catch breaking changes early on, or even bugs that have been\nintroduced and break usage of the dependent projects."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://i.imgur.com/bp6FxT9.jpg",alt:"shifting left"})}),"\n",(0,a.jsx)(t.h2,{id:"picks-from-the-packit-team",children:"Picks from the Packit Team"}),"\n",(0,a.jsx)(t.p,{children:"On the Tuesday, during our Packit stand up, I have managed to abuse my\nKanban Lead role to collect some of the talks that each of us would recommend:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/H9QFLM/",children:"Rapid Prototyping"})," with Open Source AI Models"]}),"\n",(0,a.jsxs)(t.li,{children:["Do you like your ",(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/ECU7QS/",children:"changelogs"}),"?"]}),"\n",(0,a.jsxs)(t.li,{children:["OpenScanHub - ",(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/7C38GJ/",children:"Static Analysis"})," of a Linux Distribution"]}),"\n",(0,a.jsxs)(t.li,{children:["Creating a ",(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/RXKMKA/",children:"Language Server"})," for RPM Spec Files"]}),"\n",(0,a.jsxs)(t.li,{children:["Containers and Kubernetes Made Easy: A 15-minute dive into ",(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/HKWP7V/",children:"Podman Desktop"})]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://pretalx.com/devconf-cz-2024/talk/8PARM8/",children:"\u201cLeadership: Where people skills meet programmers\u201d"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"wrap-up",children:"Wrap up"}),"\n",(0,a.jsxs)(t.p,{children:["I have to admit that these 3 days have been pretty exhaustive, including\ninformation overload ","\ud83d\ude04"," but at the same time it was really nice to meet\nwith the colleagues and at least some of our users who are not based in Brno."]}),"\n",(0,a.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,a.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{id:"user-content-fn-1-ba1b92",children:["\n",(0,a.jsxs)(t.p,{children:["except for the Fedora's downstream ;) ",(0,a.jsx)(t.a,{href:"#user-content-fnref-1-ba1b92","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var a=n(67294);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);