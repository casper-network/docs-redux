"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[558],{99247:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=s(74848),o=s(28453);const i={title:"Deploy Lifecycle",slug:"/deploy-and-deploy-lifecycle"},d="Deploys and the Deploy Lifecycle",l={id:"concepts/deploy-and-deploy-lifecycle",title:"Deploy Lifecycle",description:"Deploys",source:"@site/versioned_docs/version-1.5.X/concepts/deploy-and-deploy-lifecycle.md",sourceDirName:"concepts",slug:"/deploy-and-deploy-lifecycle",permalink:"/docs-redux/deploy-and-deploy-lifecycle",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724759228e3,frontMatter:{title:"Deploy Lifecycle",slug:"/deploy-and-deploy-lifecycle"},sidebar:"concepts",previous:{title:"Hash Types",permalink:"/docs-redux/concepts/hash-types"},next:{title:"Global State",permalink:"/docs-redux/concepts/global-state"}},c={},a=[{value:"Deploys",id:"execution-semantics-deploys",level:2},{value:"The Deploy Lifecycle",id:"execution-semantics-phases",level:2},{value:"Deploy Received",id:"deploy-received",level:3},{value:"Deploy Gossiped",id:"deploy-gossiped",level:3},{value:"Block Proposed",id:"block-proposed",level:3},{value:"Block Gossiped",id:"block-gossiped",level:3},{value:"Consensus Reached",id:"consensus-reached",level:3},{value:"Deploy Executed",id:"deploy-executed",level:3},{value:"Summary",id:"summary",level:2}];function r(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"deploys-and-the-deploy-lifecycle",children:"Deploys and the Deploy Lifecycle"})}),"\n",(0,t.jsx)(n.h2,{id:"execution-semantics-deploys",children:"Deploys"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"/docs-redux/concepts/serialization-standard#serialization-standard-deploy",children:"Deploy"})," is a data structure containing Wasm and the requester's signature(s). Additionally, the deploy header contains additional metadata about the deploy itself. A deploy\u2019s structure is as follows:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Structure of a Deploy",src:s(17347).A+"",width:"900",height:"586"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Body: Containing payment code and session code (more details on these below)"}),"\n",(0,t.jsxs)(n.li,{children:["Header: containing\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"/docs-redux/concepts/serialization-standard#publickey",children:"Public Key"})," of the account in whose context the deploy will run"]}),"\n",(0,t.jsx)(n.li,{children:"The timestamp of the deploy\u2019s creation"}),"\n",(0,t.jsx)(n.li,{children:"A time-to-live, after which the deploy expires and cannot be included in a block"}),"\n",(0,t.jsxs)(n.li,{children:["the ",(0,t.jsx)(n.code,{children:"blake2b256"})," hash of the body"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Deploy hash: the ",(0,t.jsx)(n.code,{children:"blake2b"})," hash of the Header"]}),"\n",(0,t.jsxs)(n.li,{children:["Approvals: the set of signatures which have signed the deploy hash; these are used in the ",(0,t.jsx)(n.a,{href:"/docs-redux/concepts/design/casper-design#accounts-associated-keys-weights",children:"account permissions model"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"execution-semantics-phases",children:"The Deploy Lifecycle"}),"\n",(0,t.jsx)(n.p,{children:"A deploy goes through the following phases on Casper:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Deploy Received"}),"\n",(0,t.jsx)(n.li,{children:"Deploy Gossiped"}),"\n",(0,t.jsx)(n.li,{children:"Block Proposed"}),"\n",(0,t.jsx)(n.li,{children:"Block Gossiped"}),"\n",(0,t.jsx)(n.li,{children:"Consensus Reached"}),"\n",(0,t.jsx)(n.li,{children:"Deploy Executed"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"deploy-received",children:"Deploy Received"}),"\n",(0,t.jsxs)(n.p,{children:["A client sending the deploy will send it to one or more nodes via their JSON RPC servers. The node will ensure that a given deploy matches configuration settings outlined in the network's chainspec. Deploy configuration for the Casper Mainnet can be found ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/dev/resources/production/chainspec.toml#L79",children:"here"}),". Once accepted, the system returns the deploy hash to the client to indicate it has been enqueued for execution. The deploy could expire while waiting to be gossiped; whenever this happens, a ",(0,t.jsx)(n.code,{children:"DeployExpired"})," event is emitted by the event stream servers of all nodes which have the expired deploy."]}),"\n",(0,t.jsx)(n.h3,{id:"deploy-gossiped",children:"Deploy Gossiped"}),"\n",(0,t.jsxs)(n.p,{children:["After a node accepts a new deploy, it will gossip to all other nodes. A validator node will put the deploy into the block proposer buffer. The validator leader will pick the deploy from the block proposer buffer to create a new proposed block for the chain. This mechanism is efficient and ensures all nodes in the network eventually hold the given deploy. Each node that accepts a gossiped deploy also emits a ",(0,t.jsx)(n.code,{children:"DeployAccepted"})," event on its event stream server. The deploy may expire while waiting for a node to add it to the block. Whenever this happens, the node emits a ",(0,t.jsx)(n.code,{children:"DeployExpired"})," event."]}),"\n",(0,t.jsx)(n.h3,{id:"block-proposed",children:"Block Proposed"}),"\n",(0,t.jsx)(n.p,{children:"The validator leader for this round will propose a block that includes as many deploys from the block proposer buffer as can fit in a block."}),"\n",(0,t.jsx)(n.h3,{id:"block-gossiped",children:"Block Gossiped"}),"\n",(0,t.jsx)(n.p,{children:"The proposed block propagates to all other nodes."}),"\n",(0,t.jsx)(n.h3,{id:"consensus-reached",children:"Consensus Reached"}),"\n",(0,t.jsxs)(n.p,{children:["Once the other validators reach consensus that the proposed block is valid, all deploys in the block are executed, and this block becomes the final block added to the chain. Whenever reaching consensus, the event stream server emits a ",(0,t.jsx)(n.code,{children:"BlockAdded"}),". ",(0,t.jsx)(n.code,{children:"FinalitySignature"})," events emit shortly after that. Finality signatures for the new block arrive from the validators."]}),"\n",(0,t.jsx)(n.h3,{id:"deploy-executed",children:"Deploy Executed"}),"\n",(0,t.jsxs)(n.p,{children:["A deploy executes in distinct phases to accommodate flexibly paying for computation. The phases of a deploy are ",(0,t.jsx)(n.em,{children:"payment"}),", ",(0,t.jsx)(n.em,{children:"session"}),", and ",(0,t.jsx)(n.em,{children:"finalization"}),". Payment code executes during the payment phase. If it is successful, the session code executes during the session phase. And, independently of session code execution, the finalization phase does some bookkeeping around the payment. Once the deploy is executed, a ",(0,t.jsx)(n.code,{children:"DeployProcessed"})," event is emitted by the event stream server."]}),"\n",(0,t.jsx)(n.p,{children:"In the event of execution failure, the sender will be charged the minimum penalty payment - 2.5 CSPR on the Casper Mainnet. This prevents malicious spamming of faulty deploys."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Payment code"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Payment code"})," determines the payment amount for the computation requested and how much the sender is willing to pay. Payment code may include arbitrary logic, providing flexibility in paying for a deploy. For example, the simplest payment code could use the account's ",(0,t.jsx)(n.a,{href:"/docs-redux/concepts/design/casper-design#tokens-purses-and-accounts",children:"main purse"}),". In contrast, an enterprise application may require a multi-signature scheme that accesses a corporate purse. To ensure the payment code will pay for its own computation, only accounts with a balance in their main purse greater than or equal to ",(0,t.jsx)(n.code,{children:"MAX_PAYMENT_COST"})," may execute deploys. Based on the current conversion rate between gas and motes, we restrict the gas limit of the payment code execution so that the process spends no more than ",(0,t.jsx)(n.code,{children:"MAX_PAYMENT_COST"})," motes (a constant of the system.)\nIf the payment is absent or not enough, then payment execution is not successful. In this case, the effects of the payment code on global state are reverted, and the system covers the cost of the computation with motes taken from the offending account's main purse."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Session code"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Session code"})," provides the main logic for the deploy. It only executes if the payment code is successful. The gas limit for this computation is determined based on the amount of payment given (after subtracting the cost of the payment code itself)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Specifying payment code and session code"})}),"\n",(0,t.jsx)(n.p,{children:"The user-defined logic of a deploy can be specified in a number of ways:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a Wasm module in binary format representing valid session code, including logic to be executed in the context of an account or to store Wasm in the form of a contract to be executed later. (Note that the named keys from the context of the account the deploy is running in.)"}),"\n",(0,t.jsxs)(n.li,{children:["a 32-byte identifier representing the ",(0,t.jsx)(n.a,{href:"/docs-redux/concepts/serialization-standard#serialization-standard-hash-key",children:"hash"})," where a contract is already stored in the global state"]}),"\n",(0,t.jsx)(n.li,{children:"a name corresponding to a named key in the account, where a contract is stored under the key"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Payment and session code can be independently specified, so different methods of specifying them may be used (e.g. payment could be specified by a hash key, while the session is explicitly provided as a Wasm module)."}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"The following diagram summarizes the deploy lifecycle."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image showing the deploy lifecycle",src:s(34060).A+"",width:"7092",height:"4764"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},34060:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/deploy-lifecycle-14d60df99e73f40e4016635aad3c1c05.png"},17347:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/deploy-structure-658d8000fd6a573bafc1e7b8535b3c07.png"},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var t=s(96540);const o={},i=t.createContext(o);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);