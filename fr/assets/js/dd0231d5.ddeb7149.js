"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1762],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,h=d["".concat(c,".").concat(u)]||d[u]||l[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6763:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return l},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return m}});var a=n(3117),o=(n(7294),n(3905));const r={sidebar_position:1},i="Introduction",s={unversionedId:"dao-governance/what-is-a-dao",id:"dao-governance/what-is-a-dao",title:"Introduction",description:"One of the promising aspects of Blockchain technology is novel governance mechanisms.",source:"@site/i18n/fr/docusaurus-plugin-content-docs-dev-academy/current/dao-governance/01-what-is-a-dao.md",sourceDirName:"dao-governance",slug:"/dao-governance/what-is-a-dao",permalink:"/fr/dev-academy/dao-governance/what-is-a-dao",draft:!1,editUrl:"https://crowdin.com/project/cosmwasm-docs/fr",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"devAcademy",previous:{title:"Developing a Smart Contract",permalink:"/fr/dev-academy/develop-smart-contract/develop"},next:{title:"Contrat intelligent de DAO",permalink:"/fr/dev-academy/dao-governance/dao-contract"}},c={},m=[],p={toc:m};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"One of the promising aspects of Blockchain technology is novel ",(0,o.kt)("strong",{parentName:"p"},"governance")," mechanisms."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://en.wikipedia.org/wiki/Decentralized_autonomous_organization"},"wikipedia")," A decentralized autonomous organization (DAO), sometimes called a decentralized autonomous corporation (DAC), is an organization represented by rules encoded as a computer program that is transparent, controlled by the organization members and not influenced by a central government."),(0,o.kt)("p",{parentName:"admonition"},"A DAO's financial transaction record and program rules are maintained on a blockchain. :::"),(0,o.kt)("p",{parentName:"admonition"},"You can think of a DAO like a corporation. Corporations have a board that make decisions. In DAOs, these decisions are stored on the blockchain, and the rules for making them are embedded in the application logic of smart contracts."),(0,o.kt)("p",{parentName:"admonition"},"DAOs have enormous potential to shape the way we organize and collaborate. They enable groups or organizations to cooperate and execute actions on blockchains without the need for a trusted authority. Every vote and execution takes place on chain. This means that the decision execution made by DAOs are uncensorable."),(0,o.kt)("p",{parentName:"admonition"},"Another compelling aspect of DAOs is their transparency. Where it can take years to audit the finances of a traditional corporations, understanding the state of the DAO is as simple as querying its blockchain."),(0,o.kt)("h2",{parentName:"admonition",id:"cosmwasm-and-governance"},"CosmWasm and Governance"),(0,o.kt)("p",{parentName:"admonition"},"There are contracts in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/"},"cw-plus")," that you can use at the moment:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cw-plus/blob/main/packages/cw3/README.md"},"cw3"),": CW3 is a specification for voting contracts based on CosmWasm",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cw-plus/tree/main/contracts/cw3-fixed-multisig"},"cw3-fixed-multisig"),": This is a simple implementation of the cw3 spec. It is a multisig with a fixed set of addresses created upon instantiation. Each address may have the same weight (K of N), or some may have extra voting power"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cw-plus/tree/main/contracts/cw3-flex-multisig"},"cw3-flex-multisig")," builds on cw3-fixed-multisig with a more powerful implementation of the cw3 spec. It is a multisig contract that is backed by a cw4 (group) contract, which independently maintains the voter set."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cw-plus/tree/main/packages/cw4"},"cw4"),": CW4 is a spec for storing group membership, which can be combined with CW3 multisigs. The purpose is to store a set of members/voters that can be accessed to determine permissions in another section.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cw-plus/tree/main/contracts/cw4-group"},"cw4-group")," stores a set of members along with an admin, and allows the admin to update the state"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cw-plus/tree/main/contracts/cw4-stake"},"cw4-stake")," provides a similar API to ",(0,o.kt)("inlineCode",{parentName:"li"},"cw4-group")," (which handles elected membership), but rather than appointing members (by admin or multisig), their membership and weight are based on the number of tokens they have staked. This is similar to the way many DAOs function.")))),(0,o.kt)("p",{parentName:"admonition"},"The scope of this section will be limited to introducing the contracts maintained in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/"},"cw-plus")," repository. However, there are other DAO projects and governance protocols that are developed by the community."),(0,o.kt)("h2",{parentName:"admonition",id:"dao-governed-smart-contracts"},"DAO Governed Smart Contracts"),(0,o.kt)("p",{parentName:"admonition"},"Every wallet and smart contract has an address and any execution from them is considered the same. This means a smart contract can assign another smart contract as an admin, owner or a privileged member. In the next section, we will set up a DAO with multiple participants along with a CW20 contract that is managed by the DAO.")))}l.isMDXComponent=!0}}]);