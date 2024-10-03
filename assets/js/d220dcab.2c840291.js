"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[84941],{85135:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>o});var a=s(74848),r=s(28453);const d={title:"Querying a Node",slug:"/resources/tutorials/beginner/querying-network"},c="Querying a Casper Node",t={id:"resources/beginner/querying-network",title:"Querying a Node",description:"The Casper node supports queries for users and developers to obtain information stored on the blockchain.",source:"@site/versioned_docs/version-1.5.X/resources/beginner/querying-network.md",sourceDirName:"resources/beginner",slug:"/resources/tutorials/beginner/querying-network",permalink:"/1.5.X/resources/tutorials/beginner/querying-network",draft:!1,unlisted:!1,tags:[],version:"1.5.X",frontMatter:{title:"Querying a Node",slug:"/resources/tutorials/beginner/querying-network"},sidebar:"tutorials",previous:{title:"Tutorial Walkthrough",permalink:"/1.5.X/resources/beginner/counter-testnet/walkthrough"},next:{title:"Contract Upgrades",permalink:"/1.5.X/resources/tutorials/beginner/upgrade-contract"}},i={},o=[{value:"Obtaining the Global State Root Hash",id:"obtaining-the-global-state-root-hash",level:2},{value:"Querying an Account",id:"querying-an-account",level:2},{value:"Querying Blocks",id:"querying-blocks",level:2},{value:"Querying Deploys",id:"querying-deploys",level:2}];function l(e){const n={a:"a",code:"code",details:"details",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"querying-a-casper-node",children:"Querying a Casper Node"})}),"\n",(0,a.jsx)(n.p,{children:"The Casper node supports queries for users and developers to obtain information stored on the blockchain."}),"\n",(0,a.jsx)(n.p,{children:"This document assumes:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["You have met the ",(0,a.jsx)(n.a,{href:"/1.5.X/developers/prerequisites",children:"prerequisites"})]}),"\n",(0,a.jsxs)(n.li,{children:["You are familiar with the structure of the ",(0,a.jsx)(n.a,{href:"/1.5.X/design",children:"Global State and the Blockchain Design"})," to query data from the network"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"When sending a query, it is important to note that the request will be routed to a single node in the network. You can request several types of data from a node:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Account details"}),"\n",(0,a.jsx)(n.li,{children:"Block information"}),"\n",(0,a.jsx)(n.li,{children:"Deploy information"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"obtaining-the-global-state-root-hash",children:"Obtaining the Global State Root Hash"}),"\n",(0,a.jsx)(n.p,{children:"Since the system state changes with each block created, obtaining the latest global state hash is essential before querying information from a node."}),"\n",(0,a.jsxs)(n.p,{children:["All queries made to global state require the ",(0,a.jsx)(n.code,{children:"state-root-hash"}),", which you can obtain with this command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash \\\n     --id 1 \\\n     --node-address http://<node-ip-address>:7777\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Request fields:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"id"})," - (STRING OR INTEGER) Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"node-address"})," - An IP address of a node on the network"]}),"\n"]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Explore the JSON-RPC request and response generated."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Request"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "method": "chain_get_state_root_hash",\n    "params": null,\n    "id": 1\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Response"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "state_root_hash": "f97d8d36630a8f4acdb323223596f6fa01ee3b0d49ad70d84d715c156c5dbec6"\n    },\n    "id": 1\n}\n'})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"querying-an-account",children:"Querying an Account"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/design/casper-design#accounts-head",children:"Accounts"})," are stored in the global state and can be queried using the ",(0,a.jsx)(n.code,{children:"query-global-state"})," command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state \\\n  --id 4 \\\n  --node-address http://<node-ip-address>:7777 \\\n  --state-root-hash <state-root-hash> \\\n  --key <hex-encoded-source-account-public-key>\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Request fields:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"id"})," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"node-address"})," - An IP address of a node on the network"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"state-root-hash"})," - Hex-encoded hash of the state root"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"key"})," - The base key for the query. This must be a properly formatted public key, account hash, contract address hash, URef, transfer hash or deploy-info hash."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Important response fields:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:'"result"."stored_value"."Account"."main_purse"'})," - the address of the main purse containing the sender's tokens. This purse is the source of the tokens transferred in this example"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example Account Query with Verbose Output:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state -v \\\n  --id 4 \\\n  --node-address https://rpc.testnet.casperlabs.io/ \\\n  --state-root-hash a306a9cf869e52fe9eacdc28aade94215112cc04b6737b3669c35568a47a7dc2 \\\n  --key 01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986\n"})}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Explore the sample JSON-RPC request and response generated."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Request"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "query_global_state",\n  "params": {\n    "state_identifier": {\n      "StateRootHash": "a306a9cf869e52fe9eacdc28aade94215112cc04b6737b3669c35568a47a7dc2"\n    },\n    "key": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n    "path": []\n  },\n  "id": 4\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Response"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 4,\n  "result": {\n    "api_version": "1.5.2",\n    "block_header": null,\n    "stored_value": {\n      "Account": {\n        "account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n        "named_keys": [\n          {\n            "name": "counter",\n            "key": "hash-4bf23564c8849a0a3193781f0a9df7d27c4bce2cc585d6e9bb161a7a1ce5cd7e"\n          },\n          {\n            "name": "counter_access_uref",\n            "key": "uref-76b6c7e7a87b752d34a8c3ccdc070dbfd1940960016c537525b2ab9076b61a3e-007"\n          },\n          {\n            "name": "counter_package_name",\n            "key": "hash-e4b2060f098fa763f9a68c5c98a2d98a4fa80815ec0fd6b93ac9efbb0c18f19b"\n          },\n          {\n            "name": "my-key-name",\n            "key": "uref-09376d4202d32457ceefa4d9cdf1db6ab2324981ade06ba6f495cdf14124c3b9-007"\n          },\n          {\n            "name": "version",\n            "key": "uref-244a270207dd13ef5ff190f75d84efe4ab54bd5787be0bbb175c3fb154b7f5ed-007"\n          }\n        ],\n        "main_purse": "uref-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c-007",\n        "associated_keys": [\n          {\n            "account_hash": "account-hash-0ea7998b2822afe5b62b08a21d54c941ad791279b089f3f7ede0d72b477eca34",\n            "weight": 1\n          },\n          {\n            "account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n            "weight": 3\n          },\n          {\n            "account_hash": "account-hash-77ea2e433c94c9cb8303942335da458672249d38c1fa5d1d7a7500b862ff52a4",\n            "weight": 1\n          },\n          {\n            "account_hash": "account-hash-d65d053f5017af101b752a9a12ba4c41fe3054b8632998a69193b891eab4caf5",\n            "weight": 1\n          },\n          {\n            "account_hash": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n            "weight": 1\n          },\n          {\n            "account_hash": "account-hash-f1802d2dbd83e41f638eb9b046f762e481d56b27d4aa00817fec77fbb21f944a",\n            "weight": 1\n          }\n        ],\n        "action_thresholds": {\n          "deployment": 2,\n          "key_management": 3\n        }\n      }\n    },\n    "merkle_proof": "[32054 hex chars]"\n  }\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To query the account balance, use the ",(0,a.jsx)(n.code,{children:"query-balance"})," command and the purse identifier, which can be a public key or account hash, implying the main purse of the given account should be used. Alternatively, the purse's URef can be used. The balance returned is in motes (the unit that makes up the Casper token). For full details, run the following help command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client query-balance --help\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client query-balance \\\n--id 6 \\\n--node-address http://<node-ip-address>:7777 \\\n--state-root-hash <state-root-hash> \\\n--purse-identifier <account>\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Request fields:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"id"})," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"node-address"})," - An IP address of a node on the network"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"state-root-hash"})," - Hex-encoded hash of the state root"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"purse-identifier"})," - A public key or account hash, implying the main purse of the given account should be used. Alternatively, the purse's URef."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"-v"})," option generates verbose output, printing the RPC request and response generated. Let's explore an example below."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example Balance Query with Verbose Output:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client query-balance -v \\\n  --id 6 \\\n  --node-address https://rpc.testnet.casperlabs.io/ \\\n  --state-root-hash a306a9cf869e52fe9eacdc28aade94215112cc04b6737b3669c35568a47a7dc2 \\\n  --purse-identifier 01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986\n"})}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Explore the JSON-RPC request and response generated."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Request"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "query_balance",\n  "params": {\n    "state_identifier": {\n      "StateRootHash": "a306a9cf869e52fe9eacdc28aade94215112cc04b6737b3669c35568a47a7dc2"\n    },\n    "purse_identifier": {\n      "main_purse_under_public_key": "01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986"\n    }\n  },\n  "id": 6\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Response"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.5.2",\n    "balance": "164000000000"\n  },\n  "id": 6\n}\n'})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"querying-blocks",children:"Querying Blocks"}),"\n",(0,a.jsx)(n.p,{children:"It is possible to obtain detailed block information from the system. To do this, obtain the hash of the block of interest and send this query to a node in the network. Here is an example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client get-block \\\n      --id 3 \\\n      --node-address http://<node-ip-address>:7777 \\\n      --block-identifier <block-hash> \\\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Request fields:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"id"})," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"node-address"})," - An IP address of a node on the network"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"block-identifier"})," - Hex-encoded block hash or height of the block. If not given, the last block added to the chain as known at the given node will be used"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Important response fields:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:'"result"."block"."header"."state_root_hash"'})," - contains the ",(0,a.jsx)(n.code,{children:"state-root-hash"})," for this block"]}),"\n"]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Explore the JSON-RPC request and response generated."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Request"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "id": 3,\n    "jsonrpc": "2.0",\n    "method": "chain_get_block",\n    "params": {\n        "block_identifier": {\n            "Hash": "7c7e9b0f087bba5ce6fc4bd067b57f69ea3c8109157a3ad7f6d98b8da77d97f9"\n        }\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON-RPC Response"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "id": 3,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "block": {\n            "body": {\n                "deploy_hashes": [],\n                "proposer": "012c6775c0e9e09f93b9450f1c5348c5f6b97895b0f52bb438f781f96ba2675a94",\n                "transfer_hashes": ["ec2d477a532e00b08cfa9447b7841a645a27d34ee12ec55318263617e5740713"]\n            },\n            "hash": "7c7e9b0f087bba5ce6fc4bd067b57f69ea3c8109157a3ad7f6d98b8da77d97f9",\n            "header": {\n                "accumulated_seed": "50b8ac019b7300cd1fdeec050310e61b900e9238aa879929745900a91bd0fc4f",\n                "body_hash": "224076b19c04279ae9b97f620801d5ff40ba64f431fe0d5089ef7cb84fdff45a",\n                "era_end": null,\n                "era_id": 0,\n                "height": 8,\n                "parent_hash": "416f339c4c2ff299c64a4b3271c5ef2ac2297bb40a477ceacce1483451a4db16",\n                "protocol_version": "1.0.0",\n                "random_bit": true,\n                "state_root_hash": "cfdbf775b6671de3787cfb1f62f0c5319605a7c1711d6ece4660b37e57e81aa3",\n                "timestamp": "2021-04-20T18:04:42.368Z"\n            },\n            "proofs": [\n                {\n                    "public_key": "010f50b0116f213ef65b99d1bd54483f92bf6131de2f8aceb7e3f825a838292150",\n                    "signature": "130 chars"\n                },\n                {\n                    "public_key": "012c6775c0e9e09f93b9450f1c5348c5f6b97895b0f52bb438f781f96ba2675a94",\n                    "signature": "130 chars"\n                },\n                {\n                    "public_key": "018d5da83f22c9b65cdfdf9f9fdf9f7c98aa2b8c7bcf14bf855177bbb9c1ac7f0a",\n                    "signature": "130 chars"\n                },\n                {\n                    "public_key": "01b9088b92c8a8d592f6ec8c3e8153d7c55fc0c38b5999a214e37e73a2edd6fe0f",\n                    "signature": "130 chars"\n                },\n                {\n                    "public_key": "01b9e3484d96d5693e6c5fe789e7b28972aa392b054a76d175f079692967f604de",\n                    "signature": "130 chars"\n                }\n            ]\n        }\n    }\n}\n'})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"querying-deploys",children:"Querying Deploys"}),"\n",(0,a.jsxs)(n.p,{children:["Once you submit a deploy to the network, you can check its execution status using ",(0,a.jsx)(n.code,{children:"get-deploy"}),". If the ",(0,a.jsx)(n.code,{children:"execution_results"})," in the output are null, the transaction has not run yet. Note that transactions are finalized upon execution."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client get-deploy \\\n      --id 2 \\\n      --node-address http://<node-ip-address>:7777 \\\n      <deploy-hash>\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Request fields:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"id"})," - JSON-RPC identifier, applied to the request and returned in the response. If not provided, a random integer will be assigned"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"node-address"})," - An IP address of a node on the network"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"deploy-hash"})," - Hex-encoded hash of the deploy"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>t});var a=s(96540);const r={},d=a.createContext(r);function c(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);