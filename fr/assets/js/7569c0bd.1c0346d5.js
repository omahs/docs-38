"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7067],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=s,d=m["".concat(i,".").concat(g)]||m[g]||p[g]||r;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8068:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c}});var a=n(3117),s=(n(7294),n(3905));const r={sidebar_position:2},o="Submessages",l={unversionedId:"smart-contracts/message/submessage",id:"smart-contracts/message/submessage",title:"Submessages",description:"Messages are used to interact with SDK modules or other CW smart contracts. Since messages are executed in a set-and-forget manner, you will not get a response on whether the call was successful or not. Getting the result of your call can be very useful in the following cases:",source:"@site/docs/04-smart-contracts/02-message/02-submessage.md",sourceDirName:"04-smart-contracts/02-message",slug:"/smart-contracts/message/submessage",permalink:"/fr/docs/1.0/smart-contracts/message/submessage",draft:!1,editUrl:"https://github.com/InterWasm/docs/edit/main/docs/04-smart-contracts/02-message/02-submessage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Messages",permalink:"/fr/docs/1.0/smart-contracts/message/message"},next:{title:"Result and Option",permalink:"/fr/docs/1.0/smart-contracts/result-option"}},i={},c=[{value:"Creating a submessage",id:"creating-a-submessage",level:2},{value:"Reply strategies",id:"reply-strategies",level:2},{value:"Handling a reply",id:"handling-a-reply",level:2},{value:"Instantiating a new contract",id:"instantiating-a-new-contract",level:3},{value:"Handling a reply from a token transfer",id:"handling-a-reply-from-a-token-transfer",level:3},{value:"Propagation of context between contracts",id:"propagation-of-context-between-contracts",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"submessages"},"Submessages"),(0,s.kt)("p",null,"Messages are used to interact with SDK modules or other CW smart contracts. Since messages are executed in a set-and-forget manner, you will not get a response on whether the call was successful or not. Getting the result of your call can be very useful in the following cases:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Instantiating a new contract and getting the contract address"),(0,s.kt)("li",{parentName:"ol"},"Executing an action and asserting that the result was successful (e.g. Making sure that certain tokens are transferred to your contract)"),(0,s.kt)("li",{parentName:"ol"},"Handling the error from your cross-contract call instead of rolling back the transaction")),(0,s.kt)("p",null,"To get the result of the message sent from your smart contract, you will need to dispatch a submessage."),(0,s.kt)("p",null,"Read more about the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/main/SEMANTICS.md#submessages"},"semantics of submessages and how submessage execution is ordered"),"."),(0,s.kt)("h2",{id:"creating-a-submessage"},"Creating a submessage"),(0,s.kt)("p",null,"A submessage wraps a ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmosMsg")," in a ",(0,s.kt)("inlineCode",{parentName:"p"},"SubMsg")," struct. The ",(0,s.kt)("inlineCode",{parentName:"p"},"SubMsg")," struct has the following fields."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct SubMsg<T> {\n    pub id: u64,                // reply_id that will be used to handle the reply\n    pub msg: CosmosMsg<T>,      // message to be sent\n    pub gas_limit: Option<u64>, // gas limit for the submessage\n    pub reply_on: ReplyOn,      // a flag to determine when the reply should be sent\n}\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/main/packages/std/src/results/submessages.rs"},"source code")," for the ",(0,s.kt)("inlineCode",{parentName:"p"},"SubMsg")," struct."),(0,s.kt)("p",null,"Here is an example of instantiating a ",(0,s.kt)("inlineCode",{parentName:"p"},"cw20")," token using a submessage."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'const INSTANTIATE_REPLY_ID = 1u64;\n\n// Creating a message to create a new cw20 token\nlet instantiate_message = WasmMsg::Instantiate {\n    admin: None,\n    code_id: msg.cw20_code_id,\n    msg: to_binary(&Cw20InstantiateMsg {\n        name: "new token".to_string(),\n        symbol: "nToken".to_string(),\n        decimals: 6,\n        initial_balances: vec![],\n        mint: Some(MinterResponse {\n            minter: env.contract.address.to_string(),\n            cap: None,\n        }),\n    })?,\n    funds: vec![],\n    label: "".to_string(),\n};\n\n// Creating a submessage that wraps the message above\nlet submessage = SubMsg::reply_on_success(instantiate_message.into(), INSTANTIATE_REPLY_ID);\n\n// Creating a response with the submessage\nlet response = Response::new().add_submessage(submessage);\n')),(0,s.kt)("h2",{id:"reply-strategies"},"Reply strategies"),(0,s.kt)("p",null,"Submessages offer different options for the other contract to provide a reply. There are four reply options you can choose:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum ReplyOn {\n    /// Always perform a callback after SubMsg is processed\n    Always,\n    /// Only callback if SubMsg returned an error, no callback on success case\n    Error,\n    /// Only callback if SubMsg was successful, no callback on error case\n    Success,\n    /// Never make a callback - this is like the original CosmosMsg semantics\n    Never,\n}\n")),(0,s.kt)("p",null,"In the above example, we created the submessage using the ",(0,s.kt)("inlineCode",{parentName:"p"},"SubMsg::reply_on_success")," shorthand. However, we can also create a submessage and explicity specifying the reply strategy."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"let submessage = SubMsg {\n    gas_limit: None,\n    id: INSTANTIATE_REPLY_ID,\n    reply_on: ReplyOn::Success,\n    msg: instantiate_message.into()\n}\n")),(0,s.kt)("h2",{id:"handling-a-reply"},"Handling a reply"),(0,s.kt)("p",null,"In order to handle the reply from the other contract, the calling contract must implement a new entry point. Here are two examples of how to handle the replies:"),(0,s.kt)("h3",{id:"instantiating-a-new-contract"},"Instantiating a new contract"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg_attr(not(feature = "library"), entry_point)]\npub fn reply(deps: DepsMut, _env: Env, msg: Reply) -> StdResult<Response> {\n    match msg.id {\n        INSTANTIATE_REPLY_ID => handle_instantiate_reply(deps, msg),\n        id => Err(StdError::generic_err(format!("Unknown reply id: {}", id))),\n    }\n}\n\nfn handle_instantiate_reply(deps: DepsMut, msg: Reply) -> StdResult<Response> {\n    // Handle the msg data and save the contract address\n    // See: https://github.com/CosmWasm/cw-plus/blob/main/packages/utils/src/parse_reply.rs\n    let res = parse_reply_instantiate_data(msg)?;\n\n    // Save res.contract_address\n    Ok(Response::new())\n}\n')),(0,s.kt)("h3",{id:"handling-a-reply-from-a-token-transfer"},"Handling a reply from a token transfer"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg_attr(not(feature = "library"), entry_point)]\npub fn reply(deps: DepsMut, msg: Reply) -> StdResult<Response> {\n    match msg.id {\n        CW20_TRANSFER_REPLY_ID => handle_transfer_reply(deps, msg),\n        id => Err(StdError::generic_err(format!("Unknown reply id: {}", id))),\n    }\n}\n\nfn handle_transfer_reply(deps: DepsMut, msg: Reply) -> StdResult<Response> {\n    // Handle the msg data and save the contract address\n    // See: https://github.com/CosmWasm/cw-plus/blob/main/packages/utils/src/parse_reply.rs\n    let data = msg.result.into_result().map_err(StdError::generic_err);\n\n    // Search for the transfer event\n    // If there are multiple transfers, you will need to find the right event to handle\n    let transfer_event = msg\n        .events\n        .iter()\n        .find(|e| {\n            e.attributes\n                .iter()\n                .any(|attr| attr.key == "action" && attr.value == "transfer")\n        })\n        .ok_or_else(|| StdError::generic_err(format!("unable to find transfer action"))?;\n\n    // Do whatever you want with the attributes in the transfer event\n    // Reference to the full event: https://github.com/CosmWasm/cw-plus/blob/main/contracts/cw20-base/src/contract.rs#L239-L244\n    Ok(Response::new())\n}\n')),(0,s.kt)("h2",{id:"propagation-of-context-between-contracts"},"Propagation of context between contracts"),(0,s.kt)("p",null,"To stop reentrancy attacks, CosmWasm does not allow context to be stored in the contract memory. There are two ways to propagate state between contracts:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"All ",(0,s.kt)("inlineCode",{parentName:"li"},"events")," returned by the submessage can be read from the ",(0,s.kt)("inlineCode",{parentName:"li"},"Reply")," message"),(0,s.kt)("li",{parentName:"ol"},"Storing a temporary state using ",(0,s.kt)("inlineCode",{parentName:"li"},"cw_storage_plus::Item")," and loading it in the reply handler")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/terraswap/terraswap/blob/main/contracts/terraswap_pair/src/contract.rs"},"Handling of contract instantiate reply")," (Terraswap)"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/larry0x/astrozap/blob/master/contracts/astrozap/src/contract.rs"},"Parsing of contract execution replies")," (larry0x)")))}p.isMDXComponent=!0}}]);