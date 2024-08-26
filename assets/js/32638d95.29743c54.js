"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[7039],{40465:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(74848),o=t(28453);const r={title:"Upgrades"},i="Upgrading the Node",a={id:"operators/setup/upgrade",title:"Upgrades",description:"The chainspec.toml contains a section to indicate from which era the given casper-node version should start running.",source:"@site/versioned_docs/version-1.1.X/operators/setup/upgrade.md",sourceDirName:"operators/setup",slug:"/operators/setup/upgrade",permalink:"/docs-redux/operators/setup/upgrade",draft:!1,unlisted:!1,tags:[],version:"1.1.X",frontMatter:{title:"Upgrades"},sidebar:"operators",previous:{title:"Open Files Limit",permalink:"/docs-redux/operators/setup/open-files"},next:{title:"Join a Network",permalink:"/docs-redux/operators/setup/joining"}},c={},d=[{value:"Upgrading Protocol Versions",id:"upgrading-protocol-versions",level:2},{value:"Upgrade Staging Instructions",id:"upgrade-staging-instructions",level:3},{value:"Verifying Successful Staging",id:"verifying-successful-staging",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"upgrading-the-node",children:"Upgrading the Node"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs-redux/concepts/glossary/C#chainspec",children:(0,s.jsx)(n.code,{children:"chainspec.toml"})})," contains a section to indicate from which era the given ",(0,s.jsx)(n.code,{children:"casper-node"})," version should start running."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[protocol]\n# This protocol version becomes active at the start of this era.\nactivation_point = 100\n"})}),"\n",(0,s.jsxs)(n.p,{children:["At every block finalization, the ",(0,s.jsx)(n.code,{children:"casper-node"})," looks for newly configured versions. When a new version is configured, the running node will look at future era_id in the ",(0,s.jsx)(n.code,{children:"chainspec.toml"})," file. This will be the era before where the current casper-node will cleanly shut down."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"casper-node-launcher"})," will detect a clean exit 0 condition and start the next version of the ",(0,s.jsx)(n.code,{children:"casper-node"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"upgrading-protocol-versions",children:"Upgrading Protocol Versions"}),"\n",(0,s.jsxs)(n.p,{children:["All Casper Mainnet participants are requested to stage the upgrade of their nodes to a new version of ",(0,s.jsx)(n.code,{children:"casper-node"})," immediately. Staging an upgrade is a process in which you tell your node to download the upgrade files and prepare them so that they can automatically be applied at the pre-defined activation point."]}),"\n",(0,s.jsx)(n.p,{children:"Do not restart the node, only run the commands provided. The upgrade will automatically occur at the activation point."}),"\n",(0,s.jsx)(n.h3,{id:"upgrade-staging-instructions",children:"Upgrade Staging Instructions"}),"\n",(0,s.jsx)(n.p,{children:"The process to upgrade your node is very straightforward. Log in to your node, and execute the following command on Mainnet:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo -u casper /etc/casper/node_util.py stage_protocols casper.conf\n"})}),"\n",(0,s.jsxs)(n.p,{children:["On Testnet, use ",(0,s.jsx)(n.code,{children:"casper-test.conf"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo -u casper /etc/casper/node_util.py stage_protocols casper-test.conf\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": To only view the list of staged and unstaged protocols, use this command: ",(0,s.jsx)(n.code,{children:"sudo -u casper /etc/casper/node_util.py check_protocols casper.conf"})]}),"\n",(0,s.jsx)(n.h3,{id:"verifying-successful-staging",children:"Verifying Successful Staging"}),"\n",(0,s.jsx)(n.p,{children:"After you have successfully executed the staging commands, wait a few minutes for a new block to be issued before checking that your node is correctly staged with the upgrade. After a few minutes, take a look at your status end-point, as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -s http://127.0.0.1:8888/status | jq .next_upgrade\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should expect this output if properly staged, prior to upgrading:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ curl -s localhost:8888/status | jq .next_upgrade\n{\n  "activation_point": 4968,\n  "protocol_version": "1.4.6"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If you see ",(0,s.jsx)(n.code,{children:"null"})," after waiting for a few minutes, then your upgrade staging was not executed successfully."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": The protocol version will change as per the next upgrade available."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);