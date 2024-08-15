"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[4055],{6898:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>i});var t=a(74848),s=a(28453);const c={title:"Querying Global State"},r="Querying Global State",o={id:"developers/cli/querying-global-state",title:"Querying Global State",description:"This page explains how to query global state after contract installation.",source:"@site/versioned_docs/version-1.5.6/developers/cli/querying-global-state.md",sourceDirName:"developers/cli",slug:"/developers/cli/querying-global-state",permalink:"/docs-redux/developers/cli/querying-global-state",draft:!1,unlisted:!1,tags:[],version:"1.5.6",frontMatter:{title:"Querying Global State"},sidebar:"developers",previous:{title:"Installing Contracts",permalink:"/docs-redux/developers/cli/installing-contracts"},next:{title:"Calling Contracts",permalink:"/docs-redux/developers/cli/calling-contracts"}},l={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting the State Root Hash",id:"get-state-root-hash",level:2},{value:"Sending the Query",id:"query-global-state",level:2},{value:"Query the account",id:"query-the-account",level:3},{value:"Query the contract",id:"query-the-contract",level:3},{value:"Query a value using its key and the contract hash",id:"query-a-value-using-its-key-and-the-contract-hash",level:3},{value:"Query a value using the account hash and named keys",id:"query-a-value-using-the-account-hash-and-named-keys",level:3},{value:"Query contract package state",id:"query-contract-package-state",level:3},{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",h1:"h1",h2:"h2",h3:"h3",header:"header",iframe:"iframe",li:"li",p:"p",pre:"pre",summary:"summary",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"import useBaseUrl from '@docusaurus/useBaseUrl';"}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"querying-global-state",children:"Querying Global State"})}),"\n",(0,t.jsx)(n.p,{children:"This page explains how to query global state after contract installation."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsx)(n.a,{href:"/docs-redux/developers/cli/installing-contracts",children:"installed a contract"})," on a Casper network"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"get-state-root-hash",children:"Getting the State Root Hash"}),"\n",(0,t.jsx)(n.p,{children:"The first step in querying the global state is obtaining the state root hash. The state root hash acts as an identifier for the current state of the network (global state). It is like a Git commit ID for commit history, and it provides a snapshot of the blockchain state at a specific point in time."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"After sending deploys to the network, it's necessary to fetch the new state root hash in order to see the changes reflected in the global state. Without doing this, you would be querying past versions of the state."})}),"\n",(0,t.jsxs)(n.p,{children:["To get the state root hash, use the ",(0,t.jsx)(n.code,{children:"get-state-root-hash"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address [NODE_SERVER_ADDRESS]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"query-global-state",children:"Sending the Query"}),"\n",(0,t.jsxs)(n.p,{children:["Next, query the state of a Casper network at a given time, specified by the ",(0,t.jsx)(n.code,{children:"state-root-hash"})," described above. You can dive into the data stored in global state using the optional query path argument ",(0,t.jsx)(n.code,{children:"-q"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'casper-client query-global-state \\\n  --node-address [NODE_SERVER_ADDRESS] \\\n  --state-root-hash [STATE_ROOT_HASH] \\\n  --key [HASH_STRING] \\\n  -q "[SESSION_NAME]/[SESSION_NAMED_KEY]"\n'})}),"\n",(0,t.jsx)(n.p,{children:"The arguments used above are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port for JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"state-root-hash"})," -  Hex-encoded hash of the state root"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"key"})," - The identifier for the query. This must be one of the following: public key, account hash, contract package hash, transfer hash, or deploy hash"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"q"})," - An optional query path argument that allows you to drill into the specifics of a query with respect to the key"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"query-the-account",children:"Query the account"}),"\n",(0,t.jsx)(n.p,{children:"To find your account details, query global state using your account hash."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state \\\n  --node-address http://localhost:11101 \\\n  --state-root-hash fa968344a2000282686303f1664c474465f9a028f32ec4f51791d9fa64c0bcd7 \\\n  --key account-hash-1d17e3fdad268f866a73558d1ae45e1eea3924c247871cb63f67ebf1a116e66d\n"})}),"\n",(0,t.jsx)(n.p,{children:'Here is how your account state would look. Notice that the sample response contains several named keys, including "counter", "counter_package_name", and "version". You can use these values to query the contract state further, as shown in the next example.'}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:"Sample account state"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n  "id": -6831525034388467034,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "block_header": null,\n    "merkle_proof": "[27614 hex chars]",\n    "stored_value": {\n      "Account": {\n        "account_hash": "account-hash-1d17e3fdad268f866a73558d1ae45e1eea3924c247871cb63f67ebf1a116e66d",\n        "action_thresholds": {\n          "deployment": 1,\n          "key_management": 1\n        },\n        "associated_keys": [\n          {\n            "account_hash": "account-hash-1d17e3fdad268f866a73558d1ae45e1eea3924c247871cb63f67ebf1a116e66d",\n            "weight": 1\n          }\n        ],\n        "main_purse": "uref-d92e420120199f90005802bf3036362f368ab69bebf17e7e53856d6ac82e117f-007",\n        "named_keys": [\n          {\n            "key": "hash-22228188b85b6ee4a4a41c7e98225c3918139e9a5eb4b865711f2e409d85e88e",\n            "name": "counter"\n          },\n          {\n            "key": "uref-41c3f4ae3c1ce2446f6fd880a96e698ae5abc715151e45e357d88bb739489c03-007",\n            "name": "counter_access_uref"\n          },\n          {\n            "key": "hash-76a8c3daa6d6ac799ce9f46d82ac98efb271d2d64b517861ec89a06051ef019e",\n            "name": "counter_package_name"\n          },\n          {\n            "key": "uref-917762490591a1404cba59ed8dcf0bcfa7f644ef6c6be9bf5ea7b1641617cad0-007",\n            "name": "version"\n          }\n        ]\n      }\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"If you don't know your account hash, you can run this command:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client account-address --public-key [PATH_TO_PUBLIC_KEY]\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"query-the-contract",children:"Query the contract"}),"\n",(0,t.jsx)(n.p,{children:"This example shows how to query global state given a contract hash. We use the contract hash from the sample response above."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state \\\n  --node-address http://localhost:11101  \\\n  --state-root-hash fa968344a2000282686303f1664c474465f9a028f32ec4f51791d9fa64c0bcd7 \\\n  --key hash-22228188b85b6ee4a4a41c7e98225c3918139e9a5eb4b865711f2e409d85e88e\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here is how the sample contract would look and would contain details such as the ",(0,t.jsx)(n.code,{children:"contract_package_hash"}),", the contract ",(0,t.jsx)(n.code,{children:"entry_points"}),", and the ",(0,t.jsx)(n.code,{children:"named_keys"})," for the contract."]}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:"Sample contract state"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n  "id": -4657473054587773855,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "block_header": null,\n    "merkle_proof": "[21330 hex chars]",\n    "stored_value": {\n      "Contract": {\n        "contract_package_hash": "contract-package-76a8c3daa6d6ac799ce9f46d82ac98efb271d2d64b517861ec89a06051ef019e",\n        "contract_wasm_hash": "contract-wasm-576b1718711d524a79ab2f05ce801006a3fd32eb48b9f7dac69a9fa966d634e3",\n        "entry_points": [\n          {\n            "access": "Public",\n            "args": [],\n            "entry_point_type": "Contract",\n            "name": "counter_get",\n            "ret": "I32"\n          },\n          {\n            "access": "Public",\n            "args": [],\n            "entry_point_type": "Contract",\n            "name": "counter_inc",\n            "ret": "Unit"\n          }\n        ],\n        "named_keys": [\n          {\n            "key": "uref-d40613e50c7b405b02795e3fe3252554bef49b4b522e31a55f39b87c442f922a-007",\n            "name": "count"\n          }\n        ],\n        "protocol_version": "1.4.5"\n      }\n    }\n  }\n}\n\n'})}),"\n"]}),"\n",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.h3,{id:"query-a-value-using-its-key-and-the-contract-hash",children:"Query a value using its key and the contract hash"}),"\n",(0,t.jsxs)(n.p,{children:["Next, you can query a named key associated with the contract using the ",(0,t.jsx)(n.code,{children:"-q"})," option. This example comes from the ",(0,t.jsx)(n.a,{href:"/docs-redux/counter",children:"Counter Contract Tutorial"}),', where a "count" variable is incremented and stored under a named key.']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'casper-client query-global-state \\\n  --node-address http://localhost:11101 \\\n  --state-root-hash [STATE_ROOT_HASH] \\\n  --key [CONTRACT_HASH] \\\n  -q "count"\n'})}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:"Sample stored value"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n  "id": -2540117660598287261,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "block_header": null,\n    "merkle_proof": "[56562 hex chars]",\n    "stored_value": {\n      "CLValue": {\n        "bytes": "00000000",\n        "cl_type": "I32",\n        "parsed": 0\n      }\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.h3,{id:"query-a-value-using-the-account-hash-and-named-keys",children:"Query a value using the account hash and named keys"}),"\n",(0,t.jsx)(n.p,{children:'It is also possible to check the state of a specific contract variable in global state given the account hash under which the contract was installed. Here we query the named key "count", stored under another key identifying the contract and named "counter".'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'casper-client query-global-state \\\n  --node-address http://localhost:11101 \\\n  --state-root-hash fa968344a2000282686303f1664c474465f9a028f32ec4f51791d9fa64c0bcd7 \\\n  --key account-hash-1d17e3fdad268f866a73558d1ae45e1eea3924c247871cb63f67ebf1a116e66d \\\n  -q "counter/count"\n'})}),"\n",(0,t.jsx)(n.p,{children:"The response should be the same as in Example 3, above."}),"\n",(0,t.jsx)(n.h3,{id:"query-contract-package-state",children:"Query contract package state"}),"\n",(0,t.jsx)(n.p,{children:"You can query information about a contract package, such as the latest contract hash and contract version, given its contract package hash."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state \\\n  --node-address http://localhost:11101 \\\n  --key hash-76a8c3daa6d6ac799ce9f46d82ac98efb271d2d64b517861ec89a06051ef019e \\\n  --state-root-hash 763e737cf55a298d54bcdfb4ee55526538a1a086128914b9cc25ccbdebbbb966\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here is how the contract package details would look. The response would contain the ",(0,t.jsx)(n.code,{children:"contract_hash"}),", which you would need to ",(0,t.jsx)(n.a,{href:"/docs-redux/developers/cli/calling-contracts#calling-contracts-by-hash",children:"call a contract by hash"})," in the next section. You would also see the ",(0,t.jsx)(n.code,{children:"access_key"})," for the ",(0,t.jsx)(n.code,{children:"ContractPackage"})," and the current ",(0,t.jsx)(n.code,{children:"contract_version"}),"."]}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:"Sample contract package state"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n  "id": -6225901853092301031,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "block_header": null,\n    "merkle_proof": "[20964 hex chars]",\n    "stored_value": {\n      "ContractPackage": {\n        "access_key": "uref-41c3f4ae3c1ce2446f6fd880a96e698ae5abc715151e45e357d88bb739489c03-007",\n        "disabled_versions": [],\n        "groups": [],\n        "versions": [\n          {\n            "contract_hash": "contract-22228188b85b6ee4a4a41c7e98225c3918139e9a5eb4b865711f2e409d85e88e",\n            "contract_version": 1,\n            "protocol_version_major": 1\n          }\n        ]\n      }\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.h2,{id:"video-walkthrough",children:"Video Walkthrough"}),"\n",(0,t.jsx)(n.p,{children:"This video shows you what to expect when querying the network."}),"\n",(0,t.jsxs)(n.p,{align:"center",children:["\n",(0,t.jsx)(n.iframe,{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=9",frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Learn ",(0,t.jsx)(n.a,{href:"/docs-redux/developers/cli/calling-contracts",children:"different ways to call contracts"})," using the Casper command-line client"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var t=a(96540);const s={},c=t.createContext(s);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);