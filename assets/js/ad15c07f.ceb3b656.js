"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[19044],{84798:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(74848),i=t(28453);const a={title:"Overview",slug:"/economics"},o="Overview of Casper Economics",r={id:"concepts/economics/index",title:"Overview",description:"Casper's economic activity can be conceptualized as taking place on four distinct layers: consensus, runtime, ecosystem, and the macroeconomy. Each layer, consensus and up, provides a foundation for the activity taking place on the next layer. A trust-less platform requires proper incentives for participants operating each layer to ensure they work together to unlock the platform's value.",source:"@site/docs/concepts/economics/index.md",sourceDirName:"concepts/economics",slug:"/economics",permalink:"/economics",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Overview",slug:"/economics"},sidebar:"concepts",previous:{title:"Reading and Writing Data",permalink:"/concepts/design/reading-and-writing-to-the-blockchain"},next:{title:"Consensus",permalink:"/concepts/economics/consensus"}},c={},l=[{value:"Consensus",id:"consensus",level:2},{value:"Agents (consensus layer)",id:"agents-consensus-layer",level:3},{value:"Incentives (consensus layer)",id:"incentives-consensus-layer",level:3},{value:"Runtime",id:"runtime",level:2},{value:"Agents (runtime layer)",id:"agents-runtime-layer",level:3},{value:"Incentives (runtime layer)",id:"incentives-runtime-layer",level:3},{value:"Ecosystem",id:"ecosystem",level:2},{value:"Macroeconomy",id:"macroeconomy",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"overview-of-casper-economics",children:"Overview of Casper Economics"})}),"\n",(0,s.jsx)(n.p,{children:"Casper's economic activity can be conceptualized as taking place on four distinct layers: consensus, runtime, ecosystem, and the macroeconomy. Each layer, consensus and up, provides a foundation for the activity taking place on the next layer. A trust-less platform requires proper incentives for participants operating each layer to ensure they work together to unlock the platform's value."}),"\n",(0,s.jsx)(n.p,{children:"This online documentation section is intended only to familiarize the user with the Casper core economics features rather than describe their precise implementation and user interface. Some of the features may not be currently active."}),"\n",(0,s.jsx)(n.h2,{id:"consensus",children:"Consensus"}),"\n",(0,s.jsxs)(n.p,{children:["The consensus layer of the Casper Mainnet runs the ",(0,s.jsx)(n.a,{href:"/concepts/design/zug",children:"Zug"})," consensus protocol. The distinguishing characteristics of this protocol are its safety and liveness guarantees, speed, simplicity, and distributed nature. Blocks in the canonical history cannot be reverted (safety), and new blocks continue to be added to this history indefinitely (liveness). The safety and liveness guarantees require that honest validators comprise at least 67% of total validator weight. This required behavior must be incentivized for the platform to remain secure and live. Read the paper for more details: ",(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/2205.06314",children:"From Weakly-terminating Binary Agreement and Reliable Broadcast to Atomic Broadcast"}),"."]}),"\n",(0,s.jsx)(n.p,{children:'When discussing consensus, we default to considering it "one era at a time" unless expressly stated otherwise. Recall that each era is a separate instance of the protocol.'}),"\n",(0,s.jsx)(n.h3,{id:"agents-consensus-layer",children:"Agents (consensus layer)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Validators"}),' are responsible for maintaining platform security by building an ever-growing chain of finalized blocks and backing this chain\'s security with their stakes. Their importance (often referred to as "weight") to protocol operation and security is, in fact, equal to their stake, including both their own and delegated tokens.']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Delegators"}),' are users who participate in the platform\'s security by delegating their tokens to validators, which adds to their weight and collecting a part of the rewards proportional to their delegations, net of a cut ("delegation rate") that is collected by the validator.']}),"\n",(0,s.jsx)(n.h3,{id:"incentives-consensus-layer",children:"Incentives (consensus layer)"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"auction"}),' determines the composition of the validator set for each protocol era. It is a "first-price" (winning bids become stakes) auction with a fixed number of spots chosen to balance security with performance (generally, the platform will run slower with more validators). Because rewards are proportional to the stake, we expect this competitive mechanism to provide a powerful impetus for staking as many tokens as possible.']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Rewards"})," (per era) are issued to validators who perform at their nominal pace in such a way as to make timely progress on block finalization. These rewards are shared with delegators proportionally to their contributions, net of a cut taken by the validator."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Evictions"})," deactivate validators who fail to participate in an era, deactivating their bid and suspending their participation until they signal readiness to resume participation by invoking a particular entry point in the auction contract."]}),"\n",(0,s.jsx)(n.h2,{id:"runtime",children:"Runtime"}),"\n",(0,s.jsxs)(n.p,{children:["The runtime layer encompasses the installation and execution of smart contracts and other activities that alter the network's global state. This suggests potential markets for finite platform resources, such as markets for computing time and storage. Such markets could ensure that resources are allocated to their highest-value uses. Currently, however, we limit ourselves to ",(0,s.jsx)(n.a,{href:"/concepts/design/casper-design#execution-semantics-gas",children:"metering computing time"}),", measured as gas. Gas can be conceptualized as the relative time use of different Wasm operations and host-side functions. The use of storage is also presently assigned a gas cost."]}),"\n",(0,s.jsx)(n.p,{children:"The Mainnet transaction selection mechanism is based on FIFO."}),"\n",(0,s.jsx)(n.p,{children:"We expect to continue to work on runtime resource markets."}),"\n",(0,s.jsx)(n.h3,{id:"agents-runtime-layer",children:"Agents (runtime layer)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Validators"})," again play a vital role in this layer since protocol operation includes the construction and validation of new blocks, which consist of transactions that change the global state, which the validators also maintain."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Users"})," execute session and contract code using the platform's computational resources"]}),"\n",(0,s.jsx)(n.h3,{id:"incentives-runtime-layer",children:"Incentives (runtime layer)"}),"\n",(0,s.jsxs)(n.p,{children:["The Casper node software can be configured to support various fee, refund, and cost-handling strategies. The Condor release on Mainnet has enabled a ",(0,s.jsx)(n.a,{href:"/concepts/economics/fee-elimination",children:"fee elimination"})," model by default, setting the ",(0,s.jsx)(n.code,{children:"no_fee"}),",",(0,s.jsx)(n.code,{children:"no_refund"}),", and ",(0,s.jsx)(n.code,{children:"fixed"})," pricing configurations in the network's chainspec."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"no_fee"}),' mode means the token is put on hold instead of being taken from the payer. The hold interval is configured in the chainspec. The hold release mechanism is based on the "accrued" or "amortized" settings in the chainspec. Accrued holds are released after a certain amount of time has passed. Amortized holds are released using a linear schedule over a specified period.']}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"no_refund"})," mode means no refund is handled when fees are eliminated."]}),"\n",(0,s.jsxs)(n.p,{children:["Fixed pricing means the gas costs are determined using a cost table, and transactions are put in the appropriate lanes for execution. You can find more details about lanes ",(0,s.jsx)(n.a,{href:"/runtime#lanes-lanes",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"When fees are eliminated, the block proposer receives validator credits instead of transaction fees. These credits contribute to the validator's total weight, determining their chances of winning a slot in the next era. Validators get rewards for proposing a block and creating and publishing finality signatures. In essence, gas/balance holds ensure that the network still compensates validators for their computations."}),"\n",(0,s.jsxs)(n.p,{children:["The fee elimination model is different than the refund model introduced on Mainnet with release 1.5.6 and has replaced the refund behavior. Since all these behaviors are configurable, ",(0,s.jsx)(n.a,{href:"/operators/setup-network/create-private",children:"private networks"})," can set their fee, refund, and pricing strategies."]}),"\n",(0,s.jsx)(n.h2,{id:"ecosystem",children:"Ecosystem"}),"\n",(0,s.jsx)(n.p,{children:"The ecosystem layer encompasses dApp design and operation. Casper Labs maintains multiple partnerships with prospective dApp developers, and we anticipate devoting significant resources to research the economics of prospective dApps."}),"\n",(0,s.jsx)(n.h2,{id:"macroeconomy",children:"Macroeconomy"}),"\n",(0,s.jsx)(n.p,{children:'Casper\'s macroeconomics refers to the activity in the cryptocurrency markets, where CSPR can be treated as one crypto-asset among many rather than a computational platform. Our token economics differ from those of "digital gold" tokens like Bitcoin, which is designed to be scarce. Our tokens are minted on a fixed starting basis, accounted for by tokens distributed to genesis validators, employees, and community members, and held for future distributions. The total supply of tokens grows at a fixed annual percentage rate on this basis.'}),"\n",(0,s.jsx)(n.p,{children:"The inflationary nature of our macroeconomics has two significant advantages over enforced scarcity. Inflation incentivizes token holders to stake or delegate their tokens, which we explicitly support with our delegation feature. Additionally, because Casper is a general-purpose computing platform, it is essential to supply tokens to support actual economic activity and discourage hoarding tokens in expectation of speculative gain."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);