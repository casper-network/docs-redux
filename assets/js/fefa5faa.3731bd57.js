"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[4856],{48798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(74848),a=n(28453);const i={title:"Move to Casper"},r="Moving to Casper from another Blockchain {#moving-to-casper}",o={id:"resources/moving-to-casper",title:"Move to Casper",description:"moving-to-casper}",source:"@site/versioned_docs/version-1.5.6/resources/moving-to-casper.md",sourceDirName:"resources",slug:"/resources/moving-to-casper",permalink:"/docs-redux/resources/moving-to-casper",draft:!1,unlisted:!1,tags:[],version:"1.5.6",frontMatter:{title:"Move to Casper"},sidebar:"resources",previous:{title:"Build on Casper",permalink:"/docs-redux/resources/build-on-casper/introduction"},next:{title:"Casper Token Standards",permalink:"/docs-redux/resources/tokens/"}},c={},l=[{value:"Smart Contract Platform",id:"contract-overview",level:2},{value:"Variable Storage and State Management",id:"variable-storage",level:2},{value:"Contract Functions",id:"contract-functions",level:2},{value:"Passing Arguments",id:"passing-arguments",level:2},{value:"Additional Considerations",id:"additional-considerations",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",tabitem:"tabitem",tabs:"tabs",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"import useBaseUrl from '@docusaurus/useBaseUrl';\nimport Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';"}),"\n",(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"moving-to-casper",children:"Moving to Casper from another Blockchain"})}),"\n",(0,s.jsx)(t.p,{children:"This page covers various considerations for moving to Casper from another blockchain by comparing Casper to Ethereum, Near, Aptos, and Solana in these aspects:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#contract-overview",children:"Smart Contract Platform Overview"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#variable-storage",children:"Variable Storage and State Management"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#contract-functions",children:"Contract Functions"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#passing-arguments",children:"Passing Arguments"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Since other blockchain projects use different technologies, it is essential to consider how those technologies serve your use case."}),"\n",(0,s.jsxs)(t.p,{children:["When choosing a blockchain, it is also essential to compare consensus mechanisms, tokenomics, cross-contract capabilities, contract upgradability, and software development kits (SDKs) as described ",(0,s.jsx)(t.a,{href:"#additional-considerations",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"contract-overview",children:"Smart Contract Platform"}),"\n",(0,s.jsxs)(t.tabs,{children:["\n",(0,s.jsxs)(t.tabitem,{value:"Casper",label:"Casper",children:["\n",(0,s.jsx)(t.p,{children:"Casper smart contracts are written in Rust."}),"\n",(0,s.jsxs)(t.p,{children:["Variables defined within the smart contract can be stored as either ",(0,s.jsx)(t.a,{href:"/docs-redux/developers/json-rpc/types_chain#namedkey",children:"Named Keys"})," or ",(0,s.jsx)(t.a,{href:"/docs-redux/concepts/dictionaries",children:"Dictionaries"})," as described in ",(0,s.jsx)(t.a,{href:"/docs-redux/concepts/design/reading-and-writing-to-the-blockchain",children:"Reading and Writing Data to the Blockchain"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"call"})," function serves as the main entry point of the ",(0,s.jsx)(t.a,{href:"/docs-redux/developers/writing-onchain-code/simple-contract",children:"smart contract"}),". It automatically executes when the smart contract is installed, setting the initial state of the contract and defining all other entry points."]}),"\n",(0,s.jsxs)(t.p,{children:["It's worth noting that Casper only supports public entry points for contracts. Additionally, contracts can be defined as upgradable or immutable as described ",(0,s.jsx)(t.a,{href:"/docs-redux/developers/writing-onchain-code/upgrading-contracts",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.tabitem,{value:"Ethereum",label:"Ethereum",children:["\n",(0,s.jsx)(t.p,{children:"Ethereum smart contracts are primarily written in Solidity, a programming language specifically designed for this purpose. These contracts comprise a collection of global variables that persist on the blockchain and define the contract's state."}),"\n",(0,s.jsx)(t.p,{children:"Furthermore, Ethereum smart contracts feature a constructor that specifies an initial state after deployment on the blockchain. Public functions declared within the contract can be invoked from outside the blockchain."}),"\n",(0,s.jsx)(t.p,{children:'In terms of immutability, Ethereum smart contracts are inherently immutable once deployed. However, design patterns such as "Proxy" or "Diamond" facilitate versioning contracts on the Ethereum blockchain.'}),"\n",(0,s.jsx)(t.p,{children:"Solidity smart contracts adhere to object-oriented programming principles and support features such as inheritance and libraries."}),"\n"]}),"\n",(0,s.jsxs)(t.tabitem,{value:"Near",label:"Near",children:["\n",(0,s.jsx)(t.p,{children:"Near smart contracts can be written in JavaScript or Rust, and the Near SDK can pack the code with lightweight runtime. This can be compiled into a single WebAssembly file and deployed on the NEAR network."}),"\n",(0,s.jsx)(t.p,{children:'In the Near ecosystem, smart contracts function as classes. The constructor, referred to as the "init" method, can receive attributes required for initializing the contract\'s initial state.'}),"\n",(0,s.jsx)(t.p,{children:"All public methods defined within the contract serve as its interface, exposing its functionality."}),"\n",(0,s.jsx)(t.p,{children:"Near smart contracts are immutable, but their state can change as transactions are executed. Contracts can also be upgraded by deploying new versions of the contract.  The Near blockchain provides various capabilities for versioning, including state migrations, state versioning, and contract self-updates."}),"\n"]}),"\n",(0,s.jsxs)(t.tabitem,{value:"Aptos",label:"Aptos",children:["\n",(0,s.jsx)(t.p,{children:"The Aptos programming language is known as Move. Its primary concepts revolve around scripts and modules. Scripts enable developers to incorporate additional logic into transactions, while modules allow them to expand blockchain functionality or create custom smart contracts."}),"\n",(0,s.jsx)(t.p,{children:"A distinctive feature of Move is the concept of Resources, which are specialized structures representing assets. This design allows resources to be managed similarly to other data types in Aptos, such as vectors or structs."}),"\n",(0,s.jsx)(t.p,{children:"A smart contract in the Aptos blockchain is called a Module. It is always connected with an account address. The modules have to be compiled to call functions in the Module."}),"\n",(0,s.jsx)(t.p,{children:"The Module's public methods are its interface and can be invoked from code outside the blockchain."}),"\n",(0,s.jsx)(t.p,{children:"Module code can be upgraded and changed under the account address, which does not change. The upgrade is only accepted if the code is backward compatible."}),"\n"]}),"\n",(0,s.jsxs)(t.tabitem,{value:"Solana",label:"Solana",children:["\n",(0,s.jsx)(t.p,{children:"Solana smart contracts are primarily written in Rust."}),"\n",(0,s.jsx)(t.p,{children:"Unlike other blockchain platforms, Solana's smart contracts are stateless and solely focus on program logic. The management of the contract state is handled at the account level, separating the state stored within the account and the contract logic defined in the programs."}),"\n",(0,s.jsx)(t.p,{children:"Smart contracts are commonly referred to as on-chain programs. These programs expose their interface as a public entry point, allowing external interaction."}),"\n",(0,s.jsx)(t.p,{children:'It is worth noting that Solana programs can be updated using an authority known as the "update authority," which holds the necessary permissions for making modifications to the program.'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"variable-storage",children:"Variable Storage and State Management"}),"\n",(0,s.jsxs)(t.tabs,{children:["\n",(0,s.jsxs)(t.tabitem,{value:"Casper",label:"Casper",children:["\n",(0,s.jsxs)(t.p,{children:["Variables can be stored as Named Keys or Dictionaries as described in ",(0,s.jsx)(t.a,{href:"/docs-redux/concepts/design/reading-and-writing-to-the-blockchain",children:"Reading and Writing Data to the Blockchain"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Additionally, local variables are available within the entry points and can be used to perform necessary actions or computations within the scope of each entry point."}),"\n"]}),"\n",(0,s.jsxs)(t.tabitem,{value:"Ethereum",label:"Ethereum",children:["\n",(0,s.jsx)(t.p,{children:"The variables within the contract are responsible for storing the state of the contract at a specific moment in time. However, it's important to note that local variables used within the call functions are not stored in the contract's state. Instead, they are employed solely for computational purposes within those specific functions."}),"\n",(0,s.jsx)(t.p,{children:"State variables must be strongly typed so that the smart contract compiler can enforce type consistency and ensure the storage space aligns with the declared data types. Strong typing promotes code correctness and prevents potential data corruption or memory-related issues related to the contract's state variables."}),"\n"]}),"\n",(0,s.jsxs)(t.tabitem,{value:"Near",label:"Near",children:["\n",(0,s.jsx)(t.p,{children:"Variables in the contract can be stored as native types, SDK collections, or internal structures. SDK collections offer advantages over native types."}),"\n",(0,s.jsx)(t.p,{children:"Additionally, there is a distinction between class attributes and local variables. Class attributes represent the state of the contract, while local variables are specific to the invocation of a function and have no impact on the contract's overall state."}),"\n",(0,s.jsx)(t.p,{children:"SDK Collections are typical when creating state variables because they provide convenient data structures such as lists, maps, and sets. These data structures can organize and manage complex data within the contract's storage. Using SDK Collections ensures efficient storage and facilitates easier access and data management in the smart contract."}),"\n"]}),"\n",(0,s.jsxs)(t.tabitem,{value:"Aptos",label:"Aptos",children:["\n",(0,s.jsx)(t.p,{children:"Aptos employs primitive types, such as integers, booleans, and addresses, to represent variables. These elementary types can be combined to create structures, but it's important to note that struct definitions are only permitted within Modules."}),"\n",(0,s.jsx)(t.p,{children:"Aptos advises developers to cluster related data into Resources for efficient data management and organization. Resources represent assets or specific data entities on the blockchain. By grouping data into Resources, you can maintain logical coherence and improve the readability and maintainability of the code."}),"\n",(0,s.jsx)(t.p,{children:"The Aptos blockchain introduces a tree-shaped persistent global storage that allows read and write operations. Global storage consists of trees originating from an account address."}),"\n"]}),"\n",(0,s.jsxs)(t.tabitem,{value:"Solana",label:"Solana",children:["\n",(0,s.jsx)(t.p,{children:"Variables can be utilized locally within the execution context of a specific entry point. They are limited to the scope of that entry point and not accessible outside of it. These variables can be defined as elementary types such as bool, String, int, etc."}),"\n",(0,s.jsx)(t.p,{children:"Data persists in structs within the account. The Binary Object Representation Serializer for Hashing (Borsh) facilitates the serialization and deserialization of these structs. The process involves reading the data from the account, deserializing it to obtain the values it contains, updating the values, and then serializing the modified data to save the new values back into the account."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"contract-functions",children:"Contract Functions"}),"\n",(0,s.jsxs)(t.tabs,{children:["\n",(0,s.jsxs)(t.tabitem,{value:"Casper",label:"Casper",children:["\n",(0,s.jsx)(t.p,{children:"For Casper smart contracts, public functions are called entry points. To declare them, the following format is used:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'#[no_mangle]\npub extern "C" fn counter_inc() {\n    \n    // Entry point body\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["It's important to note that entry points do not have input arguments in their definition, but the arguments can be accessed using the ",(0,s.jsx)(t.a,{href:"https://docs.rs/casper-types/latest/casper_types/struct.RuntimeArgs.html",children:"RuntimeArgs"})," passed to the contract. Entry points are instantiated within the ",(0,s.jsx)(t.code,{children:"call"})," entry point."]}),"\n",(0,s.jsxs)(t.p,{children:["If a return value is needed, it should be declared using the syntax described in the ",(0,s.jsx)(t.a,{href:"/docs-redux/resources/tutorials/advanced/return-values-tutorial",children:"Interacting with Runtime Return Values"})," tutorial."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"runtime::ret(value);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Each call to an entry point is treated as a ",(0,s.jsx)(t.a,{href:"/docs-redux/deploy-and-deploy-lifecycle",children:"Deploy"})," to the network, and therefore, each call incurs a cost paid in motes (the network's native accounting unit)."]}),"\n"]}),"\n",(0,s.jsxs)(t.tabitem,{value:"Ethereum",label:"Ethereum",children:["\n",(0,s.jsx)(t.p,{children:"On Ethereum, public methods serve two purposes: they can be used to execute contract logic and modify the contract's state, or they can be utilized to retrieve data stored within the contract's state."}),"\n",(0,s.jsx)(t.p,{children:"The declaration of public methods in Ethereum follows the format:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"function update_name(string value) public {\n    dapp_name = value;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"In cases where a public method only returns a value without modifying the state, it should be defined as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"function balanceOf(address _owner) public view returns (uint256 return_parameter) { }\n"})}),"\n",(0,s.jsx)(t.p,{children:"It is worth noting that public view methods on Ethereum, which solely retrieve data without making state changes, do not consume gas."}),"\n"]}),"\n",(0,s.jsxs)(t.tabitem,{value:"Near",label:"Near",children:["\n",(0,s.jsx)(t.p,{children:"In the Near blockchain, there are three types of public functions:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Init Methods"})," - These are used as the class constructors to initialize the state of the contract."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"View Methods"})," - These functions are used to read the state of the contract variables."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Call Methods"})," - These methods can mutate the state of the contract and perform specific actions, such as calling another contract."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The definition of public methods in Near is as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"pub fn add_message(&mut self, ...) { }\n"})}),"\n",(0,s.jsx)(t.p,{children:"For public methods that return variables, the definition would be:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"pub fn get_messages(&self, from_index: Option<U128>, limit: Option<u64>) -> Vec<PostedMessage> { }\n"})}),"\n",(0,s.jsx)(t.p,{children:"The actual implementation of the functions may include the necessary parameters and logic based on the contract's specific requirements."}),"\n"]}),"\n",(0,s.jsxs)(t.tabitem,{value:"Aptos",label:"Aptos",children:["\n",(0,s.jsx)(t.p,{children:"Public functions in Aptos are similar to public methods or functions found in other blockchain networks. The definition of a public function in Aptos appears as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"public fun start_collection(account: &signer) {}\n"})}),"\n",(0,s.jsx)(t.p,{children:"For public functions that return variables, the definition would be as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"public fun max(a: u8, b: u8): (u8, bool) {}\n"})}),"\n",(0,s.jsx)(t.p,{children:"In the Aptos blockchain, it is possible to return one or more values from a function."}),"\n"]}),"\n",(0,s.jsxs)(t.tabitem,{value:"Solana",label:"Solana",children:["\n",(0,s.jsx)(t.p,{children:"In Solana, functions are defined as public entry points that act as interfaces visible to the network. The declaration of an entry point follows this format:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"entrypoint!(process_instruction);\n"})}),"\n",(0,s.jsx)(t.p,{children:"The implementation of the entry point may resemble the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"pub fn process_instruction(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    _instruction_data: &[u8],\n) -> ProgramResult {}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Within the entry point function, the necessary parameters are specified, such as ",(0,s.jsx)(t.code,{children:"program_id"}),", which represents the program's identifier, ",(0,s.jsx)(t.code,{children:"accounts"}),", an array of ",(0,s.jsx)(t.code,{children:"AccountInfo"})," providing account details, and ",(0,s.jsx)(t.code,{children:"_instruction_data"}),", representing the instruction data received. The function returns a ",(0,s.jsx)(t.code,{children:"ProgramResult"}),", which indicates the success or failure of the instruction execution."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"passing-arguments",children:"Passing Arguments"}),"\n",(0,s.jsxs)(t.tabs,{children:["\n",(0,s.jsxs)(t.tabitem,{value:"Casper",label:"Casper",children:["\n",(0,s.jsx)(t.p,{children:"Named arguments are passed as strings with type specifiers. To provide session arguments to the entry point during a Deploy, you can utilize the following approach:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'casper-client put-deploy \\\n  --node-address http://65.21.235.219:7777 \\\n  --chain-name casper-test \\\n  --secret-key [KEY_PATH]/secret_key.pem \\\n  --payment-amount 2500000000 \\\n  --session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \\\n  --session-entry-point "delegate" \\\n  --session-arg "validator:public_key=\'0145fb72c75e1b459839555d70356a5e6172e706efa204d86c86050e2f7878960f\'" \\\n  --session-arg "amount:u512=\'500000000000\'" \\\n  --session-arg "delegator:public_key=\'0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf\'"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["To understand the context of this example, refer to: ",(0,s.jsx)(t.a,{href:"/docs-redux/developers/cli/delegate",children:"Delegating with the Casper Client"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"In the contract, you can access the session arguments as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"let uref: URef = runtime::get_key(Key_Name)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.code,{children:"get_key"})," function to retrieve the desired session argument by specifying the key's name."]}),"\n",(0,s.jsxs)(t.p,{children:["If you are uncertain how to use the ",(0,s.jsx)(t.code,{children:"get_key"})," function to obtain a specific session argument, check how to ",(0,s.jsx)(t.a,{href:"/docs-redux/developers/writing-onchain-code/simple-contract",children:"write a basic smart contract on Casper"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.tabitem,{value:"Ethereum",label:"Ethereum",children:["\n",(0,s.jsx)(t.p,{children:"Ethereum uses strongly typed function arguments, and developers must explicitly define the input and return variables. The compiler checks the correctness of the arguments passed to the functions during runtime. As a result, developers must explicitly specify the argument and return types in the function signature. The compiler ensures that the provided arguments adhere to the specified types, helping to catch type-related errors and ensure type safety."}),"\n",(0,s.jsx)(t.p,{children:"By enforcing strong typing, the compiler helps prevent potential runtime errors and enhances code reliability by verifying the compatibility of the passed arguments and expected return types."}),"\n"]}),"\n",(0,s.jsxs)(t.tabitem,{value:"Near",label:"Near",children:["\n",(0,s.jsx)(t.p,{children:"Strongly typed function arguments require explicitly defining the input and return variables. By enforcing strong typing, the programming language ensures that the arguments passed to a function match the expected types, preventing type-related errors and promoting code correctness. Strong typing provides additional clarity and safety by explicitly stating the data types of the function's inputs and outputs."}),"\n"]}),"\n",(0,s.jsxs)(t.tabitem,{value:"Aptos",label:"Aptos",children:["\n",(0,s.jsx)(t.p,{children:"Like Near, Aptos requires strongly typed function arguments, thus preventing type-related errors and promoting code correctness."}),"\n"]}),"\n",(0,s.jsxs)(t.tabitem,{value:"Solana",label:"Solana",children:["\n",(0,s.jsx)(t.p,{children:"Like Near and Aptos, Solana requires strongly typed function arguments, thus preventing type-related errors and promoting code correctness."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"additional-considerations",children:"Additional Considerations"}),"\n",(0,s.jsx)(t.p,{children:"When choosing a blockchain, you may also look into the network's consensus mechanism, the tokenomics or economic model, cross-contract communication, smart contract upgrades, and the available software development kits (SDKs)."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Consensus mechanism"})," refers to the algorithm the blockchain network uses to achieve agreement on the validity and ordering of transactions. Different blockchains employ various consensus mechanisms such as Proof-of-Work (PoW), Proof-of-Stake (PoS), or Delegated Proof-of-Stake (DPoS). The choice of consensus mechanism impacts factors like security, scalability, and energy efficiency."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Tokenomics"})," relates to the economic model of the blockchain network and its native tokens, involving token distribution, inflation, utility, and governance. Understanding the tokenomics of the network is crucial for evaluating the ecosystem's long-term viability and potential value."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Cross-contract capabilities"})," refer to the ability of smart contracts to interact and communicate within the blockchain network. This feature is essential for building complex decentralized applications (dApps) and implementing inter-contract functionality."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Contract upgradability"})," determines whether the smart contracts installed on the network can be modified or updated after installation. It is essential to assess the flexibility of the chosen blockchain in terms of contract maintenance, bug fixes, and incorporating new features or improvements without disrupting the existing ecosystem."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"SDK availability"})," also plays a significant role in the development process. SDKs provide tools, libraries, and documentation to simplify the creation of applications and smart contracts on the blockchain. Evaluating the maturity, community support, and compatibility of the available SDKs is crucial for developers."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Considering these aspects helps when selecting a blockchain that aligns with a project or application's specific requirements and goals."}),"\n",(0,s.jsx)(t.p,{children:"The Casper ecosystem aims to fulfill all of these aspects, including supporting enterprise-grade projects."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);