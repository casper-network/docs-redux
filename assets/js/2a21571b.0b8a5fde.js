"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[2306],{57011:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=s(74848),i=s(28453);const r={title:"Join a Network"},d="Joining a Running Network",o={id:"operators/setup/joining",title:"Join a Network",description:"Each Casper network is permissionless, enabling new validators to join the network and provide additional security to the system. This page outlines the sequence of recommended steps to spin up a validating node and join an existing network.",source:"@site/versioned_docs/version-2.0.0/operators/setup/joining.md",sourceDirName:"operators/setup",slug:"/operators/setup/joining",permalink:"/docs-redux/2.0.0/operators/setup/joining",draft:!1,unlisted:!1,tags:[],version:"2.0.0",frontMatter:{title:"Join a Network"},sidebar:"operators",previous:{title:"Upgrades",permalink:"/docs-redux/2.0.0/operators/setup/upgrade"},next:{title:"Non-Root Users",permalink:"/docs-redux/2.0.0/operators/setup/non-root-user"}},a={},l=[{value:"Step 1: Provisioning Hardware",id:"step-1-provision-hardware",level:2},{value:"Step 2: Setting Up the Node",id:"step-2-set-up-the-node",level:2},{value:"Step 3: Building the Required Contracts",id:"step-3-build-contracts",level:2},{value:"Step 4: Creating and Fund Keys for Bonding",id:"step-4-create--fund-keys-for-bonding",level:2},{value:"Step 5: Updating the Trusted Hash",id:"step-5-update-the-trusted-hash",level:2},{value:"Step 6: Starting the Node",id:"step-6-start-the-node",level:2},{value:"Step 7: Confirming the Node is Synchronized",id:"step-7-confirm-the-node-is-synchronized",level:2},{value:"Step 8: Sending the Bonding Request",id:"step-7-send-the-bonding-request",level:2}];function c(e){const n={a:"a",code:"code",details:"details",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",summary:"summary",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"joining-a-running-network",children:"Joining a Running Network"})}),"\n",(0,t.jsx)(n.p,{children:"Each Casper network is permissionless, enabling new validators to join the network and provide additional security to the system. This page outlines the sequence of recommended steps to spin up a validating node and join an existing network."}),"\n",(0,t.jsx)(n.h2,{id:"step-1-provision-hardware",children:"Step 1: Provisioning Hardware"}),"\n",(0,t.jsxs)(n.p,{children:["Visit the ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/operators/setup/hardware",children:"Hardware Specifications"})," section and provision your node hardware."]}),"\n",(0,t.jsx)(n.h2,{id:"step-2-set-up-the-node",children:"Step 2: Setting Up the Node"}),"\n",(0,t.jsxs)(n.p,{children:["Follow the instructions on the ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/operators/setup/install-node",children:"Node Setup"})," page."]}),"\n",(0,t.jsx)(n.h2,{id:"step-3-build-contracts",children:"Step 3: Building the Required Contracts"}),"\n",(0,t.jsx)(n.p,{children:"Use the commands below to build all the necessary contracts for bonding, retrieving rewards, and unbonding."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Clone the casper-node repository."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/casper-network/casper-node\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Install these prerequisites, which are also listed ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-node#pre-requisites-for-building",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/developers/writing-onchain-code/getting-started#installing-rust",children:"Rust"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://cgold.readthedocs.io/en/latest/first-step/installation.html",children:"CMake"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pkg-config"})," - On Ubuntu, use ",(0,t.jsx)(n.code,{children:"sudo apt-get install pkg-config"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"openssl"})," - On Ubuntu, use ",(0,t.jsx)(n.code,{children:"sudo apt-get install openssl"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"libssl-dev"})," - On Ubuntu, use ",(0,t.jsx)(n.code,{children:"sudo apt-get install libssl-dev"})]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install the ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/developers/prerequisites#install-casper-client",children:"Rust casper-client"})," and fund the ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/operators/setup/basic-node-configuration#create-fund-keys",children:"keys"})," you will use for bonding."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the following commands to build the contracts in release mode. Make sure you have ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/developers/writing-onchain-code/getting-started#installing-rust",children:"installed Rust"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd casper-node\nmake setup-rs\nmake build-client-contracts\n"})}),"\n",(0,t.jsx)(n.p,{children:"These commands will build all the necessary Wasm contracts for operating as a validator:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"activate_bid.wasm"})," - Reactivates an ejected validator"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"add_bid.wasm"})," - Enables bonding for validator stake"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"delegate.wasm"})," - Delegates stake"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"undelegate.wasm"})," - Undelegates stake"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"withdraw_bid.wasm"})," - Enables unbonding for validator stake"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-4-create--fund-keys-for-bonding",children:"Step 4: Creating and Fund Keys for Bonding"}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/operators/setup/basic-node-configuration#create-fund-keys",children:"Node Setup"})," instructions if you have not generated and funded your validator keys."]}),"\n",(0,t.jsx)(n.h2,{id:"step-5-update-the-trusted-hash",children:"Step 5: Updating the Trusted Hash"}),"\n",(0,t.jsxs)(n.p,{children:["The node's ",(0,t.jsx)(n.code,{children:"config.toml"})," needs to be updated with a recent trusted hash."]}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/operators/setup/basic-node-configuration#trusted-hash-for-synchronizing",children:"Trusted Hash for Synchronizing"})," instructions if you have not set up a trusted hash during node installation."]}),"\n",(0,t.jsx)(n.h2,{id:"step-6-start-the-node",children:"Step 6: Starting the Node"}),"\n",(0,t.jsxs)(n.p,{children:["Start the node with the ",(0,t.jsx)(n.code,{children:"casper-node-launcher"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start casper-node-launcher\n"})}),"\n",(0,t.jsx)(n.p,{children:"The above Debian package installs a casper-node service for systemd."}),"\n",(0,t.jsxs)(n.p,{children:["For more information, visit ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/wiki#node-operators",children:"GitHub"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"step-7-confirm-the-node-is-synchronized",children:"Step 7: Confirming the Node is Synchronized"}),"\n",(0,t.jsxs)(n.p,{children:["While the node is synchronizing, the ",(0,t.jsx)(n.code,{children:"/status"})," endpoint is available. You will be able to compare this to another node's status endpoint ",(0,t.jsx)(n.code,{children:"era_id"})," and ",(0,t.jsx)(n.code,{children:"height"})," to determine if you are caught up. You will not be able to perform any ",(0,t.jsx)(n.code,{children:"casper-client"})," calls to your ",(0,t.jsx)(n.code,{children:"7777"})," RPC port until your node is fully caught up."]}),"\n",(0,t.jsxs)(n.p,{children:["Towards the end of the following output, notice the ",(0,t.jsx)(n.code,{children:"era_id"})," and ",(0,t.jsx)(n.code,{children:"height"})," that you can use to determine if your node has completed synchronizing."]}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsxs)(n.summary,{children:["Sample output of the ",(0,t.jsx)(n.code,{children:"/status"})," endpoint"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "api_version": "1.4.3",\n  "chainspec_name": "casper-test",\n  "starting_state_root_hash": "e2218b6bdb8137a178f242e9de24ef5db06af7925e8e4c65fa82d41df38f4576",\n  "peers": [\n    {\n      "node_id": "tls:0097..b253",\n      "address": "18.163.249.168:35000"\n    },\n    ...\n    ...\n    ...\n    {\n      "node_id": "tls:ff95..c014",\n      "address": "93.186.201.14:35000"\n    }\n  ],\n  "last_added_block_info": {\n    "hash": "8280de05cb34071f276fbe7c69a07cb325ddd373f685877911238b614bdcc5b1",\n    "timestamp": "2022-01-04T15:33:08.224Z",\n    "era_id": 3240,\n    "height": 430162,\n    "state_root_hash": "ec4ff5c4d0a9021984b56e2b6de4a57188101c24e09b765c3fee740353690076",\n    "creator": "01ace6578907bfe6eba3a618e863bbe7274284c88e405e2857be80dd094726a223"\n  },\n  "our_public_signing_key": "01cb41ee07d1827e243588711d45040fe46402bf3901fb550abfd08d1341700270",\n  "round_length": null,\n  "next_upgrade": null,\n  "build_version": "1.4.3-a44bed1fd-casper-mainnet",\n  "uptime": "25days 1h 48m 22s 47ms"\n}\n'})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-7-send-the-bonding-request",children:"Step 8: Sending the Bonding Request"}),"\n",(0,t.jsxs)(n.p,{children:["You can submit a ",(0,t.jsx)(n.a,{href:"/docs-redux/2.0.0/operators/becoming-a-validator/bonding",children:"bonding request"})," to change your synchronized node to a validating node."]}),"\n",(0,t.jsx)(n.p,{children:"The bonding request must be sent after the node has synchronized the protocol state and linear blockchain to avoid being ejected for liveness failures."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var t=s(96540);const i={},r=t.createContext(i);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);