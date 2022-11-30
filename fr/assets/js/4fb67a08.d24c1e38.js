"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6590],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8548:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const a={sidebar_position:1},c="Qu'est-ce que la blockchain ?",i={unversionedId:"basics/what-is-blockchain",id:"basics/what-is-blockchain",title:"Qu'est-ce que la blockchain ?",description:"La blockchain est un type sp\xe9cifique de base de donn\xe9es constitu\xe9e de blocs de donn\xe9es, concat\xe9n\xe9s ensemble pour former une cha\xeene.",source:"@site/i18n/fr/docusaurus-plugin-content-docs-dev-academy/current/basics/01-what-is-blockchain.md",sourceDirName:"basics",slug:"/basics/what-is-blockchain",permalink:"/fr/dev-academy/basics/what-is-blockchain",draft:!1,editUrl:"https://crowdin.com/project/cosmwasm-docs/fr",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"devAcademy",previous:{title:"Introduction",permalink:"/fr/dev-academy/intro"},next:{title:"Infrastructure de la cha\xeene de blocs",permalink:"/fr/dev-academy/basics/infra"}},s={},u=[{value:"Sources",id:"sources",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quest-ce-que-la-blockchain-"},"Qu'est-ce que la blockchain ?"),(0,o.kt)("p",null,"La blockchain est un type sp\xe9cifique de base de donn\xe9es constitu\xe9e de ",(0,o.kt)("em",{parentName:"p"},"blocs")," de donn\xe9es, concat\xe9n\xe9s ensemble pour former une ",(0,o.kt)("em",{parentName:"p"},"cha\xeene"),"."),(0,o.kt)("p",null,"Plus pr\xe9cis\xe9ment, les nouvelles donn\xe9es arrivent au coup par coup sous la forme de ",(0,o.kt)("em",{parentName:"p"},"transactions"),". Chaque transaction est ajout\xe9e \xe0 un bloc. Each block is chained to the previous block, creating a chronological ordering of data."),(0,o.kt)("p",null,"While blockchains can store any type of data, the most common use is to produce a ",(0,o.kt)("em",{parentName:"p"},"ledger"),", i.e., an append-only list of transactions. Par exemple, la blockchain de Bitcoin stocke toutes les transactions d'un ",(0,o.kt)("em",{parentName:"p"},"portefeuille")," (compte) \xe0 tous les autres. Le solde de chaque compte est une r\xe9duction sur ces transactions."),(0,o.kt)("p",null,"Blockchains use cryptography and distributed computing algorithms to provide ",(0,o.kt)("em",{parentName:"p"},"immutability"),", meaning that the data stored on the chain cannot be altered after the fact. For a distributed digital ledger (e.g. Bitcoin) this means that the transactions are permanently recorded and viewable to anyone."),(0,o.kt)("h2",{id:"sources"},"Sources"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/SSo_EIwHSd4",title:"Lecteur vid\xe9o YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/bBC-nXj3Ng4",title:"Lecteur vid\xe9o YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}p.isMDXComponent=!0}}]);