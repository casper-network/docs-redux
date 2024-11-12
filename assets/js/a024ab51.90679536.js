"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[90613],{25634:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>c,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"developers/dapps/uref-security","title":"URef Access Rights","description":"Understanding Access Rights","source":"@site/versioned_docs/version-2.0.0/developers/dapps/uref-security.md","sourceDirName":"developers/dapps","slug":"/developers/dapps/uref-security","permalink":"/developers/dapps/uref-security","draft":false,"unlisted":false,"tags":[],"version":"2.0.0","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{"title":"URef Access Rights"},"sidebar":"developers","previous":{"title":"Front-end in React","permalink":"/developers/dapps/template-frontend"},"next":{"title":"Signing Transactions","permalink":"/developers/dapps/signing-a-transaction"}}');var i=n(74848),r=n(28453);const c={title:"URef Access Rights"},a="URef Access Rights and Security Considerations",d={},h=[{value:"Understanding Access Rights",id:"understanding-access-rights",level:2},{value:"AccessRights and Purses",id:"accessrights-and-purses",level:2},{value:"Security Considerations for dApp Developers",id:"security-considerations-for-dapp-developers",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"uref-access-rights-and-security-considerations",children:"URef Access Rights and Security Considerations"})}),"\n",(0,i.jsx)(s.h2,{id:"understanding-access-rights",children:"Understanding Access Rights"}),"\n",(0,i.jsxs)(s.p,{children:["An ",(0,i.jsx)(s.a,{href:"/concepts/design/casper-design/#uref-head",children:"Unforgeable Reference"})," or ",(0,i.jsx)(s.strong,{children:"URef"})," is a key type used for storage on a Casper network. They can store any value other than ",(0,i.jsx)(s.code,{children:"Account"})," and exist as a top-level entity. As such, no individual entity may ",(0,i.jsx)(s.em,{children:"own"})," a URef, they can only hold the necessary ",(0,i.jsx)(s.code,{children:"AccessRights"})," to interact with a given URef."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/concepts/serialization/primitives#clvalue-uref",children:(0,i.jsx)(s.code,{children:"AccessRights"})})," determine how an entity on a Casper network may interact with a URef. They appear as a single byte suffix after the concatenation of te URef's address. As an example, the following is an example of a URef with no associated access rights:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"uref-974019c976b5f26412ce486158d2431967af35d91387dae8cbcd43c20fce6452-000\n"})}),"\n",(0,i.jsxs)(s.p,{children:["And this is the same URef with ",(0,i.jsx)(s.code,{children:"READ"})," and ",(0,i.jsx)(s.code,{children:"ADD"})," access rights."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"uref-974019c976b5f26412ce486158d2431967af35d91387dae8cbcd43c20fce6452-005\n"})}),"\n",(0,i.jsxs)(s.p,{children:["The following table outlines all possible ",(0,i.jsx)(s.code,{children:"AccessRights"})," settings:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Access Rights"}),(0,i.jsx)(s.th,{children:"Serialization"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"NONE"})}),(0,i.jsx)(s.td,{children:"0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"READ"})}),(0,i.jsx)(s.td,{children:"1"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"WRITE"})}),(0,i.jsx)(s.td,{children:"2"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"READ_WRITE"})}),(0,i.jsx)(s.td,{children:"3"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"ADD"})}),(0,i.jsx)(s.td,{children:"4"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"READ_ADD"})}),(0,i.jsx)(s.td,{children:"5"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"ADD_WRITE"})}),(0,i.jsx)(s.td,{children:"6"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"READ_ADD_WRITE"})}),(0,i.jsx)(s.td,{children:"7"})]})]})]}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:["Any access rights granted alongside a passed URef are ",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"irrevocable"})}),"."]})}),"\n",(0,i.jsx)(s.h2,{id:"accessrights-and-purses",children:"AccessRights and Purses"}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.code,{children:"Purse"})," is a unique type of ",(0,i.jsx)(s.code,{children:"URef"})," representing a token balance. Each ",(0,i.jsx)(s.code,{children:"Addressable Entity"})," will have an associated URef that represents its main purse. Account and contract entities may have additional purses."]}),"\n",(0,i.jsx)(s.p,{children:"For URefs that represent a purse, access rights determine the ability to read or change the associated balance of tokens. The following table outlines what each operation allows in the context of a purse:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Global State"}),(0,i.jsx)(s.th,{children:"Action Monetary Action"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Add"}),(0,i.jsx)(s.td,{children:"Deposit (i.e. transfer to)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Write"}),(0,i.jsx)(s.td,{children:"Withdraw (i.e. transfer from)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Read"}),(0,i.jsx)(s.td,{children:"Balance check"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"security-considerations-for-dapp-developers",children:"Security Considerations for dApp Developers"}),"\n",(0,i.jsxs)(s.p,{children:["When developing a ",(0,i.jsx)(s.a,{href:"/developers/dapps/dapp/",children:"dApp"})," that interacts with tokens in any way, it will be necessary to work with various URef ",(0,i.jsx)(s.code,{children:"AccessRights"})," for associated purse URefs."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/resources/tutorials/advanced/transfer-token-to-contract/",children:"This tutorial outlines our recommendations when transferring tokens to a contract."})}),"\n",(0,i.jsxs)(s.p,{children:["When passing a URef to another entity in any way, ensure that you are only passing the URef with the appropriate ",(0,i.jsx)(s.code,{children:"AccessRights"}),". The following example code shows the syntax for creating a URef with any given access rights combination. In this example, only the ",(0,i.jsx)(s.code,{children:"new_uref"})," should be passed to another entity."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"// This example will create a version of the original URef with access rights stripped entirely.\nlet new_uref = uref.with_access_rights(AccessRights::NONE);\n// This example will create a version of the original URef with only READ access rights.\nlet new_uref = uref.with_access_rights(AccessRights::READ);\n// This example will create a version of the original URef with only WRITE access rights.\nlet new_uref = uref.with_access_rights(AccessRights::WRITE);\n// This example will create a version of the original URef with both READ and WRITE access rights.\nlet new_uref = uref.with_access_rights(AccessRights::READ_WRITE);\n// This example will create a version of the original URef with only ADD access rights.\nlet new_uref = uref.with_access_rights(AccessRights::ADD);\n// This example will create a version of the original URef with both READ and ADD access rights.\nlet new_uref = uref.with_access_rights(AccessRights::READ_ADD);\n// This example will create a version of the original URef with both ADD and WRITE access rights.\nlet new_uref = uref.with_access_rights(AccessRights::ADD_WRITE);\n// This example will create a version of the original URef with full access rights.\nlet new_uref = uref.with_access_rights(AccessRights::READ_ADD_WRITE);\n"})})]})}function o(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>a});var t=n(96540);const i={},r=t.createContext(i);function c(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);