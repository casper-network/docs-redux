"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[9378],{4903:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(4848),o=s(8453);const r={title:"Installation"},i="Installing a Node",a={id:"operators/setup/install-node",title:"Installation",description:"Ensure the requirements listed in the following sections are met before you start setting up the node on the network, either on Mainnet or Testnet.",source:"@site/docs/operators/setup/install-node.md",sourceDirName:"operators/setup",slug:"/operators/setup/install-node",permalink:"/docs-redux/operators/setup/install-node",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"operators",previous:{title:"Endpoints",permalink:"/docs-redux/operators/setup/node-endpoints"},next:{title:"Fast Sync",permalink:"/docs-redux/operators/setup/fast-sync"}},l={},c=[{value:"Network Requirements",id:"network-requirements",level:2},{value:"Operating System Requirements",id:"operating-system-requirements",level:2},{value:"Using Ubuntu 22.04",id:"using-ubuntu-2204",level:3},{value:"Required Number of Open Files",id:"required-number-of-open-files",level:2},{value:"Required Clean Up",id:"required-clean-up",level:2},{value:"Required Packages",id:"required-packages",level:2},{value:"Required Tools",id:"required-tools",level:2},{value:"Enable Bash Auto-Completion for <code>casper-client</code> (Optional)",id:"enable-bash-auto-completion-for-casper-client-optional",level:2},{value:"Installing All Protocols",id:"installing-all-protocols",level:2},{value:"Validator Keys",id:"validator-keys",level:2},{value:"Getting a Trusted Hash",id:"getting-a-trusted-hash",level:2},{value:"Node Address",id:"node-address",level:3},{value:"Protocol Version",id:"protocol-version",level:3},{value:"Load <code>trusted_hash</code> in Config.toml of the Protocol Version",id:"load-trusted_hash-in-configtoml-of-the-protocol-version",level:3},{value:"Syncing to Genesis",id:"syncing-to-genesis",level:2},{value:"Starting the Node",id:"starting-the-node",level:2},{value:"Monitoring the Synchronization Process",id:"monitoring-the-synchronization-process",level:3},{value:"Monitoring the Running Node",id:"monitoring-the-running-node",level:3},{value:"A Note on Speculative Execution",id:"a-note-on-speculative-execution",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"installing-a-node",children:"Installing a Node"})}),"\n",(0,t.jsx)(n.p,{children:"Ensure the requirements listed in the following sections are met before you start setting up the node on the network, either on Mainnet or Testnet."}),"\n",(0,t.jsx)(n.h2,{id:"network-requirements",children:"Network Requirements"}),"\n",(0,t.jsx)(n.p,{children:"The following ports are used by the node:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"35000 (required to be externally visible)"}),"\n",(0,t.jsx)(n.li,{children:"7777 RPC endpoint for interaction with JSON-RPC API"}),"\n",(0,t.jsx)(n.li,{children:"8888 REST endpoint for status and metrics (having this accessible allows your node to be part of network status)"}),"\n",(0,t.jsx)(n.li,{children:"9999 SSE endpoint for event stream"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Of these ",(0,t.jsx)(n.code,{children:"35000"})," is the only port required to be open for your node to function, however, opening ",(0,t.jsx)(n.code,{children:"8888"})," will allow others to know general network health. For more details, see the additional information on ",(0,t.jsx)(n.a,{href:"/docs-redux/operators/setup/node-endpoints",children:"Node Endpoints"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"operating-system-requirements",children:"Operating System Requirements"}),"\n",(0,t.jsx)(n.p,{children:"The recommended OS version is Ubuntu 20.04."}),"\n",(0,t.jsx)(n.h3,{id:"using-ubuntu-2204",children:"Using Ubuntu 22.04"}),"\n",(0,t.jsx)(n.p,{children:"Installing using Ubuntu 22.04 follows the same instructions as 20.04 with one exception:"}),"\n",(0,t.jsx)(n.p,{children:"If you try to install packages, you will receive:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"casper-client : Depends: libssl1.1 (>= 1.1.0) but it is not installable\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This message is due to the default ",(0,t.jsx)(n.code,{children:"openssl"})," moving to 3.* with Ubuntu 22.04. You need to install OpenSSL 1.* for prior versions of Ubuntu to use the Casper binaries with the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -f -JLO http://security.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2.20_amd64.deb\nsudo apt install ./libssl1.1_1.1.1f-1ubuntu2.19_amd64.deb\n"})}),"\n",(0,t.jsx)(n.h2,{id:"required-number-of-open-files",children:"Required Number of Open Files"}),"\n",(0,t.jsxs)(n.p,{children:["Before beginning, ",(0,t.jsx)(n.a,{href:"/docs-redux/operators/setup/open-files",children:"update the maximum open files limit"})," for your system. Specifically, update the node's ",(0,t.jsx)(n.code,{children:"/etc/security/limits.conf"})," file as described ",(0,t.jsx)(n.a,{href:"/docs-redux/operators/setup/open-files#updating-limits-conf",children:"here"}),", to ensure proper node operation."]}),"\n",(0,t.jsx)(n.h2,{id:"required-clean-up",children:"Required Clean Up"}),"\n",(0,t.jsxs)(n.p,{children:["If you were running a previous node on this box, this will clean up state. If packages are not installed, the ",(0,t.jsx)(n.code,{children:"apt remove"})," may give errors, but this is not a problem."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop casper-node-launcher.service\nsudo apt remove -y casper-client\nsudo apt remove -y casper-node\nsudo apt remove -y casper-node-launcher\nsudo rm /etc/casper/casper-node-launcher-state.toml\nsudo rm -rf /etc/casper/1_*\nsudo rm -rf /var/lib/casper/*\n"})}),"\n",(0,t.jsx)(n.h2,{id:"required-packages",children:"Required Packages"}),"\n",(0,t.jsx)(n.p,{children:"The following commands will set up the Casper Labs repository for packages:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'echo "deb [arch=amd64] https://repo.casperlabs.io/releases focal main" | sudo tee -a /etc/apt/sources.list.d/casper.list\ncurl -O https://repo.casperlabs.io/casper-repo-pubkey.asc\nsudo apt-key add casper-repo-pubkey.asc\nsudo apt update\n'})}),"\n",(0,t.jsx)(n.h2,{id:"required-tools",children:"Required Tools"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install -y casper-client casper-node-launcher jq\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"enable-bash-auto-completion-for-casper-client-optional",children:["Enable Bash Auto-Completion for ",(0,t.jsx)(n.code,{children:"casper-client"})," (Optional)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo casper-client generate-completion\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It defaults to ",(0,t.jsx)(n.code,{children:"bash"})," but can be changed with the ",(0,t.jsx)(n.code,{children:"--shell"})," argument:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--shell <STRING>    The type of shell to generate the completion script for [default: bash]  [possible values:\n                            zsh, bash, fish, powershell, elvish]\n\nsudo casper-client generate-completion --shell powershell\n"})}),"\n",(0,t.jsx)(n.p,{children:"You need to source the new auto completion script or log out and log in again to activate it for the current shell:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"source /usr/share/bash-completion/completions/casper-client\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now you can use ",(0,t.jsx)(n.code,{children:"casper-client"})," and press the ",(0,t.jsx)(n.code,{children:"tab"})," key to get auto completion for your commands."]}),"\n",(0,t.jsx)(n.h2,{id:"installing-all-protocols",children:"Installing All Protocols"}),"\n",(0,t.jsxs)(n.p,{children:["On ",(0,t.jsx)(n.strong,{children:"Mainnet"}),", run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo -u casper /etc/casper/node_util.py stage_protocols casper.conf\n"})}),"\n",(0,t.jsxs)(n.p,{children:["On ",(0,t.jsx)(n.strong,{children:"Testnet"}),", run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo -u casper /etc/casper/node_util.py stage_protocols casper-test.conf\n"})}),"\n",(0,t.jsx)(n.h2,{id:"validator-keys",children:"Validator Keys"}),"\n",(0,t.jsx)(n.p,{children:"If you do not have keys yet, you can create them using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo -u casper casper-client keygen /etc/casper/validator_keys\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more details, see the ",(0,t.jsx)(n.a,{href:"/docs-redux/operators/setup/basic-node-configuration#create-fund-keys",children:"Node Setup"})," page."]}),"\n",(0,t.jsx)(n.h2,{id:"getting-a-trusted-hash",children:"Getting a Trusted Hash"}),"\n",(0,t.jsxs)(n.p,{children:["In the past, we have used a lower ",(0,t.jsx)(n.code,{children:"trusted_hash"}),". Connecting at the tip, we now use as high of a ",(0,t.jsx)(n.code,{children:"trusted_hash"})," as possible. Find out more about ",(0,t.jsx)(n.a,{href:"/docs-redux/operators/setup/fast-sync",children:"Fast Sync"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"node-address",children:"Node Address"}),"\n",(0,t.jsx)(n.p,{children:"NODE_ADDR can be set to an IP of a trusted node, or to Casper Labs' public nodes"}),"\n",(0,t.jsxs)(n.p,{children:["You can find active peers at ",(0,t.jsx)(n.a,{href:"https://cspr.live/tools/peers",children:"https://cspr.live/tools/peers"})," or use the following Casper Labs public nodes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Testnet - NODE_ADDR=",(0,t.jsx)(n.a,{href:"https://rpc.testnet.casperlabs.io",children:"https://rpc.testnet.casperlabs.io"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Mainnet - NODE_ADDR=",(0,t.jsx)(n.a,{href:"https://rpc.mainnet.casperlabs.io",children:"https://rpc.mainnet.casperlabs.io"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"protocol-version",children:"Protocol Version"}),"\n",(0,t.jsxs)(n.p,{children:["Protocol version should be set to the largest available protocol version you see in ",(0,t.jsx)(n.code,{children:"ls /etc/casper"}),".  As of writing this, it was 1_5_2:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"PROTOCOL=1_5_2\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"load-trusted_hash-in-configtoml-of-the-protocol-version",children:["Load ",(0,t.jsx)(n.code,{children:"trusted_hash"})," in Config.toml of the Protocol Version"]}),"\n",(0,t.jsxs)(n.p,{children:["The following command uses the previously established NODE_ADDR and PROTOCOL to load the ",(0,t.jsx)(n.code,{children:"trusted_hash"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"NODE_ADDR=https://rpc.mainnet.casperlabs.io\nPROTOCOL=1_5_2\nsudo sed -i \"/trusted_hash =/c\\trusted_hash = '$(casper-client get-block --node-address $NODE_ADDR | jq -r .result.block.hash | tr -d '\\n')'\" /etc/casper/$PROTOCOL/config.toml\n"})}),"\n",(0,t.jsx)(n.h2,{id:"syncing-to-genesis",children:"Syncing to Genesis"}),"\n",(0,t.jsxs)(n.p,{children:["In the latest protocol version's ",(0,t.jsx)(n.em,{children:"Config.toml"}),", you will find the option ",(0,t.jsx)(n.code,{children:"sync_to_genesis"}),". By default, this value will be set to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If you are planning to run a validator node, it is better to not sync your node to genesis. This will increase node performance. In this case, the option should be changed to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sync_to_genesis = false\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you are using the node for historical data and want to query back to genesis, you can leave the default value in place."}),"\n",(0,t.jsx)(n.h2,{id:"starting-the-node",children:"Starting the Node"}),"\n",(0,t.jsx)(n.p,{children:"Start the node using the following commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo /etc/casper/node_util.py rotate_logs\nsudo /etc/casper/node_util.py start\n"})}),"\n",(0,t.jsx)(n.h3,{id:"monitoring-the-synchronization-process",children:"Monitoring the Synchronization Process"}),"\n",(0,t.jsx)(n.p,{children:"The following command will display the node synchronization details:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"/etc/casper/node_util.py watch\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When you first run the watch command, you may see the message ",(0,t.jsx)(n.code,{children:"RPC: Not Ready"}),". Once the node is synchronized, the status will change to ",(0,t.jsx)(n.code,{children:"RPC: Ready"})," and a similar output:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Last Block: 630151 (Era: 4153)\nPeer Count: 297\nUptime: 4days 6h 40m 18s 553ms\nBuild: 1.4.5-a7f6a648d-casper-mainnet\nKey: 0147b4cae09d64ab6acd02dd0868722be9a9bcc355c2fdff7c2c244cbfcd30f158\nNext Upgrade: None\n\nRPC: Ready\n\n\u25cf casper-node-launcher.service - Casper Node Launcher\n   Loaded: loaded (/lib/systemd/system/casper-node-launcher.service; enabled; vendor preset: enabled)\n   Active: active (running) since Wed 2022-03-16 21:08:50 UTC; 4 days ago\n     Docs: https://docs.casper.network\n Main PID: 2934 (casper-node-lau)\n    Tasks: 12 (limit: 4915)\n   CGroup: /system.slice/casper-node-launcher.service\n           \u251c\u2500 2934 /usr/bin/casper-node-launcher\n           \u2514\u250016842 /var/lib/casper/bin/1_4_5/casper-node validator /etc/casper/1_4_5/config.toml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The reactor state will be in CatchUp mode until it acquires the full tip state, at which point it will shift to KeepUp mode. If you left ",(0,t.jsx)(n.code,{children:"sync_to_genesis"})," as ",(0,t.jsx)(n.code,{children:"true"}),", it will begin syncing back history at this time."]}),"\n",(0,t.jsx)(n.p,{children:"Seeing available block range - Low: 0 High: 0 is normal until the fill tip is downloaded. You can see download progress with a look at metrics:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ curl -s 127.0.0.1:8888/metrics | grep trie_or_chunk\n# HELP trie_or_chunk_fetch_total number of trie_or_chunk all fetch requests made\n# TYPE trie_or_chunk_fetch_total counter\ntrie_or_chunk_fetch_total 102647\n# HELP trie_or_chunk_found_in_storage number of fetch requests that found trie_or_chunk in local storage\n# TYPE trie_or_chunk_found_in_storage counter\ntrie_or_chunk_found_in_storage 0\n# HELP trie_or_chunk_found_on_peer number of fetch requests that fetched trie_or_chunk from peer\n# TYPE trie_or_chunk_found_on_peer counter\ntrie_or_chunk_found_on_peer 102263\n# HELP trie_or_chunk_timeouts number of trie_or_chunk fetch requests that timed out\n# TYPE trie_or_chunk_timeouts counter\ntrie_or_chunk_timeouts 0\n"})}),"\n",(0,t.jsx)(n.p,{children:"If the node is not showing active (running) status, it is either stopped or in the process of restarting."}),"\n",(0,t.jsx)(n.h3,{id:"monitoring-the-running-node",children:"Monitoring the Running Node"}),"\n",(0,t.jsx)(n.p,{children:"The community has created a few tools to monitor your node once it is running, such as:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Status.py: ",(0,t.jsx)(n.a,{href:"https://github.com/RapidMark/casper-tools",children:"https://github.com/RapidMark/casper-tools"})]}),"\n",(0,t.jsxs)(n.li,{children:["Grafana: ",(0,t.jsx)(n.a,{href:"https://github.com/matsuro-hadouken/casper-tools",children:"https://github.com/matsuro-hadouken/casper-tools"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"a-note-on-speculative-execution",children:"A Note on Speculative Execution"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"speculative_exec_server"})," defaults to off and can be enabled in your ",(0,t.jsx)(n.em,{children:"Config.toml"})," file."]}),"\n",(0,t.jsxs)(n.p,{children:["While this is a useful tool, understand that it is also an attack vector for a node.  The intent is for someone to run on their node as a tool. You ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"should not"})})," use this if you are an active validator, as requests into this port can block execution_engine processing for legitimate network traffic."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(6540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);