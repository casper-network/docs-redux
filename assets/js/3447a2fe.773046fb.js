"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[79319],{81072:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"jsonrpc-comp/rpc-2.0/schema/BlockSynchronizerStatus.json","title":"BlockSynchronizerStatus.json","description":"","source":"@site/condor/jsonrpc-comp/rpc-2.0/schema/BlockSynchronizerStatus.json.md","sourceDirName":"jsonrpc-comp/rpc-2.0/schema","slug":"/jsonrpc-comp/rpc-2.0/schema/BlockSynchronizerStatus.json","permalink":"/condor/jsonrpc-comp/rpc-2.0/schema/BlockSynchronizerStatus.json","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=o(74848),s=o(28453);const r={},a=void 0,i={},p=[];function u(n){const e={code:"code",pre:"pre",...(0,s.R)(),...n.components};return(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",metastring:"copy ",children:'{\n    "description": "The status of the block synchronizer.",\n    "type": "object",\n    "properties": {\n        "historical": {\n            "description": "The status of syncing a historical block, if any.",\n            "anyOf": [\n                {\n                    "$ref": "#/components/schemas/BlockSyncStatus"\n                },\n                {\n                    "type": "null"\n                }\n            ]\n        },\n        "forward": {\n            "description": "The status of syncing a forward block, if any.",\n            "anyOf": [\n                {\n                    "$ref": "#/components/schemas/BlockSyncStatus"\n                },\n                {\n                    "type": "null"\n                }\n            ]\n        }\n    },\n    "additionalProperties": false\n} \n'})})}function l(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(u,{...n})}):u(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>r,x:()=>a});var t=o(96540);const c={},s=t.createContext(c);function r(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);