"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[9356],{9833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>i});var a=t(4848),s=t(8453);t(6025);const c={title:"Installing Contracts"},r="Installing Smart Contracts",o={id:"developers/cli/installing-contracts",title:"Installing Contracts",description:"This document details the process of installing Casper smart contracts using the Casper command-line client and the put-deploy command.",source:"@site/docs/developers/cli/installing-contracts.md",sourceDirName:"developers/cli",slug:"/developers/cli/installing-contracts",permalink:"/developers/cli/installing-contracts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Installing Contracts"},sidebar:"developers",previous:{title:"Sending Deploys",permalink:"/developers/cli/sending-deploys"},next:{title:"Querying Global State",permalink:"/developers/cli/querying-global-state"}},l={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing a Contract in Global State",id:"installing-contract-code",level:2},{value:"Querying Global State",id:"querying-global-state",level:2},{value:"Get the state root hash",id:"get-state-root-hash",level:3},{value:"Query global state",id:"query-global-state",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"installing-smart-contracts",children:"Installing Smart Contracts"})}),"\n",(0,a.jsxs)(n.p,{children:["This document details the process of installing ",(0,a.jsx)(n.a,{href:"/developers/writing-onchain-code/simple-contract",children:"Casper smart contracts"})," using the ",(0,a.jsx)(n.a,{href:"/developers/prerequisites#install-casper-client",children:"Casper command-line client"})," and the ",(0,a.jsx)(n.code,{children:"put-deploy"})," command."]}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["You have a compiled contract (",(0,a.jsx)(n.code,{children:".wasm"})," file) to send to a Casper network"]}),"\n",(0,a.jsxs)(n.li,{children:["You have installed the ",(0,a.jsx)(n.a,{href:"/developers/prerequisites#install-casper-client",children:"Casper CLI client"})," to interact with the network"]}),"\n",(0,a.jsxs)(n.li,{children:["You have a ",(0,a.jsx)(n.a,{href:"/developers/prerequisites#setting-up-an-account",children:"Casper Account"})," with a public and secret key pair to initiate the deploy"]}),"\n",(0,a.jsxs)(n.li,{children:["You have enough CSPR tokens in your account's main purse to pay for deploys. If you plan to use the Casper Testnet, learn about the ",(0,a.jsx)(n.a,{href:"/users/testnet-faucet",children:"faucet"})," to fund your testing account's main purse"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"installing-contract-code",children:"Installing a Contract in Global State"}),"\n",(0,a.jsxs)(n.p,{children:["To install a contract in ",(0,a.jsx)(n.a,{href:"/concepts/glossary/G#global-state",children:"global state"}),", you need to send a deploy to the network with the contract Wasm. You can do so by using the ",(0,a.jsx)(n.code,{children:"put-deploy"})," command."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n  --node-address [NODE_SERVER_ADDRESS] \\\n  --chain-name [CHAIN_NAME] \\\n  --secret-key [KEY_PATH]/secret_key.pem \\\n  --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n  --session-path [CONTRACT_PATH]/[CONTRACT_NAME].wasm\n"})}),"\n",(0,a.jsx)(n.p,{children:"The arguments used above are:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port for JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"chain-name"})," - The chain name to the network where you wish to send the deploy. For Mainnet, use ",(0,a.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,a.jsx)(n.em,{children:"casper-test"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the deploy"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"payment-amount"})," - The payment for the deploy in motes"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"session-path"})," - The path to the contract Wasm, which should point to wherever you compiled the contract (",(0,a.jsx)(n.code,{children:".wasm"})," file) on your computer"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Once you call this command, it will return a deploy hash. You can use this hash to ",(0,a.jsx)(n.a,{href:"/developers/cli/sending-deploys#sending-the-deploy",children:"verify"})," successful execution of the deploy."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example - Install the contract:"})}),"\n",(0,a.jsxs)(n.p,{children:["Here we send a ",(0,a.jsx)(n.code,{children:"counter-v1.wasm"})," to a local NCTL network."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n  --node-address http://localhost:11101 \\\n  --chain-name casper-net-1 \\\n  --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n  --payment-amount 5000000000000 \\\n  --session-path ./counter/target/wasm32-unknown-unknown/release/counter-v1.wasm\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["The payment amount varies based on each contract and network ",(0,a.jsx)(n.a,{href:"/concepts/glossary/C#chainspec",children:"chainspec"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["To verify the deploy, call ",(0,a.jsx)(n.code,{children:"get-deploy"})," and provide the deploy hash you received from ",(0,a.jsx)(n.code,{children:"put-deploy"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client get-deploy \\\n  --node-address http://localhost:11101 [DEPLOY_HASH]\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Video - Contract Installation Walkthrough"})}),"\n",(0,a.jsx)(n.p,{children:"This video demonstrates the commands described above for installing a contract on-chain."}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=8",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,a.jsx)(n.h2,{id:"querying-global-state",children:"Querying Global State"}),"\n",(0,a.jsx)(n.p,{children:"Here we look at how to query global state to see details about a successfully installed contract."}),"\n",(0,a.jsx)(n.h3,{id:"get-state-root-hash",children:"Get the state root hash"}),"\n",(0,a.jsx)(n.p,{children:"The first step in querying the global state is obtaining the state root hash. The state root hash acts as an identifier for the current state of the network (global state). It is like a Git commit ID for commit history, and it provides a snapshot of the blockchain state at a specific point in time."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"After sending deploys to the network, it's necessary to fetch the new state root hash in order to see the changes reflected in the global state. Without doing this, you would be querying past versions of the state."})}),"\n",(0,a.jsxs)(n.p,{children:["To get the state root hash, use the ",(0,a.jsx)(n.code,{children:"get-state-root-hash"})," command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address [NODE_SERVER_ADDRESS]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"query-global-state",children:"Query global state"}),"\n",(0,a.jsxs)(n.p,{children:["Next, query the state of a Casper network at a given time, specified by the ",(0,a.jsx)(n.code,{children:"state-root-hash"})," described above. You can dive into the data stored in global state using the optional query path argument ",(0,a.jsx)(n.code,{children:"-q"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'casper-client query-global-state \\\n  --node-address [NODE_SERVER_ADDRESS] \\\n  --state-root-hash [STATE_ROOT_HASH] \\\n  --key [HASH_STRING] \\\n  -q "[SESSION_NAME]/[SESSION_NAMED_KEY]"\n'})}),"\n",(0,a.jsx)(n.p,{children:"The arguments used above are:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port for JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"state-root-hash"})," -  Hex-encoded hash of the state root"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"key"})," - The identifier for the query. This must be one of the following: public key, account hash, contract package hash, transfer hash, or deploy hash"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"q"})," - An optional query path argument that allows you to drill into the specifics of a query with respect to the key"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example - Query the account:"})}),"\n",(0,a.jsx)(n.p,{children:"To find your account details, query global state using your account hash."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state \\\n  --node-address http://localhost:11101 \\\n  --state-root-hash fa968344a2000282686303f1664c474465f9a028f32ec4f51791d9fa64c0bcd7 \\\n  --key account-hash-1d17e3fdad268f866a73558d1ae45e1eea3924c247871cb63f67ebf1a116e66d\n"})}),"\n",(0,a.jsx)(n.p,{children:'Here is how your account state would look. Notice that the sample response contains several named keys, including "counter", "counter_package_name", and "version". You can use these values to query the contract state further, as shown in the next example.'}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Sample account state"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'{\n  "id": -6831525034388467034,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "block_header": null,\n    "merkle_proof": "[27614 hex chars]",\n    "stored_value": {\n      "Account": {\n        "account_hash": "account-hash-1d17e3fdad268f866a73558d1ae45e1eea3924c247871cb63f67ebf1a116e66d",\n        "action_thresholds": {\n          "deployment": 1,\n          "key_management": 1\n        },\n        "associated_keys": [\n          {\n            "account_hash": "account-hash-1d17e3fdad268f866a73558d1ae45e1eea3924c247871cb63f67ebf1a116e66d",\n            "weight": 1\n          }\n        ],\n        "main_purse": "uref-d92e420120199f90005802bf3036362f368ab69bebf17e7e53856d6ac82e117f-007",\n        "named_keys": [\n          {\n            "key": "hash-22228188b85b6ee4a4a41c7e98225c3918139e9a5eb4b865711f2e409d85e88e",\n            "name": "counter"\n          },\n          {\n            "key": "uref-41c3f4ae3c1ce2446f6fd880a96e698ae5abc715151e45e357d88bb739489c03-007",\n            "name": "counter_access_uref"\n          },\n          {\n            "key": "hash-76a8c3daa6d6ac799ce9f46d82ac98efb271d2d64b517861ec89a06051ef019e",\n            "name": "counter_package_name"\n          },\n          {\n            "key": "uref-917762490591a1404cba59ed8dcf0bcfa7f644ef6c6be9bf5ea7b1641617cad0-007",\n            "name": "version"\n          }\n        ]\n      }\n    }\n  }\n}\n'})})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"If you don't know your account hash, you can run this command:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client account-address --public-key [PATH_TO_PUBLIC_KEY]\n"})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example - Query the contract:"})}),"\n",(0,a.jsx)(n.p,{children:"This example shows how to query global state given a contract hash. We use the contract hash from the sample response above."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state \\\n  --node-address http://localhost:11101  \\\n  --state-root-hash fa968344a2000282686303f1664c474465f9a028f32ec4f51791d9fa64c0bcd7 \\\n  --key hash-22228188b85b6ee4a4a41c7e98225c3918139e9a5eb4b865711f2e409d85e88e\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Here is how the sample contract would look and would contain details such as the ",(0,a.jsx)(n.code,{children:"contract_package_hash"}),", the contract ",(0,a.jsx)(n.code,{children:"entry_points"}),", and the ",(0,a.jsx)(n.code,{children:"named_keys"})," for the contract."]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Sample contract state"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'{\n  "id": -4657473054587773855,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "block_header": null,\n    "merkle_proof": "[21330 hex chars]",\n    "stored_value": {\n      "Contract": {\n        "contract_package_hash": "contract-package-76a8c3daa6d6ac799ce9f46d82ac98efb271d2d64b517861ec89a06051ef019e",\n        "contract_wasm_hash": "contract-wasm-576b1718711d524a79ab2f05ce801006a3fd32eb48b9f7dac69a9fa966d634e3",\n        "entry_points": [\n          {\n            "access": "Public",\n            "args": [],\n            "entry_point_type": "Contract",\n            "name": "counter_get",\n            "ret": "I32"\n          },\n          {\n            "access": "Public",\n            "args": [],\n            "entry_point_type": "Contract",\n            "name": "counter_inc",\n            "ret": "Unit"\n          }\n        ],\n        "named_keys": [\n          {\n            "key": "uref-d40613e50c7b405b02795e3fe3252554bef49b4b522e31a55f39b87c442f922a-007",\n            "name": "count"\n          }\n        ],\n        "protocol_version": "1.4.5"\n      }\n    }\n  }\n}\n\n'})})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example - Query a value using its key and the contract hash:"})}),"\n",(0,a.jsxs)(n.p,{children:["Next, you can query a named key associated with the contract using the ",(0,a.jsx)(n.code,{children:"-q"})," option. This example comes from the ",(0,a.jsx)(n.a,{href:"/counter",children:"Counter Contract Tutorial"}),', where a "count" variable is incremented and stored under a named key.']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'casper-client query-global-state \\\n  --node-address http://localhost:11101 \\\n  --state-root-hash [STATE_ROOT_HASH] \\\n  --key [CONTRACT_HASH] \\\n  -q "count"\n'})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Sample stored value"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'{\n  "id": -2540117660598287261,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "block_header": null,\n    "merkle_proof": "[56562 hex chars]",\n    "stored_value": {\n      "CLValue": {\n        "bytes": "00000000",\n        "cl_type": "I32",\n        "parsed": 0\n      }\n    }\n  }\n}\n'})})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example - Query a value using the account hash and named keys:"})}),"\n",(0,a.jsx)(n.p,{children:'It is also possible to check the state of a specific contract variable in global state given the account hash under which the contract was installed. Here we query the named key "count", stored under another key identifying the contract and named "counter".'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'casper-client query-global-state \\\n  --node-address http://localhost:11101 \\\n  --state-root-hash fa968344a2000282686303f1664c474465f9a028f32ec4f51791d9fa64c0bcd7 \\\n  --key account-hash-1d17e3fdad268f866a73558d1ae45e1eea3924c247871cb63f67ebf1a116e66d \\\n  -q "counter/count"\n'})}),"\n",(0,a.jsx)(n.p,{children:"The response should be the same as in Example 3, above."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example - Query contract package state:"})}),"\n",(0,a.jsx)(n.p,{children:"You can query information about a contract package, such as the latest contract hash and contract version, given its contract package hash."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state \\\n  --node-address http://localhost:11101 \\\n  --key hash-76a8c3daa6d6ac799ce9f46d82ac98efb271d2d64b517861ec89a06051ef019e \\\n  --state-root-hash 763e737cf55a298d54bcdfb4ee55526538a1a086128914b9cc25ccbdebbbb966\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Here is how the contract package details would look. The response would contain the ",(0,a.jsx)(n.code,{children:"contract_hash"}),", which you would need to ",(0,a.jsx)(n.a,{href:"/developers/cli/calling-contracts#calling-contracts-by-hash",children:"call a contract by hash"})," in the next section. You would also see the ",(0,a.jsx)(n.code,{children:"access_key"})," for the ",(0,a.jsx)(n.code,{children:"ContractPackage"})," and the current ",(0,a.jsx)(n.code,{children:"contract_version"}),"."]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Sample contract package state"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'{\n  "id": -6225901853092301031,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "block_header": null,\n    "merkle_proof": "[20964 hex chars]",\n    "stored_value": {\n      "ContractPackage": {\n        "access_key": "uref-41c3f4ae3c1ce2446f6fd880a96e698ae5abc715151e45e357d88bb739489c03-007",\n        "disabled_versions": [],\n        "groups": [],\n        "versions": [\n          {\n            "contract_hash": "contract-22228188b85b6ee4a4a41c7e98225c3918139e9a5eb4b865711f2e409d85e88e",\n            "contract_version": 1,\n            "protocol_version_major": 1\n          }\n        ]\n      }\n    }\n  }\n}\n'})})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Video - Querying Walkthrough"})}),"\n",(0,a.jsx)(n.p,{children:"This video shows you what to expect when querying the network."}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=9",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,a.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Learn ",(0,a.jsx)(n.a,{href:"/developers/cli/calling-contracts",children:"different ways to call contracts"})," using the Casper command-line client"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(6540);const s={},c=a.createContext(s);function r(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);