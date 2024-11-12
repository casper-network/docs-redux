"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[42884],{81874:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>f,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>b});const c=JSON.parse('{"id":"jsonrpc-comp/rpc-2.0/chain_get_era_info_by_switch_block.json","title":"chain_get_era_info_by_switch_block.json","description":"","source":"@site/condor/jsonrpc-comp/rpc-2.0/chain_get_era_info_by_switch_block.json.md","sourceDirName":"jsonrpc-comp/rpc-2.0","slug":"/jsonrpc-comp/rpc-2.0/chain_get_era_info_by_switch_block.json","permalink":"/condor/jsonrpc-comp/rpc-2.0/chain_get_era_info_by_switch_block.json","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=a(74848),r=a(28453);const t={},f=void 0,s={},b=[];function i(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:"copy ",children:'{\n  "name": "chain_get_era_info_by_switch_block",\n  "summary": "returns an EraInfo from the network",\n  "params": [\n    {\n      "name": "block_identifier",\n      "schema": {\n        "description": "The block identifier.",\n        "$ref": "#/components/schemas/BlockIdentifier"\n      },\n      "required": false\n    }\n  ],\n  "result": {\n    "name": "chain_get_era_info_by_switch_block_result",\n    "schema": {\n      "description": "Result for \\"chain_get_era_info\\" RPC response.",\n      "type": "object",\n      "required": [\n        "api_version"\n      ],\n      "properties": {\n        "api_version": {\n          "description": "The RPC API version.",\n          "type": "string"\n        },\n        "era_summary": {\n          "description": "The era summary.",\n          "anyOf": [\n            {\n              "$ref": "#/components/schemas/EraSummary"\n            },\n            {\n              "type": "null"\n            }\n          ]\n        }\n      },\n      "additionalProperties": false\n    }\n  },\n  "examples": [\n    {\n      "name": "chain_get_era_info_by_switch_block_example",\n      "params": [\n        {\n          "name": "block_identifier",\n          "value": {\n            "Hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42"\n          }\n        }\n      ],\n      "result": {\n        "name": "chain_get_era_info_by_switch_block_example_result",\n        "value": {\n          "api_version": "2.0.0",\n          "era_summary": {\n            "block_hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42",\n            "era_id": 42,\n            "stored_value": {\n              "EraInfo": {\n                "seigniorage_allocations": [\n                  {\n                    "Delegator": {\n                      "delegator_public_key": "01e1b46a25baa8a5c28beb3c9cfb79b572effa04076f00befa57eb70b016153f18",\n                      "validator_public_key": "012a1732addc639ea43a89e25d3ad912e40232156dcaa4b9edfc709f43d2fb0876",\n                      "amount": "1000"\n                    }\n                  },\n                  {\n                    "Validator": {\n                      "validator_public_key": "012a1732addc639ea43a89e25d3ad912e40232156dcaa4b9edfc709f43d2fb0876",\n                      "amount": "2000"\n                    }\n                  }\n                ]\n              }\n            },\n            "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808",\n            "merkle_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"\n          }\n        }\n      }\n    }\n  ]\n}\n \n'})})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>f});var c=a(96540);const o={},r=c.createContext(o);function t(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function f(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);