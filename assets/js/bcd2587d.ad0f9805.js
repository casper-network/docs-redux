"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[11378],{15569:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var d=r(74848),s=r(28453);const t={},i="Casper JSON-RPC Error Codes",c={id:"developers/json-rpc/errors",title:"Casper JSON-RPC Error Codes",description:"The following document expands on custom error codes provided by casper-json-rpc crate.",source:"@site/versioned_docs/version-2.0.0/developers/json-rpc/errors.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/errors",permalink:"/2.0.0/developers/json-rpc/errors",draft:!1,unlisted:!1,tags:[],version:"2.0.0",frontMatter:{}},l={},o=[{value:"Error Codes",id:"error-codes",level:2},{value:"Invalid <code>Params</code>",id:"invalid-params",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"casper-json-rpc-error-codes",children:"Casper JSON-RPC Error Codes"})}),"\n",(0,d.jsxs)(n.p,{children:["The following document expands on custom error codes provided by ",(0,d.jsx)(n.code,{children:"casper-json-rpc"})," crate."]}),"\n",(0,d.jsx)(n.h2,{id:"error-codes",children:"Error Codes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Code"}),(0,d.jsx)(n.th,{children:"Error"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-1"}),(0,d.jsx)(n.td,{children:"NoSuchDeploy"}),(0,d.jsx)(n.td,{children:"The requested Deploy was not found."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-2"}),(0,d.jsx)(n.td,{children:"NoSuchBlock"}),(0,d.jsx)(n.td,{children:"The requested Block was not found."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-3"}),(0,d.jsx)(n.td,{children:"FailedToParseQueryKey"}),(0,d.jsx)(n.td,{children:"Parsing the Key from a query failed."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-4"}),(0,d.jsx)(n.td,{children:"QueryFailed"}),(0,d.jsx)(n.td,{children:"The query failed to find a result."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-5"}),(0,d.jsx)(n.td,{children:"QueryFailedToExecute"}),(0,d.jsx)(n.td,{children:"Executing the query failed."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-6"}),(0,d.jsx)(n.td,{children:"FailedToParseGetBalanceURef"}),(0,d.jsx)(n.td,{children:"Parsing the URef while getting a balance failed."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-7"}),(0,d.jsx)(n.td,{children:"FailedToGetBalance"}),(0,d.jsx)(n.td,{children:"Failed to get the requested balance."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-8"}),(0,d.jsx)(n.td,{children:"GetBalanceFailedToExecute"}),(0,d.jsx)(n.td,{children:"Executing the query to retrieve the balance failed."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-9"}),(0,d.jsx)(n.td,{children:"InvalidDeploy"}),(0,d.jsx)(n.td,{children:"The given Deploy cannot be executed as it is invalid."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-10"}),(0,d.jsx)(n.td,{children:"NoSuchAccount"}),(0,d.jsx)(n.td,{children:"The given account was not found."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-11"}),(0,d.jsx)(n.td,{children:"FailedToGetDictionaryURef"}),(0,d.jsx)(n.td,{children:"Failed to get the requested dictionary URef."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-12"}),(0,d.jsx)(n.td,{children:"FailedToGetTrie"}),(0,d.jsx)(n.td,{children:"Failed to get the requested dictionary trie."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-13"}),(0,d.jsx)(n.td,{children:"NoSuchStateRoot"}),(0,d.jsx)(n.td,{children:"The requested state root hash was not found."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-32600"}),(0,d.jsx)(n.td,{children:"InvalidRequest"}),(0,d.jsx)(n.td,{children:"The JSON sent is not a valid Request object."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-32601"}),(0,d.jsx)(n.td,{children:"MethodNotFound"}),(0,d.jsx)(n.td,{children:"The method does not exist or is not available."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-32602"}),(0,d.jsx)(n.td,{children:"InvalidParams"}),(0,d.jsx)(n.td,{children:"Invalid method parameter(s)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-32603"}),(0,d.jsx)(n.td,{children:"InternalError"}),(0,d.jsx)(n.td,{children:"Internal JSON-RPC error."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-32700"}),(0,d.jsx)(n.td,{children:"ParseError"}),(0,d.jsx)(n.td,{children:"Invalid JSON was received by the server."})]})]})]}),"\n",(0,d.jsxs)(n.h2,{id:"invalid-params",children:["Invalid ",(0,d.jsx)(n.code,{children:"Params"})]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"casper-json-rpc"})," no longer ignores invalid ",(0,d.jsx)(n.code,{children:"params"})," fields. ",(0,d.jsx)(n.code,{children:"Params"})," fields to be omitted should be an empty Array '[]', an empty Object '{}' or absent."]}),"\n",(0,d.jsxs)(n.p,{children:["Failing to adhere to this will result in an ",(0,d.jsx)(n.code,{children:"InvalidParams"})," error."]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var d=r(96540);const s={},t=d.createContext(s);function i(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);