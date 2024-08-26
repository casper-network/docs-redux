"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[3418],{38070:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=s(74848),a=s(28453),r=(s(86025),s(11470)),l=s(19365);const i={},o="Development Prerequisites",c={id:"developers/prerequisites",title:"Development Prerequisites",description:"This page covers the necessary software for your Casper development environment. To develop comfortably, you should use Linux Ubuntu 20.04. Casper does not officially support macOS, but the commands are included for your convenience. If you encounter any problems, reach out to the community on Telegram or Discord. Developing on Windows is not advised.",source:"@site/versioned_docs/version-1.1.X/developers/prerequisites.md",sourceDirName:"developers",slug:"/developers/prerequisites",permalink:"/docs-redux/developers/prerequisites",draft:!1,unlisted:!1,tags:[],version:"1.1.X",frontMatter:{},sidebar:"developers",previous:{title:"Overview",permalink:"/docs-redux/developers"},next:{title:"Essential Rust Crates",permalink:"/docs-redux/developers/essential-crates"}},d={},h=[{value:"Preparing your Development Environment",id:"preparing-your-development-environment",level:2},{value:"Installing <code>curl</code>",id:"install-curl",level:3},{value:"Installing essential Linux packages",id:"install-essential",level:3},{value:"Installing packages required for Casper tools",id:"install-adds",level:3},{value:"Installing <code>cargo</code> on Linux",id:"install-linux-cargo",level:3},{value:"Installing Xcode developer tools for macOS",id:"install-xcode",level:3},{value:"Installing <code>brew</code>",id:"install-brew",level:3},{value:"Installing packages required for Casper tools",id:"install-adds-macos",level:3},{value:"Installing Rust",id:"install-rust",level:2},{value:"Installing the Casper Crates",id:"installing-the-casper-crates",level:2},{value:"Installing the Casper Client",id:"install-casper-client",level:2},{value:"Accessing the Casper client source code",id:"building-client-from-source",level:3},{value:"Installing CMake",id:"install-cmake",level:2},{value:"Installing an IDE",id:"installing-an-ide",level:2},{value:"Setting up a Casper Account",id:"setting-up-an-account",level:2},{value:"Creating an account",id:"creating-an-account",level:3},{value:"Generating the account hash",id:"generating-the-account-hash",level:3},{value:"Funding an Account",id:"fund-your-account",level:2},{value:"Acquiring a Node Address from the Network",id:"acquire-node-address-from-network-peers",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"development-prerequisites",children:"Development Prerequisites"})}),"\n",(0,t.jsxs)(n.p,{children:["This page covers the necessary software for your Casper development environment. To develop comfortably, you should use ",(0,t.jsx)(n.code,{children:"Linux Ubuntu 20.04"}),". Casper does not officially support ",(0,t.jsx)(n.code,{children:"macOS"}),", but the commands are included for your convenience. If you encounter any problems, reach out to the community on ",(0,t.jsx)(n.a,{href:"https://t.me/casperblockchain",children:"Telegram"})," or ",(0,t.jsx)(n.a,{href:"https://discord.com/invite/casperblockchain",children:"Discord"}),". Developing on Windows is not advised."]}),"\n",(0,t.jsx)(n.h2,{id:"preparing-your-development-environment",children:"Preparing your Development Environment"}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsxs)(l.A,{value:"Linux",label:"Linux",children:[(0,t.jsxs)(n.h3,{id:"install-curl",children:["Installing ",(0,t.jsx)(n.code,{children:"curl"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install curl\n"})}),(0,t.jsx)(n.h3,{id:"install-essential",children:"Installing essential Linux packages"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install build-essential\n"})}),(0,t.jsx)(n.h3,{id:"install-adds",children:"Installing packages required for Casper tools"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install pkg-config\nsudo apt-get install openssl\nsudo apt-get install libssl-dev\n"})}),(0,t.jsxs)(n.h3,{id:"install-linux-cargo",children:["Installing ",(0,t.jsx)(n.code,{children:"cargo"})," on Linux"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install cargo\n"})})]}),(0,t.jsxs)(l.A,{value:"macOS",label:"macOS",children:[(0,t.jsx)(n.h3,{id:"install-xcode",children:"Installing Xcode developer tools for macOS"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"xcode-select --install\n"})}),(0,t.jsx)(n.p,{children:"Verify the installation:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"xcode-select -p\n"})}),(0,t.jsxs)(n.h3,{id:"install-brew",children:["Installing ",(0,t.jsx)(n.code,{children:"brew"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'})}),(0,t.jsx)(n.h3,{id:"install-adds-macos",children:"Installing packages required for Casper tools"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew install pkg-config\nbrew install openssl\n"})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"install-rust",children:"Installing Rust"}),"\n",(0,t.jsxs)(n.p,{children:["Install the ",(0,t.jsx)(n.a,{href:"https://www.rust-lang.org",children:"Rust programming language"})," if you don't already have it on your computer."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"official Rust guide"})," recommends installing Rust by using ",(0,t.jsx)(n.code,{children:"curl"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"After your next login, the installation script automatically adds Rust to your system PATH. To start using Rust immediately, run the following command in your shell instead of restarting your terminal. The command will add Rust to your system PATH."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"source $HOME/.cargo/env\n"})}),"\n",(0,t.jsx)(n.p,{children:"Verify the installation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"rustup --version\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note: You can also use ",(0,t.jsx)(n.code,{children:"brew"})," on MacOS or ",(0,t.jsx)(n.code,{children:"apt"})," on Linux to install Rust."]}),"\n",(0,t.jsx)(n.h2,{id:"installing-the-casper-crates",children:"Installing the Casper Crates"}),"\n",(0,t.jsxs)(n.p,{children:["The best and fastest way to set up a Casper Rust project is to use ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/cargo-casper",children:"cargo casper"}),", which is the command line tool for creating a Wasm smart contract and tests for use on a Casper network. This tool will create a simple contract, a runtime environment, and a testing framework with a simple test. ",(0,t.jsx)(n.em,{children:"Cargo"})," is a build system and package manager for Rust (much like ",(0,t.jsx)(n.em,{children:"pip"})," if you are familiar with Python, or ",(0,t.jsx)(n.em,{children:"npm"})," and ",(0,t.jsx)(n.em,{children:"yarn"})," for those familiar with Javascript). It is also possible to use this configuration in your CI/CD pipeline."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cargo install cargo-casper\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you run into any issues with this command and you have not recently installed Rust from scratch, please make sure to update your Rust version with this command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"rustup update\n"})}),"\n",(0,t.jsx)(n.p,{children:"Verify the installation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cargo-casper --version\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Familiarize yourself with the essential Casper crates described ",(0,t.jsx)(n.a,{href:"/docs-redux/developers/essential-crates",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"install-casper-client",children:"Installing the Casper Client"}),"\n",(0,t.jsxs)(n.p,{children:["The default Casper client is on ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/casper-client",children:"crates.io"}),". This client can transmit your deploys to a Casper network."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cargo install casper-client\n"})}),"\n",(0,t.jsx)(n.p,{children:"Verify the installation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client --version\n"})}),"\n",(0,t.jsx)(n.p,{children:"The Casper client can print out help information, which provides an up-to-date list of supported commands. To do so, use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client --help\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"help"})," for each command to get the most up-to-date arguments and descriptions."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client <command> --help\n"})}),"\n",(0,t.jsx)(n.h3,{id:"building-client-from-source",children:"Accessing the Casper client source code"}),"\n",(0,t.jsxs)(n.p,{children:["You can access the Casper client source code ",(0,t.jsx)(n.a,{href:"https://github.com/casper-ecosystem/casper-client-rs",children:"here"}),". The ",(0,t.jsx)(n.code,{children:"lib"})," directory contains the source for the client library, which may be called directly rather than through the CLI binary. The CLI app ",(0,t.jsx)(n.code,{children:"casper-client"})," uses this library to implement its functionality."]}),"\n",(0,t.jsx)(n.p,{children:"If you wish to compile it, you will need to first install the nightly Rust toolchain with this command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"rustup toolchain install nightly\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then, compile the source code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cargo build --release\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You will find the ",(0,t.jsx)(n.code,{children:"casper-client"})," executable in the ",(0,t.jsx)(n.code,{children:"target/release"})," directory."]}),"\n",(0,t.jsx)(n.h2,{id:"install-cmake",children:"Installing CMake"}),"\n",(0,t.jsxs)(n.p,{children:["If you plan to compile contracts from the source code, including those provided in the ",(0,t.jsx)(n.a,{href:"https://github.com/casper-network/casper-node",children:"casper-node"})," repository, install ",(0,t.jsx)(n.code,{children:"CMake"})," with the commands below."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://cmake.org/",children:"CMake"})," is a popular build tool that we will use, and you may have it installed. If you do, make sure that you have the latest version. If you need to install or upgrade it, follow the steps below or on the ",(0,t.jsx)(n.a,{href:"https://cmake.org/resources/",children:"CMake website"}),". Once installed, check your version as shown below."]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(l.A,{value:"Linux",label:"Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get -y install cmake\n"})})}),(0,t.jsx)(l.A,{value:"macOS",label:"macOS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew install cmake\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Check your version:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cmake --version\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sample output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cmake version 3.20.0 (or above)\n\nCMake suite maintained and supported by Kitware (kitware.com/cmake).\n"})}),"\n",(0,t.jsx)(n.h2,{id:"installing-an-ide",children:"Installing an IDE"}),"\n",(0,t.jsx)(n.p,{children:"We advise using an integrated development environment such as Visual Studio Code (VSC) for development. There are many IDEs available for Rust development. The most popular IDEs for Rust are the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://code.visualstudio.com",children:"Visual Studio Code"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.jetbrains.com/clion/",children:"CLion"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.jetbrains.com/idea/",children:"IntelliJ Idea"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.vim.org/",children:"Vim"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can use any IDE you wish. Most of our documentation and examples use Visual Studio Code (VSC), a popular IDE with many extensions that might be helpful during development."}),"\n",(0,t.jsx)(n.p,{children:"If you are using VSC, you might find the following extensions useful:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CodeLLDB"})," \u2013 An important extension for debugging Rust code"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"rust-analyzer"})," \u2013 The official Rust language extension"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Better TOML"})," \u2013 Support for formatting TOML files"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"crates"})," \u2013 An extension to help manage crates"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Error Lens"})," \u2013 Enhances the programming experience by highlighting syntax errors"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-an-account",children:"Setting up a Casper Account"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/docs-redux/concepts/design/casper-design#accounts-head",children:"Account"})," creation process consists of two steps:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Creating an Account"}),"\n",(0,t.jsx)(n.li,{children:"Funding the Account"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following video complements the instructions below, showing you the expected output."}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sA1HTPjV_bc&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=3",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,t.jsx)(n.h3,{id:"creating-an-account",children:"Creating an account"}),"\n",(0,t.jsxs)(n.p,{children:["The Casper blockchain uses an on-chain account-based model, uniquely identified by an ",(0,t.jsx)(n.code,{children:"AccountHash"})," derived from a specific ",(0,t.jsx)(n.code,{children:"PublicKey"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, a transactional interaction with the blockchain takes the form of a ",(0,t.jsx)(n.code,{children:"Deploy"})," cryptographically signed by the key-pair corresponding to the ",(0,t.jsx)(n.code,{children:"PublicKey"})," used to create the account."]}),"\n",(0,t.jsxs)(n.p,{children:["Developers must create accounts using the ",(0,t.jsx)(n.a,{href:"/docs-redux/concepts/accounts-and-keys#option-1-key-generation-using-the-casper-client",children:"Casper command-line client"})," to access the ",(0,t.jsx)(n.code,{children:"secret_key.pem"})," file needed during development."]}),"\n",(0,t.jsx)(n.p,{children:"Some Casper networks, such as the official Testnet and Mainnet, provide wallets that allow account creation as outlined\xa0here. However, these wallets do not give developers access to the secret key file."}),"\n",(0,t.jsx)(n.h3,{id:"generating-the-account-hash",children:"Generating the account hash"}),"\n",(0,t.jsxs)(n.p,{children:["As a developer, you will often use an account hash, which is a 32-byte hash of the public key. This is because responses from the node contain ",(0,t.jsx)(n.code,{children:"AccountHashes"})," instead of the direct hexadecimal-encoded public key. To view the account hash for a public key, use the ",(0,t.jsx)(n.code,{children:"account-address"})," option of the Casper CLI client:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client account-address --public-key <path-to-public_key.pem/public-key-hex>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"fund-your-account",children:"Funding an Account"}),"\n",(0,t.jsx)(n.p,{children:"After generating the cryptographic key-pair for an Account, you must fund the account's main purse to create it on-chain."}),"\n",(0,t.jsxs)(n.p,{children:["On Testnet, you can fund an account by requesting test tokens according to ",(0,t.jsx)(n.a,{href:"/docs-redux/users/testnet-faucet",children:"this guide"}),". You can request test tokens ",(0,t.jsx)(n.strong,{children:"only once"})," for each account."]}),"\n",(0,t.jsx)(n.p,{children:"On Mainnet, a pre-existing account must transfer CSPR tokens to the newly created account's main purse to finalize the setup. The source account needs to transfer CSPR tokens to the hexadecimal-encoded public key of the target account. This transfer will automatically create the target account if it does not exist. Currently, this is the only way to create an account on Mainnet."}),"\n",(0,t.jsx)(n.h2,{id:"acquire-node-address-from-network-peers",children:"Acquiring a Node Address from the Network"}),"\n",(0,t.jsxs)(n.p,{children:["Clients can interact with a node on the blockchain via requests sent to that node's JSON-RPC endpoint, ",(0,t.jsx)(n.code,{children:"http://<node-address>:7777"})," by default."]}),"\n",(0,t.jsx)(n.p,{children:"The node address is the IP address or URL of a peer node."}),"\n",(0,t.jsx)(n.p,{children:"Casper Labs provides public Casper node JSON-RPC endpoints for each network:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Mainnet: ",(0,t.jsx)(n.a,{href:"https://rpc.mainnet.casperlabs.io/rpc",children:"https://rpc.mainnet.casperlabs.io/rpc"})]}),"\n",(0,t.jsxs)(n.li,{children:["Testnet: ",(0,t.jsx)(n.a,{href:"https://rpc.testnet.casperlabs.io/rpc",children:"https://rpc.testnet.casperlabs.io/rpc"})]}),"\n",(0,t.jsxs)(n.li,{children:["Integration network: ",(0,t.jsx)(n.a,{href:"https://rpc.integration.casperlabs.io/rpc",children:"https://rpc.integration.casperlabs.io/rpc"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Additionally, both the official Testnet and Mainnet provide block explorers that list the IP addresses of nodes on their respective networks."}),"\n",(0,t.jsxs)(n.p,{children:["You can get the ",(0,t.jsx)(n.code,{children:"node-ip-address"})," of a node on the network by visiting the following block explorers:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://testnet.cspr.live/tools/peers",children:"Peers"})," on Testnet"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://cspr.live/tools/peers",children:"Peers"})," on Mainnet"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You will see a list of peers, and you can select the IP of any peer on the list."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": If the selected peer is unresponsive, pick a different peer and try again."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>l});s(96540);var t=s(34164);const a={tabItem:"tabItem_Ymn6"};var r=s(74848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,l),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>w});var t=s(96540),a=s(34164),r=s(23104),l=s(56347),i=s(205),o=s(57485),c=s(31682),d=s(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:a}}=e;return{value:n,label:s,attributes:t,default:a}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const a=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,r=u(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,h]=m({queryString:s,groupId:a}),[x,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,d.Dv)(s);return[a,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:a}),f=(()=>{const e=c??x;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=s(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(74848);function b(e){let{className:n,block:s,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),a=i[s].value;a!==t&&(c(n),l(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...r,className:(0,a.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,j.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(96540);const a={},r=t.createContext(a);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);