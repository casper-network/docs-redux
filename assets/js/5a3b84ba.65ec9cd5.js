"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[5409],{47398:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var s=r(74848),t=r(28453);const o={title:"Overview"},c="Interacting with the Casper JSON-RPC API",i={id:"developers/json-rpc/index",title:"Overview",description:"Casper uses a custom JSON-RPC implementation called casper-json-rpc that complies with the JSON-RPC 2.0 specification.",source:"@site/docs/developers/json-rpc/index.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/",permalink:"/docs-redux/next/developers/json-rpc/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"developers",previous:{title:"Best Practices for Casper Smart Contract Authors",permalink:"/docs-redux/next/developers/writing-onchain-code/best-practices"},next:{title:"Guidance for JSON-RPC SDK Compliance",permalink:"/docs-redux/next/developers/json-rpc/guidance"}},d={},a=[{value:"Table of Contents",id:"table-of-contents",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"interacting-with-the-casper-json-rpc-api",children:"Interacting with the Casper JSON-RPC API"})}),"\n",(0,s.jsxs)(n.p,{children:["Casper uses a custom JSON-RPC implementation called ",(0,s.jsx)(n.code,{children:"casper-json-rpc"})," that complies with the ",(0,s.jsx)(n.a,{href:"https://www.jsonrpc.org/specification",children:"JSON-RPC 2.0 specification"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs-redux/next/operators/setup/casper-sidecar",children:"Casper Sidecar"})," service offers a JSON-RPC API server for clients to interact with a Casper node. The Sidecar acts as a JSON bridge between subscribers and a Casper node's binary port, producing faster responses and reducing the load placed on the node. For more details on how the JSON-RPC API works, see the ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/json_rpc/README.md",children:"JSON-RPC README"})," in the Sidecar repository. The Sidecar usually runs on the same machine as the node process, and you need to find the port on which to access the Sidecar."]}),"\n",(0,s.jsxs)(n.p,{children:["You can find the latest RPC schema in the Sidecar's ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/resources/test/rpc_schema.json",children:"GitHub repository"}),". "]}),"\n",(0,s.jsxs)(n.p,{children:["The Casper client subcommand ",(0,s.jsx)(n.code,{children:"list-rpcs"})," also provides all currently supported RPCs. Here is an example of running the Casper client to list RPCs:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"casper-client list-rpcs --node-address <HOST:PORT>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You may use ",(0,s.jsx)(n.a,{href:"https://www.postman.com/",children:"Postman"})," or write code to interact with the Casper JSON-RPC API, which is fully compatible with the JSON-RPC 2.0 Specification."]}),"\n",(0,s.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Page"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs-redux/next/developers/json-rpc/guidance",children:"Guidance for JSON-RPC SDK Compliance"})}),(0,s.jsx)(n.td,{children:"Requirements for a compliant Casper SDK"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs-redux/next/developers/json-rpc/minimal-compliance",children:"Required JSON-RPC Methods for Minimal Compliance"})}),(0,s.jsx)(n.td,{children:"Methods required for a minimally compliant Casper SDK"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs-redux/next/developers/json-rpc/json-rpc-transactional",children:"Transactional JSON-RPC Method"})}),(0,s.jsx)(n.td,{children:"Methods allowing interaction with a Casper network"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs-redux/next/developers/json-rpc/json-rpc-informational",children:"Informational JSON-RPC Methods"})}),(0,s.jsx)(n.td,{children:"Methods returning information about the network from a Casper node"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs-redux/next/developers/json-rpc/json-rpc-pos",children:"Proof-of-Stake JSON-RPC Methods"})}),(0,s.jsx)(n.td,{children:"Methods pertaining to Proof-of-Stake functionality on a Casper network"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs-redux/next/developers/json-rpc/types_chain",children:"Types"})}),(0,s.jsx)(n.td,{children:"Information on types used within JSON-RPC methods"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs-redux/next/developers/json-rpc/types_cl",children:"CL Types"})}),(0,s.jsx)(n.td,{children:"Information related to CL Types"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var s=r(96540);const t={},o=s.createContext(t);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);