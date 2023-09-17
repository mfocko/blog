"use strict";(self.webpackChunkfi=self.webpackChunkfi||[]).push([[6890],{707:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var r=n(7462),o=n(7294),a=n(7452),l=n(6010);const i="card_n_Wj",s="contributionsContainer_vdAK",c="buttons_UAd1";var u,p;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}const h=e=>{let{title:t,titleId:n,...r}=e;return o.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-labelledby":n},r),t?o.createElement("title",{id:n},t):null,u||(u=o.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),p||(p=o.createElement("path",{d:"M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z"})))},d=e=>{let{title:t,description:n,contribution:r,repoURL:a}=e;return o.createElement("div",{className:"col col--12"},o.createElement("div",{className:(0,l.Z)("card",i)},o.createElement("div",{className:"card__header"},o.createElement("h2",null,t)),o.createElement("div",{className:"card__body"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col col--6"},o.createElement("h6",null,"Description"),n),o.createElement("div",{className:(0,l.Z)("col col--6",s)},o.createElement("h6",null,"Contribution"),r))),o.createElement("div",{className:"card__footer"},o.createElement("div",{className:c},o.createElement("a",{href:a,target:"_blank",className:"button button--secondary button--outline"},o.createElement("span",{className:"button__icon"},o.createElement(h,null)),"See repository")))))},b=[{title:"tmt",description:o.createElement("p",null,"The `tmt` tool provides a user-friendly way to work with tests. You can comfortably create new tests, safely and easily run tests across different environments, review test results, debug test code and enable tests in the CI using a consistent and concise config."),contribution:o.createElement("p",null,"Just a smallish contribution to the docs related to the changes implemented on the Packit side."),repoURL:"https://github.com/teemtee/tmt"},{title:"Fedora Infrastructure Ansible",description:o.createElement("p",null,"Collection of Ansible playbooks that powers the Fedora Infrastructure."),contribution:o.createElement("p",null,"I have adjusted the groups in the Bodhi playbooks after Packit has been granted the privileges to propose updates without restrictions."),repoURL:"https://pagure.io/fedora-infra/ansible"},{title:"Bodhi",description:o.createElement("p",null,"Bodhi is a web-system that facilitates the process of publishing updates for a Fedora-based software distribution."),contribution:o.createElement("p",null,"I have adjusted the client, so that it doesn't show secrets in terminal when you log in to the Bodhi via browser."),repoURL:"https://github.com/fedora-infra/bodhi"},{title:"Gluetool Modules Collection",description:o.createElement("p",null,"Modules for ",o.createElement("code",null,"gluetool")," \u2014 a command line centric framework usable for glueing modules into a pipeline."),contribution:o.createElement("ul",null,o.createElement("li",null,"I have proposed a possible implementation of git merging that was later on extended."),o.createElement("li",null,"I have tried to help out with Copr module after they deprecated older version of their API.")),repoURL:"https://gitlab.com/testing-farm/gluetool-modules"},{title:"Pagure",description:o.createElement("p",null,"Pagure is a git-centered forge, python based using pygit2."),contribution:o.createElement("p",null,"I have added an API endpoint for reopening pull requests."),repoURL:"https://pagure.io/pagure"},{title:"Copr",description:o.createElement("p",null,"RPM build system - upstream for"," ",o.createElement("a",{target:"_blank",href:"https://copr.fedorainfracloud.org/"},"Copr"),"."),contribution:o.createElement("ul",null,o.createElement("li",null,"Supporting external repositories for custom SRPM build method."),o.createElement("li",null,"Allowing admins of Copr repositories to build without the need to ask for explicit ",o.createElement("code",null,"builder")," permissions.")),repoURL:"https://github.com/fedora-copr/copr"},{title:"python-gitlab",description:o.createElement("p",null,"A python wrapper for the GitLab API."),contribution:o.createElement("p",null,"I have contributed support for the ",o.createElement("code",null,"merge_ref")," on merge requests that hasn't been supported, yet it was present in the GitLab API."),repoURL:"https://github.com/python-gitlab/python-gitlab"},{title:"PatternFly React",description:o.createElement("p",null,"A set of React components for the PatternFly project."),contribution:o.createElement("p",null,"When working on Packit Dashboard, I have spotted smaller bugs that were present in this project and fixed them upstream to provide better experience for our users."),repoURL:"https://github.com/patternfly/patternfly-react"},{title:"Fira Code",description:o.createElement("p",null,"Free monospaced font with programming ligatures."),contribution:o.createElement("p",null,"I have set up a GitHub Action for building the font on each push to the default branch allowing users to install ",o.createElement("i",null,"bleeding edge")," ","version of the font."),repoURL:"https://github.com/tonsky/FiraCode"},{title:"nixpkgs",description:o.createElement("p",null,"Nixpkgs is a collection of over 80,000 software packages that can be installed with the Nix package manager. It also implements NixOS, a purely-functional Linux distribution."),contribution:o.createElement("p",null,"When I was trying out the nixpkgs, I have tried to bump .NET Core to the latest version. My changes haven't been accepted as they required bumping of multiple more packages that depended upon the .NET Core."),repoURL:"https://github.com/NixOS/nixpkgs"},{title:"Darcula",description:o.createElement("p",null,"A theme for Visual Studio Code based on Darcula theme from Jetbrains IDEs."),contribution:o.createElement("p",null,"I have contributed support for diff files, though the project doesn't seem to be live anymore, so it hasn't been accepted as of now."),repoURL:"https://github.com/rokoroku/vscode-theme-darcula"},{title:"Packit",description:o.createElement("p",null,"An open source project aiming to ease the integration of your project with Fedora Linux, CentOS Stream and other distributions."),contribution:o.createElement("p",null,"Have a look at my"," ",o.createElement("a",{href:"https://github.com/search?q=is%3Apr%20author%3Amfocko%20org%3Apackit&type=pullrequests",target:"_blank"},"pull requests"),"."),repoURL:"https://github.com/packit"},{title:"Snitch",description:o.createElement(o.Fragment,null,o.createElement("p",null,"Language agnostic tool that collects TODOs in the source code and reports them as Issues.")),contribution:o.createElement("ul",null,o.createElement("li",null,"Environment variable support for self-hosted GitLab instances"),o.createElement("li",null,"GitLab support")),repoURL:"https://github.com/tsoding/snitch"},{title:"Karel the Robot",description:o.createElement(o.Fragment,null,o.createElement("p",null,"Karel the robot is in general an educational programming language for beginners, created by ",o.createElement("i",null,"Richard E. Pattis"),". This is implementation of ",o.createElement("i",null,"Karel the Robot")," for"," ",o.createElement("i",null,"C programming language"),"."),o.createElement("p",null,"This project is used for educational purposes at"," ",o.createElement("a",{target:"_blank",href:"https://fei.tuke.sk"},"TUKE"),".")),contribution:o.createElement("p",null,"I have contributed some refactoring tips to the author of the library."),repoURL:"https://git.kpi.fei.tuke.sk/kpi/karel-the-robot"}],g="Contributions",f="Many of my contributions to open-source projects.";function E(){return o.createElement(a.Z,{title:g,description:f},o.createElement("main",{className:"container container--fluid margin-vert--lg"},o.createElement("h1",null,g),o.createElement("p",null,f),o.createElement("div",{className:"row"},b.map((e=>o.createElement(d,(0,r.Z)({key:e.project},e)))))))}}}]);