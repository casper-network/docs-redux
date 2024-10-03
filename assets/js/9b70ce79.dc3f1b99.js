"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[20367],{23943:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=n(74848),s=n(28453);const a={title:"Consensus"},r="Consensus Economics",o={id:"concepts/economics/consensus",title:"Consensus",description:"Casper consensus is a continuous, trustless process where a fixed set of validators engage in scheduled communication to advance the linear chain of finalized blocks, representing the history of changes in the global state of the blockchain. The fixed set of validators may change at each era boundary. The economics of this layer revolve around validator selection and incentivization of participation according to the schedule.",source:"@site/versioned_docs/version-2.0.0/concepts/economics/consensus.md",sourceDirName:"concepts/economics",slug:"/concepts/economics/consensus",permalink:"/2.0.0/concepts/economics/consensus",draft:!1,unlisted:!1,tags:[],version:"2.0.0",frontMatter:{title:"Consensus"},sidebar:"concepts",previous:{title:"Overview",permalink:"/2.0.0/economics"},next:{title:"Runtime",permalink:"/2.0.0/runtime"}},c={},d=[{value:"Validator Selection",id:"selection",level:2},{value:"Bids",id:"bids",level:3},{value:"Delegation",id:"delegation",level:3},{value:"Incentives",id:"incentives",level:2},{value:"Validator Participation",id:"participation",level:3},{value:"Rewards Distribution",id:"distribution",level:3},{value:"Validator Inactivity",id:"inactivity",level:3},{value:"Founding Validators",id:"founding-validators",level:2}];function l(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"consensus-economics",children:"Consensus Economics"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/2.0.0/concepts/design/consensus",children:"Casper consensus"})," is a continuous, trustless process where a fixed set of validators engage in scheduled communication to advance the linear chain of finalized blocks, representing the history of changes in the global state of the blockchain. The fixed set of validators may change at each era boundary. The economics of this layer revolve around validator selection and incentivization of participation according to the schedule."]}),"\n",(0,t.jsx)(i.h2,{id:"selection",children:"Validator Selection"}),"\n",(0,t.jsxs)(i.p,{children:["After genesis, the system selects a set of validators using a stake auction process. The auction takes place in the last block of an era, also called a switch block. An auction contract governs the validator selection process, and a ",(0,t.jsx)(i.em,{children:"chainspec"})," configuration file specifies a few key parameters:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(i.code,{children:"auction_delay"})," specifies the amount of time that needs to pass before the system enables a new set of validators. For example, the ",(0,t.jsx)(i.em,{children:"auction_delay"})," is 1 for Mainnet. Therefore, after a delay of 1 era, the winning validators become the validating set for the new era."]}),"\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(i.code,{children:"validator_slots"})," parameter specifies how many validators can win an auction. The auction selects a fixed number of validators based on their highest bids."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"bids",children:"Bids"}),"\n",(0,t.jsxs)(i.p,{children:["Each bid is a collection of tokens from a prospective or current validator and its delegators, considered in the auction as a single total. Bids and delegations can increase freely, but withdrawals are subject to an unbonding period governed by the ",(0,t.jsx)(i.code,{children:"unbonding_delay"})," chainspec parameter. Tokens that are in the unbonding period are not part of the sum total considered in the auction. Consequently, the exact amount of the bid, which translates into protocol weight for winning validators, can vary within an era. The bids are visible in the switch block that determines the winners."]}),"\n",(0,t.jsx)(i.p,{children:"Each bid contains a delegation rate and activity status. The delegation rate can change at any time. Both of these properties are described further in this document."}),"\n",(0,t.jsx)(i.h3,{id:"delegation",children:"Delegation"}),"\n",(0,t.jsx)(i.p,{children:"Delegation allows third parties to participate in consensus by adding weight to their preferred validators. Rewards received by validators are distributed in proportion to tokens bid and delegated. The current or prospective validator responsible for the bid receives a portion of the delegator rewards set by the delegation rate."}),"\n",(0,t.jsxs)(i.p,{children:["Currently, there are delegation limits in the chainspec. Visit the ",(0,t.jsx)(i.a,{href:"/2.0.0/users/delegating",children:"Delegating Tokens"})," page for more details."]}),"\n",(0,t.jsx)(i.h2,{id:"incentives",children:"Incentives"}),"\n",(0,t.jsx)(i.p,{children:"The correct operation of the consensus protocol requires the platform's economics to discourage equivocation (signing conflicting consensus messages) for safety and incentivize participation for liveness. Participation consists of on-time block proposals and timely responses to block proposals."}),"\n",(0,t.jsx)(i.p,{children:"Safety may be incentivized through slashing for equivocation. This feature is currently disabled but may be reactivated in the future."}),"\n",(0,t.jsxs)(i.p,{children:["The network incentivizes participation by issuing ",(0,t.jsx)(i.a,{href:"/2.0.0/concepts/design/rewards",children:"rewards"})," to validators for proposing blocks and creating and publishing finality signatures. Delegators also receive rewards by ",(0,t.jsx)(i.a,{href:"/2.0.0/concepts/economics/staking",children:"staking"})," with a validator. All rewards are added directly to the corresponding bids and delegations."]}),"\n",(0,t.jsx)(i.h3,{id:"participation",children:"Validator Participation"}),"\n",(0,t.jsx)(i.p,{children:"The issuance of new tokens and their distribution to validators incentivizes participation even when there is a low transaction load."}),"\n",(0,t.jsx)(i.p,{children:"CSPR is issued at a fixed rate and distributed to validators (and, indirectly, delegators) in proportion to their stake. This is analogous to block rewards in Proof-of-Work blockchains, outlining the following:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The growth of CSPR supply is exponential"}),"\n",(0,t.jsx)(i.li,{children:"Issuance takes into account slashed CSPR"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"With slashing disabled, we can compute block rewards starting with the formula below, where we have these parameters:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"i"})," - the era's index as a positive integer [0, 1, 2, ..., n]"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"initial_supply"})," - the number of CSPR at genesis"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"issuance_rate"})," - the annual rate at which new CSPR tokens are minted"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"ticks_per_year"})," - the number of milliseconds in a year equal to 31,536,000,000"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"supply(i) = initial_supply * (1 + issuance_rate)^(tick_at_era_start(i) / ticks_per_year)\n"})}),"\n",(0,t.jsxs)(i.p,{children:["We introduce the ",(0,t.jsx)(i.em,{children:"round issuance rate"})," (corresponding to the chainspec parameter ",(0,t.jsx)(i.code,{children:"round_seigniorage_rate"}),") with this formula:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"round_issuance_rate = (1 + issuance_rate)^(2^minimum_round_exponent / ticks_per_year) - 1\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.em,{children:"round issuance rate"})," is the annual issuance rate adjusted to a single round of length determined by the chainspec parameter ",(0,t.jsx)(i.code,{children:"minimum_round_exponent"}),". For illustration, an exponent of 14 corresponds to a round length of roughly 16 seconds."]}),"\n",(0,t.jsx)(i.p,{children:"Finally, the base round reward is computed as:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"base_round_reward(i) = round_issuance_rate * supply(i)\n"})}),"\n",(0,t.jsx)(i.p,{children:"This value gives us the maximum amount of CSPR that the validators can collectively receive from a proposed block."}),"\n",(0,t.jsx)(i.h3,{id:"distribution",children:"Rewards Distribution"}),"\n",(0,t.jsx)(i.p,{children:"Validators receive rewards for proposing blocks and creating and publishing finality signatures. Each round has a reward pool, mostly allocated toward creating and publishing finality signatures. There is also a small portion of rewards allocated to the block proposals."}),"\n",(0,t.jsx)(i.p,{children:"The concept of validator weight is crucial in understanding the distribution scheme:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Weight:"})," A validator's bonded stake, which affects rewards distribution since rewards are proportional to a validator's weight on average"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Assigned weight of a round:"})," The total weight of validators scheduled to participate in a round"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Participated weight of a round:"})," The total weight of validators that participated or sent messages before the end of the round"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Relative weight"}),": A validator's weight relative to the total validator weight that participated in a round"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The rewards allocated for finality signatures are split between creating and publishing the signatures. These rewards are proportional to the weight of the signing validators for both the signers and the finders. A finder's fee determines how the split happens. To summarize:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"For each finalized block, there is a fraction of rewards due for signature creation and collection"}),"\n",(0,t.jsx)(i.li,{children:"Signature rewards are split between the finder (block proposer) and the signature creators"}),"\n",(0,t.jsxs)(i.li,{children:["The signature creators get a part of the signature reward pot due for the block: ",(0,t.jsx)(i.code,{children:"(1 - finder's fee) * relative weight"})]}),"\n",(0,t.jsxs)(i.li,{children:["The finder gets a small reward as well to incentivize collecting and reporting all the signatures: ",(0,t.jsx)(i.code,{children:"finder's fee * total relative weight of signatures collected"})]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["The rewards calculation takes place at the end of an era. In addition to rewarding everything in that era, the algorithm also looks back into blocks from the previous era to compensate for the delay in creating and distributing finality signatures. Review the ",(0,t.jsx)(i.a,{href:"/2.0.0/concepts/design/rewards",children:"Rewards Design"})," page for more details."]}),"\n",(0,t.jsx)(i.h3,{id:"inactivity",children:"Validator Inactivity"}),"\n",(0,t.jsx)(i.p,{children:"Validators who send no messages during an entire era are marked as inactive and cease participating in the auction until they send a special transaction that reactivates their bid."}),"\n",(0,t.jsx)(i.h2,{id:"founding-validators",children:"Founding Validators"}),"\n",(0,t.jsx)(i.p,{children:"When launching a new Casper network, founding validators are subject to token lock-up, which prevents them from withdrawing any tokens from their bids for 90 days. Then, the network releases their genesis bid tokens in weekly steps, linearly, over an additional 90 days."})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var t=n(96540);const s={},a=t.createContext(s);function r(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);