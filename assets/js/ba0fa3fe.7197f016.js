"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[16606],{62494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"resources/advanced/list-auth-keys-tutorial","title":"Authorization Keys","description":"These examples should not be used in a production environment. They are intended only for teaching and must be tested and adapted for production use.","source":"@site/docs/resources/advanced/list-auth-keys-tutorial.md","sourceDirName":"resources/advanced","slug":"/resources/advanced/list-auth-keys-tutorial","permalink":"/next/resources/advanced/list-auth-keys-tutorial","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{"title":"Authorization Keys"},"sidebar":"tutorials","previous":{"title":"Runtime Return Values","permalink":"/next/resources/tutorials/advanced/return-values-tutorial"},"next":{"title":"Token Transfers","permalink":"/next/resources/tutorials/advanced/transfer-token-to-contract"}}');var i=n(74848),a=n(28453);const r={title:"Authorization Keys"},o="Working with Authorization Keys",l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Workflow",id:"workflow",level:2},{value:"The example contract",id:"the-example-contract",level:3},{value:"Client Wasm files",id:"client-wasm-files",level:3},{value:"<code>add_keys.wasm</code>",id:"add_keyswasm",level:4},{value:"<code>contract_call.wasm</code>",id:"contract_callwasm",level:4},{value:"Testing this example",id:"testing-this-example",level:3},{value:"Test 1: <code>should_allow_install_contract_with_default_account</code>",id:"test-1-should_allow_install_contract_with_default_account",level:4},{value:"Test 2: <code>should_disallow_install_with_non_added_authorization_key</code>",id:"test-2-should_disallow_install_with_non_added_authorization_key",level:4},{value:"Test 3: <code>should_allow_install_with_added_authorization_key</code>",id:"test-3-should_allow_install_with_added_authorization_key",level:4},{value:"Test 4: <code>should_allow_entry_point_with_installer_authorization_key</code>",id:"test-4-should_allow_entry_point_with_installer_authorization_key",level:4},{value:"Test 5: <code>should_allow_entry_point_with_account_authorization_key</code>",id:"test-5-should_allow_entry_point_with_account_authorization_key",level:4},{value:"Test 6: <code>should_disallow_entry_point_without_authorization_key</code>",id:"test-6-should_disallow_entry_point_without_authorization_key",level:4},{value:"Test 7: <code>should_allow_entry_point_through_contract_call_with_authorization_key</code>",id:"test-7-should_allow_entry_point_through_contract_call_with_authorization_key",level:4},{value:"Test 8: <code>should_disallow_entry_point_through_contract_call_without_authorization_key</code>",id:"test-8-should_disallow_entry_point_through_contract_call_without_authorization_key",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"working-with-authorization-keys",children:"Working with Authorization Keys"})}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"These examples should not be used in a production environment. They are intended only for teaching and must be tested and adapted for production use."})}),"\n",(0,i.jsxs)(t.p,{children:["This tutorial demonstrates retrieving and using the authorization keys associated with a deploy using the ",(0,i.jsx)(t.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.list_authorization_keys.html",children:"list_authorization_keys"})," function."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"let authorization_keys = runtime::list_authorization_keys();\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Remember that authorization keys are listed under a Deploy's ",(0,i.jsx)(t.a,{href:"/next/concepts/serialization/structures#deploy-serialization-standard-deploy",children:"approvals"})," section, which lists the signatures and the public keys of the signers, also called authorizing keys. Here is an example of a deploy's approvals:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'"approvals": [\n    {\n      "signer": "02021a4da3d6f32ea3ebd2519e1a37a1b811671085bf4f1cf2a36b931344a99b756a",\n      "signature": "02df8cdf0bff3bd93e831d24563d5acbefa0ed13814550e910d03208d5fb3c11770dd3d918784ec84342e53666eacf59aeecbf4ce0cdd60e167c4a4b20e4b8f481"\n    }\n]\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The contract code in this example retrieves the set of authorization keys for a given deploy by calling the ",(0,i.jsx)(t.code,{children:"runtime::list_authorization_keys"})," function. In other words, ",(0,i.jsx)(t.code,{children:"list_authorization_keys"})," returns the set of account hashes representing the keys used to sign a deploy. Upon installation, the contract code stores the authorization keys for the installer deploy into a NamedKey. The contract also contains an entry point that returns the intersection of the caller deploy's, and installer deploy's authorization keys. The tests in this repository verify different scenarios and check the resulting intersection."]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["You meet the ",(0,i.jsx)(t.a,{href:"/next/developers/prerequisites",children:"development prerequisites"})," and are familiar with ",(0,i.jsx)(t.a,{href:"/next/writing-contracts",children:"writing and testing on-chain code"})]}),"\n",(0,i.jsxs)(t.li,{children:["You know how to ",(0,i.jsx)(t.a,{href:"/next/developers/cli/sending-transactions",children:"send and verify deploys"})]}),"\n",(0,i.jsxs)(t.li,{children:["You are familiar with these concepts:\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/next/concepts/serialization/structures#account-serialization-standard-account",children:"Casper Accounts"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/next/concepts/serialization/structures#deploy-serialization-standard-deploy",children:"Deploys"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/next/concepts/serialization/types#associatedkey",children:"Associated Keys"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/next/concepts/serialization/types#approval",children:"Approvals"}),", also known as authorization keys"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"workflow",children:"Workflow"}),"\n",(0,i.jsxs)(t.p,{children:["To start, clone the ",(0,i.jsx)(t.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm",children:"tutorials-example-wasm"})," repository. Then, open the ",(0,i.jsx)(t.code,{children:"authorization-keys-example"})," directory, prepare your Rust environment, and build the tests with the following commands."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/casper-ecosystem/tutorials-example-wasm\ncd tutorials-example-wasm/authorization-keys-example\nmake prepare\nmake test\n"})}),"\n",(0,i.jsx)(t.p,{children:"Review the repository's structure:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm/tree/dev/authorization-keys-example/client",children:"client"})," - A client folder containing two Wasm files\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"add_keys.wasm"})," - Session code that adds an associated key to the calling account"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"contract_call.wasm"})," - Session code that calls the contract's entry point and stores the result into a named key"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm/tree/dev/authorization-keys-example/contract",children:"contract"})," - A simple contract that demonstrates the usage of authorization keys and compiles into a ",(0,i.jsx)(t.code,{children:"contract.wasm"})," file"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm/tree/dev/authorization-keys-example/tests",children:"tests"})," - Tests and supporting utilities to verify and demonstrate the contract's expected behavior"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["This tutorial highlights certain lines of code found in ",(0,i.jsx)(t.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm/tree/dev/authorization-keys-example",children:"GitHub"}),"."]})}),"\n",(0,i.jsx)(t.h3,{id:"the-example-contract",children:"The example contract"}),"\n",(0,i.jsxs)(t.p,{children:["Upon ",(0,i.jsx)(t.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/contract/src/main.rs#L75",children:"installation"}),", the contract in this example stores the authorization keys that signed the installer deploy into a named key."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'#[no_mangle]\npub extern "C" fn init() {\n    if runtime::get_key(AUTHORIZATION_KEYS_INSTALLER).is_none() {\n        let authorization_keys: Vec<AccountHash> =\n            runtime::list_authorization_keys().iter().cloned().collect();\n\n        let authorization_keys: Key = storage::new_uref(authorization_keys).into();\n        runtime::put_key(AUTHORIZATION_KEYS_INSTALLER, authorization_keys);\n    }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The contract contains an entry point that returns the intersection of the caller deploy's authorization keys and the installer deploy's authorization keys saved during contract installation. The following ",(0,i.jsx)(t.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/contract/src/main.rs#L52",children:"usage"})," of ",(0,i.jsx)(t.code,{children:"runtime::list_authorization_keys"})," retrieves the set of account hashes representing the keys signing the caller deploy."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"let authorization_keys_caller: Vec<AccountHash> =\n    runtime::list_authorization_keys().iter().cloned().collect();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"client-wasm-files",children:"Client Wasm files"}),"\n",(0,i.jsx)(t.h4,{id:"add_keyswasm",children:(0,i.jsx)(t.code,{children:"add_keys.wasm"})}),"\n",(0,i.jsxs)(t.p,{children:["This file contains session code that adds an associated key to the calling account. For more details and a similar example, visit the ",(0,i.jsx)(t.a,{href:"/next/resources/tutorials/advanced/two-party-multi-sig",children:"Two-Party Multi-Signature"})," tutorial."]}),"\n",(0,i.jsx)(t.h4,{id:"contract_callwasm",children:(0,i.jsx)(t.code,{children:"contract_call.wasm"})}),"\n",(0,i.jsx)(t.p,{children:"This session code calls the contract's entry point, which returns the intersection between two sets of keys:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The authorization keys that signed the deploy that installed the contract (referred to in this tutorial as the installer deploy)"}),"\n",(0,i.jsx)(t.li,{children:"The authorization keys that signed the deploy calling the entry point (referred to in this tutorial as the caller deploy)."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The intersection result is a list stored under a named key of the account calling the ",(0,i.jsx)(t.code,{children:"contract_call.wasm"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"let key_name: String = runtime::get_named_arg(ARG_KEY_NAME);\nlet intersection =\n    runtime::call_contract::<Vec<AccountHash>>(contract_hash, ENTRY_POINT, runtime_args! {});\nruntime::put_key(&key_name, storage::new_uref(intersection).into());\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"testing-this-example",children:"Testing this example"}),"\n",(0,i.jsx)(t.p,{children:"This section highlights the tests written for this example, demonstrating the usage of authorization keys. The tests are divided into three parts:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Testing the contract installation"}),"\n",(0,i.jsx)(t.li,{children:"Testing the contract's unique entry point"}),"\n",(0,i.jsx)(t.li,{children:"Testing the entry point using a client contract call"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"These tests focus on testing the contract installation."}),"\n",(0,i.jsxs)(t.h4,{id:"test-1-should_allow_install_contract_with_default_account",children:["Test 1: ",(0,i.jsx)(t.code,{children:"should_allow_install_contract_with_default_account"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Installer deploy authorization keys"}),(0,i.jsx)(t.th,{children:"Expected outcome"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"})}),(0,i.jsx)(t.td,{children:"Successful contract installation"})]})})]}),"\n",(0,i.jsxs)(t.p,{children:["This ",(0,i.jsx)(t.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L28",children:"test"})," signs the installer deploy with an authorization key ",(0,i.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"})," that belongs to the calling accounts's associated keys. In other words, since the caller is the default account, ",(0,i.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"})," can be used to sign the deploy."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"let session_code = PathBuf::from(CONTRACT_WASM);\nlet session_args = RuntimeArgs::new();\n\nlet deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[*DEFAULT_ACCOUNT_ADDR])\n    .with_address(*DEFAULT_ACCOUNT_ADDR)\n    .with_session_code(session_code, session_args)\n    .build();\n\n"})}),"\n",(0,i.jsxs)(t.h4,{id:"test-2-should_disallow_install_with_non_added_authorization_key",children:["Test 2: ",(0,i.jsx)(t.code,{children:"should_disallow_install_with_non_added_authorization_key"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Installer deploy authorization keys"}),(0,i.jsx)(t.th,{children:"Expected outcome"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"}),", ",(0,i.jsx)(t.code,{children:"account_addr_1"})]}),(0,i.jsx)(t.td,{children:"Failed contract installation"})]})})]}),"\n",(0,i.jsxs)(t.p,{children:["This ",(0,i.jsx)(t.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L57",children:"test"})," tries to sign the installer deploy with an authorization key that is not part of the caller's associated keys. This is not allowed because the authorization keys used to sign a deploy need to be a subset of the caller's associated keys. So, the installer deploy fails as expected."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'let session_code = PathBuf::from(CONTRACT_WASM);\nlet session_args = RuntimeArgs::new();\n\nlet deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[*DEFAULT_ACCOUNT_ADDR, account_addr_1])\n    .with_address(*DEFAULT_ACCOUNT_ADDR)\n    .with_session_code(session_code, session_args)\n    .build();\n\nlet execute_request = ExecuteRequestBuilder::from_deploy_item(deploy_item).build();\nbuilder.exec(execute_request).commit().expect_failure();\nlet error = builder.get_error().expect("must have error");\nassert_eq!(error.to_string(), "Authorization failure: not authorized.");\n'})}),"\n",(0,i.jsxs)(t.h4,{id:"test-3-should_allow_install_with_added_authorization_key",children:["Test 3: ",(0,i.jsx)(t.code,{children:"should_allow_install_with_added_authorization_key"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Installer deploy authorization keys"}),(0,i.jsx)(t.th,{children:"Expected outcome"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"}),", ",(0,i.jsx)(t.code,{children:"account_addr_1"})]}),(0,i.jsx)(t.td,{children:"Successful contract installation"})]})})]}),"\n",(0,i.jsxs)(t.p,{children:["This ",(0,i.jsx)(t.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L83",children:"test"})," demonstrates a successful installer deploy using an added authorization key. After the initial test framework setup, the test calls session code to add the associated account ",(0,i.jsx)(t.code,{children:"account_addr_1"})," to the default account's associated keys."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"// Add account_addr_1 to the default account's associated keys\nlet session_code = PathBuf::from(ADD_KEYS_WASM);\nlet session_args = runtime_args! {\n    ASSOCIATED_ACCOUNT => account_addr_1\n};\n\nlet add_keys_deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[*DEFAULT_ACCOUNT_ADDR])\n    .with_address(*DEFAULT_ACCOUNT_ADDR)\n    .with_session_code(session_code, session_args)\n    .build();\n\nlet add_keys_execute_request =\n    ExecuteRequestBuilder::from_deploy_item(add_keys_deploy_item).build();\n\nbuilder\n    .exec(add_keys_execute_request)\n    .commit()\n    .expect_success();\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Since the deploy threshold is now 2, the installer deploy is signed with the default account hash and with ",(0,i.jsx)(t.code,{children:"account_addr_1"}),". See ",(0,i.jsx)(t.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L191",children:"GitHub"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"let session_code = PathBuf::from(CONTRACT_WASM);\n\nlet deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[*DEFAULT_ACCOUNT_ADDR, account_addr_1])\n    .with_address(*DEFAULT_ACCOUNT_ADDR)\n    .with_session_code(session_code, session_args)\n    .build();\n\nlet execute_request = ExecuteRequestBuilder::from_deploy_item(deploy_item).build();\nbuilder.exec(execute_request).commit().expect_success();\n"})}),"\n",(0,i.jsx)(t.p,{children:"The next tests exercise the contract's unique entry point to calculate the intersection between the caller deploy's authorization keys and the installer deploy's authorization keys."}),"\n",(0,i.jsxs)(t.h4,{id:"test-4-should_allow_entry_point_with_installer_authorization_key",children:["Test 4: ",(0,i.jsx)(t.code,{children:"should_allow_entry_point_with_installer_authorization_key"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Installer deploy authorization keys"}),(0,i.jsx)(t.th,{children:"Caller deploy authorization keys"}),(0,i.jsx)(t.th,{children:"Intersection returned by the entry point"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"account_addr_1"}),", ",(0,i.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"account_addr_1"})})]})})]}),"\n",(0,i.jsxs)(t.p,{children:["This ",(0,i.jsx)(t.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L144",children:"test"})," builds upon the previous test, which adds an associated account to the default account's associated keys and installs the contract using these two keys. Additionally, on line 201, the test invokes the contract's entry point using a deploy that runs under ",(0,i.jsx)(t.code,{children:"ACCOUNT_USER_1"})," signed only with ",(0,i.jsx)(t.code,{children:"account_addr_1"}),". This is possible because the deploy action threshold for ",(0,i.jsx)(t.code,{children:"ACCOUNT_USER_1"})," is 1 as you can see ",(0,i.jsx)(t.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L201",children:"here"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'let contract_hash = builder\n    .get_expected_account(*DEFAULT_ACCOUNT_ADDR)\n    .named_keys()\n    .get(CONTRACT_HASH)\n    .expect("must have this entry in named keys")\n    .into_hash()\n    .map(ContractHash::new)\n    .unwrap();\n\nlet entry_point_deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[account_addr_1])\n    .with_address(account_addr_1)\n    .with_stored_session_hash(contract_hash, ENTRYPOINT, runtime_args! {})\n    .build();\n\nlet entry_point_request =\n    ExecuteRequestBuilder::from_deploy_item(entry_point_deploy_item).build();\n\nbuilder.exec(entry_point_request).expect_success().commit();\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The entry point returns the intersection of the caller deploy's authorization keys and the installer deploy's authorization keys. The intersection is a list containing the key ",(0,i.jsx)(t.code,{children:"account_addr_1"}),". Thus, the caller deploy is expected to succeed and return a result."]}),"\n",(0,i.jsxs)(t.h4,{id:"test-5-should_allow_entry_point_with_account_authorization_key",children:["Test 5: ",(0,i.jsx)(t.code,{children:"should_allow_entry_point_with_account_authorization_key"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Installer deploy authorization keys"}),(0,i.jsx)(t.th,{children:"Caller deploy authorization keys"}),(0,i.jsx)(t.th,{children:"Intersection returned by the entry point"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"account_addr_1"}),", ",(0,i.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"})})]})})]}),"\n",(0,i.jsxs)(t.p,{children:["This is the ",(0,i.jsx)(t.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L224",children:"main test"})," in this example repository. After installing the contract using the default account, the test adds the default account hash to ",(0,i.jsx)(t.code,{children:"ACCOUNT_USER_1"})," as an associated key."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"let session_code = PathBuf::from(ADD_KEYS_WASM);\nlet session_args = runtime_args! {\n    ASSOCIATED_ACCOUNT => *DEFAULT_ACCOUNT_ADDR\n};\n\nlet add_keys_deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[account_addr_1])\n    .with_address(account_addr_1)\n    .with_session_code(session_code, session_args)\n    .build();\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Then, the test creates a deploy to invoke the contract's entry point. This deploy executes under ",(0,i.jsx)(t.code,{children:"ACCOUNT_USER_1"})," and has two authorization keys, ",(0,i.jsx)(t.code,{children:"account_addr_1"})," and the default account hash. Note that both authorization keys must sign the deploy to meet the deploy's action threshold, which is set to 2. The deploy should be executed successfully because the resulting intersection should contain the default account hash."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"let entry_point_deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[account_addr_1, *DEFAULT_ACCOUNT_ADDR])\n    .with_address(account_addr_1)\n    .with_stored_session_hash(contract_hash, ENTRYPOINT, runtime_args! {})\n    .build();\n\nlet entry_point_request =\n    ExecuteRequestBuilder::from_deploy_item(entry_point_deploy_item).build();\n\nbuilder.exec(entry_point_request).expect_success().commit();\n"})}),"\n",(0,i.jsxs)(t.h4,{id:"test-6-should_disallow_entry_point_without_authorization_key",children:["Test 6: ",(0,i.jsx)(t.code,{children:"should_disallow_entry_point_without_authorization_key"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Installer deploy authorization keys"}),(0,i.jsx)(t.th,{children:"Caller deploy authorization keys"}),(0,i.jsx)(t.th,{children:"Intersection returned by the entry point"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"account_addr_2"})}),(0,i.jsx)(t.td,{children:"None"})]})})]}),"\n",(0,i.jsxs)(t.p,{children:["This ",(0,i.jsx)(t.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L304",children:"test"})," verifies that the entry point returns an error when there is no intersection between the caller deploy's authorization keys and the installer deploy's authorization keys."]}),"\n",(0,i.jsx)(t.p,{children:"The default account hash is used to sign the installer deploy."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"let session_code = PathBuf::from(CONTRACT_WASM);\n\nlet deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[*DEFAULT_ACCOUNT_ADDR])\n    .with_address(*DEFAULT_ACCOUNT_ADDR)\n    .with_session_code(session_code, runtime_args! {})\n    .build();\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In the test, a new account, ",(0,i.jsx)(t.code,{children:"ACCOUNT_USER_2"}),", creates a deploy invoking the contract's entry point and signs the deploy with ",(0,i.jsx)(t.code,{children:"account_addr_2"}),". When calling the entry point, an error is returned because the caller and the installer deploys do not have any authorization keys in common."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'    // Here ACCOUNT_USER_2 does not have DEFAULT_ACCOUNT_ADDR (from the contract installer) in its associated keys\n    // The deploy will therefore revert with PermissionDenied\n    let entry_point_deploy_item = DeployItemBuilder::new()\n        .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n        .with_authorization_keys(&[account_addr_2])\n        .with_address(account_addr_2)\n        .with_stored_session_hash(contract_hash, ENTRYPOINT, runtime_args! {})\n        .build();\n\n    let entry_point_request =\n        ExecuteRequestBuilder::from_deploy_item(entry_point_deploy_item).build();\n\n    builder.exec(entry_point_request).commit().expect_failure();\n    let error = builder.get_error().expect("must have User error: 0");\n    assert_expected_error(\n        error,\n        0,\n        "should fail execution since DEFAULT_ACCOUNT_ADDR is not in ACCOUNT_USER_2 associated keys",\n    );\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The following tests exercise the entry point using a ",(0,i.jsx)(t.a,{href:"#contract_callwasm",children:"contract call"})," and verifying the result returned."]}),"\n",(0,i.jsxs)(t.h4,{id:"test-7-should_allow_entry_point_through_contract_call_with_authorization_key",children:["Test 7: ",(0,i.jsx)(t.code,{children:"should_allow_entry_point_through_contract_call_with_authorization_key"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Installer deploy authorization keys"}),(0,i.jsx)(t.th,{children:"Caller deploy authorization keys"}),(0,i.jsx)(t.th,{children:"Intersection returned by the entry point"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"account_addr_1"}),", ",(0,i.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"})})]})})]}),"\n",(0,i.jsxs)(t.p,{children:["This ",(0,i.jsx)(t.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L403",children:"test"})," validates the contract's entry point using a client contract call. The contract is installed using the default account hash in the deploy's authorization keys."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"let session_code = PathBuf::from(CONTRACT_WASM);\n\nlet deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[*DEFAULT_ACCOUNT_ADDR])\n    .with_address(*DEFAULT_ACCOUNT_ADDR)\n    .with_session_code(session_code, runtime_args! {})\n    .build();\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The caller deploy is signed by ",(0,i.jsx)(t.code,{children:"account_addr_1"})," and ",(0,i.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"let entry_point_deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[account_addr_1, *DEFAULT_ACCOUNT_ADDR])\n    .with_address(account_addr_1)\n    .with_session_code(session_code, session_args)\n    .build();\n\nlet entry_point_request =\n    ExecuteRequestBuilder::from_deploy_item(entry_point_deploy_item).build();\nbuilder.exec(entry_point_request).expect_success().commit();\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The test then verifies that the result returned was saved in the named keys for ",(0,i.jsx)(t.code,{children:"ACCOUNT_USER_1"}),", containing the default account hash."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'let intersection_receipt: Key = *builder\n    .get_expected_account(account_addr_1)\n    .named_keys()\n    .get(INTERSECTION_RECEIPT)\n    .expect("must have this entry in named keys");\n\nlet actual_intersection = builder\n    .query(None, intersection_receipt, &[])\n    .expect("must have stored_value")\n    .as_cl_value()\n    .map(|intersection_cl_value| {\n        CLValue::into_t::<Vec<AccountHash>>(intersection_cl_value.clone())\n    })\n    .unwrap()\n    .unwrap();\n\nlet expected_intersection = vec![*DEFAULT_ACCOUNT_ADDR];\n\nassert_eq!(actual_intersection, expected_intersection);\n'})}),"\n",(0,i.jsxs)(t.h4,{id:"test-8-should_disallow_entry_point_through_contract_call_without_authorization_key",children:["Test 8: ",(0,i.jsx)(t.code,{children:"should_disallow_entry_point_through_contract_call_without_authorization_key"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Installer deploy authorization keys"}),(0,i.jsx)(t.th,{children:"Caller deploy authorization keys"}),(0,i.jsx)(t.th,{children:"Intersection returned by the entry point"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"account_addr_1"}),", ",(0,i.jsx)(t.code,{children:"account_addr_2"})]}),(0,i.jsx)(t.td,{children:"None"})]})})]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm/blob/6810ac3d6d65e252770561ddac9b33bf40aadc03/authorization-keys-example/tests/src/integration_tests.rs#L509",children:"final test"})," in this tutorial checks that when there is no intersection between the caller deploy's authorization keys (",(0,i.jsx)(t.code,{children:"account_addr_1"}),", ",(0,i.jsx)(t.code,{children:"account_addr_2"}),") and the installer deploy's authorization keys (",(0,i.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"}),"), the entry point returns an error."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:' let session_code = PathBuf::from(CONTRACT_CALL_WASM);\n\nlet session_args = runtime_args! {\n    ARG_CONTRACT_HASH => Key::from(contract_hash),\n    ARG_KEY_NAME => INTERSECTION_RECEIPT\n};\n\n// account_addr_2 as an associated key is not among the default account\'s associated keys\n// The deploy will therefore revert with PermissionDenied\nlet entry_point_deploy_item = DeployItemBuilder::new()\n    .with_empty_payment_bytes(runtime_args! {ARG_AMOUNT => *DEFAULT_PAYMENT})\n    .with_authorization_keys(&[account_addr_1, account_addr_2])\n    .with_address(account_addr_1)\n    .with_session_code(session_code, session_args)\n    .build();\n\nlet entry_point_request =\n    ExecuteRequestBuilder::from_deploy_item(entry_point_deploy_item).build();\n\nbuilder.exec(entry_point_request).commit().expect_failure();\n\nlet error = builder.get_error().expect("must have User error: 0");\nassert_expected_error(\n    error,\n    0,\n    "should fail execution since ACCOUNT_USER_2 as associated key is not in installer (DEFAULT_ACCOUNT_ADDR) associated keys",\n);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);