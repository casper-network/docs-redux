"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[35890],{8077:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(74848),r=t(28453);const i={title:"Monitoring Events with the Casper Sidecar"},a="Monitoring and Consuming Events",c={id:"developers/dapps/monitor-and-consume-events",title:"Monitoring Events with the Casper Sidecar",description:"The Casper platform uses event streaming to signal state changes in smart contracts and nodes. Using the Casper Sidecar service and client-side SDKs, dApps actively listening for emitted events can consume them and perform actions based on event data.",source:"@site/docs/developers/dapps/monitor-and-consume-events.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/monitor-and-consume-events",permalink:"/docs-redux/developers/dapps/monitor-and-consume-events",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Monitoring Events with the Casper Sidecar"},sidebar:"developers",previous:{title:"Local Network Testing",permalink:"/docs-redux/developers/dapps/nctl-test"},next:{title:"Interacting with the Blockchain",permalink:"/docs-redux/developers/cli/"}},o={},d=[{value:"The Casper Sidecar",id:"the-casper-sidecar",level:2},{value:"The Event Stream",id:"the-event-stream",level:2},{value:"Listening to the Event Stream",id:"listening-to-the-event-stream",level:3},{value:"Detecting Contract-Level Events",id:"contract-level-events",level:3},{value:"Reacting to Events",id:"reacting-to-events",level:3},{value:"Unsubscribing from Events",id:"unsubscribing-from-events",level:3},{value:"Stopping the Event Stream",id:"stopping-the-event-stream",level:3},{value:"Replaying the Sidecar Event Stream",id:"replaying-the-sidecar-event-stream",level:3},{value:"The JSON-RPC API",id:"the-json-rpc-api",level:2},{value:"The REST API",id:"the-rest-api",level:2},{value:"Troubleshooting Tips",id:"troubleshooting-tips",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",tabitem:"tabitem",tabs:"tabs",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';"}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"monitoring-and-consuming-events",children:"Monitoring and Consuming Events"})}),"\n",(0,s.jsxs)(n.p,{children:["The Casper platform uses ",(0,s.jsx)(n.a,{href:"/docs-redux/operators/setup/node-events",children:"event streaming"})," to signal state changes in smart contracts and nodes. Using the ",(0,s.jsx)(n.a,{href:"#the-casper-sidecar",children:"Casper Sidecar"})," service and client-side SDKs, dApps actively listening for emitted events can consume them and perform actions based on event data."]}),"\n",(0,s.jsxs)(n.p,{children:["Smart contracts can also emit contract-level events, as explained ",(0,s.jsx)(n.a,{href:"/docs-redux/developers/writing-onchain-code/emitting-contract-events",children:"here"}),". DApps can consume these events by listening to the event stream, detecting ",(0,s.jsx)(n.a,{href:"#contract-level-events",children:"TransactionProcessed"})," events, and parsing the ",(0,s.jsx)(n.code,{children:"messages"})," array storing String-representations of the emitted events."]}),"\n",(0,s.jsx)(n.h2,{id:"the-casper-sidecar",children:"The Casper Sidecar"}),"\n",(0,s.jsx)(n.p,{children:"The Casper Sidecar is an application running alongside the node process. It allows subscribers to monitor a node's event stream, query stored events, and query the node's JSON-RPC API, thus receiving faster responses and reducing the load placed on the node. The Sidecar supports the following functionalities:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#the-sse-server",children:"server-sent events (SSE) endpoint"})," with an ",(0,s.jsx)(n.code,{children:"/events"})," endpoint streaming events from all the connected nodes. The Sidecar also stores these events."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#the-rest-api-server",children:"REST API server"})," that allows clients to query stored events."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#the-rpc-api-server",children:"JSON-RPC API"})," to interact with a Casper node."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/LEGACY_SSE_EMULATION.md",children:"Legacy emulation"})," for clients using older versions of the SSE API."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Sidecar components and architecture",src:t(17096).A+"",width:"1416",height:"978"})}),"\n",(0,s.jsxs)(n.p,{children:["Visit ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/",children:"GitHub"})," for the latest source code and information on:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#system-components--architecture",children:"System architecture"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#configuring-the-sidecar",children:"Configuring the Sidecar"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#running-and-testing-the-sidecar",children:"Running and testing"})," the Sidecar"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#swagger-documentation",children:"Swagger documentation"})," for its REST API"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#openapi-specification",children:"OpenAPI schema"})," for the JSON-RPC API"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#troubleshooting-tips",children:"Troubleshooting tips"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"the-event-stream",children:"The Event Stream"}),"\n",(0,s.jsx)(n.p,{children:"Casper nodes offer an event stream API that returns server-sent events (SSEs) with JSON-encoded data. The Sidecar reads the event stream of all connected nodes, acting as a passthrough and replicating the SSE interface of the connected nodes."}),"\n",(0,s.jsx)(n.p,{children:"The Sidecar can:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Republish the current events from the node to clients listening to Sidecar's SSE API."}),"\n",(0,s.jsxs)(n.li,{children:["Publish a configurable number of previous events to clients connecting to the Sidecar's SSE API with ",(0,s.jsx)(n.code,{children:"?start_from="})," query (similar to the node's SSE API)."]}),"\n",(0,s.jsx)(n.li,{children:"Store the events in external storage so clients can query them via the REST API."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The Sidecar also provides an endpoint for Sidecar-generated events that can be useful, although the node did not emit them."}),"\n",(0,s.jsx)(n.p,{children:"To summarize, events are divided into two categories and emitted on their respective endpoints:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Node-generated events"})," - All events coming from connected node(s) are emitted on the ",(0,s.jsx)(n.code,{children:"events"})," endpoint. The default URL to consume these events on a Mainnet or Testnet node is usually ",(0,s.jsx)(n.code,{children:"http://HOST:19999/events/"}),". This URL depends on how the Sidecar was configured on the node."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sidecar-generated events"})," - The Sidecar also emits events on the ",(0,s.jsx)(n.code,{children:"events/sidecar"})," endpoint, designated for events originating solely from the Sidecar service. The URL to consume these events using Sidecar on a Mainnet or Testnet node is usually ",(0,s.jsx)(n.code,{children:"http://HOST:19999/events/sidecar/"}),". This URL depends on how the Sidecar was configured on the node."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/USAGE.md",children:"Casper Sidecar Usage Guide"})," describes each event type in detail."]}),"\n",(0,s.jsx)(n.h3,{id:"listening-to-the-event-stream",children:"Listening to the Event Stream"}),"\n",(0,s.jsxs)(n.p,{children:["Set up an event listener in your dApp using the following code to consume the event stream. The ",(0,s.jsx)(n.code,{children:"NODE_ADDRESS"})," is the address of the node where the Sidecar was installed. The ",(0,s.jsx)(n.code,{children:"PORT"})," is the address where the Sidecar streams events. It is ",(0,s.jsx)(n.code,{children:"19999"})," by default, but you must find out how the Sidecar was configured."]}),"\n",(0,s.jsxs)(n.tabs,{children:["\n",(0,s.jsxs)(n.tabitem,{value:"js",label:"JavaScript",children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const { EventStream, EventName } = require("casper-js-sdk")\n\nconst es = new EventStream("http://NODE_ADDRESS:PORT/events/")\nes.start()\nes.subscribe(EventName.EVENT_NAME, eventHandler)\n\nconst eventHandler = (event) => {\n    console.log(event)\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.tabitem,{value:"python",label:"Python",children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from pycspr import NodeClient, NodeConnection, NodeEventType\n\ndef eventHandler(event):\n    print(event)\n\nclient = NodeClient(NodeConnection(host = "NODE_ADDRESS", port_rpc = "PORT"))\nclient.get_events(eventHandler, NodeEventType.EVENT_NAME)\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.tabitem,{value:"curl",label:"cURL",children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -s http://NODE_ADDRESS:PORT/events/\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can find node addresses of active online peers to replace ",(0,s.jsx)(n.code,{children:"NODE_ADDRESS"}),", by navigating to ",(0,s.jsx)(n.a,{href:"https://cspr.live/tools/peers",children:"cspr.live"})," for Mainnet and ",(0,s.jsx)(n.a,{href:"https://testnet.cspr.live/tools/peers",children:"testnet.cspr.live"})," for Testnet."]}),"\n",(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.code,{children:"EVENT_NAME"})," with one of the event types listed ",(0,s.jsx)(n.a,{href:"#event-types",children:"below"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"contract-level-events",children:"Detecting Contract-Level Events"}),"\n",(0,s.jsxs)(n.p,{children:["The Sidecar streams messages emitted by a contract in a human-readable format. These messages are visible as part of the ",(0,s.jsx)(n.code,{children:"TransactionProcessed"})," event after the corresponding block is processed and added to the blockchain. For more details, see ",(0,s.jsx)(n.a,{href:"/docs-redux/developers/writing-onchain-code/emitting-contract-events#verifying-a-topic",children:"Verifying a Topic"})," and ",(0,s.jsx)(n.a,{href:"/docs-redux/developers/writing-onchain-code/emitting-contract-events#verifying-a-message",children:"Verifying a Message"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"reacting-to-events",children:"Reacting to Events"}),"\n",(0,s.jsxs)(n.p,{children:["An application may parse each event needed for its use case and respond accordingly. Each event type contains additional data that might help decide whether to take action. For example, ",(0,s.jsx)(n.code,{children:"TransactionAccepted"})," events contain the account's public key that submitted the transaction, the contract address, and more. This information can help determine how to proceed."]}),"\n",(0,s.jsxs)(n.tabs,{children:["\n",(0,s.jsxs)(n.tabitem,{value:"js",label:"JavaScript",children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const eventHandler = (event) => {\n  if (event.body.TransactionAccepted.header.account == "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c") {\n    // Perform an action\n  }\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.tabitem,{value:"python",label:"Python",children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def eventHandler(event):\n  if event["TransactionAccepted"]["header"]["account"] == "012481699f9231e36ecf002675cd7186b48e6a735d10ec1b30f587ca716937752c":\n    # Perform an action\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"unsubscribing-from-events",children:"Unsubscribing from Events"}),"\n",(0,s.jsxs)(n.p,{children:["In many cases, an application may need to unsubscribe after a particular time or may want to unsubscribe from some events but not others. The Casper SDKs provide this ability with the ",(0,s.jsx)(n.code,{children:"unsubscribe"})," function:"]}),"\n",(0,s.jsxs)(n.tabs,{children:["\n",(0,s.jsxs)(n.tabitem,{value:"js",label:"JavaScript",children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"es.unsubscribe(EventName.EVENT_NAME)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"EVENT_NAME"})," - One of the different ",(0,s.jsx)(n.a,{href:"#event-types",children:"event types"})," emitted by a Casper node."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"stopping-the-event-stream",children:"Stopping the Event Stream"}),"\n",(0,s.jsxs)(n.p,{children:["A dApp may cease listening to all events using the ",(0,s.jsx)(n.code,{children:"stop"})," function:"]}),"\n",(0,s.jsxs)(n.tabs,{children:["\n",(0,s.jsxs)(n.tabitem,{value:"js",label:"JavaScript",children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"es.stop()\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"replaying-the-sidecar-event-stream",children:"Replaying the Sidecar Event Stream"}),"\n",(0,s.jsxs)(n.p,{children:["This command will replay the event stream from an old event onward. Replace the ",(0,s.jsx)(n.code,{children:"NODE_ADDRESS"}),", ",(0,s.jsx)(n.code,{children:"PORT"}),", and ",(0,s.jsx)(n.code,{children:"ID"})," fields with the values of your scenario."]}),"\n",(0,s.jsxs)(n.tabs,{children:["\n",(0,s.jsxs)(n.tabitem,{value:"curl",label:"cURL",children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -s http://NODE_ADDRESS:PORT/events?start_from=ID\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -sN http://65.21.235.219:19999/events?start_from=29267508\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that certain shells like ",(0,s.jsx)(n.code,{children:"zsh"})," may require an escape character before the question mark:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -sN http://65.21.235.219:19999/events?start_from=29267508\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The server will replay all the cached events if the ID is 0 or if you specify an event ID already purged from the cache."}),"\n",(0,s.jsx)(n.h2,{id:"the-json-rpc-api",children:"The JSON-RPC API"}),"\n",(0,s.jsxs)(n.p,{children:["The Sidecar also offers a JSON-RPC API server for clients to interact with a Casper network. It is a JSON bridge between end users and a Casper node's binary port, forwarding requests to the Casper node's binary port. For more details on how the JSON-RPC API works, see the ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/json_rpc/README.md",children:"JSON-RPC README"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"the-rest-api",children:"The REST API"}),"\n",(0,s.jsxs)(n.p,{children:["The Sidecar offers a REST API to query stored events. You can discover the specific endpoints of the REST API using ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/tree/feat-2.0?tab=readme-ov-file#openapi-specification",children:"OpenAPI"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/tree/feat-2.0?tab=readme-ov-file#swagger-documentation",children:"Swagger"}),". The ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/USAGE.md",children:"usage instructions"})," in the repository provide more details."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Sidecar components and architecture diagram 1",src:t(68701).A+"",width:"2236",height:"1332"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Sidecar components and architecture diagram 2",src:t(27462).A+"",width:"2174",height:"1512"})}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting-tips",children:"Troubleshooting Tips"}),"\n",(0,s.jsxs)(n.p,{children:["For troubleshooting tips, visit ",(0,s.jsx)(n.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#troubleshooting-tips",children:"Github"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},17096:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/sidecar-diagram-92779ddba3ccba102b935c8144e6e6a8.png"},68701:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/sidecar-swagger-1-a36838588d0ad1e623d89de2acb93e87.png"},27462:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/sidecar-swagger-2-7d8a480884403e1f40c31b6e901976a7.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);