"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[45884],{82355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"developers/writing-onchain-code/upgrading-contracts","title":"Upgrading and Maintaining Smart Contracts","description":"Our smart contract packaging tools enable you to:","source":"@site/versioned_docs/version-1.5.X/developers/writing-onchain-code/upgrading-contracts.md","sourceDirName":"developers/writing-onchain-code","slug":"/developers/writing-onchain-code/upgrading-contracts","permalink":"/1.5.X/developers/writing-onchain-code/upgrading-contracts","draft":false,"unlisted":false,"tags":[],"version":"1.5.X","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{},"sidebar":"developers","previous":{"title":"Testing Smart Contracts","permalink":"/1.5.X/developers/writing-onchain-code/testing-contracts"},"next":{"title":"Calling Contracts","permalink":"/1.5.X/developers/writing-onchain-code/calling-contracts"}}');var r=t(74848),i=t(28453);const o={},c="Upgrading and Maintaining Smart Contracts",s={},d=[{value:"The Contract Package",id:"the-contract-package",level:2},{value:"Videos and Tutorials",id:"videos-and-tutorials",level:2},{value:"Maintaining a Contract",id:"maintaining-a-contract",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",iframe:"iframe",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"upgrading-and-maintaining-smart-contracts",children:"Upgrading and Maintaining Smart Contracts"})}),"\n",(0,r.jsx)(n.p,{children:"import useBaseUrl from '@docusaurus/useBaseUrl';"}),"\n",(0,r.jsx)(n.p,{children:"Our smart contract packaging tools enable you to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Upgrade your contracts and specify how the state of the contract is managed"}),"\n",(0,r.jsx)(n.li,{children:"Specify whether a contract is upgradable or immutable"}),"\n",(0,r.jsx)(n.li,{children:"Version your contracts and deprecate old versions"}),"\n",(0,r.jsx)(n.li,{children:"Set permissions around who can perform contract upgrades"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"the-contract-package",children:"The Contract Package"}),"\n",(0,r.jsx)(n.p,{children:"When you upgrade a contract, you add a new contract version in a contract package. The versioning process is additive rather than an in-place replacement of an existing contract. The original version of the contract is still there, and you can enable certain versions for specific clients. You can also disable a contract version if needed. If you find that you need to use a disabled contract version, you may also re-enable it."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(63913).A+"",width:"1170",height:"472"})}),"\n",(0,r.jsx)(n.p,{children:"The contract package is like a container for different contract versions, with functionality that can differ slightly or significantly among versions. The contract package is created when you install the contract on the blockchain."}),"\n",(0,r.jsx)(n.h2,{id:"videos-and-tutorials",children:"Videos and Tutorials"}),"\n",(0,r.jsxs)(n.p,{children:["To learn more about versioning contracts, consult the following video, which builds upon the previous topics and videos in the ",(0,r.jsx)(n.a,{href:"/writing-contracts",children:"Writing On-Chain Code"})," documentation."]}),"\n",(0,r.jsxs)(n.p,{align:"center",children:["\n",(0,r.jsx)(n.iframe,{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=10",frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Or, for a different perspective, consult the ",(0,r.jsx)(n.a,{href:"/1.5.X/resources/tutorials/beginner/upgrade-contract",children:"Smart Contract Upgrade Tutorial"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"maintaining-a-contract",children:"Maintaining a Contract"}),"\n",(0,r.jsx)(n.p,{children:"The contract maintenance process is generally covered through the contract upgrade process."}),"\n",(0,r.jsx)(n.p,{children:"Only major version changes in the Casper node software would require specific contract maintenance since a node version has a one-to-one mapping with the contract version. Otherwise, minor contract version changes can be addressed through the contract upgrade process. At the moment, we are not anticipating major contract changes in the Casper Mainnet. Therefore, the contract upgrade process can cater to any minor contract maintenance."}),"\n",(0,r.jsx)(n.p,{children:"On instances like new node version releases, type upgrades, and bug fixes, we advise you to adhere to the same contract upgrade process."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},63913:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/package-representation-5e72ef8539f89dbe682c86c52d9536c8.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var a=t(96540);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);