"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[8816],{96847:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"concepts/economics/dynamic-gas-pricing","title":"Dynamic Gas Pricing","description":"The Condor release introduced a configurable capability to calculate dynamic gas prices based on block vacancy (or consumption). The network chainspec configures the vacancy, as shown below, which refers to this feature. This capability prevents malicious actors from filling the blocks with useless transactions and ensures network integrity.","source":"@site/versioned_docs/version-2.0.0/concepts/economics/dynamic-gas-pricing.md","sourceDirName":"concepts/economics","slug":"/concepts/economics/dynamic-gas-pricing","permalink":"/concepts/economics/dynamic-gas-pricing","draft":false,"unlisted":false,"tags":[],"version":"2.0.0","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{"title":"Dynamic Gas Pricing"},"sidebar":"concepts","previous":{"title":"Gas Cost","permalink":"/concepts/economics/gas-concepts"},"next":{"title":"Fee Elimination","permalink":"/concepts/economics/fee-elimination"}}');var t=i(74848),a=i(28453);const o={title:"Dynamic Gas Pricing"},c="Dynamic Gas Pricing on Mainnet",r={},l=[{value:"Mainnet Condor Configurations",id:"mainnet-condor-configurations",level:3},{value:"Fixed Transaction Costs vs. Dynamic Gas Prices",id:"fixed-transaction-costs-vs-dynamic-gas-prices",level:2},{value:"Gas Tolerance",id:"gas-tolerance",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"dynamic-gas-pricing-on-mainnet",children:"Dynamic Gas Pricing on Mainnet"})}),"\n",(0,t.jsxs)(n.p,{children:["The Condor release introduced a configurable capability to calculate dynamic gas prices based on block vacancy (or consumption). The network chainspec configures the ",(0,t.jsx)(n.code,{children:"vacancy"}),", as shown below, which refers to this feature. This capability prevents malicious actors from filling the blocks with useless transactions and ensures network integrity."]}),"\n",(0,t.jsx)(n.p,{children:"When dynamic gas pricing is enabled, a calculation runs at the end of each era to average block usage within that era. This calculation determines the gas price the network will use for the next era. If overall consumption rises above a threshold, the gas price increases by 1. If consumption falls below a threshold, the gas price decreases by 1. The gas price remains the same if overall consumption remains within those thresholds. The gas price will not go up or down by more than 1 in a given era and will not go above the maximum or below the minimum threshold."}),"\n",(0,t.jsx)(n.p,{children:"The gas price is recorded in the block header and is easily discoverable for current and historical purposes. The current gas price is a multiplier that determines the actual gas cost. For instance, an operation with a base cost of 1 CSPR would cost 1 CSPR if the current gas price is 1 but would cost 2 CSPR if the current gas price is 2. As blocks become congested, the amount of CSPR required to obtain a slot for executing transactions will increase by a multiple. The following configuration settings control this behavior:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"upper_threshold"})," - The threshold to decrease gas price"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"lower_threshold"})," - The threshold to increase gas price"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"max_gas_price"})," - The maximum gas price"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"min_gas_price"})," - The minimum gas price"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"mainnet-condor-configurations",children:"Mainnet Condor Configurations"}),"\n",(0,t.jsx)(n.p,{children:"These are the block vacancy (dynamic gas pricing) settings for the Condor release on Mainnet. Before Condor, the gas price was 1, meaning 1 unit of gas cost 1 mote. With Condor, the multiple is configured to adjust between 1 and 3."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:"[vacancy]\n# The cost of a transaction is based on a multiplier. This allows for economic disincentives for misuse of the network.\n#\n# The network starts with a current_gas_price of min_gas_price.\n#\n# Each block has multiple limits (bytes, transactions, transfers, gas, etc.)\n# The utilization for a block is determined by the highest percentage utilization of each these limits.\n#\n# Ex: transfers limit is 650 and transactions limit is 20 (assume other limits are not a factor here)\n#     19 transactons -> 19/20 or 95%\n#     600 transfers -> 600/650 or 92.3%\n#     resulting block utilization is 95\n#\n# The utilization for an era is the average of all block utilizations. At the switch block, the dynamic gas_price is\n# adjusted with the following:\n#\n# If utilization was below the lower_threshold, current_gas_price is decremented by one if higher than min_gas_price.\n# If utilization falls between the thresholds, current_gas_price is not changed.\n# If utilization was above the upper_threshold, current_gas_price is incremented by one if lower than max_gas_price.\n#\n# The cost charged for the transaction is simply the gas_used * current_gas_price.\nupper_threshold = 90\nlower_threshold = 50\nmax_gas_price = 3\nmin_gas_price = 1\n"})}),"\n",(0,t.jsx)(n.h2,{id:"fixed-transaction-costs-vs-dynamic-gas-prices",children:"Fixed Transaction Costs vs. Dynamic Gas Prices"}),"\n",(0,t.jsxs)(n.p,{children:["The current gas price and the slot\u2019s maximum gas cost determine how much CSPR gets locked up for a transaction. Thus, the transaction price is predictable and fixed but has a dynamic component in that it\u2019s pegged to the gas price. The system is designed this way to protect the network, adjusting the gas price as needed. Read more about lanes and gas cost ",(0,t.jsx)(n.a,{href:"/runtime#lanes-and-gas-costs-lanes",children:"here"}),". Also, the ",(0,t.jsx)(n.code,{children:"pricing_handling = { type = 'fixed' }"})," setting is described ",(0,t.jsx)(n.a,{href:"/concepts/economics/fee-elimination",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"gas-tolerance",children:"Gas Tolerance"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"The cost of interacting with the blockchain increases during high network usage. Plan accordingly for any transactions and use the gas_tolerance field described below."})}),"\n",(0,t.jsxs)(n.p,{children:["Transactions have a ",(0,t.jsx)(n.code,{children:"gas_tolerance"})," field, allowing the sender to specify the maximum gas price they are willing to pay (the minimum is 1). For instance, if a transaction is sent with ",(0,t.jsx)(n.code,{children:"gas_tolerance = 2"})," and the network is currently at a gas price of 3 or higher, that transaction will not be included in a proposed block. If the calculated gas price decreases to 2 before the transaction has expired, the transaction will be eligible for inclusion in a proposed block."]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var s=i(96540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);