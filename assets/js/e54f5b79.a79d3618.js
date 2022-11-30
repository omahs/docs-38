"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[626],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return p}});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=o.createContext({}),l=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),h=l(n),p=a,d=h["".concat(c,".").concat(p)]||h[p]||u[p]||r;return n?o.createElement(d,i(i({ref:e},m),{},{components:n})):o.createElement(d,i({ref:e},m))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8500:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l}});var o=n(3117),a=(n(7294),n(3905));const r={sidebar_position:1},i="What are Multi-Chain Contracts?",s={unversionedId:"architecture/multichain",id:"version-0.16/architecture/multichain",title:"What are Multi-Chain Contracts?",description:"CosmWasm is designed and built from the ground-up to be a multi-chain solution for smart contracts. As it comes from the",source:"@site/docs_versioned_docs/version-0.16/03-architecture/01-multichain.md",sourceDirName:"03-architecture",slug:"/architecture/multichain",permalink:"/docs/0.16/architecture/multichain",draft:!1,editUrl:"https://github.com/InterWasm/docs/edit/main/docs_versioned_docs/version-0.16/03-architecture/01-multichain.md",tags:[],version:"0.16",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.16/docsSidebar",previous:{title:"Next Steps",permalink:"/docs/0.16/getting-started/next-steps"},next:{title:"Actor Model",permalink:"/docs/0.16/architecture/actor"}},c={},l=[{value:"Different Chain, Same Contract",id:"different-chain-same-contract",level:2},{value:"Inter Blockchain Contracts",id:"inter-blockchain-contracts",level:2},{value:"Easy to Integrate",id:"easy-to-integrate",level:2},{value:"Platform to Build On",id:"platform-to-build-on",level:2}],m={toc:l};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-are-multi-chain-contracts"},"What are Multi-Chain Contracts?"),(0,a.kt)("p",null,"CosmWasm is designed and built from the ground-up to be a multi-chain solution for smart contracts. As it comes from the\nCosmos ecosystem, it is no surprise that this is designed for networks of blockchains, rather than the traditional\nblockchain silos. But what exactly do we mean by multi-chain?"),(0,a.kt)("h2",{id:"different-chain-same-contract"},"Different Chain, Same Contract"),(0,a.kt)("p",null,"Since we make little requirements of the host application, it is easy for any Cosmos SDK app to embed the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm")," module\nand customize the permissioning or fees as they wish. All code is designed to be agnostic to the details of the\nunderlying chain, so just by writing a CosmWasm contract, you will soon be able to run on many different chains on the\nCosmos ecosystem."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://regen.network"},"Regen Network")," plans to include CosmWasm support, when they launch. And a number of other chains\nare looking into adding this support."),(0,a.kt)("h2",{id:"inter-blockchain-contracts"},"Inter Blockchain Contracts"),(0,a.kt)("p",null,"If you have heard anything about Cosmos, it is most likely\nabout ",(0,a.kt)("a",{parentName:"p",href:"https://cosmos.network/ibc/"},"Inter-Blockchain Communication"),". The power\nof ",(0,a.kt)("a",{parentName:"p",href:"https://tendermint.com"},"Tendermint BFT consensus")," and\ntheir ",(0,a.kt)("a",{parentName:"p",href:"https://blog.cosmos.network/what-does-the-launch-of-cosmos-mean-for-the-blockchain-ecosystem-952e14f67d0d"},"novel bonded proof of stake algorithm"),"\nare just the foundation on which they enable a revolutionary protocol to allow trustless message passing semantics\nbetween blockchains. No middleman, no timing issue, full security."),(0,a.kt)("p",null,"The potential means code on one chain can execute a transaction on another chain. But the code must be designed around\nsuch a message-passing idiom. CosmWasm fully embraces the ",(0,a.kt)("a",{parentName:"p",href:"./actor"},"actor model")," and as such naturally lends itself to\nsuch IBC. Fire and forget messages, rather than awaiting a promise and worrying about race conditions and reentrancy\nattacks. As IBC stabilizes, we will be adding first class support for IBC primitives into\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm"},"CosmWasm")," libraries, as well as\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/tree/master/x/wasm"},"Cosmos SDK module")," that hosts it."),(0,a.kt)("h2",{id:"easy-to-integrate"},"Easy to Integrate"),(0,a.kt)("p",null,"Another design goal of CosmWasm was to be more of a library than a framework. This means it has a small surface area of\nrequired APIs and you can opt-in to most of the code. It is there to make life easy for you, but you can easily build it\nyour own way as well. This has two big benefits:"),(0,a.kt)("p",null,"The first is that it makes it easier to add support for multiple languages to write contracts in. So we can add support\nfor say, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.assemblyscript.org/"},"AssemblyScript")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tinygo-org/tinygo"},"Go"),", for those who\nprefer not to write in Rust."),(0,a.kt)("p",null,"The second benefit is that since it makes limited demands of the host system, it can be embedded in other frameworks,\nnot just the Cosmos SDK. The core runtime logic ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/tree/master/lib/vm"},(0,a.kt)("inlineCode",{parentName:"a"},"cosmwasm-vm")),"\nis in Rust, and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/go-cosmwasm"},(0,a.kt)("inlineCode",{parentName:"a"},"go-cosmwasm"))," provides a generic Go binding to it. As Go and\nRust are two of the most popular languages to write blockchains, this opens the door for many integrations. Of course,\nunless your chain is running on top of ",(0,a.kt)("a",{parentName:"p",href:"https://tendermint.com"},"Tendermint")," or potentially another BFT Instant Finality\nConsensus algorithm like ",(0,a.kt)("a",{parentName:"p",href:"https://babble.io/"},"Babble"),", the contracts will not be able to participate with IBC."),(0,a.kt)("h2",{id:"platform-to-build-on"},"Platform to Build On"),(0,a.kt)("p",null,"CosmWasm doesn't want to lock you to one blockchain, or even one programming language. It is designed to be adaptable to\nmany environments, and ",(0,a.kt)("em",{parentName:"p"},"connect")," blockchains. This makes it a solid platform to build on. Even if one chain doesn't pan\nout well, all your smart contracts and dApps can quickly be transferred to another chain. Or if your app grows quickly,\nyou can launch your own chain to deploy the next version of the contracts, and transfer all existing tokens to your new\nchain via IBC. The possibilities are only limited by your imagination."))}u.isMDXComponent=!0}}]);