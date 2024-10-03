"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[57915],{2222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(74848),s=n(28453);const a={},o="Smart Contracts",c={id:"concepts/smart-contracts",title:"Smart Contracts",description:"Smart Contracts in General",source:"@site/versioned_docs/version-2.0.0/concepts/smart-contracts.md",sourceDirName:"concepts",slug:"/concepts/smart-contracts",permalink:"/docs-redux/2.0.0/concepts/smart-contracts",draft:!1,unlisted:!1,tags:[],version:"2.0.0",frontMatter:{},sidebar:"concepts",previous:{title:"Global State",permalink:"/docs-redux/2.0.0/concepts/global-state"},next:{title:"Authorization Keys",permalink:"/docs-redux/2.0.0/concepts/list-auth-keys"}},i={},d=[{value:"Smart Contracts in General",id:"smart-contracts-in-general",level:2},{value:"Casper Smart Contracts",id:"casper-smart-contracts",level:2},{value:"Session Code",id:"session-code",level:2},{value:"Factory Pattern",id:"factory-pattern",level:2},{value:"Further Reading",id:"further-reading",level:3}];function l(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"smart-contracts",children:"Smart Contracts"})}),"\n",(0,r.jsx)(t.h2,{id:"smart-contracts-in-general",children:"Smart Contracts in General"}),"\n",(0,r.jsx)(t.p,{children:"A smart contract is a self-executing program that automates the actions required in a digital agreement. Once completed, the transactions are trackable and irreversible. Smart contracts permit trusted transactions and agreements among disparate, anonymous parties without the need for a central authority, legal system, or external enforcement mechanism."}),"\n",(0,r.jsx)(t.h2,{id:"casper-smart-contracts",children:"Casper Smart Contracts"}),"\n",(0,r.jsxs)(t.p,{children:["Casper smart contracts can be implemented in any programming language that compiles to ",(0,r.jsx)(t.a,{href:"/docs-redux/2.0.0/concepts/glossary/W#webassembly",children:"Wasm"}),", which can be installed and executed on-chain using ",(0,r.jsx)(t.a,{href:"/docs-redux/2.0.0/concepts/glossary/T#transaction",children:"transactions"}),". Most documentation examples and the Casper system contracts are written in Rust. You can find a guide to writing a simple, smart contract in Rust ",(0,r.jsx)(t.a,{href:"/docs-redux/2.0.0/developers/writing-onchain-code/simple-contract",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"session-code",children:"Session Code"}),"\n",(0,r.jsxs)(t.p,{children:["Session code is the simplest logic one can execute on a Casper network. It is essential because it is often used to trigger contract logic stored on-chain. Entry points in a contract provide access to the contract code installed in global state. Either ",(0,r.jsx)(t.a,{href:"/docs-redux/2.0.0/developers/writing-onchain-code/contract-vs-session#what-is-session-code",children:"session code"})," or another smart contract may call these entry points. Understand when you would use session code over contract code ",(0,r.jsx)(t.a,{href:"/docs-redux/2.0.0/developers/writing-onchain-code/contract-vs-session",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"factory-pattern",children:"Factory Pattern"}),"\n",(0,r.jsxs)(t.p,{children:["From node version 2.0, Casper networks provide host-side support for the factory implementations. When the APIs were updated to support this pattern, the focus was on seamless integration with existing Wasm on the Casper blockchain. Contracts already installed in global state will not be affected by these updates. The corresponding ",(0,r.jsx)(t.a,{href:"https://github.com/casper-network/ceps/pull/86/files",children:"Casper Enhancement Proposal"})," provides additional details. Also, you can learn to write a simple contract with factory entry points by following the ",(0,r.jsx)(t.a,{href:"/docs-redux/2.0.0/developers/writing-onchain-code/factory-pattern",children:"The Factory Pattern"})," developer guide."]}),"\n",(0,r.jsx)(t.h3,{id:"further-reading",children:"Further Reading"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs-redux/2.0.0/developers/writing-onchain-code/simple-contract",children:"Writing Contracts"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs-redux/2.0.0/developers/cli/sending-transactions",children:"Sending a Transaction"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs-redux/2.0.0/developers/cli/installing-contracts",children:"Installing Smart Contracts"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs-redux/2.0.0/developers/writing-onchain-code/calling-contracts",children:"Calling Smart Contracts"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs-redux/2.0.0/developers/cli/calling-contracts",children:"Calling Smart Contracts using the Casper Client"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs-redux/2.0.0/developers/writing-onchain-code/contract-vs-session",children:"Smart Contracts and Session Code"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs-redux/2.0.0/developers/writing-onchain-code/factory-pattern",children:"The Factory Pattern"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);