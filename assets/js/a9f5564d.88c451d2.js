"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[9235],{6428:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=s(4848),o=s(8453);const i={title:"Genesis"},c="The Genesis Block {#the-genesis-block}",r={id:"operators/setup-network/genesis",title:"Genesis",description:"the-genesis-block}",source:"@site/docs/operators/setup-network/genesis.md",sourceDirName:"operators/setup-network",slug:"/operators/setup-network/genesis",permalink:"/operators/setup-network/genesis",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Genesis"},sidebar:"operators",previous:{title:"Setting up Private Networks",permalink:"/operators/setup-network/"},next:{title:"The Chainspec",permalink:"/operators/setup-network/chain-spec"}},a={},l=[{value:"chainspec.toml",id:"chainspectoml",level:2},{value:"accounts.toml",id:"accountstoml",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"the-genesis-block",children:"The Genesis Block"})}),"\n",(0,t.jsx)(n.p,{children:"The Casper node software creates a genesis block from the following input files:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"chainspec.toml"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"accounts.toml"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"chainspectoml",children:"chainspec.toml"}),"\n",(0,t.jsxs)(n.p,{children:["A version of the ",(0,t.jsx)(n.a,{href:"/concepts/glossary/C#chainspec",children:"chainspec"})," is downloaded by the ",(0,t.jsx)(n.code,{children:"pull_casper_node_version.sh"})," script installed with the casper-node-launcher debian package. This script pulls the ",(0,t.jsx)(n.code,{children:"chainspec.toml"})," file from the appropriate path defined in the network config file used (",(0,t.jsx)(n.code,{children:"casper.conf"})," for MainNet and ",(0,t.jsx)(n.code,{children:"casper-test.conf"})," for TestNet)."]}),"\n",(0,t.jsxs)(n.p,{children:["The production version of the file from which this is based on can be found at ",(0,t.jsx)(n.code,{children:"casper-node/resources/production/chainspec.toml"})," in the code base. To create a custom network, this file can be updated as desired. Any changes to this file will result in a different genesis hash. Refer to ",(0,t.jsx)(n.a,{href:"/operators/setup-network/chain-spec",children:"this page"})," for detailed documentation on each of the variables in the file."]}),"\n",(0,t.jsx)(n.h2,{id:"accountstoml",children:"accounts.toml"}),"\n",(0,t.jsx)(n.p,{children:"This file contains the genesis validator set information, starting accounts and associated balances and bond amounts."}),"\n",(0,t.jsxs)(n.p,{children:["If an account is not bonded at genesis, specify a ",(0,t.jsx)(n.code,{children:"0"})," for the bond amount."]}),"\n",(0,t.jsxs)(n.p,{children:["Similar to the ",(0,t.jsx)(n.code,{children:"chainspec.toml"}),", this is pulled from the appropriate path defined in the network config file used."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var t=s(6540);const o={},i=t.createContext(o);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);