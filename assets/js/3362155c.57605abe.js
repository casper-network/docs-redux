"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[34635],{41901:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"developers/dapps/monitor-and-consume-events","title":"Monitoring and Consuming Events","description":"The Casper platform uses event streaming to signal state changes in smart contracts and nodes. Using Casper\'s client-side SDKs, dApps actively listening for emitted events can consume these events and perform actions based on event data.","source":"@site/versioned_docs/version-1.5.X/developers/dapps/monitor-and-consume-events.md","sourceDirName":"developers/dapps","slug":"/developers/dapps/monitor-and-consume-events","permalink":"/1.5.X/developers/dapps/monitor-and-consume-events","draft":false,"unlisted":false,"tags":[],"version":"1.5.X","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{},"sidebar":"developers","previous":{"title":"Local Network Testing","permalink":"/1.5.X/developers/dapps/nctl-test"},"next":{"title":"Interacting with the Blockchain","permalink":"/1.5.X/developers/cli/"}}');var a=s(74848),i=s(28453);const d={},c="Monitoring and Consuming Events",r={},l=[{value:"Listening to the Event Stream",id:"listening-to-the-event-stream",level:2},{value:"Event Types",id:"event-types",level:2},{value:"ApiVersion",id:"apiversion",level:3},{value:"BlockAdded",id:"blockadded",level:3},{value:"DeployAccepted",id:"deployaccepted",level:3},{value:"DeployProcessed",id:"deployprocessed",level:3},{value:"DeployExpired",id:"deployexpired",level:3},{value:"Fault",id:"fault",level:3},{value:"FinalitySignature",id:"finalitysignature",level:3},{value:"Step",id:"step",level:3},{value:"Shutdown",id:"shutdown",level:3},{value:"Reacting to Events",id:"reacting-to-events",level:2},{value:"Unsubscribing from Events",id:"unsubscribing-from-events",level:2},{value:"Stopping the Event Stream",id:"stopping-the-event-stream",level:2},{value:"Replaying the Event Stream",id:"replaying-the-event-stream",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",tabitem:"tabitem",tabs:"tabs",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';"}),"\n",(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"monitoring-and-consuming-events",children:"Monitoring and Consuming Events"})}),"\n",(0,a.jsx)(n.p,{children:"The Casper platform uses event streaming to signal state changes in smart contracts and nodes. Using Casper's client-side SDKs, dApps actively listening for emitted events can consume these events and perform actions based on event data."}),"\n",(0,a.jsxs)(n.p,{children:["Each Casper node streams events through the SSE (Server Sent Event) server via the port specified as the ",(0,a.jsx)(n.code,{children:"event_stream_server.address"})," in the node's ",(0,a.jsx)(n.em,{children:"config.toml"}),". This port is by default ",(0,a.jsx)(n.code,{children:"9999"})," for nodes on ",(0,a.jsx)(n.a,{href:"https://testnet.cspr.live/tools/peers",children:"Testnet"})," and ",(0,a.jsx)(n.a,{href:"https://cspr.live/tools/peers",children:"Mainnet"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Events are divided into three categories and streamed on their respective endpoints:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Deploy events"})," - Associated with ",(0,a.jsx)(n.a,{href:"/1.5.X/concepts/design/casper-design#execution-semantics-head",children:"Deploys"})," on a node. Currently, only a ",(0,a.jsx)(n.code,{children:"DeployAccepted"})," event is emitted. The URL to consume deploy-related events on Mainnet and Testnet is ",(0,a.jsx)(n.code,{children:"http://<HOST>:9999/events/deploys/"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Finality Signature events"})," - Emitted when a block has been finalized and cannot be altered. The URL to consume finality signature events on Mainnet and Testnet is ",(0,a.jsx)(n.code,{children:"http://<HOST>:9999/events/sigs/"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Main events"})," - All other events fall under this type, including: ",(0,a.jsx)(n.code,{children:"BlockAdded"}),", ",(0,a.jsx)(n.code,{children:"DeployProcessed"}),", ",(0,a.jsx)(n.code,{children:"DeployExpired"}),", ",(0,a.jsx)(n.code,{children:"Fault"}),", ",(0,a.jsx)(n.code,{children:"Step"}),", and ",(0,a.jsx)(n.code,{children:"Shutdown"})," events. The URL to consume these events on Mainnet and Testnet is ",(0,a.jsx)(n.code,{children:"http://<HOST>:9999/events/main/"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["An ",(0,a.jsx)(n.code,{children:"ApiVersion"})," event is always emitted when a new client connects to a node's SSE server, informing the client of the node's software version."]})}),"\n",(0,a.jsx)(n.h2,{id:"listening-to-the-event-stream",children:"Listening to the Event Stream"}),"\n",(0,a.jsx)(n.p,{children:"Applications can listen for such events for a specific account during a particular era, containing certain data. Then, they can parse the data and discard what they do not need. To consume the event stream, set up an event listener in your dApp using the following code:"}),"\n",(0,a.jsxs)(n.tabs,{children:["\n",(0,a.jsxs)(n.tabitem,{value:"js",label:"JavaScript",children:["\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const { EventStream, EventName } = require("casper-js-sdk")\n\nconst es = new EventStream("http://NODE_ADDRESS:9999/events/" + CHANNEL)\nes.start()\nes.subscribe(EventName.EVENT_NAME, eventHandler)\n\nconst eventHandler = (event) => {\n    console.log(event)\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.tabitem,{value:"python",label:"Python",children:["\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from pycspr import NodeClient, NodeConnection, NodeEventChannel, NodeEventType\n\ndef eventHandler(event):\n    print(event)\n\nclient = NodeClient(NodeConnection(host = "NODE_ADDRESS", port_rpc = 7777))\nclient.get_events(eventHandler, NodeEventChannel.CHANNEL, NodeEventType.EVENT_NAME)\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.tabitem,{value:"curl",label:"cURL",children:["\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -s http://NODE_ADDRESS:9999/events/CHANNEL\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can find node addresses of active online peers to replace ",(0,a.jsx)(n.code,{children:"NODE_ADDRESS"}),", by navigating to ",(0,a.jsx)(n.a,{href:"https://cspr.live/tools/peers",children:"cspr.live"})," for Mainnet and ",(0,a.jsx)(n.a,{href:"https://testnet.cspr.live/tools/peers",children:"testnet.cspr.live"})," for Testnet."]}),"\n",(0,a.jsxs)(n.p,{children:["Replace ",(0,a.jsx)(n.code,{children:"EVENT_NAME"})," with one of the event types listed ",(0,a.jsx)(n.a,{href:"#event-types",children:"below"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Replace ",(0,a.jsx)(n.code,{children:"CHANNEL"})," with one of the following event streams:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"main"})," for ",(0,a.jsx)(n.code,{children:"ApiVersion"}),", ",(0,a.jsx)(n.code,{children:"BlockAdded"}),", ",(0,a.jsx)(n.code,{children:"DeployExpired"}),", ",(0,a.jsx)(n.code,{children:"DeployProcessed"}),", ",(0,a.jsx)(n.code,{children:"Fault"}),", or ",(0,a.jsx)(n.code,{children:"Step"})," events."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"deploys"})," for ",(0,a.jsx)(n.code,{children:"DeployAccepted"})," events."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"sigs"})," for ",(0,a.jsx)(n.code,{children:"FinalitySignature"})," events."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"event-types",children:"Event Types"}),"\n",(0,a.jsx)(n.h3,{id:"apiversion",children:"ApiVersion"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"ApiVersion"})," event is always the first event emitted when a new client connects to a node's SSE server. It specifies the protocol version of a node on the Casper platform. The following example contains the JSON representation of the ",(0,a.jsx)(n.code,{children:"ApiVersion"})," event structure."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'data:{"ApiVersion":"1.0.0"}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"blockadded",children:"BlockAdded"}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.code,{children:"BlockAdded"})," event is emitted when a new block is added to the blockchain and stored locally in the node."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Expand to view output"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "BlockAdded": {\n    "block_hash": "62ddf902e9b6988b978413e2a9a2c6c95f8e1ddf452afd8e8a68f0ac22bf391a",\n    "block": {\n      "hash": "62ddf105e9b6988b378413e2a9a2c6c95f8e1ddf458afd8e8268f0ac72bfe91a",\n      "header": {\n        "parent_hash": "ed11ac2117edb9c5b26cf0cde318a807fd68e76206855a70429012ef16b557f5",\n        "state_root_hash": "3c1ad31757ae40f934de4825a818274e0c246d304c661daf656e22b65174ad66",\n        "body_hash": "eb2344f37193395bbc83587e498bc12ad5f0019055abcfa4c3b989d382a7969a",\n        "random_bit": true,\n        "accumulated_seed": "b8b671530f2221c8fdf201083f43c51e215e2f6ffcbe2d63238a2779eb177922",\n        "era_end": null,\n        "timestamp": "2023-01-01T09:55:25.312Z",\n        "era_id": 8426,\n        "height": 1566677,\n        "protocol_version": "1.4.13"\n      },\n      "body": {\n        "proposer": "010e5669b0f0545e2b32bc66363b9d3d4390fca56bf52305f1411b7fa12ca311c7",\n        "deploy_hashes": [],\n        "transfer_hashes": []\n      },\n      "proofs": []\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#block-hash",children:"block_hash"})," - The cryptographic hash that identifies a block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#serialization-standard-block",children:"block"})," - The JSON representation of the block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#body",children:"proposer"})," - The validator selected to propose the block."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"deployaccepted",children:"DeployAccepted"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"DeployAccepted"})," events are emitted when a node on the network receives a deploy."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Expand to view output"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "DeployAccepted": {\n    "hash": "db84ba229ea37716230ac9874f66c0f12b9731d8d42f28060e481ef3d7263ead",\n    "header": {\n      "account": "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c",\n      "timestamp": "2023-01-01T20:22:45.383Z",\n      "ttl": "30m",\n      "gas_price": 1,\n      "body_hash": "8a377b07a01ac23905b2e416ff388508301feffbb9bdf275c59f87be1e9d0de5",\n      "dependencies": [],\n      "chain_name": "casper-test"\n    },\n    "payment": {\n      "ModuleBytes": {\n        "module_bytes": "",\n        "args": [\n          [\n            "amount",\n            {\n              "cl_type": "U512",\n              "bytes": "040008af2f",\n              "parsed": "800000000"\n            }\n          ]\n        ]\n      }\n    },\n    "session": {\n      "StoredContractByHash": {\n        "hash": "1040f40d06f0355a80149befc4b5d1f203231231d66c4903688e178c36066539",\n        "entry_point": "test_entry_point",\n        "args": [\n          [\n            "cost",\n            {\n              "cl_type": "U512",\n              "bytes": "0500c817a804",\n              "parsed": "20000000000"\n            }\n          ]\n        ]\n      }\n    },\n    "approvals": [\n      {\n        "signer": "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c",\n        "signature": "01d81d4dc9504a356c23d3c161b87b39b1708cd282b59d3e44d9b999e787643ab495f168475bed8dc48d1056605e06c8ba74d96c69ae5b506c4312be8871c0c701"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/hash-types",children:"hash"})," - The blake2b hash of the Deploy."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#serialization-standard-account",children:"account"})," - The hexadecimal-encoded public key of the account submitting the Deploy."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/hash-types",children:"body_hash"})," - The blake2b hash of the Deploy body."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/glossary/P#payment-code",children:"payment"})," - Gas payment information."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/developers/writing-onchain-code/contract-vs-session#what-is-session-code",children:"session"})," - The session logic defining the Deploy's functionality."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/developers/json-rpc/types_chain#approval",children:"approvals"})," - The signer's hexadecimal-encoded public key and signature."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For details on custom serializations, check the ",(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard",children:"Serialization Standard"}),". Also, the ",(0,a.jsx)(n.a,{href:"/1.5.X/developers/json-rpc/types_chain",children:"Types"})," page defines the terms used in the event stream output."]}),"\n",(0,a.jsx)(n.h3,{id:"deployprocessed",children:"DeployProcessed"}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.code,{children:"DeployProcessed"})," event is emitted when a given Deploy has been executed."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Expand to view output"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "DeployProcessed": {\n    "deploy_hash": "0f33be8f56ff23d7d503a9804675472e043830a6c17e6141dce717b4f0973c7d",\n    "account": "0201cbff12155b6ae1e99d571c01d56e9e1ba0def6719a6f06bc3e4a08f30a887444",\n    "timestamp": "2023-01-01T10:07:00.401Z",\n    "ttl": "30m",\n    "dependencies": [],\n    "block_hash": "509b754648168a73e6ab67e64d4a783cf580d6fc0c7c0ec560c6650f717841e0",\n    "execution_result": {\n      "Success": {\n        "effect": {\n          "operations": [],\n          "transforms": [\n            {\n              "key": "account-hash-a8261377ef9cf8e7411d6858801c71e28c9322e66355586549c75ab24cdd73f2",\n              "transform": "Identity"\n            },\n          ]\n        },\n        "transfers": [\n          "transfer-3389144d15238240f48f5966f2dc299b6b20eb19c13d834409b4d28fc50fa909"\n        ],\n        "cost": "100000000"\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#deploy-hash",children:"deploy_hash"})," - The cryptographic hash of a Deploy."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#serialization-standard-account",children:"account"})," - The hexadecimal-encoded public key of the account submitting the Deploy."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#timestamp",children:"timestamp"})," - A timestamp type representing a concrete moment in time."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#deploy-header",children:"dependencies"})," - A list of Deploy hashes."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#block-hash",children:"block_hash"})," - A cryptographic hash identifying a Block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#executionresult",children:"execution_result"})," - The execution status of the Deploy, which is either ",(0,a.jsx)(n.code,{children:"Success"})," or ",(0,a.jsx)(n.code,{children:"Failure"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"deployexpired",children:"DeployExpired"}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.code,{children:"DeployExpired"})," event is emitted when the Deploy is no longer valid for processing or being added to a block due to its time to live (TTL) having expired."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Expand to view output"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "DeployExpired": {\n    "deploy_hash": "7ecf22fc284526d6db16fbf455f489e0a9cbf782234131c010cf3078fb9be353"\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#deploy-hash",children:"deploy_hash"})," - The cryptographic hash of a Deploy."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"fault",children:"Fault"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Fault"})," event is emitted if there is a validator error."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Expand the below section to view the Fault event details:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "Fault": {\n    "era_id": 4591448806312642600,\n    "public_key": "013da85eb06279da42e28530e1116be04bfd2aa25ed8d63401ebff4d9153a609a9",\n    "timestamp": "2023-01-01T01:26:58.364Z"\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#eraid",children:"era_id"})," - A period of time during which the validator set does not change."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#publickey",children:"public_key"})," - The hexadecimal-encoded public key of the validator that caused the fault."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#timestamp",children:"timestamp"})," - A timestamp representing the moment the validator faulted."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"finalitysignature",children:"FinalitySignature"}),"\n",(0,a.jsxs)(n.p,{children:["This event indicates validators have signed the final approvals and further alterations to the block will not be allowed. Refer to the ",(0,a.jsx)(n.a,{href:"/1.5.X/deploy-and-deploy-lifecycle#consensus-reached",children:"consensus reached"})," and ",(0,a.jsx)(n.a,{href:"/1.5.X/concepts/glossary/B#block-finality",children:"block finality"})," sections to learn more about finality signatures."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Expand to view output"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "FinalitySignature": {\n    "block_hash": "eceed827e11f7969a7d3fe91d6fa4ce9749dd79d9f3ea26474fe2014db90e98d",\n    "era_id": 8419,\n    "signature": "0117087ef4b9a786e5a0ea8f198050e9de93dd94f87469b8124c346aeae5f36ad9adf80f670ee9c5887263267ed32cf932dce9b370353c596d59f91fbd57a1a205",\n    "public_key": "01c375b425a36de25dc325c9182861679db2f634abcacd9ae2ee27b84ba62ac1f7"\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#block-hash",children:"block_hash"})," - A cryptographic hash identifying a Block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#eraid",children:"era_id"})," - A period of time during which the validator set does not change."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#signature",children:"signature"})," - Serialized bytes representing the validator's signature."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#publickey",children:"public_key"})," - The hexadecimal-encoded public key of the validator."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"step",children:"Step"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Step"})," event is emitted at the end of every era and contains the execution effects produced by running the auction contract's ",(0,a.jsx)(n.code,{children:"step"})," function."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Expand to view output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "Step": {\n    "era_id": 1,\n    "execution_effect": {\n      "operations": [],\n      "transforms": [\n        {\n          "key": "uref-53df18bf01396fbd1ef3a8757c7bdffc684c407d90f2cfeebff166db1d923613-000",\n          "transform": "Identity"\n        },\n        {\n          "key": "uref-f268de37fcea55f8fb1abeba8536a1cc041b2aed2691f1cf34aeaaf0ae379aa5-000",\n          "transform": "Identity"\n        },\n        {\n          "key": "bid-278e5af1ca6cddf5d5438999cb072b47f0d65e1484799f692c3c9c40304be30e",\n          "transform": "Identity"\n        },\n        {\n          "key": "bid-278e5af1ca6cddf5d5438999cb072b47f0d65e1484799f692c3c9c40304be30e",\n          "transform": {\n            "WriteBid": {\n              "validator_public_key": "0133eaae2821f090ac3ba0eadc0a897742094c0604df72b465c41d4b773298a7b9",\n              "bonding_purse": "uref-136552c255d4d737bf7e43d2be250f9f38691b9fe5d9e34446bff18d6d1cf984-007",\n              "staked_amount": "1000000000000005",\n              "delegation_rate": 5,\n              "vesting_schedule": {\n                "initial_release_timestamp_millis": 1664475057182,\n                "locked_amounts": null\n              },\n              "delegators": {\n                "012a241eaa9fa3bd6ccb0e0aaaf4658538f3540e04e2f58973614a168f2f2f813d": {\n                  "delegator_public_key": "012a241eaa9fa3bd6ccb0e0aaaf4658538f3540e04e2f58973614a168f2f2f813d",\n                  "staked_amount": "51312014671568117976319379",\n                  "bonding_purse": "uref-c5ad00f9e6b2f2631ca647ad188187e63799a278a0a46ca25f6b4da64d556662-007",\n                  "validator_public_key": "0133eaae2821f090ac3ba0eadc0a897742094c0604df72b465c41d4b773298a7b9",\n                  "vesting_schedule": {\n                    "initial_release_timestamp_millis": 1664475057182,\n                    "locked_amounts": null\n                  }\n                }\n              },\n              "inactive": false\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#eraid",children:"era_id"})," - A period of time during which the validator set does not change."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#executioneffect",children:"execution_effect"})," - The journal of execution transforms from a single Deploy."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#operation",children:"operations"})," - Operations performed while executing a Deploy."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#transform",children:"transform"})," - The actual transformation performed while executing a Deploy."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"shutdown",children:"Shutdown"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Shutdown"})," event is emitted when the node is about to shut down, usually for an upgrade, causing a termination of the event stream."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Expand the below section to view the Shutdown event details:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'"Shutdown"\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'Shutdown - The "Shutdown" text notifies the event listener that a shutdown will occur.'}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"reacting-to-events",children:"Reacting to Events"}),"\n",(0,a.jsxs)(n.p,{children:["An application may parse each event needed for its use case and respond accordingly. The dApp may act on some events and not others, or it may act upon them all, depending on its use case. Each event type contains additional data that might help in deciding whether or not to take an action. For example, ",(0,a.jsx)(n.code,{children:"DeployAccepted"})," events contain the account's public key that submitted the deploy, the contract address, and more. This information can help determine how to proceed or whether or not to react."]}),"\n",(0,a.jsxs)(n.tabs,{children:["\n",(0,a.jsxs)(n.tabitem,{value:"js",label:"JavaScript",children:["\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const eventHandler = (event) => {\n  if (event.body.DeployAccepted.header.account == "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c") {\n    // Perform an action\n  }\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.tabitem,{value:"python",label:"Python",children:["\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def eventHandler(event):\n  if event["DeployAccepted"]["header"]["account"] == "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c":\n    # Perform an action\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"unsubscribing-from-events",children:"Unsubscribing from Events"}),"\n",(0,a.jsxs)(n.p,{children:["In many cases, an application may need to unsubscribe after a certain time or may want to unsubscribe from some events but not others. The Casper SDKs provide this ability with the ",(0,a.jsx)(n.code,{children:"unsubscribe"})," function:"]}),"\n",(0,a.jsxs)(n.tabs,{children:["\n",(0,a.jsxs)(n.tabitem,{value:"js",label:"JavaScript",children:["\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"es.unsubscribe(EventName.EVENT_NAME)\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"EVENT_NAME"})," - One of the different ",(0,a.jsx)(n.a,{href:"#event-types",children:"event types"})," emitted by a Casper node."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"stopping-the-event-stream",children:"Stopping the Event Stream"}),"\n",(0,a.jsxs)(n.p,{children:["A dApp may cease listening to all events using the ",(0,a.jsx)(n.code,{children:"stop"})," function:"]}),"\n",(0,a.jsxs)(n.tabs,{children:["\n",(0,a.jsxs)(n.tabitem,{value:"js",label:"JavaScript",children:["\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"es.stop()\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"replaying-the-event-stream",children:"Replaying the Event Stream"}),"\n",(0,a.jsxs)(n.p,{children:["This command will replay the event stream from an old event onward. Replace the ",(0,a.jsx)(n.code,{children:"NODE_ADDRESS"}),", ",(0,a.jsx)(n.code,{children:"CHANNEL"}),", and ",(0,a.jsx)(n.code,{children:"ID"})," fields with the values of your scenario."]}),"\n",(0,a.jsxs)(n.tabs,{children:["\n",(0,a.jsxs)(n.tabitem,{value:"curl",label:"cURL",children:["\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -sN http://NODE_ADDRESS:9999/events/CHANNEL?start_from=ID\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Example:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -sN http://65.21.235.219:9999/events/main?start_from=29267508\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Each URL can have a query string added to the form ",(0,a.jsx)(n.code,{children:"?start_from=ID"}),", where ID is an integer representing an old event ID. With this query, you can replay the event stream from that old event onward. If you specify an event ID already purged from the cache, the server will replay all the cached events."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The server keeps only a limited number of events cached to allow replaying the stream to clients using the ",(0,a.jsx)(n.code,{children:"?start_from="})," query string. The cache size can be set differently on each node using the ",(0,a.jsx)(n.code,{children:"event_stream_buffer_length"})," value in the ",(0,a.jsx)(n.em,{children:"config.toml"}),". By default, it is only 5000.\nThe intended use case is to allow a client consuming the event stream that loses its connection to reconnect and catch up with events that were emitted while it was disconnected."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var t=s(96540);const a={},i=t.createContext(a);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);