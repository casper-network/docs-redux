"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[9303],{4946:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=s(4848),t=s(8453);const i={title:"Endpoints"},o="Node Endpoints",d={id:"operators/setup/node-endpoints",title:"Endpoints",description:"As specified in the Network Requirements, a Casper node uses specific ports to communicate with client applications and other nodes on the network. Each node has an identity linked with an IP and port pair where the node is reachable. This address is also called an endpoint. The Network Communication page explains how the nodes connect and communicate securely. Node connections are established using TLS, presenting a client certificate to encrypt peer-to-peer communication.",source:"@site/docs/operators/setup/node-endpoints.md",sourceDirName:"operators/setup",slug:"/operators/setup/node-endpoints",permalink:"/docs-redux/operators/setup/node-endpoints",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Endpoints"},sidebar:"operators",previous:{title:"Configuration",permalink:"/docs-redux/operators/setup/basic-node-configuration"},next:{title:"Installation",permalink:"/docs-redux/operators/setup/install-node"}},a={},c=[{value:"Default Networking Port: 35000",id:"35000",level:2},{value:"Default JSON-RPC HTTP Server Port: 7777",id:"7777",level:2},{value:"Default REST HTTP Server Port: 8888",id:"8888",level:2},{value:"Example usage",id:"example-usage",level:3},{value:"Default SSE HTTP Event Stream Server Port: 9999",id:"9999",level:2},{value:"Setting up Firewall Rules",id:"setting-up-firewall-rules",level:2},{value:"Restricting Access for Private Networks",id:"restricting-access-for-private-networks",level:2},{value:"Summary of Related Links",id:"summary-of-related-links",level:2}];function l(e){const n={a:"a",code:"code",details:"details",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",summary:"summary",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"node-endpoints",children:"Node Endpoints"}),"\n",(0,r.jsxs)(n.p,{children:["As specified in the ",(0,r.jsx)(n.a,{href:"/docs-redux/operators/setup/install-node#network-requirements",children:"Network Requirements"}),", a Casper node uses specific ports to communicate with client applications and other nodes on the network. Each node has an identity linked with an IP and port pair where the node is reachable. This address is also called an endpoint. The ",(0,r.jsx)(n.a,{href:"/docs-redux/concepts/design/p2p",children:"Network Communication"})," page explains how the nodes connect and communicate securely. Node connections are established using TLS, presenting a client certificate to encrypt peer-to-peer communication."]}),"\n",(0,r.jsx)(n.p,{children:"This document describes in more detail a Casper node's default endpoints:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#35000",children:"Networking port: 35000"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#7777",children:"JSON-RPC HTTP server port: 7777"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#8888",children:"REST HTTP server port: 8888"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#9999",children:"SSE HTTP event stream server port: 9999"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Node operators can modify a node's configuration options, including the port settings, by updating the ",(0,r.jsx)(n.a,{href:"/docs-redux/operators/setup/basic-node-configuration#config-file",children:"node's config.toml"})," file. An example configuration file can be found ",(0,r.jsx)(n.a,{href:"https://github.com/casper-network/casper-protocol-release/blob/main/config/config-example.toml",children:"here"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The default endpoints for Mainnet and Testnet are open by default and are described below in more detail. If the node connects to a different network, the ports may differ depending on how the network was set up."}),"\n",(0,r.jsx)(n.h2,{id:"35000",children:"Default Networking Port: 35000"}),"\n",(0,r.jsxs)(n.p,{children:["The configuration options for networking are under the ",(0,r.jsx)(n.code,{children:"network"})," section of the ",(0,r.jsx)(n.code,{children:"config.toml"})," file. The ",(0,r.jsx)(n.code,{children:"bind_address"})," using port 35000 is the only port required to be open for the node to function. A Casper node taking part in the network should open connections to every other node it is aware of and has not blocked. In the ",(0,r.jsx)(n.code,{children:"config.toml"})," file, the setting is:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"bind_address = '0.0.0.0:35000'\n"})}),"\n",(0,r.jsx)(n.p,{children:"If the networking port is closed, the node becomes unreachable, and the node won't be discoverable in the network. If this is a validator, it will face eviction. A read-only node will be considered to be offline."}),"\n",(0,r.jsx)(n.h2,{id:"7777",children:"Default JSON-RPC HTTP Server Port: 7777"}),"\n",(0,r.jsxs)(n.p,{children:["The configuration options for the JSON-RPC HTTP server are under the ",(0,r.jsx)(n.code,{children:"rpc_server"})," section in the ",(0,r.jsx)(n.code,{children:"config.toml"})," file. The ",(0,r.jsx)(n.code,{children:"address"})," using port 7777 is the listening address for JSON-RPC HTTP server."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"address = '0.0.0.0:7777'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["DApps would use this address to ",(0,r.jsx)(n.a,{href:"/docs-redux/developers/json-rpc/",children:"interact with the Casper JSON-RPC API"}),". Users would use this address to ",(0,r.jsx)(n.a,{href:"/docs-redux/developers/cli/",children:"interact with the network using CLI"}),". Validators would use this address to ",(0,r.jsx)(n.a,{href:"/docs-redux/operators/becoming-a-validator/bonding#bonding-system-auction",children:"bond"})," or ",(0,r.jsx)(n.a,{href:"/docs-redux/operators/becoming-a-validator/unbonding",children:"unbond"}),". If this port is closed, the requests coming to this port will not be served, but the node remains unaffected."]}),"\n",(0,r.jsx)(n.h2,{id:"8888",children:"Default REST HTTP Server Port: 8888"}),"\n",(0,r.jsxs)(n.p,{children:["The configuration options for the JSON-RPC HTTP server are under the ",(0,r.jsx)(n.code,{children:"rest_server"})," section in the ",(0,r.jsx)(n.code,{children:"config.toml"})," file. The ",(0,r.jsx)(n.code,{children:"address"})," listing port 8888 is the listening address for the REST HTTP server."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"address = '0.0.0.0:8888'\n"})}),"\n",(0,r.jsx)(n.p,{children:"Opening port 8888 is recommended but not required. This port allows the node to be included in the general network health metrics, thus giving a more accurate picture of overall network health. If this port is closed, the requests coming to this port will not be served, but the node remains unaffected."}),"\n",(0,r.jsxs)(n.p,{children:["One may use this port to ",(0,r.jsx)(n.a,{href:"/docs-redux/operators/setup/basic-node-configuration#trusted-hash-for-synchronizing",children:"get a trusted hash"}),", ",(0,r.jsx)(n.a,{href:"/docs-redux/operators/setup/upgrade#verifying-successful-staging",children:"verify successful staging"})," during an upgrade, or to ",(0,r.jsx)(n.a,{href:"/docs-redux/operators/setup/joining#step-7-confirm-the-node-is-synchronized",children:"confirm that the node is synchronized"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"example-usage",children:"Example usage"}),"\n",(0,r.jsx)(n.p,{children:"For general health metrics, use this command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -s http://<node_address>:8888/metrics\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can check the node's status using this command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -s http://<node_address>:8888/status\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The status endpoint provides a JSON response that can be parsed with ",(0,r.jsx)(n.code,{children:"jq"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -s http://<node_address>:8888/status | jq\n"})}),"\n",(0,r.jsxs)(n.details,{children:["\n",(0,r.jsx)(n.summary,{children:"Sample response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "api_version": "1.4.15",\n  "chainspec_name": "casper-test",\n  "starting_state_root_hash": "4c3856bd6a95b566301b9da61aaf84589a51ee2980f3cc7bbef78e7745386955",\n  "peers": [\n    {\n      "node_id": "tls:007e..e14b",\n      "address": "89.58.52.245:35000"\n    },\n    {\n      "node_id": "tls:00eb..ac11",\n      "address": "65.109.17.120:35000"\n    },\n    ...\n    {\n      "node_id": "tls:ffc0..555b",\n      "address": "95.217.228.224:35000"\n    }\n  ],\n  "last_added_block_info": {\n    "hash": "7acd2f48b573704e96eab54322f7e91a0624252baca3583ad2aae38229fe1715",\n    "timestamp": "2023-05-10T09:20:10.752Z",\n    "era_id": 9085,\n    "height": 1711254,\n    "state_root_hash": "1ac74071c1e76937c372c8d2ae22ea036a77578aad03821ec98021fdc1c5d06b",\n    "creator": "0106ca7c39cd272dbf21a86eeb3b36b7c26e2e9b94af64292419f7862936bca2ca"\n  },\n  "our_public_signing_key": "0107cba5b4826a87ddbe0ba8cda8064881b75882f05094c1a5f95e957512a3450e",\n  "round_length": "32s 768ms",\n  "next_upgrade": null,\n  "build_version": "1.4.15-039d438f2-casper-mainnet",\n  "uptime": "5days 13h 46m 54s 520ms"\n}\n'})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You can filter the result with dot notation, specifying one of the following parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api_version"})," - The RPC API version"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chainspec_name"})," - The chainspec name, used to identify the currently connected network"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"starting_state_root_hash"})," - The state root hash used at the start of the current session"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"peers"})," - The node ID and network address of each connected peer"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"last_added_block_info"})," - The minimal info of the last Block from the linear chain"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"our_public_signing_key"})," - Our public signing key"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"round_length"})," - The next round length if this node is a validator."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"next_upgrade"})," - Information about the next scheduled upgrade"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"build_version"})," - The compiled node version"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"uptime"})," - Time that has passed since the node has started."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Here is an example command for retrieving general network information:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -s http://<node_address>:8888/status | jq -r '.api_version, .last_added_block_info, .build_version, .uptime'\n"})}),"\n",(0,r.jsxs)(n.details,{children:["\n",(0,r.jsx)(n.summary,{children:"Sample response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"1.4.15"\n{\n  "hash": "dca9959b21df52633f85cd373a8117fe8e89629dd2a0455781484a439f7d9f62",\n  "timestamp": "2023-05-10T09:26:43.968Z",\n  "era_id": 9085,\n  "height": 1711266,\n  "state_root_hash": "5f374529e747a06ec825e07a030df7b9d80d1f7ffac9156779b4466620721872",\n  "creator": "0107cba5b4826a87ddbe0ba8cda8064881b75882f05094c1a5f95e957512a3450e"\n}\n"1.4.15-039d438f2-casper-mainnet"\n"5days 13h 53m 10s 763ms"\n'})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To get information about the next upgrade, use:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -s http://<node_address>:8888/status | jq .next_upgrade\n"})}),"\n",(0,r.jsx)(n.p,{children:"To get information about the last added block, use:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -s http://<node_address>:8888/status | jq .last_added_block_info\n"})}),"\n",(0,r.jsx)(n.p,{children:"To monitor the downloading of blocks to your node:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"watch -n 15 'curl -s http://<node_address>:8888/status | jq \".peers | length\"; curl -s http://<node_address>:8888/status | jq .last_added_block_info'\n"})}),"\n",(0,r.jsx)(n.p,{children:"To monitor local block height as well as RPC port status:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"watch -n 15 'curl -s http://<node_address>:8888/status | jq \".peers | length\"; curl -s http://<node_address>:8888/status | jq .last_added_block_info; casper-client get-block -n http://<node_address>:8888/status'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"9999",children:"Default SSE HTTP Event Stream Server Port: 9999"}),"\n",(0,r.jsxs)(n.p,{children:["The configuration options for the SSE HTTP event stream server are listed under the ",(0,r.jsx)(n.code,{children:"event_stream_server"})," section of the ",(0,r.jsx)(n.code,{children:"config.toml"})," file. The ",(0,r.jsx)(n.code,{children:"address"})," listing port 9999 is the listening address for the SSE HTTP event stream server."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"address = '0.0.0.0:9999'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If this port is closed, the requests coming to this port will not be served, but the node remains unaffected. For details and useful commands, see ",(0,r.jsx)(n.a,{href:"/docs-redux/developers/dapps/monitor-and-consume-events",children:"Monitoring and Consuming Events"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"setting-up-firewall-rules",children:"Setting up Firewall Rules"}),"\n",(0,r.jsxs)(n.p,{children:["To limit inbound traffic to the node\u2019s endpoints, you can set firewall rules similar to the ",(0,r.jsx)(n.code,{children:"ufw"})," commands below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt install ufw -y\nsudo ufw disable\nsudo ufw reset\nsudo ufw default allow outgoing\nsudo ufw default deny incoming\nsudo ufw limit ssh\nsudo ufw limit 7777/tcp\nsudo ufw limit 8888/tcp\nsudo ufw limit 35000/tcp\nsudo ufw enable\n"})}),"\n",(0,r.jsx)(n.p,{children:"These commands will limit requests to the available ports of your node. Port 35000 should be left open, although you can limit traffic, as it is crucial for node-to-node communication."}),"\n",(0,r.jsxs)(n.p,{children:["If you have any concerns, questions, or issues, please ",(0,r.jsx)(n.a,{href:"https://support.casperlabs.io/hc/en-gb/requests/new",children:"submit a request"})," to the Casper support team."]}),"\n",(0,r.jsx)(n.h2,{id:"restricting-access-for-private-networks",children:"Restricting Access for Private Networks"}),"\n",(0,r.jsxs)(n.p,{children:["Any node can join Mainnet and Testnet and communicate with the nodes in the network. Private networks may wish to restrict access for new nodes joining the network as described ",(0,r.jsx)(n.a,{href:"/docs-redux/operators/setup-network/create-private#network-access-control",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"summary-of-related-links",children:"Summary of Related Links"}),"\n",(0,r.jsx)(n.p,{children:"Here is a summary of the links mentioned on this page:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs-redux/operators/setup/install-node#network-requirements",children:"Network requirements"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs-redux/concepts/design/p2p",children:"Network communication"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs-redux/operators/setup/basic-node-configuration#config-file",children:"The node configuration file"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs-redux/developers/json-rpc/",children:"Interacting with the Casper JSON-RPC API"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs-redux/developers/cli/",children:"Interacting with the network using CLI"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs-redux/operators/becoming-a-validator/bonding#bonding-system-auction",children:"Bonding"})," or ",(0,r.jsx)(n.a,{href:"/docs-redux/operators/becoming-a-validator/unbonding",children:"unbonding"})," as a validator"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs-redux/operators/setup/basic-node-configuration#trusted-hash-for-synchronizing",children:"Getting a trusted node hash"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs-redux/operators/setup/upgrade#verifying-successful-staging",children:"Verifying successful staging"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs-redux/operators/setup/joining#step-7-confirm-the-node-is-synchronized",children:"Confirming that the node is synchronized"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs-redux/developers/dapps/monitor-and-consume-events",children:"Monitoring and consuming events"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs-redux/operators/setup-network/create-private#network-access-control",children:"Private network access control"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://support.casperlabs.io/hc/en-gb/sections/6960448246683-Node-Operation-FAQ",children:"FAQs for a basic validator node "})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.cspr.community/docs/faq-validator.html",children:"External FAQs on Mainnet and Testnet validator node setup"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var r=s(6540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);