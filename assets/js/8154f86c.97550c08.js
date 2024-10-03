"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[94490],{63137:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=s(74848),o=s(28453);const r={title:"Configuration"},t="Basic Node Configuration",c={id:"operators/setup/basic-node-configuration",title:"Configuration",description:"This page outlines the processes and files involved in setting up a Casper node. For step-by-step node installation instructions, follow the Node Setup guide.",source:"@site/versioned_docs/version-2.0.0/operators/setup/basic-node-configuration.md",sourceDirName:"operators/setup",slug:"/operators/setup/basic-node-configuration",permalink:"/2.0.0/operators/setup/basic-node-configuration",draft:!1,unlisted:!1,tags:[],version:"2.0.0",frontMatter:{title:"Configuration"},sidebar:"operators",previous:{title:"Hardware",permalink:"/2.0.0/operators/setup/hardware"},next:{title:"Endpoints",permalink:"/2.0.0/operators/setup/node-endpoints"}},l={},d=[{value:"The Casper Node Launcher",id:"casper-node-launcher",level:2},{value:"File Locations",id:"file-locations",level:2},{value:"<code>/usr/bin/</code>",id:"usrbin",level:3},{value:"<code>/etc/casper/</code>",id:"etccasper",level:3},{value:"<code>/var/lib/casper/</code>",id:"varlibcasper",level:3},{value:"Node Version Installation",id:"node-version-installation",level:2},{value:"The Node Configuration File",id:"config-file",level:2},{value:"The Trusted Hash for Synchronizing",id:"trusted-hash-for-synchronizing",level:3},{value:"Known Addresses",id:"known-addresses",level:3},{value:"Updating the <code>config.toml</code> file",id:"updating-config-file",level:3},{value:"Secret Keys",id:"secret-keys",level:3},{value:"Networking and Gossiping",id:"networking--gossiping",level:3},{value:"Enabling Speculative Execution",id:"enabling-speculative-execution",level:3},{value:"Example Config.toml configuration with speculative execution enabled",id:"example-configtoml-configuration-with-speculative-execution-enabled",level:4},{value:"Rust Client Installation",id:"client-installation",level:2},{value:"Creating Keys and Funding Accounts",id:"create-fund-keys",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"basic-node-configuration",children:"Basic Node Configuration"})}),"\n",(0,i.jsxs)(n.p,{children:["This page outlines the processes and files involved in setting up a Casper node. For step-by-step node installation instructions, follow the ",(0,i.jsx)(n.a,{href:"/2.0.0/operators/setup/install-node",children:"Node Setup"})," guide."]}),"\n",(0,i.jsx)(n.h2,{id:"casper-node-launcher",children:"The Casper Node Launcher"}),"\n",(0,i.jsxs)(n.p,{children:["A node is usually run by executing the ",(0,i.jsx)(n.code,{children:"casper-node-launcher"}),", which executes the ",(0,i.jsx)(n.code,{children:"casper-node"})," as a child process and also handles upgrades to bring the node to the latest version released."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"casper-node-launcher"})," can be installed via a Debian package, which also creates the ",(0,i.jsx)(n.code,{children:"casper"})," user and directory structures and sets up a ",(0,i.jsx)(n.code,{children:"systemd"})," unit and logging."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"casper-node-launcher"})," Debian package can be obtained from ",(0,i.jsx)(n.a,{href:"https://repo.casperlabs.io",children:"https://repo.casperlabs.io"}),". You only need to run the steps detailed there once."]}),"\n",(0,i.jsxs)(n.p,{children:["Then, proceed to install the ",(0,i.jsx)(n.code,{children:"casper-node-launcher"})," by running these commands:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install casper-node-launcher\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also build ",(0,i.jsx)(n.a,{href:"https://github.com/casper-network/casper-node-launcher",children:"from source"}),". However, all the setup and pull of casper-node releases will be manual."]}),"\n",(0,i.jsx)(n.h2,{id:"file-locations",children:"File Locations"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"casper-node-launcher"})," Debian installation creates the directories and files needed to run ",(0,i.jsx)(n.code,{children:"casper-node"})," versions and perform upgrades. A ",(0,i.jsx)(n.code,{children:"casper"})," user and ",(0,i.jsx)(n.code,{children:"casper"})," group are created during installation and used to run the software. Two main folders are relevant for our software: ",(0,i.jsx)(n.code,{children:"/etc/casper"})," and ",(0,i.jsx)(n.code,{children:"/var/lib/casper"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"The casper-node install version"})}),"\n",(0,i.jsxs)(n.p,{children:["Each version of the ",(0,i.jsx)(n.code,{children:"casper-node"})," install is located based on the semantic version with underscores. For example, version 1.0.3 is represented by a directory named ",(0,i.jsx)(n.code,{children:"1_0_3"}),". This convention applies to both binary and configuration file locations. Versioning with ",(0,i.jsx)(n.code,{children:"[m_n_p]"})," represents the major, minor, and patch of a semantic version."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Multiple versioned folders will exist on a system when upgrades are set up."})}),"\n",(0,i.jsxs)(n.p,{children:["The following is the filesystem's state after installing the ",(0,i.jsx)(n.code,{children:"casper-client"})," and ",(0,i.jsx)(n.code,{children:"casper-node-launcher"})," Debian packages, and after running the command ",(0,i.jsx)(n.code,{children:"sudo -u casper /etc/casper/node_util.py stage_protocols casper.conf"})," (Use casper-test.conf if on Testnet)."]}),"\n",(0,i.jsx)(n.h3,{id:"usrbin",children:(0,i.jsx)(n.code,{children:"/usr/bin/"})}),"\n",(0,i.jsxs)(n.p,{children:["The default location for executables from the Debian package install is ",(0,i.jsx)(n.code,{children:"/usr/bin"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"casper-client"})," - A client for interacting with a Casper network"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"casper-node-launcher"})," - The launcher application which starts the ",(0,i.jsx)(n.code,{children:"casper-node"})," as a child process"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"etccasper",children:(0,i.jsx)(n.code,{children:"/etc/casper/"})}),"\n",(0,i.jsxs)(n.p,{children:["This is the default location for configuration files. It can be overwritten with the ",(0,i.jsx)(n.code,{children:"CASPER_CONFIG_DIR"})," environment variable. The paths in this document assume the default configuration file location of ",(0,i.jsx)(n.code,{children:"/etc/casper"}),". The data is organized as follows:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"delete_local_db.sh"})," - Removes ",(0,i.jsx)(n.code,{children:"*.lmdb*"})," files from ",(0,i.jsx)(n.code,{children:"/var/lib/casper/casper-node"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pull_casper_node_version.sh"})," - Pulls ",(0,i.jsx)(n.code,{children:"bin.tar.gz"})," and ",(0,i.jsx)(n.code,{children:"config.tar.gz"})," from ",(0,i.jsx)(n.a,{href:"https://genesis.casperlabs.io/",children:"genesis.casperlabs.io"})," for a specified protocol version and extracts them into ",(0,i.jsx)(n.code,{children:"/var/lib/bin/<protocol_version>"})," and ",(0,i.jsx)(n.code,{children:"/etc/casper/<protocol_version>"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"config_from_example.sh"})," - Gets external IP to replace and create the ",(0,i.jsx)(n.code,{children:"config.toml"})," from ",(0,i.jsx)(n.code,{children:"config-example.toml"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"node_util.py"})," - A script that will be replacing other scripts and is the preferred method of performing the actions of ",(0,i.jsx)(n.code,{children:"pull_casper_node_version.sh"}),", ",(0,i.jsx)(n.code,{children:"config_from_example.sh"}),", and ",(0,i.jsx)(n.code,{children:"delete_local_db.sh"}),".  Other scripts will be deprecated in future releases of ",(0,i.jsx)(n.code,{children:"casper-node-launcher"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"casper-node-launcher-state.toml"})," - The local state for the ",(0,i.jsx)(n.code,{children:"casper-node-launcher"})," which is created during the first run"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"validator_keys/"})," - The default folder for node keys, containing:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"README.md"})," - Instructions on how to create validator keys using the ",(0,i.jsx)(n.code,{children:"casper-client"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"secret_key.pem"})," - Secret key used by the validator node to sign blocks and peer-to-peer messages"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"public_key.pem"})," - Public key associated with the secret key above, stored in PEM format"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"public_key_hex"})," - Public key associated with the secret key above, stored in hex format"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"1_0_0/"})," - Folder for genesis configuration files, containing:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"accounts.toml"})," - Contains the genesis validators and delegators"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"chainspec.toml"})," - Contains invariant network settings, with the ",(0,i.jsx)(n.code,{children:"activation_point"})," (network start time) as a timestamp"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"config-example.toml"})," - Example for creating a ",(0,i.jsx)(n.code,{children:"config.toml"})," file"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"config.toml"})," - Contains variable node configuration settings, created by a node operator manually or by running ",(0,i.jsx)(n.code,{children:"config_from_example.sh 1_0_0"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"m_n_p/"})," - Folder for each installed upgrade package's configuration files, containing:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"chainspec.toml"})," - Contains invariant network settings, with the ",(0,i.jsx)(n.code,{children:"activation_point"})," as an era ID (the era at which this protocol version of the node became or will become active)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"config-example.toml"})," - As per ",(0,i.jsx)(n.code,{children:"1_0_0/config-example.toml"}),", but compatible with the ",(0,i.jsx)(n.code,{children:"m.n.p"})," version of the node"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"config.toml"})," - As per ",(0,i.jsx)(n.code,{children:"1_0_0/config.toml"}),", but compatible with the ",(0,i.jsx)(n.code,{children:"m.n.p"})," version of the node"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"varlibcasper",children:(0,i.jsx)(n.code,{children:"/var/lib/casper/"})}),"\n",(0,i.jsxs)(n.p,{children:["This is the location for larger and variable data for the ",(0,i.jsx)(n.code,{children:"casper-node"}),", organized in the following folders and files:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"bin/"})," - The parent folder storing the versions of ",(0,i.jsx)(n.code,{children:"casper-node"})," executables. This location can be overwritten with the ",(0,i.jsx)(n.code,{children:"CASPER_BIN_DIR"})," environment variable. The paths in this document assume the default of ",(0,i.jsx)(n.code,{children:"/var/lib/casper/bin/"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"1_0_0/"})," - Folder for genesis binary files, containing:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"casper-node"})," - The node executable - defaults to the Ubuntu 20.04 compatible binary"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"README.md"})," - Information about the repository location and the Git hash used for compilation to allow a rebuild on other platforms"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"m_n_p/"})," - Folder for each installed upgrade package, containing:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"casper-node"})," - As per ",(0,i.jsx)(n.code,{children:"1_0_0/casper-node"}),", but the ",(0,i.jsx)(n.code,{children:"m.n.p"})," version of the node"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"README.md"})," - As per ",(0,i.jsx)(n.code,{children:"1_0_0/README.md"}),", but compatible with the ",(0,i.jsx)(n.code,{children:"m.n.p"})," version of the node"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"casper-node/<NETWORK NAME>"})," - Folder containing databases and related files produced by the node binary. For Mainnet, the network name is ",(0,i.jsx)(n.code,{children:"casper"})," and for Testnet it is ",(0,i.jsx)(n.code,{children:"casper-test"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"data.lmdb"})," - Persistent global state store of the network"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"data.lmbd-lock"})," - Lockfile for the ",(0,i.jsx)(n.code,{children:"data.lmdb"})," database"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"storage.lmdb"})," - Persistent store of all other network data, primarily Blocks and transactions"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"storage.lmdb-lock"})," - Lockfile for the ",(0,i.jsx)(n.code,{children:"storage.lmdb"})," database"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"unit_files/"})," - Folder containing transient caches of consensus information"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"node-version-installation",children:"Node Version Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Included with the ",(0,i.jsx)(n.code,{children:"casper-node-launcher"})," is ",(0,i.jsx)(n.code,{children:"node_util.py"})," for installing ",(0,i.jsx)(n.code,{children:"casper-node"})," versions. This command will stage all current ",(0,i.jsx)(n.code,{children:"casper-node"})," versions:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo -u casper /etc/casper/node_util.py stage_protocols <NETWORK_CONFIG>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.code,{children:"<NETWORK_CONFIG>"}),", we use ",(0,i.jsx)(n.code,{children:"casper.conf"})," for Mainnet and ",(0,i.jsx)(n.code,{children:"casper-test.conf"})," for Testnet.  This will install all currently released protocols in one step."]}),"\n",(0,i.jsx)(n.p,{children:"This command will do the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Create ",(0,i.jsx)(n.code,{children:"/var/lib/casper/bin/1_0_2/"})," and expand the ",(0,i.jsx)(n.code,{children:"bin.tar.gz"})," containing at a minimum ",(0,i.jsx)(n.code,{children:"casper-node"})]}),"\n",(0,i.jsxs)(n.li,{children:["Create ",(0,i.jsx)(n.code,{children:"/etc/casper/1_0_2/"})," and expand the ",(0,i.jsx)(n.code,{children:"config.tar.gz"})," containing ",(0,i.jsx)(n.code,{children:"chainspec.toml"}),", ",(0,i.jsx)(n.code,{children:"config-example.toml"}),", and possibly ",(0,i.jsx)(n.code,{children:"accounts.csv"})," and other files"]}),"\n",(0,i.jsxs)(n.li,{children:["Remove the archive files and run ",(0,i.jsx)(n.code,{children:"/etc/casper/config_from_example.sh 1_0_2"})," to create a ",(0,i.jsx)(n.code,{children:"config.toml"})," from the ",(0,i.jsx)(n.code,{children:"config-example.toml"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Release versions are invoked using the underscore format, such as:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo -u casper /etc/casper/pull_casper_node_version.sh 1_0_2\n"})}),"\n",(0,i.jsx)(n.h2,{id:"config-file",children:"The Node Configuration File"}),"\n",(0,i.jsxs)(n.p,{children:["One ",(0,i.jsx)(n.code,{children:"config.toml"})," file exists for each ",(0,i.jsx)(n.code,{children:"casper-node"})," version installed. It is located in the ",(0,i.jsx)(n.code,{children:"/etc/casper/[m_n_p]/"})," directory, where ",(0,i.jsx)(n.code,{children:"m_n_p"})," is the current semantic version. This can be created from the ",(0,i.jsx)(n.code,{children:"config-example.toml"})," by using ",(0,i.jsx)(n.code,{children:"/etc/casper/config_from_example.sh [m_n_p]"})," where ",(0,i.jsx)(n.code,{children:"[m_n_p]"})," is replaced with the current version, using underscores."]}),"\n",(0,i.jsxs)(n.p,{children:["Below are some fields in the ",(0,i.jsx)(n.code,{children:"config.toml"})," that you may need to adjust."]}),"\n",(0,i.jsx)(n.h3,{id:"trusted-hash-for-synchronizing",children:"The Trusted Hash for Synchronizing"}),"\n",(0,i.jsx)(n.p,{children:"Each Casper network is a permissionless, Proof-of-Stake network, implying that nodes can join and leave the network. As a result, some nodes may not be synchronized or as secure as bonded validators. Ideally, all nodes will join the network using a trusted source, such as a bonded validator."}),"\n",(0,i.jsx)(n.p,{children:"When joining the network, the system will start from the hash of a recent block and then work backward to obtain the finalized blocks from the linear block store. Here is the process to get the trusted hash of a bonded validator:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Find a list of trusted validators"}),"\n",(0,i.jsxs)(n.li,{children:["Query the status endpoint of a trusted validator (",(0,i.jsx)(n.code,{children:"http://<NODE_IP_ADDRESS>:8888/status"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Obtain the hash of a block from the status endpoint"}),"\n",(0,i.jsxs)(n.li,{children:["Update the ",(0,i.jsx)(n.code,{children:"config.toml"})," for the node to include the trusted hash. There is a field dedicated to this near the top of the file"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Here is an example command for obtaining a trusted hash. Replace the node address with an updated address from a node on the network."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo sed -i \"/trusted_hash =/c\\trusted_hash = '$(casper-client get-block --node-address http://3.14.161.135:7777 -b 20 | jq -r .result.block.hash | tr -d '\\n')'\" /etc/casper/1_0_0/config.toml\n"})}),"\n",(0,i.jsx)(n.h3,{id:"known-addresses",children:"Known Addresses"}),"\n",(0,i.jsxs)(n.p,{children:["For the node to connect to a network, the node needs a set of trusted peers for that network. For ",(0,i.jsx)(n.a,{href:"https://cspr.live/",children:"Mainnet"}),", these are listed in the ",(0,i.jsx)(n.code,{children:"config.toml"})," as ",(0,i.jsx)(n.code,{children:"known_addresses"}),". For other networks, locate and update the list to include at least two trusted IP addresses for peers in that network. Here is an ",(0,i.jsx)(n.a,{href:"https://github.com/casper-network/casper-protocol-release/blob/main/config/config-example.toml",children:"example configuration"}),". The ",(0,i.jsx)(n.a,{href:"https://github.com/casper-network/casper-protocol-release",children:"casper-protocol-release"})," repository stores configurations for various environments, which you can also use as examples."]}),"\n",(0,i.jsxs)(n.h3,{id:"updating-config-file",children:["Updating the ",(0,i.jsx)(n.code,{children:"config.toml"})," file"]}),"\n",(0,i.jsxs)(n.p,{children:["At the top of a ",(0,i.jsx)(n.code,{children:"config.toml"})," file as shown here, enter the trusted block hash to replace the ",(0,i.jsx)(n.code,{children:"'HEX-FORMATTED BLOCK HASH'"})," and uncomment the line by deleting the leading '#'. See the ",(0,i.jsx)(n.a,{href:"/2.0.0/operators/setup/basic-node-configuration#config-file",children:"Configuration File"})," for more details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# ================================\n# Configuration options for a node\n# ================================\n[node]\n\n# If set, use this hash as a trust anchor when joining an existing network.\n#trusted_hash = 'HEX-FORMATTED BLOCK HASH'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"secret-keys",children:"Secret Keys"}),"\n",(0,i.jsxs)(n.p,{children:["Provide the path to the secret keys for the node. This path is set to ",(0,i.jsx)(n.code,{children:"etc/casper/validator_keys/"})," by default. See ",(0,i.jsx)(n.a,{href:"#create-fund-keys",children:"Creating Keys and Funding Accounts"})," for more details."]}),"\n",(0,i.jsx)(n.h3,{id:"networking--gossiping",children:"Networking and Gossiping"}),"\n",(0,i.jsxs)(n.p,{children:["The node requires a publicly accessible IP address. The ",(0,i.jsx)(n.code,{children:"config_from_example.sh"})," and ",(0,i.jsx)(n.code,{children:"node_util.py"})," both allow IP for network address translation (NAT) setup. Specify the public IP address of the node. If you use the ",(0,i.jsx)(n.code,{children:"config_from_example.sh"})," external services are called to find your IP and this is inserted into the ",(0,i.jsx)(n.code,{children:"config.toml"})," created."]}),"\n",(0,i.jsx)(n.p,{children:"The following default values are specified in the file if you want to change them:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The port that will be used for status and transactions"}),"\n",(0,i.jsx)(n.li,{children:"The port used for networking"}),"\n",(0,i.jsx)(n.li,{children:"Known_addresses - these are the bootstrap nodes (there is no need to change these)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"enabling-speculative-execution",children:"Enabling Speculative Execution"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"speculative_exec"})," endpoint provides a method to execute a transaction without committing its execution effects to global state. This can be used by developers to roughly estimate the gas costs of sending the transaction in question. By default, ",(0,i.jsx)(n.code,{children:"speculative_exec"})," is disabled on a node."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"speculative_exec"})," can be enabled within ",(0,i.jsx)(n.em,{children:"config.toml"})," by changing ",(0,i.jsx)(n.code,{children:"enable_server"})," to ",(0,i.jsx)(n.code,{children:"true"})," under the configuration options for the speculative execution JSON-RPC HTTP server."]}),"\n",(0,i.jsxs)(n.p,{children:["Node operators may also change the incoming request port for speculative execution, which defaults to ",(0,i.jsx)(n.code,{children:"7778"}),". Further, you can choose to alter the ",(0,i.jsx)(n.code,{children:"qps_limit"})," and ",(0,i.jsx)(n.code,{children:"max_body_bytes"}),", which limit the amount and size of requests to the speculative execution server."]}),"\n",(0,i.jsx)(n.h4,{id:"example-configtoml-configuration-with-speculative-execution-enabled",children:"Example Config.toml configuration with speculative execution enabled"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# ========================================================================\n# Configuration options for the speculative execution JSON-RPC HTTP server\n# ========================================================================\n[speculative_exec_server]\n\n# Flag which enables the speculative execution JSON-RPC HTTP server.\nenable_server = true\n\n# Listening address for speculative execution JSON-RPC HTTP server.  If the port\n# is set to 0, a random port will be used.\n#\n# If the specified port cannot be bound to, a random port will be tried instead.\n# If binding fails, the speculative execution JSON-RPC HTTP server will not run,\n# but the node will be otherwise unaffected.\n#\n# The actual bound address will be reported via a log line if logging is enabled.\naddress = '0.0.0.0:7778'\n\n# The global max rate of requests (per second) before they are limited.\n# Request will be delayed to the next 1 second bucket once limited.\nqps_limit = 1\n\n# Maximum number of bytes to accept in a single request body.\nmax_body_bytes = 2_621_440\n\n# Specifies which origin will be reported as allowed by speculative execution server.\n#\n# If left empty, CORS will be disabled.\n# If set to '*', any origin is allowed.\n# Otherwise, only a specified origin is allowed. The given string must conform to the [origin scheme](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin).\ncors_origin = ''\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"client-installation",children:"Rust Client Installation"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/2.0.0/developers/prerequisites#install-casper-client",children:"Prerequisites"})," page lists installation instructions for the Casper client, which is useful for generating keys and retrieving information from the network."]}),"\n",(0,i.jsx)(n.h2,{id:"create-fund-keys",children:"Creating Keys and Funding Accounts"}),"\n",(0,i.jsxs)(n.p,{children:["The following command will create keys in the ",(0,i.jsx)(n.code,{children:"/etc/casper/validator_keys"})," folder."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo -u casper casper-client keygen /etc/casper/validator_keys\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To learn about other options for generating keys, see ",(0,i.jsx)(n.a,{href:"/2.0.0/concepts/accounts-and-keys",children:"Accounts and Cryptographic Keys"})," or run the Rust client ",(0,i.jsx)(n.code,{children:"keygen"})," command with the ",(0,i.jsx)(n.code,{children:"--help"})," option."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo -u casper casper-client keygen --help\n"})}),"\n",(0,i.jsxs)(n.p,{children:["More about keys and key generation can also be found in ",(0,i.jsx)(n.code,{children:"/etc/casper/validator_keys/README.md"})," if the ",(0,i.jsx)(n.code,{children:"casper-node-launcher"})," was installed from the Debian package."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Save your keys in a secure location, preferably offline."})}),"\n",(0,i.jsxs)(n.p,{children:["To submit a bonding request, you will need to ",(0,i.jsx)(n.a,{href:"/2.0.0/developers/prerequisites#fund-your-account",children:"fund your account"})," as well."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(96540);const o={},r=i.createContext(o);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);