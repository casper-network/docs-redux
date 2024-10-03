"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[15196],{98442:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>r});var t=a(74848),i=a(28453);const s={title:"Bonding"},d="Bonding as a Validator",o={id:"operators/becoming-a-validator/bonding",title:"Bonding",description:"It is recommended that a bonding request be sent once the node has completed the synchronization process. In a Casper network, bonding takes place through the auction contract via the add_bid.wasm contract. The auction runs for a future era, every era. The chainspec.toml specifies the number of slots available, and the auction will take the top N slots and create the validator set for the future era.",source:"@site/versioned_docs/version-2.0.0/operators/becoming-a-validator/bonding.md",sourceDirName:"operators/becoming-a-validator",slug:"/operators/becoming-a-validator/bonding",permalink:"/2.0.0/operators/becoming-a-validator/bonding",draft:!1,unlisted:!1,tags:[],version:"2.0.0",frontMatter:{title:"Bonding"},sidebar:"operators",previous:{title:"Becoming a Validator",permalink:"/2.0.0/operators/becoming-a-validator/"},next:{title:"Unbonding",permalink:"/2.0.0/operators/becoming-a-validator/unbonding"}},c={},r=[{value:"Method 1: Bonding with the System Auction Contract",id:"bonding-system-auction",level:2},{value:"Method 2: Bonding with Compiled Wasm",id:"bonding-compiled-wasm",level:2},{value:"Checking the Bid Status",id:"check-the-status-of-the-bid-in-the-auction",level:2},{value:"A Losing Bid",id:"losing-bid",level:2},{value:"Avoiding Ejection",id:"avoiding-ejection",level:2},{value:"Withdrawing a Bid",id:"withdrawing-a-bid",level:2}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"bonding-as-a-validator",children:"Bonding as a Validator"})}),"\n",(0,t.jsxs)(n.p,{children:["It is recommended that a bonding request be sent once the node has completed the synchronization process. In a Casper network, bonding takes place through the auction contract via the ",(0,t.jsx)(n.code,{children:"add_bid.wasm"})," contract. The auction runs for a future era, every era. The ",(0,t.jsx)(n.code,{children:"chainspec.toml"})," specifies the number of slots available, and the auction will take the top N slots and create the validator set for the future era."]}),"\n",(0,t.jsxs)(n.p,{children:["In the Testnet, era durations are approximately two hours. The entire process takes approximately 3 eras. Therefore, ",(0,t.jsx)(n.strong,{children:"the time for bid submission to inclusion in the validator set is a minimum of six hours"}),". Bonding requests (bids) are transactions like any other. Because they are generic transactions, they are more resistant to censorship."]}),"\n",(0,t.jsx)(n.h2,{id:"bonding-system-auction",children:"Method 1: Bonding with the System Auction Contract"}),"\n",(0,t.jsxs)(n.p,{children:["This method submits a bid using the system auction contract. Call the existing ",(0,t.jsx)(n.code,{children:"add_bid"})," entry point from the system auction contract. Using this method, you do not need to build any contracts, reducing costs and complexity."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo -u casper casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \\\n--session-hash <SESSION_HASH> \\\n--session-entry-point add_bid \\\n--session-arg \"public_key:public_key='<PUBLIC_KEY_HEX>'\" \\\n--session-arg \"amount:u512='<BID_AMOUNT>'\" \\\n--session-arg \"delegation_rate:u8='<PERCENT_TO_KEEP_FROM_DELEGATORS>'\"\n--session-arg \"minimum_delegation_amount:u64='<MINIMUM_DELEGATION_AMOUNT>'\"\n--session-arg \"maximum_delegation_amount:u64='<MAXIMUM_DELEGATION_AMOUNT>'\"\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the Deploy"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"chain-name"})," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,t.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,t.jsx)(n.em,{children:"casper-test"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"payment-amount"})," - The payment for the Deploy in motes. This entry point call needs 2.5 CSPR for node version ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml",children:"1.5.1"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-hash"})," - Hex-encoded hash of the stored auction contract, which depends on the network you are using. For Casper's Mainnet and Testnet, the hashes are as follows:"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Testnet"}),": ",(0,t.jsx)(n.code,{children:"hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Mainnet"}),": ",(0,t.jsx)(n.code,{children:"hash-ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea"})]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-entry-point"})," - Name of the entrypoint that will be used when calling the contract"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"add_bid"})," entry point expects three arguments:"]}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"public key"}),": The hexadecimal public key of the account's purse submitting the bid. This key must match the secret key that signs the bid"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"amount"}),": The bidding amount"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"delegation_rate"}),": Percentage of the rewards that the node operator retains for their services"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"minimum_delegation_amount"})," (optional): Minimum allowed delegation amount in motes"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"maximum_delegation_amount"})," (optional): Maximum allowed delegation amount in motes"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The command will return a deploy hash, which is needed to verify the deploy's processing results."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Calling the ",(0,t.jsx)(n.code,{children:"add_bid"})," entry point on the auction contract has a fixed cost of 2.5 CSPR."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.p,{children:"This example command uses the Casper Testnet to bid 10,000 CSPR for a validating slot:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo -u casper casper-client put-deploy \\\n--node-address http://65.21.75.254:7777 \\\n--chain-name casper-test \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--payment-amount 2500000000 \\\n--session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \\\n--session-entry-point add_bid \\\n--session-arg \"public_key:public_key='01c297d2931fec7e22b2fb1ae3ca5afdfacc2c82ba501e8ed158eecef82b4dcdee'\" \\\n--session-arg \"amount:U512='$[10000 * 1000000000]'\" \\\n--session-arg \"delegation_rate:u8='10'\"\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next, ",(0,t.jsx)(n.a,{href:"#check-the-status-of-the-bid-in-the-auction",children:"check the status of the auction"})," to see if you have won a validator slot."]}),"\n",(0,t.jsx)(n.h2,{id:"bonding-compiled-wasm",children:"Method 2: Bonding with Compiled Wasm"}),"\n",(0,t.jsxs)(n.p,{children:["Another way to send a bonding transaction to the network is via a deploy containing the compiled ",(0,t.jsx)(n.code,{children:"add_bid.wasm"}),". For details, refer to ",(0,t.jsx)(n.a,{href:"/2.0.0/operators/setup/joining#step-3-build-contracts",children:"Building the Required Contracts"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The following deploy is a template for sending a bonding request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo -u casper casper-client put-deploy \\\n--node-address http://<HOST:PORT> \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT> \\\n--session-path $HOME/casper-node/target/wasm32-unknown-unknown/release/add_bid.wasm \\\n--session-arg \"public_key:public_key='<PUBLIC_KEY_HEX>'\" \\\n--session-arg \"amount:u512='<BID-AMOUNT>'\" \\\n--session-arg \"delegation_rate:u8='<PERCENT_TO_KEEP_FROM_DELEGATORS>'\"\n--session-arg \"minimum_delegation_amount:u64='<MINIMUM_DELEGATION_AMOUNT>'\"\n--session-arg \"maximum_delegation_amount:u64='<MAXIMUM_DELEGATION_AMOUNT>'\"\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the Deploy"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"chain-name"})," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,t.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,t.jsx)(n.em,{children:"casper-test"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"payment-amount"})," - The payment for the Deploy in motes"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-path"})," - The path to the compiled Wasm on your computer"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"add_bid.wasm"})," expects three arguments:"]}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"public_key"}),": The hexadecimal public key of the account's purse submitting the bid. This key must match the secret key that signs the bid"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"amount"}),": The bidding amount"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"delegation_rate"}),": Percentage of the rewards that the node operator retains for their services"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"minimum_delegation_amount"})," (optional): Minimum allowed delegation amount in motes"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"maximum_delegation_amount"})," (optional): Maximum allowed delegation amount in motes"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The command will return a deploy hash, which is needed to verify the deploy's processing results."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["This method is more expensive than calling the ",(0,t.jsx)(n.code,{children:"add_bid"})," entrypoint in the system auction contract, which has a fixed cost of 2.5 CSPR."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsxs)(n.p,{children:["Here is an example request to bond using the ",(0,t.jsx)(n.code,{children:"add_bid.wasm"}),". The payment amount specified is 3 CSPR. You must modify the payment and other values in the deploy based on the network's ",(0,t.jsx)(n.a,{href:"/2.0.0/concepts/glossary/C#chainspec",children:"chainspec.toml"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo -u casper casper-client put-deploy \\\n--node-address http://65.21.235.219:7777 \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--chain-name casper-test \\\n--payment-amount 3000000000 \\\n--session-path ~/casper-node/target/wasm32-unknown-unknown/release/add_bid.wasm \\\n--session-arg \"public_key:public_key='01c297d2931fec7e22b2fb1ae3ca5afdfacc2c82ba501e8ed158eecef82b4dcdee'\" \\\n--session-arg \"amount:U512='$[10000 * 1000000000]'\" \\\n--session-arg \"delegation_rate:u8='10'\"\n"})}),"\n",(0,t.jsx)(n.p,{children:"Next, check the bid status to see if you have won a validator slot."}),"\n",(0,t.jsx)(n.h2,{id:"check-the-status-of-the-bid-in-the-auction",children:"Checking the Bid Status"}),"\n",(0,t.jsxs)(n.p,{children:["Since the bid was submitted using a deploy like any other, perform ",(0,t.jsx)(n.code,{children:"get-deploy"})," using the ",(0,t.jsx)(n.code,{children:"casper-client"}),", to see the execution status."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-deploy --node-address http://<HOST:PORT> <DEPLOY_HASH>\n"})}),"\n",(0,t.jsx)(n.p,{children:"If the bid wins the auction, the public key and associated bonded amount will appear in the auction contract as part of the validator set for a future era. To determine if the bid was accepted, query the auction contract:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-auction-info --node-address http://<HOST:PORT>\n"})}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:"Example auction info response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n"jsonrpc": "2.0",\n"result": {\n "bids": [\n   {\n     "bid": {\n       "bonding_purse": "uref-488a0bbc3c3729f5696965da7a3aeee83805392944e36157909da273255fdb85-007",\n       "delegation_rate": 0,\n       "delegators": [],\n       "release_era": null,\n       "reward": "93328432442428418861229954179737",\n       "staked_amount": "10000000000000000"\n     },\n     "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012"\n   },\n   {\n     "bid": {\n       "bonding_purse": "uref-14e128b099b0c3680100520226e6999b322989586cc22db0630db5ec1329f0a7-007",\n       "delegation_rate": 10,\n       "delegators": [],\n       "release_era": null,\n       "reward": "0",\n       "staked_amount": "9000000000000000"\n     },\n     "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87"\n   },\n   {\n     "bid": {\n       "bonding_purse": "uref-6c0bf8cee1c0749dd9766376910867a84b2e826eaf6c118fcb0224c7d8d229dd-007",\n       "delegation_rate": 10,\n       "delegators": [],\n       "release_era": null,\n       "reward": "266185120443441810685787",\n       "staked_amount": "100000000"\n     },\n     "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f"\n   },\n   {\n     "bid": {\n       "bonding_purse": "uref-3880b3daf95f962f57e6a4b1589564abf7deef58a1fb0753d1108316bba7b3d7-007",\n       "delegation_rate": 10,\n       "delegators": [],\n       "release_era": null,\n       "reward": "0",\n       "staked_amount": "9000000000000000"\n     },\n     "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643"\n   },\n   {\n     "bid": {\n       "bonding_purse": "uref-5a777c9cd53456b49eecf25dcc13e12ddff4106175a69f8e24a7c9a4c135df0d-007",\n       "delegation_rate": 0,\n       "delegators": [],\n       "release_era": null,\n       "reward": "93328432442428418861229954179737",\n       "staked_amount": "10000000000000000"\n     },\n     "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e"\n   }\n ],\n "block_height": 318,\n "era_validators": [\n   {\n     "era_id": 20,\n     "validator_weights": [\n       {\n         "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012",\n         "weight": "10000000000000000"\n       },\n       {\n         "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f",\n         "weight": "100000000"\n       },\n       {\n         "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e",\n         "weight": "10000000000000000"\n       }\n     ]\n   },\n   {\n     "era_id": 21,\n     "validator_weights": [\n       {\n         "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012",\n         "weight": "10000000000000000"\n       },\n       {\n         "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f",\n         "weight": "100000000"\n       },\n       {\n         "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e",\n         "weight": "10000000000000000"\n       }\n     ]\n   },\n   {\n     "era_id": 22,\n     "validator_weights": [\n       {\n         "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012",\n         "weight": "10000000000000000"\n       },\n       {\n         "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f",\n         "weight": "100000000"\n       },\n       {\n         "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e",\n         "weight": "10000000000000000"\n       }\n     ]\n   },\n   {\n     "era_id": 23,\n     "validator_weights": [\n       {\n         "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012",\n         "weight": "10000000000000000"\n       },\n       {\n         "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f",\n         "weight": "100000000"\n       },\n       {\n         "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e",\n         "weight": "10000000000000000"\n       }\n     ]\n   }\n ],\n "state_root_hash": "c16ba80ea200d786008f8100ea79f9cfeb8d7d5ee8b133eda5a50dcf1c7131e8"\n},\n"id": -3624528661787095850\n}\n'})}),"\n"]}),"\n",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsxs)(n.p,{children:["Note the ",(0,t.jsx)(n.code,{children:"era_id"})," and the ",(0,t.jsx)(n.code,{children:"validator_weights"})," in the response above. The current era is the one with the lowest ID in the ",(0,t.jsx)(n.code,{children:"era_validators"})," array. For a given ",(0,t.jsx)(n.code,{children:"era_id"}),", a set of validators is defined. If the public key associated with a bid appears in the ",(0,t.jsx)(n.code,{children:"validator_weights"})," structure for an era, then the account is bonded in that era."]}),"\n",(0,t.jsx)(n.h2,{id:"losing-bid",children:"A Losing Bid"}),"\n",(0,t.jsx)(n.p,{children:"If a bid doesn't win a slot in the auction, it is too low. The resolution is to increase the bid amount. It is possible to submit additional bids, to increase the odds of winning a slot. It is also possible to encourage token holders to delegate stake to you for bonding."}),"\n",(0,t.jsx)(n.h2,{id:"avoiding-ejection",children:"Avoiding Ejection"}),"\n",(0,t.jsxs)(n.p,{children:["To stay bonded and avoid ejection, each validator must keep their node running and in sync with the rest of the network. To recover from ejection, you will find more details ",(0,t.jsx)(n.a,{href:"/2.0.0/operators/becoming-a-validator/recovering",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"withdrawing-a-bid",children:"Withdrawing a Bid"}),"\n",(0,t.jsxs)(n.p,{children:["Follow the steps in ",(0,t.jsx)(n.a,{href:"/2.0.0/operators/becoming-a-validator/unbonding",children:"Unbonding"})," to withdraw a bid."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>o});var t=a(96540);const i={},s=t.createContext(i);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);