"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[21261],{64740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var s=t(74848),i=t(28453);const a={},o="Redelegating Tokens with the Casper Client",d={id:"developers/cli/redelegate",title:"Redelegating Tokens with the Casper Client",description:"This document details a workflow where tokens staked with a validator can be redelegated to another validator with a single call while the unbonding process runs in the background. Otherwise, delegators would have to complete two steps by sending an unbonding request first and then delegate the tokens to the new validator.",source:"@site/docs/developers/cli/redelegate.md",sourceDirName:"developers/cli",slug:"/developers/cli/redelegate",permalink:"/docs-redux/developers/cli/redelegate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Delegating Tokens",permalink:"/docs-redux/developers/cli/delegate"},next:{title:"Undelegating Tokens",permalink:"/docs-redux/developers/cli/undelegate"}},r={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Method 1: Redelegating with the System Auction Contract",id:"redelegating-system-auction",level:2},{value:"Method 2: Redelegating with Compiled Wasm",id:"bonding-compiled-wasm",level:2},{value:"Sending the redelegation request",id:"sending-the-redelegation-deploy",level:3},{value:"Verifying the Redelegation",id:"verifying-the-redelegation",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"redelegating-tokens-with-the-casper-client",children:"Redelegating Tokens with the Casper Client"})}),"\n",(0,s.jsxs)(n.p,{children:["This document details a workflow where tokens staked with a validator can be redelegated to another validator with a single call while the unbonding process runs in the background. Otherwise, delegators would have to complete two steps by sending an ",(0,s.jsx)(n.a,{href:"/docs-redux/developers/cli/undelegate",children:"unbonding request"})," first and then ",(0,s.jsx)(n.a,{href:"/docs-redux/developers/cli/delegate",children:"delegate"})," the tokens to the new validator."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["You meet all ",(0,s.jsx)(n.a,{href:"/docs-redux/developers/prerequisites",children:"prerequisites"}),", including having a valid ",(0,s.jsx)(n.code,{children:"node-address"})," and the Casper command-line client"]}),"\n",(0,s.jsxs)(n.li,{children:["You have ",(0,s.jsx)(n.a,{href:"/docs-redux/developers/cli/delegate",children:"delegated tokens"})," to a validator on a Casper network, and you have the validator's public key"]}),"\n",(0,s.jsxs)(n.li,{children:["You have the public key of the new validator to whom you wish to redelegate tokens. See ",(0,s.jsx)(n.a,{href:"/docs-redux/developers/cli/delegate#acquiring-a-validators-public-key",children:"Acquiring a Validator's Public Key"})," for more details"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"redelegating-system-auction",children:"Method 1: Redelegating with the System Auction Contract"}),"\n",(0,s.jsxs)(n.p,{children:["This method calls the existing ",(0,s.jsx)(n.code,{children:"redelegate"})," entry point from the system auction contract. Using this method, you do not need to build contracts, reducing cost and complexity."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH_TO_DELEGATOR_SECRET_KEY> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount 2500000000 \\\n--session-hash <SESSION_HASH> \\\n--session-entry-point redelegate \\\n--session-arg \"delegator:public_key='<DELEGATOR_PUBLIC_KEY_HEX>'\" \\\n--session-arg \"validator:public_key='<CURRENT_VALIDATOR_PUBLIC_KEY_HEX>'\" \\\n--session-arg \"amount:u512='<DELEGATION_AMOUNT>'\" \\\n--session-arg \"new_validator:public_key='<NEW_VALIDATOR_PUBLIC_KEY_HEX>'\"\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the Deploy"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chain-name"})," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,s.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,s.jsx)(n.em,{children:"casper-test"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"payment-amount"})," - The payment for the Deploy in motes. This entry point call needs 2.5 CSPR"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"session-hash"})," - Hex-encoded hash of the stored auction contract, which depends on the network you are using. For Casper's Mainnet and Testnet, the hashes are as follows:"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Testnet"}),": ",(0,s.jsx)(n.code,{children:"hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mainnet"}),": ",(0,s.jsx)(n.code,{children:"hash-ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"session-entry-point"})," - Name of the entrypoint that will be used when calling the contract"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"redelegate"})," entry point expects four arguments:"]}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"delegator:public_key"}),": The hexadecimal public key of the account submitting the redelegate request. This key must match the secret key that signs the deploy"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"validator:public_key"}),": The hexadecimal public key of the validator from whom the tokens will be undelegated"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"amount"}),": The amount to be redelegated to the new validator"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"new_validator:public_key"}),": The hexadecimal public key of the validator to whom the tokens will be delegated"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The command will return a deploy hash, which is needed to verify the deploy's processing results."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Calling the ",(0,s.jsx)(n.code,{children:"redelegate"})," entry point on the auction contract has a fixed cost of 2.5 CSPR and there is a minimum delegation amount of 500 CSPR that also applies to redelegations."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsxs)(n.p,{children:["This example uses a private network running ",(0,s.jsx)(n.code,{children:"casper-node"})," version 1.5. The payment amount specified is 2.5 CSPR. You must modify the payment and other values in the deploy based on the network's ",(0,s.jsx)(n.a,{href:"/docs-redux/concepts/glossary/C#chainspec",children:"chainspec.toml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n--node-address http://3.143.158.19:7777  \\\n--chain-name integration-test \\\n--secret-key ~/KEYS/integration/Test_secret_key.pem \\\n--payment-amount 2500000000 \\\n--session-hash hash-e22d38bcf3454a93face78a353feaccbf1d637d1ef9ef2e061a655728ff59bbe \\\n--session-entry-point redelegate \\\n--session-arg \"validator:public_key='017fec504c642f2b321b8591f1c3008348c57a81acafceb5a392cf8416a5fb4a3c'\" \\\n--session-arg \"amount:u512='500000000000'\" \\\n--session-arg \"delegator:public_key='01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986'\" \\\n--session-arg \"new_validator:public_key='019e7b8bdec03ba83be4f5443d9f7f9111c77fec984ce9bb5bb7eb3da1e689c02d'\"\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, ",(0,s.jsx)(n.a,{href:"#verifying-the-redelegation",children:"verify the redelegation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"bonding-compiled-wasm",children:"Method 2: Redelegating with Compiled Wasm"}),"\n",(0,s.jsxs)(n.p,{children:["Another way to send a redelegation is to compile the ",(0,s.jsx)(n.code,{children:"redelegate.wasm"})," and send it to the network via a deploy. To compile the Wasm yourself, ",(0,s.jsx)(n.a,{href:"/docs-redux/developers/cli/delegate#building-the-delegation-wasm",children:"build the casper-node contracts"})," that will include the redelegation Wasm."]}),"\n",(0,s.jsx)(n.h3,{id:"sending-the-redelegation-deploy",children:"Sending the redelegation request"}),"\n",(0,s.jsx)(n.p,{children:"We recommend testing the following steps on the official Testnet before performing them in a live environment like the Casper Mainnet."}),"\n",(0,s.jsxs)(n.p,{children:["This example uses the Casper client to send a deploy containing the ",(0,s.jsx)(n.code,{children:"redelegate.wasm"})," to the network to initiate the redelegation process."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH_TO_DELEGATOR_SECRET_KEY> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT> \\\n--session-path <PATH_TO_WASM>/redelegate.wasm \\\n--session-arg \"delegator:public_key='<DELEGATOR_PUBLIC_KEY_HEX>'\" \\\n--session-arg \"validator:public_key='<CURRENT_VALIDATOR_PUBLIC_KEY_HEX>'\" \\\n--session-arg \"amount:u512='<DELEGATION_AMOUNT>'\" \\\n--session-arg \"new_validator:public_key='<NEW_VALIDATOR_PUBLIC_KEY_HEX>'\"\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the Deploy"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chain-name"})," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,s.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,s.jsx)(n.em,{children:"casper-test"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"payment-amount"})," - The payment for the Deploy in motes. This entry point call needs 2.5 CSPR"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"session-path"})," - The path to the ",(0,s.jsx)(n.code,{children:"redelegate.wasm"})," on your computer"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"redelegate.wasm"})," expects four arguments:"]}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"delegator:public_key"}),": The hexadecimal public key of the account submitting the redelegate request. This key must match the secret key that signs the deploy"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"validator:public_key"}),": The hexadecimal public key of the validator from whom the tokens will be undelegated"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"amount"}),": The amount to be redelegated to the new validator"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"new_validator:public_key"}),": The hexadecimal public key of the validator to whom the tokens will be delegated"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Save the returned ",(0,s.jsx)(n.em,{children:"deploy_hash"})," from the output to ",(0,s.jsx)(n.a,{href:"/docs-redux/resources/tutorials/beginner/querying-network#querying-deploys",children:"query information"})," about the redelegation Deploy."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Running the ",(0,s.jsx)(n.code,{children:"redelegate.wasm"})," is a more expensive operation than calling the ",(0,s.jsx)(n.code,{children:"redelegate"})," entrypoint from the system auction contract."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsxs)(n.p,{children:["This example uses a private network running ",(0,s.jsx)(n.code,{children:"casper-node"})," version 1.5. The payment amount specified is 8 CSPR. You must modify the payment and other values in the deploy based on the network's ",(0,s.jsx)(n.a,{href:"/docs-redux/concepts/glossary/C#chainspec",children:"chainspec.toml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"casper-client put-deploy \\\n--node-address http://3.143.158.19:7777  \\\n--chain-name integration-test \\\n--secret-key ~/KEYS/integration/Test_secret_key.pem \\\n--payment-amount 8000000000 \\\n--session-path ~/redelegate.wasm \\\n--session-arg \"validator:public_key='017fec504c642f2b321b8591f1c3008348c57a81acafceb5a392cf8416a5fb4a3c'\" \\\n--session-arg \"amount:u512='500000000000'\" \\\n--session-arg \"delegator:public_key='01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986'\" \\\n--session-arg \"new_validator:public_key='019e7b8bdec03ba83be4f5443d9f7f9111c77fec984ce9bb5bb7eb3da1e689c02d'\"\n"})}),"\n",(0,s.jsx)(n.h2,{id:"verifying-the-redelegation",children:"Verifying the Redelegation"}),"\n",(0,s.jsx)(n.p,{children:"The redelegation process includes an unbonding delay before the tokens are redelegated to a new validator. In contrast, initial delegation occurs when a Casper network finalizes the associated Deploy."}),"\n",(0,s.jsx)(n.p,{children:"Due to this delay, the new validator may become inactive before the redelegation completes. If this happens, the tokens will be returned to the delegator."}),"\n",(0,s.jsxs)(n.p,{children:["Once the redelegation Deploy has been processed, you can query the auction to confirm the redelegation. This process is the same as ",(0,s.jsx)(n.a,{href:"/docs-redux/developers/cli/delegate#confirming-the-delegation",children:"verifying a delegation request"})," using the ",(0,s.jsx)(n.code,{children:"casper-client get-auction-info"})," command."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);