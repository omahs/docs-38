"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1542],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9104:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return c},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(3117),o=(n(7294),n(3905));const i={sidebar_position:2},a="Setup",l={unversionedId:"simple-option/setup",id:"simple-option/setup",title:"Setup",description:"Coding Environment",source:"@site/tutorials/simple-option/setup.md",sourceDirName:"simple-option",slug:"/simple-option/setup",permalink:"/fr/tutorials/simple-option/setup",draft:!1,editUrl:"https://github.com/InterWasm/docs/edit/main/tutorials/simple-option/setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorials",previous:{title:"Introduction",permalink:"/fr/tutorials/simple-option/intro"},next:{title:"Develop Contract",permalink:"/fr/tutorials/simple-option/develop"}},s={},p=[{value:"Coding Environment",id:"coding-environment",level:2},{value:"Rust and IDE",id:"rust-and-ide",level:3},{value:"Project Starter",id:"project-starter",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup"},"Setup"),(0,o.kt)("iframe",{src:"https://player.vimeo.com/video/457712351",width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0}),(0,o.kt)("h2",{id:"coding-environment"},"Coding Environment"),(0,o.kt)("h3",{id:"rust-and-ide"},"Rust and IDE"),(0,o.kt)("p",null,"This section is a summary\nof ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/0.14/getting-started/installation"},"Getting Started / Installation and Setting Up Environment"),".\nYou can go to the doc,\nsetup rust and preferred IDE then and come back here. We recommend using Intellij IDEA."),(0,o.kt)("h2",{id:"project-starter"},"Project Starter"),(0,o.kt)("p",null,"Project starter template repo is there for spinning new smart contract quickly. With one command, project layout, boiler\nplate, git, and even Circle CI for auto testing/formatting/linting will be set up. Cool huh. Here is the\nrepo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-template"},"cosmwasm-template")),(0,o.kt)("p",null,"Assuming you have a followed section above, then the following should get you a new repo to start a contract:"),(0,o.kt)("p",null,"First, install ",(0,o.kt)("strong",{parentName:"p"},"cargo-generate"),". Unless you did that before, run this line now:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cargo install cargo-generate --features vendored-openssl")),(0,o.kt)("p",null,"Now, use it to create your new contract. Go to the folder in which you want to place it and run:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cargo generate --git https://github.com/CosmWasm/cosmwasm-template.git --name simple-option")),(0,o.kt)("p",null,"Initialize git repo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'git add .\ngit commit -m "Initial generation from cosmwasm-template"\n')),(0,o.kt)("p",null,"Great, workstation is ready."))}c.isMDXComponent=!0}}]);