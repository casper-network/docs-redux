"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[91641],{95276:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"jsonrpc-comp/rpc-2.0/chain_get_state_root_hash.json","title":"chain_get_state_root_hash.json","description":"","source":"@site/condor/jsonrpc-comp/rpc-2.0/chain_get_state_root_hash.json.md","sourceDirName":"jsonrpc-comp/rpc-2.0","slug":"/jsonrpc-comp/rpc-2.0/chain_get_state_root_hash.json","permalink":"/condor/jsonrpc-comp/rpc-2.0/chain_get_state_root_hash.json","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=t(74848),r=t(28453);const a={},c=void 0,i={},p=[];function _(n){const e={code:"code",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:"copy ",children:'{\n  "name": "chain_get_state_root_hash",\n  "summary": "returns a state root hash at a given Block",\n  "params": [\n    {\n      "name": "block_identifier",\n      "schema": {\n        "description": "The block hash.",\n        "$ref": "#/components/schemas/BlockIdentifier"\n      },\n      "required": false\n    }\n  ],\n  "result": {\n    "name": "chain_get_state_root_hash_result",\n    "schema": {\n      "description": "Result for \\"chain_get_state_root_hash\\" RPC response.",\n      "type": "object",\n      "required": [\n        "api_version"\n      ],\n      "properties": {\n        "api_version": {\n          "description": "The RPC API version.",\n          "type": "string"\n        },\n        "state_root_hash": {\n          "description": "Hex-encoded hash of the state root.",\n          "anyOf": [\n            {\n              "$ref": "#/components/schemas/Digest"\n            },\n            {\n              "type": "null"\n            }\n          ]\n        }\n      },\n      "additionalProperties": false\n    }\n  },\n  "examples": [\n    {\n      "name": "chain_get_state_root_hash_example",\n      "params": [\n        {\n          "name": "block_identifier",\n          "value": {\n            "Height": 10\n          }\n        }\n      ],\n      "result": {\n        "name": "chain_get_state_root_hash_example_result",\n        "value": {\n          "api_version": "2.0.0",\n          "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808"\n        }\n      }\n    }\n  ]\n}\n \n'})})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(_,{...n})}):_(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>c});var o=t(96540);const s={},r=o.createContext(s);function a(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);