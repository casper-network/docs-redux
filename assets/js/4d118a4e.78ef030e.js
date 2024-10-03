"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[18621],{33041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(74848),a=t(28453);const i={title:"Delegating Tokens"},d="Delegating with the Casper Client",r={id:"developers/cli/delegate",title:"Delegating Tokens",description:"This document details a workflow where an account holder on a Casper network can delegate tokens to a validator.",source:"@site/docs/developers/cli/delegate.md",sourceDirName:"developers/cli",slug:"/developers/cli/delegate",permalink:"/developers/cli/delegate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Delegating Tokens"},sidebar:"developers",previous:{title:"Verifying a Transfer",permalink:"/developers/cli/transfers/verify-transfer"},next:{title:"Redelegating Tokens with the Casper Client",permalink:"/developers/cli/redelegate"}},o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Acquiring a Validator&#39;s Public Key",id:"acquiring-a-validators-public-key",level:3},{value:"Sending the Delegation Request",id:"sending-the-delegation-request",level:2},{value:"Method 1: Delegating with the System Auction Contract",id:"delegating-system-auction",level:3},{value:"Method 2: Delegating with Compiled Wasm",id:"delegating-compiled-wasm",level:3},{value:"Building the delegation Wasm",id:"building-the-delegation-wasm",level:4},{value:"Sending the delegation request",id:"sending-the-delegation-wasm-request",level:4},{value:"Confirming the Delegation",id:"confirming-the-delegation",level:2},{value:"Checking Validator Status",id:"checking-validator-status",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"delegating-with-the-casper-client",children:"Delegating with the Casper Client"})}),"\n",(0,s.jsx)(n.p,{children:"This document details a workflow where an account holder on a Casper network can delegate tokens to a validator."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["You meet all prerequisites listed ",(0,s.jsx)(n.a,{href:"/developers/prerequisites",children:"here"}),", including having a valid ",(0,s.jsx)(n.code,{children:"node-address"})," and the Casper command-line client"]}),"\n",(0,s.jsxs)(n.li,{children:["You have previously ",(0,s.jsx)(n.a,{href:"/developers/cli/sending-transactions",children:"installed a smart contract"})," to a Casper network"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#acquiring-a-validators-public-key",children:"Acquiring a Validator's Public Key"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"acquiring-a-validators-public-key",children:"Acquiring a Validator's Public Key"}),"\n",(0,s.jsxs)(n.p,{children:["This workflow will take you through the additional prerequisite to acquire a validator's public key before sending the ",(0,s.jsx)(n.a,{href:"/developers/cli/delegate#sending-the-delegation-request",children:"delegation request"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Any rewards earned are also redelegated by default to the validator from the initial delegation request. Therefore at the time of undelegation, you should consider undelegating the initial amount plus any additional rewards earned through the delegation process."}),"\n",(0,s.jsx)(n.p,{children:"The active validator set constantly rotates; therefore, when delegating to a validator, remember that the validator you selected may have been rotated out of the set."}),"\n",(0,s.jsx)(n.h2,{id:"sending-the-delegation-request",children:"Sending the Delegation Request"}),"\n",(0,s.jsxs)(n.p,{children:["There are two ways to delegate CSPR to a validator. The recommended and cheaper method is to call the ",(0,s.jsx)(n.code,{children:"delegate"})," entry point from the system auction contract. The second method involves building the ",(0,s.jsx)(n.code,{children:"delegate.wasm"})," from the ",(0,s.jsx)(n.code,{children:"casper-node"})," repository and installing it on the network."]}),"\n",(0,s.jsx)(n.p,{children:"We recommend testing the following steps on the official Testnet before performing them in a live environment like the Casper Mainnet."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The minimum amount to delegate is 500 CSPR (500,000,000,000 motes)."})}),"\n",(0,s.jsx)(n.h3,{id:"delegating-system-auction",children:"Method 1: Delegating with the System Auction Contract"}),"\n",(0,s.jsxs)(n.p,{children:["This method calls the existing ",(0,s.jsx)(n.code,{children:"delegate"})," entry point from the system auction contract. Using this method, you do not need to build any contracts, reducing costs and complexity."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \\\n--session-hash <SESSION_HASH> \\\n--session-entry-point delegate \\\n--session-arg \"validator:public_key='<HEX_ENCODED_VALIDATOR_PULIC_KEY>'\" \\\n--session-arg \"amount:u512='<AMOUNT_TO_DELEGATE>'\" \\\n--session-arg \"delegator:public_key='<HEX_ENCODED_DELEGATOR_PULIC_KEY>'\"\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the Deploy"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chain-name"})," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,s.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,s.jsx)(n.em,{children:"casper-test"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"payment-amount"})," - The payment for the Deploy in motes. This entry point call needs 2.5 CSPR for node version ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml",children:"1.5.1"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"session-hash"})," - Hex-encoded hash of the stored auction contract, which depends on the network you are using. For Casper's Mainnet and Testnet, the hashes are as follows:"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Testnet"}),": ",(0,s.jsx)(n.code,{children:"hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mainnet"}),": ",(0,s.jsx)(n.code,{children:"hash-ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"session-entry-point"})," - Name of the entry point that will be used when calling the contract"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"delegate"})," entry point expects three arguments:"]}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"validator"}),": The hexadecimal public key of the validator receiving the delegated tokens"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"amount"}),": The number of tokens to be delegated"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"delegator"}),": The hexadecimal public key of the account delegating tokens to a validator. ",(0,s.jsx)(n.strong,{children:"This key must match the secret key that signs the delegation"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The command will return a deploy hash, which is needed to verify the deploy's processing results. Refer to the ",(0,s.jsx)(n.a,{href:"/resources/tutorials/beginner/querying-network#querying-deploys",children:"Deploy Status"})," section for more details."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Calling the ",(0,s.jsx)(n.code,{children:"delegate"})," entry point on the auction contract has a fixed cost of 2.5 CSPR."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.p,{children:"This example shows an account delegating 500 CSPR:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n--node-address http://65.21.75.254:7777  \\\n--chain-name casper-test \\\n--secret-key ~/KEYS/secret_key.pem \\\n--payment-amount 2500000000 \\\n--session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \\\n--session-entry-point delegate \\\n--session-arg \"validator:public_key='01aa17f7b9889480b1bd34c3f94f263b229c7a9b01dd4dda19c2dd1d38d176c7a0'\" \\\n--session-arg \"amount:u512='500000000000'\" \\\n--session-arg \"delegator:public_key='01e3d3392c2e0b943abe709b25de5c353e5e1e9d95c7a76e3dd343d8aa1aa08d51'\"\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, ",(0,s.jsx)(n.a,{href:"#confirming-the-delegation",children:"confirm the delegation"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"delegating-compiled-wasm",children:"Method 2: Delegating with Compiled Wasm"}),"\n",(0,s.jsxs)(n.p,{children:["Another way to send a delegation is to compile the ",(0,s.jsx)(n.code,{children:"delegate.wasm"})," and send it to the network via a deploy. Here are the steps to compile the contract yourself."]}),"\n",(0,s.jsx)(n.h4,{id:"building-the-delegation-wasm",children:"Building the delegation Wasm"}),"\n",(0,s.jsxs)(n.p,{children:["Obtain the ",(0,s.jsx)(n.code,{children:"delegate.wasm"})," by cloning the ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-node",children:"casper-node"})," repository."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/casper-network/casper-node\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Prepare the Rust environment and then build the contracts using the ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/dev/Makefile",children:"Makefile"})," provided in the repository."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd casper-node\nmake setup-rs\nmake build-contracts-rs\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once you build the contracts, you can use the ",(0,s.jsx)(n.code,{children:"delegate.wasm"})," to create a deploy that will initiate the delegation process. The Wasm can be found in this directory: ",(0,s.jsx)(n.code,{children:"target/wasm32-unknown-unknown/release/"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ls target/wasm32-unknown-unknown/release/delegate.wasm\n"})}),"\n",(0,s.jsx)(n.h4,{id:"sending-the-delegation-wasm-request",children:"Sending the delegation request"}),"\n",(0,s.jsxs)(n.p,{children:["In this example, we use the Casper client to send a deploy containing the ",(0,s.jsx)(n.code,{children:"delegate.wasm"})," to the network to initiate the delegation process."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \\\n--session-path <PATH_TO_WASM>/delegate.wasm \\\n--session-arg \"validator:public_key='<HEX_ENCODED_VALIDATOR_PULIC_KEY>'\" \\\n--session-arg \"amount:u512='<AMOUNT_TO_DELEGATE>'\" \\\n--session-arg \"delegator:public_key='<HEX_ENCODED_DELEGATOR_PULIC_KEY>'\"\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the Deploy"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chain-name"})," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,s.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,s.jsx)(n.em,{children:"casper-test"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"payment-amount"})," - The payment for the Deploy in motes. This entry point call needs 2.5 CSPR for node version ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml",children:"1.5.1"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"session-path"})," - The path to where the ",(0,s.jsx)(n.code,{children:"delegate.wasm"})," is located"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"delegate"})," entry point expects three arguments:"]}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"validator"}),": The hexadecimal public key of the validator receiving the delegated tokens"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"amount"}),": The number of tokens to be delegated"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"delegator"}),": The hexadecimal public key of the account delegating tokens to a validator. ",(0,s.jsx)(n.strong,{children:"This key must match the secret key that signs the delegation"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The command will return a deploy hash, which is needed to verify the deploy's processing results. Refer to the ",(0,s.jsx)(n.a,{href:"/resources/tutorials/beginner/querying-network#querying-deploys",children:"Deploy Status"})," section for more details."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsxs)(n.p,{children:["This example command uses the Casper Testnet to delegate 500 CSPR, and the payment amount is 6 CSPR. The payment amount varies based on each deploy and network ",(0,s.jsx)(n.a,{href:"/concepts/glossary/C#chainspec",children:"chainspec"}),". However, notice that this method is more expensive than the previous one that calls the delegate entry point."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n--node-address http://65.21.75.254:7777  \\\n--chain-name casper-test \\\n--secret-key ~/KEYS/secret_key.pem \\\n--payment-amount 20000000000 \\\n--session-path ~/delegate.wasm \\\n--session-arg \"validator:public_key='01aa17f7b9889480b1bd34c3f94f263b229c7a9b01dd4dda19c2dd1d38d176c7a0'\" \\\n--session-arg \"amount:u512='500000000000'\" \\\n--session-arg \"delegator:public_key='01e3d3392c2e0b943abe709b25de5c353e5e1e9d95c7a76e3dd343d8aa1aa08d51'\"\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, ",(0,s.jsx)(n.a,{href:"#confirming-the-delegation",children:"confirm the delegation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"confirming-the-delegation",children:"Confirming the Delegation"}),"\n",(0,s.jsxs)(n.p,{children:["A Casper network maintains an ",(0,s.jsx)(n.em,{children:"auction"})," where validators ",(0,s.jsx)(n.em,{children:"bid"})," on slots to become part of the active validator set. Delegation rewards are only earned for a validator who has won the auction and is part of the active set. Thus to ensure the delegated tokens can earn rewards, you must first check the following:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Your delegation is part of the ",(0,s.jsx)(n.em,{children:"bid"})," to the ",(0,s.jsx)(n.em,{children:"auction"})]}),"\n",(0,s.jsxs)(n.li,{children:["The validator is part of the ",(0,s.jsx)(n.em,{children:"active"})," validator set"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Once the deploy has been processed, you can query the auction for information to confirm our delegation. Use the Casper command-line client to create an RPC request with the following query:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client get-auction-info \\\n--node-address http://<peer-ip-address>:7777\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Request fields"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node-address"})," - An IP address of a node on the network"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"get-auction-info"})," call will return all the bids currently in the auction contract and the list of active validators for ",(0,s.jsx)(n.code,{children:"4"})," future eras from the present era."]}),"\n",(0,s.jsxs)(n.p,{children:["Below is a sample of the ",(0,s.jsx)(n.code,{children:"bids"})," structure:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"bids": [\n{\n  "bid": {\n    "bonding_purse": "uref-a5ce7dbc5f7e02ef52048e64b2ff4693a472a1a56fe71e83b180cd33271b2ed9-007",\n    "delegation_rate": 1,\n    "delegators": [\n      {\n        "bonding_purse": "uref-ca9247ad56a4d5be70484303133e2d6db97f7d7385772155763749af98ace0b0-007",\n        "delegatee": "0102db4e11bccb3f9d823c82b9389625d383867d00d09b343043cdbe5ca56dd1fd",\n        "public_key": "010c7fef89bf1fc38363bd2ec20bbfb5e1152d6a9579c8847615c59c7e461ece89",\n        "staked_amount": "1"\n      },\n      {\n        "bonding_purse": "uref-38a2e9cad51b380e478c9a325578f4bbdaa0337b99b9ab9bf1dc2a114eb948b9-007",\n        "delegatee": "0102db4e11bccb3f9d823c82b9389625d383867d00d09b343043cdbe5ca56dd1fd",\n        "public_key": "016ebb38d613f2550e7c21ff9d99f6249b4ae5fb9e30938f6ece2d84a22a36b035",\n        "staked_amount": "478473232415318176495746923"\n      }\n    ],\n    "inactive": false,\n    "staked_amount": "493754513995516852173468935"\n  },\n  "public_key": "0102db4e11bccb3f9d823c82b9389625d383867d00d09b343043cdbe5ca56dd1fd"\n},\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The delegation request has been processed successfully if your public key and associated amount appear in the ",(0,s.jsx)(n.code,{children:"bid"})," data structure. However, this does not mean the associated validator is part of the validator set, so you must check the validator status recorded in the ",(0,s.jsx)(n.code,{children:"era_validators"})," structure."]}),"\n",(0,s.jsx)(n.h4,{id:"checking-validator-status",children:"Checking Validator Status"}),"\n",(0,s.jsxs)(n.p,{children:["The auction maintains a field called ",(0,s.jsx)(n.code,{children:"era_validators"}),", which contains the validator information for 4 future eras from the current era. An entry for a specific era lists the ",(0,s.jsx)(n.code,{children:"PublicKeys"})," of the active validators for that era, along with their stake in the network."]}),"\n",(0,s.jsxs)(n.p,{children:["If a validator is part of the set, its public key will be in the ",(0,s.jsx)(n.code,{children:"era_validators"})," field as part of the ",(0,s.jsx)(n.code,{children:"Auction"})," data structure returned by ",(0,s.jsx)(n.code,{children:"casper-client get-auction-info"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In the response, check the ",(0,s.jsx)(n.code,{children:'"auction_state"."era_validators"'})," structure, which should contain the public key of the selected validator for the era in which the validator will be active."]}),"\n",(0,s.jsxs)(n.p,{children:["Below is an example of the ",(0,s.jsx)(n.code,{children:"era_validators"})," structure:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"block_height":105,\n     "era_validators":[\n        {\n           "era_id":9,\n           "validator_weights":[\n              {\n                 "public_key":"0102db4e11bccb3f9d823c82b9389625d383867d00d09b343043cdbe5ca56dd1fd",\n                 "weight":"648151805935226166098427654"\n              },\n              {\n                 "public_key":"01aa67009b37a23c7ad0ca632da5da239d5db46067d4b34125f61b04611f610baf",\n                 "weight":"648151805938466925128109996"\n              },\n              {\n                 "public_key":"01b7afa2beeddffd13458b763d7a00259f7dc0fa45498dfed05b4d7df4b7d65e2c",\n                 "weight":"648151805935226166098427656"\n              },\n              {\n                 "public_key":"01ca5463dac047cbd750d97ee42dd810cf1e081ece7d83ae4fc03b25a9ecad3b6a",\n                 "weight":"648151805938466925128109998"\n              },\n              {\n                 "public_key":"01f4a7644695aa129eba09fb3f11d0277b2bea1a3d5bc1933bcda93fdb4ad17e55",\n                 "weight":"648151805938466925128110000"\n              }\n           ]\n        },\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, we see the public keys of the active validators in Era ",(0,s.jsx)(n.code,{children:"9"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": Validators earn delegation rewards only when they are part of the active set. This information is time-sensitive; therefore, a validator selected today may not be part of the set tomorrow. Keep this in mind when creating a delegation request."]}),"\n",(0,s.jsx)(n.p,{children:"If your account is on the official Testnet or Mainnet, you can use the block explorer to look up your account balance and see that the tokens have been delegated:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://testnet.cspr.live/",children:"Testnet explorer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cspr.live/",children:"Mainnet explorer"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var s=t(96540);const a={},i=s.createContext(a);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);