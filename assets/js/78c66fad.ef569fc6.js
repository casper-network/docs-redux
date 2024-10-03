"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[39902],{4690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(74848),a=n(28453);const r={title:"Inactive and Faulty Nodes"},i="Inactive vs. Faulty Validator Nodes",s={id:"operators/becoming-a-validator/inactive-vs-faulty",title:"Inactive and Faulty Nodes",description:"This page describes the differences between a validator node being considered inactive or faulty.",source:"@site/docs/operators/becoming-a-validator/inactive-vs-faulty.md",sourceDirName:"operators/becoming-a-validator",slug:"/operators/becoming-a-validator/inactive-vs-faulty",permalink:"/operators/becoming-a-validator/inactive-vs-faulty",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Inactive and Faulty Nodes"},sidebar:"operators",previous:{title:"Recovery",permalink:"/operators/becoming-a-validator/recovering"},next:{title:"Setting up Private Networks",permalink:"/operators/setup-network/"}},l={},c=[];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"inactive-vs-faulty-validator-nodes",children:"Inactive vs. Faulty Validator Nodes"})}),"\n",(0,o.jsx)(t.p,{children:"This page describes the differences between a validator node being considered inactive or faulty."}),"\n",(0,o.jsxs)(t.p,{children:["In the last block of each era ",(0,o.jsx)(t.em,{children:"N"}),", the consensus algorithm checks whether there are ",(0,o.jsx)(t.em,{children:"any"})," messages from your validator node in that era that have been received by most of the other validators. Only if there is no such message does your node get marked as ",(0,o.jsx)(t.strong,{children:"inactive"})," in that block."]}),"\n",(0,o.jsxs)(t.p,{children:["Similarly, the consensus algorithm checks whether any two messages from your validator node contradict each other. If that is the case, it gets marked as ",(0,o.jsx)(t.strong,{children:"faulty"})," in that block. Usually, that means:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["If you got marked as ",(0,o.jsx)(t.strong,{children:"inactive"}),", your node probably crashed or was offline for the duration of one whole era, i.e., at least from when the era began until the era's last block was proposed."]}),"\n",(0,o.jsxs)(t.li,{children:["If you got marked as ",(0,o.jsx)(t.strong,{children:"faulty"}),", you were probably running two nodes with the same validator key, or you restarted a node during the era and deleted its unit file."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The auction contract is run when the block gets executed, as always at the end of the era. But if you were faulty or inactive, you are now evicted and don't participate in the auction anymore. You also don't receive any rewards for era ",(0,o.jsx)(t.em,{children:"N"}),". The auction determines the validator set for the era after the next (because ",(0,o.jsx)(t.code,{children:"auction_delay"})," is set to ",(0,o.jsx)(t.code,{children:"1"})," on mainnet), i.e., for era ",(0,o.jsx)(t.em,{children:"N + 2"}),". That means you will still be a validator (with a weight proportional to your stake) in the next era, ",(0,o.jsx)(t.em,{children:"N + 1"}),", but after that, you will not be a validator anymore, and your slot will be given to the next highest bidder."]}),"\n",(0,o.jsxs)(t.p,{children:["And even in the next era, ",(0,o.jsx)(t.em,{children:"N + 1"}),":"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["If you are inactive, you won't be assigned leader slots or be allowed to propose any blocks. Your node will only vote on other proposers' blocks if it returns online and can still receive rewards. But, even if it comes back online in era ",(0,o.jsx)(t.em,{children:"N + 1"}),", it will get evicted for being offline in era ",(0,o.jsx)(t.em,{children:"N"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"If you are faulty, all your messages will be ignored. You won't be able to propose blocks or vote for them and won't receive block rewards."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["In both cases, you remain evicted until you reactivate your bid, as described ",(0,o.jsx)(t.a,{href:"/operators/becoming-a-validator/recovering",children:"here"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var o=n(96540);const a={},r=o.createContext(a);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);