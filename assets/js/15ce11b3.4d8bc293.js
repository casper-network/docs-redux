"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[7746],{4209:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=s(4848),o=s(8453);const c={title:"Two-Party Multi-Sig",slug:"/resources/tutorials/advanced/two-party-multi-sig"},a="Two-Party Multi-Signature Deploys",i={id:"resources/advanced/two-party-multi-sig",title:"Two-Party Multi-Sig",description:"Accounts on a Casper network can associate other accounts to allow or require a multiple-signature scheme for deploys.",source:"@site/docs/resources/advanced/two-party-multi-sig.md",sourceDirName:"resources/advanced",slug:"/resources/tutorials/advanced/two-party-multi-sig",permalink:"/docs-redux/resources/tutorials/advanced/two-party-multi-sig",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Two-Party Multi-Sig",slug:"/resources/tutorials/advanced/two-party-multi-sig"},sidebar:"resources",previous:{title:"Advanced Tutorials",permalink:"/docs-redux/resources/tutorials/advanced/"},next:{title:"Introduction",permalink:"/docs-redux/resources/advanced/multi-sig/"}},r={},d=[{value:"Configuring the Main Account",id:"configuring-the-main-account",level:2},{value:"Running session code to set up associated keys",id:"running-session-code-to-set-up-associated-keys",level:3},{value:"Confirming Processing and Account Status",id:"confirming-execution-and-account-status",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"two-party-multi-signature-deploys",children:"Two-Party Multi-Signature Deploys"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs-redux/concepts/global-state",children:"Accounts"})," on a Casper network can associate other accounts to allow or require a multiple-signature scheme for deploys."]}),"\n",(0,t.jsx)(n.p,{children:"This workflow describes how a trivial two-party multi-signature scheme for signing and sending deploys can be enforced for an account on a Casper network. This workflow assumes:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["You meet the ",(0,t.jsx)(n.a,{href:"/docs-redux/developers/prerequisites",children:"prerequisites"}),", including having the Casper command-line client and a valid node address"]}),"\n",(0,t.jsxs)(n.li,{children:["You have the main account's ",(0,t.jsx)(n.code,{children:"PublicKey"})," hex (",(0,t.jsx)(n.strong,{children:"MA"}),") and another ",(0,t.jsx)(n.code,{children:"PublicKey"})," hex to associate (",(0,t.jsx)(n.strong,{children:"AA"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["You have previously ",(0,t.jsx)(n.a,{href:"/docs-redux/developers/cli/sending-deploys",children:"sent deploys"})," to a Casper network"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-the-main-account",children:"Configuring the Main Account"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Incorrect account configurations could render accounts defunct and unusable. We highly recommend executing any changes to an account in a test environment like Testnet before performing them in a live environment like Mainnet."})}),"\n",(0,t.jsxs)(n.p,{children:["Each Account has an ",(0,t.jsx)(n.code,{children:"associated_keys"})," field, which is a list containing account hashes and their corresponding weights. Accounts can be associated by adding the account hash to the ",(0,t.jsx)(n.code,{children:"associated_keys"})," field."]}),"\n",(0,t.jsxs)(n.p,{children:["An Account on a Casper network assigns weights to keys associated with it. For a single key to sign a deploy, or edit the state of the account, its weight must be greater than or equal to a set threshold. The thresholds are labeled as the ",(0,t.jsx)(n.code,{children:"action_thresholds"})," for the account."]}),"\n",(0,t.jsx)(n.p,{children:"Each account within a Casper network has two action thresholds that manage the permissions to send deploys or manage the account. Each threshold defines the minimum weight that a single key or a combination of keys must have to either:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Send a deploy to the network; determined by the ",(0,t.jsx)(n.code,{children:"deployment"})," threshold"]}),"\n",(0,t.jsxs)(n.li,{children:["Edit the ",(0,t.jsx)(n.code,{children:"associated keys"})," and the ",(0,t.jsx)(n.code,{children:"action_thresholds"}),"; determined by the ",(0,t.jsx)(n.code,{children:"key_management"})," threshold"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To enforce the multi-signature (multi-sig) feature for an account on a Casper network, the ",(0,t.jsx)(n.em,{children:"main key"})," and ",(0,t.jsx)(n.em,{children:"associated key"}),"'s combined weight must be greater than or equal to the ",(0,t.jsx)(n.code,{children:"deployment"})," threshold. This can be achieved by having each key's weight equal to half of the ",(0,t.jsx)(n.code,{children:"deployment"})," threshold."]}),"\n",(0,t.jsx)(n.h3,{id:"running-session-code-to-set-up-associated-keys",children:"Running session code to set up associated keys"}),"\n",(0,t.jsxs)(n.p,{children:["To set up the associated keys for an Account, you must run session code that executes within the account's context. You will find an example of such session code on ",(0,t.jsx)(n.a,{href:"https://github.com/casper-ecosystem/two-party-multi-sig/",children:"GitHub"}),". Note that this session code is not a general-purpose program and needs to be modified for each use case."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/casper-ecosystem/two-party-multi-sig\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/casper-ecosystem/two-party-multi-sig/blob/main/contract/src/main.rs",children:"session code"})," executes ",(0,t.jsx)(n.strong,{children:"3 crucial steps"})," to enforce the multi-sig scheme for the main account:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Adds an associated key to the account; we will refer to this key as ",(0,t.jsx)(n.strong,{children:"AA"})]}),"\n",(0,t.jsxs)(n.li,{children:["Raises the ",(0,t.jsx)(n.code,{children:"action"})," threshold to ",(0,t.jsx)(n.code,{children:"2"}),", because action thresholds for deploys cannot be greater than the action threshold for key management. By default, all action thresholds are set to ",(0,t.jsx)(n.code,{children:"1"})]}),"\n",(0,t.jsxs)(n.li,{children:["Raises the ",(0,t.jsx)(n.code,{children:"deployment"})," threshold to ",(0,t.jsx)(n.code,{children:"2"}),", such that the weight required to send a deploy is split equally between the keys associated with the account"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The repository contains a ",(0,t.jsx)(n.em,{children:"Makefile"})," with the build commands necessary to compile the contract and generate the necessary Wasm."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd two-party-multi-sig\nmake build-contract\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The compiled Wasm will be saved on this path: ",(0,t.jsx)(n.code,{children:"contract/target/wasm32-unknown-unknown/release/contract.wasm"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The Casper command-line client can be used to send the compiled Wasm to the network for execution."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n--node-address http://<peer-ip-address>:7777 \\\n--secret-key <secret-key-MA>.pem \\\n--chain-name casper-test \\\n--payment-amount 2500000000 \\\n--session-path <path-to-contract-wasm> \\\n--session-arg \"deployment-account:account_hash='account-hash-<hash-AA>'\"\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"node-address"})," - An IP address of a node on the network"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the main account"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"chain-name"})," - The chain-name to the network where you wish to send the deploy (this example uses the Testnet)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"payment-amount"})," - The cost of the deploy. This example uses 2.5 CSPR, which may need to be adjusted based on the network ",(0,t.jsx)(n.a,{href:"/docs-redux/concepts/glossary/C#chainspec",children:"chainspec"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-path"})," - The path to the contract Wasm"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-arg"})," - The contract takes the account hash of the associated account as an argument labeled ",(0,t.jsx)(n.code,{children:"deployment-account"}),". You can pass this argument using the ",(0,t.jsx)(n.code,{children:"--session-arg"})," flag in the command line client"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Important response fields:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"result"."deploy_hash"'})," - the address of the executed deploy, needed to look up additional information about the transfer"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": Save the returned ",(0,t.jsx)(n.code,{children:"deploy_hash"})," from the output to query information about execution status."]}),"\n",(0,t.jsx)(n.h3,{id:"confirming-execution-and-account-status",children:"Confirming Processing and Account Status"}),"\n",(0,t.jsxs)(n.p,{children:["Account configuration on a Casper blockchain is stored in a ",(0,t.jsx)(n.a,{href:"/docs-redux/concepts/glossary/M#merkle-tree",children:"Merkle Tree"})," and is a snapshot of the blockchain's ",(0,t.jsx)(n.a,{href:"/docs-redux/concepts/global-state",children:"Global State"}),". The representation of global state for a given block can be computed by executing the deploys (including transfers) within the block and its ancestors. The root node of the Merkle Tree identifying a particular state is called the ",(0,t.jsx)(n.code,{children:"state-root-hash"})," and is stored in every executed block."]}),"\n",(0,t.jsxs)(n.p,{children:["To check that the account was configured correctly, you need the ",(0,t.jsx)(n.code,{children:"state-root-hash"})," corresponding to the block that contains your deploy. To obtain the ",(0,t.jsx)(n.code,{children:"state-root-hash"}),", you need to:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs-redux/resources/tutorials/beginner/querying-network#querying-deploys",children:"Confirm the execution status of the deploy"})," and obtain the hash of the block containing it"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs-redux/resources/tutorials/beginner/querying-network#querying-blocks",children:"Query the block containing the deploy"})," to obtain the corresponding ",(0,t.jsx)(n.code,{children:"state_root_hash"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Using the ",(0,t.jsx)(n.code,{children:"state_root_hash"})," and the ",(0,t.jsx)(n.code,{children:"hex-encoded-public-key"})," of the main account, query the network and check the account's configuration."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client query-global-state \\\n--node-address http://<peer-ip-address>:7777 \\\n--state-root-hash <state-root-hash-from-block> \\\n--key <hex-encoded-public-key-MA>\n"})}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:"Example output"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "id": 1126043166167626077,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "merkle_proof": "2226 chars",\n        "stored_value": {\n            "Account": {\n                "account_hash": "account-hash-dc88a1819381c5ebbc3432e5c1d94df18cdcd7253b85259eeebe0ec8661bb84a",\n                "action_thresholds": {\n                    "deployment": 2,\n                    "key_management": 2\n                },\n                "associated_keys": [\n                    {\n                        "account_hash": "account-hash-12dee9fe535bfd8fd335fce1ba1f972f26bb60029a303b310d85419357d18f51",\n                        "weight": 1\n                    },\n                    {\n                        "account_hash": "account-hash-dc88a1819381c5ebbc3432e5c1d94df18cdcd7253b85259eeebe0ec8661bb84a",\n                        "weight": 1\n                    }\n                ],\n                "main_purse": "uref-74b20e9722d3f087f9dc431e9f0fcc6a803c256e005fa45b64a101512001cb78-007",\n                "named_keys": []\n            }\n        }\n    }\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In the example output, you can see the account hashes listed within the ",(0,t.jsx)(n.code,{children:"associated_keys"})," section. Each key has weight ",(0,t.jsx)(n.code,{children:"1"}),"; since the action threshold for ",(0,t.jsx)(n.code,{children:"deployment"})," is ",(0,t.jsx)(n.code,{children:"2"}),", neither account can sign and send a deploy individually. Thus, the deploy needs to be signed by the secret keys of each account to reach the required threshold."]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var t=s(6540);const o={},c=t.createContext(o);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);