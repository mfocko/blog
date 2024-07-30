"use strict";(self.webpackChunkfi=self.webpackChunkfi||[]).push([[6074],{53742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(85893),a=t(11151);const s={title:"Raspberry Alma",description:"Finally migrating to a stable distro on Raspberry\u2026\n",image:"https://i.imgur.com/svLIfIg.png",date:new Date("2024-07-20T00:00:00.000Z"),authors:[{key:"mf",title:"a.k.a. useless admin or \u201cSir Tweak-a-Lot\u201d"}],tags:["raspberry-pi","opensuse","almalinux","ansible","self-hosting"]},o=void 0,r={permalink:"/blog/2024/07/20/raspberry-alma",editUrl:"https://github.com/mfocko/blog/tree/main/blog/2024-07-20-raspberry-alma.md",source:"@site/blog/2024-07-20-raspberry-alma.md",title:"Raspberry Alma",description:"Finally migrating to a stable distro on Raspberry\u2026\n",date:"2024-07-20T00:00:00.000Z",formattedDate:"July 20, 2024",tags:[{label:"raspberry-pi",permalink:"/blog/tags/raspberry-pi"},{label:"opensuse",permalink:"/blog/tags/opensuse"},{label:"almalinux",permalink:"/blog/tags/almalinux"},{label:"ansible",permalink:"/blog/tags/ansible"},{label:"self-hosting",permalink:"/blog/tags/self-hosting"}],readingTime:5.965,hasTruncateMarker:!0,authors:[{name:"Matej Focko",email:"me+blog@mfocko.xyz",title:"a.k.a. useless admin or \u201cSir Tweak-a-Lot\u201d",url:"https://gitlab.com/mfocko",imageURL:"https://github.com/mfocko.png",key:"mf"}],frontMatter:{title:"Raspberry Alma",description:"Finally migrating to a stable distro on Raspberry\u2026\n",image:"https://i.imgur.com/svLIfIg.png",date:"2024-07-20T00:00:00.000Z",authors:[{key:"mf",title:"a.k.a. useless admin or \u201cSir Tweak-a-Lot\u201d"}],tags:["raspberry-pi","opensuse","almalinux","ansible","self-hosting"]},unlisted:!1,nextItem:{title:"DevConf.cz 2024",permalink:"/blog/2024/06/19/devconf-2024"}},l={authorsImageUrls:[void 0]},d=[{value:"Purpose and past",id:"purpose-and-past",level:2},{value:"Choosing the next distro",id:"choosing-the-next-distro",level:2},{value:"Installing AlmaLinux 9",id:"installing-almalinux-9",level:2},{value:"Setting up the \u201clocal server\u201d",id:"setting-up-the-local-server",level:2},{value:"SELinux",id:"selinux",level:3},{value:"Certbot",id:"certbot",level:3},{value:"Cockpit",id:"cockpit",level:3},{value:"CUPS",id:"cups",level:3},{value:"DDNS",id:"ddns",level:3},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Every now and then I get angry at something not working on the Raspberry and so\nI decide to swap the OSs. Now it's time for something new and not expected."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/svLIfIg.png",alt:"fastfetch on the Raspberry"})}),"\n",(0,i.jsx)(n.h2,{id:"purpose-and-past",children:"Purpose and past"}),"\n",(0,i.jsx)(n.p,{children:"After I've subscribed a VPS at vpsfree.cz for myself, I got an opportunity to\ndrop using an old laptop for running a local \u201cserver\u201d. At that point all I've\nhad was self-hosted Gitea, some aliases on nginx and that was all. Out with the\nold laptop and let's begin experimenting with the Raspberry, right?"}),"\n",(0,i.jsxs)(n.p,{children:["The first OS that got on the Raspberry was ",(0,i.jsx)(n.em,{children:"archLinux"})," (BTW\u2026). I've been using\nit for a long time and had the best experience with. I haven't hit any issues,\nbut at the same time, you need to keep in mind we're running it off the SD card\nand they are known to get worn out quickly, especially if you write ",(0,i.jsx)(n.strong,{children:"a lot"}),"\nwhich\u2026 guess what, is quite common with rolling and bleeding-edge distribution\n","\ud83d\ude04"," And the worst part is keeping up with the updates."]}),"\n",(0,i.jsxs)(n.p,{children:["And that's how I migrated to openSUSE Leap :) I've been using openSUSE for at\nleast 4 years during the high school and a bit more before and after\u2026 openSUSE\nis very user-friendly (YaST is amazing) distribution and honestly just works.\nHowever the cost lies in Cockpit not being available",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-1-930d69",id:"user-content-fnref-1-930d69","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," and some weird design\ndecision, e.g., networking stack is very fragile",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-2-930d69",id:"user-content-fnref-2-930d69","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"And I've got finished in the recent weeks with some issues during updates, but\nthose can be, of course, blamed on me, cause I don't watch over it as I should\n:)"}),"\n",(0,i.jsx)(n.p,{children:"I should probably sum up the latest state of what was running before I decided\nto go for a merciless wipe. So here it is:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"local Gitea instance, just in case and out of habit"}),"\n",(0,i.jsx)(n.li,{children:"Wireguard connection for easy administration"}),"\n",(0,i.jsx)(n.li,{children:"Certbot & nginx; nginx is probably the biggest piece of work as it also\nprovides reverse proxy for mikrotik router and Ubiquiti AP provided by ISP"}),"\n",(0,i.jsxs)(n.li,{children:["CUPS server that has joined the journey once the HP printer was too big of\na pain in the ","\ud83c\udf51"," to handle via USB"]}),"\n",(0,i.jsx)(n.li,{children:"DDNS service, cause there's public, but dynamic IP from ISP"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"choosing-the-next-distro",children:"Choosing the next distro"}),"\n",(0,i.jsxs)(n.p,{children:["I had the switch in mind for some time, but I couldn't decide on the\ndistribution\u2026 In the ideal world, I'd just slap CentOS Stream on it, ",(0,i.jsx)(n.strong,{children:"but"}),"\nthere's no Raspberry \u201csupport\u201d for CentOS",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-3-930d69",id:"user-content-fnref-3-930d69","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),". So the other choices were plain\nDebian and something else from the RHEL-family which could be either Fedora",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-4-930d69",id:"user-content-fnref-4-930d69","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})}),",\nAlmaLinux or Rocky Linux."]}),"\n",(0,i.jsxs)(n.p,{children:["I should admit that I'm not a big Debian fan ","\ud83d\ude04"," Even though ",(0,i.jsx)(n.em,{children:"12 bookworm"}),"\nis relatively on the same terms as anything that tries to match RHEL9, it still\nfeels weird. That might be caused by the fact that I've switched RPM-based\ndistributions a long time ago (including screwing around with archLinux and\n",(0,i.jsx)(n.em,{children:"Jean Tux"}),(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-5-930d69",id:"user-content-fnref-5-930d69","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})}),") and never looked back (except for the desktop with NVIDIA GPU\nthat's pain in the ","\ud83c\udf51"," and only Ubuntu runs reasonably\u2026 well)."]}),"\n",(0,i.jsxs)(n.p,{children:["Wearing the ",(0,i.jsx)(n.em,{children:"red fedora"})," also ruled out the Rocky Linux ","\ud83d\ude42","\nas I don't endorse nor support their ",(0,i.jsx)(n.em,{children:"way of operation"})]}),"\n",(0,i.jsx)(n.p,{children:"So AlmaLinux it is!"}),"\n",(0,i.jsx)(n.h2,{id:"installing-almalinux-9",children:"Installing AlmaLinux 9"}),"\n",(0,i.jsx)(n.p,{children:"I'm going with AlmaLinux 9.4 on Raspberry Pi 3B. Opened the AlmaLinux's wiki and\nfirst thing I got slapped by is"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'original Raspberry Pi 3 (without "+" models) are not supported'}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["GREAT! I took the risk, installed it. And it didn't boot ","\ud83d\ude01"," It turns out\nthat the WiFi kernel module caused a kernel panic on the boot. From some people\non Reddit I found that it caused some issues, ",(0,i.jsx)(n.strong,{children:"but"})," worked, so I've just\ndecided to pop the SD card back in a PC and deny the module from loading. Voil\xe0!\nIt boots!"]}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-the-local-server",children:"Setting up the \u201clocal server\u201d"}),"\n",(0,i.jsx)(n.admonition,{title:"Public disclaimer",type:"caution",children:(0,i.jsx)(n.p,{children:"I suck as admin\u2026"})}),"\n",(0,i.jsxs)(n.p,{children:["Both the Raspberry and my VPS are maintained in the ",(0,i.jsx)(n.em,{children:"caveman-style"})," ","\ud83d\ude04"," And\nthat's why I've decided to start with the less painful one (the Raspberry) to\nwrite the Ansible playbooks for :)"]}),"\n",(0,i.jsxs)(n.p,{children:["I have already managed to migrate my dotfiles and \u201cbootstrap\u201d to be run via\nAnsible, so I've just proceeded to extend that and also reorganize it a bit,\ncause the roles grew in size ","\ud83d\udc40"]}),"\n",(0,i.jsx)(n.p,{children:"And I have to admit that I've been mostly successful. Let's delve into details!"}),"\n",(0,i.jsx)(n.h3,{id:"selinux",children:"SELinux"}),"\n",(0,i.jsxs)(n.p,{children:["Yeah\u2026 that's something that hasn't been running on the openSUSE and I totally\nforgot that hardening the SSHD config (including port change) requires notifying\nSELinux about the port change :) Of course I managed to cut myself off ","\ud83d\ude04"]}),"\n",(0,i.jsx)(n.h3,{id:"certbot",children:"Certbot"}),"\n",(0,i.jsx)(n.p,{children:"Certbot was the service I feared the most, as there is no reasonable way to\nautomate this. You need to run it manually at least the first time. But in the\nend, it was quite OK."}),"\n",(0,i.jsx)(n.h3,{id:"cockpit",children:"Cockpit"}),"\n",(0,i.jsxs)(n.p,{children:["One downside of ",(0,i.jsx)(n.em,{children:"caveman-style"})," administration is the fact that you forget about\nthe tweaking you do. Reverse proxy breaks Cockpit by default. I was reading\nthrough the documentation, but haven't managed to find the part that mentioned\nthe specific settings I had to change. When I was about to open the PR with\nproposed changes, I noticed that it was in a different chapter ","\ud83e\udd26\u200d\u2642\ufe0f"]}),"\n",(0,i.jsx)(n.h3,{id:"cups",children:"CUPS"}),"\n",(0,i.jsxs)(n.p,{children:["Cups went rather smoothly\u2026 except for the fact that it doesn't work on the one\nand only Ubuntu desktop and there are no logs with reason why it fails to add\nthe printer ","\ud83d\ude42"]}),"\n",(0,i.jsxs)(n.p,{children:["Additionally installing the HP printer via ",(0,i.jsx)(n.code,{children:"hp-setup"})," is very interesting\nexperience\u2026 I would've never expected the CLI to have a progress bar that opens\nup at 0% and then just switches into ",(0,i.jsx)(n.em,{children:"terms & conditions"}),"\u2026 Yes, that progress\nbar stayed at 0% even though it was downloading a PPD file ",(0,i.jsx)(n.strong,{children:"and progressing"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"ddns",children:"DDNS"}),"\n",(0,i.jsxs)(n.p,{children:["I had smallish issue with deciding how to run the DDNS service. I went with\ndropping my own buggy script and had to choose a DDNS client. Found ",(0,i.jsx)(n.em,{children:"inadyn"}),"\n(that isn't built at all for Fedora and family) and ",(0,i.jsx)(n.em,{children:"ddclient"}),". The ",(0,i.jsx)(n.em,{children:"ddclient"}),"\nhad some not very nice feedback, and the version that introduced the Cloudflare\nsupport I need, was not included, so I dropped that. ",(0,i.jsx)(n.em,{children:"inadyn"})," is not packaged,\nso I've set it up as systemd timer spawning a container :)"]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"Overall I've had a very pleasant experience setting up the AlmaLinux on the\nRaspberry. Even though I took a gamble with the officially unsupported model of\nRPi, it works. And it also seems to be filling the purpose it has!"}),"\n",(0,i.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{id:"user-content-fn-1-930d69",children:["\n",(0,i.jsxs)(n.p,{children:["AFAIK there was some issue with dependencies, so it is available on\nTumbleweed and also in the latest Leap 15.6 ",(0,i.jsx)(n.a,{href:"#user-content-fnref-1-930d69","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-2-930d69",children:["\n",(0,i.jsxs)(n.p,{children:["By default uses ",(0,i.jsx)(n.em,{children:"wicked"})," and even when running it on desktop via\n",(0,i.jsx)(n.em,{children:"NetworkManager"})," I've hit some inconsistencies with DNS, but\u2026 DNS ",(0,i.jsx)(n.strong,{children:"is"})," the\nDevil, right? ","\ud83d\ude01 ",(0,i.jsx)(n.a,{href:"#user-content-fnref-2-930d69","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-3-930d69",children:["\n",(0,i.jsxs)(n.p,{children:["And neither RHEL to be fair ;) ",(0,i.jsx)(n.a,{href:"#user-content-fnref-3-930d69","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-4-930d69",children:["\n",(0,i.jsxs)(n.p,{children:["6-month release cycle goes against the idea to have the least amount of\nupdates as possible\u2026 and on top of that I think that we can safely agree on\nthe fact that Fedora feels like ",(0,i.jsx)(n.em,{children:"archLinux with extra steps"})," ",(0,i.jsx)(n.a,{href:"#user-content-fnref-4-930d69","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-5-930d69",children:["\n",(0,i.jsxs)(n.p,{children:["Gentoo\u2026 ",(0,i.jsx)(n.a,{href:"#user-content-fnref-5-930d69","data-footnote-backref":"","aria-label":"Back to reference 5",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(67294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);