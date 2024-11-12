"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[41200],{89813:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"jsonrpc-comp/rpc-1.5/state_get_dictionary_item.json","title":"state_get_dictionary_item.json","description":"","source":"@site/condor/jsonrpc-comp/rpc-1.5/state_get_dictionary_item.json.md","sourceDirName":"jsonrpc-comp/rpc-1.5","slug":"/jsonrpc-comp/rpc-1.5/state_get_dictionary_item.json","permalink":"/condor/jsonrpc-comp/rpc-1.5/state_get_dictionary_item.json","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=t(74848),c=t(28453);const o={},i=void 0,s={},d=[];function f(e){const n={code:"code",pre:"pre",...(0,c.R)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"copy ",children:'{\n  "name": "state_get_dictionary_item",\n  "summary": "returns an item from a Dictionary",\n  "params": [\n    {\n      "name": "state_root_hash",\n      "schema": {\n        "description": "Hash of the state root",\n        "$ref": "#/components/schemas/Digest"\n      },\n      "required": true\n    },\n    {\n      "name": "dictionary_identifier",\n      "schema": {\n        "description": "The Dictionary query identifier.",\n        "$ref": "#/components/schemas/DictionaryIdentifier"\n      },\n      "required": true\n    }\n  ],\n  "result": {\n    "name": "state_get_dictionary_item_result",\n    "schema": {\n      "description": "Result for \\"state_get_dictionary_item\\" RPC response.",\n      "type": "object",\n      "required": [\n        "api_version",\n        "dictionary_key",\n        "merkle_proof",\n        "stored_value"\n      ],\n      "properties": {\n        "api_version": {\n          "description": "The RPC API version.",\n          "type": "string"\n        },\n        "dictionary_key": {\n          "description": "The key under which the value is stored.",\n          "type": "string"\n        },\n        "stored_value": {\n          "description": "The stored value.",\n          "$ref": "#/components/schemas/StoredValue"\n        },\n        "merkle_proof": {\n          "description": "The Merkle proof.",\n          "type": "string"\n        }\n      },\n      "additionalProperties": false\n    }\n  },\n  "examples": [\n    {\n      "name": "state_get_dictionary_item_example",\n      "params": [\n        {\n          "name": "state_root_hash",\n          "value": "0808080808080808080808080808080808080808080808080808080808080808"\n        },\n        {\n          "name": "dictionary_identifier",\n          "value": {\n            "URef": {\n              "seed_uref": "uref-09480c3248ef76b603d386f3f4f8a5f87f597d4eaffd475433f861af187ab5db-007",\n              "dictionary_item_key": "a_unique_entry_identifier"\n            }\n          }\n        }\n      ],\n      "result": {\n        "name": "state_get_dictionary_item_example_result",\n        "value": {\n          "api_version": "1.5.6",\n          "dictionary_key": "dictionary-67518854aa916c97d4e53df8570c8217ccc259da2721b692102d76acd0ee8d1f",\n          "stored_value": {\n            "CLValue": {\n              "cl_type": "U64",\n              "bytes": "0100000000000000",\n              "parsed": 1\n            }\n          },\n          "merkle_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"\n        }\n      }\n    }\n  ]\n}\n \n'})})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(96540);const r={},c=a.createContext(r);function o(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);