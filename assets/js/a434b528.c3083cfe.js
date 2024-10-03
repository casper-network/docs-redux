"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[20884],{77875:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var s=t(74848),a=t(28453);const o={title:"Sending Deploys"},r="Sending Deploys using the Casper Client",c={id:"developers/cli/sending-deploys",title:"Sending Deploys",description:"To install smart contracts on the blockchain, you can send your Wasm to the network via a Deploy. To do this, you will need to meet a few prerequisites:",source:"@site/versioned_docs/version-1.5.X/developers/cli/sending-deploys.md",sourceDirName:"developers/cli",slug:"/developers/cli/sending-deploys",permalink:"/1.5.X/developers/cli/sending-deploys",draft:!1,unlisted:!1,tags:[],version:"1.5.X",frontMatter:{title:"Sending Deploys"},sidebar:"developers",previous:{title:"Undelegating Tokens",permalink:"/1.5.X/developers/cli/undelegate"},next:{title:"Installing Contracts",permalink:"/1.5.X/developers/cli/installing-contracts"}},d={},i=[{value:"Paying for Deploys",id:"paying-for-deploys",level:2},{value:"Monitoring the Event Stream for Deploys",id:"monitoring-the-event-stream-for-deploys",level:2},{value:"Sending a Deploy to the Network",id:"sending-the-deploy",level:2},{value:"Time-to-live",id:"ttl",level:3},{value:"Deploy Payments",id:"deploy-payments",level:3},{value:"Using Arguments with Deploys",id:"using-arguments-with-deploys",level:2},{value:"Advanced Features",id:"advanced-features",level:2},{value:"A Note about Gas Price",id:"a-note-about-gas-price",level:2}];function l(e){const n={a:"a",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"sending-deploys-using-the-casper-client",children:"Sending Deploys using the Casper Client"})}),"\n",(0,s.jsxs)(n.p,{children:["To install smart contracts on the blockchain, you can send your Wasm to the network via a ",(0,s.jsx)(n.a,{href:"/1.5.X/concepts/design/casper-design#execution-semantics-head",children:"Deploy"}),". To do this, you will need to meet a few prerequisites:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You will need a client to interact with the network, such as the ",(0,s.jsx)(n.a,{href:"/1.5.X/developers/prerequisites#install-casper-client",children:"default Casper client"})]}),"\n",(0,s.jsxs)(n.li,{children:["Ensure you have an ",(0,s.jsx)(n.a,{href:"/1.5.X/developers/prerequisites#setting-up-an-account",children:"Account"})," and its associated ",(0,s.jsx)(n.a,{href:"/1.5.X/concepts/accounts-and-keys",children:"keys"})," This account will pay for the Deploy, and its secret key will sign the Deploy"]}),"\n",(0,s.jsx)(n.li,{children:"Ensure this account has enough CSPR tokens to pay for the Deploy"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"paying-for-deploys",children:"Paying for Deploys"}),"\n",(0,s.jsx)(n.p,{children:"CSPR tokens are used to pay for deploys on the Casper Mainnet and Testnet. There are several ways to fund your account:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You may want to ",(0,s.jsx)(n.a,{href:"/1.5.X/users/funding-from-exchanges",children:"transfer tokens from an exchange"})]}),"\n",(0,s.jsxs)(n.li,{children:["You can use a ",(0,s.jsx)(n.a,{href:"/1.5.X/users/token-transfer",children:"block explorer to transfer tokens"})," between accounts' purses"]}),"\n",(0,s.jsxs)(n.li,{children:["You can also ",(0,s.jsx)(n.a,{href:"/1.5.X/developers/cli/transfers/",children:"transfer tokens using the default Casper client"})]}),"\n",(0,s.jsxs)(n.li,{children:["On the Testnet, you can use the ",(0,s.jsx)(n.a,{href:"/1.5.X/users/testnet-faucet",children:"faucet functionality"})," for testing your smart contracts"]}),"\n",(0,s.jsxs)(n.li,{children:["If running a network locally using ",(0,s.jsx)(n.a,{href:"/1.5.X/developers/dapps/nctl-test",children:"NCTL"}),", the tool provides several funded accounts"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"monitoring-the-event-stream-for-deploys",children:"Monitoring the Event Stream for Deploys"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to follow the ",(0,s.jsx)(n.a,{href:"/1.5.X/concepts/design/casper-design#execution-semantics-head",children:"lifecycle"})," of the Deploy, you can start monitoring a node's event stream. This section will focus only on DeployAccepted events, but there are other event types described ",(0,s.jsx)(n.a,{href:"/1.5.X/developers/dapps/monitor-and-consume-events",children:"here"}),". You need the following information to proceed:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The IP address of a ",(0,s.jsx)(n.a,{href:"/1.5.X/developers/prerequisites#acquire-node-address-from-network-peers",children:"peer"})," on the network"]}),"\n",(0,s.jsxs)(n.li,{children:["The port specified as the ",(0,s.jsx)(n.code,{children:"event_stream_server.address"})," in the node's ",(0,s.jsx)(n.em,{children:"config.toml"}),", which is by default 9999 on Mainnet and Testnet"]}),"\n",(0,s.jsxs)(n.li,{children:["The URL for DeployAccepted events, which is ",(0,s.jsx)(n.code,{children:"HOST:PORT"}),"/events/deploys"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"With the following command, you can start watching the event stream for DeployAccepted events. Note the event ID recorded when you send the Deploy in the next section."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -s http://65.21.235.219:9999/events/deploys\n"})}),"\n",(0,s.jsx)(n.h2,{id:"sending-the-deploy",children:"Sending a Deploy to the Network"}),"\n",(0,s.jsxs)(n.p,{children:["You can call the Casper client's ",(0,s.jsx)(n.code,{children:"put-deploy"})," command to put the compiled contract on the chain. In this example, the Deploy will execute in the account's context. See the ",(0,s.jsx)(n.a,{href:"#advanced-features",children:"advanced features"})," section for key delegation."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n    --node-address <HOST:PORT> \\\n    --chain-name casper-test \\\n    --secret-key <PATH> \\\n    --payment-amount <PAYMENT-AMOUNT> \\\n    --session-path <SESSION-PATH>\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777. You can find a list of trusted peers in network's configuration file, ",(0,s.jsx)(n.code,{children:"config.toml"}),". Here is an ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/dev/resources/production/config-example.toml#L131",children:"example"}),". You may send deploys to one of the trusted nodes or use them to query other online nodes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the Deploy"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chain-name"})," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,s.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,s.jsx)(n.em,{children:"casper-test"}),". As you can see, this example uses the Testnet"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"payment-amount"})," - The payment for the Deploy in motes. This example uses 2.5 CSPR, but you need to modify this for your contract. See the ",(0,s.jsx)(n.a,{href:"#a-note-about-gas-price",children:"note"})," below"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"session-path"})," - The path to the contract Wasm, which should point to wherever you compiled the contract (.wasm file) on your computer"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The command will return a deploy hash, which is needed to verify the deploy's execution results. Sending the deploy and receiving the deploy hash does not mean the deploy was processed successfully. Therefore, you must check the deploy execution using the deploy hash. See the deploy lifecycle for more details."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": Each Deploy gets a unique hash, which is part of the cryptographic security of blockchain technology. No two deploys will ever return the same hash."]}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:"Sample put-deploy result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "id": -6958186952964949950,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "deploy_hash": "34550c8b86d5e38260882466e98427c62a27a96d85c13f49041a1579ebf84496"\n  }\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Verify the deploy details with the ",(0,s.jsx)(n.code,{children:"get-deploy"})," command and the ",(0,s.jsx)(n.code,{children:"deploy_hash"})," received above."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client get-deploy \\\n    --node-address <HOST:PORT> <DEPLOY-HASH>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the Deploy succeeded, the ",(0,s.jsx)(n.code,{children:"get-deploy"})," command would return a JSON object with the full deploy details."]}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:"Sample get-deploy result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "id": -3532286620275982221,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "deploy": {\n      "approvals": [\n        {\n          "signature": "015a7b0178e144fbf5ce52147c44a3e6bd6aae898ec6bb47c97b5802f3bcb6cd26331f7db18464cd1e51764c14ceb24b7ab9c4e3595505c32465fc0702e8d5510b",\n          "signer": "01e76e0279a08b96d9d68e6b86c618de24a0c324d7d0c1fa8c035f0bc2af1a396d"\n        }\n      ],\n      "hash": "34550c8b86d5e38260882466e98427c62a27a96d85c13f49041a1579ebf84496",\n      "header": {\n        "account": "01e76e0279a08b96d9d68e6b86c618de24a0c324d7d0c1fa8c035f0bc2af1a396d",\n        "body_hash": "b1956600be3c11d7555ada11426ab1a8bdf36102f59838d6bf69cec321111a22",\n        "chain_name": "casper-test",\n        "dependencies": [],\n        "gas_price": 1,\n        "timestamp": "2022-03-24T12:05:57.579Z",\n        "ttl": "30m"\n      },\n      "payment": {\n        "ModuleBytes": {\n          "args": [\n            [\n              "amount",\n              {\n                "bytes": "05000c774203",\n                "cl_type": "U512",\n                "parsed": "14000000000"\n              }\n            ]\n          ],\n          "module_bytes": ""\n        }\n      },\n      "session": {\n        "ModuleBytes": {\n          "args": [],\n          "module_bytes": "[94478 hex chars]"\n        }\n      }\n    },\n    "execution_results": [\n      {\n        "block_hash": "098b618878a2413393925e1fbf6d3cf92f1208f4f8662a904e86b49b0c4ab9f0",\n        "result": {\n          "Success": {\n            "cost": "13327900740",\n            "effect": {\n              "operations": [],\n              "transforms": [\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-624dbe2395b9d9503fbee82162f1714ebff6b639f96d2084d26d944c354ec4c5",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-9824d60dc3a5c44a20b9fd260a412437933835b52fc683d8ae36e4ec2114843e",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-3a61ed9a3b472f35f4cf1e241d674fad8a5f9509c97a56d62bb03f7bcc4b8474",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-3a61ed9a3b472f35f4cf1e241d674fad8a5f9509c97a56d62bb03f7bcc4b8474",\n                  "transform": {\n                    "WriteCLValue": {\n                      "bytes": "0500279bd1ca",\n                      "cl_type": "U512",\n                      "parsed": "871100000000"\n                    }\n                  }\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": {\n                    "AddUInt512": "14000000000"\n                  }\n                },\n                {\n                  "key": "uref-82a7b5713f2b9b3f9e1b4f2d1f312a5fec7c3a0bed6fa897501913951729dbbf-000",\n                  "transform": {\n                    "WriteCLValue": {\n                      "bytes": "00000000",\n                      "cl_type": "I32",\n                      "parsed": 0\n                    }\n                  }\n                },\n                {\n                  "key": "uref-ea022d75ff618533baf46040cc57692fb7f7840774c979c9dec0b5c3ddcec7e9-000",\n                  "transform": {\n                    "WriteCLValue": {\n                      "bytes": "",\n                      "cl_type": "Unit",\n                      "parsed": null\n                    }\n                  }\n                },\n                {\n                  "key": "hash-4d0e2bfb5d243ea567e9b37aa8229d2b8b01de838c4bd7ca570a178e012d6b82",\n                  "transform": "WriteContractPackage"\n                },\n                {\n                  "key": "hash-4d0e2bfb5d243ea567e9b37aa8229d2b8b01de838c4bd7ca570a178e012d6b82",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-3b69bafcc13b4541dddd7d5492e4754feee41c636990aeb6bf78d58fdd39fc43",\n                  "transform": "WriteContractWasm"\n                },\n                {\n                  "key": "hash-c39dd923df84c637e46e46a8a3326fcf85e43c60814878f44a08efd0074cb523",\n                  "transform": "WriteContract"\n                },\n                {\n                  "key": "hash-4d0e2bfb5d243ea567e9b37aa8229d2b8b01de838c4bd7ca570a178e012d6b82",\n                  "transform": "WriteContractPackage"\n                },\n                {\n                  "key": "account-hash-f407926760b91c2ce3af8bda7448841b3aa68c6e98053331d10819ef2d0a808e",\n                  "transform": {\n                    "AddKeys": [\n                      {\n                        "key": "hash-c39dd923df84c637e46e46a8a3326fcf85e43c60814878f44a08efd0074cb523",\n                        "name": "counter"\n                      }\n                    ]\n                  }\n                },\n                {\n                  "key": "deploy-34550c8b86d5e38260882466e98427c62a27a96d85c13f49041a1579ebf84496",\n                  "transform": {\n                    "WriteDeployInfo": {\n                      "deploy_hash": "34550c8b86d5e38260882466e98427c62a27a96d85c13f49041a1579ebf84496",\n                      "from": "account-hash-f407926760b91c2ce3af8bda7448841b3aa68c6e98053331d10819ef2d0a808e",\n                      "gas": "13327900740",\n                      "source": "uref-3a61ed9a3b472f35f4cf1e241d674fad8a5f9509c97a56d62bb03f7bcc4b8474-007",\n                      "transfers": []\n                    }\n                  }\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-624dbe2395b9d9503fbee82162f1714ebff6b639f96d2084d26d944c354ec4c5",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-8cf5e4acf51f54eb59291599187838dc3bc234089c46fc6ca8ad17e762ae4401",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-010c3fe81b7b862e50c77ef9a958a05bfa98444f26f96f23d37a13c96244cfb7",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "hash-9824d60dc3a5c44a20b9fd260a412437933835b52fc683d8ae36e4ec2114843e",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-0a24ef56971d46bfefbd5590afe20e5f3482299aba74e1a0fc33a55008cf9453",\n                  "transform": "Identity"\n                },\n                {\n                  "key": "balance-98d945f5324f865243b7c02c0417ab6eac361c5c56602fd42ced834a1ba201b6",\n                  "transform": {\n                    "WriteCLValue": {\n                      "bytes": "00",\n                      "cl_type": "U512",\n                      "parsed": "0"\n                    }\n                  }\n                },\n                {\n                  "key": "balance-0a24ef56971d46bfefbd5590afe20e5f3482299aba74e1a0fc33a55008cf9453",\n                  "transform": {\n                    "AddUInt512": "14000000000"\n                  }\n                }\n              ]\n            },\n            "transfers": []\n          }\n        }\n      }\n    ]\n  }\n}\n\n'})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We want to draw your attention to a few properties in the example output:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Execution cost 13327900740 motes, yet we paid 14000000000 motes. See the ",(0,s.jsx)(n.a,{href:"#a-note-about-gas-price",children:"note about gas price"})]}),"\n",(0,s.jsxs)(n.li,{children:['The contract returned no errors. If you see an "Out of gas error", you did not specify a high enough value in the ',(0,s.jsx)(n.code,{children:"--payment-amount"})," arg"]}),"\n",(0,s.jsx)(n.li,{children:"The time-to-live was 30 minutes"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["It is also possible to get a summary of the deploy's information by performing a ",(0,s.jsx)(n.code,{children:"query-global-state"})," command using the Casper client and providing a state root hash or a block hash from a block at or after the one in which the deploy was executed."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address <HOST:PORT>\n\ncasper-client query-global-state --node-address <HOST:PORT> \\\n    --key deploy-<DEPLOY-HASH-HEX-STRING> \\\n    --state-root-hash <STATE-ROOT-HASH-HEX-STRING>\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state --node-address <HOST:PORT> \\\n    --key deploy-<DEPLOY-HASH-HEX STRING>\n    --block-hash <BLOCK-HASH-HEX-STRING>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Run the help command for ",(0,s.jsx)(n.code,{children:"query-global-state"})," to see its usage."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state --help\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ttl",children:"Time-to-live"}),"\n",(0,s.jsxs)(n.p,{children:["Time-to-live is the parameter that determines how long a deploy will wait for execution. The acceptable maximum ",(0,s.jsx)(n.code,{children:"ttl"})," is configurable by chain, with the Casper Mainnet maximum set to ",(0,s.jsx)(n.code,{children:"18hours"}),". If you are sending a deploy to a different network, you will need to check ",(0,s.jsx)(n.code,{children:"chainspec.toml"})," for that network to determine the acceptable maximum. The minimum is theoretically zero, but this will result in an immediate expiration and an invalid deploy."]}),"\n",(0,s.jsxs)(n.p,{children:["In the event of a network outage or other event that prevents execution within the ",(0,s.jsx)(n.code,{children:"ttl"}),", the solution is to resend the deploy in question."]}),"\n",(0,s.jsxs)(n.p,{children:["Should the deploy's ",(0,s.jsx)(n.code,{children:"ttl"})," exceed the allowable limit, or if the deploy expires, the network's deploy acceptor will find the deploy invalid and return a warning."]}),"\n",(0,s.jsx)(n.h3,{id:"deploy-payments",children:"Deploy Payments"}),"\n",(0,s.jsx)(n.p,{children:"Dependent upon the complexity and needs of the Deploy in question, several options exist to allow users to pay for smart contract execution."}),"\n",(0,s.jsxs)(n.p,{children:["The simplest way to pay for a Deploy on the Casper blockchain is to use the host side standard payment functionality. This can be done using an ",(0,s.jsx)(n.strong,{children:"empty"})," ",(0,s.jsx)(n.code,{children:"ModuleBytes"})," as your payment code. However, you must specify the amount within a runtime argument. ",(0,s.jsx)(n.code,{children:"ModuleBytes"})," can also serve as a custom payment contract if it is not empty, but any additional Wasm ran within will come at an additional cost on top of the payment. This includes invalid Wasm, which will still result in additional cost."]}),"\n",(0,s.jsx)(n.p,{children:"You may find the host side functionality of standard payment insufficient for your purposes. In this event, Casper provides the following options for custom payment code:"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022\t",(0,s.jsx)(n.code,{children:"StoredContractByHash"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022\t",(0,s.jsx)(n.code,{children:"StoredContractByName"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022\t",(0,s.jsx)(n.code,{children:"StoredVersionContractByHash"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022\t",(0,s.jsx)(n.code,{children:"StoredVersionContractByName"})]}),"\n",(0,s.jsx)(n.h2,{id:"using-arguments-with-deploys",children:"Using Arguments with Deploys"}),"\n",(0,s.jsxs)(n.p,{children:["The session Wasm (or payment Wasm if you choose to ",(0,s.jsx)(n.em,{children:"not"}),' use the standard payment) of a Deploy often requires arguments to be passed to it when executed. These "runtime args" should be provided by using the ',(0,s.jsx)(n.code,{children:"--session-arg"})," or ",(0,s.jsx)(n.code,{children:"--payment-arg"})," options, once for each arg required. The Casper client provides some examples of how to do this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy --show-arg-examples\n"})}),"\n",(0,s.jsx)(n.h2,{id:"advanced-features",children:"Advanced Features"}),"\n",(0,s.jsxs)(n.p,{children:["Casper networks support complex deploys using multiple signatures. ",(0,s.jsx)(n.a,{href:"/1.5.X/concepts/design/casper-design#accounts-head",children:"Casper Accounts"})," use a powerful permissions model that enables a multi-signature scheme for deploys."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"put-deploy"})," command performs multiple actions under the hood, optimizing the typical use case. It creates a deploy, signs it, and sends the Deploy to the network without allowing multiple signatures. However, it is possible to call the following three commands and separate key management from account creation:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"make-deploy"})," - Creates a Deploy and outputs it to a file or stdout. As a file, the deploy can subsequently be signed by other parties using the ",(0,s.jsx)(n.code,{children:"sign-deploy"})," subcommand and then sent to the network for execution using the ",(0,s.jsx)(n.code,{children:"send-deploy"})," subcommand"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sign-deploy"})," - Reads a previously-saved Deploy from a file, cryptographically signs it, and outputs it to a file or stdout"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"send-deploy"})," - Reads a previously-saved Deploy from a file and sends it to the network for execution"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To sign a Deploy with multiple keys, create the Deploy with the ",(0,s.jsx)(n.code,{children:"make-deploy"})," command. The generated deploy file can be sent to the other signers, who then sign it with their keys by calling the ",(0,s.jsx)(n.code,{children:"sign-deploy"})," for each key. Signatures need to be gathered on the Deploy one after another until all required parties have signed the Deploy. Finally, the signed Deploy is sent to the network with the ",(0,s.jsx)(n.code,{children:"send-deploy"})," command for processing."]}),"\n",(0,s.jsxs)(n.p,{children:["For a step-by-step workflow, visit the ",(0,s.jsx)(n.a,{href:"/1.5.X/developers/cli/transfers/multisig-deploy-transfer",children:"Two-Party Multi-Signature Deploy"})," guide. This workflow describes how a trivial two-party multi-signature scheme for signing and sending deploys can be enforced for an account on a Casper network."]}),"\n",(0,s.jsx)(n.h2,{id:"a-note-about-gas-price",children:"A Note about Gas Price"}),"\n",(0,s.jsx)(n.p,{children:'A common question frequently arises: "How do I know what the payment amount (gas cost) should be?"'}),"\n",(0,s.jsxs)(n.p,{children:["We recommend installing your contracts in a test environment, making sure the cost tables match those of the production Casper network to which you want to send the deploy. If you plan on sending a deploy to ",(0,s.jsx)(n.a,{href:"https://cspr.live/",children:"Mainnet"}),", you can use the ",(0,s.jsx)(n.a,{href:"https://testnet.cspr.live/",children:"Testnet"})," to estimate the payment amount needed for the deploy."]}),"\n",(0,s.jsxs)(n.p,{children:["If your test configuration matches your production ",(0,s.jsx)(n.a,{href:"/1.5.X/concepts/glossary/C#chainspec",children:"chainspec"}),", you can check the deploy status and roughly see how much it would cost. You can estimate the costs in this way and then add a small buffer to be sure. Refer to the ",(0,s.jsx)(n.a,{href:"/1.5.X/runtime#gas-allocation",children:"runtime economics"})," section for more details about gas usage and fees."]}),"\n",(0,s.jsx)(n.p,{children:"Please be aware that sending a deploy always requires payment. This is true regardless of the validity of included Wasm."}),"\n",(0,s.jsxs)(n.p,{children:["If the deploy failure occurs after session execution begins, the penalty payment of 2.5 CSPR is included in the gas costs of the ",(0,s.jsx)(n.a,{href:"/1.5.X/concepts/serialization-standard#executionresult",children:"failed execution"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"However, if the failure occurs prior to session execution, the penalty payment will not appear within the gas cost of the deploy. Instead, the system automatically deducts the 2.5 CSPR from the sending account's main purse."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(96540);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);