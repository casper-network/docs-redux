"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[24907],{93911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var s=n(74848),r=n(28453);const c={title:"Testing Guide",slug:"/resources/tokens/cep18/tests"},a="Testing Framework for CEP-18",i={id:"resources/tokens/cep18/tests",title:"Testing Guide",description:"The testing framework in this tutorial uses the Casper engine test support crate for testing the contract implementation against the Casper execution environment.",source:"@site/versioned_docs/version-2.0.0/resources/tokens/cep18/tests.md",sourceDirName:"resources/tokens/cep18",slug:"/resources/tokens/cep18/tests",permalink:"/2.0.0/resources/tokens/cep18/tests",draft:!1,unlisted:!1,tags:[],version:"2.0.0",frontMatter:{title:"Testing Guide",slug:"/resources/tokens/cep18/tests"},sidebar:"resources",previous:{title:"CEP-18 Transfers",permalink:"/2.0.0/resources/tokens/cep18/transfer"},next:{title:"Introduction",permalink:"/2.0.0/resources/tokens/cep78/introduction"}},o={},l=[{value:"Configuring the Test Package",id:"configuring-the-test-package",level:2},{value:"Testing Logic",id:"testing-logic",level:2},{value:"Setting up the Testing Context",id:"setting-up-the-testing-context",level:3},{value:"Installing the Contract",id:"installing-the-contract",level:3},{value:"Creating Helper Functions",id:"creating-helper-functions",level:3},{value:"Creating Unit Tests",id:"creating-unit-tests",level:2},{value:"Running the Tests",id:"running-the-tests",level:2}];function _(e){const t={a:"a",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"testing-framework-for-cep-18",children:"Testing Framework for CEP-18"})}),"\n",(0,s.jsxs)(t.p,{children:["The testing framework in this tutorial uses the ",(0,s.jsx)(t.a,{href:"https://crates.io/crates/casper-engine-test-support",children:"Casper engine test support"})," crate for testing the contract implementation against the Casper execution environment."]}),"\n",(0,s.jsxs)(t.p,{children:["The following section reviews the ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep18/tree/master/tests",children:"GitHub testing folder"}),", which creates a testing framework for the Casper ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep18",children:"Fungible Token"})," project. You can find more details about testing Casper contracts ",(0,s.jsx)(t.a,{href:"/2.0.0/developers/writing-onchain-code/testing-contracts",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The following is an example of a complete test expecting a failed transfer:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'#[should_panic(expected = "ApiError::User(65534) [131070]")]\n#[test]\nfn should_not_transfer_with_insufficient_balance() {\n    let mut fixture = TestFixture::install_contract();\n\n    let initial_ali_balance = fixture.balance_of(Key::from(fixture.ali)).unwrap();\n    assert_eq!(fixture.balance_of(Key::from(fixture.bob)), None);\n\n    fixture.transfer(\n        Key::from(fixture.bob),\n        initial_ali_balance + U256::one(),\n        fixture.ali,\n    );\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["To build and run the tests, issue the following command in the project folder, ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep18",children:"cep18"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"make test\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The project contains a ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep18/blob/dev/Makefile",children:"Makefile"}),", which is a custom build script that compiles the contract before running tests in ",(0,s.jsx)(t.em,{children:"release"})," mode. Then, the script copies the ",(0,s.jsx)(t.code,{children:"contract.wasm"})," file to the ",(0,s.jsx)(t.code,{children:"tests/wasm"})," directory. In practice, you only need to run the ",(0,s.jsx)(t.code,{children:"make test"})," command during development."]}),"\n",(0,s.jsx)(t.h2,{id:"configuring-the-test-package",children:"Configuring the Test Package"}),"\n",(0,s.jsxs)(t.p,{children:["In this project, we define a ",(0,s.jsx)(t.code,{children:"tests"})," package using the ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep18/blob/dev/tests/Cargo.toml",children:"tests/Cargo.toml"})," file."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'[package]\nname = "tests"\nversion = "1.0.0"\n...\n\n[dependencies]\ncasper-types = "2.0.0"\ncasper-engine-test-support = "4.0.0"\ncasper-execution-engine = "4.0.0"\nonce_cell = "1.16.0"\n\n[lib]\nname = "tests"\n...\n'})}),"\n",(0,s.jsx)(t.h2,{id:"testing-logic",children:"Testing Logic"}),"\n",(0,s.jsxs)(t.p,{children:["In Github, you will find an ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep18/tree/dev/cep18",children:"example"})," containing a Casper Fungible Token ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep18/blob/dev/cep18/src/main.rs",children:"contract"})," implementation with the corresponding ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep18/tree/dev/tests/src",children:"tests"}),". The tests follow this sequence:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#setting-up-the-testing-context",children:"Step 1"})," - Specify the starting state of the blockchain."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#installing-the-contract",children:"Step 2"})," - Deploy the compiled contract to the blockchain and query it."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#creating-helper-functions",children:"Step 3"})," - Create additional deploys for calling each of the entrypoints in the contract."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The test fixture accomplishes these steps by simulating a real-world deploy that stores the contract on the blockchain and then invoking the contract's entrypoints."}),"\n",(0,s.jsx)(t.h3,{id:"setting-up-the-testing-context",children:"Setting up the Testing Context"}),"\n",(0,s.jsxs)(t.p,{children:["The code in the ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep18/tree/dev/tests/src/utility",children:"utility directory"})," initializes the blockchain's ",(0,s.jsx)(t.a,{href:"/2.0.0/concepts/glossary/G#global-state",children:"global state"})," with all the data and entrypoints the smart contract needs."]}),"\n",(0,s.jsxs)(t.p,{children:["Expand the example below to see a subset of the required constants for this project. The testing framework defines constants via the ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep18/blob/dev/tests/src/utility/constants.rs",children:(0,s.jsx)(t.code,{children:"constants.rs"})})," file within the ",(0,s.jsx)(t.code,{children:"utility"})," directory. For the most up-to-date version of the code, visit ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep18",children:"GitHub"}),"."]}),"\n",(0,s.jsxs)(t.details,{children:["\n",(0,s.jsx)(t.summary,{children:"Example of required constants"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"// File https://github.com/casper-ecosystem/cep18/blob/dev/tests/src/utility/installer_request_builders.rs\n\nuse casper_engine_test_support::{\n    ExecuteRequestBuilder, InMemoryWasmTestBuilder, DEFAULT_ACCOUNT_ADDR,\n    MINIMUM_ACCOUNT_CREATION_BALANCE, PRODUCTION_RUN_GENESIS_REQUEST,\n};\nuse casper_execution_engine::core::engine_state::ExecuteRequest;\nuse casper_types::{\n    account::AccountHash, bytesrepr::FromBytes, runtime_args, system::mint, CLTyped, ContractHash, ContractPackageHash, Key, RuntimeArgs, U256,\n};\n\nuse crate::utility::constants::{\n    ALLOWANCE_AMOUNT_1, ALLOWANCE_AMOUNT_2, TOTAL_SUPPLY_KEY, TRANSFER_AMOUNT_1, TRANSFER_AMOUNT_2,\n};\n\nuse super::constants::{\n    ACCOUNT_1_ADDR, ACCOUNT_2_ADDR, ARG_ADDRESS, ARG_AMOUNT, ARG_DECIMALS, ARG_NAME, ARG_OWNER, ARG_RECIPIENT, ARG_SPENDER, ARG_SYMBOL, ARG_TOKEN_CONTRACT, ARG_TOTAL_SUPPLY, CEP18_CONTRACT_WASM, CEP18_TEST_CONTRACT_KEY, CEP18_TEST_CONTRACT_WASM, CEP18_TOKEN_CONTRACT_KEY, CHECK_ALLOWANCE_OF_ENTRYPOINT, CHECK_BALANCE_OF_ENTRYPOINT,CHECK_TOTAL_SUPPLY_ENTRYPOINT, METHOD_APPROVE, METHOD_APPROVE_AS_STORED_CONTRACT,METHOD_TRANSFER, METHOD_TRANSFER_AS_STORED_CONTRACT, RESULT_KEY, TOKEN_DECIMALS, TOKEN_NAME, TOKEN_SYMBOL, TOKEN_TOTAL_SUPPLY,\n};\n"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"installing-the-contract",children:"Installing the Contract"}),"\n",(0,s.jsxs)(t.p,{children:["The next step is to define a struct that has its own virtual machine (VM) instance and implements the Fungible Token entrypoints. This struct holds a ",(0,s.jsx)(t.code,{children:"TestContext"})," of its own. The ",(0,s.jsx)(t.em,{children:"contract_hash"})," and the ",(0,s.jsx)(t.em,{children:"session_code"})," won\u2019t change after the contract is deployed, so it is good to keep them handy."]}),"\n",(0,s.jsxs)(t.p,{children:["This code snippet builds the context and includes the compiled contract ",(0,s.jsx)(t.em,{children:".wasm"})," binary being tested. The ",(0,s.jsx)(t.code,{children:"TestContext"})," struct creates a new instance of the ",(0,s.jsx)(t.code,{children:"cep18_token"})," with several test accounts."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": These accounts have a positive initial balance."]}),"\n",(0,s.jsxs)(t.p,{children:["The full and most recent code implementation is available on ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep18/blob/dev/tests/src/utility/installer_request_builders.rs",children:"GitHub"}),"."]}),"\n",(0,s.jsxs)(t.details,{children:["\n",(0,s.jsx)(t.summary,{children:"Example of a CEP-18 token in a test"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'// File https://github.com/casper-ecosystem/cep18/blob/dev/tests/src/utility/installer_request_builders.rs\n\n// Creating the `TestContext` struct.\n\npub(crate) struct TestContext {\npub(crate) cep18_token: ContractHash,\npub(crate) cep18_test_contract_package: ContractPackageHash,\n}\n\n// Setting up the test instance of CEP-18.\n\npub(crate) fn setup() -> (InMemoryWasmTestBuilder, TestContext) {\n    setup_with_args(runtime_args! {\n        ARG_NAME => TOKEN_NAME,\n        ARG_SYMBOL => TOKEN_SYMBOL,\n        ARG_DECIMALS => TOKEN_DECIMALS,\n        ARG_TOTAL_SUPPLY => U256::from(TOKEN_TOTAL_SUPPLY),\n    })\n}\n\n// Establishing test accounts.\n\npub(crate) fn setup_with_args(install_args: RuntimeArgs) -> (InMemoryWasmTestBuilder, TestContext) {\n    let mut builder = InMemoryWasmTestBuilder::default();\n    builder.run_genesis(&PRODUCTION_RUN_GENESIS_REQUEST);\n\n    let id: Option<u64> = None;\n    let transfer_1_args = runtime_args! {\n        mint::ARG_TARGET => *ACCOUNT_1_ADDR,\n        mint::ARG_AMOUNT => MINIMUM_ACCOUNT_CREATION_BALANCE,\n        mint::ARG_ID => id,\n    };\n    let transfer_2_args = runtime_args! {\n        mint::ARG_TARGET => *ACCOUNT_2_ADDR,\n        mint::ARG_AMOUNT => MINIMUM_ACCOUNT_CREATION_BALANCE,\n        mint::ARG_ID => id,\n    };\n\n    let transfer_request_1 =\n        ExecuteRequestBuilder::transfer(*DEFAULT_ACCOUNT_ADDR, transfer_1_args).build();\n    let transfer_request_2 =\n        ExecuteRequestBuilder::transfer(*DEFAULT_ACCOUNT_ADDR, transfer_2_args).build();\n\n    // Installing the test version of CEP-18 with the default account.\n\n    let install_request_1 =\n        ExecuteRequestBuilder::standard(*DEFAULT_ACCOUNT_ADDR, CEP18_CONTRACT_WASM, install_args)\n            .build();\n\n    let install_request_2 = ExecuteRequestBuilder::standard(\n        *DEFAULT_ACCOUNT_ADDR,\n        CEP18_TEST_CONTRACT_WASM,\n        RuntimeArgs::default(),\n    )\n    .build();\n\n    builder.exec(transfer_request_1).expect_success().commit();\n    builder.exec(transfer_request_2).expect_success().commit();\n    builder.exec(install_request_1).expect_success().commit();\n    builder.exec(install_request_2).expect_success().commit();\n\n    let account = builder\n        .get_account(*DEFAULT_ACCOUNT_ADDR)\n        .expect("should have account");\n\n    let cep18_token = account\n        .named_keys()\n        .get(CEP18_TOKEN_CONTRACT_KEY)\n        .and_then(|key| key.into_hash())\n        .map(ContractHash::new)\n        .expect("should have contract hash");\n\n    let cep18_test_contract_package = account\n        .named_keys()\n        .get(CEP18_TEST_CONTRACT_KEY)\n        .and_then(|key| key.into_hash())\n        .map(ContractPackageHash::new)\n        .expect("should have contract package hash");\n\n    let test_context = TestContext {\n        cep18_token,\n        cep18_test_contract_package,\n    };\n\n    (builder, test_context)\n}\n'})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"creating-helper-functions",children:"Creating Helper Functions"}),"\n",(0,s.jsxs)(t.p,{children:["The previous step has simulated sending a real deploy on the network. The next code snippet in ",(0,s.jsx)(t.code,{children:"installer_request_builders.rs"})," defines helper functions that will be used throughout the testing framework:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"cep18_check_total_supply"})," - A function for testing the total supply of the CEP-18 contract instance."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"cep18_check_balance_of"})," - A function for checking an account's balance of CEP-18 tokens."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"cep18_check_allowance_of"})," - A function for checking an account's spending allowance from another account's balance."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["These are followed by functions that check specific aspects of the CEP-18 contract. These include ",(0,s.jsx)(t.code,{children:"test_cep18_transfer"}),", ",(0,s.jsx)(t.code,{children:"make_cep18_approve_request"})," and ",(0,s.jsx)(t.code,{children:"test_approve_for"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The following code snippet is an example function that tests the ability to transfer CEP-18 tokens from the default address to the two other addresses established in ",(0,s.jsx)(t.a,{href:"#installing-the-contract",children:"contract installation"}),":"]}),"\n",(0,s.jsxs)(t.details,{children:["\n",(0,s.jsx)(t.summary,{children:"Example helper function"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"// File https://github.com/casper-ecosystem/cep18/blob/dev/tests/src/utility/installer_request_builders.rs\n\npub(crate) fn test_cep18_transfer(\n    builder: &mut InMemoryWasmTestBuilder,\n    test_context: &TestContext,\n    sender1: Key,\n    recipient1: Key,\n    sender2: Key,\n    recipient2: Key) {\n    let TestContext { cep18_token, .. } = test_context;\n\n    // Defining the amount to be transferred to each account.\n\n    let transfer_amount_1 = U256::from(TRANSFER_AMOUNT_1);\n    let transfer_amount_2 = U256::from(TRANSFER_AMOUNT_2);\n\n    // Checking the pre-existing balances of the default address and the two receiving addresses.\n\n    let sender_balance_before = cep18_check_balance_of(builder, cep18_token, sender1);\n    assert_ne!(sender_balance_before, U256::zero());\n\n    let account_1_balance_before = cep18_check_balance_of(builder, cep18_token, recipient1);\n    assert_eq!(account_1_balance_before, U256::zero());\n\n    let account_2_balance_before = cep18_check_balance_of(builder, cep18_token, recipient1);\n    assert_eq!(account_2_balance_before, U256::zero());\n\n    // Creating the first transfer request.\n\n    let token_transfer_request_1 =\n        make_cep18_transfer_request(sender1, cep18_token, recipient1, transfer_amount_1);\n\n    builder\n        .exec(token_transfer_request_1)\n        .expect_success()\n        .commit();\n\n    // Checking the prior balance against the new balance to ensure the transfer occurred correctly.\n\n    let account_1_balance_after = cep18_check_balance_of(builder, cep18_token, recipient1);\n    assert_eq!(account_1_balance_after, transfer_amount_1);\n    let account_1_balance_before = account_1_balance_after;\n\n    let sender_balance_after = cep18_check_balance_of(builder, cep18_token, sender1);\n    assert_eq!(\n        sender_balance_after,\n        sender_balance_before - transfer_amount_1\n    );\n    let sender_balance_before = sender_balance_after;\n\n    // Creating the second transfer request.\n\n    let token_transfer_request_2 =\n        make_cep18_transfer_request(sender2, cep18_token, recipient2, transfer_amount_2);\n\n    builder\n        .exec(token_transfer_request_2)\n        .expect_success()\n        .commit();\n\n    // Checking prior balances against new balances.\n\n    let sender_balance_after = cep18_check_balance_of(builder, cep18_token, sender1);\n    assert_eq!(sender_balance_after, sender_balance_before);\n\n    let account_1_balance_after = cep18_check_balance_of(builder, cep18_token, recipient1);\n    assert!(account_1_balance_after < account_1_balance_before);\n    assert_eq!(\n        account_1_balance_after,\n        transfer_amount_1 - transfer_amount_2\n    );\n\n    let account_2_balance_after = cep18_check_balance_of(builder, cep18_token, recipient2);\n    assert_eq!(account_2_balance_after, transfer_amount_2);\n}\n"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"creating-unit-tests",children:"Creating Unit Tests"}),"\n",(0,s.jsxs)(t.p,{children:["Within this testing context, the ",(0,s.jsxs)(t.a,{href:"https://github.com/casper-ecosystem/cep18/tree/dev/tests/src",children:[(0,s.jsx)(t.code,{children:"tests"})," directory"]})," includes a variety of unit tests, which verify the contract code by invoking the functions defined in the ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep18/blob/dev/tests/src/utility/installer_request_builders.rs",children:"installer_request_builders.rs"})," file."]}),"\n",(0,s.jsxs)(t.p,{children:["The example below shows one of the tests. Visit ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep18/tree/dev/tests/src",children:"GitHub"})," to find all the available tests."]}),"\n",(0,s.jsxs)(t.details,{children:["\n",(0,s.jsx)(t.summary,{children:"Example test querying token properties"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"// File https://github.com/casper-ecosystem/cep18/blob/dev/tests/src/install.rs\n\nuse casper_engine_test_support::DEFAULT_ACCOUNT_ADDR;\nuse casper_types::{Key, U256};\n\nuse crate::utility::{\n    constants::{\n        ALLOWANCES_KEY, BALANCES_KEY, DECIMALS_KEY, NAME_KEY, SYMBOL_KEY, TOKEN_DECIMALS,\n        TOKEN_NAME, TOKEN_SYMBOL, TOKEN_TOTAL_SUPPLY, TOTAL_SUPPLY_KEY,\n    },\n    installer_request_builders::{\n        cep18_check_balance_of, invert_cep18_address, setup, TestContext,\n    },\n};\n\n#[test]\nfn should_have_queryable_properties() {\n    let (mut builder, TestContext { cep18_token, .. }) = setup();\n\n    let name: String = builder.get_value(cep18_token, NAME_KEY);\n    assert_eq!(name, TOKEN_NAME);\n\n    let symbol: String = builder.get_value(cep18_token, SYMBOL_KEY);\n    assert_eq!(symbol, TOKEN_SYMBOL);\n\n    let decimals: u8 = builder.get_value(cep18_token, DECIMALS_KEY);\n    assert_eq!(decimals, TOKEN_DECIMALS);\n\n    let total_supply: U256 = builder.get_value(cep18_token, TOTAL_SUPPLY_KEY);\n    assert_eq!(total_supply, U256::from(TOKEN_TOTAL_SUPPLY));\n\n    let owner_key = Key::Account(*DEFAULT_ACCOUNT_ADDR);\n\n    let owner_balance = cep18_check_balance_of(&mut builder, &cep18_token, owner_key);\n    assert_eq!(owner_balance, total_supply);\n\n    let contract_balance =\n        cep18_check_balance_of(&mut builder, &cep18_token, Key::Hash(cep18_token.value()));\n    assert_eq!(contract_balance, U256::zero());\n\n    // Ensures that Account and Contract ownership is respected and we're not keying ownership under\n    // the raw bytes regardless of variant.\n    let inverted_owner_key = invert_cep18_address(owner_key);\n    let inverted_owner_balance =\n        cep18_check_balance_of(&mut builder, &cep18_token, inverted_owner_key);\n    assert_eq!(inverted_owner_balance, U256::zero());\n}\n"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"running-the-tests",children:"Running the Tests"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep18/blob/dev/tests/src/lib.rs",children:"lib.rs"})," file is configured to run the example integration tests via the ",(0,s.jsx)(t.code,{children:"make test"})," command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"#[cfg(test)]\nmod allowance;\n#[cfg(test)]\nmod install;\n#[cfg(test)]\nmod mint_and_burn;\n#[cfg(test)]\nmod transfer;\n#[cfg(test)]\nmod utility;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To run the tests, navigate to the parent ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep18",children:"cep18 directory"})," and run the command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"make test\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This example uses ",(0,s.jsx)(t.code,{children:"bash"}),". If you are using a Rust IDE, you need to configure it to run the tests."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(_,{...e})}):_(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(96540);const r={},c=s.createContext(r);function a(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);