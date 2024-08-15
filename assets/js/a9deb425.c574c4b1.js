"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[5157],{5943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=n(4848),r=n(8453),o=n(1470),s=n(9365);const i={},l="dApp Technology Stack",c={id:"developers/dapps/technology-stack",title:"dApp Technology Stack",description:"There are 3 layers to building a decentralized application that interacts with a Casper network: Front-end, backend, and on-chain logic. This document outlines lists the requirements for each.",source:"@site/docs/developers/dapps/technology-stack.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/technology-stack",permalink:"/developers/dapps/technology-stack",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Python SDK",permalink:"/developers/dapps/sdk/python-sdk"},next:{title:"Front-end in React",permalink:"/developers/dapps/template-frontend"}},d={},h=[{value:"Front-End",id:"front-end",level:2},{value:"Signing Transactions",id:"signing-transactions",level:3},{value:"Querying Global State",id:"querying-global-state",level:3},{value:"Backend",id:"backend",level:2},{value:"Blockchain",id:"blockchain",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"dapp-technology-stack",children:"dApp Technology Stack"})}),"\n",(0,a.jsx)(t.p,{children:"There are 3 layers to building a decentralized application that interacts with a Casper network: Front-end, backend, and on-chain logic. This document outlines lists the requirements for each."}),"\n",(0,a.jsx)(t.h2,{id:"front-end",children:"Front-End"}),"\n",(0,a.jsxs)(t.p,{children:["The front-end, or ",(0,a.jsx)(t.em,{children:"client-side"})," of a dApp consists of the interface that the user uses to interact with smart contracts on a Casper Network. This interface usually comes in the form of a website/webpage, mobile device application or computer program, but could also include APIs with endpoints that may be called or queried."]}),"\n",(0,a.jsxs)(t.p,{children:["You will need to choose a Casper-compatible SDK for the language you are using to call and query smart contracts on a Casper network. Casper's SDKs have methods available for constructing Deploys and gathering global state data. While these interactions can be prepared on the front-end, they must be sent to the backend of your application before being sent off to a network, so as to fulfill ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:"CORS"})," requirements."]}),"\n",(0,a.jsx)(t.h3,{id:"signing-transactions",children:"Signing Transactions"}),"\n",(0,a.jsx)(t.p,{children:"The signing of transactions will, in many cases, need to be performed by the user on the front-end, for which you have a couple options:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The Casper Wallet"}),"\n",(0,a.jsxs)(t.p,{children:["Use the ",(0,a.jsx)(t.a,{href:"https://www.casperwallet.io/develop",children:"Casper Wallet"})," to sign deploys for a Casper network. Deploy objects are first converted to JSON, then sent to the Wallet to be signed, then must be sent to the backend and forwarded to a node."]}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:["The Casper Signer has been deprecated and replaced with the ",(0,a.jsx)(t.a,{href:"https://www.casperwallet.io",children:"Casper Wallet"}),". We are in the process of updating this page. Meanwhile, visit the guide on ",(0,a.jsx)(t.a,{href:"https://www.casperwallet.io/develop",children:"Building with the Casper Wallet"}),"."]})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Third-party signers"}),"\n",(0,a.jsx)(t.p,{children:"Third-party signers may be used as well. A JSON representation of the unsigned transaction should be forwarded to the third-party signer and accept a callback containing the signed deploy object."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"querying-global-state",children:"Querying Global State"}),"\n",(0,a.jsx)(t.p,{children:"To execute a query of global state, such as retrieving smart contract data or getting current chain information, the preparation may be done on the front-end, but the query to a node must ultimately originate from your application's backend. This preparatory stage comes only in the form of defining a contract hash and the path which you'd like to query data. Alternately, for chain information, you must define the endpoint you'd like to query."}),"\n",(0,a.jsx)(t.h2,{id:"backend",children:"Backend"}),"\n",(0,a.jsxs)(t.p,{children:["The backend of a dApp consists of the server-side code that connects the blockchain to the front-end interface and deals with data-parsing and application-layer communication. A backend server is necessary for building dApps on Casper as Casper's nodes expect ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:"CORS headers"})," from a specified origin on the HTTP requests they receive. Backend servers are helpful for other reasons too, such as queueing requests and analyzing the traffic moving between your dApp and the blockchain."]}),"\n",(0,a.jsx)(t.p,{children:"As the backend server of a dApp is the software communicating with Casper nodes (the blockchain), it needs to receive information such as which node and endpoint to connect to."}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(s.A,{value:"js",label:"JavaScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'const client = new CasperClient("http://NODE_ADDRESS:7777/rpc");\n'})})}),(0,a.jsx)(s.A,{value:"py",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'client = NodeClient(NodeConnection(host = "NODE_ADDRESS", port_rpc = 7777))\n'})})})]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["You can find online peers for Mainnet at ",(0,a.jsx)(t.a,{href:"https://cspr.live",children:"cspr.live"})," or testnet at ",(0,a.jsx)(t.a,{href:"https://testnet.cspr.live",children:"testnet.cspr.live"})]})}),"\n",(0,a.jsx)(t.p,{children:"There are two main types of blockchain interactions that will originate from the front-end: deploys and queries. In the case of a dApp, both of these will pass through the back-end."}),"\n",(0,a.jsx)(t.p,{children:"Blockchain interaction for state queries is handled solely on the backend. On the front-end, a user simply chooses the path at which they want to query data. This path is sent to the backend where the server will perform the state query and send the result back to the front-end."}),"\n",(0,a.jsx)(t.p,{children:"In the case of a user-signed transaction originating from the dApp's front-end, the backend will need to accept this transaction and forward it to a Casper network. This is often accomplished by opening a POST endpoint that accepts JSON formatted transactions and forwards them along."}),"\n",(0,a.jsx)(t.h2,{id:"blockchain",children:"Blockchain"}),"\n",(0,a.jsxs)(t.p,{children:["The last stop for a deploy or query is the blockchain itself. Like the majority of smart contract blockchains, Casper networks maintain a forever-growing, immutable ledger that can be read and written to. When building a dApp for a Casper network, user interactions in the form of queries and deploys originate from the front-end, are forwarded to the backend, and are then sent to a Casper node for interaction with the blockchain. You can communicate with Casper nodes using JSON RPC calls, and have a variety of open ",(0,a.jsx)(t.a,{href:"/developers/json-rpc/json-rpc-transactional",children:"transactional"}),", ",(0,a.jsx)(t.a,{href:"/developers/json-rpc/json-rpc-informational",children:"informational"}),", and ",(0,a.jsx)(t.a,{href:"/developers/json-rpc/json-rpc-pos",children:"Proof-of-Stake"})," endpoints. By utilizing an SDK on the backend, you won't need to construct these JSON RPC calls yourself, they'll be done for you within the available methods."]}),"\n",(0,a.jsxs)(t.p,{children:["More than likely, you will want your dApp to perform personalized functions, store custom data, and perhaps even store or transact upon tokens with monetary value. All of these behaviors can be implemented by writing custom smart contracts for your application. Smart contracts on a Casper network can perform any function that a classical computer can. Casper's smart contracts are executed as ",(0,a.jsx)(t.a,{href:"https://webassembly.org/",children:"WebAssembly"})," binaries, and can be written in any language that compiles to WebAssembly. Currently, most developers choose to write their smart contracts in ",(0,a.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"})," for its reliability and ease-of-use. Additionally, Casper's smart contract documentation is written for Rust."]}),"\n",(0,a.jsxs)(t.p,{children:["To learn how to write smart contracts for your dApp, read the ",(0,a.jsx)(t.a,{href:"/writing-contracts",children:"smart contract documentation"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var o=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(6540),r=n(4164),o=n(3104),s=n(6347),i=n(205),l=n(7485),c=n(1682),d=n(679);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=u(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,h]=f({queryString:n,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,o]),tabValues:o}}var b=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(4848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(c(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...o,className:(0,r.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,y.jsx)(v,{...t,...e}),(0,y.jsx)(w,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,y.jsx)(j,{...e,children:h(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(6540);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);