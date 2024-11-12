"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[11904],{80256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"developers/dapps/speculative-exec","title":"Estimating Gas Costs with Speculative Execution","description":"Version 1.5 of the Casper Node includes a new JSON RPC endpoint called speculativeexec. This endpoint allows developers to send a Deploy to a single node, which will execute the Deploy without committing the results to global state and, therefore, not incurring the associated costs. Observing the execution results of the Deploy gives a rough estimate of the potential cost for sending the Deploy without speculative execution.","source":"@site/versioned_docs/version-2.0.0/developers/dapps/speculative-exec.md","sourceDirName":"developers/dapps","slug":"/developers/dapps/speculative-exec","permalink":"/developers/dapps/speculative-exec","draft":false,"unlisted":false,"tags":[],"version":"2.0.0","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{},"sidebar":"developers","previous":{"title":"Signing Transactions","permalink":"/developers/dapps/signing-a-transaction"},"next":{"title":"Local Network Setup","permalink":"/developers/dapps/setup-nctl"}}');var o=n(74848),i=n(28453);const c={},a="Estimating Gas Costs with Speculative Execution",l={},r=[{value:"Sending a Speculative Execution Deploy using the Rust CLI Casper Client",id:"sending-a-speculative-execution-deploy-using-the-rust-cli-casper-client",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"estimating-gas-costs-with-speculative-execution",children:"Estimating Gas Costs with Speculative Execution"})}),"\n",(0,o.jsxs)(t.p,{children:["Version 1.5 of the Casper Node includes a new JSON RPC endpoint called ",(0,o.jsx)(t.a,{href:"/developers/json-rpc/json-rpc-transactional#speculative_exec",children:(0,o.jsx)(t.code,{children:"speculative_exec"})}),". This endpoint allows developers to send a ",(0,o.jsx)(t.a,{href:"/concepts/glossary/D#deploy",children:"Deploy"})," to a single node, which will execute the Deploy without committing the results to global state and, therefore, not incurring the associated costs. Observing the execution results of the Deploy gives a rough estimate of the potential cost for sending the Deploy without speculative execution."]}),"\n",(0,o.jsxs)(t.p,{children:["In addition to the Deploy in question, ",(0,o.jsx)(t.code,{children:"speculative_exec"})," also accepts a [",(0,o.jsx)(t.code,{children:"block_identifier"}),"] for a specific block height or hash to speculate on. If you do not provide a block identifier, the Deploy will be executed on the most recent block."]}),"\n",(0,o.jsx)(t.h2,{id:"sending-a-speculative-execution-deploy-using-the-rust-cli-casper-client",children:"Sending a Speculative Execution Deploy using the Rust CLI Casper Client"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"/developers/cli/sending-transactions",children:"Rust CLI Casper client"})," includes a ",(0,o.jsx)(t.code,{children:"speculative-exec"})," option that will flag a normal ",(0,o.jsx)(t.code,{children:"put-deploy"})," for execution but not commitment to global state. The following command shows an example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"\ncasper client put-deploy /\n--node-address <HOST:PORT> /\n--chain-name <CHAIN_NAME> /\n--secret-key <PATH> /\n--session-path <PATH>  /\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES>\n--speculative-exec <BLOCK HEIGHT OR HASH>\n\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You should receive ",(0,o.jsx)(t.code,{children:"execution_result"}),"s that show a ",(0,o.jsx)(t.code,{children:"cost"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'\n{\n  "jsonrpc": "2.0",\n  "id": -4571113357017152230,\n  "result": {\n    "api_version": "1.0.0",\n    "block_hash": "6ca035b08de092e7f5e8fff771b880c5b4d7463a8f7a9b108888aaad958e5b0f",\n    "execution_result": {\n      "Success": {\n        "effect": {\n          <Deploy effects removed for conciseness.>\n        },\n        "transfers": [],\n        "cost": "87300473670"\n      }\n    }\n  }\n}\n\n'})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["Cost estimates acquired through ",(0,o.jsx)(t.code,{children:"speculative_exec"})," may vary from the cost of sending the same Deploy to a Casper network. Speculative execution is a tool to help narrow down the potential cost of sending a Deploy, but many factors can cause the actual cost to vary."]})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var s=n(96540);const o={},i=s.createContext(o);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);