"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[2071],{63785:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var c=r(74848),o=r(28453);const n={},t="G",a={id:"concepts/glossary/G",title:"G",description:"---",source:"@site/versioned_docs/version-1.5.X/concepts/glossary/G.md",sourceDirName:"concepts/glossary",slug:"/concepts/glossary/G",permalink:"/docs-redux/concepts/glossary/G",draft:!1,unlisted:!1,tags:[],version:"1.5.X",frontMatter:{},sidebar:"concepts",previous:{title:"F",permalink:"/docs-redux/concepts/glossary/F"},next:{title:"H",permalink:"/docs-redux/concepts/glossary/H"}},l={},d=[{value:"Gas",id:"gas",level:2},{value:"Genesis",id:"genesis",level:2},{value:"Groups",id:"groups",level:2},{value:"Global state",id:"global-state",level:2}];function i(e){const s={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.header,{children:(0,c.jsx)(s.h1,{id:"g",children:"G"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/A",children:"A"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/B",children:"B"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/C",children:"C"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/D",children:"D"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/E",children:"E"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/F",children:"F"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/G",children:"G"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/H",children:"H"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/I",children:"I"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/J",children:"J"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/K",children:"K"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/L",children:"L"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/M",children:"M"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/N",children:"N"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/O",children:"O"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/P",children:"P"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/Q",children:"Q"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/R",children:"R"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/S",children:"S"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/T",children:"T"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/U",children:"U"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/V",children:"V"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/W",children:"W"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/X",children:"X"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/Y",children:"Y"})," ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/Z",children:"Z"})]}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h2,{id:"gas",children:"Gas"}),"\n",(0,c.jsx)(s.p,{children:"Gas is the virtual currency for calculating the cost of transaction execution. The transaction cost is expressed as a given amount of gas consumed and can be seen intuitively as some cycles of the virtual processor that has to be used to run the computation defined as the transaction's code."}),"\n",(0,c.jsx)(s.h2,{id:"genesis",children:"Genesis"}),"\n",(0,c.jsx)(s.p,{children:"The state of the virtual machine at the beginning of the blockchain."}),"\n",(0,c.jsx)(s.h2,{id:"groups",children:"Groups"}),"\n",(0,c.jsxs)(s.p,{children:["The ",(0,c.jsx)(s.em,{children:"user groups"})," feature provides access control to the entry points of a contract by creating a new user group for that contract (versioned or not). This feature restricts the use of the constructor entry_point, which sets up the necessary data storage in the runtime context that belongs to the contract. Here is how it works:"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"User groups associate a set of URefs with a label."}),"\n",(0,c.jsx)(s.li,{children:"The entry points on a contract can accept a list of labels"}),"\n",(0,c.jsx)(s.li,{children:"The runtime checks that a URef from at least one of the allowed groups is present in the caller's context before execution."}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"global-state",children:"Global state"}),"\n",(0,c.jsxs)(s.p,{children:["When thinking of a ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/B#blockchain",children:"blockchain"})," as a decentralized computer, the global state is its memory state."]}),"\n",(0,c.jsxs)(s.p,{children:["When thinking of a ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/B#blockchain",children:"blockchain"})," as a shared database, the global state is the snapshot of the database's data."]}),"\n",(0,c.jsxs)(s.p,{children:["Technically, a ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/G#global-state",children:"global state"})," is a (possibly extensive) collection of key-value pairs, where the keys are references (Refs), and the values are large binary objects (BLOBs)."]}),"\n",(0,c.jsxs)(s.p,{children:["For every ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/B#block",children:"block"})," B in the ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/B#blockchain",children:"blockchain"}),", one can compute the ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/G#global-state",children:"global state"})," achieved by executing all ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/T#transaction",children:"transactions"})," in this block and its ancestors. The ",(0,c.jsx)(s.a,{href:"/docs-redux/concepts/glossary/R#root-hash",children:"root hash"})," identifying this state is stored in every executed block."]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>a});var c=r(96540);const o={},n=c.createContext(o);function t(e){const s=c.useContext(n);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),c.createElement(n.Provider,{value:s},e.children)}}}]);