"use strict";(self.webpackChunkfi=self.webpackChunkfi||[]).push([[6890],{40707:(e,t,i)=>{i.r(t),i.d(t,{default:()=>x});var r=i(67294),o=i(80647),s=i(86010);const n="card_n_Wj",a="contributionsContainer_vdAK",c="buttons_UAd1";var l,h;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},d.apply(this,arguments)}const p=e=>{let{title:t,titleId:i,...o}=e;return r.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-labelledby":i},o),t?r.createElement("title",{id:i},t):null,l||(l=r.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),h||(h=r.createElement("path",{d:"M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z"})))};var u=i(85893);const g=e=>{let{title:t,description:i,contribution:r,repoURL:o}=e;return(0,u.jsx)("div",{className:"col col--12",children:(0,u.jsxs)("div",{className:(0,s.Z)("card",n),children:[(0,u.jsx)("div",{className:"card__header",children:(0,u.jsx)("h2",{children:t})}),(0,u.jsx)("div",{className:"card__body",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsxs)("div",{className:"col col--6",children:[(0,u.jsx)("h6",{children:"Description"}),i]}),(0,u.jsxs)("div",{className:(0,s.Z)("col col--6",a),children:[(0,u.jsx)("h6",{children:"Contribution"}),r]})]})}),(0,u.jsx)("div",{className:"card__footer",children:(0,u.jsx)("div",{className:c,children:(0,u.jsxs)("a",{href:o,target:"_blank",className:"button button--secondary button--outline",children:[(0,u.jsx)("span",{className:"button__icon",children:(0,u.jsx)(p,{})}),"See repository"]})})})]})})},b=[{title:"centpkg",description:(0,u.jsx)("p",{children:"A tool for working with CentOS dist-git."}),contribution:(0,u.jsxs)("p",{children:["I have fixed a bug that caused ",(0,u.jsx)("code",{children:"centpkg-sig"})," to be unable to clone the dist-git repos from SIGs."]}),repoURL:"https://git.centos.org/centos/centpkg"},{title:"Fedora Messaging",description:(0,u.jsx)("p",{children:"A library for sending AMQP messages with JSON schema in Fedora infrastructure."}),contribution:(0,u.jsx)("p",{children:"I contributed a small packaging fix that has been introduced by a new feature."}),repoURL:"https://github.com/fedora-infra/fedora-messaging"},{title:"flexmock",description:(0,u.jsx)("p",{children:"Flexmock is a testing library for Python that makes it easy to create mocks, stubs, and fakes."}),contribution:(0,u.jsx)("p",{children:"I've converted the interception for pytest after they've changed their internal design to use pytest's hook system."}),repoURL:"https://github.com/flexmock/flexmock"},{title:"tmt",description:(0,u.jsxs)("p",{children:["The ",(0,u.jsx)("code",{children:"tmt"})," tool provides a user-friendly way to work with tests. You can comfortably create new tests, safely and easily run tests across different environments, review test results, debug test code and enable tests in the CI using a consistent and concise config."]}),contribution:(0,u.jsx)("p",{children:"Just a smallish contribution to the docs related to the changes implemented on the Packit side."}),repoURL:"https://github.com/teemtee/tmt"},{title:"Fedora Infrastructure Ansible",description:(0,u.jsx)("p",{children:"Collection of Ansible playbooks that powers the Fedora Infrastructure."}),contribution:(0,u.jsx)("p",{children:"I have adjusted the groups in the Bodhi playbooks after Packit has been granted the privileges to propose updates without restrictions."}),repoURL:"https://pagure.io/fedora-infra/ansible"},{title:"Bodhi",description:(0,u.jsx)("p",{children:"Bodhi is a web-system that facilitates the process of publishing updates for a Fedora-based software distribution."}),contribution:(0,u.jsx)("p",{children:"I have adjusted the client, so that it doesn't show secrets in terminal when you log in to the Bodhi via browser."}),repoURL:"https://github.com/fedora-infra/bodhi"},{title:"Gluetool Modules Collection",description:(0,u.jsxs)("p",{children:["Modules for ",(0,u.jsx)("code",{children:"gluetool"})," \u2014 a command line centric framework usable for glueing modules into a pipeline."]}),contribution:(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:"I have proposed a possible implementation of git merging that was later on extended."}),(0,u.jsx)("li",{children:"I have tried to help out with Copr module after they deprecated older version of their API."})]}),repoURL:"https://gitlab.com/testing-farm/gluetool-modules"},{title:"Pagure",description:(0,u.jsx)("p",{children:"Pagure is a git-centered forge, python based using pygit2."}),contribution:(0,u.jsx)("p",{children:"I have added an API endpoint for reopening pull requests."}),repoURL:"https://pagure.io/pagure"},{title:"Copr",description:(0,u.jsxs)("p",{children:["RPM build system - upstream for"," ",(0,u.jsx)("a",{target:"_blank",href:"https://copr.fedorainfracloud.org/",children:"Copr"}),"."]}),contribution:(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:"Supporting external repositories for custom SRPM build method."}),(0,u.jsxs)("li",{children:["Allowing admins of Copr repositories to build without the need to ask for explicit ",(0,u.jsx)("code",{children:"builder"})," permissions."]})]}),repoURL:"https://github.com/fedora-copr/copr"},{title:"python-gitlab",description:(0,u.jsx)("p",{children:"A python wrapper for the GitLab API."}),contribution:(0,u.jsxs)("p",{children:["I have contributed support for the ",(0,u.jsx)("code",{children:"merge_ref"})," on merge requests that hasn't been supported, yet it was present in the GitLab API."]}),repoURL:"https://github.com/python-gitlab/python-gitlab"},{title:"PatternFly React",description:(0,u.jsx)("p",{children:"A set of React components for the PatternFly project."}),contribution:(0,u.jsx)("p",{children:"When working on Packit Dashboard, I have spotted smaller bugs that were present in this project and fixed them upstream to provide better experience for our users."}),repoURL:"https://github.com/patternfly/patternfly-react"},{title:"Fira Code",description:(0,u.jsx)("p",{children:"Free monospaced font with programming ligatures."}),contribution:(0,u.jsxs)("p",{children:["I have set up a GitHub Action for building the font on each push to the default branch allowing users to install ",(0,u.jsx)("i",{children:"bleeding edge"})," version of the font."]}),repoURL:"https://github.com/tonsky/FiraCode"},{title:"nixpkgs",description:(0,u.jsx)("p",{children:"Nixpkgs is a collection of over 80,000 software packages that can be installed with the Nix package manager. It also implements NixOS, a purely-functional Linux distribution."}),contribution:(0,u.jsx)("p",{children:"When I was trying out the nixpkgs, I have tried to bump .NET Core to the latest version. My changes haven't been accepted as they required bumping of multiple more packages that depended upon the .NET Core."}),repoURL:"https://github.com/NixOS/nixpkgs"},{title:"Darcula",description:(0,u.jsx)("p",{children:"A theme for Visual Studio Code based on Darcula theme from Jetbrains IDEs."}),contribution:(0,u.jsx)("p",{children:"I have contributed support for diff files, though the project doesn't seem to be live anymore, so it hasn't been accepted as of now."}),repoURL:"https://github.com/rokoroku/vscode-theme-darcula"},{title:"Packit",description:(0,u.jsx)("p",{children:"An open source project aiming to ease the integration of your project with Fedora Linux, CentOS Stream and other distributions."}),contribution:(0,u.jsxs)("p",{children:["Have a look at my"," ",(0,u.jsx)("a",{href:"https://github.com/search?q=is%3Apr%20author%3Amfocko%20org%3Apackit&type=pullrequests",target:"_blank",children:"pull requests"}),"."]}),repoURL:"https://github.com/packit"},{title:"Snitch",description:(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("p",{children:"Language agnostic tool that collects TODOs in the source code and reports them as Issues."})}),contribution:(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:"Environment variable support for self-hosted GitLab instances"}),(0,u.jsx)("li",{children:"GitLab support"})]}),repoURL:"https://github.com/tsoding/snitch"},{title:"Karel the Robot",description:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:["Karel the robot is in general an educational programming language for beginners, created by ",(0,u.jsx)("i",{children:"Richard E. Pattis"}),". This is implementation of ",(0,u.jsx)("i",{children:"Karel the Robot"})," for ",(0,u.jsx)("i",{children:"C programming language"}),"."]}),(0,u.jsxs)("p",{children:["This project is used for educational purposes at"," ",(0,u.jsx)("a",{target:"_blank",href:"https://fei.tuke.sk",children:"TUKE"}),"."]})]}),contribution:(0,u.jsx)("p",{children:"I have contributed some refactoring tips to the author of the library."}),repoURL:"https://git.kpi.fei.tuke.sk/kpi/karel-the-robot"}],f="Contributions",m="Many of my contributions to open-source projects.";function x(){return(0,u.jsx)(o.Z,{title:f,description:m,children:(0,u.jsxs)("main",{className:"container container--fluid margin-vert--lg",children:[(0,u.jsx)("h1",{children:f}),(0,u.jsx)("p",{children:m}),(0,u.jsx)("div",{className:"row",children:b.map((e=>(0,u.jsx)(g,{...e},e.project)))})]})})}},86010:(e,t,i)=>{function r(e){var t,i,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(i=r(e[t]))&&(o&&(o+=" "),o+=i);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}i.d(t,{Z:()=>o});const o=function(){for(var e,t,i=0,o="";i<arguments.length;)(e=arguments[i++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}}}]);