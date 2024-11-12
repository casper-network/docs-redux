"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[61186],{68964:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"jsonrpc-comp/rpc-1.5/query_balance.json","title":"query_balance.json","description":"","source":"@site/condor/jsonrpc-comp/rpc-1.5/query_balance.json.md","sourceDirName":"jsonrpc-comp/rpc-1.5","slug":"/jsonrpc-comp/rpc-1.5/query_balance.json","permalink":"/condor/jsonrpc-comp/rpc-1.5/query_balance.json","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453);const c={},o=void 0,i={},p=[];function u(n){const e={code:"code",pre:"pre",...(0,s.R)(),...n.components};return(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",metastring:"copy ",children:'{\n  "name": "query_balance",\n  "summary": "query for a balance using a purse identifier and a state identifier",\n  "params": [\n    {\n      "name": "purse_identifier",\n      "schema": {\n        "description": "The identifier to obtain the purse corresponding to balance query.",\n        "$ref": "#/components/schemas/PurseIdentifier"\n      },\n      "required": true\n    },\n    {\n      "name": "state_identifier",\n      "schema": {\n        "description": "The state identifier used for the query, if none is passed the tip of the chain will be used.",\n        "anyOf": [\n          {\n            "$ref": "#/components/schemas/GlobalStateIdentifier"\n          },\n          {\n            "type": "null"\n          }\n        ]\n      },\n      "required": false\n    }\n  ],\n  "result": {\n    "name": "query_balance_result",\n    "schema": {\n      "description": "Result for \\"query_balance\\" RPC response.",\n      "type": "object",\n      "required": [\n        "api_version",\n        "balance"\n      ],\n      "properties": {\n        "api_version": {\n          "description": "The RPC API version.",\n          "type": "string"\n        },\n        "balance": {\n          "description": "The balance represented in motes.",\n          "$ref": "#/components/schemas/U512"\n        }\n      }\n    }\n  },\n  "examples": [\n    {\n      "name": "query_balance_example",\n      "params": [\n        {\n          "name": "state_identifier",\n          "value": {\n            "BlockHash": "13c2d7a68ecdd4b74bf4393c88915c836c863fc4bf11d7f2bd930a1bbccacdcb"\n          }\n        },\n        {\n          "name": "purse_identifier",\n          "value": {\n            "main_purse_under_account_hash": "account-hash-0909090909090909090909090909090909090909090909090909090909090909"\n          }\n        }\n      ],\n      "result": {\n        "name": "query_balance_example_result",\n        "value": {\n          "api_version": "1.5.6",\n          "balance": "123456"\n        }\n      }\n    }\n  ]\n}\n \n'})})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>o});var t=r(96540);const a={},s=t.createContext(a);function c(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);