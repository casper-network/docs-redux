"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[92218],{55215:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"concepts/economics/gas-concepts","title":"Gas Cost","description":"What is gas?","source":"@site/versioned_docs/version-1.5.X/concepts/economics/gas-concepts.md","sourceDirName":"concepts/economics","slug":"/concepts/economics/gas-concepts","permalink":"/1.5.X/concepts/economics/gas-concepts","draft":false,"unlisted":false,"tags":[],"version":"1.5.X","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{"title":"Gas Cost"},"sidebar":"concepts","previous":{"title":"Runtime","permalink":"/1.5.X/runtime"},"next":{"title":"Staking Concepts","permalink":"/1.5.X/concepts/economics/concepts"}}');var n=s(74848),a=s(28453);const r={title:"Gas Cost"},i="Gas and Resources",c={},h=[{value:"What is gas?",id:"what-is-gas",level:2},{value:"How is gas cost determined?",id:"how-is-gas-cost-determined",level:2},{value:"Why do we need gas cost?",id:"why-do-we-need-gas-cost",level:2},{value:"Why do I see an \u2018Out of gas error\u2019?",id:"why-do-i-see-an-out-of-gas-error",level:2},{value:"How do I determine the gas cost for a transaction?",id:"how-do-i-determine-the-gas-cost-for-a-transaction",level:2},{value:"Why do I see a gas limit error?",id:"why-do-i-see-a-gas-limit-error",level:2}];function d(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"gas-and-resources",children:"Gas and Resources"})}),"\n",(0,n.jsx)(t.h2,{id:"what-is-gas",children:"What is gas?"}),"\n",(0,n.jsx)(t.p,{children:"Gas is a conceptual measure of resources utilized when executing transactions on the blockchain. Gas cost is the amount of gas consumed during the processing cycles that execute a transaction on the network. It is directly correlated with the amount of computer processing a validator needs to provide in order to execute a transaction."}),"\n",(0,n.jsx)(t.p,{children:"Gas fees are consumed on the network irrespective of whether your transaction was successful or not. Even when a transaction fails, you have to pay the transaction fee because your deploy consumed resources and space on the block as the validator attempted to execute it on your behalf."}),"\n",(0,n.jsx)(t.h2,{id:"how-is-gas-cost-determined",children:"How is gas cost determined?"}),"\n",(0,n.jsx)(t.p,{children:"The amount of gas required for a transaction is determined by how much code is executed on the blockchain. Currently, gas is priced at a fixed price of 1 mote (1 CSPR is 10^9 motes) per 1 unit of gas. The gas charged for a transaction on the blockchain is paid to the network's validators."}),"\n",(0,n.jsx)(t.h2,{id:"why-do-we-need-gas-cost",children:"Why do we need gas cost?"}),"\n",(0,n.jsx)(t.p,{children:"Casper is a decentralized network of individual validators supplying their computational resources to keep the network live. As such, computations must be rate-limited and priced for the following reasons:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Rate-limiting is used to ensure a secure and live network:\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"It prevents a specific kind of denial-of-service (DoS) attack. In computer networks, rate-limiting is used to control the rate of requests sent or received by a network to prevent DoS attacks. Gas behaves in a similar fashion, because each block permits only a fixed amount of transactions (gas) to be included in the era."}),"\n",(0,n.jsx)(t.li,{children:"It explicitly quantifies the system load. The gas cost helps us evaluate the use of computational resources and measure the amount of computational work that validators need to perform for each transaction. With this knowledge, we can specify minimum system requirements for validators."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Pricing leads to more meaningful transactions:\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Issuers of transactions and smart contract writers will be more aware of the limited network resources because there is a cost associated with each transaction. Pricing prevents users from spamming arbitrary amounts of empty transactions because there is a price to pay for each deploy."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"why-do-i-see-an-out-of-gas-error",children:"Why do I see an \u2018Out of gas error\u2019?"}),"\n",(0,n.jsx)(t.p,{children:"You might encounter an \u2018Out of gas error\u2019 when the gas payment you supplied for the transaction was insufficient to cover the actual cost of computation for the transaction. The amount of gas required for a transaction is determined by how much code is executed on the blockchain and also the storage utilized."}),"\n",(0,n.jsxs)(t.p,{children:["Here is an ",(0,n.jsx)(t.a,{href:"https://cspr.live/deploy/afeb43036c41e667af8bc34782c48a66cf4da3818defe9f761291fa515cc38b9",children:"example"})," of a transaction resulting in an \u2018Out of gas error\u2019 on the Mainnet."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Figure 1"}),": In the Deploys tab of an account on ",(0,n.jsx)(t.a,{href:"https://cspr.live/",children:"cspr.live"}),", a red exclamation mark is shown. By moving the cursor over it, the tooltip displays an 'Out of gas error'."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(56161).A+"",width:"2048",height:"1118"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Figure 2"}),": Click the specific deploy to see more details such as the deploy hash, cost, and the status as an 'Out of gas error'. This indicates that the transaction did not have sufficient payment to cover the gas required for it to complete successfully."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(55772).A+"",width:"1698",height:"824"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Figure 3"}),": Click the ",(0,n.jsx)(t.strong,{children:"Show raw data"})," button, to see more details about the deploy. Towards the end of the raw data, you can see the error message."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(2055).A+"",width:"1472",height:"424"})}),"\n",(0,n.jsx)(t.h2,{id:"how-do-i-determine-the-gas-cost-for-a-transaction",children:"How do I determine the gas cost for a transaction?"}),"\n",(0,n.jsxs)(t.p,{children:["Currently, we are hard at work to create tools to help you estimate gas costs. Meanwhile, we recommend using the NCTL tool on your local machine or the ",(0,n.jsx)(t.a,{href:"https://testnet.cspr.live/",children:"Testnet"})," to ",(0,n.jsx)(t.a,{href:"/1.5.X/developers/cli/sending-deploys",children:"deploy your contracts"})," in a test environment. You can check a deploy status and roughly see how much it would actually cost when deployed. You can estimate the costs in this way and then add a small buffer if the network state has changed. Note that when estimating gas cost locally or on the Testnet, the blockchain specification needs to match the specification of the Mainnet, where you will need to pay for the transaction with actual Casper (CSPR) tokens."]}),"\n",(0,n.jsx)(t.h2,{id:"why-do-i-see-a-gas-limit-error",children:"Why do I see a gas limit error?"}),"\n",(0,n.jsxs)(t.p,{children:["You may sometimes see an error such as ",(0,n.jsx)(t.em,{children:"\u2018payment: 2.5, cost: 2.5, Error::GasLimit\u2019"}),", This message seems to say that the transaction cost is 2.5 CSPR and you paid 2.5 CSPR, yet the transaction resulted in an error. Let\u2019s explore this error message a little further."]}),"\n",(0,n.jsx)(t.p,{children:"When a smart contract hits its gas limit (the payment amount), execution stops. If your limit is 2.5 CSPR, execution stops and that is the computation cost even if the smart contract did not run to completion. So, the error message tries to communicate to you that execution stopped at 2.5 CSPR. The computation resulted in an error because there were not enough funds to run to completion. It would have cost more than 2.5 CSPR to complete execution, but since you only supplied a payment of 2.5 CSPR worth of computation, the network stopped execution there and charged you that much, even though it was a failed transaction. The execution engine does not actually know how much it would have cost if allowed to run to completion, because it did not allow the contract to finish since the contract would have run over its gas limit."})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},55772:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/error-account-75086cfae6160dfca8cce66fc2b80f44.png"},56161:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/error-deploys-82cd87f7fc9013f4a7da13e4dd6123e3.png"},2055:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/error-raw-5b014abd0817fd1c15b225a083a68e3a.png"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>i});var o=s(96540);const n={},a=o.createContext(n);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);