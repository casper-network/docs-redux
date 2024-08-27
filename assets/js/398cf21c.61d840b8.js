"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[7320],{68259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var s=n(74848),a=n(28453);const i={},o="Authorization Keys",r={id:"concepts/list-auth-keys",title:"Authorization Keys",description:"This topic explains the usage of authorization keys when signing a transaction and how to access them from a smart contract. Try the Working with Authorization Keys tutorial for an example.",source:"@site/docs/concepts/list-auth-keys.md",sourceDirName:"concepts",slug:"/concepts/list-auth-keys",permalink:"/docs-redux/next/concepts/list-auth-keys",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"concepts",previous:{title:"Smart Contracts",permalink:"/docs-redux/next/concepts/smart-contracts"},next:{title:"Call Stacks",permalink:"/docs-redux/next/concepts/callstack"}},c={},h=[{value:"Associated Keys vs. Authorization Keys",id:"associated-keys-vs-authorization-keys",level:2},{value:"Accessing Authorization Keys from a Smart Contract",id:"accessing-authorization-keys-from-a-smart-contract",level:2},{value:"When to Use Authorization Keys",id:"when-to-use-authorization-keys",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"import useBaseUrl from '@docusaurus/useBaseUrl';"}),"\n",(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"authorization-keys",children:"Authorization Keys"})}),"\n",(0,s.jsxs)(t.p,{children:["This topic explains the usage of authorization keys when signing a transaction and how to access them from a smart contract. Try the ",(0,s.jsx)(t.a,{href:"/docs-redux/next/resources/advanced/list-auth-keys-tutorial",children:"Working with Authorization Keys"})," tutorial for an example."]}),"\n",(0,s.jsx)(t.h2,{id:"associated-keys-vs-authorization-keys",children:"Associated Keys vs. Authorization Keys"}),"\n",(0,s.jsx)(t.p,{children:"Let's review the difference between associated keys to an Account and authorization keys for a transaction."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Associated keys are public keys that are associated with a given account. To understand associated keys and how they are linked to an account, read about ",(0,s.jsx)(t.a,{href:"/docs-redux/next/concepts/design/casper-design#accounts-associated-keys-weights",children:"associated keys and weights"})," and try the ",(0,s.jsx)(t.a,{href:"/docs-redux/next/resources/tutorials/advanced/two-party-multi-sig",children:"Two-Party Multi-Signature"})," tutorial."]}),"\n",(0,s.jsxs)(t.li,{children:["Authorization keys are public keys used to sign a transaction and are listed in the transaction's ",(0,s.jsx)(t.code,{children:"approvals"}),". Authorization keys are a subset of the associated keys of the account under which the transaction is executed."]}),"\n",(0,s.jsxs)(t.li,{children:["When a node receives a transaction, it checks that the transaction has the required authorization keys under ",(0,s.jsx)(t.code,{children:"approvals"})," before including it in a block."]}),"\n",(0,s.jsx)(t.li,{children:"Different transactions executing the same smart contract can have different authorization keys."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Auth Keys",src:n(90002).A+"",width:"862",height:"842"})}),"\n",(0,s.jsx)(t.p,{children:"Here is a sample JSON representation of an Account's associated keys:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'"associated_keys": [\n{\n    "account_hash": "account-hash-1ab\u202611",\n    "weight": 1\n},\n{\n    "account_hash": "account-hash-2cd\u202622",\n    "weight": 1\n},\n{\n    "account_hash": "account-hash-3de\u202633",\n    "weight": 1\n   },\n{\n    "account_hash": "account-hash-4fg\u202644",\n      "weight": 1\n}\n ], ...\n'})}),"\n",(0,s.jsx)(t.p,{children:"Here is a sample JSON representation of a transaction's authorization keys:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'"approvals": [\n    {\n      "signer": " 2cd...22",\n      "signature": "02df8c...f481"\n    },\n    {\n      "signer": "4fg...44",\n      "signature": "02ef21...756a"\n    }\n]\n'})}),"\n",(0,s.jsx)(t.h2,{id:"accessing-authorization-keys-from-a-smart-contract",children:"Accessing Authorization Keys from a Smart Contract"}),"\n",(0,s.jsxs)(t.p,{children:["Contract code can retrieve the set of authorization keys for a given transaction by calling the ",(0,s.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.list_authorization_keys.html",children:"contract_api::runtime::list_authorization_keys"})," function, which returns the set of account hashes representing the keys used to sign the transaction."]}),"\n",(0,s.jsx)(t.h2,{id:"when-to-use-authorization-keys",children:"When to Use Authorization Keys"}),"\n",(0,s.jsx)(t.p,{children:"Authorization keys give developers more fine-grained control within their smart contracts. For example, developers can define a hierarchy within an account's associated keys. Then, they can use this hierarchy and the current execution's authorization keys to limit access for certain operations."}),"\n",(0,s.jsxs)(t.p,{children:["Try the ",(0,s.jsx)(t.a,{href:"/docs-redux/next/resources/advanced/list-auth-keys-tutorial",children:"Working with Authorization Keys"})," tutorial to view an example workflow."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},90002:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/authorization-keys-9187fa39eca478722639797b5109fa50.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(96540);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);