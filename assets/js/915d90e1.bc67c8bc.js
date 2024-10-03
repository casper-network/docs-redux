"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[12455],{67689:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=i(74848),s=i(28453);const a={title:"Change bid public key"},c="Changing the Public Key Associated with a Validator Bid",r={id:"operators/becoming-a-validator/change-bid-public-key",title:"Change bid public key",description:"The public key associated with a given validator bid can be changed through the auction contract's changebidpublic_key entry point.",source:"@site/docs/operators/becoming-a-validator/change-bid-public-key.md",sourceDirName:"operators/becoming-a-validator",slug:"/operators/becoming-a-validator/change-bid-public-key",permalink:"/docs-redux/operators/becoming-a-validator/change-bid-public-key",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Change bid public key"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Method 1: Calling the system auction contract&#39;s <code>change_bid_public_key</code> entry point",id:"method-1-calling-the-system-auction-contracts-change_bid_public_key-entry-point",level:2},{value:"Method 2: Using compiled WASM",id:"method-2-using-compiled-wasm",level:2},{value:"Bridge records",id:"bridge-records",level:2},{value:"Limitations",id:"limitations",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"changing-the-public-key-associated-with-a-validator-bid",children:"Changing the Public Key Associated with a Validator Bid"})}),"\n",(0,t.jsxs)(n.p,{children:["The public key associated with a given validator bid can be changed through the auction contract's ",(0,t.jsx)(n.code,{children:"change_bid_public_key"})," entry point."]}),"\n",(0,t.jsx)(n.p,{children:'An example of this functionality would be to transfer ownership of a validator "slot" to a different party or to migrate a node to a backup server. By leveraging the system contract we can perform those operations more securely by making sure that no private key files need to be copied or transmitted between servers.'}),"\n",(0,t.jsx)(n.p,{children:"When the public key is changed all relevant delegations are also changed to be associated with the updated validator bid."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"For a public key change to be performed successfully there must not exist a validator bid associated with the target public key."}),"\n",(0,t.jsxs)(n.h2,{id:"method-1-calling-the-system-auction-contracts-change_bid_public_key-entry-point",children:["Method 1: Calling the system auction contract's ",(0,t.jsx)(n.code,{children:"change_bid_public_key"})," entry point"]}),"\n",(0,t.jsxs)(n.p,{children:["The public key associated with a given bid can be changed by calling the ",(0,t.jsx)(n.code,{children:"change_bid_public_key"})," entry point of the system auction contract. Using this method, you do not need to build any contracts, which reduces costs and complexity."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo -u casper casper-client put-txn \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \\\n--session-hash <SESSION_HASH> \\\n--session-entry-point change_bid_public_key \\\n--session-arg=\"public_key:public_key='<PUBLIC_KEY_HEX>'\" \\\n--session-arg=\"new_public_key:public_key='<PUBLIC_KEY_HEX>'\"\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the Transaction."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"chain-name"})," - The chain-name to the network where you wish to send the Transaction. For Mainnet, use ",(0,t.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,t.jsx)(n.em,{children:"casper-test"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"payment-amount"})," - The payment for the Transaction in motes. This entry point call needs 5 CSPR."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-hash"})," - Hex-encoded hash of the stored auction contract, which depends on the network you are using. For Casper's Mainnet and Testnet, the hashes are as follows:"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Testnet"}),": ",(0,t.jsx)(n.code,{children:"hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Mainnet"}),": ",(0,t.jsx)(n.code,{children:"hash-ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea"})]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-entry-point"})," - Name of the entrypoint that will be used when calling the contract."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"change_bid_public_key"})," entry point expects two arguments:"]}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"public key"}),": The hexadecimal public key associated with a validator bid to be changed. This key must match the secret key that signs the transaction."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"new_public key"}),": The hexadecimal public key intended to replace the original key associated with the bid."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The command will return a transaction hash, which is needed to verify the transaction's processing results."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Calling the ",(0,t.jsx)(n.code,{children:"change_bid_public_key"})," entry point on the auction contract has a fixed cost of 5 CSPR."]})}),"\n",(0,t.jsx)(n.h2,{id:"method-2-using-compiled-wasm",children:"Method 2: Using compiled WASM"}),"\n",(0,t.jsxs)(n.p,{children:["You may also change the public key associated with a bid via a transaction containing the compiled ",(0,t.jsx)(n.code,{children:"change_bid_public_key.wasm"})," binary. For details, refer to ",(0,t.jsx)(n.a,{href:"/docs-redux/operators/setup/joining#step-3-build-contracts",children:"Building the Required Contracts"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The following transaction is a template for sending a request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo -u casper casper-client put-txn session \\\n--node-address http://<HOST:PORT> \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--chain-name <CHAIN_NAME> \\\n--category <INSTALL-UPGRADE|LARGE|MEDIUM|SMALL> \\\n--pricing-mode fixed \\\n--gas-price-tolerance <GAS_PRICE_TOLERANCE> \\\n--transaction-path $HOME/casper-node/target/wasm32-unknown-unknown/release/change_bid_public_key.wasm \\\n--session-entry-point call \\\n--session-arg=\"public_key:public_key='<PUBLIC_KEY_HEX>'\" \\\n--session-arg=\"new_public_key:public_key='<PUBLIC_KEY_HEX>'\"\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the Transaction."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"chain-name"})," - The chain-name to the network where you wish to send the Transaction. For Mainnet, use ",(0,t.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,t.jsx)(n.em,{children:"casper-test"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gas-price-tolerance"})," - Maximum payment for the Transaction in motes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"transaction-path"})," - The path to the compiled Wasm on your computer."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"change_bid_public_key.wasm"})," expects two arguments:"]}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"public key"}),": The hexadecimal public key associated with a validator bid to be changed. This key must match the secret key that signs the transaction."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"new_public key"}),": The hexadecimal public key intended to replace the original key associated with the bid."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The command will return a transaction hash, which is needed to verify the transaction's processing results."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["This method is more expensive than calling the ",(0,t.jsx)(n.code,{children:"change_bid_public_key"})," entrypoint in the system auction contract, which has a fixed cost of 5 CSPR."]})}),"\n",(0,t.jsx)(n.h2,{id:"bridge-records",children:"Bridge records"}),"\n",(0,t.jsxs)(n.p,{children:["In order to continue handling pending unbonds and rewards distribution even if the public key associated with a validator bid has changed, we use dedicated ",(0,t.jsx)(n.code,{children:"Bridge"})," records. These records connect the original public key to the new public key. By following those records we are able to find the current bid even if the public key was changed multiple times."]}),"\n",(0,t.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsxs)(n.p,{children:["Due to the way the ",(0,t.jsx)(n.code,{children:"Bridge"})," record mechanism works there are some limitations regarding changing public keys to keep in mind:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Because the ",(0,t.jsx)(n.code,{children:"Bridge"})," record replaces the original bid, it's not possible to then change the public key back to the original value, since it would create a loop"]}),"\n",(0,t.jsxs)(n.li,{children:["To avoid unbounded computation we also limit the number of ",(0,t.jsx)(n.code,{children:"Bridge"})," records that can be processed in sequence to 20, which means that:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For unbonding or redelegation requests, if a validator bid public key is changed more than 20 times between the time a request is created and processed, the funds will be returned to a delegator's main purse"}),"\n",(0,t.jsx)(n.li,{children:"For rewards distribution if the public key changes more than 20 times between the point a validator was elected for a given era and when the rewards are distributed, those rewards will be skipped and not distributed"}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var t=i(96540);const s={},a=t.createContext(s);function c(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);