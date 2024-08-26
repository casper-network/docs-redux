"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[1790],{440:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>f,contentTitle:()=>s,default:()=>i,frontMatter:()=>t,metadata:()=>r,toc:()=>o});var c=a(74848),d=a(28453);const t={},s="Transactional JSON-RPC Methods {#transactional}",r={id:"developers/json-rpc/json-rpc-transactional",title:"Transactional JSON-RPC Methods",description:"transactional}",source:"@site/docs/developers/json-rpc/json-rpc-transactional.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/json-rpc-transactional",permalink:"/docs-redux/next/developers/json-rpc/json-rpc-transactional",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Required Methods for Minimal Compliance",permalink:"/docs-redux/next/developers/json-rpc/minimal-compliance"},next:{title:"Informational JSON-RPC Methods",permalink:"/docs-redux/next/developers/json-rpc/json-rpc-informational"}},f={},o=[{value:"account_put_deploy",id:"account-put-deploy",level:2},{value:"<code>account_put_deploy_result</code>",id:"account_put_deploy_result",level:3},{value:"speculative_exec",id:"speculative_exec",level:2},{value:"<code>speculative_exec_result</code>",id:"speculative_exec_result",level:3}];function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"transactional",children:"Transactional JSON-RPC Methods"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"account-put-deploy",children:"account_put_deploy"}),"\n",(0,c.jsxs)(n.p,{children:["This is the only means by which users can send their compiled Wasm (as part of a Deploy) to a node on a Casper network. The request takes in the ",(0,c.jsx)(n.a,{href:"/docs-redux/next/concepts/design/casper-design#execution-semantics-head",children:"Deploy"})," as a parameter, prior to sending it to a node on a network for execution."]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Parameter"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs-redux/next/developers/json-rpc/types_chain#deploy",children:"deploy"})}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"A Deploy consists of an item containing a smart contract along with the requester's signature(s)."})]})})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Note"}),": You can find a list of ",(0,c.jsx)(n.a,{href:"/docs-redux/next/operators/setup/joining",children:"trusted peers"})," in the network's configuration file, ",(0,c.jsx)(n.code,{children:"config.toml"}),". Here is an ",(0,c.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/dev/resources/production/config-example.toml#L131",children:"example config.toml"}),". You may send deploys to one of the trusted nodes or use them to query other online nodes."]}),"\n"]}),"\n",(0,c.jsxs)(a,{children:[(0,c.jsx)("summary",{children:"Example account_put_deploy request"}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'\n{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "method": "account_put_deploy",\n  "params": [\n    {\n      "approvals": [\n        {\n          "signer": "01f8b29f39c38600ecb3bbb082951e04ab63a4ad4f7c9048a5057e461a5a8d58a5",\n          "signature": "019d6ef5c62c80ad4e50df343fba6f0fced17dea4c65e7976f66335ffcfcde2a7f02e928c8507cef3c76c3151e0e9cc9c3f7838b9f7a99ac4be5522ca092841100"\n        }\n      ],\n      "hash": "00a8677713222df88b6988926e0b14adeda6c663957f5075003395da4e5c6888",\n      "header": {\n        "account": "01f8b29f39c38600ecb3bbb082951e04ab63a4ad4f7c9048a5057e461a5a8d58a5",\n        "body_hash": "145ae09d6da5bc290051db8cb7132a41a30473d5900eaaf409d92b666325ca00",\n        "chain_name": "casper-net-1",\n        "dependencies": [\n          "0101010101010101010101010101010101010101010101010101010101010101"\n        ],\n        "gas_price": 1,\n        "timestamp": "2023-09-26T14:07:10.024Z",\n        "ttl": "1h"\n      },\n      "payment": {\n        "StoredContractByName": {\n          "args": [\n            [\n              "amount",\n              {\n                "bytes": "0400f90295",\n                "cl_type": "U512"\n              }\n            ]\n          ],\n          "entry_point": "example-entry-point",\n          "name": "casper-example"\n        }\n      },\n      "session": {\n        "Transfer": {\n          "args": [\n            [\n              "amount",\n              {\n                "cl_type": "U512",\n                "bytes": "0400f90295"\n              }\n            ],\n            [\n              "target",\n              {\n                "cl_type": "URef",\n                "bytes": "09480c3248ef76b603d386f3f4f8a5f87f597d4eaffd475433f861af187ab5db07"\n              }\n            ]\n          ]\n        }\n      }\n    }\n  ]\n}\n\n'})})]}),"\n",(0,c.jsx)(n.h3,{id:"account_put_deploy_result",children:(0,c.jsx)(n.code,{children:"account_put_deploy_result"})}),"\n",(0,c.jsxs)(n.p,{children:["The result contains the ",(0,c.jsx)(n.a,{href:"/docs-redux/next/developers/json-rpc/types_chain#deployhash",children:"deploy_hash"}),", which is the primary identifier of a Deploy within a Casper network."]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Parameter"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"api_version"}),(0,c.jsx)(n.td,{children:"String"}),(0,c.jsx)(n.td,{children:"The RPC API version."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs-redux/next/developers/json-rpc/types_chain#deployhash",children:"deploy_hash"})}),(0,c.jsx)(n.td,{children:"String"}),(0,c.jsx)(n.td,{children:"A hex-encoded hash of the Deploy as sent."})]})]})]}),"\n",(0,c.jsxs)(a,{children:[(0,c.jsx)("summary",{children:"Example account_put_deploy result"}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'\n{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.13",\n    "deploy_hash": "5c9b3b099c1378aa8e4a5f07f59ff1fcdc69a83179427c7e67ae0377d94d93fa"\n  }\n}\n\n'})})]}),"\n",(0,c.jsx)(n.h2,{id:"speculative_exec",children:"speculative_exec"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"speculative_exec"})," endpoint provides a method to execute a ",(0,c.jsx)(n.code,{children:"Deploy"})," without committing its execution effects to global state. By default, ",(0,c.jsx)(n.code,{children:"speculative_exec"})," is disabled on a node. Sending a request to a node with the endpoint disabled will result in an error message. If enabled, ",(0,c.jsx)(n.code,{children:"speculative_exec"})," operates on a separate port from the primary JSON-RPC, using 7778."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"speculative_exec"})," executes a Deploy at a specified block. In the case of this endpoint, the execution effects are not committed to global state. As such, it can be used for observing the execution effects of a Deploy without paying for the execution of the Deploy."]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Parameter"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs-redux/next/developers/json-rpc/types_chain#blockidentifier",children:"block_identifier"})}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"The block hash or height on top of which to execute the deploy. If not supplied,the most recent block will be used."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs-redux/next/developers/json-rpc/types_chain#deploy",children:"deploy"})}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"A Deploy consists of an item containing a smart contract along with the requester's signature(s)."})]})]})]}),"\n",(0,c.jsxs)(a,{children:[(0,c.jsx)("summary",{children:"Example speculative_exec request"}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'\n{\n  "jsonrpc": "2.0",\n  "method": "speculative_exec",\n  "params": {\n    "block_identifier": null,\n    "deploy": {\n      "hash": "b6aa46333fb858deee7f259a5bca581251c6200a5d902aeb1244c3a7169b5971",\n      "header": {\n        "account": "01a2905e4680aa49e0b44100d9dfc861b9605bb35f9956b1e99eb43863363d80aa",\n        "timestamp": "2023-05-23T13:32:45.554Z",\n        "ttl": "30m",\n        "gas_price": 1,\n        "body_hash": "74db109805bb20de43ef89a5b084544a858908b236601519d5827cd9b7fbb925",\n        "dependencies": [],\n        "chain_name": "integration-test"\n      },\n      "payment": {\n        "ModuleBytes": {\n          "module_bytes": "",\n          "args": [\n            [\n              "amount",\n              {\n                "cl_type": "U512",\n                "bytes": "0400e1f505",\n                "parsed": "100000000"\n              }\n            ]\n          ]\n        }\n      },\n      "session": {\n        "Transfer": {\n          "args": [\n            [\n              "amount",\n              {\n                "cl_type": "U512",\n                "bytes": "0400f90295",\n                "parsed": "2500000000"\n              }\n            ],\n            [\n              "target",\n              {\n                "cl_type": "PublicKey",\n                "bytes": "01265ea737411b349ad3d0fc724c2c588acd2765c057e5c690cd5e3dade401782b",\n                "parsed": "01265ea737411b349ad3d0fc724c2c588acd2765c057e5c690cd5e3dade401782b"\n              }\n            ],\n            [\n              "id",\n              {\n                "cl_type": {\n                  "Option": "U64"\n                },\n                "bytes": "010000000000000000",\n                "parsed": 0\n              }\n            ]\n          ]\n        }\n      },\n      "approvals": [\n        {\n          "signer": "01a2905e4680aa49e0b44100d9dfc861b9605bb35f9956b1e99eb43863363d80aa",\n          "signature": "01c94d517d5bbc8d5c74e0e68b8cb308561ff979a1c91907b56d427cc90156c437726c0b736d17f7303f2db66e405c7e5c8175b8b863703938eff1659766dff808"\n        }\n      ]\n    }\n  },\n  "id": 6889533540839698701\n}\n\n'})})]}),"\n",(0,c.jsx)(n.h3,{id:"speculative_exec_result",children:(0,c.jsx)(n.code,{children:"speculative_exec_result"})}),"\n",(0,c.jsx)(n.p,{children:"The result contains the hash of the targeted block and the results of the execution."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Parameter"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"api_version"}),(0,c.jsx)(n.td,{children:"String"}),(0,c.jsx)(n.td,{children:"The RPC API version."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs-redux/next/developers/json-rpc/types_chain#blockhash",children:"block_hash"})}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"The Block hash on top of which the deploy was executed."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs-redux/next/developers/json-rpc/types_chain#executionresult",children:"execution_results"})}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"The map of Block hash to execution result."})]})]})]}),"\n",(0,c.jsxs)(a,{children:[(0,c.jsx)("summary",{children:"Example speculative_exec result"}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'\n{\n  "jsonrpc": "2.0",\n  "id": -8801853076373554652,\n  "result": {\n    "api_version": "1.5.0",\n    "block_hash": "ff862326b08702a5089d64e32100537b7ff984cac4c0ba6d1c561f7c47125f76",\n    "execution_result": {\n      "Success": {\n        "effect": {\n          "operations": [],\n          "transforms": [\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "account-hash-f466e7f5f9240fb577d1d4c650c4063752553406dff7aa24b4822ba2b72e5b65",\n              "transform": "Identity"\n            },\n            {\n              "key": "account-hash-f466e7f5f9240fb577d1d4c650c4063752553406dff7aa24b4822ba2b72e5b65",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-0a300922655180354a9ee92b808c7b45b08e5b01d9da0bac9a9b3415bcebbf8d",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-59c6451dd58463708fa0b122e97114f07fa5f609229c9d67ac9426935416fbeb",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-7c25ef9382fcae902b922866434f7111a1b34534323e93ff5bf22f1a401c2678",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-ea3c9bdcbe57f067a29609d397981b2d0fb39853a0a9f06e444b06404eadcb1a",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-7c25ef9382fcae902b922866434f7111a1b34534323e93ff5bf22f1a401c2678",\n              "transform": {\n                "WriteCLValue": {\n                  "cl_type": "U512",\n                  "bytes": "05f0e630ed87",\n                  "parsed": "583799990000"\n                }\n              }\n            },\n            {\n              "key": "balance-ea3c9bdcbe57f067a29609d397981b2d0fb39853a0a9f06e444b06404eadcb1a",\n              "transform": {\n                "AddUInt512": "100000000"\n              }\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "account-hash-f466e7f5f9240fb577d1d4c650c4063752553406dff7aa24b4822ba2b72e5b65",\n              "transform": "Identity"\n            },\n            {\n              "key": "account-hash-f466e7f5f9240fb577d1d4c650c4063752553406dff7aa24b4822ba2b72e5b65",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-0a300922655180354a9ee92b808c7b45b08e5b01d9da0bac9a9b3415bcebbf8d",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-59c6451dd58463708fa0b122e97114f07fa5f609229c9d67ac9426935416fbeb",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-7c25ef9382fcae902b922866434f7111a1b34534323e93ff5bf22f1a401c2678",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-ea3c9bdcbe57f067a29609d397981b2d0fb39853a0a9f06e444b06404eadcb1a",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-7c25ef9382fcae902b922866434f7111a1b34534323e93ff5bf22f1a401c2678",\n              "transform": {\n                "WriteCLValue": {\n                  "cl_type": "U512",\n                  "bytes": "05f0e630ed87",\n                  "parsed": "583799990000"\n                }\n              }\n            },\n            {\n              "key": "balance-ea3c9bdcbe57f067a29609d397981b2d0fb39853a0a9f06e444b06404eadcb1a",\n              "transform": {\n                "AddUInt512": "100000000"\n              }\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-59c6451dd58463708fa0b122e97114f07fa5f609229c9d67ac9426935416fbeb",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-7c25ef9382fcae902b922866434f7111a1b34534323e93ff5bf22f1a401c2678",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-92ec6dfbdf151e20b55c89e0a327959cf6e5b091c5f2b39201c1858e2943f3bd",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-7c25ef9382fcae902b922866434f7111a1b34534323e93ff5bf22f1a401c2678",\n              "transform": {\n                "WriteCLValue": {\n                  "cl_type": "U512",\n                  "bytes": "05f0ed2d5887",\n                  "parsed": "581299990000"\n                }\n              }\n            },\n            {\n              "key": "balance-92ec6dfbdf151e20b55c89e0a327959cf6e5b091c5f2b39201c1858e2943f3bd",\n              "transform": {\n                "AddUInt512": "2500000000"\n              }\n            },\n            {\n              "key": "transfer-97426c848475dae98446f2c2fd00ec7901cd8ddfe250171ff4ed25d78412a612",\n              "transform": {\n                "WriteTransfer": {\n                  "deploy_hash": "d898910011b1f2f8797a442740e69cd5de41b9f796e658e962a24663e6199e5a",\n                  "from": "account-hash-0a9b33af5108c5a6e1067b0ddec6853ce1745d591375d767ac5db680d21845e7",\n                  "to": "account-hash-f466e7f5f9240fb577d1d4c650c4063752553406dff7aa24b4822ba2b72e5b65",\n                  "source": "uref-7c25ef9382fcae902b922866434f7111a1b34534323e93ff5bf22f1a401c2678-007",\n                  "target": "uref-92ec6dfbdf151e20b55c89e0a327959cf6e5b091c5f2b39201c1858e2943f3bd-004",\n                  "amount": "2500000000",\n                  "gas": "0",\n                  "id": 0\n                }\n              }\n            },\n            {\n              "key": "deploy-d898910011b1f2f8797a442740e69cd5de41b9f796e658e962a24663e6199e5a",\n              "transform": {\n                "WriteDeployInfo": {\n                  "deploy_hash": "d898910011b1f2f8797a442740e69cd5de41b9f796e658e962a24663e6199e5a",\n                  "transfers": [\n                    "transfer-97426c848475dae98446f2c2fd00ec7901cd8ddfe250171ff4ed25d78412a612"\n                  ],\n                  "from": "account-hash-0a9b33af5108c5a6e1067b0ddec6853ce1745d591375d767ac5db680d21845e7",\n                  "source": "uref-7c25ef9382fcae902b922866434f7111a1b34534323e93ff5bf22f1a401c2678-007",\n                  "gas": "100000000"\n                }\n              }\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-0a300922655180354a9ee92b808c7b45b08e5b01d9da0bac9a9b3415bcebbf8d",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-ea3c9bdcbe57f067a29609d397981b2d0fb39853a0a9f06e444b06404eadcb1a",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-59c6451dd58463708fa0b122e97114f07fa5f609229c9d67ac9426935416fbeb",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-ea3c9bdcbe57f067a29609d397981b2d0fb39853a0a9f06e444b06404eadcb1a",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-ecc530e74cf2185936a334aa1e0f07539aa3b33c4b547e71fc4109151755652f",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-ea3c9bdcbe57f067a29609d397981b2d0fb39853a0a9f06e444b06404eadcb1a",\n              "transform": {\n                "WriteCLValue": {\n                  "cl_type": "U512",\n                  "bytes": "00",\n                  "parsed": "0"\n                }\n              }\n            },\n            {\n              "key": "balance-ecc530e74cf2185936a334aa1e0f07539aa3b33c4b547e71fc4109151755652f",\n              "transform": {\n                "AddUInt512": "100000000"\n              }\n            }\n          ]\n        },\n        "transfers": [\n          "transfer-97426c848475dae98446f2c2fd00ec7901cd8ddfe250171ff4ed25d78412a612"\n        ],\n        "cost": "100000000"\n      }\n    }\n  }\n}\n\n'})})]})]})}function i(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(b,{...e})}):b(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var c=a(96540);const d={},t=c.createContext(d);function s(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);