"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7189],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,y=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},919:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var n=r(3117),a=(r(7294),r(3905));const o={title:"IBC Relayer",sidebar_position:2},i="Relayer",s={unversionedId:"ibc/relayer",id:"version-0.16/ibc/relayer",title:"IBC Relayer",description:"Interchain connections require external processes called [relayer](https://github.",source:"@site/docs_versioned_docs/version-0.16/05-ibc/02-relayer.md",sourceDirName:"05-ibc",slug:"/ibc/relayer",permalink:"/fr/docs/0.16/ibc/relayer",draft:!1,editUrl:"https://github.com/InterWasm/docs/edit/main/docs_versioned_docs/version-0.16/05-ibc/02-relayer.md",tags:[],version:"0.16",sidebarPosition:2,frontMatter:{title:"IBC Relayer",sidebar_position:2},sidebar:"version-0.16/docsSidebar",previous:{title:"IBC And CosmWasm",permalink:"/fr/docs/0.16/ibc/overview"},next:{title:"CW20 ICS20",permalink:"/fr/docs/0.16/ibc/cw20-ics20"}},c={},l=[{value:"Relayer Implementations",id:"relayer-implementations",level:2},{value:"Setting Up a Relayer Process",id:"setting-up-a-relayer-process",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"relayer"},"Relayer"),(0,a.kt)("p",null,"Interchain connections require external processes called ","[relayer]","(",(0,a.kt)("a",{parentName:"p",href:"https://github."},"https://github."),"\ncom/cosmos/ics/tree/master/spec/ics-018-relayer-algorithms). You can setup and run your own, or just use existing\nconnections."),(0,a.kt)("h2",{id:"relayer-implementations"},"Relayer Implementations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/confio/ts-relayer"},"confio/ts-relayer")," TypeScript implementation of IBC Relayer. Customizable and\nReliable. Project state: ",(0,a.kt)("strong",{parentName:"li"},"ALPHA")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/relayer"},"cosmos/relayer")," The Cosmos IBC relayer package contains a basic relayer\nimplementation that is meant for users wishing to relay packets/data between sets of IBC enabled chains. Project\nstate: ",(0,a.kt)("strong",{parentName:"li"},"ALPHA")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/informalsystems/ibc-rs"},"informalsystems/ibc-rs"),": Rust implementation of IBC. Project state:\n",(0,a.kt)("strong",{parentName:"li"},"ALPHA"))),(0,a.kt)("h2",{id:"setting-up-a-relayer-process"},"Setting Up a Relayer Process"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Under Development")))}u.isMDXComponent=!0}}]);