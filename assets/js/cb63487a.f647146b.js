"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[59081],{68736:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=a(74848),t=a(28453);const r={title:"Querying Global State"},c="Querying Global State",d={id:"developers/cli/querying-global-state",title:"Querying Global State",description:"This page explains how to query global state to find account, contract, and package details.",source:"@site/docs/developers/cli/querying-global-state.md",sourceDirName:"developers/cli",slug:"/developers/cli/querying-global-state",permalink:"/docs-redux/developers/cli/querying-global-state",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Querying Global State"},sidebar:"developers",previous:{title:"Verifying Contracts",permalink:"/docs-redux/developers/cli/verifying-contracts"},next:{title:"Calling Contracts",permalink:"/docs-redux/developers/cli/calling-contracts"}},i={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting the State Root Hash",id:"get-state-root-hash",level:2},{value:"Querying an Account",id:"querying-an-account",level:2},{value:"Querying a Contract",id:"querying-a-contract",level:2},{value:"Querying a Package",id:"querying-a-package",level:2},{value:"Querying a Named Key",id:"querying-a-named-key",level:2},{value:"Query a value using the contract address hash and its named key",id:"query-a-value-using-the-contract-address-hash-and-its-named-key",level:3},{value:"Query a value using the account hash and its named key",id:"query-a-value-using-the-account-hash-and-its-named-key",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"querying-global-state",children:"Querying Global State"})}),"\n",(0,s.jsx)(n.p,{children:"This page explains how to query global state to find account, contract, and package details."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You have an account and have ",(0,s.jsx)(n.a,{href:"/docs-redux/developers/cli/installing-contracts",children:"installed a contract"})," on a Casper network."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"get-state-root-hash",children:"Getting the State Root Hash"}),"\n",(0,s.jsx)(n.p,{children:"The first step in querying global state is obtaining the state root hash, which acts as an identifier for the current state of the network. It is like a Git commit ID for commit history, providing a snapshot of the blockchain state at a specific time."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"After sending transactions to the network, it's necessary to fetch the new state root hash to see the changes reflected in the global state. Without doing this, you would be querying past versions of the state."})}),"\n",(0,s.jsxs)(n.p,{children:["To get the state root hash, use the ",(0,s.jsx)(n.code,{children:"get-state-root-hash"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address [NODE_SERVER_ADDRESS]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Sample request:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address http://localhost:11101\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Sample response:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": -4225403855447288375,\n  "result": {\n    "api_version": "2.0.0",\n    "state_root_hash": "6b5849caa605acdc29564f303764396a27ef7a6b1a61f7b13109b129e7e70d81"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"querying-an-account",children:"Querying an Account"}),"\n",(0,s.jsx)(n.p,{children:"To find your account details, start by querying global state using the account hash. The response will contain the entity account identifier, needed to query more details about the account. You will need the following information:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"node address"}),", representing an IP address of a peer on the network."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"state root hash"}),", as a hex-encoded hash of the state root."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"key"})," identifier for the query, which in this case would be the account hash."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state \\\n--node-address [NODE_SERVER_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [ACCOUNT_HASH]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Sample request:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state \\\n--node-address http://localhost:11101 \\\n--state-root-hash 6b5849caa605acdc29564f303764396a27ef7a6b1a61f7b13109b129e7e70d81 \\\n--key account-hash-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Sample response:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 2591514718461273084,\n  "result": {\n    "api_version": "2.0.0",\n    "block_header": null,\n    "stored_value": {\n      "CLValue": {\n        "cl_type": "Key",\n        "bytes": "11016a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463",\n        "parsed": "entity-account-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463"\n      }\n    },\n    "merkle_proof": "[2566 hex chars]"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Next, see more account details using the ",(0,s.jsx)(n.code,{children:"get-entity"})," command and the entity identifier or the account hash. Both commands will produce the same output. You will need the following information:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"node address"}),", representing an IP address of a peer on the network."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"identifier"})," for an addressable entity or an account. This can be an entity hash, a public key, or an account hash."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client get-entity \\\n--node-address [NODE_SERVER_ADDRESS] \\\n--entity-identifier [FORMATTED_STRING_OR_PATH]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Sample requests:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client get-entity \\\n--node-address http://localhost:11101 \\\n--entity-identifier entity-account-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463\n"})}),"\n",(0,s.jsx)(n.p,{children:"OR"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client get-entity \\\n--node-address http://localhost:11101 \\\n--entity-identifier account-hash-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Sample response:"})}),"\n",(0,s.jsx)(n.p,{children:'Notice that the sample response contains several named keys, including "counter", "counter_package_name", and "version". You can use these values to query the contract state further, as shown in the next example.'}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:"Expand to see the sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 4470312592511523509,\n  "result": {\n    "api_version": "2.0.0",\n    "entity": {\n      "AddressableEntity": {\n        "entity": {\n          "protocol_version": "2.0.0",\n          "entity_kind": {\n            "Account": "account-hash-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463"\n          },\n          "package_hash": "package-1bf60faed9931e95e99912aa82f545a85f374dcbcd0c145ee2a5820b39b31d51",\n          "byte_code_hash": "byte-code-0000000000000000000000000000000000000000000000000000000000000000",\n          "main_purse": "uref-21dc8fc358c4e30ae29786bd4842a5f99da83efa0b9ca8461cd2196ffbfd07f1-007",\n          "associated_keys": [\n            {\n              "account_hash": "account-hash-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463",\n              "weight": 1\n            }\n          ],\n          "action_thresholds": {\n            "deployment": 1,\n            "upgrade_management": 1,\n            "key_management": 1\n          },\n          "message_topics": []\n        },\n        "named_keys": [\n          {\n            "name": "counter",\n            "key": "entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68"\n          },\n          {\n            "name": "counter_access_uref",\n            "key": "uref-29feb2af8a9d7b6d2ef6be875a0aa326b646a00b7cdd2dd4a65365e84e9f2e9a-007"\n          },\n          {\n            "name": "counter_package_name",\n            "key": "package-50d487af45f8cec533c6813801a7630ff97e5ee3964daf7915d5451b4812ac94"\n          },\n          {\n            "name": "version",\n            "key": "uref-7bc25880db57763fccfa858185becd8de40a890d9e006e067352f011bdcf03bf-007"\n          }\n        ],\n        "entry_points": []\n      }\n    },\n    "merkle_proof": "[3010 hex chars]"\n  }\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.br,{}),(0,s.jsx)(n.br,{})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"If you don't know your account hash, run this command:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client account-address --public-key [PATH_TO_PUBLIC_KEY]\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"querying-a-contract",children:"Querying a Contract"}),"\n",(0,s.jsxs)(n.p,{children:["Query global state given the contract identifier and the ",(0,s.jsx)(n.code,{children:"query-global-state"}),' command. The contract is stored under the account\'s named keys, with the key named "counter" and identifier ',(0,s.jsx)(n.code,{children:"entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68"}),". The output will contain the contract's ",(0,s.jsx)(n.code,{children:"package_hash"}),", ",(0,s.jsx)(n.code,{children:"main_purse"}),", ",(0,s.jsx)(n.code,{children:"associated_keys"}),", and ",(0,s.jsx)(n.code,{children:"action_thresholds"}),", but will not contain further details such as the contract's named keys and entry points. You will need to run the ",(0,s.jsx)(n.code,{children:"get-entity"})," command instead for those details."]}),"\n",(0,s.jsxs)(n.p,{children:["For the ",(0,s.jsx)(n.code,{children:"query-global-state"})," command, you will need the following information:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"node address"}),", representing an IP address of a peer on the network."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"state root hash"}),", as a hex-encoded hash of the state root."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"key"})," identifier for the query, which in this case would be the contract address hash."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state \\\n--node-address [NODE_SERVER_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [CONTRACT_ADDRESS_HASH]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Sample request:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'casper-client query-global-state \\\n--node-address http://localhost:11101 \\\n--state-root-hash 6b5849caa605acdc29564f303764396a27ef7a6b1a61f7b13109b129e7e70d81 \\\n--key "entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68"\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Sample response:"})}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:"Expand to see the sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": -750547909804067196,\n  "result": {\n    "api_version": "2.0.0",\n    "block_header": null,\n    "stored_value": {\n      "AddressableEntity": {\n        "protocol_version": "2.0.0",\n        "entity_kind": {\n          "SmartContract": "VmCasperV1"\n        },\n        "package_hash": "package-50d487af45f8cec533c6813801a7630ff97e5ee3964daf7915d5451b4812ac94",\n        "byte_code_hash": "byte-code-0577a7c92fd20e1af76aa9e257631cb240e8187191bba2025e88663d0288e936",\n        "main_purse": "uref-2cb7e46fcde2c4d395a6850bb3b7edbb0b4db6018643e535fa0dfdeeb006d6ef-007",\n        "associated_keys": [\n          {\n            "account_hash": "account-hash-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463",\n            "weight": 1\n          }\n        ],\n        "action_thresholds": {\n          "deployment": 1,\n          "upgrade_management": 1,\n          "key_management": 1\n        },\n        "message_topics": []\n      }\n    },\n    "merkle_proof": "[1508 hex chars]"\n  }\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Next, query global state given the contract identifier and the ",(0,s.jsx)(n.code,{children:"get-entity"})," command, which will provide more details such as the contract's ",(0,s.jsx)(n.code,{children:"entry_points"})," and ",(0,s.jsx)(n.code,{children:"named_keys"}),". You will need the following information:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"node address"}),", representing an IP address of a peer on the network."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"entity identifier"})," for an addressable entity or an account. This can be an entity hash, a public key, or an account hash."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client get-entity \\\n--node-address [NODE_SERVER_ADDRESS] \\\n--entity-identifier [FORMATTED_STRING_OR_PATH]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Sample request:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client get-entity \\\n--node-address http://localhost:11101 \\\n--entity-identifier entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Sample response:"})}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:"Expand to see the sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": -530362264865678930,\n  "result": {\n    "api_version": "2.0.0",\n    "entity": {\n      "AddressableEntity": {\n        "entity": {\n          "protocol_version": "2.0.0",\n          "entity_kind": {\n            "SmartContract": "VmCasperV1"\n          },\n          "package_hash": "package-50d487af45f8cec533c6813801a7630ff97e5ee3964daf7915d5451b4812ac94",\n          "byte_code_hash": "byte-code-0577a7c92fd20e1af76aa9e257631cb240e8187191bba2025e88663d0288e936",\n          "main_purse": "uref-2cb7e46fcde2c4d395a6850bb3b7edbb0b4db6018643e535fa0dfdeeb006d6ef-007",\n          "associated_keys": [\n            {\n              "account_hash": "account-hash-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463",\n              "weight": 1\n            }\n          ],\n          "action_thresholds": {\n            "deployment": 1,\n            "upgrade_management": 1,\n            "key_management": 1\n          },\n          "message_topics": []\n        },\n        "named_keys": [\n          {\n            "name": "count",\n            "key": "uref-65f3f583bf1ac01b6c90d9c9478bd239c09e46f48fb693918726eaab03631407-007"\n          }\n        ],\n        "entry_points": [\n          {\n            "V1CasperVm": {\n              "name": "counter_get",\n              "args": [],\n              "ret": "I32",\n              "access": "Public",\n              "entry_point_type": "Called",\n              "entry_point_payment": "Caller"\n            }\n          },\n          {\n            "V1CasperVm": {\n              "name": "counter_inc",\n              "args": [],\n              "ret": "Unit",\n              "access": "Public",\n              "entry_point_type": "Called",\n              "entry_point_payment": "Caller"\n            }\n          }\n        ]\n      }\n    },\n    "merkle_proof": "[1508 hex chars]"\n  }\n}\n'})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"querying-a-package",children:"Querying a Package"}),"\n",(0,s.jsx)(n.p,{children:"You can query information about a package, given its package hash. You will need the following information:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"node address"}),", representing an IP address of a peer on the network."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"state root hash"}),", as a hex-encoded hash of the state root."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"key"})," identifier for the query, which in this case would be the package identifier."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state \\\n--node-address [NODE_SERVER_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [PACKAGE_ADDRESS]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Sample request:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state \\\n--node-address http://localhost:11101 \\\n--state-root-hash 6b5849caa605acdc29564f303764396a27ef7a6b1a61f7b13109b129e7e70d81 \\\n--key package-1bf60faed9931e95e99912aa82f545a85f374dcbcd0c145ee2a5820b39b31d51\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Sample response:"})}),"\n",(0,s.jsxs)(n.p,{children:["The response would contain the ",(0,s.jsx)(n.code,{children:"addressable_entity_hash"}),", the ",(0,s.jsx)(n.code,{children:"lock_status"})," for the ",(0,s.jsx)(n.code,{children:"Package"}),", and the current ",(0,s.jsx)(n.code,{children:"entity_version"}),"."]}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:"Expand to see the sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'{\n  "jsonrpc": "2.0",\n  "id": -8280509649720542989,\n  "result": {\n    "api_version": "2.0.0",\n    "block_header": null,\n    "stored_value": {\n      "Package": {\n        "versions": [\n          {\n            "entity_version_key": {\n              "protocol_version_major": 2,\n              "entity_version": 1\n            },\n            "addressable_entity_hash": "addressable-entity-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463"\n          }\n        ],\n        "disabled_versions": [],\n        "groups": [],\n        "lock_status": "Unlocked"\n      }\n    },\n    "merkle_proof": "[2934 hex chars]"\n  }\n}\n'})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"querying-a-named-key",children:"Querying a Named Key"}),"\n",(0,s.jsxs)(n.p,{children:["You can dive into the data stored in global state using the optional query path argument ",(0,s.jsx)(n.code,{children:"-q"})," or ",(0,s.jsx)(n.code,{children:"--query-path"}),". You will need the following information:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"node address"}),", representing an IP address of a peer on the network."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"state root hash"}),", as a hex-encoded hash of the state root."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"key"})," identifier for the query. This must be a properly formatted public key, account hash, contract address hash, URef, transfer hash, deploy-info hash,era-info number, bid, withdraw or dictionary address."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"query path"}),", entered in this instance as ",(0,s.jsx)(n.code,{children:"q"}),", which is an optional query path argument that allows you to drill into the specifics of a query with respect to the key."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'casper-client query-global-state \\\n--node-address [NODE_SERVER_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [HASH_STRING] \\\n-q "PATH_FROM_KEY"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"query-a-value-using-the-contract-address-hash-and-its-named-key",children:"Query a value using the contract address hash and its named key"}),"\n",(0,s.jsxs)(n.p,{children:["Next, you can query a named key associated with the contract using the ",(0,s.jsx)(n.code,{children:"query-global-state"})," command and the ",(0,s.jsx)(n.code,{children:"-q"})," option."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'casper-client query-global-state \\\n--node-address http://localhost:11101 \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [CONTRACT_ADDRESS_HASH] \\\n-q "count"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sample request"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'casper-client query-global-state \\\n--node-address http://localhost:11101 \\\n--state-root-hash 6b5849caa605acdc29564f303764396a27ef7a6b1a61f7b13109b129e7e70d81 \\\n--key "entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68" \\\n-q "count"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sample response"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": -672620332620630019,\n  "result": {\n    "api_version": "2.0.0",\n    "block_header": null,\n    "stored_value": {\n      "CLValue": {\n        "cl_type": "I32",\n        "bytes": "00000000",\n        "parsed": 0\n      }\n    },\n    "merkle_proof": "[7272 hex chars]"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"query-a-value-using-the-account-hash-and-its-named-key",children:"Query a value using the account hash and its named key"}),"\n",(0,s.jsx)(n.p,{children:'It is also possible to check the state of a specific contract variable in global state given the account hash under which the contract was installed. Here we query the named key "count", stored under another key identifying the contract and named "counter".'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'casper-client query-global-state \\\n  --node-address http://localhost:11101 \\\n  --state-root-hash [STATE_ROOT_HASH] \\\n  --key [ACCOUNT_HASH] \\\n  -q "counter/count"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sample request"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'casper-client query-global-state \\\n  --node-address http://localhost:11101 \\\n  --state-root-hash 6b5849caa605acdc29564f303764396a27ef7a6b1a61f7b13109b129e7e70d81 \\\n  --key account-hash-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463 \\\n  -q "counter/count"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sample response"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": -8997536139716357387,\n  "result": {\n    "api_version": "2.0.0",\n    "block_header": null,\n    "stored_value": {\n      "CLValue": {\n        "cl_type": "I32",\n        "bytes": "00000000",\n        "parsed": 0\n      }\n    },\n    "merkle_proof": "[14486 hex chars]"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Learn ",(0,s.jsx)(n.a,{href:"/docs-redux/developers/cli/calling-contracts",children:"different ways to call contracts"})," using the Casper command-line client."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>d});var s=a(96540);const t={},r=s.createContext(t);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);