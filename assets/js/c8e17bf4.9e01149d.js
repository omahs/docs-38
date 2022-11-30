"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4507],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return t?o.createElement(g,s(s({ref:n},l),{},{components:t})):o.createElement(g,s({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7387:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return c}});var o=t(3117),r=(t(7294),t(3905));const a={sidebar_position:12},s="Code Pinning",i={unversionedId:"smart-contracts/code-pinning",id:"smart-contracts/code-pinning",title:"Code Pinning",description:"Code Pinning mechanism allows codes to be pinned to the memory.",source:"@site/docs/04-smart-contracts/12-code-pinning.md",sourceDirName:"04-smart-contracts",slug:"/smart-contracts/code-pinning",permalink:"/docs/1.0/smart-contracts/code-pinning",draft:!1,editUrl:"https://github.com/InterWasm/docs/edit/main/docs/04-smart-contracts/12-code-pinning.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"docsSidebar",previous:{title:"Migration",permalink:"/docs/1.0/smart-contracts/migration"},next:{title:"Testing",permalink:"/docs/1.0/smart-contracts/testing"}},p={},c=[{value:"Proposal",id:"proposal",level:2},{value:"<em>PinCodesProposal</em>",id:"pincodesproposal",level:3},{value:"<em>UnpinCodesProposal</em>",id:"unpincodesproposal",level:3}],l={toc:c};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"code-pinning"},"Code Pinning"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code Pinning")," mechanism allows codes to be pinned to the memory."),(0,r.kt)("p",null,"This way code does not have to be loaded to memory on each execution thus makes ",(0,r.kt)("strong",{parentName:"p"},"~x40 performance"),"."),(0,r.kt)("p",null,"This is an estimation, needs to be benchmarked."),(0,r.kt)("p",null,"Code pinning is done through native chain governance."),(0,r.kt)("h2",{id:"proposal"},"Proposal"),(0,r.kt)("h3",{id:"pincodesproposal"},(0,r.kt)("em",{parentName:"h3"},"PinCodesProposal")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gogoproto"},'// PinCodesProposal gov proposal content type to pin a set of code ids in the\n// wasmvm cache.\nmessage PinCodesProposal {\n  // Title is a short summary\n  string title = 1 [ (gogoproto.moretags) = "yaml:\\"title\\"" ];\n  // Description is a human readable text\n  string description = 2 [ (gogoproto.moretags) = "yaml:\\"description\\"" ];\n  // CodeIDs references the new WASM codes\n  repeated uint64 code_ids = 3 [\n    (gogoproto.customname) = "CodeIDs",\n    (gogoproto.moretags) = "yaml:\\"code_ids\\""\n  ];\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/v0.23.0/proto/cosmwasm/wasm/v1/proposal.proto#L126-L136"},(0,r.kt)("em",{parentName:"a"},"reference"))),(0,r.kt)("p",null,"You can create the proposal using client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'wasmd tx gov submit-proposal pin-codes 1 --from wallet --title "Pin code 1" --description "Pin code 1 plss"\n')),(0,r.kt)("h3",{id:"unpincodesproposal"},(0,r.kt)("em",{parentName:"h3"},"UnpinCodesProposal")),(0,r.kt)("p",null,"You can unpin codes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gogoproto"},'// UnpinCodesProposal gov proposal content type to unpin a set of code ids in\n// the wasmvm cache.\nmessage UnpinCodesProposal {\n  // Title is a short summary\n  string title = 1 [ (gogoproto.moretags) = "yaml:\\"title\\"" ];\n  // Description is a human readable text\n  string description = 2 [ (gogoproto.moretags) = "yaml:\\"description\\"" ];\n  // CodeIDs references the WASM codes\n  repeated uint64 code_ids = 3 [\n    (gogoproto.customname) = "CodeIDs",\n    (gogoproto.moretags) = "yaml:\\"code_ids\\""\n  ];\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/v0.23.0/proto/cosmwasm/wasm/v1/proposal.proto#L138-L150"},(0,r.kt)("em",{parentName:"a"},"reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},' wasmd tx gov submit-proposal unpin-codes 1 --title "Unpin code 1" --description "Unpin code 1 plss" --from wallet\n')))}m.isMDXComponent=!0}}]);