"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[65845],{46012:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var i=s(74848),t=s(28453);const a={title:"CEP-78 JavaScript Client",slug:"/resources/tokens/cep78/js-tutorial"},r="CEP-78 JavaScript Client Tutorial",l={id:"resources/tokens/cep78/js-tutorial",title:"CEP-78 JavaScript Client",description:"This tutorial outlines the usage of the JavaScript client available for the CEP-78 Enhanced NFT Standard.",source:"@site/versioned_docs/version-2.0.0/resources/tokens/cep78/js-tutorial.md",sourceDirName:"resources/tokens/cep78",slug:"/resources/tokens/cep78/js-tutorial",permalink:"/2.0.0/resources/tokens/cep78/js-tutorial",draft:!1,unlisted:!1,tags:[],version:"2.0.0",frontMatter:{title:"CEP-78 JavaScript Client",slug:"/resources/tokens/cep78/js-tutorial"},sidebar:"resources",previous:{title:"Ownership Lookup",permalink:"/2.0.0/resources/tokens/cep78/reverse-lookup"},next:{title:"Open-Source Software",permalink:"/2.0.0/resources/build-on-casper/casper-open-source-software"}},c={},o=[{value:"Client Installation",id:"client-installation",level:2},{value:"Installing a CEP-78 Contract using the JavaScript Client",id:"installing-a-cep-78-contract-using-the-javascript-client",level:2},{value:"Minting a Token",id:"minting-a-token",level:2},{value:"Register Recipient",id:"register-recipient",level:2},{value:"Transferring a Token",id:"transferring-a-token",level:2},{value:"Burning a Token",id:"burning-a-token",level:2},{value:"Example Usages",id:"example-usages",level:2},{value:"Running an Install Example",id:"running-an-install-example",level:3},{value:"Running a Usage Example",id:"running-a-usage-example",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"cep-78-javascript-client-tutorial",children:"CEP-78 JavaScript Client Tutorial"})}),"\n",(0,i.jsx)(n.p,{children:"This tutorial outlines the usage of the JavaScript client available for the CEP-78 Enhanced NFT Standard."}),"\n",(0,i.jsxs)(n.p,{children:["Further information on the CEP-78 Enhanced NFT Standard can be found ",(0,i.jsx)(n.a,{href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The client is available in ",(0,i.jsx)(n.em,{children:"npm"})," as ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/casper-cep78-js-client",children:"casper-cep78-js-client"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"client-installation",children:"Client Installation"}),"\n",(0,i.jsx)(n.p,{children:"The client can be installed in a project you have built using TypeScript / Javascript."}),"\n",(0,i.jsx)(n.p,{children:"To install run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"npm install casper-cep78-js-client\n"})}),"\n",(0,i.jsx)(n.h2,{id:"installing-a-cep-78-contract-using-the-javascript-client",children:"Installing a CEP-78 Contract using the JavaScript Client"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"install"})," method crafts a ",(0,i.jsx)(n.a,{href:"/2.0.0/transactions-and-transaction-lifecycle",children:"Deploy"})," using ",(0,i.jsx)(n.code,{children:"InstallArgs"}),".\nAs with every deploy created by the SDK, you can send it using the ",(0,i.jsx)(n.code,{children:".send(rpcUrl)"})," method providing the RPC URL that you want to use. It will return deployHash."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'\n  const cc = new CEP78Client(process.env.NODE_URL!, process.env.NETWORK_NAME!);\n\n  const installDeploy = await cc.install(\n    {\n      collectionName: "my-collection",\n      collectionSymbol: "MY-NFTS",\n      totalTokenSupply: "1000",\n      ownershipMode: NFTOwnershipMode.Transferable,\n      nftKind: NFTKind.Physical,\n      jsonSchema: {\n        properties: {\n          color: { name: "color", description: "", required: true },\n          size: { name: "size", description: "", required: true },\n          material: { name: "material", description: "", required: true },\n          condition: { name: "condition", description: "", required: false },\n        },\n      },\n      nftMetadataKind: NFTMetadataKind.CustomValidated,\n      identifierMode: NFTIdentifierMode.Ordinal,\n      metadataMutability: MetadataMutability.Immutable,\n      mintingMode: MintingMode.Installer,\n      ownerReverseLookupMode: OwnerReverseLookupMode.Complete\n    },\n    "250000000000",\n    FAUCET_KEYS.publicKey,\n    [FAUCET_KEYS]\n  );\n\n  const hash = await installDeploy.send(process.env.http://localhost:11101/rpc);\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"InstallArgs"})," are specified as follows:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"collectionName"})," - The name of the NFT collection, passed in as a ",(0,i.jsx)(n.code,{children:"String"}),". ",(0,i.jsx)(n.strong,{children:"This parameter is required and cannot be changed post installation"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"collectionSymbol"})," - The symbol representing a given NFT collection, passed in as a ",(0,i.jsx)(n.code,{children:"String"}),". ",(0,i.jsx)(n.strong,{children:"This parameter is required and cannot be changed post installation"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"totalTokenSupply"})," - The total number of NFTs that a specific contract instance will mint passed in as a ",(0,i.jsx)(n.code,{children:"U64"})," value. ",(0,i.jsx)(n.strong,{children:"This parameter is required and cannot be changed post installation"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ownershipMode"})," - The ",(0,i.jsx)(n.code,{children:"OwnershipMode"})," modality that dictates the ownership behavior of the NFT contract. This argument is passed in as a ",(0,i.jsx)(n.code,{children:"u8"})," value and is required at the time of installation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"nftKind"})," - The ",(0,i.jsx)(n.code,{children:"NFTKind"})," modality that specifies the off-chain items represented by the on-chain NFT data. This argument is passed in as a ",(0,i.jsx)(n.code,{children:"u8"})," value and is required at the time of installation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"jsonSchema"})," - The JSON schema for the NFT tokens that will be minted by the NFT contract passed in as a ",(0,i.jsx)(n.code,{children:"String"}),". More information on ",(0,i.jsx)(n.code,{children:"NFTMetadataKind"})," can be found ",(0,i.jsx)(n.a,{href:"/2.0.0/resources/tokens/cep78/modalities#nftmetadatakind",children:"here"}),". This parameter may be left empty if metadata kind is set to ",(0,i.jsx)(n.code,{children:"Raw(3)"}),". If the metadata kind is set to ",(0,i.jsx)(n.code,{children:"CustomValidated(4)"}),", it will require a specifically formatted custom schema. This parameter ",(0,i.jsx)(n.strong,{children:"cannot be changed post installation"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"nftMetadataKind"})," - The metadata schema for the NFTs to be minted by the NFT contract. This argument is passed in as a ",(0,i.jsx)(n.code,{children:"u8"})," value and is required at the time of installation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"identifierMode"})," - The ",(0,i.jsx)(n.code,{children:"NFTIdentifierMode"})," modality dictates the primary identifier for NFTs minted by the contract. This argument is passed in as a ",(0,i.jsx)(n.code,{children:"u8"})," value and is required at the time of installation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"metadataMutability"})," - The ",(0,i.jsx)(n.code,{children:"MetadataMutability"})," modality dictates whether the metadata of minted NFTs can be updated. This argument is passed in as a ",(0,i.jsx)(n.code,{children:"u8"})," value and is required at the time of installation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"mintingmode"})," - The ",(0,i.jsx)(n.code,{children:"MintingMode"})," modality dictates the access to the ",(0,i.jsx)(n.code,{children:"mint()"})," entry point in the NFT contract. This optional parameter will default to restricting access to the installer of the contract. ",(0,i.jsx)(n.strong,{children:"This parameter cannot be changed once the contract has been installed"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"holdermode"})," - The ",(0,i.jsx)(n.code,{children:"NFTHolderMode"})," modality dictates which entities can hold NFTs. This optional parameter will default to a mixed mode, allowing either ",(0,i.jsx)(n.code,{children:"Accounts"})," or ",(0,i.jsx)(n.code,{children:"Contracts"})," to hold NFTs. ",(0,i.jsx)(n.strong,{children:"This parameter cannot be changed once the contract has been installed"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"burnMode"})," - The ",(0,i.jsx)(n.code,{children:"BurnMode"})," modality dictates whether minted NFTs can be burned. This optional parameter will allow tokens to be burnt by default. ",(0,i.jsx)(n.strong,{children:"This parameter cannot be changed once the contract has been installed"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ownerReverseLookupMode"})," - The ",(0,i.jsx)(n.code,{children:"OwnerReverseLookupMode"})," dictates whether the contract will index ownership of tokens as outlined ",(0,i.jsx)(n.a,{href:"/2.0.0/resources/tokens/cep78/reverse-lookup#the-cep-78-page-system",children:"here"})," to allow lookup of owned tokens by account. ",(0,i.jsx)(n.strong,{children:"This parameter cannot be changed once the contract has been installed"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Further information on CEP-78 modality options can be found ",(0,i.jsx)(n.a,{href:"/2.0.0/resources/tokens/cep78/modalities",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"minting-a-token",children:"Minting a Token"}),"\n",(0,i.jsxs)(n.p,{children:["The CEP-78 JS Client includes code to construct a deploy that will ",(0,i.jsx)(n.code,{children:"Mint"})," a token, as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'\n  const mintDeploy = cc.mint(\n    {\n      owner: FAUCET_KEYS.publicKey,\n      meta: {\n        color: "Blue",\n        size: "Medium",\n        material: "Aluminum",\n        condition: "Used",\n      },\n    },\n    { useSessionCode: true },\n    "2000000000",\n    FAUCET_KEYS.publicKey,\n    [FAUCET_KEYS]\n  );\n\n  const mintDeployHash = await mintDeploy.send("http://localhost:11101/rpc");\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The arguments adhere to those provided in the original installation, with the ",(0,i.jsx)(n.code,{children:".send()"})," pointing to a valid RPC URL on your target Casper network. In this instance, we are using an NCTL RPC URL."]}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the ",(0,i.jsx)(n.a,{href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/client-js/examples/usage.ts#L86-L88",children:(0,i.jsx)(n.code,{children:"useSessionCode"})})," variable decides if the user will call ",(0,i.jsx)(n.code,{children:"mint"})," using session code, or not. It will be set to ",(0,i.jsx)(n.code,{children:"true"})," if the ",(0,i.jsx)(n.code,{children:"OwnerReverseLookupMode"})," is set to ",(0,i.jsx)(n.code,{children:"Complete"}),". ",(0,i.jsx)(n.a,{href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/client-js/examples/usage.ts#L116-L130",children:"It then registers the recipient with the contract"})," and mints the token."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"OwnerReverseLookupMode"})," is set to ",(0,i.jsx)(n.code,{children:"NoLookup"}),", ",(0,i.jsx)(n.code,{children:"useSessionCode"})," will be set to ",(0,i.jsx)(n.code,{children:"false"})," and it will simply mint the token as it does not need to register the recipient."]}),"\n",(0,i.jsx)(n.h2,{id:"register-recipient",children:"Register Recipient"}),"\n",(0,i.jsxs)(n.p,{children:["As we used ",(0,i.jsx)(n.code,{children:"ownerReverseLookupMode: OwnerReverseLookupMode.Complete"})," in this contract installation, we must register the recipient. To do this, we construct a ",(0,i.jsx)(n.code,{children:"register"})," deploy:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'\n    const registerDeploy = cc.register(\n      {\n        tokenOwner: USER1_KEYS.publicKey,\n      },\n      "1000000000",\n      USER1_KEYS.publicKey,\n      [USER1_KEYS]\n    );\n\n    const registerDeployHash = await registerDeploy.send("http://localhost:11101/rpc");\n    \n'})}),"\n",(0,i.jsx)(n.h2,{id:"transferring-a-token",children:"Transferring a Token"}),"\n",(0,i.jsx)(n.p,{children:"After minting one or more tokens, you can then use the following code to transfer the tokens between accounts:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'\n  const transferDeploy = cc.transfer(\n    {\n      tokenId: "0",\n      source: FAUCET_KEYS.publicKey,\n      target: USER1_KEYS.publicKey,\n    },\n    { useSessionCode: true },\n    "13000000000",\n    FAUCET_KEYS.publicKey,\n    [FAUCET_KEYS]\n  );\n\n  const transferDeployHash = await transferDeploy.send("http://localhost:11101/rpc");\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"Transferring accepts the following arguments:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"tokenId"})," - The sequential ID assigned to a token in mint order."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"source"})," - The account sending the token in question."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"target"})," - The account receiving the transferred token."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["As above, the ",(0,i.jsx)(n.code,{children:"useSessionCode"})," variable determines if the user will call ",(0,i.jsx)(n.code,{children:"transfer"})," using session code based on the setting of ",(0,i.jsx)(n.code,{children:"OwnerReverseLookupMode"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"burning-a-token",children:"Burning a Token"}),"\n",(0,i.jsxs)(n.p,{children:["The following code shows how to burn a minted NFT that you hold and have access rights to, requiring only the ",(0,i.jsx)(n.code,{children:"tokenId"})," argument:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'\n  const burnDeploy = await contractClient.burn(\n    { tokenId: "0" },\n    "13000000000",\n    USER1_KEYS.publicKey,\n    [USER1_KEYS]\n  );\n\n  const burnDeployHash = await burnDeploy.send("http://localhost:11101/rpc");\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"example-usages",children:"Example Usages"}),"\n",(0,i.jsx)(n.h3,{id:"running-an-install-example",children:"Running an Install Example"}),"\n",(0,i.jsx)(n.p,{children:"This repository includes an example script for installing a CEP-78 contract instance."}),"\n",(0,i.jsxs)(n.p,{children:["You will need to define the following variables in the ",(0,i.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NODE_URL"})," - The address of a node. If you are testing using ",(0,i.jsx)(n.a,{href:"/2.0.0/developers/dapps/setup-nctl",children:"NCTL"}),", this will be ",(0,i.jsx)(n.code,{children:"http://localhost:11101/rpc"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NETWORK_NAME"})," - The name of the Casper network you are operating on, ",(0,i.jsx)(n.code,{children:"casper-net-1"})," when testing using a local network with NCTL."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"MASTER_KEY_PAIR_PATH"})," - The path to the key pair of the minting account."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"USER1_KEY_PAIR_PATH"})," - The path to an additional account's key pair for use in testing transfer features."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You may also need to install associated dependencies using:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"npm i\n"})}),"\n",(0,i.jsx)(n.p,{children:"This example can be run using the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"npm run example:install\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The example will then return the installation's ",(0,i.jsx)(n.code,{children:"deployHash"}),", and inform you when the installation is successful."]}),"\n",(0,i.jsx)(n.p,{children:"The example will then provide the installing account's information, which will include the CEP-78 NFT contract's hash and package hash."}),"\n",(0,i.jsx)(n.h3,{id:"running-a-usage-example",children:"Running a Usage Example"}),"\n",(0,i.jsx)(n.p,{children:"A usage example uses the same variables as the Install example above, but tests the basic functionality of the contract after installation."}),"\n",(0,i.jsx)(n.p,{children:"The usage example can be run using the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"npm run example:usage\n"})}),"\n",(0,i.jsx)(n.p,{children:"This example will acquire the contract's hash and package hash, prior to sending three separate deploys to perform several function tests as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Mint"})," - The example will attempt to mint an NFT using the installation account."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Transfer"})," - The example will transfer the previously minted NFT to a second account (USER1 as defined in the variables.)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Burn"})," - The example will burn the minted NFT."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The associated code for these deploys may be found in the ",(0,i.jsx)(n.code,{children:"client-js/examples"})," directory."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(96540);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);