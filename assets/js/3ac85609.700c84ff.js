"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[8626],{42429:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=t(74848),s=t(28453);const i={title:"Introduction",slug:"/writing-contracts"},c="Writing On-Chain Code",o={id:"developers/writing-onchain-code/index",title:"Introduction",description:"This section shows you how to write session code and smart contracts in Rust and WebAssembly (Wasm) for a Casper network. When referring to session code, these documents outline logic that executes in the context of an account. In contrast, smart contracts consist of logic installed on-chain, for use by multiple parties. There is a large overlap between the processes of writing session code versus contract code, with some semantic differences outlined in their respective documentation. The Video Series for Writing On-Chain Code accompanies the topics below.",source:"@site/versioned_docs/version-1.5.X/developers/writing-onchain-code/index.md",sourceDirName:"developers/writing-onchain-code",slug:"/writing-contracts",permalink:"/docs-redux/writing-contracts",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724759228e3,frontMatter:{title:"Introduction",slug:"/writing-contracts"},sidebar:"developers",previous:{title:"Essential Rust Crates",permalink:"/docs-redux/developers/essential-crates"},next:{title:"Getting Started with Rust",permalink:"/docs-redux/developers/writing-onchain-code/getting-started"}},d={},a=[{value:"Interacting with Contracts on the Blockchain",id:"interacting-with-contracts-on-the-blockchain",level:2},{value:"Tutorials",id:"tutorials",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",iframe:"iframe",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"writing-on-chain-code",children:"Writing On-Chain Code"})}),"\n",(0,r.jsxs)(n.p,{children:["This section shows you how to write session code and smart contracts in Rust and WebAssembly (Wasm) for a Casper network. When referring to session code, these documents outline logic that executes in the context of an account. In contrast, smart contracts consist of logic installed on-chain, for use by multiple parties. There is a large overlap between the processes of writing session code versus contract code, with some semantic differences outlined in their respective documentation. The ",(0,r.jsx)(n.a,{href:"https://www.youtube.com/playlist?list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj",children:"Video Series for Writing On-Chain Code"})," accompanies the topics below."]}),"\n",(0,r.jsxs)(n.p,{align:"center",children:["\n",(0,r.jsx)(n.iframe,{width:"400",height:"225",src:"https://www.youtube.com/embed/JoOjhSOnQzk",position:"middle",frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/developers/writing-onchain-code/getting-started",children:"Getting Started with Rust"})}),(0,r.jsx)(n.td,{children:"An introduction to using Rust with the Casper Platform"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/developers/writing-onchain-code/assembly-script",children:"Getting Started with AssemblyScript"})}),(0,r.jsx)(n.td,{children:"An introduction to using AssemblyScript with the Casper Platform"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/developers/writing-onchain-code/simple-contract",children:"Writing a Basic Smart Contract in Rust"})}),(0,r.jsx)(n.td,{children:"An example of a smart contract built in Rust"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/developers/writing-onchain-code/testing-contracts",children:"Unit Testing Smart Contracts"})}),(0,r.jsx)(n.td,{children:"Steps to test contract code using the unit testing framework"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/developers/writing-onchain-code/upgrading-contracts",children:"Upgrading and Maintaining Smart Contracts"})}),(0,r.jsx)(n.td,{children:"An introduction to versioning smart contracts"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/developers/writing-onchain-code/calling-contracts",children:"Calling Contracts"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/developers/writing-onchain-code/contract-vs-session",children:"Smart Contracts and Session Code"})}),(0,r.jsx)(n.td,{children:"Understand what session code is and when you would use it over contract code"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/developers/writing-onchain-code/writing-session-code",children:"Writing Session Code"})}),(0,r.jsx)(n.td,{children:"An introduction to writing session code"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/developers/writing-onchain-code/testing-session-code",children:"Unit Testing Session Code"})}),(0,r.jsx)(n.td,{children:"Steps to test session code using the unit testing framework"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/developers/writing-onchain-code/contract-hash-vs-package-hash",children:"Using Contract Hash vs. Package Hash"})}),(0,r.jsxs)(n.td,{children:["Advantages and disadvantages of using ",(0,r.jsx)(n.code,{children:"contract_hash"})," vs. ",(0,r.jsx)(n.code,{children:"contract_package_hash"})," when calling a contract"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/developers/writing-onchain-code/best-practices",children:"Best Practices for Casper Smart Contract Authors"})}),(0,r.jsx)(n.td,{children:"An outline of best practices when developing smart contracts on a Casper network"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"interacting-with-contracts-on-the-blockchain",children:"Interacting with Contracts on the Blockchain"}),"\n",(0,r.jsxs)(n.p,{children:["Additionally, the section on ",(0,r.jsx)(n.a,{href:"/docs-redux/developers/cli/",children:"Interacting with the Blockchain"})," covers installing and calling contracts using the Casper command-line client written in Rust."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/developers/cli/installing-contracts",children:"Installing Smart Contracts and Querying Global State"})}),(0,r.jsx)(n.td,{children:"A guide on installing smart contracts and querying global state"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/developers/cli/calling-contracts",children:"Calling Smart Contracts with the Rust Client"})}),(0,r.jsx)(n.td,{children:"Steps to call a smart contract with the Rust command-line client"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/concepts/dictionaries",children:"Reading and Writing to Dictionaries"})}),(0,r.jsx)(n.td,{children:"Information on Dictionaries and how to read and write to them on the Casper Platform."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/developers/cli/execution-error-codes",children:"Execution Error Codes"})}),(0,r.jsx)(n.td,{children:"Possible error codes when writing smart contracts."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"tutorials",children:"Tutorials"}),"\n",(0,r.jsx)(n.p,{children:"The following tutorials outline some aspects of writing smart contracts on a Casper network."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/resources/tutorials/beginner/getting-started-tutorial",children:"Getting Started Video"})}),(0,r.jsx)(n.td,{children:"Step-by-step video tutorial for setting up the Casper development environment"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/counter-testnet",children:"A Counter on the Testnet"})}),(0,r.jsx)(n.td,{children:"An example contract that maintains a counter variable on the Casper Testnet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/resources/tutorials/beginner/upgrade-contract",children:"Smart Contract Upgrades"})}),(0,r.jsx)(n.td,{children:"Learn how to upgrade smart contracts"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/README.md",children:"NFTs on Casper with the CEP-78 NFT Standard"})}),(0,r.jsx)(n.td,{children:"Implementing the Casper CEP-78 NFT standard"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/casper-ecosystem/cep18/blob/master/docs/full-tutorial.md",children:"Fungible Tokens on Casper"})}),(0,r.jsx)(n.td,{children:"Implement the Casper Fungible Token standard"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/resources/tutorials/advanced/return-values-tutorial",children:"Interacting with Runtime Return Values"})}),(0,r.jsx)(n.td,{children:"Learning how to return a value using contract code"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/resources/advanced/list-auth-keys-tutorial",children:"Working with Authorization Keys"})}),(0,r.jsx)(n.td,{children:"Retrieving and using the authorization keys associated with a deploy"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs-redux/resources/tutorials/advanced/transfer-token-to-contract",children:"Safely Transfer Tokens to a Contract"})}),(0,r.jsx)(n.td,{children:"How to handle tokens via a contract"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);