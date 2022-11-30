"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3009],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),c=i,k=u["".concat(l,".").concat(c)]||u[c]||m[c]||r;return t?a.createElement(k,o(o({ref:n},p),{},{components:t})):a.createElement(k,o({ref:n},p))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1478:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return d}});var a=t(3117),i=(t(7294),t(3905));const r={sidebar_position:1},o="cw-storage-plus",s={unversionedId:"smart-contracts/state/cw-plus",id:"smart-contracts/state/cw-plus",title:"cw-storage-plus",description:"Enhanced Storage Engines for CosmWasm",source:"@site/docs/04-smart-contracts/03-state/01-cw-plus.md",sourceDirName:"04-smart-contracts/03-state",slug:"/smart-contracts/state/cw-plus",permalink:"/docs/1.0/smart-contracts/state/cw-plus",draft:!1,editUrl:"https://github.com/InterWasm/docs/edit/main/docs/04-smart-contracts/03-state/01-cw-plus.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Result and Option",permalink:"/docs/1.0/smart-contracts/result-option"},next:{title:"Simple State",permalink:"/docs/1.0/smart-contracts/state/simple-state"}},l={},d=[{value:"Usage Overview",id:"usage-overview",level:2},{value:"Item",id:"item",level:2},{value:"Map",id:"map",level:2},{value:"Key types",id:"key-types",level:3},{value:"Composite Keys",id:"composite-keys",level:3},{value:"Path",id:"path",level:3},{value:"Prefix",id:"prefix",level:3},{value:"IndexedMap",id:"indexedmap",level:2},{value:"Definition",id:"definition",level:3},{value:"Usage",id:"usage",level:3},{value:"Index keys deserialization",id:"index-keys-deserialization",level:3}],p={toc:d};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cw-storage-plus"},"cw-storage-plus"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Enhanced Storage Engines for CosmWasm")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notice")),(0,i.kt)("p",null,"This has been heavily used in many production-quality contracts and\nheavily refined. There is one planned API break, but the code has demonstrated\nitself to be stable and powerful. Please feel free to use in your contracts."),(0,i.kt)("h2",{id:"usage-overview"},"Usage Overview"),(0,i.kt)("p",null,"We introduce two main classes to provide a productive abstraction\non top of ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmwasm_std::Storage"),". They are ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),", which is\na typed wrapper around one database key, providing some helper functions\nfor interacting with it without dealing with raw bytes. And ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),",\nwhich allows you to store multiple unique typed objects under a prefix,\nindexed by a simple (",(0,i.kt)("inlineCode",{parentName:"p"},"&[u8]"),") or compound (eg. ",(0,i.kt)("inlineCode",{parentName:"p"},"(&[u8], &[u8])"),") primary key."),(0,i.kt)("p",null,"These correspond to the concepts represented in ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmwasm_storage")," by\n",(0,i.kt)("inlineCode",{parentName:"p"},"Singleton")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Bucket"),", but with a re-designed API and implementation\nto require less typing for developers and less gas usage in the contracts."),(0,i.kt)("h2",{id:"item"},"Item"),(0,i.kt)("p",null,"The usage of an ",(0,i.kt)("a",{parentName:"p",href:"./src/item.rs"},(0,i.kt)("inlineCode",{parentName:"a"},"Item"))," is pretty straight-forward.\nYou must simply provide the proper type, as well as a database key not\nused by any other item. Then it will provide you with a nice interface\nto interact with such data."),(0,i.kt)("p",null,"If you are coming from using ",(0,i.kt)("inlineCode",{parentName:"p"},"Singleton"),", the biggest change is that\nwe no longer store ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage")," inside, meaning we don't need read and write\nvariants of the object, just one type. Furthermore, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"const fn"),"\nto create the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),", allowing it to be defined as a global compile-time\nconstant rather than a function that must be constructed each time,\nwhich saves gas as well as typing."),(0,i.kt)("p",null,"Example Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize, Deserialize, PartialEq, Debug)]\nstruct Config {\n    pub owner: String,\n    pub max_tokens: i32,\n}\n\n// note const constructor rather than 2 functions with Singleton\nconst CONFIG: Item<Config> = Item::new("config");\n\nfn demo() -> StdResult<()> {\n    let mut store = MockStorage::new();\n\n    // may_load returns Option<T>, so None if data is missing\n    // load returns T and Err(StdError::NotFound{}) if data is missing\n    let empty = CONFIG.may_load(&store)?;\n    assert_eq!(None, empty);\n    let cfg = Config {\n        owner: "admin".to_string(),\n        max_tokens: 1234,\n    };\n    CONFIG.save(&mut store, &cfg)?;\n    let loaded = CONFIG.load(&store)?;\n    assert_eq!(cfg, loaded);\n\n    // update an item with a closure (includes read and write)\n    // returns the newly saved value\n    let output = CONFIG.update(&mut store, |mut c| -> StdResult<_> {\n        c.max_tokens *= 2;\n        Ok(c)\n    })?;\n    assert_eq!(2468, output.max_tokens);\n\n    // you can error in an update and nothing is saved\n    let failed = CONFIG.update(&mut store, |_| -> StdResult<_> {\n        Err(StdError::generic_err("failure mode"))\n    });\n    assert!(failed.is_err());\n\n    // loading data will show the first update was saved\n    let loaded = CONFIG.load(&store)?;\n    let expected = Config {\n        owner: "admin".to_string(),\n        max_tokens: 2468,\n    };\n    assert_eq!(expected, loaded);\n\n    // we can remove data as well\n    CONFIG.remove(&mut store);\n    let empty = CONFIG.may_load(&store)?;\n    assert_eq!(None, empty);\n\n    Ok(())\n}\n')),(0,i.kt)("h2",{id:"map"},"Map"),(0,i.kt)("p",null,"The usage of an ",(0,i.kt)("a",{parentName:"p",href:"./src/item.rs"},(0,i.kt)("inlineCode",{parentName:"a"},"Map"))," is a little more complex, but\nis still pretty straight-forward. You can imagine it as a storage-backed\n",(0,i.kt)("inlineCode",{parentName:"p"},"BTreeMap"),", allowing key-value lookups with typed values. In addition,\nwe support not only simple binary keys (",(0,i.kt)("inlineCode",{parentName:"p"},"&[u8]"),"), but tuples, which are\ncombined. This allows us to store allowances as composite keys\neg. ",(0,i.kt)("inlineCode",{parentName:"p"},"(owner, spender)")," to look up the balance."),(0,i.kt)("p",null,"Beyond direct lookups, we have a super power not found in Ethereum -\niteration. That's right, you can list all items in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),", or only\npart of them. We can efficiently allow pagination over these items as\nwell, starting at the point the last query ended, with low gas costs.\nThis requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"iterator")," feature to be enabled in ",(0,i.kt)("inlineCode",{parentName:"p"},"cw-storage-plus"),"\n(which automatically enables it in ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmwasm-std")," as well, and which is\nenabled by default)."),(0,i.kt)("p",null,"If you are coming from using ",(0,i.kt)("inlineCode",{parentName:"p"},"Bucket"),", the biggest change is that\nwe no longer store ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage")," inside, meaning we don't need read and write\nvariants of the object, just one type. Furthermore, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"const fn"),"\nto create the ",(0,i.kt)("inlineCode",{parentName:"p"},"Bucket"),", allowing it to be defined as a global compile-time\nconstant rather than a function that must be constructed each time,\nwhich saves gas as well as typing. In addition, the composite indexes\n(tuples) is more ergonomic and expressive of intention, and the range\ninterface has been improved."),(0,i.kt)("p",null,"Here is an example with normal (simple) keys:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize, Deserialize, PartialEq, Debug, Clone)]\nstruct Data {\n    pub name: String,\n    pub age: i32,\n}\n\nconst PEOPLE: Map<&str, Data> = Map::new("people");\n\nfn demo() -> StdResult<()> {\n    let mut store = MockStorage::new();\n    let data = Data {\n        name: "John".to_string(),\n        age: 32,\n    };\n\n    // load and save with extra key argument\n    let empty = PEOPLE.may_load(&store, "john")?;\n    assert_eq!(None, empty);\n    PEOPLE.save(&mut store, "john", &data)?;\n    let loaded = PEOPLE.load(&store, "john")?;\n    assert_eq!(data, loaded);\n\n    // nothing on another key\n    let missing = PEOPLE.may_load(&store, "jack")?;\n    assert_eq!(None, missing);\n\n    // update function for new or existing keys\n    let birthday = |d: Option<Data>| -> StdResult<Data> {\n        match d {\n            Some(one) => Ok(Data {\n                name: one.name,\n                age: one.age + 1,\n            }),\n            None => Ok(Data {\n                name: "Newborn".to_string(),\n                age: 0,\n            }),\n        }\n    };\n\n    let old_john = PEOPLE.update(&mut store, "john", birthday)?;\n    assert_eq!(33, old_john.age);\n    assert_eq!("John", old_john.name.as_str());\n\n    let new_jack = PEOPLE.update(&mut store, "jack", birthday)?;\n    assert_eq!(0, new_jack.age);\n    assert_eq!("Newborn", new_jack.name.as_str());\n\n    // update also changes the store\n    assert_eq!(old_john, PEOPLE.load(&store, "john")?);\n    assert_eq!(new_jack, PEOPLE.load(&store, "jack")?);\n\n    // removing leaves us empty\n    PEOPLE.remove(&mut store, "john");\n    let empty = PEOPLE.may_load(&store, "john")?;\n    assert_eq!(None, empty);\n\n    Ok(())\n}\n')),(0,i.kt)("h3",{id:"key-types"},"Key types"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," key can be anything that implements the ",(0,i.kt)("inlineCode",{parentName:"p"},"PrimaryKey")," trait. There are a series of implementations of\n",(0,i.kt)("inlineCode",{parentName:"p"},"PrimaryKey")," already provided (see ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/storage-plus/src/keys.rs"),"):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"impl<'a> PrimaryKey<'a> for &'a [u8]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"impl<'a> PrimaryKey<'a> for &'a str")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"impl<'a> PrimaryKey<'a> for Vec<u8>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"impl<'a> PrimaryKey<'a> for String")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"impl<'a> PrimaryKey<'a> for Addr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"impl<'a> PrimaryKey<'a> for &'a Addr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"impl<'a, T: PrimaryKey<'a> + Prefixer<'a>, U: PrimaryKey<'a>> PrimaryKey<'a> for (T, U)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"impl<'a, T: PrimaryKey<'a> + Prefixer<'a>, U: PrimaryKey<'a> + Prefixer<'a>, V: PrimaryKey<'a>> PrimaryKey<'a> for (T, U, V)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"impl<'a, T: Endian + Clone> PrimaryKey<'a> for IntKey<T>"))),(0,i.kt)("p",null,"That means that byte and string slices, byte vectors, and strings, can be conveniently used as keys.\nMoreover, some other types can be used as well, like addresses and address references, pairs and triples, and\ninteger types."),(0,i.kt)("p",null,"If the key represents an address, we suggest using ",(0,i.kt)("inlineCode",{parentName:"p"},"&Addr")," for keys in storage, instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," or string slices.\nThis implies doing address validation through ",(0,i.kt)("inlineCode",{parentName:"p"},"addr_validate")," on any address passed in via a message, to ensure it's a\nlegitimate address, and not random text which will fail later.\n",(0,i.kt)("inlineCode",{parentName:"p"},"pub fn addr_validate(&self, &str) -> Addr")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"deps.api")," can be used for address validation, and the returned ",(0,i.kt)("inlineCode",{parentName:"p"},"Addr"),"\ncan then be conveniently used as key in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," or similar structure."),(0,i.kt)("h3",{id:"composite-keys"},"Composite Keys"),(0,i.kt)("p",null,'There are times when we want to use multiple items as a key, for example, when\nstoring allowances based on account owner and spender. We could try to manually\nconcatenate them before calling, but that can lead to overlap, and is a bit\nlow-level for us. Also, by explicitly separating the keys, we can easily provide\nhelpers to do range queries over a prefix, such as "show me all allowances for\none owner" (first part of the composite key). Just like you\'d expect from your\nfavorite database.'),(0,i.kt)("p",null,"Here how we use it with composite keys. Just define a tuple as a key and use that\neverywhere you used a byte slice above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// Note the tuple for primary key. We support one slice, or a 2 or 3-tuple\n// adding longer tuples is quite easy but unlikely to be needed.\nconst ALLOWANCE: Map<(&str, &str), u64> = Map::new("allow");\n\nfn demo() -> StdResult<()> {\n    let mut store = MockStorage::new();\n\n    // save and load on a composite key\n    let empty = ALLOWANCE.may_load(&store, ("owner", "spender"))?;\n    assert_eq!(None, empty);\n    ALLOWANCE.save(&mut store, ("owner", "spender"), &777)?;\n    let loaded = ALLOWANCE.load(&store, ("owner", "spender"))?;\n    assert_eq!(777, loaded);\n\n    // doesn\'t appear under other key (even if a concat would be the same)\n    let different = ALLOWANCE.may_load(&store, ("owners", "pender")).unwrap();\n    assert_eq!(None, different);\n\n    // simple update\n    ALLOWANCE.update(&mut store, ("owner", "spender"), |v| {\n        Ok(v.unwrap_or_default() + 222)\n    })?;\n    let loaded = ALLOWANCE.load(&store, ("owner", "spender"))?;\n    assert_eq!(999, loaded);\n\n    Ok(())\n}\n')),(0,i.kt)("h3",{id:"path"},"Path"),(0,i.kt)("p",null,"Under the scenes, we create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Path")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," when accessing a key.\n",(0,i.kt)("inlineCode",{parentName:"p"},'PEOPLE.load(&store, b"jack") == PEOPLE.key(b"jack").load()'),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"Map.key()")," returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Path"),", which has the same interface as ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),",\nreusing the calculated path to this key."),(0,i.kt)("p",null,"For simple keys, this is just a bit less typing and a bit less gas if you\nuse the same key for many calls. However, for composite keys, like\n",(0,i.kt)("inlineCode",{parentName:"p"},'(b"owner", b"spender")')," it is ",(0,i.kt)("strong",{parentName:"p"},"much")," less typing. And highly recommended anywhere\nyou will use a composite key even twice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize, Deserialize, PartialEq, Debug, Clone)]\nstruct Data {\n    pub name: String,\n    pub age: i32,\n}\n\nconst PEOPLE: Map<&str, Data> = Map::new("people");\nconst ALLOWANCE: Map<(&str, &str), u64> = Map::new("allow");\n\nfn demo() -> StdResult<()> {\n    let mut store = MockStorage::new();\n    let data = Data {\n        name: "John".to_string(),\n        age: 32,\n    };\n\n    // create a Path one time to use below\n    let john = PEOPLE.key("john");\n\n    // Use this just like an Item above\n    let empty = john.may_load(&store)?;\n    assert_eq!(None, empty);\n    john.save(&mut store, &data)?;\n    let loaded = john.load(&store)?;\n    assert_eq!(data, loaded);\n    john.remove(&mut store);\n    let empty = john.may_load(&store)?;\n    assert_eq!(None, empty);\n\n    // Same for composite keys, just use both parts in key().\n    // Notice how much less verbose than the above example.\n    let allow = ALLOWANCE.key(("owner", "spender"));\n    allow.save(&mut store, &1234)?;\n    let loaded = allow.load(&store)?;\n    assert_eq!(1234, loaded);\n    allow.update(&mut store, |x| Ok(x.unwrap_or_default() * 2))?;\n    let loaded = allow.load(&store)?;\n    assert_eq!(2468, loaded);\n\n    Ok(())\n}\n')),(0,i.kt)("h3",{id:"prefix"},"Prefix"),(0,i.kt)("p",null,'In addition to getting one particular item out of a map, we can iterate over the map\n(or a subset of the map). This let us answer questions like "show me all tokens",\nand we provide some nice ',(0,i.kt)("inlineCode",{parentName:"p"},"Bound"),"s helpers to easily allow pagination or custom ranges."),(0,i.kt)("p",null,"The general format is to get a ",(0,i.kt)("inlineCode",{parentName:"p"},"Prefix")," by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"map.prefix(k)"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"k")," is exactly\none less item than the normal key (If ",(0,i.kt)("inlineCode",{parentName:"p"},"map.key()")," took ",(0,i.kt)("inlineCode",{parentName:"p"},"(&[u8], &[u8])"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"map.prefix()")," takes ",(0,i.kt)("inlineCode",{parentName:"p"},"&[u8]"),".\nIf ",(0,i.kt)("inlineCode",{parentName:"p"},"map.key()")," took ",(0,i.kt)("inlineCode",{parentName:"p"},"&[u8]"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"map.prefix()")," takes ",(0,i.kt)("inlineCode",{parentName:"p"},"()"),"). Once we have a prefix space, we can iterate\nover all items with ",(0,i.kt)("inlineCode",{parentName:"p"},"range(store, min, max, order)"),". It supports ",(0,i.kt)("inlineCode",{parentName:"p"},"Order::Ascending")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Order::Descending"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"min")," is the lower bound and ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," is the higher bound."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Copy, Clone, Debug)]\npub enum Bound {\n    Inclusive(Vec<u8>),\n    Exclusive(Vec<u8>),\n    None,\n}\n")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," bounds, it will return all items under this prefix. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},".take(n)")," to\nlimit the results to ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," items and start doing pagination. You can also set the ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," bound to\neg. ",(0,i.kt)("inlineCode",{parentName:"p"},"Bound::Exclusive(last_value)")," to start iterating over all items ",(0,i.kt)("em",{parentName:"p"},"after")," the last value. Combined with\n",(0,i.kt)("inlineCode",{parentName:"p"},"take"),", we easily have pagination support. You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"Bound::Inclusive(x)")," when you want to include any\nperfect matches. To better understand the API, please read the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize, Deserialize, PartialEq, Debug, Clone)]\nstruct Data {\n    pub name: String,\n    pub age: i32,\n}\n\nconst PEOPLE: Map<&str, Data> = Map::new("people");\nconst ALLOWANCE: Map<(&str, &str), u64> = Map::new("allow");\n\nfn demo() -> StdResult<()> {\n    let mut store = MockStorage::new();\n\n    // save and load on two keys\n    let data = Data { name: "John".to_string(), age: 32 };\n    PEOPLE.save(&mut store, "john", &data)?;\n    let data2 = Data { name: "Jim".to_string(), age: 44 };\n    PEOPLE.save(&mut store, "jim", &data2)?;\n\n    // iterate over them all\n    let all: StdResult<Vec<_>> = PEOPLE\n        .range(&store, Bound::None, Bound::None, Order::Ascending)\n        .collect();\n    assert_eq!(\n        all?,\n        vec![("jim".to_vec(), data2), ("john".to_vec(), data.clone())]\n    );\n\n    // or just show what is after jim\n    let all: StdResult<Vec<_>> = PEOPLE\n        .range(\n            &store,\n            Bound::Exclusive("jim"),\n            Bound::None,\n            Order::Ascending,\n        )\n        .collect();\n    assert_eq!(all?, vec![("john".to_vec(), data)]);\n\n    // save and load on three keys, one under different owner\n    ALLOWANCE.save(&mut store, ("owner", "spender"), &1000)?;\n    ALLOWANCE.save(&mut store, ("owner", "spender2"), &3000)?;\n    ALLOWANCE.save(&mut store, ("owner2", "spender"), &5000)?;\n\n    // get all under one key\n    let all: StdResult<Vec<_>> = ALLOWANCE\n        .prefix("owner")\n        .range(&store, Bound::None, Bound::None, Order::Ascending)\n        .collect();\n    assert_eq!(\n        all?,\n        vec![("spender".to_vec(), 1000), ("spender2".to_vec(), 3000)]\n    );\n\n    // Or ranges between two items (even reverse)\n    let all: StdResult<Vec<_>> = ALLOWANCE\n        .prefix("owner")\n        .range(\n            &store,\n            Bound::Exclusive("spender1"),\n            Bound::Inclusive("spender2"),\n            Order::Descending,\n        )\n        .collect();\n    assert_eq!(all?, vec![("spender2".to_vec(), 3000)]);\n\n    Ok(())\n}\n')),(0,i.kt)("h2",{id:"indexedmap"},"IndexedMap"),(0,i.kt)("p",null,"Let's sue one example of ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexedMap")," definition and usage, originally taken from the ",(0,i.kt)("inlineCode",{parentName:"p"},"cw721-base")," contract."),(0,i.kt)("h3",{id:"definition"},"Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct TokenIndexes<'a> {\n  pub owner: MultiIndex<'a, Addr, TokenInfo, String>,\n}\n\nimpl<'a> IndexList<TokenInfo> for TokenIndexes<'a> {\n  fn get_indexes(&'_ self) -> Box<dyn Iterator<Item = &'_ dyn Index<TokenInfo>> + '_> {\n    let v: Vec<&dyn Index<TokenInfo>> = vec![&self.owner];\n    Box::new(v.into_iter())\n  }\n}\n\npub fn tokens<'a>() -> IndexedMap<'a, &'a str, TokenInfo, TokenIndexes<'a>> {\n  let indexes = TokenIndexes {\n    owner: MultiIndex::new(\n      |d: &TokenInfo| d.owner.clone(),\n      \"tokens\",\n      \"tokens__owner\",\n    ),\n  };\n  IndexedMap::new(\"tokens\", indexes)\n}\n")),(0,i.kt)("p",null,"Let's discuss this piece by piece:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct TokenIndexes<'a> {\n  pub owner: MultiIndex<'a, Addr, TokenInfo, String>,\n}\n")),(0,i.kt)("p",null,"These are the index definitions. Here there's only one index, called ",(0,i.kt)("inlineCode",{parentName:"p"},"owner"),". There could be more, as public\nmembers of the ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenIndexes")," struct."),(0,i.kt)("p",null,"We see that the ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," index is a ",(0,i.kt)("inlineCode",{parentName:"p"},"MultiIndex"),". A multi-index can have repeated values as keys. The primary key is\nused internally as the last element of the multi-index key, to disambiguate repeated index values.\nLike the name implies, this is an index over tokens, by owner. Given that an owner can have multiple tokens,\nwe need a ",(0,i.kt)("inlineCode",{parentName:"p"},"MultiIndex")," to be able to list / iterate over all the tokens a given owner has."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenInfo")," data will originally be stored by ",(0,i.kt)("inlineCode",{parentName:"p"},"token_id")," (which is a string value).\nYou can see this in the token creation code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"    tokens().update(deps.storage, &msg.token_id, |old| match old {\n        Some(_) => Err(ContractError::Claimed {}),\n        None => Ok(token),\n    })?;\n")),(0,i.kt)("p",null,"(Incidentally, this is using ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"save"),", to avoid overwriting an already existing token)."),(0,i.kt)("p",null,"Given that ",(0,i.kt)("inlineCode",{parentName:"p"},"token_id")," is a string value, we specify ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," as the last argument of the ",(0,i.kt)("inlineCode",{parentName:"p"},"MultiIndex")," definition.\nThat way, the deserialization of the primary key will be done to the right type (an owned string)."),(0,i.kt)("p",null,"Then, this ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenInfo")," data will be indexed by token ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," (which is an ",(0,i.kt)("inlineCode",{parentName:"p"},"Addr"),"). So that we can list all the tokens\nan owner has. That's why the ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," index key is ",(0,i.kt)("inlineCode",{parentName:"p"},"Addr"),"."),(0,i.kt)("p",null,"Other important thing here is that the key (and its components, in the case of a composite key) must implement\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"PrimaryKey")," trait. You can see that ",(0,i.kt)("inlineCode",{parentName:"p"},"Addr")," do implement ",(0,i.kt)("inlineCode",{parentName:"p"},"PrimaryKey"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"impl<'a> PrimaryKey<'a> for Addr {\n  type Prefix = ();\n  type SubPrefix = ();\n  type Suffix = Self;\n  type SuperSuffix = Self;\n\n  fn key(&self) -> Vec<Key> {\n    // this is simple, we don't add more prefixes\n    vec![Key::Ref(self.as_bytes())]\n  }\n}\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We can now see how it all works, taking a look at the remaining code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"impl<'a> IndexList<TokenInfo> for TokenIndexes<'a> {\n    fn get_indexes(&'_ self) -> Box<dyn Iterator<Item = &'_ dyn Index<TokenInfo>> + '_> {\n        let v: Vec<&dyn Index<TokenInfo>> = vec![&self.owner];\n        Box::new(v.into_iter())\n    }\n}\n")),(0,i.kt)("p",null,"This implements the ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexList")," trait for ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenIndexes"),".\nNote: this code is more or less boiler-plate, and needed for the internals. Do not try to customize this;\njust return a list of all indexes.\nImplementing this trait serves two purposes (which are really one and the same): it allows the indexes\nto be queried through ",(0,i.kt)("inlineCode",{parentName:"p"},"get_indexes"),", and, it allows ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenIndexes")," to be treated as an ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexList"),". So that\nit can be passed as a parameter during ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexedMap")," construction, below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn tokens<\'a>() -> IndexedMap<\'a, &\'a str, TokenInfo, TokenIndexes<\'a>> {\n    let indexes = TokenIndexes {\n        owner: MultiIndex::new(\n            |d: &TokenInfo| d.owner.clone(),\n            "tokens",\n            "tokens__owner",\n        ),\n    };\n    IndexedMap::new("tokens", indexes)\n}\n')),(0,i.kt)("p",null,"Here ",(0,i.kt)("inlineCode",{parentName:"p"},"tokens()")," is just a helper function, that simplifies the ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexedMap")," construction for us. First the\nindex (es) is (are) created, and then, the ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexedMap")," is created and returned."),(0,i.kt)("p",null,"During index creation, we must supply an index function per index"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"        owner: MultiIndex::new(|d: &TokenInfo| d.owner.clone(),\n")),(0,i.kt)("p",null,", which is the one that will take the value of the original map, and create the index key from it.\nOf course, this requires that the elements required for the index key are present in the value.\nBesides the index function, we must also supply the namespace of the pk, and the one for the new index."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"After that, we just create and return the ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexedMap"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'    IndexedMap::new("tokens", indexes)\n')),(0,i.kt)("p",null,"Here of course, the namespace of the pk must match the one used during index(es) creation. And, we pass our\n",(0,i.kt)("inlineCode",{parentName:"p"},"TokenIndexes")," (as an ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexList"),"-type parameter) as second argument. Connecting in this way the underlying ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"\nfor the pk, with the defined indexes."),(0,i.kt)("p",null,"So, ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexedMap")," (and the other ",(0,i.kt)("inlineCode",{parentName:"p"},"Indexed*")," types) is just a wrapper / extension around ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),", that provides\na number of index functions and namespaces to create indexes over the original ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," data. It also implements\ncalling these index functions during value storage / update / removal, so that you can forget about it,\nand just use the indexed data."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"An example of use, where ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," value passed as a parameter, and ",(0,i.kt)("inlineCode",{parentName:"p"},"start_after")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"limit")," optionally\ndefine the pagination range:"),(0,i.kt)("p",null,"Notice this uses ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix()"),", explained above in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," section."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"    let limit = limit.unwrap_or(DEFAULT_LIMIT).min(MAX_LIMIT) as usize;\n    let start = start_after.map(Bound::exclusive);\n    let owner_addr = deps.api.addr_validate(&owner)?;\n\n    let res: Result<Vec<_>, _> = tokens()\n        .idx\n        .owner\n        .prefix(owner_addr)\n        .range(deps.storage, start, None, Order::Ascending)\n        .take(limit)\n        .collect();\n    let tokens = res?;\n")),(0,i.kt)("p",null,"Now ",(0,i.kt)("inlineCode",{parentName:"p"},"tokens")," contains ",(0,i.kt)("inlineCode",{parentName:"p"},"(token_id, TokenInfo)")," pairs for the given ",(0,i.kt)("inlineCode",{parentName:"p"},"owner"),".\nThe pk values are ",(0,i.kt)("inlineCode",{parentName:"p"},"Vec<u8>")," in the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"range"),", but will be deserialized to the proper type using\n",(0,i.kt)("inlineCode",{parentName:"p"},"prefix_de")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"range_de"),"; provided that the (optional) pk deserialization type (",(0,i.kt)("inlineCode",{parentName:"p"},"String"),", in this case)\nis specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"MultiIndex")," definition (see #Index keys deserialization, below)."),(0,i.kt)("p",null,"Another example that is similar, but returning only the ",(0,i.kt)("inlineCode",{parentName:"p"},"token_id"),"s, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"keys()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"    let pks: Vec<_> = tokens()\n        .idx\n        .owner\n        .prefix(owner_addr)\n        .keys(\n            deps.storage,\n            start,\n            None,\n            Order::Ascending,\n        )\n        .take(limit)\n        .collect();\n")),(0,i.kt)("p",null,"Now ",(0,i.kt)("inlineCode",{parentName:"p"},"pks")," contains ",(0,i.kt)("inlineCode",{parentName:"p"},"token_id")," values (as raw ",(0,i.kt)("inlineCode",{parentName:"p"},"Vec<u8>"),"s) for the given ",(0,i.kt)("inlineCode",{parentName:"p"},"owner"),". Again, by using ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix_de")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"range_de"),",\na deserialized key can be obtained instead, as detailed in the next section."),(0,i.kt)("h3",{id:"index-keys-deserialization"},"Index keys deserialization"),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"UniqueIndex")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MultiIndex"),", the primary key (",(0,i.kt)("inlineCode",{parentName:"p"},"PK"),") type needs to be specified, in order to deserialize\nthe primary key to it. This generic type comes with a default of ",(0,i.kt)("inlineCode",{parentName:"p"},"()"),", which means that no deserialization / data\nwill be provided for the primary key. This is for backwards compatibility with the current ",(0,i.kt)("inlineCode",{parentName:"p"},"UniqueIndex")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"MultiIndex"),"\nimpls. It can also come in handy in cases you don't need the primary key, and are interested only in the deserialized\nvalues."))}m.isMDXComponent=!0}}]);