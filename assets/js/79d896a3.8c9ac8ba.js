"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[8426],{525:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=o(4848),n=o(8453),a=o(6025);const r={title:"Gas Cost"},i="Gas and Resources",c={id:"concepts/economics/gas-concepts",title:"Gas Cost",description:"What is gas?",source:"@site/docs/concepts/economics/gas-concepts.md",sourceDirName:"concepts/economics",slug:"/concepts/economics/gas-concepts",permalink:"/concepts/economics/gas-concepts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Gas Cost"},sidebar:"concepts",previous:{title:"Runtime",permalink:"/runtime"},next:{title:"Staking Concepts",permalink:"/concepts/economics/concepts"}},h={},d=[{value:"What is gas?",id:"what-is-gas",level:2},{value:"How is gas cost determined?",id:"how-is-gas-cost-determined",level:2},{value:"Why do we need gas cost?",id:"why-do-we-need-gas-cost",level:2},{value:"Why do I see an \u2018Out of gas error\u2019?",id:"why-do-i-see-an-out-of-gas-error",level:2},{value:"How do I determine the gas cost for a transaction?",id:"how-do-i-determine-the-gas-cost-for-a-transaction",level:2},{value:"Why do I see a gas limit error?",id:"why-do-i-see-a-gas-limit-error",level:2}];function l(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"gas-and-resources",children:"Gas and Resources"})}),"\n","\n",(0,s.jsx)(t.h2,{id:"what-is-gas",children:"What is gas?"}),"\n",(0,s.jsx)(t.p,{children:"Gas is a conceptual measure of resources utilized when executing transactions on the blockchain. Gas cost is the amount of gas consumed during the processing cycles that execute a transaction on the network. It is directly correlated with the amount of computer processing a validator needs to provide in order to execute a transaction."}),"\n",(0,s.jsx)(t.p,{children:"Gas fees are consumed on the network irrespective of whether your transaction was successful or not. Even when a transaction fails, you have to pay the transaction fee because your deploy consumed resources and space on the block as the validator attempted to execute it on your behalf."}),"\n",(0,s.jsx)(t.h2,{id:"how-is-gas-cost-determined",children:"How is gas cost determined?"}),"\n",(0,s.jsx)(t.p,{children:"The amount of gas required for a transaction is determined by how much code is executed on the blockchain. Currently, gas is priced at a fixed price of 1 mote (1 CSPR is 10^9 motes) per 1 unit of gas. The gas charged for a transaction on the blockchain is paid to the network's validators."}),"\n",(0,s.jsx)(t.h2,{id:"why-do-we-need-gas-cost",children:"Why do we need gas cost?"}),"\n",(0,s.jsx)(t.p,{children:"Casper is a decentralized network of individual validators supplying their computational resources to keep the network live. As such, computations must be rate-limited and priced for the following reasons:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Rate-limiting is used to ensure a secure and live network:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"It prevents a specific kind of denial-of-service (DoS) attack. In computer networks, rate-limiting is used to control the rate of requests sent or received by a network to prevent DoS attacks. Gas behaves in a similar fashion, because each block permits only a fixed amount of transactions (gas) to be included in the era."}),"\n",(0,s.jsx)(t.li,{children:"It explicitly quantifies the system load. The gas cost helps us evaluate the use of computational resources and measure the amount of computational work that validators need to perform for each transaction. With this knowledge, we can specify minimum system requirements for validators."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Pricing leads to more meaningful transactions:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Issuers of transactions and smart contract writers will be more aware of the limited network resources because there is a cost associated with each transaction. Pricing prevents users from spamming arbitrary amounts of empty transactions because there is a price to pay for each deploy."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"why-do-i-see-an-out-of-gas-error",children:"Why do I see an \u2018Out of gas error\u2019?"}),"\n",(0,s.jsx)(t.p,{children:"You might encounter an \u2018Out of gas error\u2019 when the gas payment you supplied for the transaction was insufficient to cover the actual cost of computation for the transaction. The amount of gas required for a transaction is determined by how much code is executed on the blockchain and also the storage utilized."}),"\n",(0,s.jsxs)(t.p,{children:["Here is an ",(0,s.jsx)(t.a,{href:"https://cspr.live/deploy/afeb43036c41e667af8bc34782c48a66cf4da3818defe9f761291fa515cc38b9",children:"example"})," of a transaction resulting in an \u2018Out of gas error\u2019 on the Mainnet."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Figure 1"}),": In the Deploys tab of an account on ",(0,s.jsx)(t.a,{href:"https://cspr.live/",children:"cspr.live"}),", a red exclamation mark is shown. By moving the cursor over it, the tooltip displays an 'Out of gas error'."]}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("/image/gas-concepts/error-deploys.png"),width:"550",alt:"Out of gas error"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Figure 2"}),": Click the specific deploy to see more details such as the deploy hash, cost, and the status as an 'Out of gas error'. This indicates that the transaction did not have sufficient payment to cover the gas required for it to complete successfully."]}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("/image/gas-concepts/error-account.png"),width:"550",alt:"Gas error in account"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Figure 3"}),": Click the ",(0,s.jsx)(t.strong,{children:"Show raw data"})," button, to see more details about the deploy. Towards the end of the raw data, you can see the error message."]}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("/image/gas-concepts/error-raw.png"),width:"550",alt:"Gas error in raw data"}),"\n",(0,s.jsx)(t.h2,{id:"how-do-i-determine-the-gas-cost-for-a-transaction",children:"How do I determine the gas cost for a transaction?"}),"\n",(0,s.jsxs)(t.p,{children:["Currently, we are hard at work to create tools to help you estimate gas costs. Meanwhile, we recommend using the NCTL tool on your local machine or the ",(0,s.jsx)(t.a,{href:"https://testnet.cspr.live/",children:"Testnet"})," to ",(0,s.jsx)(t.a,{href:"/developers/cli/sending-deploys",children:"deploy your contracts"})," in a test environment. You can check a deploy status and roughly see how much it would actually cost when deployed. You can estimate the costs in this way and then add a small buffer if the network state has changed. Note that when estimating gas cost locally or on the Testnet, the blockchain specification needs to match the specification of the Mainnet, where you will need to pay for the transaction with actual Casper (CSPR) tokens."]}),"\n",(0,s.jsx)(t.h2,{id:"why-do-i-see-a-gas-limit-error",children:"Why do I see a gas limit error?"}),"\n",(0,s.jsxs)(t.p,{children:["You may sometimes see an error such as ",(0,s.jsx)(t.em,{children:"\u2018payment: 2.5, cost: 2.5, Error::GasLimit\u2019"}),", This message seems to say that the transaction cost is 2.5 CSPR and you paid 2.5 CSPR, yet the transaction resulted in an error. Let\u2019s explore this error message a little further."]}),"\n",(0,s.jsx)(t.p,{children:"When a smart contract hits its gas limit (the payment amount), execution stops. If your limit is 2.5 CSPR, execution stops and that is the computation cost even if the smart contract did not run to completion. So, the error message tries to communicate to you that execution stopped at 2.5 CSPR. The computation resulted in an error because there were not enough funds to run to completion. It would have cost more than 2.5 CSPR to complete execution, but since you only supplied a payment of 2.5 CSPR worth of computation, the network stopped execution there and charged you that much, even though it was a failed transaction. The execution engine does not actually know how much it would have cost if allowed to run to completion, because it did not allow the contract to finish since the contract would have run over its gas limit."})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>i});var s=o(6540);const n={},a=s.createContext(n);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);