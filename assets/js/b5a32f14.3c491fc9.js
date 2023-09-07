"use strict";(self.webpackChunkfi=self.webpackChunkfi||[]).push([[2433],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={title:"How can Copr help with broken dependencies",description:"Copr comes to save you when maintainer doesn't care.",date:new Date("2023-08-02T00:00:00.000Z"),authors:[{key:"mf",title:"a.k.a. your opinionated admin"}],tags:["\ud83c\udfed","red-hat","copr","admin","vps"]},i=void 0,s={permalink:"/blog/2023/08/02/copr",editUrl:"https://gitlab.com/mfocko/blog/tree/main/blog/2023-08-02-copr.md",source:"@site/blog/2023-08-02-copr.md",title:"How can Copr help with broken dependencies",description:"Copr comes to save you when maintainer doesn't care.",date:"2023-08-02T00:00:00.000Z",formattedDate:"August 2, 2023",tags:[{label:"\ud83c\udfed",permalink:"/blog/tags/\ud83c\udfed"},{label:"red-hat",permalink:"/blog/tags/red-hat"},{label:"copr",permalink:"/blog/tags/copr"},{label:"admin",permalink:"/blog/tags/admin"},{label:"vps",permalink:"/blog/tags/vps"}],readingTime:3.44,hasTruncateMarker:!0,authors:[{name:"Matej Focko",email:"me+blog@mfocko.xyz",title:"a.k.a. your opinionated admin",url:"https://gitlab.com/mfocko",imageURL:"https://github.com/mfocko.png",key:"mf"}],frontMatter:{title:"How can Copr help with broken dependencies",description:"Copr comes to save you when maintainer doesn't care.",date:"2023-08-02T00:00:00.000Z",authors:[{key:"mf",title:"a.k.a. your opinionated admin"}],tags:["\ud83c\udfed","red-hat","copr","admin","vps"]},nextItem:{title:"4th week of Advent of Code '22 in Rust",permalink:"/blog/aoc-2022/4th-week"}},p={authorsImageUrls:[void 0]},l=[{value:"How does Copr repositories work?",id:"how-does-copr-repositories-work",level:2},{value:"My issue",id:"my-issue",level:2},{value:"How can Copr help?",id:"how-can-copr-help",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:l},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you decide to run Fedora on your VPS, you might get screwed over by using\nrandom repositories\u2026"),(0,r.kt)("p",null,"When I \u201creserved\u201d my VPS",(0,r.kt)("sup",{parentName:"p",id:"fnref-1-d4045e"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1-d4045e",className:"footnote-ref"},"1"))," back in June '20, I slapped Fedora on it without\nthinking. I bet 99% of people would say that I'm crazy for doing such thing",(0,r.kt)("sup",{parentName:"p",id:"fnref-2-d4045e"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2-d4045e",className:"footnote-ref"},"2")),",\n",(0,r.kt)("strong",{parentName:"p"},"BUT")," I've been using Fedora on my PCs for some time already and it felt very\nstable and natural to just use, even for VPS."),(0,r.kt)("p",null,"One of the first things I've done was setting up a mail server. You may guess\nwhat's the fun part about having a mail server\u2026 Yes, it's all the spam you\nreceive and only then you realize how much \u201ccrap\u201d gets filtered on free mail\nservices. To battle this problem I chose to use\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rspamd/rspamd"},"rspamd")," that had CentOS support, but someone\nhad a ",(0,r.kt)("a",{parentName:"p",href:"https://copr.fedorainfracloud.org/"},"Copr")," repository that I used to\ninstall it."),(0,r.kt)("h2",{id:"how-does-copr-repositories-work"},"How does Copr repositories work?"),(0,r.kt)("p",null,"If you have ever used Ubuntu, you might be familiar with the concept since it is\nvery close to ",(0,r.kt)("a",{parentName:"p",href:"https://help.ubuntu.com/community/PPA"},"PPAs"),"."),(0,r.kt)("p",null,"tl;dr of the whole process consists of"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"enabling the Copr repository, and"),(0,r.kt)("li",{parentName:"ol"},"installing the desired package.")),(0,r.kt)("p",null,"So in shell you would do"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# dnf copr enable \u2039copr-repository\u203a\n# dnf install \u2039package-from-the-repository\u203a\n")),(0,r.kt)("p",null,"And\u2026 that's it! Nothing else needed! Simple, right? And literally same process\nas you would do for the PPA."),(0,r.kt)("admonition",{title:"AUR",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"On the other hand, if you are familiar with the archLinux, you definitely know\nAUR and what it can do for you. Copr repository is pretty similar, but the\npackages are prebuilt in Copr and Copr repositories can carry the required\ndependencies for said packages, which simplifies the distribution, and can even\nhelp with installing singular packages (when you just need the dependency, not\neverything).")),(0,r.kt)("h2",{id:"my-issue"},"My issue"),(0,r.kt)("p",null,"Now you might wonder how would I use it on my VPS. It's rather simple, once in\n6 months a new Fedora release comes out. And you need to upgrade to newer\nrelease\u2026 You don't need to do it right away and for such setup it probably isn't\neven recommended."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Fedora releases are supported for a year, i.e. they live 6 months till the next\nrelease and then another 6 months till another release."),(0,r.kt)("p",{parentName:"admonition"},"Some people prefer to run one version \u201cbehind\u201d. If you ever decide to run it on\nyour home server or in a similar setup, it might be a pretty good idea to\nfollow. I'm using the \u201clatest greatest\u201d, cause why not \ud83d\ude04"),(0,r.kt)("p",{parentName:"admonition"},"One way or another, you still need to bump the release every six months, unless\nyou'd bump 2 releases at once every year, which would be a decision, since, at\nleast I, cannot see any benefits in it\u2026 You don't go for \u201cstability\u201d, cause once\na year you switch to the latest release and then, before you bump, you use one\nyear old software, so you're not even using the latest.")),(0,r.kt)("p",null,"Fast-forward 2 years in the future, new Fedora release came out (October '22)\nand I was doing an upgrade. Dependencies of the rspamd have been updated and\nrspamd builds in Copr have failed and no one fixed it. Cool, so now I can\nupgrade, but can either ignore the dependencies or uninstall the rspamd\u2026"),(0,r.kt)("h2",{id:"how-can-copr-help"},"How can Copr help?"),(0,r.kt)("p",null,"I have managed to find\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rspamd/rspamd/blob/master/rpm/rspamd.spec"},"specfile")," for the\nrspamd package that they use for CentOS. There were some files apart from the\nspecfile, so I had to make an SRPM locally and then\u2026 I just uploaded the SRPM\nto the Copr to\n",(0,r.kt)("a",{parentName:"p",href:"https://copr.fedorainfracloud.org/coprs/mfocko/rspamd/build/5046567/"},"build"),"\nan RPM."),(0,r.kt)("p",null,"I have switched the previous Copr repository for rspamd with my own and happily\nproceeded with the upgrade."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Copr is heavily used for testing builds on the upstream with\n",(0,r.kt)("a",{parentName:"p",href:"https://packit.dev"},"Packit"),". However, as you can see, it is possible to use it\n",(0,r.kt)("strong",{parentName:"p"},"very well")," for packaging your own stuff and avoiding issues (such as the one\nI have described above), if need be."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1-d4045e"},(0,r.kt)("a",{parentName:"li",href:"https://vpsfree.cz"},"vpsFree.cz"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1-d4045e",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2-d4045e"},"Even though I've been running archLinux on some Raspberry Pi's and also\non one of my \u201chome servers\u201d, before getting the VPS. You could say I like\nto live on the edge\u2026",(0,r.kt)("a",{parentName:"li",href:"#fnref-2-d4045e",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);