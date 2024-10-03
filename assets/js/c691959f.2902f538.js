"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[86233],{37819:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=t(74848),s=t(28453);const a={},i="Casper-Client Commands",r={id:"resources/beginner/counter/commands",title:"Casper-Client Commands",description:"Faucet Account Information",source:"@site/versioned_docs/version-1.5.X/resources/beginner/counter/commands.md",sourceDirName:"resources/beginner/counter",slug:"/resources/beginner/counter/commands",permalink:"/docs-redux/1.5.X/resources/beginner/counter/commands",draft:!1,unlisted:!1,tags:[],version:"1.5.X",frontMatter:{},sidebar:"tutorials",previous:{title:"Overview",permalink:"/docs-redux/1.5.X/resources/beginner/counter/overview"},next:{title:"Tutorial Walkthrough",permalink:"/docs-redux/1.5.X/resources/beginner/counter/walkthrough"}},c={},l=[{value:"Faucet Account Information",id:"faucet-account-information",level:2},{value:"State Root Hash",id:"state-root-hash",level:2},{value:"Querying Network State",id:"querying-network-state",level:2},{value:"Put Deploys (onto the Chain)",id:"put-deploys-onto-the-chain",level:2},{value:"Deploy via a compiled Wasm binary",id:"deploy-via-a-compiled-wasm-binary",level:3},{value:"Deploy via a named key already on the blockchain",id:"deploy-via-a-named-key-already-on-the-blockchain",level:3},{value:"Get Deploys (from the Chain)",id:"get-deploys-from-the-chain",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"casper-client-commands",children:"Casper-Client Commands"})}),"\n",(0,o.jsx)(n.h2,{id:"faucet-account-information",children:"Faucet Account Information"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"nctl-view-faucet-account\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This command is part of NCTL and provides a view into the faucet account details. The faucet is the default account created on the network. Generally on the Mainnet, your own account is used to fund transactions. However, for the sake of this tutorial, you do not need accounts and will use the faucet to execute deploys. This command supplies two key pieces of information: the account's ",(0,o.jsx)(n.em,{children:"secret key"})," location and the ",(0,o.jsx)(n.em,{children:"account hash"}),", which are used to sign deploys and query the network state, respectively."]}),"\n",(0,o.jsx)(n.h2,{id:"state-root-hash",children:"State Root Hash"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"casper-client get-state-root-hash --node-address [NODE_SERVER_ADDRESS]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The first command to cover is the ",(0,o.jsx)(n.em,{children:"get-state-root-hash"})," command from the ",(0,o.jsx)(n.em,{children:"casper-client"})," tool. The state root hash is an identifier of the current network state. It is similar to a Git commit ID for commit history. It gives a snapshot of the blockchain state at a moment in time. For this tutorial, it will be used to query the network state after sending deploys."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"After sending deploys to the network, you must get the new state root hash to see the new changes reflected. Otherwise, you will be looking at events in the past."})}),"\n",(0,o.jsx)(n.h2,{id:"querying-network-state",children:"Querying Network State"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:'casper-client query-global-state \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] \\\n    -q "[SESSION_NAME]/[SESSION_NAMED_KEY]" (OPTIONAL)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This command allows you to query the state of a Casper network at a given moment in time, which is specified by the ",(0,o.jsx)(n.em,{children:"state-root-hash"})," described above."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.em,{children:"node-address"})," is the location of the RPC endpoint, which is typically represented in the form ",(0,o.jsx)(n.code,{children:"http://IP:PORT"}),". In this particular tutorial, for a default-configured NCTL network running locally, the address you can use is ",(0,o.jsx)(n.code,{children:"http://localhost:11101"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.em,{children:"key"})," is the identifier for the query. It must be either the account public key, account hash, contract address hash, transfer hash, or deploy hash. The tutorial demonstrates two of these key types."]}),"\n",(0,o.jsxs)(n.li,{children:["The optional query path argument (",(0,o.jsx)(n.em,{children:"q"}),") allows you to drill into the specifics of a query concerning the key."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"put-deploys-onto-the-chain",children:"Put Deploys (onto the Chain)"}),"\n",(0,o.jsx)(n.h3,{id:"deploy-via-a-compiled-wasm-binary",children:"Deploy via a compiled Wasm binary"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name casper-net-1 \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-path [CONTRACT_PATH]/counter-v1.wasm\n"})}),"\n",(0,o.jsx)(n.p,{children:"This command creates a deploy and sends it to the network for execution. In this first usage of the command,"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.em,{children:"session-path"})," points to a compiled Wasm contract."]}),"\n",(0,o.jsxs)(n.li,{children:["This contract is then installed on the network specified by the ",(0,o.jsx)(n.em,{children:"chain-name"}),'. By default, NCTL names the chain "casper-net-1" but this is configurable.']}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.em,{children:"payment-amount"})," is in units of motes (1 nano-CSPR) and is required to pay the transaction fee for the deploy. If it is too small, the transaction will get denied due to insufficient funds."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"deploy-via-a-named-key-already-on-the-blockchain",children:"Deploy via a named key already on the blockchain"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:'casper-client put-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    --chain-name casper-net-1 \\\n    --secret-key [KEY_PATH]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-name "counter" \\\n    --session-entry-point "counter_inc"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This second usage of ",(0,o.jsx)(n.em,{children:"put-deploy"})," does not place a new contract on the chain, but it allows you to call entry points (functions) defined in smart contracts."]}),"\n",(0,o.jsxs)(n.p,{children:['This examples uses "counter" and "counter_inc" from the ',(0,o.jsx)(n.a,{href:"/docs-redux/1.5.X/resources/beginner/counter/walkthrough",children:"tutorial walkthrough"}),". However, these will be different when you write your contracts."]}),"\n",(0,o.jsx)(n.h2,{id:"get-deploys-from-the-chain",children:"Get Deploys (from the Chain)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"casper-client get-deploy \\\n    --node-address [NODE_SERVER_ADDRESS] \\\n    [DEPLOY_HASH]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.em,{children:"get-deploy"})," command is complementary to the ",(0,o.jsx)(n.em,{children:"put-deploy"})," command. It retrieves a deploy from the network and allows you to check the status of the deploy. The ",(0,o.jsx)(n.em,{children:"DEPLOY_HASH"})," is the identifier to a specific deploy and is returned by the ",(0,o.jsx)(n.em,{children:"put-deploy"})," command."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(96540);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);