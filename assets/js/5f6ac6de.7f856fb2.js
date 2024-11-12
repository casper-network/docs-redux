"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[73635],{61929:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"jsonrpc-comp/rpc-2.0/schema/GlobalStateIdentifier.json","title":"GlobalStateIdentifier.json","description":"","source":"@site/condor/jsonrpc-comp/rpc-2.0/schema/GlobalStateIdentifier.json.md","sourceDirName":"jsonrpc-comp/rpc-2.0/schema","slug":"/jsonrpc-comp/rpc-2.0/schema/GlobalStateIdentifier.json","permalink":"/condor/jsonrpc-comp/rpc-2.0/schema/GlobalStateIdentifier.json","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=t(74848),s=t(28453);const c={},i=void 0,a={},p=[];function l(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"copy ",children:'{\n    "description": "Identifier for possible ways to query Global State",\n    "oneOf": [\n        {\n            "description": "Query using a block hash.",\n            "type": "object",\n            "required": [\n                "BlockHash"\n            ],\n            "properties": {\n                "BlockHash": {\n                    "$ref": "#/components/schemas/BlockHash"\n                }\n            },\n            "additionalProperties": false\n        },\n        {\n            "description": "Query using a block height.",\n            "type": "object",\n            "required": [\n                "BlockHeight"\n            ],\n            "properties": {\n                "BlockHeight": {\n                    "type": "integer",\n                    "format": "uint64",\n                    "minimum": 0\n                }\n            },\n            "additionalProperties": false\n        },\n        {\n            "description": "Query using the state root hash.",\n            "type": "object",\n            "required": [\n                "StateRootHash"\n            ],\n            "properties": {\n                "StateRootHash": {\n                    "$ref": "#/components/schemas/Digest"\n                }\n            },\n            "additionalProperties": false\n        }\n    ]\n} \n'})})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var o=t(96540);const r={},s=o.createContext(r);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);