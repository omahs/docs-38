"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3286],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7168:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var r=n(3117),i=(n(7294),n(3905));const a={sidebar_position:3},o="CW3 Flexible Multisig",s={unversionedId:"cw3/cw3-flex-spec",id:"cw3/cw3-flex-spec",title:"CW3 Flexible Multisig",description:"cw3-flex-multisig source",source:"@site/cw-plus/cw3/cw3-flex-spec.md",sourceDirName:"cw3",slug:"/cw3/cw3-flex-spec",permalink:"/fr/cw-plus/0.9.0/cw3/cw3-flex-spec",draft:!1,editUrl:"https://github.com/InterWasm/docs/edit/main/cw-plus/cw3/cw3-flex-spec.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"cwPlus",previous:{title:"CW3 Fixed Multisig",permalink:"/fr/cw-plus/0.9.0/cw3/cw3-fixed-spec"},next:{title:"CW4 Spec: Group Members",permalink:"/fr/cw-plus/0.9.0/cw4/spec"}},c={},l=[{value:"Init",id:"init",level:2},{value:"Handle Process",id:"handle-process",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cw3-flexible-multisig"},"CW3 Flexible Multisig"),(0,i.kt)("p",null,"cw3-flex-multisig source\ncode: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/tree/main/contracts/cw3-flex-multisig"},"https://github.com/CosmWasm/cw-plus/tree/main/contracts/cw3-flex-multisig")),(0,i.kt)("p",null,"This builds on ",(0,i.kt)("a",{parentName:"p",href:"/fr/cw-plus/0.9.0/cw3/cw3-fixed-spec"},"cw3-fixed-multisig")," with a more powerful implementation of the ",(0,i.kt)("a",{parentName:"p",href:"/fr/cw-plus/0.9.0/cw3/spec"},"cw3 spec"),".\nIt is a multisig contract that is backed by a\n",(0,i.kt)("a",{parentName:"p",href:"/fr/cw-plus/0.9.0/cw4/spec"},"cw4 (group)")," contract, which independently maintains the voter set."),(0,i.kt)("p",null,"This provides 2 main advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can create two different multisigs with different voting thresholds backed by the same group. Thus, you can have a\n50% vote, and a 67% vote that always use the same voter set, but can take other actions."),(0,i.kt)("li",{parentName:"ul"},"TODO: It allows dynamic multisig groups. Since the group can change, we can set one of the multisigs as the admin of\nthe group contract, and the")),(0,i.kt)("p",null,"In addition to the dynamic voting set, the main difference with the native Cosmos SDK multisig, is that it aggregates\nthe signatures on chain, with visible proposals (like ",(0,i.kt)("inlineCode",{parentName:"p"},"x/gov")," in the Cosmos SDK), rather than requiring signers to share\nsignatures off chain."),(0,i.kt)("h2",{id:"init"},"Init"),(0,i.kt)("p",null,"The first step to create such a multisig is to instantiate a cw4 contract with the desired member set. For now, this\nonly is supported by\n",(0,i.kt)("a",{parentName:"p",href:"/fr/cw-plus/0.9.0/cw4/cw4-group-spec"},"cw4-group"),", but we will add a token-weighted group contract\n(TODO)."),(0,i.kt)("p",null,"If you create a ",(0,i.kt)("inlineCode",{parentName:"p"},"cw4-group")," contract and want a multisig to be able to modify its own group, do the following in\nmultiple transactions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"init cw4-group, with your personal key as admin"),(0,i.kt)("li",{parentName:"ul"},"init a multisig pointing to the group"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AddHook{multisig}")," on the group contract"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UpdateAdmin{multisig}")," on the group contract")),(0,i.kt)("p",null,"This is the current practice to create such circular dependencies, and depends on an external driver (hard to impossible\nto script such a self-deploying contract on-chain). (TODO: document better)."),(0,i.kt)("p",null,"When creating the multisig, you must set the required weight to pass a vote as well as the max/default voting period. (\nTODO: allow more threshold types)"),(0,i.kt)("h2",{id:"handle-process"},"Handle Process"),(0,i.kt)("p",null,'First, a registered voter must submit a proposal. This also includes the first "Yes" vote on the proposal by the\nproposer. The proposer can set an expiration time for the voting process, or it defaults to the limit provided when\ncreating the contract (so proposals can be closed after several days).'),(0,i.kt)("p",null,'Before the proposal has expired, any voter with non-zero weight can add their vote. Only "Yes" votes are tallied. If\nenough "Yes" votes were submitted before the proposal expiration date, the status is set to "Passed".'),(0,i.kt)("p",null,'Once a proposal is "Passed", anyone may submit an "Execute" message. This will trigger the proposal to send all stored\nmessages from the proposal and update it\'s state to "Executed", so it cannot run again. (Note if the execution fails for\nany reason - out of gas, insufficient funds, etc - the state update will be reverted, and it will remain "Passed", so\nyou can try again).'),(0,i.kt)("p",null,'Once a proposal has expired without passing, anyone can submit a "Close"\nmessage to mark it closed. This has no effect beyond cleaning up the UI/database.'))}p.isMDXComponent=!0}}]);