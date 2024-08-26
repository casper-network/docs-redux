"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[1334],{94947:(e,s,c)=>{c.r(s),c.d(s,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=c(74848),n=c(28453);const o={},t="A",a={id:"concepts/glossary/A",title:"A",description:"---",source:"@site/versioned_docs/version-1.1.X/concepts/glossary/A.md",sourceDirName:"concepts/glossary",slug:"/concepts/glossary/A",permalink:"/docs-redux/concepts/glossary/A",draft:!1,unlisted:!1,tags:[],version:"1.1.X",frontMatter:{},sidebar:"concepts",previous:{title:"Glossary",permalink:"/docs-redux/glossary"},next:{title:"B",permalink:"/docs-redux/concepts/glossary/B"}},i={},d=[{value:"Account",id:"account",level:2},{value:"Account Hash",id:"account-hash",level:2},{value:"AssemblyScript",id:"assemblyscript",level:2},{value:"Auction",id:"auction",level:2},{value:"Auction contract",id:"auction-contract",level:2},{value:"Auction delay",id:"auction-delay",level:2}];function l(e){const s={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"a",children:"A"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/A",children:"A"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/B",children:"B"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/C",children:"C"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/D",children:"D"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/E",children:"E"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/F",children:"F"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/G",children:"G"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/H",children:"H"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/I",children:"I"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/J",children:"J"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/K",children:"K"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/L",children:"L"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/M",children:"M"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/N",children:"N"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/O",children:"O"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/P",children:"P"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/Q",children:"Q"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/R",children:"R"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/S",children:"S"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/T",children:"T"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/U",children:"U"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/V",children:"V"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/W",children:"W"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/X",children:"X"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/Y",children:"Y"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/Z",children:"Z"})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"account",children:"Account"}),"\n",(0,r.jsxs)(s.p,{children:["An Account is a structure that represents a user on a Casper network. Information on creating an account can be found ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/design/casper-design#accounts-head",children:"here"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"account-hash",children:"Account Hash"}),"\n",(0,r.jsxs)(s.p,{children:["The account hash is a 32-byte hash of the public key representing the user account. Information on generating an account hash can be found ",(0,r.jsx)(s.a,{href:"https://support.casperlabs.io/hc/en-gb/articles/13781616975131-How-do-I-generate-an-account-hash-",children:"here"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"assemblyscript",children:"AssemblyScript"}),"\n",(0,r.jsxs)(s.p,{children:["AssemblyScript is a TypeScript-based programming language (JavaScript with static types) that is optimized for WebAssembly and compiled to WebAssembly using ",(0,r.jsx)(s.em,{children:"asc"}),", the reference AssemblyScript compiler. It is developed by the AssemblyScript Project and the AssemblyScript community."]}),"\n",(0,r.jsx)(s.h2,{id:"auction",children:"Auction"}),"\n",(0,r.jsx)(s.p,{children:'The auction determines the composition of the validator set for each era of the protocol. It is a "first-price" auction (where winning bids become stakes) with a fixed number of spots chosen to balance security with performance. Because rewards are proportional to the stake, it is expected that this competitive mechanism will provide a powerful impetus for staking as many tokens as possible.'}),"\n",(0,r.jsx)(s.h2,{id:"auction-contract",children:"Auction contract"}),"\n",(0,r.jsx)(s.p,{children:"The auction contract acts as a front-end user interface to the auction by directly accepting bids from validators and delegators. It also contains the logic necessary for carrying out the auction."}),"\n",(0,r.jsx)(s.h2,{id:"auction-delay",children:"Auction delay"}),"\n",(0,r.jsxs)(s.p,{children:["The number of full eras that pass between the ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/B#booking-block",children:"booking block"})," and the era whose validator set it defines. The auction delay is configurable and can be several eras long."]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,c)=>{c.d(s,{R:()=>t,x:()=>a});var r=c(96540);const n={},o=r.createContext(n);function t(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);