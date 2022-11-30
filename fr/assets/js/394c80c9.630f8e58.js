"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4321],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1150:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var r=n(3117),o=(n(7294),n(3905));const a={title:"CW2 Spec"},i="CW2 Spec: Contract Info for Migration",c={unversionedId:"cw2/spec",id:"cw2/spec",title:"CW2 Spec",description:"Repo",source:"@site/cw-plus/cw2/spec.md",sourceDirName:"cw2",slug:"/cw2/spec",permalink:"/fr/cw-plus/0.9.0/cw2/spec",draft:!1,editUrl:"https://github.com/InterWasm/docs/edit/main/cw-plus/cw2/spec.md",tags:[],version:"current",frontMatter:{title:"CW2 Spec"},sidebar:"cwPlus",previous:{title:"CW1 Whitelist",permalink:"/fr/cw-plus/0.9.0/cw1/cw1-whitelist"},next:{title:"CW20 Spec: Fungible Tokens",permalink:"/fr/cw-plus/0.9.0/cw20/spec"}},s={},l=[{value:"Data structures",id:"data-structures",level:3},{value:"Queries",id:"queries",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cw2-spec-contract-info-for-migration"},"CW2 Spec: Contract Info for Migration"),(0,o.kt)("p",null,"Repo\nlink: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/tree/main/packages/cw2"},"https://github.com/CosmWasm/cw-plus/tree/main/packages/cw2")),(0,o.kt)("p",null,"Most of the CW",(0,o.kt)("em",{parentName:"p"}," specs are focused on the "),"public interfaces",(0,o.kt)("em",{parentName:"p"},"\nof the contract. The APIs used for ",(0,o.kt)("inlineCode",{parentName:"em"},"ExecuteMsg")," or ",(0,o.kt)("inlineCode",{parentName:"em"},"QueryMsg"),". However, when we wish to migrate from contract A to\ncontract B, contract B needs to be aware somehow of how the "),"state was encoded*."),(0,o.kt)("p",null,"Generally we use Singletons and Buckets to store the state, but if I upgrade to a ",(0,o.kt)("inlineCode",{parentName:"p"},"cw20-with-bonding-curve")," contract, it\nwill only work properly if I am migrating from a ",(0,o.kt)("inlineCode",{parentName:"p"},"cw20-base")," contract. But how can the new contract know what format the\ndata was stored."),(0,o.kt)("p",null,"This is where cw2 comes in. It specifies on special Singleton to be stored on disk by all contracts on ",(0,o.kt)("inlineCode",{parentName:"p"},"init"),". When\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"migrate"),"\nfunction is called, then the new contract can read that data and see if this is an expected contract we can migrate\nfrom. And also contain extra version information if we support multiple migrate paths."),(0,o.kt)("h3",{id:"data-structures"},"Data structures"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Required")),(0,o.kt)("p",null,"All cw2-compliant contracts must store the following data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"key: ",(0,o.kt)("inlineCode",{parentName:"li"},"\\x00\\x0dcontract_info"),' (length prefixed "contract_info" using Singleton pattern)'),(0,o.kt)("li",{parentName:"ul"},"data: Json-serialized ",(0,o.kt)("inlineCode",{parentName:"li"},"ContractVersion"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub struct ContractVersion {\n  /// contract is a globally unique identifier for the contract.\n  /// it should build off standard namespacing for whichever language it is in,\n  /// and prefix it with the registry we use.\n  /// For rust we prefix with `crates.io:`, to give us eg. `crates.io:cw20-base`\n  pub contract: String,\n  /// version is any string that this implementation knows. It may be simple counter "1", "2".\n  /// or semantic version on release tags "v0.6.2", or some custom feature flag list.\n  /// the only code that needs to understand the version parsing is code that knows how to\n  /// migrate from the given contract (and is tied to it\'s implementation somehow)\n  pub version: String,\n}\n')),(0,o.kt)("p",null,"Thus, an serialized example may looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "contract": "crates.io:cw20-base",\n  "version": "v0.1.0"\n}\n')),(0,o.kt)("h3",{id:"queries"},"Queries"),(0,o.kt)("p",null,'Since the state is well defined, we do not need to support any "smart queries". We do provide a helper to construct a "\nraw query" to read the ContractInfo of any cw2-compliant contract.'))}u.isMDXComponent=!0}}]);