"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[3422],{66395:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var t=s(74848),a=s(28453);const c={title:"Multi-Sig Workflow"},d="Multi-Signature Workflow",r={id:"resources/advanced/multi-sig/multi-sig-workflow",title:"Multi-Sig Workflow",description:"The purpose of this tutorial is to provide an example of how to integrate key management on Casper accounts. This guide assumes previous completion of the Two-Party Multi-Signature Deploys tutorial, among other prerequisites. You will also need the Casper CLI client to use the make-deploy, sign-deploy, and send-deploy Casper CLI client commands.",source:"@site/docs/resources/advanced/multi-sig/multi-sig-workflow.md",sourceDirName:"resources/advanced/multi-sig",slug:"/resources/advanced/multi-sig/multi-sig-workflow",permalink:"/docs-redux/next/resources/advanced/multi-sig/multi-sig-workflow",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Multi-Sig Workflow"},sidebar:"resources",previous:{title:"Introduction",permalink:"/docs-redux/next/resources/advanced/multi-sig/"},next:{title:"Additional Examples",permalink:"/docs-redux/next/resources/advanced/multi-sig/other-scenarios"}},i={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Session Code Required for Key Management",id:"session-code-required-for-key-management",level:2},{value:"Tutorial Workflow",id:"tutorial-workflow",level:2},{value:"Step 1: Clone the example Wasm for this workflow",id:"step-1-clone-the-example-wasm-for-this-workflow",level:3},{value:"Step 2: Build the sample Wasm provided",id:"step-2-build-the-sample-wasm-provided",level:3},{value:"Step 3: Increase the primary key&#39;s weight to set thresholds",id:"step-3-increase-the-primary-keys-weight-to-set-thresholds",level:3},{value:"Step 4: Update the account&#39;s action thresholds",id:"step-4-update-the-accounts-action-thresholds",level:3},{value:"Step 5: Add associated keys to the primary account",id:"step-5-add-associated-keys-to-the-primary-account",level:3},{value:"Step 6: Send a deploy from the primary account",id:"step-6-send-a-deploy-from-the-primary-account",level:3},{value:"Step 7: Send a multi-signature deploy from an associated key",id:"step-7-send-a-multi-signature-deploy-from-an-associated-key",level:3},{value:"Removing a Compromised Key",id:"removing-a-compromised-key",level:2},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",details:"details",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"multi-signature-workflow",children:"Multi-Signature Workflow"})}),"\n",(0,t.jsxs)(n.p,{children:["The purpose of this tutorial is to provide an example of how to integrate key management on Casper accounts. This guide assumes previous completion of the ",(0,t.jsx)(n.a,{href:"/docs-redux/next/resources/tutorials/advanced/two-party-multi-sig",children:"Two-Party Multi-Signature Deploys"})," tutorial, among other prerequisites. You will also need the Casper CLI client to use the ",(0,t.jsx)(n.code,{children:"make-deploy"}),", ",(0,t.jsx)(n.code,{children:"sign-deploy"}),", and ",(0,t.jsx)(n.code,{children:"send-deploy"})," Casper CLI client commands."]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Understanding the multi-sig feature and trying it out on Testnet before using it on Mainnet is essential. Incorrect account configurations could render accounts unusable, and you could lose access to all the corresponding CSPR tokens."})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"The following prerequisites are required for this workflow:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Set up all the ",(0,t.jsx)(n.a,{href:"/docs-redux/next/developers/prerequisites",children:"development environment prerequisites"}),", including a ",(0,t.jsx)(n.a,{href:"/docs-redux/next/developers/prerequisites#setting-up-an-account",children:"funded account"})," and the ",(0,t.jsx)(n.a,{href:"/docs-redux/next/developers/prerequisites#install-casper-client",children:"Casper CLI client"})]}),"\n",(0,t.jsxs)(n.li,{children:["Complete the ",(0,t.jsx)(n.a,{href:"/docs-redux/next/resources/tutorials/advanced/two-party-multi-sig",children:"Two-Party Multi-Signature Deploys"})," workflow and set up the source account for multi-signature deploys"]}),"\n",(0,t.jsxs)(n.li,{children:["Understand the Casper ",(0,t.jsx)(n.a,{href:"/docs-redux/next/concepts/design/casper-design#accounts-head",children:"account-based model"})," before proceeding"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"session-code-required-for-key-management",children:"Session Code Required for Key Management"}),"\n",(0,t.jsx)(n.p,{children:"To manage an account's associated keys and thresholds, you must run session code that executes within the account's context. Note that the session code provided in this workflow is not a general-purpose program and needs to be modified for each use case."}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Do not run these examples on Mainnet. Update each command for your environment."})}),"\n",(0,t.jsx)(n.h2,{id:"tutorial-workflow",children:"Tutorial Workflow"}),"\n",(0,t.jsx)(n.h3,{id:"step-1-clone-the-example-wasm-for-this-workflow",children:"Step 1: Clone the example Wasm for this workflow"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/casper-ecosystem/tutorials-example-wasm/tree/dev/multi-sig",children:"multi-sig GitHub repository"})," contains session code that can be used for learning how to configure Casper accounts using associated keys and multi-signature deploys. Clone the repository and navigate to the corresponding folder."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/casper-ecosystem/tutorials-example-wasm/ && cd multi-sig\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you take a look at the repository structure and open the ",(0,t.jsx)(n.code,{children:"contracts"})," folder, you will see session code with different functionality:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"add_account.wasm"})," - adds an associated account with a specified weight"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"update_associated_keys.wasm"})," - updates a key\u2019s weight"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"update_thresholds.wasm"})," - updates the account's action thresholds for deployment and account management"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"remove_account.wasm"})," - removes an associated account from the primary account"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-2-build-the-sample-wasm-provided",children:"Step 2: Build the sample Wasm provided"}),"\n",(0,t.jsx)(n.p,{children:"Prepare your environment, build and test the session code provided with the following commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"rustup update\nmake prepare\nmake test\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"rustup update"})," - checks and updates your Rust installation"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"make prepare"})," - sets the Wasm target"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"make test"})," - builds and verifies the session code"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Note that in the test folder there is a ",(0,t.jsx)(n.code,{children:"contract.wasm"})," that is needed for the tests to pass. If you run ",(0,t.jsx)(n.code,{children:"make clean"})," that file will be deleted."]}),"\n",(0,t.jsx)(n.h3,{id:"step-3-increase-the-primary-keys-weight-to-set-thresholds",children:"Step 3: Increase the primary key's weight to set thresholds"}),"\n",(0,t.jsxs)(n.p,{children:["This workflow starts by increasing the weight of the primary key from 1 to 3. To make account updates, a key's weight must equal or exceed the ",(0,t.jsx)(n.code,{children:"key_management"})," threshold. In a later step, you will add the associated accounts that will participate in signing deploys."]}),"\n",(0,t.jsx)(n.p,{children:"Retrieve the account hash of the primary key you are working with using a block explorer or the Casper CLI client."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client account-address --public-key <INSERT_PUBLIC_KEY_HEX>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Update the weight of the primary key to 3 by calling the ",(0,t.jsx)(n.code,{children:"update_associated_keys.wasm"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy --node-address https://rpc.testnet.casperlabs.io/ \\\n--chain-name "casper-test" \\\n--payment-amount 500000000 \\\n--secret-key $PATH/secret_key.pem \\\n--session-path target/wasm32-unknown-unknown/release/update_associated_keys.wasm \\\n--session-arg "associated_key:key=\'account-hash-<ACCOUNT_HASH>\'" \\\n--session-arg "new_weight:u8=\'3\'"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Verify that the deploy ran successfully."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-deploy --node-address https://rpc.testnet.casperlabs.io/ <DEPLOY_HASH>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Retrieve the latest state root hash and check the primary account details."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address https://rpc.testnet.casperlabs.io/\n\ncasper-client query-global-state \\\n--node-address https://rpc.testnet.casperlabs.io/ \\\n--state-root-hash <STATE_ROOT_HASH> \\\n--key account-hash-<PRIMARY_ACCOUNT_HASH>\n"})}),"\n",(0,t.jsx)(n.p,{children:"The primary key in this account should now have weight 3."}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:"Account details"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"Account": {\n  "account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n  "action_thresholds": {\n    "deployment": 1,\n    "key_management": 1\n  },\n  "associated_keys": [\n    {\n      "account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n      "weight": 3\n    }\n  ],\n  "main_purse": "uref-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c-007",\n  "named_keys": []\n}\n'})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The table below summarizes the updates."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Threshold / Key"}),(0,t.jsx)(n.th,{children:"Previous weight"}),(0,t.jsx)(n.th,{children:"Current weight"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"deployment"})}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"key_management"})}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Primary key (",(0,t.jsx)(n.code,{children:"1ed5..."}),")"]}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"step-4-update-the-accounts-action-thresholds",children:"Step 4: Update the account's action thresholds"}),"\n",(0,t.jsxs)(n.p,{children:["Set up a multi-signature scheme for the account by updating the ",(0,t.jsx)(n.code,{children:"deployment"})," and ",(0,t.jsx)(n.code,{children:"key_management"})," thresholds. The ",(0,t.jsx)(n.code,{children:"update_thresholds.wasm"})," will take two arguments and set the ",(0,t.jsx)(n.code,{children:"deployment"})," threshold to 2 and the ",(0,t.jsx)(n.code,{children:"key_management"})," threshold to 3."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n--node-address https://rpc.testnet.casperlabs.io \\\n--chain-name casper-test \\\n--payment-amount 500000000 \\\n--secret-key $PATH/secret_key.pem \\\n--session-path target/wasm32-unknown-unknown/release/update_thresholds.wasm \\\n--session-arg \"deployment_threshold:u8='2'\" \\\n--session-arg \"key_management_threshold:u8='3'\"\n"})}),"\n",(0,t.jsx)(n.p,{children:"Verify that the deploy ran successfully."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-deploy --node-address https://rpc.testnet.casperlabs.io/ <DEPLOY_HASH>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Retrieve the latest state root hash and check the primary account details."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address https://rpc.testnet.casperlabs.io/\n\ncasper-client query-global-state \\\n--node-address https://rpc.testnet.casperlabs.io/ \\\n--state-root-hash <STATE_ROOT_HASH> \\\n--key account-hash-<PRIMARY_ACCOUNT_HASH>\n"})}),"\n",(0,t.jsx)(n.p,{children:"The account's action thresholds should look like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"action_thresholds": {\n  "deployment": 2,\n  "key_management": 3\n},\n'})}),"\n",(0,t.jsx)(n.p,{children:"This account configuration requires a cumulative weight of 3 to manage keys and a cumulative weight of 2 to send deploys. For example, if two associated keys have weight 1, they must both sign and send the deploy as part of this account context. The cumulative weight of these two keys would not meet the threshold for key management."}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:"Account details"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"Account": {\n  "account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n  "action_thresholds": {\n    "deployment": 2,\n    "key_management": 3\n  },\n  "associated_keys": [\n    {\n      "account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n      "weight": 3\n    }\n  ],\n  "main_purse": "uref-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c-007",\n  "named_keys": []\n}\n'})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The table below summarizes the updates."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Threshold / Key"}),(0,t.jsx)(n.th,{children:"Previous weight"}),(0,t.jsx)(n.th,{children:"Current weight"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"deployment"})}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"key_management"})}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Primary key (",(0,t.jsx)(n.code,{children:"1ed5..."}),")"]}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"step-5-add-associated-keys-to-the-primary-account",children:"Step 5: Add associated keys to the primary account"}),"\n",(0,t.jsxs)(n.p,{children:["To add an associated key to the primary account, use the ",(0,t.jsx)(n.code,{children:"add_account.wasm"})," provided. This example adds two keys to the primary account (",(0,t.jsx)(n.code,{children:"account-hash-d89c*"}),"): ",(0,t.jsx)(n.code,{children:"user_1"})," with ",(0,t.jsx)(n.code,{children:"account-hash-e2d0*"}),", and ",(0,t.jsx)(n.code,{children:"user_2"})," with ",(0,t.jsx)(n.code,{children:"account-hash-04a9*"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy --node-address https://rpc.testnet.casperlabs.io/ \\\n--chain-name "casper-test" \\\n--payment-amount 500000000 \\\n--secret-key $PATH/secret_key.pem \\\n--session-path target/wasm32-unknown-unknown/release/add_account.wasm \\\n--session-arg "new_key:key=\'account-hash-e2d00525cac31ae2756fb155f289d276c6945b6914923fe275de0cb127bffee7" \\\n--session-arg "weight:u8=\'1\'"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Verify that the deploy ran successfully."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-deploy --node-address https://rpc.testnet.casperlabs.io/ <DEPLOY_HASH>\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy --node-address https://rpc.testnet.casperlabs.io/ \\\n--chain-name "casper-test" \\\n--payment-amount 500000000 \\\n--secret-key $PATH/secret_key.pem \\\n--session-path target/wasm32-unknown-unknown/release/add_account.wasm \\\n--session-arg "new_key:key=\'account-hash-04a9691a9f8f05a0f08bd686f188b27c7dbcd644b415759fd3ca043d916ea02f" \\\n--session-arg "weight:u8=\'1\'"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Verify that the deploy ran successfully."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-deploy --node-address https://rpc.testnet.casperlabs.io/ <DEPLOY_HASH>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Retrieve the latest state root hash and check the primary account details."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address https://rpc.testnet.casperlabs.io/\n\ncasper-client query-global-state \\\n--node-address https://rpc.testnet.casperlabs.io/ \\\n--state-root-hash <STATE_ROOT_HASH> \\\n--key account-hash-<PRIMARY_ACCOUNT_HASH>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now, the account should have one primary key with weight 3, and two associated accounts, each with weight 1."}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:"Account details"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"Account": {\n  "account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n  "action_thresholds": {\n    "deployment": 2,\n    "key_management": 3\n  },\n  "associated_keys": [\n    {\n      "account_hash": "account-hash-04a9691a9f8f05a0f08bd686f188b27c7dbcd644b415759fd3ca043d916ea02f",\n      "weight": 1\n    },\n    {\n      "account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n      "weight": 3\n    },\n    {\n      "account_hash": "account-hash-e2d00525cac31ae2756fb155f289d276c6945b6914923fe275de0cb127bffee7",\n      "weight": 1\n    }\n  ],\n  "main_purse": "uref-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c-007",\n  "named_keys": []\n}\n'})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"All associated keys should be kept incredibly secure to ensure the security and integrity of the account."}),"\n",(0,t.jsx)(n.li,{children:"After all associated keys and action thresholds have been set to the desired multi-signature scheme, the weight of the original primary key can be increased or lowered, depending on your use case. Be careful with this! If you lower the primary key's weight below the key management threshold, the account will require multiple signatures for key management. The account will be unusable if you do not have enough associated keys set up."}),"\n"]})}),"\n",(0,t.jsx)(n.p,{children:"The table below summarizes the updates."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Threshold / Key"}),(0,t.jsx)(n.th,{children:"Previous weight"}),(0,t.jsx)(n.th,{children:"Current weight"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"deployment"})}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"key_management"})}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Primary key (",(0,t.jsx)(n.code,{children:"1ed5..."}),")"]}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Associated key (",(0,t.jsx)(n.code,{children:"04a9..."}),")"]}),(0,t.jsx)(n.td,{children:"N/A"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Associated key (",(0,t.jsx)(n.code,{children:"e2d0..."}),")"]}),(0,t.jsx)(n.td,{children:"N/A"}),(0,t.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"step-6-send-a-deploy-from-the-primary-account",children:"Step 6: Send a deploy from the primary account"}),"\n",(0,t.jsxs)(n.p,{children:["This step sends a deploy containing Wasm (",(0,t.jsx)(n.code,{children:"contract.wasm"}),"), which adds a named key to the account. The source code for the Wasm comes from the ",(0,t.jsx)(n.a,{href:"https://github.com/casper-ecosystem/hello-world",children:"hello-world"})," repository. The deploy should succeed as the primary account has a weight of 3, which is greater than the deployment threshold."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy --chain-name casper-test \\\n--payment-amount 3000000000 \\\n--session-path tests/wasm/contract.wasm \\\n--secret-key $PATH/secret_key.pem \\\n--session-arg \"my-key-name:string='primary_account_key'\" \\\n--session-arg \"message:string='Hello, World'\"\n"})}),"\n",(0,t.jsx)(n.p,{children:"Verify that the deploy ran successfully."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-deploy --node-address https://rpc.testnet.casperlabs.io/ <DEPLOY_HASH>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Retrieve the latest state root hash and check the primary account details."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address https://rpc.testnet.casperlabs.io/\n\ncasper-client query-global-state \\\n--node-address https://rpc.testnet.casperlabs.io/ \\\n--state-root-hash <STATE_ROOT_HASH> \\\n--key account-hash-<PRIMARY_ACCOUNT_HASH>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"hello_world.wasm"})," should have run and added a named key to the account."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"named_keys": [\n  {\n    "key": "uref-9b9ecaa9e5e235fc6955d4d528cb1b5b38f2d800f6cbbc55351131a3701b5a81-007",\n    "name": "my-key-name"\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"step-7-send-a-multi-signature-deploy-from-an-associated-key",children:"Step 7: Send a multi-signature deploy from an associated key"}),"\n",(0,t.jsx)(n.p,{children:"Given the multi-signature scheme set up in this example, two associated keys need to sign to send a deploy from one of the associated keys. This example uses the following commands to sign a deploy with multiple keys and send it to the network:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"make-deploy"})," - creates and signs a deploy, saving the output to a file"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sign-deploy"})," - adds additional signatures for a multi-signature deploy"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"send-deploy"})," - sends the deploy to the network"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Similar to step 6, this example uses Wasm (",(0,t.jsx)(n.code,{children:"contract.wasm"}),"), which adds a named key to the account. The deploy originates from the primary account, specified with the ",(0,t.jsx)(n.code,{children:"--session-account"})," argument. The deploy needs two signatures to meet the ",(0,t.jsx)(n.code,{children:"deployment"})," weight equal to 2. Once both associated keys sign the deploy, either can send it to the network."]}),"\n",(0,t.jsxs)(n.p,{children:["When using the ",(0,t.jsx)(n.code,{children:"--session-account"})," argument, specify the hex-encoded public key of the primary account context under which the session code will be executed."]}),"\n",(0,t.jsxs)(n.p,{children:["One associated key creates and signs the deploy with the ",(0,t.jsx)(n.code,{children:"make-deploy"})," command, indicating the account context under which the session code will be executed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client make-deploy --chain-name casper-test \\\n--payment-amount 300000000 \\\n--session-path tests/wasm/contract.wasm \\\n--secret-key $PATH/user_1_secret_key.pem \\\n--session-arg \"my-key-name:string='user_1_key'\" \\\n--session-arg \"message:string='Hello, World'\" \\\n--session-account 01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986 \\\n--output hello_world_one_signature\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The second associated key signs the deploy with ",(0,t.jsx)(n.code,{children:"sign-deploy"})," to meet the deployment threshold for the account."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client sign-deploy -i hello_world_one_signature -k $PATH/user_2_secret_key.pem  -o hello_world_two_signatures\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The deploy can be sent to the network using the ",(0,t.jsx)(n.code,{children:"send-deploy"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client send-deploy --node-address https://rpc.testnet.casperlabs.io -i hello_world_two_signatures\n"})}),"\n",(0,t.jsx)(n.p,{children:"Verify that the deploy ran successfully."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-deploy --node-address https://rpc.testnet.casperlabs.io/ <DEPLOY_HASH>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Retrieve the latest state root hash and check the primary account details."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address https://rpc.testnet.casperlabs.io/\n\ncasper-client query-global-state \\\n--node-address https://rpc.testnet.casperlabs.io/ \\\n--state-root-hash <STATE_ROOT_HASH> \\\n--key account-hash-<PRIMARY_ACCOUNT_HASH>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"hello_world.wasm"})," should have run and added a named key to the account."]}),"\n",(0,t.jsx)(n.h2,{id:"removing-a-compromised-key",children:"Removing a Compromised Key"}),"\n",(0,t.jsxs)(n.p,{children:["This example shows how to remove a compromised key from an account. The example adds an associated key only to remove it using the ",(0,t.jsx)(n.code,{children:"remove_account.wasm"})," session code."]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsx)(n.p,{children:"Remove keys with caution! Do not run this example on Mainnet."}),(0,t.jsx)(n.p,{children:"Before removing a key, ensure the remaining associated keys can combine their weight to meet the threshold for key management. Otherwise, the account could become unusable. Changing key weights or adding new associated keys would only be possible by meeting the key management threshold. Proceed with caution."})]}),"\n",(0,t.jsx)(n.p,{children:"Given the current setup, the primary account will add an associated key, and then remove it. In other use cases, associated keys may need to combine their signatures to send a multi-sig deploy that removes a key."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy --node-address https://rpc.testnet.casperlabs.io/ \\\n--chain-name "casper-test" \\\n--payment-amount 500000000 \\\n--secret-key $PATH/secret_key.pem \\\n--session-path target/wasm32-unknown-unknown/release/add_account.wasm \\\n--session-arg "new_key:key=\'account-hash-1fed34baa6807a7868bb18f91b161d99ebf21763810fe4c92e39775d10bbf1f8" \\\n--session-arg "weight:u8=\'1\'"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Verify that the deploy ran successfully."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-deploy --node-address https://rpc.testnet.casperlabs.io/ <DEPLOY_HASH>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Retrieve the latest state root hash and check the primary account details."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address https://rpc.testnet.casperlabs.io/\n\ncasper-client query-global-state \\\n--node-address https://rpc.testnet.casperlabs.io/ \\\n--state-root-hash <STATE_ROOT_HASH> \\\n--key account-hash-<PRIMARY_ACCOUNT_HASH>\n"})}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:"Account details"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"Account": {\n  "account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n  "action_thresholds": {\n    "deployment": 2,\n    "key_management": 3\n  },\n  "associated_keys": [\n    {\n      "account_hash": "account-hash-04a9691a9f8f05a0f08bd686f188b27c7dbcd644b415759fd3ca043d916ea02f",\n      "weight": 1\n    },\n    {\n      "account_hash": "account-hash-1fed34baa6807a7868bb18f91b161d99ebf21763810fe4c92e39775d10bbf1f8",\n      "weight": 1\n    },\n    {\n      "account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n      "weight": 3\n    },\n    {\n      "account_hash": "account-hash-e2d00525cac31ae2756fb155f289d276c6945b6914923fe275de0cb127bffee7",\n      "weight": 1\n    }\n  ],\n  "main_purse": "uref-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c-007",\n  "named_keys": []\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The table below summarizes the updates after calling the ",(0,t.jsx)(n.code,{children:"add_account.wasm"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Threshold / Key"}),(0,t.jsx)(n.th,{children:"Previous weight"}),(0,t.jsx)(n.th,{children:"Current weight"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"deployment"})}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"key_management"})}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Primary key (",(0,t.jsx)(n.code,{children:"1ed5..."}),")"]}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Associated key (",(0,t.jsx)(n.code,{children:"04a9..."}),")"]}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Associated key (",(0,t.jsx)(n.code,{children:"e2d0..."}),")"]}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Associated key (",(0,t.jsx)(n.code,{children:"1fed..."}),")"]}),(0,t.jsx)(n.td,{children:"N/A"}),(0,t.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"remove_account.wasm"})," will remove the newly added account to demonstrate the possibility of removing associated keys that may have been compromised."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy --node-address https://rpc.testnet.casperlabs.io/ \\\n--chain-name "casper-test" \\\n--payment-amount 500000000 \\\n--secret-key $PATH/secret_key.pem \\\n--session-path target/wasm32-unknown-unknown/release/remove_account.wasm \\\n--session-arg "remove_key:key=\'account-hash-1fed34baa6807a7868bb18f91b161d99ebf21763810fe4c92e39775d10bbf1f8"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Verify that the deploy ran successfully."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-deploy --node-address https://rpc.testnet.casperlabs.io/ <DEPLOY_HASH>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Retrieve the latest state root hash and check the primary account details."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address https://rpc.testnet.casperlabs.io/\n\ncasper-client query-global-state \\\n--node-address https://rpc.testnet.casperlabs.io/ \\\n--state-root-hash <STATE_ROOT_HASH> \\\n--key account-hash-<PRIMARY_ACCOUNT_HASH>\n"})}),"\n",(0,t.jsx)(n.p,{children:"The resulting account should not contain the associated key that was just removed."}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:"Account details"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"Account": {\n  "account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n  "action_thresholds": {\n    "deployment": 2,\n    "key_management": 3\n  },\n  "associated_keys": [\n    {\n      "account_hash": "account-hash-04a9691a9f8f05a0f08bd686f188b27c7dbcd644b415759fd3ca043d916ea02f",\n      "weight": 1\n    },\n    {\n      "account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n      "weight": 3\n    },\n    {\n      "account_hash": "account-hash-e2d00525cac31ae2756fb155f289d276c6945b6914923fe275de0cb127bffee7",\n      "weight": 1\n    }\n  ],\n  "main_purse": "uref-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c-007",\n  "named_keys": []\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The table below summarizes the updates after calling the ",(0,t.jsx)(n.code,{children:"remove_account.wasm"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Threshold / Key"}),(0,t.jsx)(n.th,{children:"Previous weight"}),(0,t.jsx)(n.th,{children:"Current weight"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"deployment"})}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"key_management"})}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Primary key (",(0,t.jsx)(n.code,{children:"1ed5..."}),")"]}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Associated key (",(0,t.jsx)(n.code,{children:"04a9..."}),")"]}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Associated key (",(0,t.jsx)(n.code,{children:"e2d0..."}),")"]}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Associated key (",(0,t.jsx)(n.code,{children:"1fed..."}),")"]}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"N/A (Removed)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsxs)(n.p,{children:["The next section contains ",(0,t.jsx)(n.a,{href:"/docs-redux/next/resources/advanced/multi-sig/other-scenarios",children:"additional examples"})," where Casper's multi-signature feature would be helpful."]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>r});var t=s(96540);const a={},c=t.createContext(a);function d(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);