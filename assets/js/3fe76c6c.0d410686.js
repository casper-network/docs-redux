"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[9672],{19259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(74848),o=n(28453);const a={},r="Tutorial Walkthrough",c={id:"resources/beginner/counter/walkthrough",title:"Tutorial Walkthrough",description:"Now that you are familiar with the basic commands, you can begin the tutorial walkthrough.",source:"@site/versioned_docs/version-1.5.X/resources/beginner/counter/walkthrough.md",sourceDirName:"resources/beginner/counter",slug:"/resources/beginner/counter/walkthrough",permalink:"/docs-redux/resources/beginner/counter/walkthrough",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724759228e3,frontMatter:{},sidebar:"tutorials",previous:{title:"Casper-Client Commands",permalink:"/docs-redux/resources/beginner/counter/commands"},next:{title:"Introduction",permalink:"/docs-redux/counter-testnet"}},i={},l=[{value:"Clone the Repository",id:"clone-the-repository",level:2},{value:"Create a Local Network",id:"create-a-local-network",level:2},{value:"View the Network State",id:"view-the-network-state",level:2},{value:"Install the Contract",id:"install-the-contract",level:2},{value:"View the Updated Network State",id:"view-the-updated-network-state",level:2},{value:"Increment the Counter",id:"increment-the-counter",level:2},{value:"View the Updated Network State Again",id:"view-the-updated-network-state-again",level:2},{value:"Increment the Counter Again",id:"increment-the-counter-again",level:2},{value:"View the Final Network State",id:"view-the-final-network-state",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"tutorial-walkthrough",children:"Tutorial Walkthrough"})}),"\n",(0,s.jsx)(t.p,{children:"Now that you are familiar with the basic commands, you can begin the tutorial walkthrough."}),"\n",(0,s.jsx)(t.h2,{id:"clone-the-repository",children:"Clone the Repository"}),"\n",(0,s.jsxs)(t.p,{children:["First, you will need to clone ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/counter",children:"the counter contract repository"})," on our local machine."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/casper-ecosystem/counter\n"})}),"\n",(0,s.jsx)(t.p,{children:"If you explore the source code, you will see that there are three versions of the counter contract and one file with session code that calls the contract's entry-points:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"contract-v1"})})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"This is the first version of the counter contract."}),"\n",(0,s.jsxs)(t.li,{children:["It defines two named keys:\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"counter"}),": References the contract itself."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"count"}),": Stores the current counter value."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["It provides functions for:\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"get_count"}),": Retrieves the current counter value."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"counter_inc"}),": Increments the counter value by 1."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"contract-v2"})})," (Not Used in This Tutorial)"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["An extension of ",(0,s.jsx)(t.code,{children:"contract-v1"}),". It demonstrates decrementing the counter and contract upgrades."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["**",(0,s.jsx)(t.code,{children:"contract-v3"})," ** (Not Used in This Tutorial)"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["This version showcases how to add new functionalities during smart contract upgrades. It extends ",(0,s.jsx)(t.code,{children:"contract-v1"})," and ",(0,s.jsx)(t.code,{children:"contract-v2"})," by introducing:\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A new named key: ",(0,s.jsx)(t.code,{children:"last_updated_at"})," - Tracks the timestamp of the last counter update."]}),"\n",(0,s.jsxs)(t.li,{children:["A new entry point: ",(0,s.jsx)(t.code,{children:"get_last_updated_at"})," - Retrieves the ",(0,s.jsx)(t.code,{children:"last_updated_at"})," timestamp."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["It focuses on the process of adding new fields like ",(0,s.jsx)(t.code,{children:"last_updated_at"})," to existing contracts."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"counter-call"})})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Session code that retrieves the specific contract version (e.g., ",(0,s.jsx)(t.code,{children:"contract-v1"}),"), interacts with its functions (e.g., ",(0,s.jsx)(t.code,{children:"get_count"}),", ",(0,s.jsx)(t.code,{children:"counter_inc"}),"), and verifies the expected behavior."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"create-a-local-network",children:"Create a Local Network"}),"\n",(0,s.jsx)(t.p,{children:"After getting familiar with the counter source code, you need to create a local Casper network to install the contract. If you completed the NCTL tutorial, all you need to do is allocate the network assets and then start the network."}),"\n",(0,s.jsx)(t.p,{children:"If you run the following line in your terminal, you should be able to spin up a network effortlessly."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"nctl-assets-setup && nctl-start\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["If it fails for any reason, please refer the ",(0,s.jsx)(t.a,{href:"/docs-redux/developers/dapps/setup-nctl",children:"NCTL tutorial"})," and make sure that all your packages are up to date."]})}),"\n",(0,s.jsx)(t.h2,{id:"view-the-network-state",children:"View the Network State"}),"\n",(0,s.jsxs)(t.p,{children:["With a network up and running, you can use the ",(0,s.jsx)(t.code,{children:"casper-client query-global-state"})," command to check the status of the network. However, you first need an ",(0,s.jsx)(t.code,{children:"AccountHash"})," and the ",(0,s.jsx)(t.code,{children:"state-root-hash"})," so that you can get the current snapshot. Once you have that information, check the status of the network."]}),"\n",(0,s.jsx)(t.p,{children:"You will need to use the following three commands:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"nctl-view-faucet-account"})," - Get the faucet's account hash"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"casper-client get-state-root-hash"})," - Get the state root hash"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"casper-client query-global-state"})," - Get the network state"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Run through these commands in order."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"nctl-view-faucet-account\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If NCTL is correctly up and running, this command should return quite a bit of information about the faucet account. Feel free to look through the records and make a note of the ",(0,s.jsx)(t.em,{children:"account-hash"})," field and the ",(0,s.jsx)(t.em,{children:"secret_key.pem"})," path because you will often use both."]}),"\n",(0,s.jsx)(t.p,{children:"Get the state root hash:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address http://localhost:11101\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You are using localhost as the node server since the network is running on our local machine. Make a note of the ",(0,s.jsx)(t.em,{children:"state-root-hash"})," that is returned, but keep in mind that this hash value will need to be updated every time you modify the network state."]}),"\n",(0,s.jsx)(t.p,{children:"Finally, query the actual state:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"casper-client query-global-state \\\n    --node-address http://localhost:11101 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH]\n"})}),"\n",(0,s.jsx)(t.p,{children:"Substitute the state root hash and account hash values you just retrieved into this command and execute it. Do not be surprised if you see nothing on the network. That is because you have not sent anything to the network yet."}),"\n",(0,s.jsx)(t.h2,{id:"install-the-contract",children:"Install the Contract"}),"\n",(0,s.jsx)(t.p,{children:"Before installing the contract on the chain, you will need to compile it to Wasm."}),"\n",(0,s.jsxs)(t.p,{children:["The Makefile included in the repository makes compilation trivial. With these two commands, you can build (in release mode) and test the contract before installing it. ",(0,s.jsx)(t.em,{children:"make prepare"})," sets the Wasm target and ",(0,s.jsx)(t.em,{children:"make test"})," builds the contracts and verifies them."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cd counter\nmake prepare\nmake test\n"})}),"\n",(0,s.jsxs)(t.p,{children:["With the compiled contract, you can call the ",(0,s.jsx)(t.code,{children:"casper-client put-deploy"})," command to install the contract on the chain."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"casper-client put-deploy \\\n    --node-address http://localhost:11101 \\\n    --chain-name casper-net-1 \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-path ./contract-v1/target/wasm32-unknown-unknown/release/counter-v1.wasm\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Replace the ",(0,s.jsx)(t.code,{children:"[PATH_TO_YOUR_KEY]"})," field with the actual path of where your secret key is stored. It is one of the fields that gets returned when you call ",(0,s.jsx)(t.em,{children:"nctl-view-faucet-account"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.em,{children:"session-path"})," argument should point to wherever you compiled the counter-v1.wasm on your computer. The code snippet shows you the default path if the counter folder is in the same directory."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Once you call this command, it will return a deploy hash. You can use this hash to verify that the deploy successfully took place."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"casper-client get-deploy \\\n    --node-address http://localhost:11101 [DEPLOY_HASH]\n"})}),"\n",(0,s.jsx)(t.h2,{id:"view-the-updated-network-state",children:"View the Updated Network State"}),"\n",(0,s.jsxs)(t.p,{children:["Hopefully, the deploy was successful. Call the ",(0,s.jsx)(t.code,{children:"casper-client query-global-state"})," command to check if the named key is visible on the chain."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"You must get the new state root hash since you just wrote a deploy to the chain."})}),"\n",(0,s.jsx)(t.p,{children:"If you run these two commands, there will be a new counter named key on the chain."}),"\n",(0,s.jsx)(t.p,{children:"Get the NEW state-root-hash:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address http://localhost:11101\n"})}),"\n",(0,s.jsx)(t.p,{children:"Get the network state:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"casper-client query-global-state \\\n    --node-address http://localhost:11101 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH]\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can actually dive further into the data stored on the chain using the query path argument or directly querying the deploy hash. Try the following commands and notice that each one gives you a different level of detail."}),"\n",(0,s.jsx)(t.p,{children:"Retrieve the specific counter contract details:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'casper-client query-global-state --node-address http://localhost:11101 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] -q "counter"\n'})}),"\n",(0,s.jsx)(t.p,{children:"Retrieve the specific count value:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'casper-client query-global-state --node-address http://localhost:11101 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] -q "counter/count"\n'})}),"\n",(0,s.jsx)(t.p,{children:"Retrieve the specific deploy details:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"casper-client query-global-state --node-address http://localhost:11101 \\\n    --state-root-hash [STATE_ROOT_HASH] --key deploy-[DEPLOY_HASH]\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The first two commands access the ",(0,s.jsx)(t.code,{children:"counter"})," and ",(0,s.jsx)(t.code,{children:"count"})," named keys, respectively, using the query path argument. The third command uses the deploy hash (the return value of ",(0,s.jsx)(t.em,{children:"put-deploy"}),") to query the state of that specific deploy only."]}),"\n",(0,s.jsx)(t.h2,{id:"increment-the-counter",children:"Increment the Counter"}),"\n",(0,s.jsxs)(t.p,{children:["You now have a counter on the chain, and you can increment it by calling the entry-point ",(0,s.jsx)(t.em,{children:"counter_inc"}),", the function defined in the contract. You can call an entry-point in an installed contract by using the ",(0,s.jsx)(t.em,{children:"put-deploy"})," command as illustrated here:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'casper-client put-deploy \\\n    --node-address http://localhost:11101 \\\n    --chain-name casper-net-1 \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-name "counter" \\\n    --session-entry-point "counter_inc"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Notice that this command is nearly identical to the command used to install the contract. However, instead of ",(0,s.jsx)(t.em,{children:"session-path"})," pointing to the Wasm binary, you have ",(0,s.jsx)(t.em,{children:"session-name"})," and ",(0,s.jsx)(t.em,{children:"session-entry-point"})," identifying the on-chain contract and its associated entry-point to execute."]}),"\n",(0,s.jsx)(t.h2,{id:"view-the-updated-network-state-again",children:"View the Updated Network State Again"}),"\n",(0,s.jsx)(t.p,{children:"After calling the entry-point, theoretically, the count value should increment by one, but how can you be sure of that? You can query the network again, however, remember that you have to get a new state root hash. Check if the count was incremented by looking at it with the query argument."}),"\n",(0,s.jsx)(t.p,{children:"Get the NEW state-root-hash:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address http://localhost:11101\n"})}),"\n",(0,s.jsx)(t.p,{children:"Get the network state, specifically for the count variable this time:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'casper-client query-global-state --node-address http://localhost:11101 \\\n    --state-root-hash [STATE_ROOT_HASH] \\\n    --key [ACCOUNT_HASH] -q "counter/count"\n'})}),"\n",(0,s.jsx)(t.p,{children:"You should be able to see the count value and observe that it has increased."}),"\n",(0,s.jsx)(t.h2,{id:"increment-the-counter-again",children:"Increment the Counter Again"}),"\n",(0,s.jsxs)(t.p,{children:["If you recall, in the repository there is session code called ",(0,s.jsx)(t.em,{children:"counter-call"}),". Try to increment the count using that session code instead of the session entry-point used above."]}),"\n",(0,s.jsxs)(t.p,{children:["Keep in mind, this is another ",(0,s.jsx)(t.em,{children:"put-deploy"})," call just like when you installed the contract. The session-path is once again going to be different for you depending on where you compiled the contract."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"casper-client put-deploy \\\n    --node-address http://localhost:11101 \\\n    --chain-name casper-net-1 \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount [PAYMENT_AMOUNT_IN_MOTES] \\\n    --session-path ./counter/counter-call/target/wasm32-unknown-unknown/release/counter-call.wasm\n"})}),"\n",(0,s.jsx)(t.h2,{id:"view-the-final-network-state",children:"View the Final Network State"}),"\n",(0,s.jsx)(t.p,{children:"To make sure that the session code ran successfully, get the new state root hash and query the network."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"casper-client get-state-root-hash --node-address http://localhost:11101\n"})}),"\n",(0,s.jsx)(t.p,{children:"Get the network state, specifically for the count variable this time:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'casper-client query-global-state --node-address http://localhost:11101 \\\n    --state-root-hash [STATE_ROOT_HASH]\n    --key [ACCOUNT_HASH] -q "counter/count"\n'})}),"\n",(0,s.jsx)(t.p,{children:"If all went according to plan, your count value should be 2 at this point."}),"\n",(0,s.jsx)(t.p,{children:"Congratulations on building, installing, and using a smart contract on your local network!"})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const o={},a=s.createContext(o);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);