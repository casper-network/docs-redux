"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[54635],{7743:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"resources/quick-start","title":"Quickstart","description":"Here is a list of commands for developers who already meet the prerequisites and want to quickly send a sample contract to the Testnet. Consult the complete documentation for context and additional help.","source":"@site/versioned_docs/version-2.0.0/resources/quick-start.md","sourceDirName":"resources","slug":"/resources/quick-start","permalink":"/resources/quick-start","draft":false,"unlisted":false,"tags":[],"version":"2.0.0","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{},"sidebar":"tutorials","next":{"title":"Overview","permalink":"/resources/tutorials/beginner/"}}');var r=s(74848),a=s(28453);const l={},c="Quickstart",o={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"quickstart",children:"Quickstart"})}),"\n",(0,r.jsxs)(n.p,{children:["Here is a list of commands for developers who already meet the prerequisites and want to quickly send a sample contract to the ",(0,r.jsx)(n.a,{href:"https://testnet.cspr.live/",children:"Testnet"}),". Consult the ",(0,r.jsx)(n.a,{href:"/writing-contracts",children:"complete documentation"})," for context and additional help."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["You have installed ",(0,r.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust"}),". Verify the installation with this command: ",(0,r.jsx)(n.code,{children:"rustup --version"}),". Restart the shell if needed."]}),"\n",(0,r.jsxs)(n.li,{children:["You have installed ",(0,r.jsx)(n.a,{href:"https://cmake.org/install/",children:"cmake"}),". Verify the installation with this command: ",(0,r.jsx)(n.code,{children:"cmake --version"}),".\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["On Ubuntu, you can follow ",(0,r.jsx)(n.a,{href:"https://cgold.readthedocs.io/en/latest/first-step/installation.html",children:"this guide"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["On MacOS, use this command: ",(0,r.jsx)(n.code,{children:"brew install cmake"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["You have an integrated development environment (IDE). On Windows, you will need to download the C++ build developer tools, without which you cannot install ",(0,r.jsx)(n.code,{children:"cargo-casper"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["You have download ",(0,r.jsx)(n.a,{href:"https://git-scm.com/download/",children:"Git"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install Cargo Casper with this command:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"cargo install cargo-casper"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Install the ",(0,r.jsx)(n.a,{href:"/developers/prerequisites#install-casper-client",children:"Casper client"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"cargo install casper-client"})}),"\n",(0,r.jsx)(n.p,{children:"If you have issues installing the casper-client, you may need additional libraries."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"On MacOS:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"brew install pkg-config\nbrew install openssl\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"On Ubuntu:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install pkg-config\nsudo apt-get install openssl\nsudo apt-get install libssl-dev\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Make sure you also have the development packages of ",(0,r.jsx)(n.code,{children:"openssl"})," installed. For example, ",(0,r.jsx)(n.code,{children:"libssl-dev"})," on Ubuntu or ",(0,r.jsx)(n.code,{children:"openssl-devel"})," on Fedora."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Test the ",(0,r.jsx)(n.code,{children:"casper-client"})," by ",(0,r.jsx)(n.a,{href:"/developers/prerequisites#acquire-node-address-from-network-peers",children:"querying a node"})," on the network and getting the latest ",(0,r.jsx)(n.a,{href:"/concepts/glossary/S#state-root-hash",children:"state root hash"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address http://65.21.235.219:7777\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set up a ",(0,r.jsx)(n.a,{href:"/developers/prerequisites#setting-up-an-account",children:"Casper Account"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Clone a simple counter contract or download it from GitHub:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"git clone https://github.com/casper-ecosystem/counter"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Navigate to the folder and prepare the dependencies to build the contract:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd counter\nmake prepare\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"11",children:["\n",(0,r.jsx)(n.li,{children:"Build the contract and tests:"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"make test"})}),"\n",(0,r.jsxs)(n.ol,{start:"12",children:["\n",(0,r.jsxs)(n.li,{children:["Install the contract on Testnet using the ",(0,r.jsx)(n.code,{children:"casper-client"}),"'s ",(0,r.jsx)(n.code,{children:"put-deploy"})," command. Replace the secret key with your path. Record the deploy hash from the output. This example uses 30 CSPR to pay for contract installation on chain. You may need to adjust this value based on the latest Testnet ",(0,r.jsx)(n.a,{href:"/concepts/glossary/C#chainspec",children:"chainspec"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n--node-address [NODE_ADDRESS] \\\n--chain-name casper-test \\\n--secret-key [YOUR_PATH_TO_SECRET_KEY_FILE] \\\n--payment-amount 30000000000 \\\n--session-path contracts/counter-v1/target/wasm32-unknown-unknown/release/counter-v1.wasm\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"13",children:["\n",(0,r.jsx)(n.li,{children:"Check the deploy status given the deploy hash from the previous command:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"casper-client get-deploy --node-address [NODE_ADDRESS] [DEPLOY_HASH]\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"14",children:["\n",(0,r.jsx)(n.li,{children:"Get the latest state root hash:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address [NODE_ADDRESS]\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"15",children:["\n",(0,r.jsx)(n.li,{children:"Open the deploy tab of the account on the Testnet to see the deploy details."}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"As an alternative to step 15, check your account using the command line:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state \\\n--node-address [NODE_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [PATH_TO_PUBLIC_KEY]\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["As another alternative, use the account hash for the ",(0,r.jsx)(n.code,{children:"--key"})," argument. To get the account hash, look at the account details on the block explorer, or run this command:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"casper-client account-address --public-key [PATH_TO_PUBLIC_KEY]\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then, query the blockchain using the account hash:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state \\\n--node-address [NODE_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [ACCOUNT_HASH]\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"16",children:["\n",(0,r.jsx)(n.li,{children:'Now, you can play with the smart contract and increment the value it manages from 0 to 1. First, let\'s make sure the value is 0. Look at the "parsed" value returned in the output. An expected example output is shown below.'}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'casper-client query-global-state \\\n--node-address [NODE_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [ACCOUNT_HASH] \\\n-q "counter/count"\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example output:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"id": 8523290678829319485,\n"jsonrpc": "2.0",\n"result": {\n   "api_version": "1.4.6",\n   "block_header": null,\n   "merkle_proof": "[85716 hex chars]",\n   "stored_value": {\n      "CLValue": {\n      "bytes": "01000000",\n      "cl_type": "I32",\n      "parsed": 0\n      }\n   }\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"17",children:["\n",(0,r.jsxs)(n.li,{children:["Now increment the count value by calling the entry point ",(0,r.jsx)(n.code,{children:"counter_inc"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy \\\n--node-address [NODE_ADDRESS] \\\n--chain-name [CHAIN_NAME] \\\n--secret-key [PATH_TO_YOUR_KEY] \\\n--payment-amount 100000000 \\\n--session-name "counter" \\\n--session-entry-point "counter_inc"\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"18",children:["\n",(0,r.jsxs)(n.li,{children:["Get the NEW ",(0,r.jsx)(n.code,{children:"state root hash"}),", to get the latest snapshot of the blockchain state \u2013 this is EXTREMELY IMPORTANT!"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address [NODE_ADDRESS]\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"19",children:["\n",(0,r.jsx)(n.li,{children:"Query the state of the network."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'casper-client query-state \\\n--node-address [NODE_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [ACCOUNT_HASH] \\\n-q "counter/count"\n'})}),"\n",(0,r.jsx)(n.p,{children:'If everything went according to plan, the value should be 1. Look at the "parsed" value below.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"id": 8523290678829319485,\n"jsonrpc": "2.0",\n"result": {\n   "api_version": "1.4.6",\n   "block_header": null,\n   "merkle_proof": "[85716 hex chars]",\n   "stored_value": {\n      "CLValue": {\n      "bytes": "01000000",\n      "cl_type": "I32",\n      "parsed": 1\n      }\n   }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"You have successfully invoked a contract on the Casper Testnet to increment a value from 0 to 1. Now you have all the infrastructure required to work with more meaningful contracts."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var t=s(96540);const r={},a=t.createContext(r);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);