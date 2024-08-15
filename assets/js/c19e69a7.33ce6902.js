"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[6962],{75574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=t(74848),i=t(28453);const o={title:"Undelegating Tokens"},a="Undelegating Tokens with the Casper Client",d={id:"developers/cli/undelegate",title:"Undelegating Tokens",description:"This document details a workflow where tokens delegated to a validator on a Casper network can be undelegated.",source:"@site/docs/developers/cli/undelegate.md",sourceDirName:"developers/cli",slug:"/developers/cli/undelegate",permalink:"/docs-redux/next/developers/cli/undelegate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Undelegating Tokens"},sidebar:"developers",previous:{title:"Redelegating Tokens with the Casper Client",permalink:"/docs-redux/next/developers/cli/redelegate"},next:{title:"Sending Transactions",permalink:"/docs-redux/next/developers/cli/sending-transactions"}},r={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Sending the Undelegation Request",id:"sending-the-undelegation-deploy",level:2},{value:"Method 1: Undelegating with the System Auction Contract",id:"undelegating-system-auction",level:3},{value:"Method 2: Undelegating with Compiled Wasm",id:"undelegating-compiled-wasm",level:3},{value:"Verifying the Undelegation",id:"verifying-the-undelegation",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"undelegating-tokens-with-the-casper-client",children:"Undelegating Tokens with the Casper Client"})}),"\n",(0,s.jsx)(n.p,{children:"This document details a workflow where tokens delegated to a validator on a Casper network can be undelegated."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["You meet all ",(0,s.jsx)(n.a,{href:"/docs-redux/next/developers/prerequisites",children:"prerequisites"}),", including having a valid ",(0,s.jsx)(n.code,{children:"node-address"})," and the Casper command-line client"]}),"\n",(0,s.jsxs)(n.li,{children:["You have ",(0,s.jsx)(n.a,{href:"/docs-redux/next/developers/cli/delegate",children:"delegated tokens"})," to a validator on a Casper network and you have the validator's public key"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sending-the-undelegation-deploy",children:"Sending the Undelegation Request"}),"\n",(0,s.jsxs)(n.p,{children:["There are two ways to undelegate CSPR from a validator. The recommended and cheaper method is to call the ",(0,s.jsx)(n.code,{children:"undelegate"})," entry point from the system auction contract. The second method involves building the ",(0,s.jsx)(n.code,{children:"undelegate.wasm"})," from the ",(0,s.jsx)(n.code,{children:"casper-node"})," repository and installing it on the network."]}),"\n",(0,s.jsx)(n.p,{children:"We recommend testing the following steps on the official Testnet before performing them in a live environment like the Casper Mainnet."}),"\n",(0,s.jsx)(n.h3,{id:"undelegating-system-auction",children:"Method 1: Undelegating with the System Auction Contract"}),"\n",(0,s.jsxs)(n.p,{children:["This method calls the existing ",(0,s.jsx)(n.code,{children:"undelegate"})," entry point from the system auction contract. Using this method, you do not need to build any contracts, reducing costs and complexity."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \\\n--session-hash <SESSION_HASH> \\\n--session-entry-point undelegate \\\n--session-arg \"validator:public_key='<HEX_ENCODED_VALIDATOR_PULIC_KEY>'\" \\\n--session-arg \"amount:u512='<AMOUNT_TO_UNDELEGATE>'\" \\\n--session-arg \"delegator:public_key='<HEX_ENCODED_DELEGATOR_PULIC_KEY>'\"\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the Deploy"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chain-name"})," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,s.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,s.jsx)(n.em,{children:"casper-test"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"payment-amount"})," - The payment for the Deploy in motes. This entry point call needs 2.5 CSPR for node version ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml",children:"1.5.1"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"session-hash"})," - Hex-encoded hash of the stored auction contract, which depends on the network you are using. For Casper's Mainnet and Testnet, the hashes are as follows:"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Testnet"}),": ",(0,s.jsx)(n.code,{children:"hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mainnet"}),": ",(0,s.jsx)(n.code,{children:"hash-ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"session-entry-point"})," - Name of the entry point that will be used when calling the contract"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"undelegate"})," entry point expects three arguments:"]}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"validator"}),": The hexadecimal public key of the validator from whom the tokens will be undelegated"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"amount"}),": The number of tokens to be undelegated"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"delegator"}),": The hexadecimal public key of the account undelegating tokens from a validator. ",(0,s.jsx)(n.strong,{children:"This key must match the secret key that signs the delegation"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The command will return a deploy hash, which is needed to verify the deploy's processing results. Refer to the ",(0,s.jsx)(n.a,{href:"/docs-redux/next/resources/tutorials/beginner/querying-network#deploy-status",children:"Deploy Status"})," section for more details."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Calling the ",(0,s.jsx)(n.code,{children:"undelegate"})," entry point on the auction contract has a fixed cost of 2.5 CSPR. There is no minimum amount required for the undelegation call."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.p,{children:"This example shows an account delegating 100 CSPR:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n--node-address http://65.21.75.254:7777  \\\n--chain-name casper-test \\\n--secret-key ~/KEYS/secret_key.pem \\\n--payment-amount 2500000000 \\\n--session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \\\n--session-entry-point undelegate \\\n--session-arg \"validator:public_key='01aa17f7b9889480b1bd34c3f94f263b229c7a9b01dd4dda19c2dd1d38d176c7a0'\" \\\n--session-arg \"amount:u512='100000000000'\" \\\n--session-arg \"delegator:public_key='01e3d3392c2e0b943abe709b25de5c353e5e1e9d95c7a76e3dd343d8aa1aa08d51'\"\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, ",(0,s.jsx)(n.a,{href:"#verifying-the-undelegation",children:"confirm the undelegation"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"undelegating-compiled-wasm",children:"Method 2: Undelegating with Compiled Wasm"}),"\n",(0,s.jsxs)(n.p,{children:["As part of this process, you need to ",(0,s.jsx)(n.a,{href:"/docs-redux/next/developers/cli/delegate#building-the-delegation-wasm",children:"build the casper-node contracts"})," that produce the undelegation Wasm."]}),"\n",(0,s.jsxs)(n.p,{children:["Next, use the Casper CLI client to send a deploy containing the ",(0,s.jsx)(n.code,{children:"undelegate.wasm"})," to the network to initiate the undelegation process."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \\\n--session-path <PATH_TO_WASM>/undelegate.wasm \\\n--session-arg \"validator:public_key='<HEX_ENCODED_VALIDATOR_PULIC_KEY>'\" \\\n--session-arg \"amount:u512='<AMOUNT_TO_UNDELEGATE>'\" \\\n--session-arg \"delegator:public_key='<HEX_ENCODED_DELEGATOR_PULIC_KEY>'\"\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the Deploy"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chain-name"})," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,s.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,s.jsx)(n.em,{children:"casper-test"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"payment-amount"})," - The payment for the Deploy in motes. This entry point call needs 2.5 CSPR for node version ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml",children:"1.5.1"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"session-path"})," - The path to where the ",(0,s.jsx)(n.code,{children:"delegate.wasm"})," is located"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"undelegate"})," entry point expects three arguments:"]}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"validator"}),": The hexadecimal public key of the validator from whom the tokens will be undelegated"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"amount"}),": The number of tokens to be undelegated"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"delegator"}),": The hexadecimal public key of the account undelegating tokens from a validator. ",(0,s.jsx)(n.strong,{children:"This key must match the secret key that signs the delegation"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The command will return a deploy hash, which is needed to verify the deploy's processing results. Refer to the ",(0,s.jsx)(n.a,{href:"/docs-redux/next/resources/tutorials/beginner/querying-network#deploy-status",children:"Deploy Status"})," section for more details."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsxs)(n.p,{children:["This example command uses the Casper Testnet to undelegate 100 CSPR, and the payment amount is 6 CSPR. The payment amount varies based on each deploy and network ",(0,s.jsx)(n.a,{href:"/docs-redux/next/concepts/glossary/C#chainspec",children:"chainspec"}),". However, notice that this method is more expensive than the previous one that calls the undelegate entry point."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n--node-address http://65.21.75.254:7777  \\\n--chain-name casper-test \\\n--secret-key ~/KEYS/secret_key.pem \\\n--payment-amount 6000000000 \\\n--session-path ~/undelegate.wasm \\\n--session-arg \"validator:public_key='01aa17f7b9889480b1bd34c3f94f263b229c7a9b01dd4dda19c2dd1d38d176c7a0'\" \\\n--session-arg \"amount:u512='100000000000'\" \\\n--session-arg \"delegator:public_key='01e3d3392c2e0b943abe709b25de5c353e5e1e9d95c7a76e3dd343d8aa1aa08d51'\"\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, ",(0,s.jsx)(n.a,{href:"#verifying-the-undelegation",children:"confirm the undelegation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"verifying-the-undelegation",children:"Verifying the Undelegation"}),"\n",(0,s.jsx)(n.p,{children:"To verify that the undelegation succeeded, you can use the Casper command-line client to generate an RPC request to query the auction state. The subsequent RPC response will confirm that the undelegation request was successfully processed."}),"\n",(0,s.jsx)(n.p,{children:"Here is how you can check the status of the auction to confirm that your bid was withdrawn:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client get-auction-info \\\n--node-address http://<peer-ip-address>:7777\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Request fields"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node-address"})," - An IP address of a node on the network"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If the public key and the amount are absent from the ",(0,s.jsx)(n.code,{children:"bids"})," structure, we can safely conclude that we have indeed undelegated from the validator."]}),"\n",(0,s.jsx)(n.p,{children:"If your account is on the official Testnet or Mainnet, you can use the block explorer to look up your account balance and see that the tokens have been added to your balance:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://testnet.cspr.live/",children:"Testnet explorer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cspr.live/",children:"Mainnet explorer"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important Note"}),": After undelegating tokens from a validator, you must wait for the unbonding period to lapse before redelegating tokens to either the same validator or a different validator."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);