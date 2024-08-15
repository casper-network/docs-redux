"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[899],{5699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=n(4848),r=n(8453);const c={},i="Testing Smart Contracts",o={id:"developers/writing-onchain-code/testing-contracts",title:"Testing Smart Contracts",description:"Introduction",source:"@site/docs/developers/writing-onchain-code/testing-contracts.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/testing-contracts",permalink:"/developers/writing-onchain-code/testing-contracts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Writing a Basic Smart Contract in Rust",permalink:"/developers/writing-onchain-code/simple-contract"},next:{title:"Upgrading and Maintaining Smart Contracts",permalink:"/developers/writing-onchain-code/upgrading-contracts"}},a={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Defining Dependencies in <code>Cargo.toml</code>",id:"defining-dependencies-in-cargotoml",level:3},{value:"Writing the Tests",id:"writing-the-tests",level:2},{value:"Importing Builders and Constants",id:"importing-builders-and-constants",level:3},{value:"Creating a Test Function",id:"creating-a-test-function",level:3},{value:"Installing the Contract",id:"installing-the-contract",level:4},{value:"Calling the Contract by Hash",id:"calling-the-contract-by-hash",level:4},{value:"Calling the Contract using Session Code",id:"calling-the-contract-using-session-code",level:4},{value:"Evaluating and Comparing Results",id:"evaluating-and-comparing-results",level:4},{value:"Testing Contracts that Call Contracts",id:"testing-contracts-that-call-contracts",level:2},{value:"Running the Tests",id:"running-the-tests",level:2},{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"Further Testing",id:"further-testing",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"testing-smart-contracts",children:"Testing Smart Contracts"})}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["As part of the Casper development environment, we provide a ",(0,s.jsx)(t.a,{href:"https://docs.rs/casper-engine-test-support/latest/casper_engine_test_support/",children:"testing framework"})," to test new contracts without running a full node. The framework creates an instance of the Casper execution engine, which can confirm successful deploys and monitor changes to global state using assertions. The Casper test crate must be included within the Rust workspace alongside the Wasm-producing crate to be validated."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"The Casper test support crate is one of many options for testing contracts before sending them to a Casper network. If you prefer, you can create your own testing framework."})}),"\n",(0,s.jsxs)(t.h3,{id:"defining-dependencies-in-cargotoml",children:["Defining Dependencies in ",(0,s.jsx)(t.code,{children:"Cargo.toml"})]}),"\n",(0,s.jsxs)(t.p,{children:["This guide uses the project structure, and example contract outlined ",(0,s.jsx)(t.a,{href:"/developers/writing-onchain-code/simple-contract#directory-structure",children:"here"})," for creating tests."]}),"\n",(0,s.jsxs)(t.p,{children:["To begin, outline the required test dependencies in the ",(0,s.jsx)(t.code,{children:"/tests/Cargo.toml"})," file. Specify the dependencies for your tests similarly and update the crate versions. Dependencies may vary with each project. For the counter tests, we have the following dependencies:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'[dependencies]\ncasper-execution-engine = "5.0.0"\ncasper-engine-test-support = { version = "5.0.0", features = ["test-support"] }\ncasper-types = "3.0.0"\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"casper-execution-engine"})," - This crate imports the execution engine functionality, enabling Wasm execution within the test framework. Each node contains an instance of an execution engine, and the testing framework simulates this behavior."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"casper-engine-test-support"})," - A helper crate that provides the interface to write tests and interact with an instance of the execution engine."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"casper-types"})," - Types shared by many Casper crates for use on a Casper network."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"writing-the-tests",children:"Writing the Tests"}),"\n",(0,s.jsxs)(t.p,{children:["The tests for the contract usually reside in the ",(0,s.jsx)(t.code,{children:"tests"})," directory. Tests for the counter contract reside in the ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/counter/blob/master/tests/src/integration_tests.rs",children:"tests/src/integration-tests.rs"})," file. Notice that this file contains an empty ",(0,s.jsx)(t.code,{children:"main"})," method to initialize the test program. Alternatively, we could use the ",(0,s.jsx)(t.code,{children:"#![no_main]"})," annotation at the top of the file, as we did ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/counter/blob/8a622cd92d768893b9ef9fc2b150c674415be87e/contract-v1/src/main.rs#L1-L2",children:"here"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'fn main() {\n panic!("Execute \\"cargo test\\" to test the contract, not \\"cargo run\\".");\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"#[cfg(test)]"})," attribute tells the Rust compiler to compile and run the tests only when invoking ",(0,s.jsx)(t.code,{children:"cargo test"}),", not while debugging or releasing. All testing functions reside within the grouping mechanism ",(0,s.jsx)(t.code,{children:"mod tests"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"#[cfg(test)]\nmod tests {\n    // The entire test program resides here\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"importing-builders-and-constants",children:"Importing Builders and Constants"}),"\n",(0,s.jsxs)(t.p,{children:["Import external test support, which includes a variety of default values and helper methods to be used throughout the test. Additionally, you will need to import any ",(0,s.jsx)(t.a,{href:"/developers/json-rpc/types_cl",children:"CLTypes"})," used within the contract code to be tested."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"    // Outlining aspects of the Casper test support crate to include.\n    use casper_engine_test_support::{\n        ExecuteRequestBuilder, InMemoryWasmTestBuilder, DEFAULT_ACCOUNT_ADDR,\n        PRODUCTION_RUN_GENESIS_REQUEST,\n    };\n    // Custom Casper types that will be used within this test.\n    use casper_types::{runtime_args, ContractHash, RuntimeArgs};\n"})}),"\n",(0,s.jsx)(t.p,{children:"Next, you need to define any global variables or constants for the test."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'    // Contract Wasm File Paths (Constants)\n    const COUNTER_V1_WASM: &str = "counter-v1.wasm";\n    const COUNTER_V2_WASM: &str = "counter-v2.wasm";\n    const COUNTER_V3_WASM: &str = "counter-v3.wasm";\n    const COUNTER_CALL_WASM: &str = "counter-call.wasm";\n\n    // Contract Storage Keys (Constants)\n    const CONTRACT_KEY: &str = "counter";\n    const COUNT_KEY: &str = "count";\n    const LAST_UPDATED_KEY: &str = "last_updated";\n    const CONTRACT_VERSION_KEY: &str = "version";\n\n    // Contract Entry Points (Constants)\n    const ENTRY_POINT_COUNTER_DECREMENT: &str = "counter_decrement";\n    const ENTRY_POINT_COUNTER_INC: &str = "counter_inc";\n    const ENTRY_POINT_COUNTER_LAST_UPDATED_AT: &str = "counter_last_updated_at";\n'})}),"\n",(0,s.jsx)(t.h3,{id:"creating-a-test-function",children:"Creating a Test Function"}),"\n",(0,s.jsxs)(t.p,{children:["Each test function installs the contract and calls entry points to assert that the contract's behavior matches expectations. The test uses the ",(0,s.jsx)(t.code,{children:"InMemoryWasmTestBuilder"})," to invoke an instance of the execution engine, effectively simulating the process of installing the contract on the chain."]}),"\n",(0,s.jsxs)(t.p,{children:["As part of this process, we use the ",(0,s.jsx)(t.code,{children:"PRODUCTION_RUN_GENESIS_REQUEST"})," to install the system contracts necessary for the tests, including the ",(0,s.jsx)(t.code,{children:"Mint"}),", ",(0,s.jsx)(t.code,{children:"Auction"}),", and ",(0,s.jsx)(t.code,{children:"HandlePayment"}),"contracts, as well as establishing a default account and funding the associated purse."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"    #[test]\n    /// Install version 1 of the counter contract and check its available entry points. ...\n    fn install_version1_and_check_entry_points() {\n        let mut builder = InMemoryWasmTestBuilder::default();\n        builder.run_genesis(&PRODUCTION_RUN_GENESIS_REQUEST).commit();\n\n        // See the repository for the full function.\n    }\n"})}),"\n",(0,s.jsx)(t.h4,{id:"installing-the-contract",children:"Installing the Contract"}),"\n",(0,s.jsxs)(t.p,{children:["Test functions use the ",(0,s.jsx)(t.code,{children:"ExecuteRequestBuilder"})," to install a contract to be tested. In the counter tests, we use standard dependencies and the counter contract. Within the execution request, we specify the ",(0,s.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"})," established by our genesis builder as the account sending the Deploy."]}),"\n",(0,s.jsxs)(t.p,{children:["After building the ",(0,s.jsx)(t.code,{children:"ExecuteRequestBuilder"})," (in this example, ",(0,s.jsx)(t.code,{children:"contract_installation_request"}),"), we process the request through ",(0,s.jsx)(t.code,{children:"builder.exec"})," and then add and process other requests as necessary."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"    // Install the contract.\n    let contract_v1_installation_request = ExecuteRequestBuilder::standard(\n        *DEFAULT_ACCOUNT_ADDR,\n        COUNTER_V1_WASM,\n        runtime_args! {},\n    )\n    .build();\n\n    builder\n        .exec(contract_v1_installation_request)\n        .expect_success()\n        .commit();\n"})}),"\n",(0,s.jsx)(t.h4,{id:"calling-the-contract-by-hash",children:"Calling the Contract by Hash"}),"\n",(0,s.jsxs)(t.p,{children:["To verify the installed contract, we need its contract hash. The test will then call its entry points using the ",(0,s.jsx)(t.code,{children:"contract_call_by_hash"})," function. The following code retrieves the contract hash from the named keys of the ",(0,s.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"})," that sent the installation Deploy."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'    // Check the contract hash.\n    let contract_v1_hash = builder\n        .get_expected_account(*DEFAULT_ACCOUNT_ADDR)\n        .named_keys()\n        .get(CONTRACT_KEY)\n        .expect("must have contract hash key as part of contract creation")\n        .into_hash()\n        .map(ContractHash::new)\n        .expect("must get contract hash");\n'})}),"\n",(0,s.jsx)(t.p,{children:"Next, we test an entry point that should not exist in the first version of the contract."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"    // Call the decrement entry point, which should not be in version 1 before the upgrade.\n    let contract_decrement_request = ExecuteRequestBuilder::contract_call_by_hash(\n        *DEFAULT_ACCOUNT_ADDR,\n        contract_v1_hash,\n        ENTRY_POINT_COUNTER_DECREMENT,\n        runtime_args! {},\n    )\n    .build();\n\n    // Try executing the decrement entry point and expect an error.\n    builder\n        .exec(contract_decrement_request)\n        .expect_failure()\n        .commit();\n"})}),"\n",(0,s.jsx)(t.h4,{id:"calling-the-contract-using-session-code",children:"Calling the Contract using Session Code"}),"\n",(0,s.jsxs)(t.p,{children:["In the counter example, we use the session code included in the ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/counter/blob/master/counter-call/src/main.rs",children:"counter-call.wasm"})," file. For more details on what session code is and how it differs from contract code, see the ",(0,s.jsx)(t.a,{href:"/developers/writing-onchain-code/contract-vs-session#what-is-session-code",children:"next section"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The following session code uses the contract hash to identify the contract, the account for sending the deploy (",(0,s.jsx)(t.code,{children:"DEFAULT_ACCOUNT_ADDR"}),"), the deploy to be sent (",(0,s.jsx)(t.code,{children:"COUNTER_CALL_WASM"}),"), and the runtime arguments required. Once again, the ",(0,s.jsx)(t.code,{children:"ExecuteRequestBuilder"})," simulates the execution of session code and calls the ",(0,s.jsx)(t.code,{children:"counter-inc"})," entry point."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"    // Use session code to increment the counter.\n    let session_code_request = ExecuteRequestBuilder::standard(\n        *DEFAULT_ACCOUNT_ADDR,\n        COUNTER_CALL_WASM,\n        runtime_args! {\n            CONTRACT_KEY => contract_v1_hash\n        },\n    )\n    .build();\n\n    builder.exec(session_code_request)\n        .expect_success()\n        .commit();\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Testing Time-Sensitive Functions"})}),(0,s.jsx)(t.p,{children:"Normally, smart contracts operate on a blockchain where time advances in blocks. Testing functions that rely on time can be tricky."}),(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["Simulating Time with ",(0,s.jsx)(t.code,{children:"with_block_time"})]})}),(0,s.jsxs)(t.p,{children:["When building a request to call a contract function (using ",(0,s.jsx)(t.code,{children:"ExecuteRequestBuilder"}),"), you can set a custom block time with ",(0,s.jsx)(t.code,{children:".with_block_time(desired_time)"}),". This pretends the function is called at that specific time."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example:"})}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"    let session_code_request = ExecuteRequestBuilder::standard(\n        *DEFAULT_ACCOUNT_ADDR,\n        COUNTER_CALL_WASM,\n        runtime_args! {\n            CONTRACT_KEY => contract_v1_hash\n        },\n    .with_block_time(5000)\n    .build();\n"})}),(0,s.jsx)(t.p,{children:"This lets you test how your contract behaves at different points in time, all within your unit test."})]}),"\n",(0,s.jsx)(t.h4,{id:"evaluating-and-comparing-results",children:"Evaluating and Comparing Results"}),"\n",(0,s.jsxs)(t.p,{children:["After calling the contract, we should verify the results received to ensure the contract operated as intended. The ",(0,s.jsx)(t.code,{children:"builder"})," method retrieves the required information and converts it to the value type required. Then, ",(0,s.jsx)(t.code,{children:"assert_eq!()"})," compares the result against the expected value."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'    // Verify the value of count is now 1.\n    let incremented_count = builder\n        .query(None, count_key, &[])\n        .expect("should be stored value.")\n        .as_cl_value()\n        .expect("should be cl value.")\n        .clone()\n        .into_t::<i32>()\n        .expect("should be i32.");\n\n    assert_eq!(incremented_count, 1);\n'})}),"\n",(0,s.jsxs)(t.p,{children:["For more test examples, visit the ",(0,s.jsx)(t.a,{href:"https://github.com/casper-network/casper-node/tree/dev/smart_contracts/contracts/test",children:"casper-node"})," GitHub repository."]}),"\n",(0,s.jsx)(t.h2,{id:"testing-contracts-that-call-contracts",children:"Testing Contracts that Call Contracts"}),"\n",(0,s.jsxs)(t.p,{children:["If the code to be tested involves multiple contracts, they must be installed within the test. The exceptions are system contracts installed as part of the ",(0,s.jsx)(t.code,{children:"DEFAULT_RUN_GENESIS_REQUEST"}),". The testing framework exists independently of any Casper network, so you will need access to the original contract installation code or the Wasm you wish to include."]}),"\n",(0,s.jsxs)(t.p,{children:["Each contract installation will require an additional Wasm file installed through a ",(0,s.jsx)(t.code,{children:"Deploy"})," using ",(0,s.jsx)(t.code,{children:"ExecuteRequestBuilder"}),". Depending on your requirements as a smart contract author, you may need to use ",(0,s.jsx)(t.a,{href:"/resources/tutorials/advanced/return-values-tutorial",children:"return values"})," to interact with stacks of contracts. Interaction between contracts will require session code to initiate the process, as contracts will not execute actions autonomously."]}),"\n",(0,s.jsxs)(t.p,{children:["The major difference between calling a contract from session code versus contract code is the ability to use non-standard dependencies for the ",(0,s.jsx)(t.code,{children:"ExecuteRequestBuilder"}),". Where session code must designate a Wasm file within the standard dependencies, contract code can use one of the four available options for calling other contracts, namely:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"contract_call_by_hash"})," - Calling a contract by its ",(0,s.jsx)(t.code,{children:"ContractHash"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"contract_call_by_name"})," - Calling a contract referenced by a named key in the signer's Account context."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"versioned_contract_call_by_hash"})," - Calling a specific contract version using its ",(0,s.jsx)(t.code,{children:"ContractHash"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"versioned_contract_call_by_name"})," - Calling a specific version of a contract referenced by a named key in the signer's Account context."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The calling contract must also provide an entry point and any necessary runtime arguments in all cases."}),"\n",(0,s.jsx)(t.h2,{id:"running-the-tests",children:"Running the Tests"}),"\n",(0,s.jsxs)(t.p,{children:["To run the tests, the counter example uses a ",(0,s.jsx)(t.code,{children:"Makefile"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"make test\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Under the hood, the ",(0,s.jsx)(t.code,{children:"Makefile"})," generates a ",(0,s.jsx)(t.code,{children:"tests/wasm"})," folder, copies the Wasm files to the folder, and runs the tests using ",(0,s.jsx)(t.code,{children:"cargo test"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"test: build-contract\n\tmkdir -p tests/wasm\n\tcp contract-v1/target/wasm32-unknown-unknown/release/counter-v1.wasm tests/wasm\n\tcp contract-v2/target/wasm32-unknown-unknown/release/counter-v2.wasm tests/wasm\n\tcp counter-call/target/wasm32-unknown-unknown/release/counter-call.wasm tests/wasm\n\tcd tests && cargo test\n"})}),"\n",(0,s.jsx)(t.h2,{id:"video-walkthrough",children:"Video Walkthrough"}),"\n",(0,s.jsxs)(t.p,{children:["The following brief video describes testing ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/counter/",children:"sample contract code"}),"."]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=7",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,s.jsx)(t.h2,{id:"further-testing",children:"Further Testing"}),"\n",(0,s.jsxs)(t.p,{children:["Unit testing is only one way to test contracts before installing them on a Casper network. After unit testing a contract, you may perform ",(0,s.jsx)(t.a,{href:"/developers/dapps/setup-nctl",children:"local network testing"})," using NCTL. This allows you to set up and control multiple local Casper nodes to perform ",(0,s.jsx)(t.a,{href:"/developers/dapps/nctl-test",children:"testing in an other simulated network environment"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["You may also wish to test your contracts on the Casper ",(0,s.jsx)(t.a,{href:"https://testnet.cspr.live/",children:"Testnet"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Understand ",(0,s.jsx)(t.a,{href:"/developers/writing-onchain-code/contract-vs-session#what-is-session-code",children:"session code"})," and how it triggers a smart contract."]}),"\n",(0,s.jsxs)(t.li,{children:["Learn to ",(0,s.jsx)(t.a,{href:"/developers/cli/installing-contracts",children:"install a contract and query global state"})," with the Casper command-line client."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(6540);const r={},c=s.createContext(r);function i(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);