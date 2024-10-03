"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[4707],{39824:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var i=r(74848),s=r(28453);const t={title:"Ledger and Ledger Live"},l="Using Ledger and Ledger Live",a={id:"users/ledger/ledger-live",title:"Ledger and Ledger Live",description:"This guide will help you connect accounts from the Ledger device to the Ledger Live application to send and receive CSPR tokens.",source:"@site/versioned_docs/version-1.5.X/users/ledger/ledger-live.md",sourceDirName:"users/ledger",slug:"/users/ledger/ledger-live",permalink:"/1.5.X/users/ledger/ledger-live",draft:!1,unlisted:!1,tags:[],version:"1.5.X",frontMatter:{title:"Ledger and Ledger Live"},sidebar:"users",previous:{title:"Set up Ledger",permalink:"/1.5.X/workflow/ledger-setup/"},next:{title:"Ledger and CSPR.live",permalink:"/1.5.X/users/ledger/ledger-cspr-live"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Connecting to Ledger Live",id:"connect-ledge-live",level:2},{value:"Receiving Tokens",id:"receive-tokens",level:2},{value:"Sending Tokens",id:"send-tokens",level:2}];function o(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"import useBaseUrl from '@docusaurus/useBaseUrl';"}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"using-ledger-and-ledger-live",children:"Using Ledger and Ledger Live"})}),"\n",(0,i.jsxs)(n.p,{children:["This guide will help you connect accounts from the Ledger device to the ",(0,i.jsx)(n.a,{href:"https://www.ledger.com/ledger-live",children:"Ledger Live"})," application to send and receive CSPR tokens."]}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsx)(n.p,{children:"From Ledger Live version 2.73.1, Casper accounts can be added from the Ledger hardware wallet to Ledger Live."})}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Configure your Ledger and the Ledger Live application as described in the ",(0,i.jsx)(n.a,{href:"https://support.ledger.com/hc/en-us/articles/4404389503889?docs=true",children:"Getting Started with Ledger Live"})," article."]}),"\n",(0,i.jsxs)(n.li,{children:["Install the Casper app as described ",(0,i.jsx)(n.a,{href:"/1.5.X/workflow/ledger-setup/",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"connect-ledge-live",children:"Connecting to Ledger Live"}),"\n",(0,i.jsxs)(n.p,{children:["This section describes using the Ledger device with the ",(0,i.jsx)(n.a,{href:"https://www.ledger.com/ledger-live",children:"Ledger Live"})," application and your Casper accounts."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Connect the Ledger device to your computer and unlock it by entering your device PIN."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/0-connect.png")}',alt:"Connect the Ledger to your computer",width:"800"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Allow Ledger Manager to connect by clicking the two buttons on the Ledger device."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/1-unlock.png")}',alt:"Unlock the Ledger",width:"800"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Ledger Live will verify your Ledger device and display the following confirmation:"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/2-confirmation.png")}',alt:"Confirmation that the Ledger is genuine",width:"800"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"My Ledger"})," in the left-side navigation bar, and search for ",(0,i.jsx)(n.em,{children:"Casper"})," or ",(0,i.jsx)(n.em,{children:"CSPR"})," in the ",(0,i.jsx)(n.strong,{children:"App catalog"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/3-app-cspr.png")}',alt:"Confirmation that the Ledger is genuine",width:"800"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["To import a Casper account from the Ledger device into the Ledger Live application, click on the ",(0,i.jsx)(n.strong,{children:"Add account"})," link."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/4-add-account.png")}',alt:"Click the Add account link",width:"800"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Open the Casper app on your Ledger device."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/5-add-account.png")}',alt:"Open the Casper app",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsx)(n.li,{children:"Ledger Live will import the first account listed on your Ledger device. Choose a name for the account."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/6-add-account.png")}',alt:"Name the account",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsx)(n.li,{children:"After synchronizing the account, Ledger Live will confirm that the account was successfully added."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/7-add-account.png")}',alt:"Synchronizing the account",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/8-add-account.png")}',alt:"Confirmation that the account was added",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"9",children:["\n",(0,i.jsx)(n.li,{children:"Click on the account summary, to view more details."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/9-account-summary.png")}',alt:"Account summary",width:"800"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/10-account-details.png")}',alt:"Account details",width:"800"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"10",children:["\n",(0,i.jsxs)(n.li,{children:["To add another account, open the ",(0,i.jsx)(n.strong,{children:"Account"})," option in the left-side navigation bar. Then, click on the ",(0,i.jsx)(n.strong,{children:"Add account"})," button."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/11-second-account.png")}',alt:"Add a second account",width:"800"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"receive-tokens",children:"Receiving Tokens"}),"\n",(0,i.jsx)(n.p,{children:"To receive tokens, you need to provide the sender with your account's public key."}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Casper accounts only support CSPR tokens. Sending other tokens to a Casper account may result in the permanent loss of funds."})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)(n.strong,{children:"Receive"})," option in the left-side navigation bar."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/12-receive.png")}',alt:"Click on Receive",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Choose an account from the drop-down list."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/13-receive.png")}',alt:"Choose an account",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Copy the address displayed, or use the corresponding QR code."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/14-receive.png")}',alt:"Choose an account",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Verify that the address displayed in Ledger Live matches the address on your Ledger screen. If it does, click ",(0,i.jsx)(n.strong,{children:"APPROVE"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/15-receive.png")}',alt:"Verify address part 1",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/16-receive.png")}',alt:"Verify address part 2",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/17-receive.png")}',alt:"Click APPROVE",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/18-receive.png")}',alt:"Confirmation displayed",width:"400"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"send-tokens",children:"Sending Tokens"}),"\n",(0,i.jsx)(n.p,{children:"Ledger Live supports sending CSPR tokens from one Casper account to another."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Start by clicking on the ",(0,i.jsx)(n.strong,{children:"Send"})," option in the left-side navigation bar. Choose the account to debit:"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/19-send.png")}',alt:"Choose the account to debit",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Enter the recipient's address and click ",(0,i.jsx)(n.strong,{children:"Continue"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/20-send.png")}',alt:"Enter recipient",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Enter the amount and an optional transfer ID. Click ",(0,i.jsx)(n.strong,{children:"Continue"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/21-send.png")}',alt:"Enter amount and transfer ID",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Review the summary, and if everything is correct, click ",(0,i.jsx)(n.strong,{children:"Continue"}),". Otherwise, click the ",(0,i.jsx)(n.strong,{children:"Back"})," link in the top-left corner."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/22-send.png")}',alt:"Review the transfer",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["Your Ledger hardware wallet will present you with the transfer details. Verify the transaction hash, chain ID, source ",(0,i.jsx)(n.strong,{children:"account"}),", fee, target, and amount. Meanwhile, Ledger Live will display this message:"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/23-send.png")}',alt:"Review the transaction in the Ledger",width:"400"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Verify the transaction on your Ledger device"})}),"\n",(0,i.jsxs)(n.p,{children:["Press the right button on your Ledger Device to review the transaction details until you see ",(0,i.jsx)(n.strong,{children:'"APPROVE"'}),"."]}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["Review the ",(0,i.jsx)(n.strong,{children:"Txn hash"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/device/3-txn-1.jpg")}',alt:"3-txn-1",width:"400"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The Txn hash value continues on a second screen."}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/device/4-txn-2.jpg")}',alt:"4-txn-2",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsxs)(n.li,{children:["The next screen displays the transaction ",(0,i.jsx)(n.strong,{children:"Type"}),", which will be ",(0,i.jsx)(n.strong,{children:"Token transfer"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/device/5-type.jpg")}',alt:"5-type",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsxs)(n.li,{children:["Verify the ",(0,i.jsx)(n.strong,{children:"chain ID"}),", which for Mainnet should be ",(0,i.jsx)(n.strong,{children:"casper"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/device/7-chain.jpg")}',alt:"7-chain",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"9",children:["\n",(0,i.jsxs)(n.li,{children:["Verify the ",(0,i.jsx)(n.strong,{children:"Account"})," initiating the token transfer."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/device/8-account-1.jpg")}',alt:"8-account-1",width:"400"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The Account value continues on a second screen."}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/device/9-account-2.jpg")}',alt:"9-account-2",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"10",children:["\n",(0,i.jsxs)(n.li,{children:["Verify the ",(0,i.jsx)(n.strong,{children:"Fee"}),". For CSPR token transfers, that value should be constant and equal to 100,000,000 motes = 0.1 CSPR."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/device/10-fee.jpg")}',alt:"10-fee",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"11",children:["\n",(0,i.jsxs)(n.li,{children:["Verify the ",(0,i.jsx)(n.strong,{children:"Target"}),", which is the recipient's public key."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/device/11-target-1.jpg")}',alt:"11-target-1",width:"400"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The Target value continues on a second screen."}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/device/12-target-2.jpg")}',alt:"12-target-2",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"12",children:["\n",(0,i.jsxs)(n.li,{children:["Verify the ",(0,i.jsx)(n.strong,{children:"Amount"})," you want to transfer."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/device/13-amount.jpg")}',alt:"13-amount",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"13",children:["\n",(0,i.jsxs)(n.li,{children:["If you want to approve the transaction, click both buttons on the Ledger device while on the ",(0,i.jsx)(n.strong,{children:"APPROVE"})," screen."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/device/15-approve.jpg")}',alt:"15-approve",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"14",children:["\n",(0,i.jsx)(n.li,{children:"After approving the transaction with your Ledger hardware wallet, Ledger Live will display the following windows:"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/24-send.png")}',alt:"Broadcasting transaction",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/25-send.png")}',alt:"Transaction sent",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"15",children:["\n",(0,i.jsxs)(n.li,{children:["To view the transaction details, click on the ",(0,i.jsx)(n.strong,{children:"View details"})," button. The following screen will appear:"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/26-send.png")}',alt:"Transaction details",width:"400"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"16",children:["\n",(0,i.jsxs)(n.li,{children:["You can view the transaction in the CSPR.live block explorer by clicking on the ",(0,i.jsx)(n.strong,{children:"View in explorer"})," link."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{align:"center",children:["\n",(0,i.jsx)(n.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/27-send.png")}',alt:"Explorer showing transaction",width:"800"}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var i=r(96540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);