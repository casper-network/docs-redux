"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[6091],{63543:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=s(74848),r=s(28453);const a={},i="JavaScript/TypeScript SDK",c={id:"developers/dapps/sdk/script-sdk",title:"JavaScript/TypeScript SDK",description:"This page contains details related to a few JavaScript (JS) clients and the Casper JS SDK.",source:"@site/docs/developers/dapps/sdk/script-sdk.md",sourceDirName:"developers/dapps/sdk",slug:"/developers/dapps/sdk/script-sdk",permalink:"/docs-redux/next/developers/dapps/sdk/script-sdk",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Karol Marter",lastUpdatedAt:1722798267e3,frontMatter:{},sidebar:"developers",previous:{title:"SDK Client Library Usage",permalink:"/docs-redux/next/developers/dapps/sdk/client-library-usage"},next:{title:".NET SDK",permalink:"/docs-redux/next/developers/dapps/sdk/csharp-sdk"}},o={},l=[{value:"Usage of JavaScript Clients",id:"usage-of-javascript-clients",level:2},{value:"Repository &amp; Client Packages",id:"repository-7-client-packages",level:3},{value:"Casper SDK for JavaScript",id:"casper-sdk-for-javascript",level:2},{value:"Installation",id:"installation",level:2},{value:"Tests",id:"tests",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Generating Account Keys",id:"generating-account-keys",level:3},{value:"Sending a Transfer",id:"sending-a-transfer",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"javascripttypescript-sdk",children:"JavaScript/TypeScript SDK"})}),"\n",(0,t.jsx)(n.p,{children:"This page contains details related to a few JavaScript (JS) clients and the Casper JS SDK."}),"\n",(0,t.jsx)(n.h2,{id:"usage-of-javascript-clients",children:"Usage of JavaScript Clients"}),"\n",(0,t.jsx)(n.p,{children:"The Casper team has implemented specific JS clients to support interaction with the Casper contracts."}),"\n",(0,t.jsx)(n.h3,{id:"repository-7-client-packages",children:"Repository & Client Packages"}),"\n",(0,t.jsx)(n.p,{children:"We provide repositories to create clients for Casper contracts and usage examples of such clients dedicated to interacting with smart contracts on Casper:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/client-js/README.md",children:"Casper CEP-78 (NFT) Client"})]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/casper-ecosystem/cep18/tree/master/client-js#readme",children:"Casper CEP-18 Client"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These packages give you an easy way to install and interact with the corresponding Casper contract."}),"\n",(0,t.jsx)(n.h2,{id:"casper-sdk-for-javascript",children:"Casper SDK for JavaScript"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/casper-ecosystem/casper-js-sdk",children:"TypeScript/JavaScript SDK"})," allows developers to interact with a Casper network using TypeScript or JavaScript. This section covers different examples of using the Casper JS SDK."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"To install this library using Node.js, run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install casper-js-sdk@next --save\n"})}),"\n",(0,t.jsx)(n.h2,{id:"tests",children:"Tests"}),"\n",(0,t.jsxs)(n.p,{children:["You can find basic examples for how to use this library in the ",(0,t.jsx)(n.code,{children:"test"})," directory. To run the tests, use this command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run test\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,t.jsx)(n.p,{children:"In this section, we outline a couple of essential tasks you can accomplish with the JavaScript SDK:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Generating account keys"}),"\n",(0,t.jsx)(n.li,{children:"Sending a transfer"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"generating-account-keys",children:"Generating Account Keys"}),"\n",(0,t.jsx)(n.p,{children:"This example shows you how to use the SDK to generate account keys to sign your deploy."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const fs = require("fs");\nconst path = require("path");\nconst { Keys } = require("casper-js-sdk");\n\nconst createAccountKeys = () => {\n    // Generating keys\n    const edKeyPair = Keys.Ed25519.new();\n    const { publicKey, privateKey } = edKeyPair;\n\n    // Create a hexadecimal representation of the public key\n    const accountAddress = publicKey.toHex();\n\n    // Get the account hash (Uint8Array) from the public key\n    const accountHash = publicKey.toAccountHash();\n\n    // Store keys as PEM files\n    const publicKeyInPem = edKeyPair.exportPublicKeyInPem();\n    const privateKeyInPem = edKeyPair.exportPrivateKeyInPem();\n\n    const folder = path.join("./", "casper_keys");\n\n    if (!fs.existsSync(folder)) {\n        const tempDir = fs.mkdirSync(folder);\n    }\n\n    fs.writeFileSync(folder + "/" + accountAddress + "_public.pem", publicKeyInPem);\n    fs.writeFileSync(folder + "/" + accountAddress + "_private.pem", privateKeyInPem);\n\n    return accountAddress;\n};\n\nconst newAccountAddress = createAccountKeys();\n'})}),"\n",(0,t.jsxs)(n.p,{children:["After generating the keys with this code, you can add them to the ",(0,t.jsx)(n.a,{href:"https://www.casperwallet.io/",children:"Casper Wallet Chrome extension"})," and use them to sign your transactions."]}),"\n",(0,t.jsx)(n.h3,{id:"sending-a-transfer",children:"Sending a Transfer"}),"\n",(0,t.jsxs)(n.p,{children:["This code block shows you how to define and send a transfer on a Casper network. Replace the ",(0,t.jsx)(n.code,{children:"sender-public-key"})," and ",(0,t.jsx)(n.code,{children:"recipient-public-key"})," in the code below."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"sendTransfer"})," function below will return a ",(0,t.jsx)(n.code,{children:"transfer-hash"})," which you can check on ",(0,t.jsx)(n.a,{href:"https://testnet.cspr.live/",children:"https://testnet.cspr.live/"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const fs = require("fs");\nconst path = require("path");\nconst axios = require("axios");\nconst casperClientSDK = require("casper-js-sdk");\n\nconst { Keys, CasperClient, CLPublicKey, DeployUtil } = require("casper-js-sdk");\n\nconst RPC_API = "http://159.65.203.12:7777/rpc";\nconst STATUS_API = "http://159.65.203.12:8888";\n\nconst sendTransfer = async ({ from, to, amount }) => {\n    const casperClient = new CasperClient(RPC_API);\n\n    const folder = path.join("./", "casper_keys");\n\n    // Read keys from the structure created in #Generating keys\n    const signKeyPair = Keys.Ed25519.parseKeyFiles(folder + "/" + from + "_public.pem", folder + "/" + from + "_private.pem");\n\n    // networkName can be taken from the status api\n    const response = await axios.get(STATUS_API + "/status");\n\n    let networkName = null;\n\n    if (response.status == 200) {\n        networkName = response.data.chainspec_name;\n    }\n\n    // For native-transfers the payment price is fixed\n    const paymentAmount = 100000000;\n\n    // transfer_id field in the request to tag the transaction and to correlate it to your back-end storage\n    const id = 187821;\n\n    // gasPrice for native transfers can be set to 1\n    const gasPrice = 1;\n\n    // Time that the deploy will remain valid for, in milliseconds\n    // The default value is 1800000 ms (30 minutes)\n    const ttl = 1800000;\n\n    let deployParams = new DeployUtil.DeployParams(signKeyPair.publicKey, networkName, gasPrice, ttl);\n\n    // We create a hex representation of the public key with an added prefix\n    const toPublicKey = CLPublicKey.fromHex(to);\n\n    const session = DeployUtil.ExecutableDeployItem.newTransfer(amount, toPublicKey, null, id);\n\n    const payment = DeployUtil.standardPayment(paymentAmount);\n    const deploy = DeployUtil.makeDeploy(deployParams, session, payment);\n    const signedDeploy = DeployUtil.signDeploy(deploy, signKeyPair);\n\n    // Here we are sending the signed deploy\n    return await casperClient.putDeploy(signedDeploy);\n};\n\nsendTransfer({\n    // Put here the public key of the sender\'s main purse. Note that it needs to have a balance greater than 2.5 CSPR\n    from: "<sender-public-key>",\n\n    // Put here the public key of the recipient\'s main purse. This account doesn\'t need to exist. If the key is correctly formatted, the network will create the account when the deploy is sent\n    to: "<recipient-public-key>",\n\n    // Minimal amount is 2.5 CSPR (1 CSPR = 1,000,000,000 motes)\n    amount: 25000000000,\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": At any moment, you can serialize the deploy from this example to JSON to accomplish whatever you want (store it, send it, etc.)."]}),"\n",(0,t.jsx)(n.p,{children:"Here is the code you can use to serialize the deploy:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const jsonFromDeploy = DeployUtil.deployToJson(signedDeploy);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then, you can reconstruct the deploy object using this function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const deployFromJson = DeployUtil.deployFromJson(jsonFromDeploy);\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(96540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);