"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[4110],{88261:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>t});var c=s(74848),r=s(28453);const d={},l="CLType {#cltype}",i={id:"developers/json-rpc/types_cl",title:"CLType",description:"cltype}",source:"@site/docs/developers/json-rpc/types_cl.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/types_cl",permalink:"/docs-redux/next/developers/json-rpc/types_cl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Types",permalink:"/docs-redux/next/developers/json-rpc/types_chain"},next:{title:"Overview of Casper dApps",permalink:"/docs-redux/next/developers/dapps/"}},o={},t=[{value:"CLValue",id:"clvalue",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"cltype",children:"CLType"})}),"\n",(0,c.jsxs)(n.p,{children:["Casper types, i.e. types which can be stored and manipulated by smart contracts. Provides a description of the underlying data type of a ",(0,c.jsx)(n.a,{href:"#clvalue",children:(0,c.jsx)(n.code,{children:"CLValue"})}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Bool"}),"\n",(0,c.jsx)(n.code,{children:"I32"}),"\n",(0,c.jsx)(n.code,{children:"I64"}),"\n",(0,c.jsx)(n.code,{children:"U8"}),"\n",(0,c.jsx)(n.code,{children:"U32"}),"\n",(0,c.jsx)(n.code,{children:"U64"}),"\n",(0,c.jsx)(n.code,{children:"U128"}),"\n",(0,c.jsx)(n.code,{children:"U256"}),"\n",(0,c.jsx)(n.code,{children:"U512"}),"\n",(0,c.jsx)(n.code,{children:"Unit"}),"\n",(0,c.jsx)(n.code,{children:"String"}),"\n",(0,c.jsx)(n.code,{children:"Key"}),"\n",(0,c.jsx)(n.code,{children:"URef"}),"\n",(0,c.jsx)(n.code,{children:"PublicKey"}),"\n",(0,c.jsx)(n.code,{children:"Any"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Option"})," Option of a ",(0,c.jsx)(n.code,{children:"CLType"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"List"})," Variable-length list of a single ",(0,c.jsx)(n.code,{children:"CLType"})," (comparable to a ",(0,c.jsx)(n.code,{children:"Vec"}),")."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ByteArray"})," Fixed-length list of a single ",(0,c.jsx)(n.code,{children:"CLType"})," (comparable to a Rust array)."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Result"})," ",(0,c.jsx)(n.code,{children:"Result"})," with ",(0,c.jsx)(n.code,{children:"Ok"})," and ",(0,c.jsx)(n.code,{children:"Err"})," variants of ",(0,c.jsx)(n.code,{children:"CLType"}),"'s."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Map"})," Map with keys of a single ",(0,c.jsx)(n.code,{children:"CLType"})," and values of a single ",(0,c.jsx)(n.code,{children:"CLType"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Tuple1"})," 1-ary tuple of a ",(0,c.jsx)(n.code,{children:"CLType"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Tuple2"})," 2-ary tuple of ",(0,c.jsx)(n.code,{children:"CLType"}),"s."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Tuple3"})," 3-ary tuple of ",(0,c.jsx)(n.code,{children:"CLType"}),"s."]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"clvalue",children:"CLValue"}),"\n",(0,c.jsxs)(n.p,{children:["A Casper value, i.e. a value which can be stored and manipulated by smart contracts. It holds the underlying data as a type-erased, serialized ",(0,c.jsx)(n.code,{children:"Vec<u8>"})," and also holds the CLType of the underlying data as a separate member. The ",(0,c.jsx)(n.code,{children:"parsed"})," field, representing the original value, is a convenience only available when a CLValue is encoded to JSON, and can always be set to null if preferred."]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"bytes"})," A Casper serialized representation of the underlying value. For more information, reference the ",(0,c.jsx)(n.a,{href:"/docs-redux/next/concepts/serialization-standard",children:"Serialization Standard"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"cl_type"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var c=s(96540);const r={},d=c.createContext(r);function l(e){const n=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);