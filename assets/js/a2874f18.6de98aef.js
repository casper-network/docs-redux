"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[16512],{71968:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var c=t(74848),a=t(28453);const s={title:"Contract Hash vs. Package Hash"},r="Using the Contract Hash vs. the Package Hash",o={id:"developers/writing-onchain-code/contract-hash-vs-package-hash",title:"Contract Hash vs. Package Hash",description:"This page describes the possibilities of using the contract hash vs. the contract package hash (package hash for short) when calling a contract or managing calls from other contracts. Contracts can allow, block, or track calls from other contracts. As noted in Upgrading and Maintaining Smart Contracts, the contract package contains various contract versions. The contract hash is a BLAKE2b hash of a contract, and the contract package hash is the BLAKE2b hash of a contract package.",source:"@site/versioned_docs/version-1.5.X/developers/writing-onchain-code/contract-hash-vs-package-hash.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/contract-hash-vs-package-hash",permalink:"/docs-redux/1.5.X/developers/writing-onchain-code/contract-hash-vs-package-hash",draft:!1,unlisted:!1,tags:[],version:"1.5.X",frontMatter:{title:"Contract Hash vs. Package Hash"},sidebar:"developers",previous:{title:"Testing Session Code",permalink:"/docs-redux/1.5.X/developers/writing-onchain-code/testing-session-code"},next:{title:"Best Practices for Casper Smart Contract Authors",permalink:"/docs-redux/1.5.X/developers/writing-onchain-code/best-practices"}},i={},h=[{value:"The Casper Call Stack",id:"the-casper-call-stack",level:2},{value:"Recommendations",id:"recommendations",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"import useBaseUrl from '@docusaurus/useBaseUrl';"}),"\n",(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"using-the-contract-hash-vs-the-package-hash",children:"Using the Contract Hash vs. the Package Hash"})}),"\n",(0,c.jsxs)(n.p,{children:["This page describes the possibilities of using the ",(0,c.jsx)(n.a,{href:"https://docs.rs/casper-types/3.0.0/casper_types/contracts/struct.ContractHash.html",children:"contract hash"})," vs. the ",(0,c.jsx)(n.a,{href:"https://docs.rs/casper-types/3.0.0/casper_types/contracts/struct.ContractPackageHash.html",children:"contract package hash"})," (package hash for short) when calling a contract or managing calls from other contracts. Contracts can allow, block, or track calls from other contracts. As noted in ",(0,c.jsx)(n.a,{href:"/docs-redux/1.5.X/developers/writing-onchain-code/upgrading-contracts#the-contract-package",children:"Upgrading and Maintaining Smart Contracts"}),", the contract package contains various contract versions. The contract hash is a BLAKE2b hash of a contract, and the contract package hash is the BLAKE2b hash of a contract package."]}),"\n",(0,c.jsx)(n.p,{align:"center",children:(0,c.jsx)(n.img,{src:'{useBaseUrl("/image/package-representation-extended.png")}',alt:"package-representation",width:"400"})}),"\n",(0,c.jsx)(n.p,{children:"Depending on what a contract needs to accomplish, it may save and manage the contract hash, package hash, or both. This behavior depends on what the contract needs to do, so a given contract might:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Want to identify specific versions of contracts within the same package and thus use a contract hash"}),"\n",(0,c.jsx)(n.li,{children:"Not need specific contract versions and allow or block all versions in the same package, thus using the contract package hash"}),"\n",(0,c.jsx)(n.li,{children:"Need specific contract versions within the same package, and thus use both contract hash and contract package hash"}),"\n",(0,c.jsx)(n.li,{children:"Not need either hash for this use case"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"A given contract, i.e., CEP-18, which wants to allow or block or track calls from other contracts, should then decide:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Will the contract allow, block, or track contract callers loosely at the package level?"}),"\n",(0,c.jsx)(n.li,{children:"Will the contract allow, block, or track contract callers specifically at the contract level?"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Or a more fine-grained variation would be:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Will the contract allow or block callers at the package level but track by both package and contract hash?"}),"\n",(0,c.jsx)(n.li,{children:"Will the contract allow other combinations of these basic concepts?"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Each contract is responsible for documenting its choices and what it requires of its callers. It is essential to keep in mind the difference between the behavior of the Casper execution engine (the host), as exposed by the ",(0,c.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/ext_ffi/",children:"Casper External FFI"}),", versus use cases and interactions between two or more ecosystem entities such as accounts and contracts."]}),"\n",(0,c.jsx)(n.p,{children:"The execution engine doesn't know how a contract such as CEP-18 is trying to manage its internal data or its exposed functionality. The contract is responsible for creating and managing a sub-ledger of resource management, access control, etc."}),"\n",(0,c.jsx)(n.h2,{id:"the-casper-call-stack",children:"The Casper Call Stack"}),"\n",(0,c.jsxs)(n.p,{children:["When identifying who called a contract or initiated a call chain, the execution engine offers the FFI method ",(0,c.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/ext_ffi/fn.casper_load_call_stack.html",children:"casper_load_call_stack"}),", which provides a stack of one or more entries of this kind:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-rust",children:"/// Represents the origin of a sub-call.\n#[derive(Clone, Debug, PartialEq, Eq)]\npub enum CallStackElement {\n    /// Session\n    Session {\n        /// The account hash of the caller\n        account_hash: AccountHash,\n    },\n    /// Effectively an EntryPointType::Session - stored access to a session.\n    StoredSession {\n        /// The account hash of the caller\n        account_hash: AccountHash,\n        /// The contract package hash\n        contract_package_hash: ContractPackageHash,\n        /// The contract hash\n        contract_hash: ContractHash,\n    },\n    /// contract\n    StoredContract {\n        /// The contract package hash\n        contract_package_hash: ContractPackageHash,\n        /// The contract hash\n        contract_hash: ContractHash,\n    },\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["You can find the source code ",(0,c.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/types/src/system/call_stack_element.rs",children:"here"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"After retrieving the required information, the contract must manage its internal logic and data storage, actions entirely opaque to the execution engine."}),"\n",(0,c.jsxs)(n.p,{children:["Learn more about ",(0,c.jsx)(n.a,{href:"/docs-redux/1.5.X/concepts/callstack",children:"Call Stacks"})," and how Casper manages the calling of a contract."]}),"\n",(0,c.jsx)(n.h2,{id:"recommendations",children:"Recommendations"}),"\n",(0,c.jsx)(n.p,{children:"Consider the following questions when designing the contract and choosing whether to use the contract hash or package hash."}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Will you allow only accounts to use the contract? If so, what kind of accounts are you considering?"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Answer"}),(0,c.jsx)(n.th,{children:"Recommendation"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Specific accounts"}),(0,c.jsx)(n.td,{children:"Use the account hash to identify and track each account."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Exactly one specific account"}),(0,c.jsx)(n.td,{children:"Use the account hash of a specific account to identify it."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Any accounts"}),(0,c.jsx)(n.td,{children:"There is no need to track the accounts by account hash."})]})]})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Will you allow only contracts to use it? If so, what kind of contracts?"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Answer"}),(0,c.jsx)(n.th,{children:"Recommendation"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Specific contract versions"}),(0,c.jsx)(n.td,{children:"Use the contract hash to identify each contract version."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Specific contract versions of specific packages"}),(0,c.jsx)(n.td,{children:"Use the contract hash and the package hash to identify each contract version."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Any contract versions of specific packages"}),(0,c.jsx)(n.td,{children:"Use only the package hash to identify each contract package."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Any contract version of any contract"}),(0,c.jsx)(n.td,{children:"There is no need to track by contract or package hash."})]})]})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Will you allow both accounts and contracts to use it? If so, will these accounts and contracts be:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Answer"}),(0,c.jsx)(n.th,{children:"Recommendation"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Specific accounts and contract versions"}),(0,c.jsx)(n.td,{children:"Use the account hash to track each account and the contract hash to identify each contract version."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Specific accounts and specific versions of specific packages"}),(0,c.jsx)(n.td,{children:"Use the account hash to identify each account and the contract hash and package hash to identify each contract version."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Specific accounts and any versions of specific packages"}),(0,c.jsx)(n.td,{children:"Use the account hash to identify each account and the package hash to identify each contract package."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Any accounts and contracts"}),(0,c.jsx)(n.td,{children:"There is no need to track by account hash or contract hash."})]})]})]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/docs-redux/1.5.X/developers/writing-onchain-code/best-practices",children:"Best Practices for Casper Smart Contract Authors"})," - An outline of best practices when developing smart contracts on a Casper network"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/docs-redux/1.5.X/resources/tutorials/advanced/cross-contract",children:"Cross-Contract Communication"})," - Variations of cross-contract communication for more complex scenarios"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/docs-redux/1.5.X/resources/tutorials/advanced/return-values-tutorial",children:"Interacting with Runtime Return Values"})," - Contract code returning a value to the immediate caller via ",(0,c.jsx)(n.code,{children:"runtime::ret()"})]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var c=t(96540);const a={},s=c.createContext(a);function r(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);