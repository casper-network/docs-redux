"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[6232],{52850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=n(74848),a=n(28453);const c={title:"On-chain Installation",slug:"/resources/tokens/cep18/quickstart-guide"},r="Installing and Interacting with a CEP-18 Contract",o={id:"resources/tokens/cep18/quickstart-guide",title:"On-chain Installation",description:"This quick start guide introduces you to the Casper client commands and Wasm files necessary to deploy a CEP-18 Casper Fungible Token contract to a Casper network.",source:"@site/docs/resources/tokens/cep18/quickstart-guide.md",sourceDirName:"resources/tokens/cep18",slug:"/resources/tokens/cep18/quickstart-guide",permalink:"/docs-redux/next/resources/tokens/cep18/quickstart-guide",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"On-chain Installation",slug:"/resources/tokens/cep18/quickstart-guide"},sidebar:"resources",previous:{title:"Fungible Token Workflow",permalink:"/docs-redux/next/resources/tokens/cep18/full-tutorial"},next:{title:"CEP-18 Contract Details",permalink:"/docs-redux/next/resources/tokens/cep18/query"}},i={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install the Main Fungible Token Contract",id:"install-the-main-fungible-token-contract",level:2},{value:"Install the <code>cep18_test_contract</code> Contract Package",id:"install-the-cep18_test_contract-contract-package",level:2},{value:"Next Steps",id:"next-steps",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"installing-and-interacting-with-a-cep-18-contract",children:"Installing and Interacting with a CEP-18 Contract"})}),"\n",(0,s.jsxs)(t.p,{children:["This quick start guide introduces you to the Casper client commands and Wasm files necessary to deploy a CEP-18 Casper Fungible Token contract to a ",(0,s.jsx)(t.a,{href:"https://cspr.live",children:"Casper network"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-20#specification",children:"Ethereum Request for Comment (ERC-20)"})," standard defines a set of rules that dictate the total supply of tokens, how the tokens are transferred, how transactions are approved, and how token data is accessed. These fungible tokens are blockchain-based assets that have value and can be transferred or recorded."]}),"\n",(0,s.jsx)(t.p,{children:"To execute transactions on a Casper network (involving fungible tokens), you will need some CSPR tokens to pay for the transactions."}),"\n",(0,s.jsxs)(t.p,{children:["For greater detail into the creation and mechanics of the Casper fungible token contract, see the full ",(0,s.jsx)(t.a,{href:"/docs-redux/next/resources/tokens/cep18/full-tutorial",children:"Casper Fungible Token Tutorial"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"Before using this guide, ensure you meet the following requirements:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Set up your machine as per the ",(0,s.jsx)(t.a,{href:"/docs-redux/next/developers/prerequisites",children:"prerequisites"})]}),"\n",(0,s.jsx)(t.li,{children:"Use the [Casper command-line client]"}),"\n",(0,s.jsxs)(t.li,{children:["Get a valid ",(0,s.jsx)(t.a,{href:"https://cspr.live/tools/peers",children:(0,s.jsx)(t.code,{children:"node-address"})})]}),"\n",(0,s.jsxs)(t.li,{children:["Know how to deploy a ",(0,s.jsx)(t.a,{href:"/docs-redux/next/developers/cli/sending-transactions",children:"smart contract"})," to a Casper network"]}),"\n",(0,s.jsx)(t.li,{children:"Hold enough CSPR tokens to pay for transactions"}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(t.p,{children:["Clone the ",(0,s.jsx)(t.a,{href:"https://github.com/casper-ecosystem/cep18",children:"fungible token (CEP-18) contract repository"})," and run the ",(0,s.jsx)(t.code,{children:"make build-contract"})," command. This will create the ",(0,s.jsx)(t.code,{children:"cep18.wasm"})," and the ",(0,s.jsx)(t.code,{children:"cep18_test_contract.wasm"}),". The token Wasm is the main contract. We will use the ",(0,s.jsx)(t.code,{children:"cep18_test_contract"})," Wasm to query the balances and allowances of the fungible token balances throughout this workflow."]}),"\n",(0,s.jsx)(t.h2,{id:"install-the-main-fungible-token-contract",children:"Install the Main Fungible Token Contract"}),"\n",(0,s.jsx)(t.p,{children:"The following command will create a deploy containing the CEP-18 contract instance using your supplied arguments as follows:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Name"})," - The name of your CEP-18 token"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Symbol"})," - The symbol used to refer to your CEP-18 token"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total_supply"})," - The total supply of the CEP-18 token to be minted"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Decimals"})," - The number of spaces after the decimal. (As an example, a total supply of 1000000 with a ",(0,s.jsx)(t.code,{children:"decimals"})," setting of 3 would be 1,000.000 tokens)"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"casper-client put-deploy -n http://<NODE IP>:<PORT> \\\n--chain-name <CHAIN NAME> \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-path ~/casper/demo/cep18.wasm \\\n--session-arg \"name:string='CEP18'\" \\\n--session-arg \"symbol:string='gris'\" \\\n--session-arg \"total_supply:u256='100'\" \\\n--session-arg \"decimals:u8='1'\" \\\n--payment-amount 150000000000\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"install-the-cep18_test_contract-contract-package",children:["Install the ",(0,s.jsx)(t.code,{children:"cep18_test_contract"})," Contract Package"]}),"\n",(0,s.jsx)(t.p,{children:"The following command will install the CEP-18 helper contract that allows you to check balances and access approval features."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"casper-client put-deploy -n http://<NODE IP>:<PORT> \\\n--chain-name <CHAIN NAME> \\\n--secret-key ~/casper/demo/user_a/secret_key.pem \\\n--session-path ~/casper/demo/cep18_test_contract.wasm \\\n--payment-amount 50000000000\n"})}),"\n",(0,s.jsx)(t.p,{children:"At this point, the account that installed both the main contract and the helper contract will look like this."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'{\n\t"src": {\n\t"Account": {\n\t"_accountHash": "account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd",\n\t"namedKeys": [\n\t\t{\n\t\t"name": "cep18_test_contract",\n\t\t"key": "hash-999326ca8408dfd37da023eb6fd82f174151be64f83f9fb837632a0d69fd4c7e"\n\t\t},\n\t\t{\n\t\t"name": "cep18_token_contract",\n\t\t"key": "hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180"\n\t\t},\n\t],\n\t"mainPurse": "uref-6c062525debdee18d5cad083ca530fcb65ef8741574fba4c97673f4ed00093f7-007",\n\t"associatedKeys": [\n\t\t{\n\t\t"accountHash": "account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd",\n\t\t"weight": 1\n\t\t}\n\t],\n\t"actionThresholds": {\n\t\t"deployment": 1,\n\t\t"keyManagement": 1\n\t\t}\n\t\t}\n\t}\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"Note:"})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"cep18_token_contract"})," is the main contract, and is a stored contract, record its hash"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"cep18_test_call"})," is a contract package which contains the utility contract required to read the balances and allowances of users within the fungible token state."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(t.p,{children:"In the following sections, the sample guide explains the querying of the contract package, token transfers, and approvals."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs-redux/next/resources/tokens/cep18/query",children:"Exploring the CEP18 Contracts"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs-redux/next/resources/tokens/cep18/transfer",children:"CEP-18 Token Transfers and Allowances"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs-redux/next/resources/tokens/cep18/tests",children:"Testing Framework for CEP-18"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const a={},c=s.createContext(a);function r(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);