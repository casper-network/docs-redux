"use strict";(self.webpackChunkcspr_docs_redux=self.webpackChunkcspr_docs_redux||[]).push([[58061],{93480:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"users/ledger/ledger-setup","title":"Set up Ledger","description":"A Ledger device is a hardware wallet considered one of the most secure ways to store your digital assets. Ledger uses an offline, or cold storage, method of generating private keys, making it a preferred method for many crypto users.","source":"@site/versioned_docs/version-1.5.X/users/ledger/ledger-setup.md","sourceDirName":"users/ledger","slug":"/workflow/ledger-setup/","permalink":"/1.5.X/workflow/ledger-setup/","draft":false,"unlisted":false,"tags":[],"version":"1.5.X","lastUpdatedBy":"Mel Padden","lastUpdatedAt":1727970104000,"frontMatter":{"title":"Set up Ledger","slug":"/workflow/ledger-setup/"},"sidebar":"users","previous":{"title":"Casper on Ledger","permalink":"/1.5.X/users/ledger/"},"next":{"title":"Ledger and Ledger Live","permalink":"/1.5.X/users/ledger/ledger-live"}}');var i=n(74848),t=n(28453);const l={title:"Set up Ledger",slug:"/workflow/ledger-setup/"},d="Ledger Setup with Casper",a={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing the Casper App on a Ledger Device",id:"install-the-casper-app-on-the-ledger-device",level:2},{value:"Sending and Receiving Tokens",id:"sending-and-receiving-tokens",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"ledger-setup-with-casper",children:"Ledger Setup with Casper"})}),"\n",(0,i.jsx)(r.p,{children:"import useBaseUrl from '@docusaurus/useBaseUrl';"}),"\n",(0,i.jsx)(r.p,{children:"A Ledger device is a hardware wallet considered one of the most secure ways to store your digital assets. Ledger uses an offline, or cold storage, method of generating private keys, making it a preferred method for many crypto users."}),"\n",(0,i.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Configure your Ledger and the Ledger Live application as described in the ",(0,i.jsx)(r.a,{href:"https://support.ledger.com/hc/en-us/articles/4404389503889?docs=true",children:"Getting Started with Ledger Live"})," article."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:'<span style={{color:"#ee5945"}}>CRITICAL'}),": Write down and hide your recovery codes! These are necessary to be able to restore your account if you lose or damage the hardware key."]}),"\n",(0,i.jsxs)(r.li,{children:["Make sure the Ledger Live application version is at least at ",(0,i.jsx)(r.code,{children:"2.73.1"}),", which is the version that includes Casper accounts."]}),"\n"]}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsxs)(r.p,{children:["If you need help, contact us on ",(0,i.jsx)(r.a,{href:"https://twitter.com/Casper_Network",children:"Twitter"}),", ",(0,i.jsx)(r.a,{href:"https://discord.com/invite/casperblockchain",children:"Discord"}),", or ",(0,i.jsx)(r.a,{href:"https://t.me/casperblockchain",children:"Telegram"}),"."]})}),"\n",(0,i.jsx)(r.h2,{id:"install-the-casper-app-on-the-ledger-device",children:"Installing the Casper App on a Ledger Device"}),"\n",(0,i.jsxs)(r.p,{children:["Install the Casper app on the Ledger device by following the steps below. You can find similar instructions on the official ",(0,i.jsx)(r.a,{href:"https://support.ledger.com/hc/en-us/articles/4416379141009-Casper-CSPR-?docs=true",children:"Ledger support site"}),"."]}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"In Ledger Live, open My Ledger at the bottom of the left-hand menu."}),"\n"]}),"\n",(0,i.jsxs)(r.p,{align:"center",children:["\n",(0,i.jsx)(r.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/open-my-ledger.png")}',alt:"Open My Ledger",width:"800"}),"\n"]}),"\n",(0,i.jsxs)(r.ol,{start:"2",children:["\n",(0,i.jsx)(r.li,{children:"Connect the Ledger device to your computer and unlock it by entering your device PIN."}),"\n"]}),"\n",(0,i.jsxs)(r.p,{align:"center",children:["\n",(0,i.jsx)(r.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/casper-unlock.png")}',alt:"Unlock your Ledger device",width:"350"}),"\n"]}),"\n",(0,i.jsxs)(r.ol,{start:"3",children:["\n",(0,i.jsx)(r.li,{children:"If asked, allow Ledger manager on your device."}),"\n"]}),"\n",(0,i.jsxs)(r.p,{align:"center",children:["\n",(0,i.jsx)(r.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/allow-ledger.png")}',alt:"Allow Ledger",width:"800"}),"\n"]}),"\n",(0,i.jsxs)(r.ol,{start:"4",children:["\n",(0,i.jsxs)(r.li,{children:["Find ",(0,i.jsx)(r.strong,{children:"Casper"})," in the app catalog."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{align:"center",children:["\n",(0,i.jsx)(r.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/find-casper.png")}',alt:"Find the Casper app",width:"800"}),"\n"]}),"\n",(0,i.jsx)(r.admonition,{type:"important",children:(0,i.jsx)(r.p,{children:'Having trouble finding the Casper app?\nPlease search "Casper," not "CSPR" when searching for the app in the "My Ledger" tab in Ledger Live.'})}),"\n",(0,i.jsxs)(r.ol,{start:"5",children:["\n",(0,i.jsxs)(r.li,{children:["Click the ",(0,i.jsx)(r.strong,{children:"Install"})," button of the app."]}),"\n"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"An installation window appears."}),"\n",(0,i.jsxs)(r.li,{children:["Your device will display ",(0,i.jsx)(r.strong,{children:'"Processing..."'})]}),"\n",(0,i.jsx)(r.li,{children:"The app installation is confirmed."}),"\n"]}),"\n",(0,i.jsxs)(r.p,{align:"center",children:["\n",(0,i.jsx)(r.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/casper-installed.png")}',alt:"Casper installation confirmed",width:"800"}),"\n"]}),"\n",(0,i.jsxs)(r.ol,{start:"6",children:["\n",(0,i.jsx)(r.li,{children:"Open the Casper App on your Ledger device by clicking both buttons on the device, and keep it open while doing the next steps."}),"\n"]}),"\n",(0,i.jsxs)(r.p,{align:"center",children:["\n",(0,i.jsx)(r.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/select-casper.png")}',alt:"Select Casper on Ledger",width:"350"}),"\n"]}),"\n",(0,i.jsxs)(r.p,{align:"center",children:["\n",(0,i.jsx)(r.img,{src:'{useBaseUrl("/image/tutorials/ledger/ledger-live/casper-ready.png")}',alt:"Casper app is ready",width:"350"}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"sending-and-receiving-tokens",children:"Sending and Receiving Tokens"}),"\n",(0,i.jsx)(r.p,{children:"To send and receive CSPR tokens using the accounts on your Ledger device, you have two options:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/1.5.X/users/ledger/ledger-live",children:"Manage Casper Accounts using Ledger and Ledger Live"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/1.5.X/users/ledger/ledger-cspr-live",children:"Manage Casper Accounts using Ledger and CSPR.live"})}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["To stake CSPR tokens with a validator on the Casper Mainnet, you need to use the CSPR.live block explorer, as described in ",(0,i.jsx)(r.a,{href:"/1.5.X/users/staking-ledger",children:"Delegating with Ledger Devices"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"Buying, selling, or swapping CSPR are not currently supported in Ledger Live. For these operations, you need to visit an exchange."})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>d});var s=n(96540);const i={},t=s.createContext(i);function l(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);