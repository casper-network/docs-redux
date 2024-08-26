"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[5069],{1697:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(74848),i=t(28453);const a={title:"Unbonding"},o="Unbonding as a Validator",r={id:"operators/becoming-a-validator/unbonding",title:"Unbonding",description:"Once a bid is placed, it will remain in the state of the auction contract, even if the bid fails to win a slot immediately. New slots may become available if bonded validators leave the network or reduce their bond amounts. Therefore, a bid must be explicitly withdrawn to remove it from the auction.",source:"@site/docs/operators/becoming-a-validator/unbonding.md",sourceDirName:"operators/becoming-a-validator",slug:"/operators/becoming-a-validator/unbonding",permalink:"/docs-redux/next/operators/becoming-a-validator/unbonding",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Unbonding"},sidebar:"operators",previous:{title:"Bonding",permalink:"/docs-redux/next/operators/becoming-a-validator/bonding"},next:{title:"Recovery",permalink:"/docs-redux/next/operators/becoming-a-validator/recovering"}},c={},d=[{value:"Method 1: Unbonding with the System Auction Contract",id:"withdraw-system-auction",level:2},{value:"Method 2: Unbonding with Compiled Wasm",id:"withdraw-compiled-wasm",level:2},{value:"Check the Auction Contract",id:"check-the-auction-contract",level:2},{value:"Unbonding Wait Period",id:"unbonding-wait-period",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"unbonding-as-a-validator",children:"Unbonding as a Validator"})}),"\n",(0,s.jsx)(n.p,{children:"Once a bid is placed, it will remain in the state of the auction contract, even if the bid fails to win a slot immediately. New slots may become available if bonded validators leave the network or reduce their bond amounts. Therefore, a bid must be explicitly withdrawn to remove it from the auction."}),"\n",(0,s.jsx)(n.h2,{id:"withdraw-system-auction",children:"Method 1: Unbonding with the System Auction Contract"}),"\n",(0,s.jsxs)(n.p,{children:["This method withdraws a bid using the system auction contract. Call the existing ",(0,s.jsx)(n.code,{children:"withdraw_bid"})," entry point from the system auction contract. Using this method, you do not need to build any contracts, reducing costs and complexity."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo -u casper casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \\\n--session-hash <SESSION_HASH> \\\n--session-entry-point withdraw_bid \\\n--session-arg=\"public_key:public_key='<PUBLIC_KEY_HEX>'\" \\\n--session-arg=\"amount:u512='<AMOUNT_TO_WITHDRAW>'\"\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the Deploy"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chain-name"})," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,s.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,s.jsx)(n.em,{children:"casper-test"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"payment-amount"})," - The payment for the Deploy in motes. This entry point call needs 2.5 CSPR for node version ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml",children:"1.5.1"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"session-hash"})," - Hex-encoded hash of the stored auction contract, which depends on the network you are using. For Casper's Mainnet and Testnet, the hashes are as follows:"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Testnet"}),": ",(0,s.jsx)(n.code,{children:"hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mainnet"}),": ",(0,s.jsx)(n.code,{children:"hash-ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"session-entry-point"})," - Name of the entrypoint that will be used when calling the contract"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"withdraw_bid"})," entry point expects two arguments, while the third one is optional:"]}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"public key"}),": The hexadecimal public key of the account's purse to withdraw. This key must match the secret key that signs the deploy and has to match the public key of a bid in the auction contract"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"amount"}),": The amount being withdrawn"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The command will return a deploy hash, which is needed to verify the deploy's processing results."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Calling the ",(0,s.jsx)(n.code,{children:"withdraw_bid"})," entry point on the auction contract has a fixed cost of 2.5 CSPR."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.p,{children:"This example command uses the Casper Testnet to withdraw 5 CSPR from the bid:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo -u casper casper-client put-deploy \\\n--node-address http://65.21.75.254:7777 \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--chain-name casper-test \\\n--payment-amount 2500000000 \\\n--session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \\\n--session-entry-point withdraw_bid \\\n--session-arg \"public_key:public_key='01c297d2931fec7e22b2fb1ae3ca5afdfacc2c82ba501e8ed158eecef82b4dcdee'\" \\\n--session-arg \"amount:U512='$[5 * 1000000000]'\"\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Below is the same command with the optional purse set to a different purse where the amount will be returned. ",(0,s.jsx)(n.strong,{children:"Adjust all the values to your use case."})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo -u casper casper-client put-deploy \\\n--node-address http://65.21.75.254:7777 \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--chain-name casper-test \\\n--payment-amount 2500000000 \\\n--session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \\\n--session-entry-point withdraw_bid \\\n--session-arg \"public_key:public_key='01c297d2931fec7e22b2fb1ae3ca5afdfacc2c82ba501e8ed158eecef82b4dcdee'\" \\\n--session-arg \"amount:U512='$[5 * 1000000000]'\"\n"})}),"\n",(0,s.jsx)(n.h2,{id:"withdraw-compiled-wasm",children:"Method 2: Unbonding with Compiled Wasm"}),"\n",(0,s.jsxs)(n.p,{children:["There is a second way to withdraw a bid, using the compiled Wasm ",(0,s.jsx)(n.code,{children:"withdraw_bid.wasm"}),". The process is the same as bonding but uses a different contract."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo -u casper casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT> \\\n--session-path <PATH>/casper-node/target/wasm32-unknown-unknown/release/withdraw_bid.wasm \\\n--session-arg=\"public_key:public_key='<PUBLIC_KEY_HEX>'\" \\\n--session-arg=\"amount:u512='<AMOUNT_TO_WITHDRAW>'\"\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the Deploy"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chain-name"})," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,s.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,s.jsx)(n.em,{children:"casper-test"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"payment-amount"})," - The payment for the Deploy in motes estimated"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"session-path"})," - The path to the compiled Wasm on your computer"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"withdraw_bid.wasm"})," expects two arguments, while the third one is optional:"]}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"public key"}),": The hexadecimal public key of the account's purse to withdraw. This key must match the secret key that signs the deploy and has to match the public key of a bid in the auction contract"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"amount"}),": The amount being withdrawn"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The command will return a deploy hash, which is needed to verify the deploy's processing results."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This method is more expensive than calling the ",(0,s.jsx)(n.code,{children:"withdraw_bid"})," entrypoint in the system auction contract, which has a fixed cost of 2.5 CSPR."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsxs)(n.p,{children:["Here is an example request to unbond stake using the ",(0,s.jsx)(n.code,{children:"withdraw_bid.wasm"}),". The payment amount specified is 4 CSPR. You must modify the payment and other values in the deploy based on the network's ",(0,s.jsx)(n.a,{href:"/docs-redux/next/concepts/glossary/C#chainspec",children:"chainspec.toml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo -u casper casper-client put-deploy \\\n--node-address http://65.21.75.254:7777 \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--chain-name casper-test \\\n--session-path $HOME/casper-node/target/wasm32-unknown-unknown/release/withdraw_bid.wasm \\\n--payment-amount 4000000000 \\\n--session-arg=\"public_key:public_key='01c297d2931fec7e22b2fb1ae3ca5afdfacc2c82ba501e8ed158eecef82b4dcdee'\" \\\n--session-arg=\"amount:u512='1000000000000'\"\n"})}),"\n",(0,s.jsx)(n.h2,{id:"check-the-auction-contract",children:"Check the Auction Contract"}),"\n",(0,s.jsx)(n.p,{children:"Check the auction contract for updates to the bid amounts."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client get-auction-info --node-address http://<HOST:PORT>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"unbonding-wait-period",children:"Unbonding Wait Period"}),"\n",(0,s.jsx)(n.p,{children:"To prevent long-range attacks, requests to unbond must go through a mandatory wait period, currently set to 7 eras lasting approximately 14-16 hours."})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);