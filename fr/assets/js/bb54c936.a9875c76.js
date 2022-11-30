"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3477],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,k=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},944:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=t(3117),r=(t(7294),t(3905));const o={sidebar_position:2},i="Indexes",s={unversionedId:"storage/indexes",id:"storage/indexes",title:"Indexes",description:"Indexes are key structures that enable iteration over primary keys using value information. Here is an example for",source:"@site/tutorials/storage/indexes.md",sourceDirName:"storage",slug:"/storage/indexes",permalink:"/fr/tutorials/storage/indexes",draft:!1,editUrl:"https://github.com/InterWasm/docs/edit/main/tutorials/storage/indexes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorials",previous:{title:"How CW Key Value Storage Works?",permalink:"/fr/tutorials/storage/key-value-store"},next:{title:"Advanced State Modeling",permalink:"/fr/tutorials/storage/state-modeling"}},l={},d=[{value:"storage-plus indexing",id:"storage-plus-indexing",level:2},{value:"Unique Indexes",id:"unique-indexes",level:3},{value:"Multi Indexes",id:"multi-indexes",level:3},{value:"Composite Multi Indexing",id:"composite-multi-indexing",level:3}],u={toc:d};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"indexes"},"Indexes"),(0,r.kt)("p",null,"Indexes are key structures that enable iteration over primary keys using value information. Here is an example for\nunderstanding them."),(0,r.kt)("p",null,"Let's assume a model: there are multiple tokens in the system, each token has a unique owner. An owner must be related to\na token. Tokens must be queryable by owner."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct Token {\n  pub owner: Addr,\n  pub ticker: String\n}\n")),(0,r.kt)("p",null,"Tokens can be identified by an auto incremented key, and this integer will be used as primary key. This will make each\ntoken unique."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"(TokenPK) -> Token")),(0,r.kt)("p",null,"Here is the fun part, owner index:\n",(0,r.kt)("inlineCode",{parentName:"p"},"(owner, TokenPK) -> Token")),(0,r.kt)("p",null,"TokenPK points to a Token data, and ",(0,r.kt)("inlineCode",{parentName:"p"},"owner:TokenPK")," key points to ",(0,r.kt)("inlineCode",{parentName:"p"},"Token"),". With two database hits, Token data is\naccessible. Now to retrieve all the tokens an owner manages, we run prefix range like we have shown above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub const TOKENS: Map<U8Key, Token> = Map::new("tokens");\n// (owner Address, Token PK) -> u8 key\npub const OWNER_INDEX: Map<(&Addr, U8Key), &[u8]> = Map::new("owner_tokenpk");\n')),(0,r.kt)("p",null,"Now tokens are easily accessible by ",(0,r.kt)("strong",{parentName:"p"},"owner")," information. On every state change to ",(0,r.kt)("inlineCode",{parentName:"p"},"TOKENS"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," must be modified accordingly."),(0,r.kt)("h2",{id:"storage-plus-indexing"},"storage-plus indexing"),(0,r.kt)("p",null,"The solution above will work but is not optimal. Too much code complexity and manual work. This is\nwhere ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/main/packages/storage-plus/src/indexed_map.rs"},"storage-plus/IndexedMap"),"\ncomes into play. ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexedMap")," is a storage handler that indexes internally. Two types of indexes\nare available: ",(0,r.kt)("a",{parentName:"p",href:"#unique-indexes"},"Unique Indexes")," and ",(0,r.kt)("a",{parentName:"p",href:"#multi-indexes"},"Multi Indexes")),(0,r.kt)("h3",{id:"unique-indexes"},"Unique Indexes"),(0,r.kt)("p",null,"Uniqueness of a data field in a database is quite a common need.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/v0.7.0/packages/storage-plus/src/indexes.rs"},"UniqueIndex")," is an indexing\nhelper for achieving this functionality."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct Token {\n  pub owner: Addr,\n  pub ticker: String,\n  pub identifier: u8, // <---- unique value\n}\n\n// TokenIndexes structs keeps a list of indexers\npub struct TokenIndexes<'a> {\n  // token.identifier\n  pub identifier: UniqueIndex<'a, U8Key, Token>,\n}\n\n// IndexList is just boilerplate code for fetching a struct's indexes\nimpl<'a> IndexList<Token> for TokenIndexes<'a> {\n  fn get_indexes(&'_ self) -> Box<dyn Iterator<Item=&'_ dyn Index<Token>> + '_> {\n    let v: Vec<&dyn Index<Token>> = vec![&self.identifier];\n    Box::new(v.into_iter())\n  }\n}\n\n// tokens() is the storage access function.\npub fn tokens<'a>() -> IndexedMap<'a, &'a [u8], Token, TokenIndexes<'a>> {\n  let indexes = TokenIndexes {\n    identifier: UniqueIndex::new(|d| U8Key::new(d.identifier), \"token_identifier\"),\n  };\n  IndexedMap::new(TOKEN_NAMESPACE, indexes)\n}\n")),(0,r.kt)("p",null,"Let's go over the code step by step:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct Token {\n  pub owner: Addr,\n  pub ticker: String,\n  pub identifier: u8, // <---- unique value\n}\n")),(0,r.kt)("p",null,"Token has a few values and ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," is a unique value the token has."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// TokenIndexes structs keeps a list of indexers\npub struct TokenIndexes<'a> {\n  // token.identifier\n  pub identifier: UniqueIndex<'a, U8Key, Token>,\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TokenIndexes")," is a struct for defining indexes of ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," struct."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl<'a> IndexList<Token> for TokenIndexes<'a> {\n  fn get_indexes(&'_ self) -> Box<dyn Iterator<Item=&'_ dyn Index<Token>> + '_> {\n    let v: Vec<&dyn Index<Token>> = vec![&self.identifier];\n    Box::new(v.into_iter())\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IndexList")," is an interface for building the indexes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn tokens<'a>() -> IndexedMap<'a, &'a [u8], Token, TokenIndexes<'a>> {\n  let indexes = TokenIndexes {\n    identifier: UniqueIndex::new(|d| U8Key::new(d.identifier), \"token_identifier\"),\n  };\n  IndexedMap::new(TOKEN_NAMESPACE, indexes)\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tokens()")," is storage function used to build ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexedMap"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    identifier: UniqueIndex::new( | d| U8Key::new(d.identifier), "token_identifier"),\n')),(0,r.kt)("p",null,"The above code is an index builder function. It builds composite keys with the given function, and accepts a key to identify the\nindex bucket."),(0,r.kt)("p",null,"Here is some test code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[test]\nfn test_tokens() {\n  let mut store = MockStorage::new();\n\n  let owner1 = Addr::unchecked("addr1");\n  let ticker1 = "TOKEN1".to_string();\n  let token1 = Token {\n    owner: owner1.clone(),\n    ticker: ticker1,\n    identifier: 0,\n  };\n\n  let token_id = increment_tokens(store.borrow_mut()).unwrap();\n  tokens().save(store.borrow_mut(), &U64Key::from(token_id).joined_key(), &token1).unwrap();\n\n  let ticker2 = "TOKEN2".to_string();\n  let token2 = Token {\n    owner: owner1.clone(),\n    ticker: ticker2,\n    identifier: 0,\n  };\n\n  let token_id = increment_tokens(store.borrow_mut()).unwrap();\n  // identifier clashes, must return error\n  tokens().save(store.borrow_mut(), &U64Key::from(token_id).joined_key(), &token1).unwrap();\n}\n')),(0,r.kt)("p",null,"The last line will crash with an error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"called `Result::unwrap()` on an `Err` value: GenericErr { msg: \"Violates unique constraint on index\" }\nthread 'state::test::test_tokens' panicked at 'called `Result::unwrap()` on an `Err` value: GenericErr { msg: \"Violates unique constraint on index\" }', src/state.rs:197:90\nstack backtrace:\n")),(0,r.kt)("h3",{id:"multi-indexes"},"Multi Indexes"),(0,r.kt)("p",null,"Multi indexes are used when the structure is indexed by non-unique values. Here is a case from the ",(0,r.kt)("inlineCode",{parentName:"p"},"cw721")," smart contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct TokenIndexes<'a> {\n  // secondary index by owner address\n  // the last U64Key is the primary key which is an auto incremented token counter\n  pub owner: MultiIndex<'a, (Vec<u8>, Vec<u8>), Token>,\n}\n\n// this may become a macro, not important just boilerplate, builds the list of indexes for later use\nimpl<'a> IndexList<Token> for TokenIndexes<'a> {\n  fn get_indexes(&'_ self) -> Box<dyn Iterator<Item=&'_ dyn Index<Token>> + '_> {\n    let v: Vec<&dyn Index<Token>> = vec![&self.owner];\n    Box::new(v.into_iter())\n  }\n}\n\nconst TOKEN_NAMESPACE: &str = \"tokens\";\n\npub fn tokens<'a>() -> IndexedMap<'a, &'a [u8], Token, TokenIndexes<'a>> {\n  let indexes = TokenIndexes {\n    owner: MultiIndex::new(\n      |d, k| (index_string(d.owner.as_str()), k),\n      TOKEN_NAMESPACE,\n      \"tokens__owner\",\n    )\n  };\n  IndexedMap::new(TOKEN_NAMESPACE, indexes)\n}\n")),(0,r.kt)("p",null,"We see that the owner index is a ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiIndex"),". A multi-index can have repeated values as keys. That's why the primary key\nis added as the last element of the multi-index key. Like the name implies, this is an index over tokens, by owner. Given\nthat an owner can have multiple tokens, we need a ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiIndex")," to be able to list / iterate over all the tokens a given\nowner has."),(0,r.kt)("p",null,"The important thing here is that the key (and its components, in the case of a combined key) must implement the\nPrimaryKey trait. You can see that both the ",(0,r.kt)("inlineCode",{parentName:"p"},"2-tuple (_, _)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec<u8>")," do implement PrimaryKey:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"}," impl<'a, T: PrimaryKey<'a> + Prefixer<'a>, U: PrimaryKey<'a>> PrimaryKey<'a> for (T, U) {\n  type Prefix = T;\n  type SubPrefix = ();\n\n  fn key(&self) -> Vec<&[u8]> {\n    let mut keys = self.0.key();\n    keys.extend(&self.1.key());\n    keys\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},' pub fn tokens<\'a>() -> IndexedMap<\'a, &\'a str, TokenInfo, TokenIndexes<\'a>> {\n  let indexes = TokenIndexes {\n    owner: MultiIndex::new(\n      |d, k| (Vec::from(d.owner.as_ref()), k),\n      "tokens",\n      "tokens__owner",\n    ),\n  };\n  IndexedMap::new("tokens", indexes)\n}\n')),(0,r.kt)("p",null,"During index creation, we must supply an index function per index."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"}," owner: MultiIndex::new(|d, k| (Vec::from(d.owner.as_ref()), k),\n")),(0,r.kt)("p",null,"which is the one that will take the value, and the primary key (always in ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec<u8>")," form) of the original map, and\ncreate the index key from them. Of course, this mandates that the elements required for the index key are present in the\nvalue (which makes sense)."),(0,r.kt)("p",null,"Besides the index function, we must also supply the namespace of the pk, and the one for the new index."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},' IndexedMap::new("tokens", indexes)\n')),(0,r.kt)("p",null,"Here of course, the namespace of the pk must match the one used during index(es) creation. And we pass our\nTokenIndexes (as a IndexList-type parameter) as second argument, connecting in this way the underlying Map with the pk,\nwith the defined indexes."),(0,r.kt)("p",null,"IndexedMap (and the other Indexed* types) is just a wrapper / extension around Map, that provides a number of index\nfunctions and namespaces to create indexes over the original Map data. It also implements calling these index functions\nduring value storage / modification / removal, so that you can forget about it and just use the indexed data."),(0,r.kt)("p",null,"Here is a code example on using indexes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[test]\nfn test_tokens() {\n  let mut store = MockStorage::new();\n\n  let owner1 = Addr::unchecked("addr1");\n  let ticker1 = "TOKEN1".to_string();\n  let token1 = Token {\n    owner: owner1.clone(),\n    ticker: ticker1,\n  };\n\n  let ticker2 = "TOKEN2".to_string();\n  let token2 = Token {\n    owner: owner1.clone(),\n    ticker: ticker2,\n  };\n\n  let token_id = increment_tokens(store.borrow_mut()).unwrap();\n  tokens().save(store.borrow_mut(), &U64Key::from(token_id).joined_key(), &token1).unwrap();\n\n  let token_id = increment_tokens(store.borrow_mut()).unwrap();\n  tokens().save(store.borrow_mut(), &U64Key::from(token_id).joined_key(), &token1).unwrap();\n\n  // want to load token using owner1 and ticker1\n  let list: Vec<_> = tokens()\n    .idx.owner\n    .prefix(index_string(owner1.as_str()))\n    .range(&store, None, None, Order::Ascending)\n    .collect::<StdResult<_>>().unwrap();\n  let (_, t) = &list[0];\n  assert_eq!(t, &token1);\n  assert_eq!(2, list.len());\n}\n')),(0,r.kt)("h3",{id:"composite-multi-indexing"},"Composite Multi Indexing"),(0,r.kt)("p",null,"Imagine the following situation:\nwe have a number of batches, each stored by its (numeric) batch id, that can change\nafter which they must be automatically promoted. Now imagine that we want to process all the pending batches at any\nstatus from ",(0,r.kt)("strong",{parentName:"p"},"Pending")," to ",(0,r.kt)("strong",{parentName:"p"},"Promoted"),", depending on interactions over them. The batches also have an associated\nexpiration, given time. Of course, we are only interested in the pending ones that have already expired (so that we can promote\nthem). So, we can build an index over the batches, with a composite key composed of the batch status, and their\nexpiration timestamp. Using the composite key, we'll be discarding both, the already promoted batches, and the pending\nbut not yet expired ones."),(0,r.kt)("p",null,"So, we build the index, generate the composite key, and iterate over all pending batches that\nhave an expiration timestamp that is less than the current time."),(0,r.kt)("p",null,"Here's a code example on how to do this:"),(0,r.kt)("p",null,"Batch struct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// A Batch is a group of members who got voted in together. We need this to\n/// calculate moving from *Paid, Pending Voter* to *Voter*\n#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]\npub struct Batch {\n  /// Timestamp (seconds) when all members are no longer pending\n  pub grace_ends_at: u64,\n  /// How many must still pay in their escrow before the batch is early authorized\n  pub waiting_escrow: u32,\n  /// All paid members promoted. We do this once when grace ends or waiting escrow hits 0.\n  /// Store this one done so we don't loop through that anymore.\n  pub batch_promoted: bool,\n  /// List of all members that are part of this batch (look up ESCROWS with these keys)\n  pub members: Vec<Addr>,\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IndexedMap")," definitions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// We need a secondary index for batches, such that we can look up batches that have\n// not been promoted, ordered by expiration (ascending) from now.\n// Index: (U8Key/bool: batch_promoted, U64Key: grace_ends_at) -> U64Key: pk\npub struct BatchIndexes<'a> {\n  pub promotion_time: MultiIndex<'a, (U8Key, U64Key, U64Key), Batch>,\n}\n\nimpl<'a> IndexList<Batch> for BatchIndexes<'a> {\n  fn get_indexes(&'_ self) -> Box<dyn Iterator<Item=&'_ dyn Index<Batch>> + '_> {\n    let v: Vec<&dyn Index<Batch>> = vec![&self.promotion_time];\n    Box::new(v.into_iter())\n  }\n}\n\npub fn batches<'a>() -> IndexedMap<'a, U64Key, Batch, BatchIndexes<'a>> {\n  let indexes = BatchIndexes {\n    promotion_time: MultiIndex::new(\n      |b: &Batch, pk: Vec<u8>| {\n        let promoted = if b.batch_promoted { 1u8 } else { 0u8 };\n        (promoted.into(), b.grace_ends_at.into(), pk.into())\n      },\n      \"batch\",\n      \"batch__promotion\",\n    ),\n  };\n  IndexedMap::new(\"batch\", indexes)\n}\n")),(0,r.kt)("p",null,"This example is similar to the previous one, above. The only differences are:"),(0,r.kt)("p",null,"The composite key now has three elements: the batch status, the expiration timestamp, and the batch id (which is the\nprimary key for the Batch data). We're using a U64Key for the batch id / pk. This is just for convenience. We could as\nwell have used a plain ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec<u8>")," for it."),(0,r.kt)("p",null,"Now, here's how to use the indexed data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let batch_map = batches();\n\n// Limit to batches that have not yet been promoted (0), using sub_prefix.\n// Iterate which have expired at or less than the current time (now), using a bound.\n// These are all eligible for timeout-based promotion\nlet now = block.time.nanos() / 1_000_000_000;\n// as we want to keep the last item (pk) unbounded, we increment time by 1 and use exclusive (below the next tick)\nlet max_key = (U64Key::from(now + 1), U64Key::from(0)).joined_key();\nlet bound = Bound::Exclusive(max_key);\n\nlet ready = batch_map\n              .idx\n              .promotion_time\n              .sub_prefix(0u8.into())\n              .range(storage, None, Some(bound), Order::Ascending)\n              .collect::<StdResult<Vec<_ >>>() ?;\n")),(0,r.kt)("p",null,"A couple of comments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"joined_key()")," is being used to create the range key. This helper function transforms the (partial) composite key\ncomposed of batch expiration timestamp and batch id, into a ",(0,r.kt)("inlineCode",{parentName:"li"},"Vec<u8>")," with the proper format. That is then used to\ncreate a range bound."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sub_prefix()")," is used to fix the first element of the composite key (the batch status). This is required, because\n",(0,r.kt)("inlineCode",{parentName:"li"},"prefix()")," in this case (a 3-tuple), implies fixing the first two elements of the key, and we don't want / need that\nhere."),(0,r.kt)("li",{parentName:"ul"},"The iteration proceeds from None to the bound key created from the current timestamp. So that we effectively list only\nthe still pending but already expired batches.")),(0,r.kt)("p",null,"That's it. After that, we can iterate over the results and change their status from ",(0,r.kt)("inlineCode",{parentName:"p"},"Pending")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Promoted"),", or whatever we\nneed to do."))}p.isMDXComponent=!0}}]);