"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[86898],{10289:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var s=t(74848),r=t(28453);const c={},i="Getting Started with AssemblyScript",a={id:"developers/writing-onchain-code/assembly-script",title:"Getting Started with AssemblyScript",description:"Casper Labs maintains the casper-contract to allow developers to create smart contracts using AssemblyScript. The package source is hosted in the main Casper Network repository.",source:"@site/docs/developers/writing-onchain-code/assembly-script.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/assembly-script",permalink:"/docs-redux/developers/writing-onchain-code/assembly-script",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Getting Started with Rust",permalink:"/docs-redux/developers/writing-onchain-code/getting-started"},next:{title:"Writing a Basic Smart Contract in Rust",permalink:"/docs-redux/developers/writing-onchain-code/simple-contract"}},o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing AssemblyScript",id:"installing-assemblyscript",level:3},{value:"Development Environment Setup",id:"development-environment-setup",level:2},{value:"Installing the Casper Package",id:"installing-the-casper-package",level:3},{value:"Creating a Project",id:"creating-a-project",level:3},{value:"Script Entries",id:"script-entries",level:3},{value:"Sample Smart Contract",id:"sample-smart-contract",level:3},{value:"Compile to Wasm",id:"compile-to-wasm",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"getting-started-with-assemblyscript",children:"Getting Started with AssemblyScript"})}),"\n",(0,s.jsxs)(n.p,{children:["Casper Labs maintains the ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/casper-contract",children:"casper-contract"})," to allow developers to create smart contracts using ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/assemblyscript",children:"AssemblyScript"}),". The package source is hosted in the ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-node/tree/master/smart_contracts/contract_as/assembly",children:"main Casper Network repository"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.h3,{id:"installing-assemblyscript",children:"Installing AssemblyScript"}),"\n",(0,s.jsxs)(n.p,{children:["Installation of AssemblyScript requires ",(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"After installation of Node.js, the following command will install AssemblyScript:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm i assemblyscript\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Full instructions and details for installing AssemblyScript can be found ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/assemblyscript",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"development-environment-setup",children:"Development Environment Setup"}),"\n",(0,s.jsx)(n.h3,{id:"installing-the-casper-package",children:"Installing the Casper Package"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"casper-contract"})," package can be installed using the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm i casper-contract\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The Assemblyscript contract API documentation can be found at ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/casper-contract",children:"https://www.npmjs.com/package/casper-contract"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-project",children:"Creating a Project"}),"\n",(0,s.jsx)(n.p,{children:"For each smart contract, it is necessary to create a project directory and initialize it."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"npm init"})," process prompts for various details about the project. Answer as you see fit, but you may safely default everything except ",(0,s.jsx)(n.code,{children:"name"}),", which needs to be specified. In this guide, we will refer to the contract name as ",(0,s.jsx)(n.code,{children:"your-contract-name"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"mkdir project\ncd project\nnpm init\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then install AssemblyScript and this package in the project directory."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install --save-dev assemblyscript@0.9.1\nnpm install --save casper-contract\n"})}),"\n",(0,s.jsx)(n.h3,{id:"script-entries",children:"Script Entries"}),"\n",(0,s.jsxs)(n.p,{children:["Add script entries for AssemblyScript to your project's ",(0,s.jsx)(n.code,{children:"package.json"}),". Note that your contract name is used for the name of the Wasm file. Replace ",(0,s.jsx)(n.em,{children:"your-contract-name"})," with the name of your contract."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "your-contract-name",\n  ...\n  "scripts": {\n    "asbuild:optimized": "asc assembly/index.ts -b dist/your-contract-name.wasm --validate --optimize --use abort=",\n    "asbuild": "npm run asbuild:optimized",\n    ...\n  },\n  ...\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In the project root, create an ",(0,s.jsx)(n.code,{children:"index.js"})," file with the following contents. Replace ",(0,s.jsx)(n.em,{children:"your-contract-name"})," with the name of your contract."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const fs = require("fs");\n\nconst compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/dist/your-contract-name.wasm"));\n\nconst imports = {\n    env: {\n        abort(_msg, _file, line, column) {\n            console.error("abort called at index.ts:" + line + ":" + column);\n        },\n    },\n};\n\nObject.defineProperty(module, "exports", {\n    get: () => new WebAssembly.Instance(compiled, imports).exports,\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Next, create a directory called ",(0,s.jsx)(n.code,{children:"assembly"}),", and in that directory, create a file called ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," in the following way:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "extends": "../node_modules/assemblyscript/std/assembly.json",\n    "include": ["./**/*.ts"]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-smart-contract",children:"Sample Smart Contract"}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"assembly"})," directory, also create an ",(0,s.jsx)(n.code,{children:"index.ts"})," file, where the code for the contract needs to go."]}),"\n",(0,s.jsx)(n.p,{children:"You can use the following sample snippet, which demonstrates a simple smart contract that immediately returns an error and writes a message to a block when executed on a Casper network."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'//@ts-nocheck\nimport { Error, ErrorCode } from "casper-contract/error";\n\n// simplest possible feedback loop\nexport function call(): void {\n    Error.fromErrorCode(ErrorCode.None).revert(); // ErrorCode: 1\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If you prefer a more complicated first contract, you can look at example contracts on the ",(0,s.jsx)(n.a,{href:"https://github.com/casper-ecosystem",children:"Casper Ecosystem GitHub"})," repository for inspiration."]}),"\n",(0,s.jsx)(n.h3,{id:"compile-to-wasm",children:"Compile to Wasm"}),"\n",(0,s.jsxs)(n.p,{children:["To compile the contract to Wasm, use ",(0,s.jsx)(n.em,{children:"npm"})," to run the ",(0,s.jsx)(n.em,{children:"asbuild"})," script from the project root:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm run asbuild\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the build is successful, there will be a ",(0,s.jsx)(n.code,{children:"dist"})," folder in the ",(0,s.jsx)(n.code,{children:"root"})," folder and in it should be ",(0,s.jsx)(n.code,{children:"your-contract-name.wasm"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);