"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[81425],{82845:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"type":"mdx","permalink":"/pages/condor/fee-elimination","source":"@site/src/pages/condor/fee-elimination.md","title":"Fee Elimination in Condor","description":"A discussion of the Fee Elimination feature in Casper 2.0","frontMatter":{"title":"Fee Elimination in Condor","description":"A discussion of the Fee Elimination feature in Casper 2.0","slug":"condor-fee-elimination","date":"2024-07-16T22:00","authors":["dylanireland","melpadden"],"tags":["condor","features","tokenomics"],"hide_table_of_contents":false},"unlisted":false}');var s=t(74848),i=t(28453);const a={title:"Fee Elimination in Condor",description:"A discussion of the Fee Elimination feature in Casper 2.0",slug:"condor-fee-elimination",date:"2024-07-16T22:00",authors:["dylanireland","melpadden"],tags:["condor","features","tokenomics"],hide_table_of_contents:!1},r="Fee Elimination on Casper 2.0",l={},c=[{value:"Concepts",id:"concepts",level:2},{value:"Payment, Gas Price, Fees",id:"payment-gas-price-fees",level:2},{value:"Fee Elimination",id:"fee-elimination",level:2},{value:"Holds",id:"holds",level:3},{value:"Hold Release",id:"hold-release",level:3},{value:"Accrued",id:"accrued",level:4},{value:"Amortized",id:"amortized",level:4},{value:"More about Gas holds",id:"more-about-gas-holds",level:3},{value:"Preventing Exploitation",id:"preventing-exploitation",level:3},{value:"Opportunity Cost",id:"opportunity-cost",level:4},{value:"Incentivizing Validators",id:"incentivizing-validators",level:3},{value:"Looking Forward",id:"looking-forward",level:2},{value:"Further Reading/Terms",id:"further-readingterms",level:3},{value:"Proposer",id:"proposer",level:4},{value:"Fees",id:"fees",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"fee-elimination-on-casper-20",children:"Fee Elimination on Casper 2.0"})}),"\n",(0,s.jsxs)(n.p,{children:["The Casper 2.0 (aka Condor) network upgrade introduces new options to the way a Casper Network can be configured to handle gas consumption. Scheduled along with the release of Condor into Mainnet is a change in the configuration of the Casper Network to use a model known as ",(0,s.jsx)(n.strong,{children:"Fee Elimination"})," for gas payments. The purpose of this article is to introduce this model, and describe how Fee Elimination will affect the behavior of the Casper Network once Condor is released."]}),"\n",(0,s.jsx)(n.h2,{id:"concepts",children:"Concepts"}),"\n",(0,s.jsxs)(n.p,{children:['Public distributed blockchain networks that support smart contracts generally employ a concept known as "',(0,s.jsx)(n.a,{href:"https://docs.casper.network/concepts/glossary/G/#gas",children:"gas"}),'", which can be thought of as "the ability to do work on-chain". The problem addressed by this mechanism is that ',(0,s.jsx)(n.strong,{children:"any finite resource on a publicly accessible computer network must be rate-limited"}),", because a resource made available without limit is a denial of service attack vector."]}),"\n",(0,s.jsx)(n.p,{children:"Gas is acquired in finite quantities and used to meter and limit resource consumption by individual transactors. A transactor's available gas is consumed by their on-chain usage of computation, data storage, and possibly other chain-specific resources. The public Casper Network and its testnet have used such a gas model since their geneses."}),"\n",(0,s.jsx)(n.h2,{id:"payment-gas-price-fees",children:"Payment, Gas Price, Fees"}),"\n",(0,s.jsxs)(n.p,{children:["On Casper 1.x, every transaction is subject to gas consumption. The transactor must specify an amount of token that is converted to gas and used to pay for execution. All gas consumed in each block is allotted to the ",(0,s.jsx)(n.a,{href:"#proposer",children:"proposer"})," of that block in the form of transaction ",(0,s.jsx)(n.a,{href:"#fees",children:"fees"}),". The model also includes tables to allow calculation of gas costs, and support for some portion of unconsumed gas to be refunded to transactors. We refer to these concepts using the following terms:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gas Limit"}),": An amount of gas, specified by the transactor, at which to cancel a transaction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gas Price"}),": The network gas price; the ratio between the cost of 1 unit of gas and 1 mote."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gas Cost"}),": The amount of gas needed to pay for execution of a transaction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment"}),": The amount of token specified by the transactor to pay for the execution of a transaction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Refund"}),": All or a portion of the remaining token after gas is purchased for execution."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The Casper node software supports a number of configurable options which govern how gas may be calculated for a given transaction. A discussion of these is outside the scope of this article. This article is concerned with how these gas costs are dealt with, once calculated. Gas cost options will be the subject of another article."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"fee-elimination",children:"Fee Elimination"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Fee Elimination is the strategy of placing temporary holds on transactor balances corresponding to their incurred gas costs, instead of taking those costs from their on-chain balances"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Under 1.x, transactors must pay for gas directly from their purse balances. With Fee Elimination on Casper 2.0, a hold is placed on the calculated ",(0,s.jsx)(n.strong,{children:"Gas Cost"})," for a configurable period of time known as the ",(0,s.jsx)(n.strong,{children:"Hold Period"}),". Fees are therefore not forfeited by transactors, and funds are not spent to execute transactions."]}),"\n",(0,s.jsx)(n.h3,{id:"holds",children:"Holds"}),"\n",(0,s.jsx)(n.p,{children:"A hold may be thought of as a temporary freeze on some portion of the funds in an account. The funds never leave the purse upon which the hold is placed, but the owner of those funds may not spend them as long as the hold is in effect, and the funds held are not counted towards the available balance of that purse."}),"\n",(0,s.jsx)(n.h3,{id:"hold-release",children:"Hold Release"}),"\n",(0,s.jsxs)(n.p,{children:["The Casper Node 2.0 software currently supports two hold release models: ",(0,s.jsx)(n.strong,{children:"Accrued"})," and ",(0,s.jsx)(n.strong,{children:"Amortized"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The Condor node architecture allows for any time-based function to be developed and used to calculate hold releases. However, for simplicity, this article will deal with the two currently available options."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"accrued",children:"Accrued"}),"\n",(0,s.jsx)(n.p,{children:"100% of the hold is held until the hold expires. At any given point in the duration of the hold, the effective amount of the hold is 100%. At expiry, all of the funds are again made available to the transactor."}),"\n",(0,s.jsx)(n.h4,{id:"amortized",children:"Amortized"}),"\n",(0,s.jsxs)(n.p,{children:["The effective amount of the hold is reduced linearly over the course of the hold duration. At any point in the duration of the hold, the effective hold ",(0,s.jsx)(n.em,{children:"amount"})," is proportional to the percentage of the hold ",(0,s.jsx)(n.em,{children:"duration"})," that remains before expiry."]}),"\n",(0,s.jsx)(n.p,{children:"For example, if:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A hold of 180 CSPR is placed on an purse which holds 1000 CSPR"}),"\n",(0,s.jsx)(n.li,{children:"The configured hold period is 90 days"}),"\n",(0,s.jsx)(n.li,{children:"The hold release model is configured to use amortization"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Then, 9 days after the hold was placed, the current effective amount of the hold may be calculated by"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"$\\frac{\\text{Hold Duration} - \\text{Time Elapsed}}{\\text{Hold Duration}} = \\frac{90 - 9}{90} = 0.9$"}),"\n",(0,s.jsx)(n.li,{children:"Multiplied by the hold amount: $180 \\times 0.9 = 162$"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The effective balance in that purse, at that point in time, is $1000 - 162 = 838 \\ \\text{CSPR}$"}),"\n",(0,s.jsx)(n.p,{children:"Over the course of the hold's duration, this calculation gives us:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Hold Amount"}),(0,s.jsx)(n.th,{children:"Hold Period"}),(0,s.jsx)(n.th,{children:"Time Elapsed"}),(0,s.jsx)(n.th,{children:"Effective Hold"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"180"}),(0,s.jsx)(n.td,{children:"90"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"178"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"180"}),(0,s.jsx)(n.td,{children:"90"}),(0,s.jsx)(n.td,{children:"9"}),(0,s.jsx)(n.td,{children:"162"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"180"}),(0,s.jsx)(n.td,{children:"90"}),(0,s.jsx)(n.td,{children:"45"}),(0,s.jsx)(n.td,{children:"90"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"180"}),(0,s.jsx)(n.td,{children:"90"}),(0,s.jsx)(n.td,{children:"89"}),(0,s.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"more-about-gas-holds",children:"More about Gas holds"}),"\n",(0,s.jsxs)(n.p,{children:["The duration of gas holds is defined ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/feat-2.0/resources/production/chainspec.toml#L166",children:"here"})," in the ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-node",children:"casper-node"})," chainspec:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:"# If fee_handling is set to 'no_fee', the system places a balance hold on the payer\n# equal to the value the fee would have been. Such balance holds expire after a time\n# interval has elapsed. This setting controls how long that interval is. The available\n# balance of a purse equals its total balance minus the held amount(s) of non-expired\n# holds (see gas_hold_balance_handling setting for details of how that is calculated).\n#\n# For instance, if gas_hold_interval is 24 hours and 100 gas is used from a purse,\n# a hold for 100 is placed on that purse and is considered when calculating total balance\n# for 24 hours starting from the block_time when the hold was placed.\ngas_hold_interval = '24 hours'\n"})}),"\n",(0,s.jsx)(n.h3,{id:"preventing-exploitation",children:"Preventing Exploitation"}),"\n",(0,s.jsx)(n.p,{children:"The ultimate goal of any gas mechanism is to prevent exploitation of a network's resources. Aside from incentivizing validators, there is no fundamental reason to charge users for making transactions if their honesty can be guaranteed. By designing a system that disincentivizes wasteful transactions without charging a fee, resistance to exploitation can be maintained while allowing users to transact freely."}),"\n",(0,s.jsx)(n.p,{children:"However, any gas mechanism that doesn't charge users could be vulnerable to denial-of-service attacks. Provided a large enough bankroll, a user could deploy enough transactions to slow the network for the amount of time needed for his or her previous gas payments to unlock, and use these unlocked funds to deploy more transactions, and thus repeat the process ad infinitum. In this way, one could theoretically deploy infinite transactions, cycling through their locked and unlocked balances."}),"\n",(0,s.jsx)(n.p,{children:"Attacking the network in this way is a challenge of economic feasibility, much like many other aspects of blockchains. To prevent an attack like this from taking place, it must be made prohibitively expensive to mount such an attack, with little to no incentive to the attacker. Casper's approach involves using a long locking period, combined with 16 second blocktimes. The Casper 2.0 mainnet is slated to roll out with a 30 day locking period, but if increased, the cost to attack would scale linearly."}),"\n",(0,s.jsxs)(n.p,{children:["Considering a token locking period of 30 days and the ",(0,s.jsx)(n.strong,{children:"Accrued"})," unlocking schedule, purchasing just 1% of the total block space of each block would cost:"]}),"\n",(0,s.jsx)(n.p,{children:"$\\frac{T}{B} \\cdot \\frac{G}{100} = 5,346,000 , \\text{CSPR}$"}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"T"})," = 30 day locking period"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"B"})," = 16 second blocktime"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"G"})," = 3300 CSPR block gas limit"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If this proves to be too cheap, the locking period can be extended or the block gas limit increased."}),"\n",(0,s.jsx)(n.h4,{id:"opportunity-cost",children:"Opportunity Cost"}),"\n",(0,s.jsx)(n.p,{children:"In addition to the necessity to maintain large amounts of CSPR token in order to facilitate a DoS attack as laid out above, any prospective attacker would also incur the opportunity cost of being unable to use their CSPR for the duration of the hold period. Simply put, while their CSPR is locked up attacking the network, it cannot be used to earn rewards by staking. Given the amount of CSPR necessarily involved, and assuming any non-trivial potential annualized return on staking CSPR tokens, the ratio of opportunity cost of mounting such an attack versus the incentive to do so swiftly becomes prohibitively high."}),"\n",(0,s.jsx)(n.h3,{id:"incentivizing-validators",children:"Incentivizing Validators"}),"\n",(0,s.jsx)(n.p,{children:"The Casper Network, like any truly decentralized blockchain, allows nodes to act in their greatest economic interest when it comes to validating transactions. The purpose of this is to incentivize validators as much as possible, encouraging more to come online. Part of the income a validator earns comes from fees paid by a deployer, which entices validators to pick up their transactions. When no fee is paid by the deployer at all, however, another incentive must be provided to the validators."}),"\n",(0,s.jsxs)(n.p,{children:["Casper's solution is quite simple, but requires understanding how validators are selected and compensated. On Casper Networks, 100 validators are weightily selected to validate all the blocks within the current \"",(0,s.jsx)(n.a,{href:"https://docs.casper.network/concepts/glossary/E/#era",children:"era"}),'", which advances every 2 hours. At the end of each era, validator rewards are calculated, put into a pot, and distributed to validators based on the amount of token staked by each. Additionally, a "validator credit" is added to validators who propose populated blocks, proportional to the size of the blocks they propose. This validator credit is then applied to the payout scheme, awarding more of the pot to the hardest-working nodes. Additionally, the validator credit is considered as additional staking weight for the next era when the next ',(0,s.jsx)(n.a,{href:"https://docs.casper.network/concepts/glossary/B/#booking-block",children:"booking block"})," appears."]}),"\n",(0,s.jsx)(n.h2,{id:"looking-forward",children:"Looking Forward"}),"\n",(0,s.jsx)(n.p,{children:"By introducing Fee Elimination to the Casper Network, we hope to make transacting with the blockchain more accessible and less financially cumbersome. With this new model, interacting with smart contracts can become effectively free for users, inviting larger audiences to participate in new and exciting protocols."}),"\n",(0,s.jsx)(n.p,{children:"As the model is rolled out to Casper's mainnet and testnet, economists and engineers will study its effects on Casper's transaction economy. The data observed will be used to devise proposals and improvements, need they be implemented."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"further-readingterms",children:"Further Reading/Terms"}),"\n",(0,s.jsx)(n.h4,{id:"proposer",children:"Proposer"}),"\n",(0,s.jsxs)(n.p,{children:["A validator proposing a block to the network for execution",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://docs.casper.network/concepts/economics/consensus/",children:"Consensus"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://docs.casper.network/concepts/glossary/V/#validator",children:"Validator"})]}),"\n",(0,s.jsx)(n.h4,{id:"fees",children:"Fees"}),"\n",(0,s.jsxs)(n.p,{children:["A portion of a transaction's gas costs given over to the proposer of the block containing that transaction.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://docs.casper.network/concepts/economics/gas-concepts/",children:"Gas Concepts"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://docs.casper.network/runtime/",children:"Runtime Economics"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://docs.casper.network/concepts/glossary/R/#reward",children:"Validator Rewards"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(96540);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);