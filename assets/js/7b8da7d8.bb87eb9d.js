"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[13e3],{6188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=t(74848),s=t(28453);const o={title:"AWS Casper Nodes",slug:"/resources/tutorials/beginner/aws-node"},r="Launching a Casper Node with AWS Marketplace",a={id:"resources/beginner/aws-node",title:"AWS Casper Nodes",description:"The following tutorial outlines the process for launching a Casper Node through the Amazon AWS Marketplace.",source:"@site/docs/resources/beginner/aws-node.md",sourceDirName:"resources/beginner",slug:"/resources/tutorials/beginner/aws-node",permalink:"/docs-redux/resources/tutorials/beginner/aws-node",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AWS Casper Nodes",slug:"/resources/tutorials/beginner/aws-node"},sidebar:"tutorials",previous:{title:"Fungible Tokens",permalink:"/docs-redux/resources/tutorials/beginner/cep18"},next:{title:"Advanced Tutorials",permalink:"/docs-redux/resources/tutorials/advanced/"}},c={},h=[{value:"Step 1 - Subscribing",id:"step-1---subscribing",level:2},{value:"Step 2 - Initial Configuration",id:"step-2---initial-configuration",level:2},{value:"Step 3 - Launch Configuration",id:"step-3---launch-configuration",level:2},{value:"EC2 Key Pair Settings",id:"ec2-key-pair-settings",level:3},{value:"Launching Your Node",id:"launching-your-node",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"launching-a-casper-node-with-aws-marketplace",children:"Launching a Casper Node with AWS Marketplace"})}),"\n",(0,i.jsxs)(n.p,{children:["The following tutorial outlines the process for launching a ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/marketplace/pp/prodview-d7xpciuetjq5u",children:"Casper Node through the Amazon AWS Marketplace"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"step-1---subscribing",children:"Step 1 - Subscribing"}),"\n",(0,i.jsx)(n.p,{children:"You will first need to subscribe to the Casper node software through the AWS Marketplace. There is no associated cost with this subscription."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Step 01",src:t(96475).A+"",width:"900",height:"214"})}),"\n",(0,i.jsx)(n.p,{children:"If you are not currently signed in to an AWS account, you will need to either sign in or create an account to subscribe."}),"\n",(0,i.jsxs)(n.p,{children:["You need to accept the terms and conditions listed to continue with the subscription. You may also choose a different ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"Amazon EC2 (Amazon Elastic Compute Cloud) instance type"})," if you prefer."]}),"\n",(0,i.jsxs)(n.p,{children:["After accepting the terms, it may take a few moments for AWS to process your request. In this event, you will see the ",(0,i.jsx)(n.code,{children:"Continue to Configuration"})," button grayed out, as shown below:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Step 04",src:t(95763).A+"",width:"259",height:"60"})}),"\n",(0,i.jsx)(n.p,{children:"Once the system processes your request, the button will light orange, and you may continue to the configuration options."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Step 05",src:t(72969).A+"",width:"266",height:"68"})}),"\n",(0,i.jsx)(n.h2,{id:"step-2---initial-configuration",children:"Step 2 - Initial Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Configuration"})," page allows you to choose your fulfillment option, software version, and the region in which your node will be hosted. Unless you intend to run your Casper node with a specific legacy version of the software, we suggest using the most current release."]}),"\n",(0,i.jsx)(n.p,{children:"The window on the right will show an estimation of the infrastructure costs from AWS for operating the Casper node, given the EC2 instance type you previously chose."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Step 06",src:t(73142).A+"",width:"1138",height:"713"})}),"\n",(0,i.jsx)(n.h2,{id:"step-3---launch-configuration",children:"Step 3 - Launch Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Launch"})," page will show your previously selected configuration details and a ",(0,i.jsx)(n.code,{children:"Usage instructions"})," button that leads to the most recent instructions based on your chosen software version."]}),"\n",(0,i.jsx)(n.p,{children:'Below this, you will see a drop-down menu with the title "Choose Action":'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Step 08",src:t(69471).A+"",width:"834",height:"189"})}),"\n",(0,i.jsx)(n.p,{children:"This drop-down menu includes the following options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Launch through EC2 - This option launches your configuration through the ",(0,i.jsx)(n.a,{href:"https://console.aws.amazon.com/ec2/",children:"Amazon EC2 Console"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Launch from Website - This option will launch directly from the current page, using further configuration options outlined below."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy to Service Catalog - Copy your configuration of the software to the ",(0,i.jsx)(n.code,{children:"Service Catalog"})," console, where you can manage your company's cloud resources."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Additional drop-down menus include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"EC2 Instance Type - This option determines the machine's specifications that will run your instance of the Casper node software."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"VPC Settings - This option selects the Virtual Private Cloud you will use for your Casper node. This should be auto-populated, but you can create a new VPC through the EC2 console by clicking the option below the drop-down box."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Subnet Settings - This option selects the subnet for your node under the listed VPC above. Again, it should be auto-populated, but you can create a new subnet."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Security Group Settings - This option determines the flow of traffic connecting to your Casper node. By clicking on "Create New Based on Seller Settings", you can create a new security group using the suggested default Casper settings.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ec2-key-pair-settings",children:"EC2 Key Pair Settings"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Step 11",src:t(14820).A+"",width:"830",height:"245"})}),"\n",(0,i.jsx)(n.p,{children:'You will need an EC2 key pair to launch your Casper node. If you do not already have an EC2 key pair, you can create one directly from this page by clicking "Create a key pair in EC2". This will bring you to the EC2 console, where you can click "Create key pair". This will automatically download your keys in the selected file type, and you can choose the new key pair on the previous page.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Step 12",src:t(54765).A+"",width:"339",height:"43"})}),"\n",(0,i.jsx)(n.h3,{id:"launching-your-node",children:"Launching Your Node"}),"\n",(0,i.jsxs)(n.p,{children:["If you are satisfied with your configuration choices and all options are correctly filled out, you can hit the orange ",(0,i.jsx)(n.code,{children:"Launch"})," button to launch your AWS-hosted Casper node."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Step 13",src:t(54906).A+"",width:"137",height:"58"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},96475:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/CasperAWS01-26219ce99c140282c6ad9137863a954a.png"},95763:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,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"},72969:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAABECAIAAAD2jOw2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAoZSURBVHhe7Zx3cFTXFca3F+2uCuqsGkKWEDIWEiOaKDYgAsKywLaCnTY2EOwkkzaMJ4ntTDITx+SP2CmT8XhsQ4zHYwwulNASQEh0iSK6wepCfbXqW7Q1n/ZdrRl2r7RgjBc4v3mzere8984t37nnvlmt2GyxiAiC8IeE/SUIwgeSB0FwIXkQBBeSB0FwIXkQBBeSB0FwIXkQBBeSB0FwIXkQBBeSB0FwIXkQBBeSB0FwIXkQBJexv7Gr3q1mZwRxX2BZFui31Gn1IAguJA+C4ELyIAguJA+C4ELyIAguJA+C4ELyIAguJA+C4ELyIAguJA+C4ELyIAguJA+C4ELyIAguJI/7B7dbdNoQ/peq9J2NcUNOGtk7QPB2Yn2/5qUTD+dvm4dj1aHcL/u0rOBrUN2rnfrJgh318SwdHGAqf1KrL943Ey1dvCv/vS9SbK7bGZf/Nccs3zezw6Js6Nc0DITM2jb/7SsTWNk3z8c1CdM/f7RxIISl7wukr7z6KjvlIK/+Mzu7i3xap1+5Py9WPbQms/E7SZ0ysTtZa4lRD7HigDE7pKvLciNVtmTd8Ff8JRK3WuaaGds9TmUXKtxZ3r+WhIm+MMHA0gHQZVWsLs/dUpNQMrFlZVrL1Mg+aCNrXL9M4mY1AgadppU7/jb74px4Y4jMKRG7Z8T0xIfccqcFCCx/9kBeTmRflNqGpFgkwgBNj+lRSF1ChaDFkT7GnPcSjKtHXb/mtTMZf8r74v3HzhRPaFuoN/x8Sh1mjFCK2YMKOHxdLKKL7iHFxe7QQbtMyLE5JV1WpXAOIhT2FyfXp4WZWNrDgF2GS3AhS48K9HatV9s8qHa4MB9upt2sYmcjjGItgMEbryYbLMqDRUd/OaUWLUV7n8toUnlmmLc5+MT5TfiaPWBjrQaQxwuTG3Ki+oSkyy1uNqmxpPg1gwcai6fgBI01WBVnu8I7zErcSihFJ3v7GWCAfpzZAH0KSVRDZVgo3OFGfIcpaAnG/xb8vG78+qr07UtO6jVWljUCYus1ZblOzwj1Dsk3LTizQD/sql+pmFw3oHG6xDX9GnS6yy36dHFlv1226D9zPNcN8878qseT2xF+vD7j8rx4Izz9R9WJSTrz6c4I3BBRwZaCyqVJHcgvbYl+e945zDDMjxcPT8UjMGUxqHDPv6nIilLZLA5pis684dGz3gUNrhR3ruyMEJLPpDXjDld6dH6t9YLM7x3MW5rYDv2zrBHwiNer0hFoJWvNiDOXp7a+MesSJp9fs/Niem58uhc0GZajQ9adeHh73fgJoSaxWKSUup7LaEQ+r6XI39MYh8r/upT6qym1yCnZPx1rES6s69OsSG19c/bFrbX6teU57DEi0YGio/h8uSILo4b+MVoVCIz3N8fEa6y1fZpfZ9f8duqXWA/9DtPUEQ3fNe7t/xZsMami1TaNzMnSI8Dl/OFU5qpJjedLSi+UHHxtxpXfV2a2mpjD7rfJ/p5/4ezTh04+WT4xzHzOGAYNtP5o7/SYHgyebe0ODLNQ00uLWbUuu+ZcSenppw5hQh9ti2QF/qgf0Pzj4sStBZWVT5YdXX5YKXVi+FmZSIQ5gcyXsqtx4FkfLDhjdUpHsVbA5JAaLApfLwD2NMUeaI45uaIczTn33VJMsg+rE4UiX7O9T0eyd9UuGCA0XKiPC6/16qpKSnGr3YUnwhRjB5YVhog5ccaWH+57edo16OTUU4fQsSdWlO9edvxUZ0TTQAg680JJaV50Dz7xOHQ1u9KzOGy4mtxnk11YeRB9dWT5YYSOB1uihVLfYRLyg5NglIdxSBmhtMl9QtiaPk3DYMiihE54MnjBRfpOhApXe3VCKTYY4crhgVdJnbFqPxPOF8Ra0aph9w+/KJyMwrmuMEysaJUNC4XdJU7SWq50s0f7ZXRrBcx2GWIPwewbQU1oY358V5LWjGR8iLU4pe1IWyTkhOQtmY1bne8Ky481jveIEJ0TiDwSNZZZcd0wDE4KXl8ucWN5wVqnkTtxB1aJQ59NXtYaXZjcATuRTA8bRCccaokW4sPbGKZvkWCUR4rOhGDd5BOYWp2SIYfEazEmB46mwbsU+yFUQzzzzIG84r0zcVR0RDwSybZDfgnE2giVDY6/3udtD2J9KEHq0ZWATuFAHIWIi6UDRrgVS9wWiIJ+eiQ7c8uiZXtmoeEdlq/2cn5xuMVYImC8kIS6QqTOVrPK4vxaZnwrBKM8JkcMYO97qTuUpUcIlTtCFQ7vmjKE+eeUwIuz9DcMthnTYnr3Fh4/tuKwcKxMa2Zl/gjEWlSYMq6/vDUKvplleVBIXPCy2Fp4d+TYdifrzGqfgHNM1FLn+BCrwarE01nWLbKjIR4x4fmnS9HknUtOxo71/hBeAMuCsOMC0KfZKYUNsETIuYcIRnlkR/Y9kdL2syPZiL8ReyA8aDOrsCFJCzOlhZq21iZgpF1u8Z6mOHimSeED7DJ/SMTD3qvFpMY88/uuyRcEEgiBuq3DL4uuD6qxjgn5k8IHO8zK/16PFV7d4G4INoQiL3Kpu8OqxFxHnYmhY1sLGWCXjP3x7yqysDigpbhnbb8Gc2tJYsfuprhLPcM+As7is3r93Hij735sTLD+FCa3l7ZEYcON5mBLfbx9nFDEa+lNIJIUTtCKZpMKeyohifXB5JAZPJcLfSKgkzsKEg2bqxNgNpKXe0L3NsU+pjd4V8J7iGCUB9zPX2dden5S4/Ol0yL/vUz7XlHG5oJj7ZFauQMb3MOtkboNRap3n3jzfBqqCSE1jwiF7dm06y+U5yjfLd5Sm8ByRyU/zojxTv1ocdjGorcup+o1zN+nhpr+OefCH09Pit+0FKX6D5ZiMyAUeVkxofVYW2T4xsfXlOVg7xSItTNie3YuPYlp+tDmArQ0ZlPhL44+gmm3UG9Yk9mQv22+4p3ijI8XYRP8g4eus2tukblxxrfmnv+sTr+6LNfhksD7CPm8lt7EgvFdPUOKKVsXpm0u2N8cg2VNyE/SmYtS2pbsnq3dUHSig0lOAKbmRPXBbBg/d/u8n2TVozms7J4iqH8GDj6p1zbsoUPldrheIRMjis2fSyQOV9ix6xUy7yxYGfrtcuwdQ3y8tV+TRiFwa7Hm4IBrgPdlWZ6NNeJ4mOFrye2Bfcja8pzCpI7ve8Q2SktvRKgG94TljmUFgNAiBJC3dNVdIPAXu/Qrifc/iEvNdplea4GedzXEra9K/3Dh6YzwQVb84EHyIL4CmxkEbGWtUXaXZE6ccf2My4joWNkDCcmDILjQb+wSxB2A5EEQXEgeBMGF5EEQXEgeBMGF5EEQXEgeBMGF5EEQXEgeBMGF5EEQXEgeBMFl7O9cnV2Xxc4I4r4g943L7GwsaPUgCC5jrx4E8cBCqwdBcCF5EAQXkgdBcCF5EAQXkgdBcCF5EAQXkgdBcCF5EAQXkgdBcCF5EAQXkgdBcBCJ/g+JpAip6TfCDgAAAABJRU5ErkJggg=="},73142:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/CasperAWS04-f0a5f08295ac98ac10216dda2c6ac467.png"},69471:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/CasperAWS05-ef5cc7abd1f5093685ce82cb5794a2aa.png"},14820:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/CasperAWS06-fa837b0e61647fe37340261a3ae8fde3.png"},54765:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,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"},54906:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAAA6CAIAAAALGO1FAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMmSURBVHhe7ZxRSFNRGMev1+6cF2pr2NRYoRU+pEhgWSTGQERTxpAg7cGgp7AeevTRx/BpTyFEMLUgsdIksk3FXpIEg8okJSqFzBRUrgruzMtm5+4ehYZL9qD8h9+Py/adb2eXc/ntfDuHXZa2ubkpEZDI4pnAg9zgQm5wITe4kBtcyA0u5AaXBPubF2kiIPaBaztvMWne4EJucCE3uJAbXMgNLuQGF3KDC7nBhdzgQm5wITe4kBtcyA0uB9eNtpT9dk5looUIjhtHW1dl87cM0dp7piYvVY1la6KFCI4bWVtVpzfSRYtIjZqmK5rmGF1StYhI7I6uzCw4ZnTREkRljSkai79kFlanFmxJnHy/QHfz6b3H8qSiPlDS0l/hbK/0zRkDnp8ot/Tlz5s9JLWrz3t9QuWRkX9e4huqLO5y3x4oK/B7WqYVsxObLfR2eJxPK+qf1VreZZlJKZTt660p7Sm7F7jibHf7l0UaBHQ350pfb9wKBBsGg42BvpNq80+HeCERy9bci4Pjjbz/QLdLvv/bZiRDrubgKdv5YeNUja82Li/GunLW6672j9/gnUdaD9nezBmCcYCvaelR/sCYwqL60Uwz9X/W8g6bQTjniBlI2qyrLfLrTuGaaG9fdOZanjUWyCzXHguQQHdj1CK/p7TX7e2uvvlVJJOFhXlli+J/DuMAH2+WL3gmrzxglJ2GQOdZkU0Wu7ouSUoobmkAD5gbviQzllLmERvb9vIpos6sitAY9aJjMmyEbNXxcbdNijV3oSn9uP+LTTMKpMT01JhBWKN8OeZ2dtZsHUWj0mLdhZWe4erixzUF3UV/1BWzW07+dJPsqurwWh566j9Yc46Z6cRkzrbWfmef3c5H/C3e4qETW2s8aFLh3kE+maIRe0bsM78N36zwjaqi25PZrfIvHibrdrGuhiGF7x3kAuLEcOSo3ZqcGI41A09MYlKj8h5MyA0u5AYXcoMLucGF3OBCbnAhN7iQG1zIDS7kBhdygwu5wWXn3whG7p4WEbH3lD34IaJ/oXmDC/3vIC40b3AhN7iQG1zIDS7kBhdygwu5QUWS/gKbZ/EkaoCEzgAAAABJRU5ErkJggg=="},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);