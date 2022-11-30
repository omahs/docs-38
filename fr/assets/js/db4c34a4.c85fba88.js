"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2032],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=d(n),p=r,m=h["".concat(c,".").concat(p)]||h[p]||u[p]||s;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},981:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return d}});var a=n(3117),r=(n(7294),n(3905));const s={title:"Names and Addresses",sidebar_position:3},o="Names and Addresses",i={unversionedId:"architecture/addresses",id:"version-0.14/architecture/addresses",title:"Names and Addresses",description:"Blockchains (almost?) all use addresses to identify external actors via a hash of a public key, and many newer ones",source:"@site/docs_versioned_docs/version-0.14/03-architecture/03-addresses.md",sourceDirName:"03-architecture",slug:"/architecture/addresses",permalink:"/fr/docs/0.14/architecture/addresses",draft:!1,editUrl:"https://github.com/InterWasm/docs/edit/main/docs_versioned_docs/version-0.14/03-architecture/03-addresses.md",tags:[],version:"0.14",sidebarPosition:3,frontMatter:{title:"Names and Addresses",sidebar_position:3},sidebar:"version-0.14/docsSidebar",previous:{title:"Actor Model",permalink:"/fr/docs/0.14/architecture/actor"},next:{title:"Querying",permalink:"/fr/docs/0.14/architecture/query"}},c={},d=[{value:"Addr",id:"addr",level:2},{value:"Optional: Canonical Addresses",id:"optional-canonical-addresses",level:2},{value:"Naming",id:"naming",level:2},{value:"DIDs",id:"dids",level:3}],l={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"names-and-addresses"},"Names and Addresses"),(0,r.kt)("p",null,'Blockchains (almost?) all use addresses to identify external actors via a hash of a public key, and many newer ones\nextended this to identify on-chain "smart contracts" with unique addresses as well. On chain, addresses are represented\nby a use a concise, immutable binary format, typically 20 or 32 bytes long, often derived from a hashing function.\nHowever, there are many human-readable representations of these binary addresses, which are shown to clients. For\nexample, ',(0,r.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Bech32"},"Bech32")," ",(0,r.kt)("inlineCode",{parentName:"p"},"bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9"),",\nhex ",(0,r.kt)("inlineCode",{parentName:"p"},"0x8617E340B3D01FA5F11F306F4090FD50E238070D"),"\nor ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-55.md"},"checksumned hex")," ",(0,r.kt)("inlineCode",{parentName:"p"},"0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed"),"\n, and\neven ",(0,r.kt)("a",{parentName:"p",href:"https://research.kudelskisecurity.com/2018/01/16/blockchains-how-to-steal-millions-in-264-operations/"},"large integers")," ",(0,r.kt)("inlineCode",{parentName:"p"},"3040783849904107057L"),"\n."),(0,r.kt)("h2",{id:"addr"},"Addr"),(0,r.kt)("p",null,"Addresses in Cosmos SDK are 20 character long strings, and contain security checks - such as chain-prefix in Bech32, and\nchecksums in Bech32 and checksummed hex (EIP55). Since CosmWasm is an extension of Cosmos SDK, it follows the same\naddress rules; wallets, smart contracts, modules have an identifier address with defined prefix. ",(0,r.kt)("inlineCode",{parentName:"p"},"cosmos1...")," for\ngaia, ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm1...")," for CosmWasm testnets."),(0,r.kt)("p",null,"For passing address to contracts, pass it as string and then validate the input to an: ",(0,r.kt)("strong",{parentName:"p"},"Addr"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/v0.14.0/packages/std/src/addresses.rs#L31"},"Addr")," is just a wrapper around\nplain string that provides useful helper functions such as string validation to an address."),(0,r.kt)("h2",{id:"optional-canonical-addresses"},"Optional: Canonical Addresses"),(0,r.kt)("p",null,"There is another representation of an address that tackles the case of change of human representation, but this is rare."),(0,r.kt)("p",null,"For example Bitcoin ",(0,r.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/BIP_0173"},"moved from Base58 to Bech32")," encoding along with SegWit, and\nRise is also ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/rise-vision/introducing-rise-v2-521a58e1e9de#41d5"},"moving from Lisk format to Bech32"),"\nin the v2 upgrade."),(0,r.kt)("p",null,"This means that if ",(0,r.kt)("inlineCode",{parentName:"p"},"message.signer")," is always the string address that signed the transaction and I use it to look up\nyour account balance, if this encoding ever changed, then you lose access to your account. We clearly need a stable\nidentifier to work with internally."),(0,r.kt)("p",null,"This is where we define a ",(0,r.kt)("em",{parentName:"p"},"Canonical Address"),". This is defined to be stable and unique. That is, for one given account,\nthere is only ever one canonical address (for the life of the blockchain). We define a ",(0,r.kt)("em",{parentName:"p"},"canonical address")," format that\npotentially multiple string addresses can be converted to. It can be transformed back and forth without any changes"),(0,r.kt)("p",null,"We define the ",(0,r.kt)("em",{parentName:"p"},"Canonical Address")," as the binary representation used internally in the blockchain. This is what the\nnative tokens are indexed by and therefore must never change for the life of an account. This is the representation that\ncan be used for all ",(0,r.kt)("strong",{parentName:"p"},"storage lookups")," (if you use part of an address as the key in the storage)."),(0,r.kt)("h2",{id:"naming"},"Naming"),(0,r.kt)("p",null,"More and\nmore, ",(0,r.kt)("a",{parentName:"p",href:"https://app.ens.domains/about"},"human")," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.blockstack.org/core/naming/introduction.html"},"readable")," ",(0,r.kt)("a",{parentName:"p",href:"https://iov.one"},"names"),"\nare increasingly important in\nblockchains ",(0,r.kt)("a",{parentName:"p",href:"https://hackernoon.com/everything-you-didnt-know-about-the-handshake-naming-system-how-this-blockchain-project-will-483464309f33"},"and beyond"),"\n."),(0,r.kt)("p",null,"At one point, we considered making names a first-class citizen of CosmWasm and using them everywhere in messages. Until\nwe realized that accounts can have no name until initialized, and we need a permanently stable ",(0,r.kt)("em",{parentName:"p"},"Address"),". However, we\nwould still like names to be as central to the blockchain as possible. To this end, we can consider names as just\nanother form of ",(0,r.kt)("em",{parentName:"p"},"Address")," albeit one that requires a contract query (with storage access) to resolve, not just a call to\na pure function."),(0,r.kt)("p",null,"This actual format and interfaces are still under discussion, and we are still working on\na ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/name-service/intro"},"tutorial version of a name service"),". However, for sake of argument,\nimagine we agree\nevery ",(0,r.kt)("em",{parentName:"p"},"Address")," that begins with ",(0,r.kt)("inlineCode",{parentName:"p"},":")," is a name to lookup with the name service, and other ones can be resolved directly\nwith the built-in blockchain resolution function. So when creating a transaction for an escrow, you could use\neither ",(0,r.kt)("inlineCode",{parentName:"p"},'{"arbiter": "cosmos1qqp837a4kvtgplm6uqhdge0zzu6efqgujllfst"}')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'{"arbiter": ":alice"}'),", performing the\nresolution inside the contract rather than only in the client. Of course we would need a standard query format for name\nservice, and the calling contract would need to somehow know the address of the canonical name service contract to\nresolve with, which is why this feature is still under discussion."),(0,r.kt)("h3",{id:"dids"},"DIDs"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: it will likely be quite some time before this is fully implemented. It serves as design inspiration")),(0,r.kt)("p",null,"Let's keep imagining what is possible with ",(0,r.kt)("em",{parentName:"p"},"Human Names"),', once we develop a solution to the name service issue. We could\nnot just use a reference to resolve a user address, but resolve a contract as well. Maybe we could dispatch a message to\nan "ERC20" token contract not by its name, but by its ',(0,r.kt)("em",{parentName:"p"},"uniquely registered token ticker"),". We would soon need to use some\nway to distinguish the scope or context of a name. This is\nwhere ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"Decentralized Identifiers (DIDs)"),' could come in. Imagine the following message\nformat, that could be used either by a end-client or by a smart contract "actor":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "destination": "did:token:XRN",\n  "msg": {\n    "transfer": {\n      "from": "did:account:alice",\n      "to": "did:account:bob",\n      "amount": "13.56"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"This would not be some spec to be resolved client-side, but the actual interchange format used on the blockchain. So one\nsmart contract could also dispatch such a message in the course of execution. Do you like this idea?\nComments? ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/issues/80"},"Please add your thoughts on github"),"."))}u.isMDXComponent=!0}}]);