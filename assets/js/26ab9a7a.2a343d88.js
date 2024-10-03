"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[3568],{93511:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=s(74848),o=s(28453);const i={},a="Consensus in a Casper Network",r={id:"concepts/design/consensus",title:"Consensus in a Casper Network",description:"The decentralized nature of a Casper network requires a method for validators to agree on the chain of finalized blocks. Validator nodes must determine the validity of transactions, resolve conflicts, and finalize the blocks in the chain. The network's consensus protocol is a mechanism for the validators to agree on each finalized block.",source:"@site/versioned_docs/version-2.0.0/concepts/design/consensus.md",sourceDirName:"concepts/design",slug:"/concepts/design/consensus",permalink:"/docs-redux/2.0.0/concepts/design/consensus",draft:!1,unlisted:!1,tags:[],version:"2.0.0",frontMatter:{},sidebar:"concepts",previous:{title:"Network Communication",permalink:"/docs-redux/2.0.0/concepts/design/p2p"},next:{title:"Zug Consensus",permalink:"/docs-redux/2.0.0/concepts/design/zug"}},c={},l=[{value:"Safety, Liveness, and Byzantine Fault Tolerance",id:"safety-liveness-and-byzantine-fault-tolerance",level:2},{value:"Casper Consensus Protocols",id:"casper-consensus-protocols",level:2},{value:"Consensus in the Casper Mainnet",id:"consensus-in-the-casper-mainnet",level:2},{value:"Dynamic Round Length",id:"dynamic-round-length",level:3},{value:"Eras",id:"eras",level:3},{value:"Finality",id:"finality",level:3},{value:"Important Links",id:"important-links",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"consensus-in-a-casper-network",children:"Consensus in a Casper Network"})}),"\n",(0,t.jsx)(n.p,{children:"The decentralized nature of a Casper network requires a method for validators to agree on the chain of finalized blocks. Validator nodes must determine the validity of transactions, resolve conflicts, and finalize the blocks in the chain. The network's consensus protocol is a mechanism for the validators to agree on each finalized block."}),"\n",(0,t.jsx)(n.h2,{id:"safety-liveness-and-byzantine-fault-tolerance",children:"Safety, Liveness, and Byzantine Fault Tolerance"}),"\n",(0,t.jsxs)(n.p,{children:["In a Casper network, validator nodes receive different inputs via transactions from connecting clients. Given the consensus mechanism and rules, all honest nodes should output the same value, which is a finalized block in Casper. The ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/transactions-and-transaction-lifecycle",children:"Transaction Lifecycle"})," describes what happens after blocks are proposed and finalized. Each finalized block will contain the set of transactions, which the network will eventually execute. The property described here, where all honest nodes agree on a final value, is called ",(0,t.jsx)(n.strong,{children:"safety"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The consensus protocol ensures that honest validators agree on finalized blocks in a finite time, allowing the network to continue producing blocks indefinitely. This property of the protocol is called ",(0,t.jsx)(n.strong,{children:"liveness"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Honest validators will agree on finalized blocks even if some nodes are faulty. This property makes the consensus protocol tolerant to a ",(0,t.jsx)(n.strong,{children:"Byzantine fault"})," and thus secure against malicious activity."]}),"\n",(0,t.jsx)(n.p,{children:"To summarize, the consensus mechanism will determine how a blockchain meets the following requirements:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Safety"}),": All honest nodes eventually agree on the final value, which in a Casper network is a finalized block. The consensus mechanism is set up so that no two honest validators will report two different blocks at the same height of the blockchain."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Liveness"}),": The network runs indefinitely and adds new blocks to the chain."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Byzantine Fault Tolerance (BFT)"}),": All honest nodes eventually agree on the final value, even if some are faulty."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"casper-consensus-protocols",children:"Casper Consensus Protocols"}),"\n",(0,t.jsxs)(n.p,{children:["Each Casper network can choose and configure its consensus protocol using the network's chainspec. The protocols available are ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/concepts/design/zug",children:"Zug"})," and ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/concepts/design/highway",children:"Highway"}),". ",(0,t.jsx)(n.a,{href:"https://arxiv.org/pdf/2101.02159.pdf",children:"Highway"})," served as the Casper Mainnet's consensus protocol since launch. The Zug consensus protocol was introduced in version 2.0 to simplify and speed up the consensus process without compromising safety. Zug enables faster block times, less overhead, and a larger validator set in Mainnet. Zug is an implementation of the ideas from the paper ",(0,t.jsx)(n.a,{href:"https://arxiv.org/abs/2205.06314",children:"From Weakly-terminating Binary Agreement and Reliable Broadcast to Atomic Broadcast"}),", which describes how Zug meets the safety, liveness, and resiliency requirements."]}),"\n",(0,t.jsx)(n.h2,{id:"consensus-in-the-casper-mainnet",children:"Consensus in the Casper Mainnet"}),"\n",(0,t.jsxs)(n.p,{children:["The Casper Mainnet is a ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/concepts/glossary/P#proof-of-stake",children:"Proof-of-Stake"})," network in which the on-chain auction contract determines validators participating in consensus. The protocol uses a decentralized network of ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/concepts/glossary/N#node",children:"nodes"}),", which participate in the consensus process by staking CSPR tokens. These active nodes are known as ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/concepts/glossary/V#validator",children:"validators"}),". The top 100 bidders are selected through the auction contract every era, to act as validators in the era after the next (current era + 2). Nodes with a greater stake in the network's success have a greater weight in reaching consensus."]}),"\n",(0,t.jsxs)(n.p,{children:["The Mainnet will continue to function as long as the total weight of faulty nodes does not exceed one-third of the total weight of all nodes. Nodes that are not faulty are ",(0,t.jsx)(n.em,{children:"honest"})," nodes. In most cases, the network can assume that more than two-thirds of all nodes will actively collaborate to achieve consensus. Therefore, stronger-than-average finality guarantees occur during periods when all nodes are acting honestly."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The Zug or Highway consensus protocols do not necessitate a Proof-of-Stake method of choosing validators and could theoretically be used alongside a private network with a different model."})}),"\n",(0,t.jsx)(n.h3,{id:"dynamic-round-length",children:"Dynamic Round Length"}),"\n",(0,t.jsx)(n.p,{children:"Within the Zug or Highway protocols, the length of a round is determined dynamically to ensure a suitable time for nodes to send all messages. This ensures that the system maintains liveness by properly communicating all messages and adding blocks to the chain in a timely manner."}),"\n",(0,t.jsx)(n.h3,{id:"eras",children:"Eras"}),"\n",(0,t.jsx)(n.p,{children:"The concept of eras (one era consists of multiple rounds) allows consensus to reduce the overall operational storage requirements of participating nodes while also rotating validators. On Mainnet, a new instance of consensus runs every two hours or approximately 440 blocks, depending on current network metrics. This allows for two benefits:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Data Reduction"}),' - Older "metadata" used in finalizing certain blocks is no longer useful and can be removed without compromising the immutability of the data stored on the blockchain.']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Banning Equivocators"})," - Dishonest nodes caught equivocating (signing conflicting consensus messages) in a previous era cannot participate in new eras."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Rotating Validators"})," - Bonded nodes bid on validator spots each era, with the top highest bidders becoming validators for the era after next (",(0,t.jsx)(n.code,{children:"current era"}),"+ 2)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In any given era, node operators will bid to become validators participating in the consensus mechanism for the era after the next (",(0,t.jsx)(n.code,{children:"current era"})," + 2). Each time slot within the era will also determine a lead validator. The lead validator proposes a new block to be added to the chain, which is communicated to the other nodes (via broadcasting or gossiping, depending on the consensus protocol). Once this process reaches critical mass, with a sufficient interconnected pattern of messages, the selected block is considered finalized and added to the chain."]}),"\n",(0,t.jsxs)(n.p,{children:["The final block of an era is a ",(0,t.jsx)(n.em,{children:"switch block"})," and forms the initial state of the next era. A new consensus instance begins with the new era, using information contained within the ",(0,t.jsx)(n.em,{children:"switch block"})," and a new potential set of validators. More details on the auction process to determine an era's validators can be found within the ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/concepts/economics/consensus",children:"Consensus Economics"})," page."]}),"\n",(0,t.jsx)(n.h3,{id:"finality",children:"Finality"}),"\n",(0,t.jsx)(n.p,{children:"Finality occurs when the network can be sure that a block will not be altered, reversed, or canceled after addition to the chain. This occurs via consensus, and as all transactions happen within a block, it allows for confirmation that a transaction cannot be changed. After finality, it would require more than one third of all validators to double-sign to cause a disparity between nodes. In this event, the network would shut down and require a manual restart."}),"\n",(0,t.jsx)(n.p,{children:"On a Casper network, a transaction finalizes alongside the finalizing of the block in which it is included. Validators that equivocate risk eviction, in which the network removes them from the validator set. Therefore, honest nodes receive rewards for their participation, while equivocating nodes risk loss of revenue for acting maliciously."}),"\n",(0,t.jsx)(n.h2,{id:"important-links",children:"Important Links"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/concepts/design/zug",children:"Zug Consensus"})," - An overview of the Zug consensus used in Mainnet and Testnet"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/concepts/design/highway",children:"Highway Consensus"})," - Brief overview of the Highway consensus available as an alternative to Zug"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(96540);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);