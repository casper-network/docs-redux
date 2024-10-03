"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[39238],{34198:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=n(74848),r=n(28453);const t={title:"Rewards Design"},s="Network Participation Rewards",o={id:"concepts/design/rewards",title:"Rewards Design",description:"Validators receive rewards for participating in consensus and thus securing the network. Delegators also receive rewards indirectly by staking with a validator. This page serves as an introduction to how the rewards are calculated and distributed. For more details, refer to the corresponding CEP.",source:"@site/docs/concepts/design/rewards.md",sourceDirName:"concepts/design",slug:"/concepts/design/rewards",permalink:"/docs-redux/concepts/design/rewards",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Rewards Design"},sidebar:"concepts",previous:{title:"Highway Consensus",permalink:"/docs-redux/concepts/design/highway"},next:{title:"Reading and Writing Data",permalink:"/docs-redux/concepts/design/reading-and-writing-to-the-blockchain"}},c={},l=[{value:"Calculating Rewards",id:"calculating-rewards",level:2},{value:"Chainspec settings for calculating rewards",id:"chainspec-settings-for-calculating-rewards",level:3},{value:"Rewards distribution summary",id:"rewards-distribution-summary",level:3}];function d(e){const a={a:"a",b:"b",code:"code",details:"details",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"network-participation-rewards",children:"Network Participation Rewards"})}),"\n",(0,i.jsx)(a.p,{children:"Validators receive rewards for participating in consensus and thus securing the network. Delegators also receive rewards indirectly by staking with a validator. This page serves as an introduction to how the rewards are calculated and distributed. For more details, refer to the corresponding CEP. "}),"\n",(0,i.jsx)(a.p,{children:"Like other Proof-of-Stake chains, a Casper network rewards validators for participating in building a linear chain of blocks, each containing ordered state changes and ensuring that the entire ecosystem of validators, builders, and users eventually achieve common knowledge of the chain's history. External, non-validator participants in the ecosystem can thus have a high degree of confidence on the canonical history of the blockchain's state, thus making the blockchain economically useful."}),"\n",(0,i.jsxs)(a.p,{children:["The network uses a new reward scheme that does not depend on the details of the consensus protocol and is compatible with both ",(0,i.jsx)(a.a,{href:"/docs-redux/concepts/design/zug",children:"Zug"})," and ",(0,i.jsx)(a.a,{href:"/docs-redux/concepts/design/highway",children:"Highway"}),". The current reward scheme has the following properties:"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Rewards are proportional to a validator's weight on average."}),"\n",(0,i.jsx)(a.li,{children:"The reward scheme incentivizes cooperation."}),"\n",(0,i.jsx)(a.li,{children:"Rewards are distributed at the end of an era for all blocks in that era and several eligible blocks from the previous era."}),"\n",(0,i.jsx)(a.li,{children:"Reward calculations depend only on the linear structure of the blockchain and published finality signatures, rather than any internal details of the consensus protocol."}),"\n",(0,i.jsx)(a.li,{children:"Reward calculations assume a known constant token supply inflation with nominal platform operation."}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"Previously, with Highway, the reward scheme incentivized block production and participation in their finalization. Unfortunately, this scheme was highly coupled with the consensus protocol and unsuitable for adaptation with the Zug consensus. The current scheme calculates rewards after blocks have been finalized, as described below."}),"\n",(0,i.jsx)(a.h2,{id:"calculating-rewards",children:"Calculating Rewards"}),"\n",(0,i.jsx)(a.p,{children:'The execution engine calculates rewards for block production and finality signature generation and distribution in each switch block. Finality signatures are produced after a block has been finalized by consensus. Thus, rewards are independent of the consensus algorithm used. Block proposers collect those finality signatures and include them in future blocks. The rewards scheme allows blocks to cite finality signatures for several past blocks so that validators can agree on which finality signatures have been produced and should be rewarded. This mechanism to "look back" is necessary because signatures cannot be distributed instantly.'}),"\n",(0,i.jsx)(a.p,{children:"Rewards are divided into these categories:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Block rewards"}),": These rewards are received for each proposed block that is finalized. They incentivize timely participation in building the chain."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Finality signature rewards"}),": These rewards are received for collecting finality signatures for each block and generating a finality signature to sign a block. They incentivize the creation, propagation and publication of finality signatures, which is critical in establishing common knowledge of the canonical chain."]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"In each round, a total reward pool is shared among all participating validators proportionally to their weight, as long as all validators fully participate in the processes that are rewarded by this mechanism. These processes are block creation, signature creation, signature propagation and signature publication as part of block proposals."}),"\n",(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.code,{children:"round_seigniorage_rate"})," setting in the chainspec determines the total reward pool for a block. This value, along with the current total supply and minimum round length, is used to compute the full allocation of rewards for a particular block. The rate itself is set to result in a target annual inflation, provided validators fully participate in the rewardable processes described above."]}),"\n",(0,i.jsxs)(a.p,{children:['Each switch block triggers a reward calculation. To account for potential network lag delaying the timely arrival of signatures for finalized blocks, the calculation "looks back" into previous eras. In particular, this enables rewards for switch blocks, which was impossible with the prior Highway-specific calculation. The number of prior blocks to look up is specified using the ',(0,i.jsx)(a.code,{children:"signature_rewards_max_delay"})," setting in the chainspec."]}),"\n",(0,i.jsxs)(a.p,{children:["Blocks carry information on their proposer and the finality signatures collected for several past blocks, the depth being determined by the ",(0,i.jsx)(a.code,{children:"signature_rewards_max_delay"})," parameter. Global state contains data on token supply and validator weights as part of the Mint and Auction states. Based on these inputs, the rewards are calculated according to a formula. Rewards are designed to be proportional to weight on average, as long as blocks are created and the finality signatures are propagated and published in a timely manner. "]}),"\n",(0,i.jsx)(a.p,{children:"Validators are motivated to produce, propagate and publish (i.e., include in the block body) finality signatures as quickly as possible. If they do not include a finality signature in a block, the next validator can include it in their block and get the collection fee."}),"\n",(0,i.jsx)(a.h3,{id:"chainspec-settings-for-calculating-rewards",children:"Chainspec settings for calculating rewards"}),"\n",(0,i.jsx)(a.p,{children:"Each Casper network chainspec contains 4 settings related to calculating rewards:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"finality_signature_proportion"}),": The proportion of baseline rewards going to reward finality signatures, rather than block proposal rewards."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"finders_fee"}),": The proportion of the rewards allocated to finality signatures that are due for signature publication in a block proposal."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"signature_rewards_max_delay"}),": The number of prior blocks to include for the reward calculation."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"round_seigniorage_rate"}),": Setting that calculates the fraction of the total supply that will constitute the reward pool for every round."]}),"\n"]}),"\n",(0,i.jsxs)(a.details,{children:["\n",(0,i.jsx)(a.summary,{children:(0,i.jsx)(a.b,{children:"Expand to see sample values"})}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-json",children:"# The split in finality signature rewards between block producer and participating signers.\nfinders_fee = [1, 5]\n# The proportion of baseline rewards going to reward finality signatures specifically.\nfinality_signature_proportion = [1, 2]\n# Lookback interval indicating which past block we are looking at to reward.\nsignature_rewards_max_delay = 3\n...\n# Round seigniorage rate represented as a fraction of the total supply.\n#\n# Annual issuance: 8%\n# Minimum block time: 2^14 milliseconds\n# Ticks per year: 31536000000\n#\n# (1+0.08)^((2^14)/31536000000)-1 is expressed as a fractional number below\n# Python:\n# from fractions import Fraction\n# Fraction((1 + 0.08)**((2**14)/31536000000) - 1).limit_denominator(1000000000)\nround_seigniorage_rate = [7, 175070816]\n"})}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"rewards-distribution-summary",children:"Rewards distribution summary"}),"\n",(0,i.jsx)(a.p,{children:"The following steps summarize the rewards distribution mechanism."}),"\n",(0,i.jsxs)(a.p,{children:["Each round has a reward pool calculated from the ",(0,i.jsx)(a.code,{children:"round_seigniorage_rate"})," chainspec parameter and the current total supply for the relevant era."]}),"\n",(0,i.jsxs)(a.p,{children:["In each round, the reward pool is split into two parts for block proposals and finality signature rewards, based on the ",(0,i.jsx)(a.code,{children:"finality_signature_proportion"})," chainspec parameter."]}),"\n",(0,i.jsxs)(a.p,{children:["The amount allocated for finality signatures is split further into two parts: creating and publishing finality signatures. The split is configurable in the chainspec using the ",(0,i.jsx)(a.code,{children:"finders_fee"})," chainspec parameter."]}),"\n",(0,i.jsx)(a.p,{children:"For each finality signature:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"The creator gets a portion of what was allocated for creating signatures, in proportion to relative consensus weight."}),"\n",(0,i.jsxs)(a.li,{children:["The block proposer gets a portion corresponding to the ",(0,i.jsx)(a.code,{children:"finders_fee"})," chainspec parameter, scaled by the total collected signature creator weight divided by the total weight in the relevant era."]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Rewards Pot",src:n(27570).A+"",width:"747",height:"743"})}),"\n",(0,i.jsxs)(a.p,{children:["The rewards calculation takes place at the end of an era. In addition to rewarding everything in that era, the algorithm also looks back into blocks from the previous era, depending on the ",(0,i.jsx)(a.code,{children:"signature_rewards_max_delay"})," parameter, to compensate for the delay in creating and distributing finality signatures."]})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},27570:(e,a,n)=>{n.d(a,{A:()=>i});const i=n.p+"assets/images/rewards-pot-abc6a18cf2901d137d80907cdedd6d8f.png"},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>o});var i=n(96540);const r={},t=i.createContext(r);function s(e){const a=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:a},e.children)}}}]);