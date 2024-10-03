"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[61153],{56531:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=o(74848),s=o(28453);const r={title:"Staging Files"},t="Staging Files for a New Network",c={id:"operators/setup-network/staging-files-for-new-network",title:"Staging Files",description:"Staging files is not needed for already established running networks.",source:"@site/docs/operators/setup-network/staging-files-for-new-network.md",sourceDirName:"operators/setup-network",slug:"/operators/setup-network/staging-files-for-new-network",permalink:"/operators/setup-network/staging-files-for-new-network",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Staging Files"},sidebar:"operators",previous:{title:"Private Network Setup",permalink:"/operators/setup-network/create-private"},next:{title:"Node Maintenance",permalink:"/operators/maintenance/"}},l={},d=[{value:"Hosting Server",id:"hosting-server",level:2},{value:"More on <code>protocol_versions</code>",id:"more-on-protocol_versions",level:3},{value:"Protocol Version",id:"protocol-version",level:2},{value:"Network Configuration File",id:"network-configuration-file",level:2},{value:"Setup Configuration Files",id:"setup-configuration-files",level:2},{value:"chainspec.toml",id:"chainspectoml",level:3},{value:"config-example.toml",id:"config-exampletoml",level:3},{value:"Staging a Protocol Version",id:"staging-a-protocol-version",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"staging-files-for-a-new-network",children:"Staging Files for a New Network"})}),"\n",(0,i.jsxs)(n.admonition,{type:"important",children:[(0,i.jsx)(n.p,{children:"Staging files is not needed for already established running networks."}),(0,i.jsx)(n.p,{children:"Only use these instructions if you are creating a new Casper network and hosting protocol files for this network."})]}),"\n",(0,i.jsx)(n.h2,{id:"hosting-server",children:"Hosting Server"}),"\n",(0,i.jsx)(n.p,{children:"Files for staging protocol versions are hosted on a typical HTTP(S) server."}),"\n",(0,i.jsxs)(n.p,{children:["Scripts included with the ",(0,i.jsx)(n.code,{children:"casper-node-launcher"})," have network configurations for Mainnet and Testnet.  These scripts point to the server hosting files and network name."]}),"\n",(0,i.jsx)(n.p,{children:"Since a given server can be used for multiple networks, a network named directory is used to\nhold files for that network."}),"\n",(0,i.jsxs)(n.p,{children:["This is a description of Mainnet protocol version hosting (with network name: ",(0,i.jsx)(n.code,{children:"casper"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"genesis.casperlab.io"})," is the web server URL with the following directory structure:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"casper"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"protocol_versions"})," - File listing active protocol versions so scripts know what directories to use"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"1_0_0"})," - Genesis protocol version\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"config.tar.gz"})," - Configuration files to be expanded into ",(0,i.jsx)(n.code,{children:"/etc/casper/1_0_0"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bin.tar.gz"})," - Binary files to be expanded into ",(0,i.jsx)(n.code,{children:"/var/lib/casper/bin/1_0_0"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"1_1_0"})," - First upgrade\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"config.tar.gz"})," - Configuration files to be expanded into ",(0,i.jsx)(n.code,{children:"/etc/casper/1_1_0"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bin.tar.gz"})," - Binary files to be expanded into ",(0,i.jsx)(n.code,{children:"/var/lib/casper/bin/1_1_0"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"...  (skipping many other protocol versions)"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"1_4_6"})," - A later upgrade\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"config.tar.gz"})," - Configuration files to be expanded into ",(0,i.jsx)(n.code,{children:"/etc/casper/1_4_6"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bin.tar.gz"})," - Binary files to be expanded into ",(0,i.jsx)(n.code,{children:"/var/lib/casper/bin/1_4_6"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"more-on-protocol_versions",children:["More on ",(0,i.jsx)(n.code,{children:"protocol_versions"})]}),"\n",(0,i.jsxs)(n.p,{children:["At the root of the hosting server directory for a given network, a ",(0,i.jsx)(n.code,{children:"protocol_versions"})," file exists.  This holds the valid protocol versions for a network."]}),"\n",(0,i.jsxs)(n.p,{children:["We can look at this manually on Mainnet using ",(0,i.jsx)(n.em,{children:"curl"}),".  As of writing this, ",(0,i.jsx)(n.code,{children:"1.4.6"})," is the latest version and the contents of this file will change."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n$ curl -s genesis.casperlabs.io/casper/protocol_versions\n1_0_0\n1_1_0\n1_1_2\n1_2_0\n1_2_1\n1_3_2\n1_3_4\n1_4_1\n1_4_3\n1_4_4\n1_4_5\n1_4_6\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We should find ",(0,i.jsx)(n.code,{children:"bin.tar.gz"})," and ",(0,i.jsx)(n.code,{children:"config.tar.gz"})," in those directories under ",(0,i.jsx)(n.code,{children:"casper"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"protocol-version",children:"Protocol Version"}),"\n",(0,i.jsxs)(n.p,{children:["The protocol version of a network is not related to the ",(0,i.jsx)(n.code,{children:"casper-node"})," version.  In Mainnet, these have often been the same. However, with a new network, you would use the latest ",(0,i.jsx)(n.code,{children:"casper-node"})," version for your\n",(0,i.jsx)(n.code,{children:"1.0.0"})," protocol."]}),"\n",(0,i.jsx)(n.h2,{id:"network-configuration-file",children:"Network Configuration File"}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"casper-node-launcher"})," package is installed, both ",(0,i.jsx)(n.code,{children:"casper.conf"})," and ",(0,i.jsx)(n.code,{children:"casper-test.conf"})," are installed\nin ",(0,i.jsx)(n.code,{children:"/etc/casper/network_configs"}),".  Once a valid config file for a new network is copied to this location,\nall commands with ",(0,i.jsx)(n.em,{children:"node_util.py"})," will work as they do on existing networks."]}),"\n",(0,i.jsxs)(n.p,{children:["By convention, we name the config file the same as the network.  So Mainnet has a network name of ",(0,i.jsx)(n.code,{children:"casper"})," and we use\n",(0,i.jsx)(n.code,{children:"casper.conf"})," for the config file."]}),"\n",(0,i.jsxs)(n.p,{children:["For a new network using server ",(0,i.jsx)(n.code,{children:"casper.mydomain.com"})," to host files for ",(0,i.jsx)(n.code,{children:"our-network"})," network, we would have a\n",(0,i.jsx)(n.code,{children:"our-network.conf"})," file that looks like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"SOURCE_URL=casper.mydomain.com\nNETWORK_NAME=our-network\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Host this ",(0,i.jsx)(n.code,{children:"our-network.conf"})," in the root of ",(0,i.jsx)(n.code,{children:"casper.mydomain.com/our-network"})," at the same level as ",(0,i.jsx)(n.code,{children:"protocol_versions"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This allows any node which wants to use the new network to run the following to install this configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd /etc/casper/network_configs\nsudo -u casper curl -JLO casper.mydomain.com/our-network/our-network.conf\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Any command needing a network config from ",(0,i.jsx)(n.code,{children:"node_util.py"})," can use ",(0,i.jsx)(n.code,{children:"our-network.conf"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Staging protocol versions for a new node with this network or staging an upcoming upgrade would just need this command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo -u casper /etc/casper/node_util.py stage_protocols our-network.conf\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setup-configuration-files",children:"Setup Configuration Files"}),"\n",(0,i.jsx)(n.p,{children:"For a network to be started, we to build the configuration files for a certain genesis time and with nodes that will be running.  These files need to be configured in advanced, so a genesis time should be selected that allows packaging the files, loading onto nodes and starting nodes prior to the genesis time."}),"\n",(0,i.jsx)(n.h3,{id:"chainspectoml",children:"chainspec.toml"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/concepts/glossary/C#chainspec",children:"chainspec.toml"})," file is configuration for the network and must be exactly the same on all nodes."]}),"\n",(0,i.jsxs)(n.p,{children:["The name for a network is specified ",(0,i.jsx)(n.code,{children:"network.name"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Each protocol will have a ",(0,i.jsx)(n.code,{children:"version"})," and ",(0,i.jsx)(n.code,{children:"activation_point"}),".  At genesis this is a date and time in format shown below. For future upgrades it would be an integer of the ",(0,i.jsx)(n.code,{children:"era_id"})," for activation of the upgrade."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[protocol]\nversion = '1.0.0'\nactivation_point = '2022-08-01T10:00:00Z'\n\n[network]\nname = 'mynetwork'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"config-exampletoml",children:"config-example.toml"}),"\n",(0,i.jsxs)(n.p,{children:["The config-example.toml is used to generate config.toml for a protocol after the node's IP is inserted.  The ",(0,i.jsx)(n.code,{children:"public_address"})," is auto-detected with ",(0,i.jsx)(n.code,{children:"node_util.py stage_protocols"}),". If using a NAT environment, the public IP can be specified with the ",(0,i.jsx)(n.code,{children:"--ip"})," argument."]}),"\n",(0,i.jsxs)(n.p,{children:["This file should have ",(0,i.jsx)(n.code,{children:"known_addresses"})," added that are relevant to the network.   Nodes that will be genesis validators are added to this list in the form:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[network]\nknown_addresses = ['<ip 1>:35000','<ip 2>:35000','<ip 3>:35000']\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"config.toml"})," can be setup to customized fields for a given node.  ",(0,i.jsx)(n.code,{children:"config-example.toml"})," is a default configuration."]}),"\n",(0,i.jsx)(n.h2,{id:"staging-a-protocol-version",children:"Staging a Protocol Version"}),"\n",(0,i.jsxs)(n.p,{children:["For the initial genesis protocol version or future upgrade protocol versions, you will typically use\nprebuilt and tested ",(0,i.jsx)(n.code,{children:"bin.tar.gz"})," that have been tested and staged for existing networks.  The ",(0,i.jsx)(n.code,{children:"config.tar.gz"}),"\nfile must be customized for the specific network with a network name, protocol version and activation point at the very least."]}),"\n",(0,i.jsxs)(n.p,{children:["These archives should be created with no directory information stored.  This is done by using ",(0,i.jsx)(n.code,{children:"tar"})," in the same directory as the files."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir config\ncd config\nmv [source of chainspec.toml] ./chainspec.toml\nmv [source of config-example.toml] ./config-example.toml\ntar -czvf ../config.tar.gz .\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can test what was compressed with untar'ing the file."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir conftest\ncd conftest\ntar -xzvf ../config.tar.gz .\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will expand files for verification."}),"\n",(0,i.jsxs)(n.p,{children:["For custom ",(0,i.jsx)(n.code,{children:"casper-node"})," builds, the minimum contents of ",(0,i.jsx)(n.code,{children:"bin.tar.gz"})," is the ",(0,i.jsx)(n.code,{children:"casper-node"})," executable."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir bin\ncd bin\ncp [source of casper-node] ./casper-node\ntar -czvf ../bin.tar.gz .\n"})}),"\n",(0,i.jsxs)(n.p,{children:["A directory for the protocol_version will be created on the server.  For example: ",(0,i.jsx)(n.code,{children:"1_1_0"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["We will copy ",(0,i.jsx)(n.code,{children:"bin.tar.gz"})," and ",(0,i.jsx)(n.code,{children:"config.tar.gz"})," into ",(0,i.jsx)(n.code,{children:"1_1_0"}),".  Once this is done, we are safe to update\n",(0,i.jsx)(n.code,{children:"protocol_versions"})," by appending ",(0,i.jsx)(n.code,{children:"1_1_0"})," to the end of the file and uploading it into the root of the network directory."]}),"\n",(0,i.jsx)(n.p,{children:"Any node that runs the following command will get this new upgrade:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo -u casper /etc/casper/node_util.py stage_protocols <network.conf>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>c});var i=o(96540);const s={},r=i.createContext(s);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);