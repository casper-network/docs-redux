"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[46046],{75145:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"resources/advanced/storage-workflow","title":"Storage Workflow","description":"The following examples outline methods to read and write data to global state on a Casper network using the Rust programming language.","source":"@site/versioned_docs/version-1.5.X/resources/advanced/storage-workflow.md","sourceDirName":"resources/advanced","slug":"/resources/tutorials/advanced/storage-workflow","permalink":"/1.5.X/resources/tutorials/advanced/storage-workflow","draft":false,"unlisted":false,"tags":[],"version":"1.5.X","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{"title":"Storage Workflow","slug":"/resources/tutorials/advanced/storage-workflow"},"sidebar":"tutorials","previous":{"title":"Token Transfers","permalink":"/1.5.X/resources/tutorials/advanced/transfer-token-to-contract"},"next":{"title":"Cross-Contract Communication","permalink":"/1.5.X/resources/tutorials/advanced/cross-contract"}}');var a=r(74848),s=r(28453);const o={title:"Storage Workflow",slug:"/resources/tutorials/advanced/storage-workflow"},i="Reading and Writing to Global State using Rust",d={},c=[{value:"Description of Functions",id:"description-of-functions",level:2},{value:"<code>runtime::put_key</code> / <code>runtime::get_key</code>",id:"runtimeput_key--runtimeget_key",level:3},{value:"<code>storage::write</code> / <code>storage::read</code>",id:"storagewrite--storageread",level:3},{value:"<code>storage:dictionary_put</code> / <code>storage::dictionary_get</code>",id:"storagedictionary_put--storagedictionary_get",level:3},{value:"Example Code",id:"example-code",level:2},{value:"Example of <code>put_key</code> and <code>storage::write</code>",id:"example-of-put_key-and-storagewrite",level:3},{value:"Example of <code>get_key</code> and <code>storage::read</code>",id:"example-of-get_key-and-storageread",level:3},{value:"Example of <code>dictionary_put</code> and <code>dictionary_get</code>",id:"example-of-dictionary_put-and-dictionary_get",level:3},{value:"Additional Functions for Named Keys",id:"additional-functions-for-named-keys",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"reading-and-writing-to-global-state-using-rust",children:"Reading and Writing to Global State using Rust"})}),"\n",(0,a.jsx)(t.p,{children:"The following examples outline methods to read and write data to global state on a Casper network using the Rust programming language."}),"\n",(0,a.jsxs)(t.p,{children:["Essentially, there are three means of storage within the Casper ecosystem. These consist of ",(0,a.jsx)(t.code,{children:"runtime::put_key"}),", ",(0,a.jsx)(t.code,{children:"storage::write"}),"(alongside ",(0,a.jsx)(t.code,{children:"storage::new_uref"})," as explained below) and ",(0,a.jsx)(t.code,{children:"storage::dictionary_put"}),". These stored values can be read using ",(0,a.jsx)(t.code,{children:"runtime::get_key"}),", ",(0,a.jsx)(t.code,{children:"storage::read"})," and ",(0,a.jsx)(t.code,{children:"storage::dictionary_get"}),", respectively. Each method stores data in a specific way, and it's important to understand the differences."]}),"\n",(0,a.jsx)(t.h2,{id:"description-of-functions",children:"Description of Functions"}),"\n",(0,a.jsxs)(t.h3,{id:"runtimeput_key--runtimeget_key",children:[(0,a.jsx)(t.code,{children:"runtime::put_key"})," / ",(0,a.jsx)(t.code,{children:"runtime::get_key"})]}),"\n",(0,a.jsxs)(t.p,{children:["Both the ",(0,a.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.put_key.html",children:(0,a.jsx)(t.code,{children:"put_key"})})," and ",(0,a.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.get_key.html",children:(0,a.jsx)(t.code,{children:"get_key"})})," functions refer to Casper ",(0,a.jsx)(t.code,{children:"Key"})," types as outlined in both the ",(0,a.jsx)(t.a,{href:"/1.5.X/concepts/serialization-standard#serialization-standard-state-keys",children:"Understanding Hash Types"})," and ",(0,a.jsx)(t.a,{href:"/1.5.X/concepts/serialization-standard#serialization-standard-state-keys",children:"Serialization Standard"}),". These keys are stored within a URef as a ",(0,a.jsx)(t.code,{children:"Key"})," type."]}),"\n",(0,a.jsxs)(t.h3,{id:"storagewrite--storageread",children:[(0,a.jsx)(t.code,{children:"storage::write"})," / ",(0,a.jsx)(t.code,{children:"storage::read"})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.write.html",children:(0,a.jsx)(t.code,{children:"storage::write"})})," writes a given value to a previously established URef (created using ",(0,a.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_uref.html",children:(0,a.jsx)(t.code,{children:"storage::new_uref"})}),"). Unlike ",(0,a.jsx)(t.code,{children:"put_key"}),", this value is not one of the ",(0,a.jsx)(t.code,{children:"Key"})," types listed above, but rather any of the potential ",(0,a.jsx)(t.a,{href:"https://docs.casperlabs.io/developers/json-rpc/types_cl/#cltype",children:(0,a.jsx)(t.code,{children:"CLType"})}),"s as outlined. ",(0,a.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.read.html",children:(0,a.jsx)(t.code,{children:"storage::read"})})," provides a method to retrieve these values from the associated URef."]}),"\n",(0,a.jsxs)(t.h3,{id:"storagedictionary_put--storagedictionary_get",children:[(0,a.jsx)(t.code,{children:"storage:dictionary_put"})," / ",(0,a.jsx)(t.code,{children:"storage::dictionary_get"})]}),"\n",(0,a.jsxs)(t.p,{children:["For most data storage needs on a Casper network, dictionaries are more efficient and provide lower gas costs than ",(0,a.jsx)(t.code,{children:"NamedKeys"}),". Each dictionary item exists independently, sharing a single dictionary seed URef for reference purposes."]}),"\n",(0,a.jsxs)(t.p,{children:["More information on dictionaries can be found on the ",(0,a.jsx)(t.a,{href:"/1.5.X/concepts/dictionaries",children:"Reading and Writing to Dictionaries"})," page."]}),"\n",(0,a.jsx)(t.h2,{id:"example-code",children:"Example Code"}),"\n",(0,a.jsxs)(t.h3,{id:"example-of-put_key-and-storagewrite",children:["Example of ",(0,a.jsx)(t.code,{children:"put_key"})," and ",(0,a.jsx)(t.code,{children:"storage::write"})]}),"\n",(0,a.jsxs)(t.p,{children:["This sample code creates a new contract and stores the contract hash in global state using the ",(0,a.jsx)(t.code,{children:"runtime::put_key"})," function."]}),"\n",(0,a.jsxs)(t.p,{children:["Once the stored value has been initialized, the ",(0,a.jsx)(t.code,{children:"storage::write"})," function overwrites the existing value with ",(0,a.jsx)(t.code,{children:"true"}),". The URef is then stored in the current context as a ",(0,a.jsx)(t.code,{children:"NamedKey"})," titled ",(0,a.jsx)(t.code,{children:"MY_STORED_VALUE_UREF"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"\n    // Store contract hash under a Named key CONTRACT_HASH\n    runtime::put_key(CONTRACT_HASH, contract_hash.into());\n\n    // Store !MY_STORED_VALUE (false) as init value/type into a new URef\n    let my_value_uref = storage::new_uref(!MY_STORED_VALUE);\n\n    // Store MY_STORED_VALUE (true) under the URef value\n    storage::write(my_value_uref, MY_STORED_VALUE);\n\n    // Store the Uref under a Named key MY_STORED_VALUE_UREF\n    let my_value_key: Key = my_value_uref.into();\n    runtime::put_key(MY_STORED_VALUE_UREF, my_value_key);\n}\n\n"})}),"\n",(0,a.jsxs)(t.h3,{id:"example-of-get_key-and-storageread",children:["Example of ",(0,a.jsx)(t.code,{children:"get_key"})," and ",(0,a.jsx)(t.code,{children:"storage::read"})]}),"\n",(0,a.jsxs)(t.p,{children:["This example compliments the code sample above by retrieving the ",(0,a.jsx)(t.code,{children:"CONTRACT_HASH"})," using the ",(0,a.jsx)(t.code,{children:"get_key"})," function, before comparing a provided runtime argument ",(0,a.jsx)(t.code,{children:"ARG_MY_STORED_VALUE"})," against the previously stored ",(0,a.jsx)(t.code,{children:"MY_STORED_VALUE_UREF"})," using ",(0,a.jsx)(t.code,{children:"storage::read"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"\n    let my_stored_value_uref: URef = runtime::get_key(MY_STORED_VALUE_UREF)\n        .unwrap_or_revert()\n        .into_uref()\n        .map(|uref| URef::new(uref.addr(), AccessRights::default()))\n        .unwrap_or_revert()\n        .into_read();\n\n    let my_actual_stored_value: bool = storage::read(my_stored_value_uref).unwrap().unwrap();\n\n    // Compare my stored value with runtime arg\n    let my_expected_stored_value: bool = runtime::get_named_arg(ARG_MY_STORED_VALUE);\n    if my_actual_stored_value != my_expected_stored_value {\n        // We revert if my stored value is not what is expected from caller argument\n        runtime::revert(UserError::StoredValueError);\n    }\n\n    runtime::print(&my_actual_stored_value.to_string());\n}\n\n"})}),"\n",(0,a.jsxs)(t.h3,{id:"example-of-dictionary_put-and-dictionary_get",children:["Example of ",(0,a.jsx)(t.code,{children:"dictionary_put"})," and ",(0,a.jsx)(t.code,{children:"dictionary_get"})]}),"\n",(0,a.jsxs)(t.p,{children:["Examples of dictionary usage for storage can be found in the ",(0,a.jsx)(t.em,{children:"Writing Entries into a Dictionary"})," section of ",(0,a.jsx)(t.a,{href:"/1.5.X/concepts/dictionaries#writing-entries-into-a-dictionary",children:"Reading and Writing to Dictionaries"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"additional-functions-for-named-keys",children:"Additional Functions for Named Keys"}),"\n",(0,a.jsx)(t.p,{children:"The following functions might also be of interest for working with named keys:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.list_named_keys.html",children:"list_named_keys"})," - Returns the named keys of the current context"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.has_key.html",children:"has_key"})," - Returns true if the key exists in the current context\u2019s named keys"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.remove_key.html",children:"remove_key"})," - Removes the requested ",(0,a.jsx)(t.code,{children:"NamedKey"})," from the current context"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(96540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);