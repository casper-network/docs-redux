"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[86490],{74686:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"jsonrpc-comp/rpc-2.0/info_get_validator_changes.json","title":"info_get_validator_changes.json","description":"","source":"@site/condor/jsonrpc-comp/rpc-2.0/info_get_validator_changes.json.md","sourceDirName":"jsonrpc-comp/rpc-2.0","slug":"/jsonrpc-comp/rpc-2.0/info_get_validator_changes.json","permalink":"/condor/jsonrpc-comp/rpc-2.0/info_get_validator_changes.json","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=t(74848),o=t(28453);const r={},c=void 0,i={},p=[];function d(n){const e={code:"code",pre:"pre",...(0,o.R)(),...n.components};return(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:"copy ",children:'{\n  "name": "info_get_validator_changes",\n  "summary": "returns status changes of active validators",\n  "params": [],\n  "result": {\n    "name": "info_get_validator_changes_result",\n    "schema": {\n      "description": "Result for the \\"info_get_validator_changes\\" RPC.",\n      "type": "object",\n      "required": [\n        "api_version",\n        "changes"\n      ],\n      "properties": {\n        "api_version": {\n          "description": "The RPC API version.",\n          "type": "string"\n        },\n        "changes": {\n          "description": "The validators\' status changes.",\n          "type": "array",\n          "items": {\n            "$ref": "#/components/schemas/JsonValidatorChanges"\n          }\n        }\n      },\n      "additionalProperties": false\n    }\n  },\n  "examples": [\n    {\n      "name": "info_get_validator_changes_example",\n      "params": [],\n      "result": {\n        "name": "info_get_validator_changes_example_result",\n        "value": {\n          "api_version": "2.0.0",\n          "changes": [\n            {\n              "public_key": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",\n              "status_changes": [\n                {\n                  "era_id": 1,\n                  "validator_change": "Added"\n                }\n              ]\n            }\n          ]\n        }\n      }\n    }\n  ]\n}\n \n'})})}function l(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var a=t(96540);const s={},o=a.createContext(s);function r(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);