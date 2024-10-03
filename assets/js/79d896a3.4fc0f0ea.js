"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[48426],{70525:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=s(74848),i=s(28453);const o={title:"Gas Cost"},a="Gas and Resources",c={id:"concepts/economics/gas-concepts",title:"Gas Cost",description:"What is gas?",source:"@site/docs/concepts/economics/gas-concepts.md",sourceDirName:"concepts/economics",slug:"/concepts/economics/gas-concepts",permalink:"/concepts/economics/gas-concepts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Gas Cost"},sidebar:"concepts",previous:{title:"Runtime",permalink:"/runtime"},next:{title:"Dynamic Gas Pricing",permalink:"/concepts/economics/dynamic-gas-pricing"}},r={},l=[{value:"What is gas?",id:"what-is-gas",level:2},{value:"How is gas cost determined?",id:"how-is-gas-cost-determined",level:2},{value:"Why do we need to charge a cost?",id:"why-do-we-need-to-charge-a-cost",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"gas-and-resources",children:"Gas and Resources"})}),"\n",(0,n.jsx)(t.h2,{id:"what-is-gas",children:"What is gas?"}),"\n",(0,n.jsx)(t.p,{children:"Gas is a conceptual measure of resources used while executing transactions on the blockchain. Gas cost is the amount of gas consumed during the processing cycles that execute a transaction on the network. It correlates directly with the amount of computer processing a validator needs to provide to execute a transaction."}),"\n",(0,n.jsxs)(t.p,{children:["Gas fees are consumed on the network irrespective of whether a transaction was successful or not. Even when a transaction fails, the network measures ",(0,n.jsx)(t.a,{href:"/concepts/design/casper-design#measuring-computational-work-execution-semantics-gas",children:"computational work as gas"})," because it consumes resources and space on the block as the validator attempts to execute it. Depending on how the network was configured, the transaction fee may or may not be refunded, or a hold may placed on the paying purse. See ",(0,n.jsx)(t.a,{href:"/concepts/economics/fee-elimination",children:"fee elimination"})," for more details."]}),"\n",(0,n.jsx)(t.h2,{id:"how-is-gas-cost-determined",children:"How is gas cost determined?"}),"\n",(0,n.jsxs)(t.p,{children:["The amount of gas required for a transaction is determined by how much code is executed on the blockchain and the current average of all block utilization. Currently, gas is priced at a fixed price of 1 mote (1 CSPR is 10^9 motes) per 1 unit of gas. Cost is determined by the network's ",(0,n.jsx)(t.code,{children:"current_gas_price"})," multiplier, which is dynamic and based on current network usage. A high rate of block utilization will increase the ",(0,n.jsx)(t.code,{children:"current_gas_price"})," multiplier at the switch block, while low utilization will decrease the multiplier. There is both a minimum and a maximum potential multiplier, and all settings related to ",(0,n.jsx)(t.a,{href:"/concepts/economics/dynamic-gas-pricing",children:"dynamic pricing"})," can be configured in a Casper network's ",(0,n.jsx)(t.a,{href:"/concepts/glossary/C#chainspec",children:"chainspec"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"why-do-we-need-to-charge-a-cost",children:"Why do we need to charge a cost?"}),"\n",(0,n.jsx)(t.p,{children:"Casper is a decentralized network of individual validators supplying their computational resources to keep the network live. As such, computations must be rate-limited and priced for the following reasons:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Rate-limiting is used to ensure a secure and live network:\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"It prevents a specific kind of denial-of-service (DoS) attack. In computer networks, rate-limiting controls the rate of requests sent or received by a network to prevent DoS attacks. Gas behaves similarly, because each block permits only a fixed amount of transactions (gas) to be included in the era."}),"\n",(0,n.jsx)(t.li,{children:"It explicitly quantifies the system load. The cost helps us evaluate the use of computational resources and measure the amount of computational work that validators need to perform for each transaction. With this knowledge, we can specify minimum system requirements for validators."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Pricing leads to more meaningful transactions:\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Issuers of transactions and smart contract writers will be more aware of the limited network resources because there is a cost associated with each transaction. Pricing prevents users from spamming arbitrary amounts of empty transactions because there is a price to pay for each transaction."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var n=s(96540);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);