"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[8728],{62157:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(74848),c=t(28453);const r={title:"Contract Upgrades",slug:"/resources/tutorials/beginner/upgrade-contract"},s="Upgrading a Contract",o={id:"resources/beginner/upgrade-contract",title:"Contract Upgrades",description:"This tutorial examines how to upgrade an existing contract, a process similar to upgrading any other software. You can change an unlocked contract package by adding a new contract and updating the default contract version that the contract package should use. You will need to know the contract package hash and use the addcontractversion API. You can also create a locked contract package that cannot be versioned and is therefore not upgradable.",source:"@site/docs/resources/beginner/upgrade-contract.md",sourceDirName:"resources/beginner",slug:"/resources/tutorials/beginner/upgrade-contract",permalink:"/docs-redux/next/resources/tutorials/beginner/upgrade-contract",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Contract Upgrades",slug:"/resources/tutorials/beginner/upgrade-contract"},sidebar:"resources",previous:{title:"Querying a Node",permalink:"/docs-redux/next/resources/tutorials/beginner/querying-network"},next:{title:"Fungible Tokens",permalink:"/docs-redux/next/resources/tutorials/beginner/cep18"}},i={},l=[{value:"Video Tutorial",id:"video-tutorial",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Contract Versioning Flow",id:"contract-versioning-flow",level:2},{value:"Step 1. Create a new unlocked contract",id:"step-1-create-a-new-unlocked-contract",level:3},{value:"Step 2. Add a new contract to the package",id:"step-2-add-a-new-contract-to-the-package",level:3},{value:"Step 3. Build the contract Wasm",id:"step-3-build-the-contract-wasm",level:3},{value:"Step 4. Install the contract",id:"step-4-install-the-contract",level:3},{value:"Step 5. Verify your changes",id:"step-5-verify-your-changes",level:3},{value:"Disabling and Enabling Contract Versions",id:"disabling-and-enabling-contract-versions",level:2},{value:"Creating a Locked Contract Package",id:"locked-contract-package",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",iframe:"iframe",li:"li",ol:"ol",p:"p",pre:"pre",summary:"summary",ul:"ul",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"upgrading-a-contract",children:"Upgrading a Contract"})}),"\n",(0,a.jsx)(n.p,{children:"import useBaseUrl from '@docusaurus/useBaseUrl';"}),"\n",(0,a.jsxs)(n.p,{children:["This tutorial examines how to upgrade an existing contract, a process similar to upgrading any other software. You can change an unlocked ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-types/latest/casper_types/struct.ContractPackage.html",children:"contract package"})," by adding a new contract and updating the default contract version that the contract package should use. You will need to know the contract package hash and use the ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.add_contract_version.html",children:"add_contract_version"})," API. You can also create a ",(0,a.jsx)(n.a,{href:"#locked-contract-package",children:"locked contract package"})," that cannot be versioned and is therefore not upgradable."]}),"\n",(0,a.jsx)(n.h2,{id:"video-tutorial",children:"Video Tutorial"}),"\n",(0,a.jsx)(n.p,{children:"Here is a video walkthrough of this tutorial."}),"\n",(0,a.jsx)(n.iframe,{width:"560",height:"315",src:"https://www.youtube.com/embed?v=Q4ZXNV8EVTk&list=PL8oWxbJ-csEogSV-M0IPiofWP5I_dLji6&index=4",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractPackageHash.html",children:"ContractPackageHash"})," referencing the ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-types/latest/casper_types/struct.ContractPackage.html",children:"ContractPackage"})," where an unlocked contract is stored in global state."]}),"\n",(0,a.jsxs)(n.li,{children:["You should be familiar with ",(0,a.jsx)(n.a,{href:"/writing-contracts",children:"writing smart contracts"}),", ",(0,a.jsx)(n.a,{href:"/docs-redux/next/developers/cli/sending-transactions",children:"on-chain contracts"}),", and ",(0,a.jsx)(n.a,{href:"/docs-redux/next/developers/cli/calling-contracts",children:"calling contracts"})," on a Casper network."]}),"\n",(0,a.jsxs)(n.li,{children:["You have installed ",(0,a.jsx)(n.a,{href:"/counter-testnet/",children:"A Counter on the Testnet"})," that you will upgrade as part of this tutorial."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Installing the first version of the contract (contract-v1.wasm) as shown in the ",(0,a.jsx)(n.a,{href:"/counter-testnet",children:"counter tutorial"})," is a prerequisite before installing the second version of the contract (contract-v2.wasm)."]})}),"\n",(0,a.jsxs)(n.p,{children:["If you explore ",(0,a.jsx)(n.a,{href:"https://github.com/casper-ecosystem/counter/",children:"the code"}),", you will observe the different versions of the contract:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"contract-v1"})," is the counter contract you can see in the ",(0,a.jsx)(n.a,{href:"/counter-testnet/",children:"A Counter on the Testnet"})," tutorial."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"contract-v2"})," is the contract with the new ",(0,a.jsx)(n.code,{children:"counter_decrement"})," entry point."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"contract-versioning-flow",children:"Contract Versioning Flow"}),"\n",(0,a.jsx)(n.p,{children:"The following is an example workflow for creating a versioned contract package. Your workflow may differ if you have already created the contract package and have a handle on its hash."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Create a contract in the most common way, using ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_contract.html",children:"new_contract"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Add a new version of the contract using ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.add_contract_version.html",children:"add_contract_version"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Build the new contract and generate the corresponding ",(0,a.jsx)(n.code,{children:".wasm"})," file."]}),"\n",(0,a.jsx)(n.li,{children:"Install the contract on the network via a deploy."}),"\n",(0,a.jsx)(n.li,{children:"Verify that your new contract version works as desired."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["In this tutorial, you will use ",(0,a.jsx)(n.a,{href:"https://github.com/casper-ecosystem/counter/blob/master/contract-v2/src/main.rs",children:"the second version"})," of the counter contract to perform the upgrade."]}),"\n",(0,a.jsx)(n.h3,{id:"step-1-create-a-new-unlocked-contract",children:"Step 1. Create a new unlocked contract"}),"\n",(0,a.jsxs)(n.p,{children:["Create a new contract using the ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_contract.html",children:"new_contract"})," function and store the ContractHash returned under a key in global state for later access. Under the hood, the execution engine will create a contract package (a container for the contract) that can be versioned."]}),"\n",(0,a.jsx)(n.p,{children:"When creating the contract, you can specify the package name and access URef for further modifications. Without the access key URef, you cannot add new contract versions for security reasons. Optionally, you can also save the latest version of the contract package under a named key."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'    // Create a new contract and specify a package name and access URef for further modifications\n    let (stored_contract_hash, contract_version) = storage::new_contract(\n        contract_entry_points,\n        Some(contract_named_keys),\n        Some("contract_package_name".to_string()),\n        Some("contract_access_uref".to_string()),\n    );\n\n    // The hash of the installed contract will be reachable through a named key\n    runtime::put_key(CONTRACT_KEY, stored_contract_hash.into());\n\n    // The current version of the contract will be reachable through a named key\n    let version_uref = storage::new_uref(contract_version);\n    runtime::put_key(CONTRACT_VERSION_KEY, version_uref.into());\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://github.com/casper-ecosystem/counter/blob/57e3912735f93e1d0f667b936675964ecfdc6594/contract-v1/src/main.rs#L94",children:"first version of the counter"})," shows you a contract package that can be versioned. This step is covered in the tutorial for ",(0,a.jsx)(n.a,{href:"/counter-testnet/",children:"A Counter on the Testnet"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Additional details:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"We are versioning the contract package, not the contract. The contract is always at a set version, and the package specifies the contract version to be used."}),"\n",(0,a.jsx)(n.li,{children:"The Wasm file name of the new contract could differ from the old contract; after sending the deploy to the network, the contract package hash connects the different contract versions."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"step-2-add-a-new-contract-to-the-package",children:"Step 2. Add a new contract to the package"}),"\n",(0,a.jsx)(n.p,{children:"There are many changes you could make to a Casper contract, like adding new entry points, modifying the behavior of an existing entry point, or completely re-writing the contract."}),"\n",(0,a.jsxs)(n.p,{children:["To add a new contract version in the package, invoke the ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.add_contract_version.html",children:"add_contract_version"})," function and pass in the ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.ContractPackageHash.html",children:"ContractPackageHash"}),", ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-types/latest/casper_types/contracts/struct.EntryPoints.html",children:"EntryPoints"}),", and ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-types/latest/casper_types/contracts/type.NamedKeys.html",children:"NamedKeys"}),". In the counter example, you will find the ",(0,a.jsx)(n.code,{children:"add_contract_version"})," call ",(0,a.jsx)(n.a,{href:"https://github.com/casper-ecosystem/counter/blob/57e3912735f93e1d0f667b936675964ecfdc6594/contract-v2/src/main.rs#L164",children:"here"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"    let (contract_hash, contract_version) = \n    storage::add_contract_version(contract_package_hash, \n                                  entry_points, \n                                  named_keys);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Explanation of arguments:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"contract_package_hash"})," - This hash directs you to the contract package. See ",(0,a.jsx)(n.a,{href:"/docs-redux/next/concepts/key-types#hash-and-key-explanations",children:"Hash and Key Explanations"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"entry_points"})," - Entry points of the contract, which can be modified or newly added."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"named_keys"})," - Named key pairs of the contract."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The new contract version carries on named keys from the previous version. If you specify a new set of named keys, they will be combined with the old named keys in the new contract version. If the old and new contract versions use the same named keys, then the new values would be present in the new version of the contract."}),"\n",(0,a.jsx)(n.p,{children:"You will need to manage contract versioning, considering clients that may use older versions. Here are a few options:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Pin your client contract to the contract hash of a specific version."}),"\n",(0,a.jsxs)(n.li,{children:["Use ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.call_versioned_contract.html",children:"call_versioned_contract"})," with a version number to pin your client contract to that version."]}),"\n",(0,a.jsxs)(n.li,{children:["Call a contract using ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.call_versioned_contract.html",children:"call_versioned_contract"}),' and version "None", which uses the newest version of the contract.']}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"step-3-build-the-contract-wasm",children:"Step 3. Build the contract Wasm"}),"\n",(0,a.jsx)(n.p,{children:"Use these commands to prepare and build the newly added contract:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"make prepare\n\nmake build-contract\n"})}),"\n",(0,a.jsx)(n.h3,{id:"step-4-install-the-contract",children:"Step 4. Install the contract"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs-redux/next/developers/cli/installing-contracts",children:"Install the contract"})," on the network via a deploy and verify the deploy status. You can also ",(0,a.jsx)(n.a,{href:"/docs-redux/next/developers/cli/sending-transactions#monitoring-the-event-stream-for-deploys",children:"monitor the event stream"})," to see when your deploy is accepted."]}),"\n",(0,a.jsxs)(n.p,{children:["To observe the upgrade workflow, you can install the second contract version on the chain. This version contains the ",(0,a.jsx)(n.code,{children:"counter_decrement"})," entry point."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Installing the first version of the contract, as shown in the ",(0,a.jsx)(n.a,{href:"/counter-testnet",children:"Counter tutorial"}),", is a prerequisite before installing the second version."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n    --node-address http://[NODE_IP]:7777 \\\n    --chain-name [CHAIN_NAME] \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-path [PATH]/contract-v2/target/wasm32-unknown-unknown/release/counter-v2.wasm\n"})}),"\n",(0,a.jsx)(n.h3,{id:"step-5-verify-your-changes",children:"Step 5. Verify your changes"}),"\n",(0,a.jsxs)(n.p,{children:["You can write unit tests to verify the behavior of the new contract version with ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.call_contract.html",children:"call_contract"})," or ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.call_versioned_contract.html",children:"call_versioned_contract"}),". When you add a new contract to the package (which increments the highest enabled version), you will obtain a new contract hash, the primary identifier of the contract. You can use the contract hash with call_contract. Alternatively, you can use call_versioned_contract and specify the contract_package_hash and the newly added version."]}),"\n",(0,a.jsxs)(n.p,{children:["For the simple example counter above, here are the ",(0,a.jsx)(n.a,{href:"https://github.com/casper-ecosystem/counter/blob/master/tests/src/integration_tests.rs",children:"corresponding tests"}),". Notice how the tests store and verify the ",(0,a.jsx)(n.a,{href:"https://github.com/casper-ecosystem/counter/blob/57e3912735f93e1d0f667b936675964ecfdc6594/contract-v1/src/main.rs#L107",children:"contract's version"})," and entry points."]}),"\n",(0,a.jsxs)(n.p,{children:["You could store the latest version of the contract package under a NamedKey, as shown ",(0,a.jsx)(n.a,{href:"https://github.com/casper-ecosystem/counter/blob/57e3912735f93e1d0f667b936675964ecfdc6594/contract-v1/src/main.rs#L107",children:"here"}),". Then, you can query the NamedKey to check the latest version of the contract package."]}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Example test function"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'    // Verify the contract version is now 2.\n    let account = builder\n        .get_account(*DEFAULT_ACCOUNT_ADDR)\n        .expect("should have account");\n\n    let version_key = *account\n        .named_keys()\n        .get(CONTRACT_VERSION_KEY)\n        .expect("version uref should exist");\n\n    let version = builder\n        .query(None, version_key, &[])\n        .expect("should be stored value.")\n        .as_cl_value()\n        .expect("should be cl value.")\n        .clone()\n        .into_t::<u32>()\n        .expect("should be u32.");\n\n    assert_eq!(version, 2);\n'})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"You can also test the new entry point by using the Rust command-line client."}),"\n",(0,a.jsx)(n.p,{children:"Get the NEW state-root-hash:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address http://[NODE_IP]:7777\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Check the new contract entry points. You should see the ",(0,a.jsx)(n.em,{children:"counter_decrement"})," entry point now."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'casper-client query-global-state \\\n    --node-address http://[NODE_IP]:7777 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] -q "counter"\n'})}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Example output"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:' {\n  "id": 5602352547578277096,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.13",\n    "block_header": null,\n    "merkle_proof": "[54054 hex chars]",\n    "stored_value": {\n      "Contract": {\n        "contract_package_hash": "contract-package-wasmc014187ccf3366cca70317d6d567cd56a05ecf1ee50ed3bd02727c2864e3d3a8",\n        "contract_wasm_hash": "contract-wasm-64d252f1ab72c7295a85d15c3f456f8bdda586580b0b7106e203fa4fd83f05d7",\n        "entry_points": [\n          {\n            "access": "Public",\n            "args": [],\n            "entry_point_type": "Contract",\n            "name": "counter_decrement",\n            "ret": "Unit"\n          },\n          {\n            "access": "Public",\n            "args": [],\n            "entry_point_type": "Contract",\n            "name": "counter_get",\n            "ret": "I32"\n          },\n          {\n            "access": "Public",\n            "args": [],\n            "entry_point_type": "Contract",\n            "name": "counter_inc",\n            "ret": "Unit"\n          }\n        ],\n        "named_keys": [\n          {\n            "key": "uref-ca980a2e4c08dc3f233b728b22b909cd4e894295155a7902bf88a59eac1531d1-007",\n            "name": "count"\n          }\n        ],\n        "protocol_version": "1.4.13"\n      }\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Check the version and package details with the latest state root hash:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'casper-client query-global-state \\\n    --node-address http://[NODE_IP]:7777 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] -q "version"\n'})}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Example output"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'{\n  "id": 9084525900533244372,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.13",\n    "block_header": null,\n    "merkle_proof": "[64874 hex chars]",\n    "stored_value": {\n      "CLValue": {\n        "bytes": "02000000",\n        "cl_type": "U32",\n        "parsed": 2\n      }\n    }\n  }\n\n'})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'casper-client query-global-state \\\n    --node-address http://[NODE_IP]:7777 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] -q "counter_package_name"\n'})}),"\n",(0,a.jsxs)(n.details,{children:["\n",(0,a.jsx)(n.summary,{children:"Example output"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'{\n  "id": 6933525663267881367,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.13",\n    "block_header": null,\n    "merkle_proof": "[52174 hex chars]",\n    "stored_value": {\n      "ContractPackage": {\n        "access_key": "uref-101817ffd5aa47b08ca710649dbdc41edf0a20d7802c736d34053656c0a99eaf-007",\n        "disabled_versions": [],\n        "groups": [],\n        "versions": [\n          {\n            "contract_hash": "contract-4ee8a4cfbc0a183d189611b6a14c0f7b57e7635fa17a8acfc5c645fec4c36316",\n            "contract_version": 1,\n            "protocol_version_major": 1\n          },\n          {\n            "contract_hash": "contract-2cd9f6485423ba846fae83729016b03df26d9babb939466906c8f1d168b40949",\n            "contract_version": 2,\n            "protocol_version_major": 1\n          }\n        ]\n      }\n    }\n  }\n}\n\n\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Call the new entry point, ",(0,a.jsx)(n.em,{children:"counter_decrement"}),", using the package name and check the results."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy \\\n    --node-address http://[NODE_IP]:7777 \\\n    --chain-name [CHAIN_NAME] \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-package-name "counter_package_name" \\\n    --session-entry-point "counter_decrement"\n'})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"There are two ways to call versioned contracts:"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/developers/writing-onchain-code/calling-contracts/#StoredVersionedContractByHash",children:"Calling Contracts by Package Hash"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/developers/writing-onchain-code/calling-contracts/#StoredVersionedContractByName",children:"Calling Contracts by Package Name"})}),"\n"]})]}),"\n",(0,a.jsx)(n.p,{children:"After calling the entry point, the count value should be decremented. You can verify it by querying the network again using the new state root hash."}),"\n",(0,a.jsx)(n.h2,{id:"disabling-and-enabling-contract-versions",children:"Disabling and Enabling Contract Versions"}),"\n",(0,a.jsxs)(n.p,{children:["You can disable a contract version within a contract package by using the ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.disable_contract_version.html",children:"disable_contract_version"})," function."]}),"\n",(0,a.jsx)(n.p,{children:"Disabled contract versions can no longer be executed. As such, if there is only a single contract version within the package, you will no longer be able to use the contract."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.enable_contract_version.html",children:"Enable_contract_version"})," allows you to re-enable a previously disabled contract version."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Be aware that calling a contract package will use the most recent contract version. It is not necessary to disable a previous contract version, unless you have a specific need to do so."})}),"\n",(0,a.jsx)(n.h2,{id:"locked-contract-package",children:"Creating a Locked Contract Package"}),"\n",(0,a.jsxs)(n.p,{children:["You can create a locked contract package with the ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_locked_contract.html",children:"new_locked_contract"})," function. This contract can never be upgraded."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'let (stored_contract_hash, _) = storage::new_locked_contract(\n    contract_entry_points, \n    Some(contract_named_keys), \n    Some("contract_package_name".to_string()),\n    Some("contract_access_uref".to_string()),\n);\n'})}),"\n",(0,a.jsx)(n.p,{children:"Apply the contract entry points and named keys when you call the function. You can also specify a hash_name and uref_name that will be put in the context's named keys. You do not need to save the version number returned since the version of this contract package would always be equal to 1."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Creating a locked contract package is an irreversible decision. To upgrade a contract, use ",(0,a.jsx)(n.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_contract.html",children:"new_contract"})," as Step 1 explains."]})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const c={},r=a.createContext(c);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);