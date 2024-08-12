"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[1089],{5029:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(4848),s=t(8453);const r={title:"Delegate with Ledger",slug:"/users/staking-ledger"},l="Delegating with Ledger Devices",a={id:"users/ledger/staking-ledger",title:"Delegate with Ledger",description:"Ledger Initialization",source:"@site/docs/users/ledger/staking-ledger.md",sourceDirName:"users/ledger",slug:"/users/staking-ledger",permalink:"/docs-redux/users/staking-ledger",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Delegate with Ledger",slug:"/users/staking-ledger"},sidebar:"users",previous:{title:"Ledger and CSPR.live",permalink:"/docs-redux/users/ledger/ledger-cspr-live"}},o={},d=[{value:"Ledger Initialization",id:"1-initialization",level:2},{value:"<strong>Important Notes</strong>",id:"important-notes",level:3},{value:"Staking with a Validator",id:"2-staking",level:2},{value:"Connect and Login with Ledger",id:"connect-and-login-with-ledger",level:3},{value:"Receive Tokens from an External Source",id:"receive-tokens-from-an-external-source",level:3},{value:"Staking Tokens",id:"staking-tokens",level:3},{value:"Unstaking with a Validator",id:"3-unstaking",level:2},{value:"Initiate the Undelegation",id:"initiate-the-undelegation",level:3},{value:"Sign the Undelegation",id:"sign-the-undelegation",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"import useBaseUrl from '@docusaurus/useBaseUrl';"}),"\n",(0,i.jsx)(n.h1,{id:"delegating-with-ledger-devices",children:"Delegating with Ledger Devices"}),"\n",(0,i.jsx)(n.h2,{id:"1-initialization",children:"Ledger Initialization"}),"\n",(0,i.jsx)(n.p,{children:"Before getting started, you need to complete two prerequisite steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Set up your Ledger device using the ",(0,i.jsx)(n.a,{href:"https://support.ledger.com/hc/en-us/articles/4416379141009-Casper-CSPR-?docs=true",children:"official documentation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Connect the Ledger to your ",(0,i.jsx)(n.a,{href:"https://cspr.live/",children:"cspr.live"})," account by following the ",(0,i.jsx)(n.a,{href:"/docs-redux/workflow/ledger-setup/",children:"Ledger Setup"})," guide."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"important-notes",children:(0,i.jsx)(n.strong,{children:"Important Notes"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:'<span style={{color:"#ee5945"}}>CRITICAL'}),": Write down and hide your recovery codes! These are necessary to be able to restore your account if you lose or damage the hardware key."]}),"\n",(0,i.jsxs)(n.li,{children:["When logging in to ",(0,i.jsx)(n.a,{href:"https://cspr.live/",children:"cspr.live"}),", the UI will offer numerous public keys. Choose any of them. They are all derived from the Master Seed that is secured in the Ledger key (",(0,i.jsx)(n.a,{href:"https://www.ledger.com/academy/crypto/where-are-my-coins",children:"more info here"}),"). Make sure you write down whichever public key(s) you end up using so that you have no confusion when trying to log in."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"2-staking",children:"Staking with a Validator"}),"\n",(0,i.jsx)(n.h3,{id:"connect-and-login-with-ledger",children:"Connect and Login with Ledger"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Connect your Ledger to your computer via USB and enter your PIN to unlock it."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Open the Casper app on the Ledger (you will see the message "Casper Ready").'}),"\n",(0,i.jsx)(n.p,{children:'<img class="align-center" src={useBaseUrl("/image/tutorials/ledger/staking/ledger1.png")} alt="Casper Ready" width="400"/>'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Sign in to ",(0,i.jsx)(n.a,{href:"https://cspr.live/",children:"cspr.live"}),' with your Ledger by clicking "Connect" under the Ledger option, as shown in the screenshot below.']}),"\n",(0,i.jsx)(n.p,{children:'<img class="align-center" src={useBaseUrl("/image/tutorials/ledger/staking/ledger2.png")} alt="Casper Ready" width="800"/>'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Select the public key connected to your Ledger account."}),"\n",(0,i.jsx)(n.p,{children:'<img class="align-center" src={useBaseUrl("/image/tutorials/ledger/staking/ledger3.png")} alt="Casper Ready" width="800"/>'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"View your account by clicking on your public key at the top right corner."}),"\n",(0,i.jsx)(n.p,{children:'<img class="align-center" src={useBaseUrl("/image/tutorials/ledger/staking/ledger4.png")} alt="Casper Ready" width="800"/>'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"receive-tokens-from-an-external-source",children:"Receive Tokens from an External Source"}),"\n",(0,i.jsxs)(n.p,{children:["This portion will vary slightly depending on where your funds are currently stored. However, the process will require that you send tokens to your public key as described in the ",(0,i.jsx)(n.a,{href:"/docs-redux/workflow/ledger-setup/#sending-and-receiving-tokens",children:"documentation"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"staking-tokens",children:"Staking Tokens"}),"\n",(0,i.jsx)(n.p,{children:"Once you have tokens in your account, staking (delegating) with a validator is easy."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['Go back to your account, but this time open the "delegate" tab located at: ',(0,i.jsx)(n.a,{href:"https://cspr.live/delegate-stake",children:"https://cspr.live/delegate-stake"})," (alternatively, click on ",(0,i.jsx)(n.code,{children:"Wallet \u21d2 Delegate Stake"})," to go there)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"From the validator list, choose any validator you like. You will notice that validators charge different fees and have different amounts staked to them. This may inform your decision to choose the right validator for you."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Specify the amount you wish to stake or click "Delegate max" as shown below. Notes:'}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Remember that the total delegation amount to one validator cannot be less than 500 CSPR."}),"\n",(0,i.jsx)(n.li,{children:"Both delegation and undelegation have an associated fee, so you need to leave some funds in your account to cover transaction fees. Otherwise, you may need to deposit additional funds to undelegate later."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Click "Next" to continue, as shown below.'}),"\n",(0,i.jsx)(n.p,{children:'<img class="align-center" src={useBaseUrl("/image/tutorials/ledger/staking/ledger5.png")} alt="Casper Ready" width="800"/>'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'The page will update with a confirmation page asking you to verify all the details. If everything looks correct, click the "Confirm and delegate stake" button.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'You will be presented with a final page asking you to sign the transaction with Ledger. Click the "Sign with Ledger" button at the bottom.'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),': If you get an error showing a "Transaction rejected" message, make sure your Ledger device is active and connected to your computer. You may also need to re-enter your PIN if it locked itself due to inactivity.']}),"\n",(0,i.jsx)(n.p,{children:'<img class="align-center" src={useBaseUrl("/image/tutorials/ledger/staking/ledger6.png")} alt="Casper Ready" width="800"/>'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['On the Ledger, you will see a message saying, "Please review". Click through the fields and verify everything matches what is being shown to you on ',(0,i.jsx)(n.a,{href:"https://cspr.live",children:"cspr.live"}),"."]}),"\n",(0,i.jsx)(n.p,{children:'<img class="align-center" src={useBaseUrl("/image/tutorials/ledger/staking/ledger7.png")} alt="Casper Ready" width="400"/>'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Once you click "Approve", you will see the Delegation Completed screen verifying that your staking successfully was submitted to the blockchain.'}),"\n",(0,i.jsx)(n.p,{children:'<img class="align-center" src={useBaseUrl("/image/tutorials/ledger/staking/ledger8.png")} alt="Casper Ready" width="400"/>\n<img class="align-center" src={useBaseUrl("/image/tutorials/ledger/staking/ledger9.png")} alt="Casper Ready" width="800"/>'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'At this point, you can return to your account and wait until the completion of the era when the block gets included in the chain. Once the era completes, you will see that your liquid balance has decreased by your staked amount and is reflected in the "Staked As Delegator" row.'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": If you staked your full balance, don't panic if you see a 0 CSPR balance whenever you log in! This is because it shows your liquid assets, not your total balance. You can go to your account details page, as shown below, to see your full balance and asset breakdown between liquid, staked, and undelegated tokens."]}),"\n",(0,i.jsx)(n.p,{children:'<img class="align-center" src={useBaseUrl("/image/tutorials/ledger/staking/ledger10.png")} alt="Casper Ready" width="800"/>'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3-unstaking",children:"Unstaking with a Validator"}),"\n",(0,i.jsx)(n.h3,{id:"initiate-the-undelegation",children:"Initiate the Undelegation"}),"\n",(0,i.jsx)(n.p,{children:'Now that you have funds delegated, you can liquidate them by undelegating them first. As demonstrated below, on your account\'s profile page, click "Undelegate" to get started.'}),"\n",(0,i.jsx)(n.p,{children:'<img class="align-center" src={useBaseUrl("/image/tutorials/ledger/staking/ledger11.png")} alt="Casper Ready" width="800"/>'}),"\n",(0,i.jsx)(n.p,{children:'The next page, "Undelegation details", will ask you how much you wish to undelegate. If you select "Undelegate max", it will attempt to liquidate all of your staked assets (minus the transaction fee). Once you enter a valid amount, the "Next" button will become clickable. Below you can see that I entered 313.02931 CSPR to be able to proceed.'}),"\n",(0,i.jsx)(n.p,{children:'<img class="align-center" src={useBaseUrl("/image/tutorials/ledger/staking/ledger12.png")} alt="Casper Ready" width="800"/>'}),"\n",(0,i.jsx)(n.p,{children:'You will next be shown a confirmation screen. If everything looks good, then click "Confirm and undelegate stake" to proceed.'}),"\n",(0,i.jsx)(n.h3,{id:"sign-the-undelegation",children:"Sign the Undelegation"}),"\n",(0,i.jsx)(n.p,{children:"You will have to sign the transaction to verify your account is initiating this action."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Connect your Ledger device to your computer."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Unlock your Ledger by entering your PIN."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Open the "Casper" app and ensure you see "Casper Ready".'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Then back on ",(0,i.jsx)(n.a,{href:"https://cspr.live",children:"cspr.live"}),' click the "Sign with Ledger" button shown below.']}),"\n",(0,i.jsx)(n.p,{children:'<img class="align-center" src={useBaseUrl("/image/tutorials/ledger/staking/ledger13.png")} alt="Casper Ready" width="800"/>'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'On your Ledger, you will see the transaction details. Verify all the information with what is being presented on the screen. If it looks good, then approve the transaction. If all goes according to plan, you will be presented with an "Undelegation completed!" screen.'}),"\n",(0,i.jsx)(n.p,{children:'<img class="align-center" src={useBaseUrl("/image/tutorials/ledger/staking/ledger14.png")} alt="Casper Ready" width="800"/>'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),': There is a 7 era delay to undelegate. Era duration is approximately 120 minutes. While the funds go through undelegation, the balance will appear in the "Undelegation" row on your account profile page, as you can see below.']}),"\n",(0,i.jsx)(n.p,{children:'<img class="align-center" src={useBaseUrl("/image/tutorials/ledger/staking/ledger15.png")} alt="Casper Ready" width="800"/>'}),"\n",(0,i.jsx)(n.p,{children:"After the undelegation period completes, your funds will be liquid and available for you to re-stake, withdraw, or use however you wish."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);