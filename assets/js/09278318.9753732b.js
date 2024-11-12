"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[503],{24507:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"developers/cli/verifying-contracts","title":"Verifying Contracts","description":"This document describes actions needed for smart contract verification using the Casper CLI client.","source":"@site/versioned_docs/version-2.0.0/developers/cli/verifying-contracts.md","sourceDirName":"developers/cli","slug":"/developers/cli/verifying-contracts","permalink":"/developers/cli/verifying-contracts","draft":false,"unlisted":false,"tags":[],"version":"2.0.0","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{"title":"Verifying Contracts"},"sidebar":"developers","previous":{"title":"Installing Contracts","permalink":"/developers/cli/installing-contracts"},"next":{"title":"Querying Global State","permalink":"/developers/cli/querying-global-state"}}');var n=s(74848),r=s(28453);const c={title:"Verifying Contracts"},o="Verifying Smart Contracts",a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Verifying contracts using the Casper Client",id:"verifying-the-contract",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"verifying-smart-contracts",children:"Verifying Smart Contracts"})}),"\n",(0,n.jsxs)(t.p,{children:["This document describes actions needed for smart contract verification using the ",(0,n.jsx)(t.a,{href:"/developers/prerequisites#install-casper-client",children:"Casper CLI client"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"You have built and installed a contract"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"verifying-the-contract",children:"Verifying contracts using the Casper Client"}),"\n",(0,n.jsxs)(t.p,{children:["You can use the Casper client's ",(0,n.jsx)(t.code,{children:"verify-contract"})," command to have your contract verified. This command archives your contract's source code and sends it to the verification service. This service performs all the same operations on the provided source that a node does when installing a smart contract on the blockchain. Based on the input transaction hash, the resulting binary is then compared byte-by-byte against the contract fetched from the Casper blockchain. If they match, then the verification is a success."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"casper-client verify-contract --verification-url-basepath <HOST:PORT> <TRANSACTION-HASH> <PATH>\n"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"verification-url-basepath"})," - The address of the verification service that will perform the operation; the current two options are ",(0,n.jsx)(t.a,{href:"https://staging.codeverifier.casper.network",children:"https://staging.codeverifier.casper.network"})," for Testnet and ",(0,n.jsx)(t.a,{href:"https://codeverifier.casper.network",children:"https://codeverifier.casper.network"})," for Mainnet."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"<TRANSACTION-HASH>"})," - Unique transaction hash, which is part of the cryptographic security of blockchain technology. This is the output of the put-txn command if the transaction was a success."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"<PATH>"})," - Path to the smart contract's source code. If this argument is omitted, the current working directory will be used."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The prerequisites for the source code are the same as when installing it on the blockchain:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"The source code must be a Rust project as described in The Cargo Book."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"There has to be either rust-toolchain or rust-toolchain.toml file and its contents must define a valid Rust toolchain, as described in The rustup book."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'The installed contract (WebAssembly binary) must be stripped of debugging symbols before submitting it to the Casper node. This can be achieved by specifying strip = "symbols" in the Rust project configuration or using wasm-strip from the wabt package.'}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If the verification is successful, then users will be able to see that information on various websites integrated with the service, e.g., on ",(0,n.jsx)(t.a,{href:"https://staging.casperecosystem.io/check-verification-status/",children:"https://staging.casperecosystem.io/check-verification-status/"})," for Testnet transactions and ",(0,n.jsx)(t.a,{href:"https://casperecosystem.io/check-verification-status/",children:"https://casperecosystem.io/check-verification-status/"})," for Mainnet transactions. This will also allow them to browse through the source code of your smart contract, adding a new layer of transparency and trust."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>o});var i=s(96540);const n={},r=i.createContext(n);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);