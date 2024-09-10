"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[286],{70269:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(74848),c=n(28453);const o={},t="C",a={id:"concepts/glossary/C",title:"C",description:"---",source:"@site/versioned_docs/version-1.5.X/concepts/glossary/C.md",sourceDirName:"concepts/glossary",slug:"/concepts/glossary/C",permalink:"/docs-redux/concepts/glossary/C",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724759228e3,frontMatter:{},sidebar:"concepts",previous:{title:"B",permalink:"/docs-redux/concepts/glossary/B"},next:{title:"D",permalink:"/docs-redux/concepts/glossary/D"}},i={},l=[{value:"Cargo",id:"cargo",level:2},{value:"Casper network",id:"casper-network",level:2},{value:"CBC",id:"cbc",level:2},{value:"Chainspec",id:"chainspec",level:2},{value:"Consensus",id:"consensus",level:2},{value:"Contract runtime",id:"contract-runtime",level:2},{value:"Correct by construction",id:"correct-by-construction",level:2},{value:"Crate",id:"crate",level:2},{value:"CSPR",id:"cspr",level:2}];function d(e){const s={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"c",children:"C"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/A",children:"A"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/B",children:"B"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/C",children:"C"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/D",children:"D"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/E",children:"E"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/F",children:"F"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/G",children:"G"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/H",children:"H"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/I",children:"I"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/J",children:"J"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/K",children:"K"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/L",children:"L"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/M",children:"M"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/N",children:"N"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/O",children:"O"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/P",children:"P"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/Q",children:"Q"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/R",children:"R"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/S",children:"S"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/T",children:"T"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/U",children:"U"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/V",children:"V"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/W",children:"W"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/X",children:"X"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/Y",children:"Y"})," ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/Z",children:"Z"})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"cargo",children:"Cargo"}),"\n",(0,r.jsx)(s.p,{children:"Cargo is Rust's build system and package manager. This tool manages Rust projects, such as building code and downloading dependencies."}),"\n",(0,r.jsx)(s.h2,{id:"casper-network",children:"Casper network"}),"\n",(0,r.jsxs)(s.p,{children:["Casper is a Proof-of-Stake blockchain platform with an account-based model that performs execution after consensus. More information on the design of a Casper network can be found ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/design/casper-design",children:"here"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"cbc",children:"CBC"}),"\n",(0,r.jsx)(s.p,{children:"Correct-by-construction (CBC) protocols are consensus protocols meeting the following properties:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"All the nodes share the same proof of asynchronous liveness, which means that the protocol will continue to produce blocks at some interval."}),"\n",(0,r.jsx)(s.li,{children:"The consensus has mathematically provable safety, which means that once a block is committed, it cannot be reverted."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"chainspec",children:"Chainspec"}),"\n",(0,r.jsxs)(s.p,{children:["A collection of configuration settings describing the state of the system at genesis and upgrades to basic system functionality (including system contracts and gas costs) occurring after ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/G#genesis",children:"genesis"}),". Here is an example ",(0,r.jsx)(s.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.5.2/resources/production/chainspec.toml",children:"chainspec"}),", which will change with newer releases."]}),"\n",(0,r.jsx)(s.h2,{id:"consensus",children:"Consensus"}),"\n",(0,r.jsxs)(s.p,{children:["An algorithm used to mandate agreement on the ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/B#blockchain",children:"blockchain"})," between all nodes. The blockchain, although being built in a decentralized way, eventually converges so that all nodes eventually agree on whether a given block is part of the chain or not."]}),"\n",(0,r.jsxs)(s.p,{children:["Casper uses the Highway algorithm in the ",(0,r.jsx)(s.em,{children:"CBC Casper"})," family of consensus algorithms. The algorithm for securing an agreement is what is known as ",(0,r.jsx)(s.em,{children:"consensus"}),". The consensus layer contains the algorithm, but the algorithm should not be confused with the consensus layer."]}),"\n",(0,r.jsx)(s.h2,{id:"contract-runtime",children:"Contract runtime"}),"\n",(0,r.jsxs)(s.p,{children:["Enables developers to use a seamless workflow for authoring and testing their ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/S#smart-contract",children:"smart contracts"}),". This environment can also be used for continuous integration, enabling Rust smart contracts to be managed using development best practices."]}),"\n",(0,r.jsx)(s.h2,{id:"correct-by-construction",children:"Correct by construction"}),"\n",(0,r.jsxs)(s.p,{children:["See ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/C#cbc",children:"CBC"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"crate",children:"Crate"}),"\n",(0,r.jsxs)(s.p,{children:["A compilation unit in Rust. A crate can be compiled into a binary or into a library. By default, ",(0,r.jsx)(s.em,{children:"rustc"}),", the compiler for the Rust programming language, will produce a binary from a crate."]}),"\n",(0,r.jsx)(s.h2,{id:"cspr",children:"CSPR"}),"\n",(0,r.jsxs)(s.p,{children:["CSPR is the Casper token pre-defined on the Casper Mainnet and used to pay for transaction execution and for ",(0,r.jsx)(s.a,{href:"/docs-redux/concepts/glossary/S#staking",children:"staking"})," (securing the network)."]})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>a});var r=n(96540);const c={},o=r.createContext(c);function t(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);