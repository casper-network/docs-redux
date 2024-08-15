"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[2527],{2814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>i,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var s=t(4848),r=t(8453);const a={},o="Go SDK",d={id:"developers/dapps/sdk/go-sdk",title:"Go SDK",description:"Usage Examples",source:"@site/docs/developers/dapps/sdk/go-sdk.md",sourceDirName:"developers/dapps/sdk",slug:"/developers/dapps/sdk/go-sdk",permalink:"/developers/dapps/sdk/go-sdk",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:".NET SDK",permalink:"/developers/dapps/sdk/csharp-sdk"},next:{title:"Python SDK",permalink:"/developers/dapps/sdk/python-sdk"}},l={},c=[{value:"Usage Examples",id:"usage-examples",level:2},{value:"Get a Deploy from the Network",id:"get-a-deploy-from-the-network",level:3},{value:"Handle the Deploy Processed Event",id:"handle-the-deploy-processed-event",level:3},{value:"Sending a Transfer",id:"sending-a-transfer",level:3}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"go-sdk",children:"Go SDK"})}),"\n",(0,s.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,s.jsx)(n.p,{children:"This section includes some examples of how to use Go SDK:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"#get-a-deploy-from-the-network",children:["Get a ",(0,s.jsx)(n.em,{children:"Deploy"})," from the Network"]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#handle-the-deploy-processed-event",children:"Handle the Deploy Processed Event"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#sending-a-transfer",children:"Sending a Transfer"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"get-a-deploy-from-the-network",children:"Get a Deploy from the Network"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "net/http"\n\n    "github.com/make-software/casper-go-sdk/casper"\n)\n\nfunc main() {\n    handler := casper.NewRPCHandler("https://<Node Address and Port>/rpc", http.DefaultClient)\n    client := casper.NewRPCClient(handler)\n    deployHash := "62972eddc6fdc03b7ec53e52f7da7e24f01add9a74d68e3e21d924051c43f126"\n    deploy, err := client.GetDeploy(context.Background(), deployHash)\n    if err != nil {\n        return\n    }\n    fmt.Println(deploy.Deploy.Hash)\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"handle-the-deploy-processed-event",children:"Handle the Deploy Processed Event"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "log"\n\n    "github.com/make-software/casper-go-sdk/sse"\n)\n\nfunc main() {\n    client := sse.NewClient("https://<Node Address and Port>/events/main")\n    defer client.Stop()\n    client.RegisterHandler(\n        sse.DeployProcessedEventType,\n        func(ctx context.Context, rawEvent sse.RawEvent) error {\n            deploy, err := rawEvent.ParseAsDeployProcessedEvent()\n            if err != nil {\n                return err\n            }\n            log.Printf("Deploy hash: %s", deploy.DeployProcessed.DeployHash)\n            return nil\n        })\n    lastEventID := 1234\n    client.Start(context.TODO(), lastEventID)\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sending-a-transfer",children:"Sending a Transfer"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "encoding/hex"\n    "log"\n    "math/big"\n    "net/http"\n\n    "github.com/make-software/casper-go-sdk/casper"\n    "github.com/make-software/casper-go-sdk/types/clvalue"\n)\n\nfunc main() {\n    accountPublicKey, err := casper.NewPublicKey("012488699f9a31e36ecf002675cd7186b48e6a735d10ec1b308587ca719937752c")\n    if err != nil { return }\n    amount := big.NewInt(100000000)\n    session := casper.ExecutableDeployItem{\n        ModuleBytes: &casper.ModuleBytes{\n            ModuleBytes: hex.EncodeToString([]byte("<Contract WASM>")),\n            Args: (&casper.Args{}).\n                AddArgument("target", clvalue.NewCLByteArray(accountPublicKey.AccountHash().Bytes())).\n                AddArgument("amount", *clvalue.NewCLUInt512(amount)),\n        },\n    }\n\n    payment := casper.StandardPayment(amount)\n\n    deployHeader := casper.DefaultHeader()\n    deployHeader.Account = accountPublicKey\n    deployHeader.ChainName = "casper-test"\n\n    newDeploy, err := casper.MakeDeploy(deployHeader, payment, session)\n\n    handler := casper.NewRPCHandler("https://<Node Address>:7777/rpc", http.DefaultClient)\n    client := casper.NewRPCClient(handler)\n    result, err := client.PutDeploy(context.Background(), *newDeploy)\n\n    log.Println(result.DeployHash)\n}\n'})})]})}function i(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(6540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);