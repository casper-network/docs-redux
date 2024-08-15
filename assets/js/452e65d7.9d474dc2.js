"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[9109],{30383:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var t=s(74848),d=s(28453);const r={title:"OpCode Costs Tables"},c="OpCode Costs Tables",i={id:"developers/cli/opcode-costs",title:"OpCode Costs Tables",description:"The following tables outline the cost, in motes, for a given operation on Casper's Mainnet. If you are building for a private network or other instance of Casper, you will need to verify these costs in the associated chainspec.toml.",source:"@site/docs/developers/cli/opcode-costs.md",sourceDirName:"developers/cli",slug:"/developers/cli/opcode-costs",permalink:"/docs-redux/next/developers/cli/opcode-costs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"OpCode Costs Tables"},sidebar:"developers",previous:{title:"Calling Contracts",permalink:"/docs-redux/next/developers/cli/calling-contracts"},next:{title:"Execution Error Codes",permalink:"/docs-redux/next/developers/cli/execution-error-codes"}},l={},h=[{value:"Storage Costs",id:"storage-costs",level:2},{value:"OpCode Costs",id:"opcode-costs",level:2},{value:"Control Flow Operation Costs",id:"control-flow-operation-costs",level:2},{value:"<code>Br_Table</code> OpCode Costs",id:"br_table-opcode-costs",level:2},{value:"External Function Costs",id:"external-function-costs",level:2},{value:"Protocol Operating Costs",id:"protocol-operating-costs",level:2},{value:"<code>Auction</code> System Contract Costs",id:"auction-system-contract-costs",level:3},{value:"<code>Mint</code> System Contract Costs",id:"mint-system-contract-costs",level:3},{value:"<code>Handle_Payment</code> System Contract Costs",id:"handle_payment-system-contract-costs",level:3},{value:"<code>Standard_Payment</code> System Contract Costs",id:"standard_payment-system-contract-costs",level:3}];function o(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"opcode-costs-tables",children:"OpCode Costs Tables"})}),"\n",(0,t.jsxs)(e.p,{children:["The following tables outline the cost, in motes, for a given operation on Casper's Mainnet. If you are building for a private network or other instance of Casper, you will need to verify these costs in the associated ",(0,t.jsx)(e.code,{children:"chainspec.toml"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["More information on ",(0,t.jsx)(e.code,{children:"chainspec"}),"s for private networks can be found ",(0,t.jsx)(e.a,{href:"/docs-redux/next/operators/setup-network/chain-spec",children:"here"})]}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsxs)(e.p,{children:["All costs in this table are in ",(0,t.jsx)(e.a,{href:"/concepts/glossary/M/#motes",children:"motes"}),", not CSPR, and the corresponding chainspec is ",(0,t.jsx)(e.a,{href:"https://github.com/casper-network/casper-node/blob/53dd33865c2707c29284ccc0e8485f22ddd6fbe3/resources/production/chainspec.toml#L129",children:"here"}),"."]})}),"\n",(0,t.jsx)(e.h2,{id:"storage-costs",children:"Storage Costs"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Attribute"}),(0,t.jsx)(e.th,{children:"Description"}),(0,t.jsx)(e.th,{children:"Cost"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"gas_per_byte"}),(0,t.jsx)(e.td,{children:"Gas charged per byte stored in global state."}),(0,t.jsx)(e.td,{children:"630,000"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"opcode-costs",children:"OpCode Costs"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Attribute"}),(0,t.jsx)(e.th,{children:"Description"}),(0,t.jsx)(e.th,{children:"Cost"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"bit"}),(0,t.jsx)(e.td,{children:"Bit operations multiplier."}),(0,t.jsx)(e.td,{children:"300"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"add"}),(0,t.jsx)(e.td,{children:"Arithmetic add operations multiplier."}),(0,t.jsx)(e.td,{children:"210"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"mul"}),(0,t.jsx)(e.td,{children:"Mul operations multiplier."}),(0,t.jsx)(e.td,{children:"240"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"div"}),(0,t.jsx)(e.td,{children:"Div operations multiplier."}),(0,t.jsx)(e.td,{children:"320"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"load"}),(0,t.jsx)(e.td,{children:"Memory load operation multiplier."}),(0,t.jsx)(e.td,{children:"2_500"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"store"}),(0,t.jsx)(e.td,{children:"Memory store operation multiplier."}),(0,t.jsx)(e.td,{children:"4,700"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"const"}),(0,t.jsx)(e.td,{children:"Const store operation multiplier."}),(0,t.jsx)(e.td,{children:"110"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"local"}),(0,t.jsx)(e.td,{children:"Local operations multiplier."}),(0,t.jsx)(e.td,{children:"390"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"global"}),(0,t.jsx)(e.td,{children:"Global operations multiplier."}),(0,t.jsx)(e.td,{children:"390"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"integer_comparison"}),(0,t.jsx)(e.td,{children:"Integer operations multiplier."}),(0,t.jsx)(e.td,{children:"250"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"conversion"}),(0,t.jsx)(e.td,{children:"Conversion operations multiplier."}),(0,t.jsx)(e.td,{children:"420"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"unreachable"}),(0,t.jsx)(e.td,{children:"Unreachable operation multiplier."}),(0,t.jsx)(e.td,{children:"270"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"nop"}),(0,t.jsx)(e.td,{children:"Nop operation multiplier."}),(0,t.jsx)(e.td,{children:"200"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"current_memory"}),(0,t.jsx)(e.td,{children:"Get the current memory operation multiplier."}),(0,t.jsx)(e.td,{children:"290"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"grow_memory"}),(0,t.jsx)(e.td,{children:"Grow memory cost per page (64 kB)."}),(0,t.jsx)(e.td,{children:"240,000"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"control-flow-operation-costs",children:"Control Flow Operation Costs"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Attribute"}),(0,t.jsx)(e.th,{children:"Description"}),(0,t.jsx)(e.th,{children:"Cost"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"block"}),(0,t.jsxs)(e.td,{children:["Cost for ",(0,t.jsx)(e.code,{children:"block"})," opcode."]}),(0,t.jsx)(e.td,{children:"440"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"loop"}),(0,t.jsxs)(e.td,{children:["Cost for ",(0,t.jsx)(e.code,{children:"loop"})," opcode."]}),(0,t.jsx)(e.td,{children:"440"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"if"}),(0,t.jsxs)(e.td,{children:["Cost for ",(0,t.jsx)(e.code,{children:"if"})," opcode."]}),(0,t.jsx)(e.td,{children:"440"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"else"}),(0,t.jsxs)(e.td,{children:["Cost for ",(0,t.jsx)(e.code,{children:"else"})," opcode."]}),(0,t.jsx)(e.td,{children:"440"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"end"}),(0,t.jsxs)(e.td,{children:["Cost for ",(0,t.jsx)(e.code,{children:"end"})," opcode."]}),(0,t.jsx)(e.td,{children:"440"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"br"}),(0,t.jsxs)(e.td,{children:["Cost for ",(0,t.jsx)(e.code,{children:"br"})," opcode."]}),(0,t.jsx)(e.td,{children:"35_000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"br_if"}),(0,t.jsxs)(e.td,{children:["Cost for ",(0,t.jsx)(e.code,{children:"br_if"})," opcode."]}),(0,t.jsx)(e.td,{children:"35,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"return"}),(0,t.jsxs)(e.td,{children:["Cost for ",(0,t.jsx)(e.code,{children:"return"})," opcode."]}),(0,t.jsx)(e.td,{children:"440"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"select"}),(0,t.jsxs)(e.td,{children:["Cost for ",(0,t.jsx)(e.code,{children:"select"})," opcode."]}),(0,t.jsx)(e.td,{children:"440"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"call"}),(0,t.jsxs)(e.td,{children:["Cost for ",(0,t.jsx)(e.code,{children:"call"})," opcode."]}),(0,t.jsx)(e.td,{children:"68_000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"call_indirect"}),(0,t.jsxs)(e.td,{children:["Cost for ",(0,t.jsx)(e.code,{children:"call_indirect"})," opcode."]}),(0,t.jsx)(e.td,{children:"68,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"drop"}),(0,t.jsxs)(e.td,{children:["Cost for ",(0,t.jsx)(e.code,{children:"drop"})," opcode."]}),(0,t.jsx)(e.td,{children:"440"})]})]})]}),"\n",(0,t.jsxs)(e.h2,{id:"br_table-opcode-costs",children:[(0,t.jsx)(e.code,{children:"Br_Table"})," OpCode Costs"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Attribute"}),(0,t.jsx)(e.th,{children:"Description"}),(0,t.jsx)(e.th,{children:"Cost"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"cost"}),(0,t.jsxs)(e.td,{children:["Fixed cost per ",(0,t.jsx)(e.code,{children:"br_table"})," opcode."]}),(0,t.jsx)(e.td,{children:"35,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"size_multiplier"}),(0,t.jsxs)(e.td,{children:["Size of target labels in the ",(0,t.jsx)(e.code,{children:"br_table"})," opcode will be multiplied by ",(0,t.jsx)(e.code,{children:"size_multiplier"}),"."]}),(0,t.jsx)(e.td,{children:"100"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"external-function-costs",children:"External Function Costs"}),"\n",(0,t.jsxs)(e.p,{children:['The following costs are for low-level bindings for host-side ("external") functions. More information on the Casper external FFI can be found ',(0,t.jsx)(e.a,{href:"https://docs.rs/casper-contract/latest/casper_contract/ext_ffi/index.html",children:"here"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Host-Side Function"}),(0,t.jsx)(e.th,{children:"Cost"}),(0,t.jsx)(e.th,{children:"Arguments"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"add"}),(0,t.jsx)(e.td,{children:"5,800"}),(0,t.jsx)(e.td,{children:"[0, 0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"add_associated_key"}),(0,t.jsx)(e.td,{children:"9,000"}),(0,t.jsx)(e.td,{children:"[0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"add_contract_version"}),(0,t.jsx)(e.td,{children:"200"}),(0,t.jsx)(e.td,{children:"[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"blake2b"}),(0,t.jsx)(e.td,{children:"200"}),(0,t.jsx)(e.td,{children:"[0, 0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"call_contract"}),(0,t.jsx)(e.td,{children:"4,500"}),(0,t.jsx)(e.td,{children:"[0, 0, 0, 0, 0, 420, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"call_versioned_contract"}),(0,t.jsx)(e.td,{children:"4,500"}),(0,t.jsx)(e.td,{children:"[0, 0, 0, 0, 0, 0, 0, 420, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"create_contract_package_at_hash"}),(0,t.jsx)(e.td,{children:"200"}),(0,t.jsx)(e.td,{children:"[0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"create_contract_user_group"}),(0,t.jsx)(e.td,{children:"200"}),(0,t.jsx)(e.td,{children:"[0, 0, 0, 0, 0, 0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"create_purse"}),(0,t.jsx)(e.td,{children:"2,500,000,000"}),(0,t.jsx)(e.td,{children:"[0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"disable_contract_version"}),(0,t.jsx)(e.td,{children:"200"}),(0,t.jsx)(e.td,{children:"[0, 0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get_balance"}),(0,t.jsx)(e.td,{children:"3,800"}),(0,t.jsx)(e.td,{children:"[0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get_blocktime"}),(0,t.jsx)(e.td,{children:"330"}),(0,t.jsx)(e.td,{children:"[0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get_caller"}),(0,t.jsx)(e.td,{children:"380"}),(0,t.jsx)(e.td,{children:"[0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get_key"}),(0,t.jsx)(e.td,{children:"2,000"}),(0,t.jsx)(e.td,{children:"[0, 440, 0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get_main_purse"}),(0,t.jsx)(e.td,{children:"1,300"}),(0,t.jsx)(e.td,{children:"[0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get_named_arg"}),(0,t.jsx)(e.td,{children:"200"}),(0,t.jsx)(e.td,{children:"[0, 0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get_named_arg_size"}),(0,t.jsx)(e.td,{children:"200"}),(0,t.jsx)(e.td,{children:"[0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get_phase"}),(0,t.jsx)(e.td,{children:"710"}),(0,t.jsx)(e.td,{children:"[0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get_system_contract"}),(0,t.jsx)(e.td,{children:"1,100"}),(0,t.jsx)(e.td,{children:"[0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"has_key"}),(0,t.jsx)(e.td,{children:"1,500"}),(0,t.jsx)(e.td,{children:"[0, 840]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"is_valid_uref"}),(0,t.jsx)(e.td,{children:"760"}),(0,t.jsx)(e.td,{children:"[0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"load_named_keys"}),(0,t.jsx)(e.td,{children:"42,000"}),(0,t.jsx)(e.td,{children:"[0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"new_uref"}),(0,t.jsx)(e.td,{children:"17,000"}),(0,t.jsx)(e.td,{children:"[0, 0, 590]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"random_bytes"}),(0,t.jsx)(e.td,{children:"200"}),(0,t.jsx)(e.td,{children:"[0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"print"}),(0,t.jsx)(e.td,{children:"20,000"}),(0,t.jsx)(e.td,{children:"[0, 4,600]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"provision_contract_user_group_uref"}),(0,t.jsx)(e.td,{children:"200"}),(0,t.jsx)(e.td,{children:"[0, 0, 0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"put_key"}),(0,t.jsx)(e.td,{children:"38,000"}),(0,t.jsx)(e.td,{children:"[0, 1,100, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"read_host_buffer"}),(0,t.jsx)(e.td,{children:"3,500"}),(0,t.jsx)(e.td,{children:"[0, 310, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"read_value"}),(0,t.jsx)(e.td,{children:"6,000"}),(0,t.jsx)(e.td,{children:"[0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"read_value_local"}),(0,t.jsx)(e.td,{children:"5,500"}),(0,t.jsx)(e.td,{children:"[0, 590, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"remove_associated_key"}),(0,t.jsx)(e.td,{children:"4,200"}),(0,t.jsx)(e.td,{children:"[0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"remove_contract_user_group"}),(0,t.jsx)(e.td,{children:"200"}),(0,t.jsx)(e.td,{children:"[0, 0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"remove_contract_user_group_urefs"}),(0,t.jsx)(e.td,{children:"200"}),(0,t.jsx)(e.td,{children:"[0, 0, 0, 0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"remove_key"}),(0,t.jsx)(e.td,{children:"61,000"}),(0,t.jsx)(e.td,{children:"[0, 3,200]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ret"}),(0,t.jsx)(e.td,{children:"23,000"}),(0,t.jsx)(e.td,{children:"[0, 420,000]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"revert"}),(0,t.jsx)(e.td,{children:"500"}),(0,t.jsx)(e.td,{children:"[0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"set_action_threshold"}),(0,t.jsx)(e.td,{children:"74,000"}),(0,t.jsx)(e.td,{children:"[0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"transfer_from_purse_to_account"}),(0,t.jsx)(e.td,{children:"2,500,000,000"}),(0,t.jsx)(e.td,{children:"[0, 0, 0, 0, 0, 0, 0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"transfer_from_purse_to_purse"}),(0,t.jsx)(e.td,{children:"82,000"}),(0,t.jsx)(e.td,{children:"[0, 0, 0, 0, 0, 0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"transfer_to_account"}),(0,t.jsx)(e.td,{children:"2,500,000,000"}),(0,t.jsx)(e.td,{children:"[0, 0, 0, 0, 0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"update_associated_key"}),(0,t.jsx)(e.td,{children:"4,200"}),(0,t.jsx)(e.td,{children:"[0, 0, 0]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"write"}),(0,t.jsx)(e.td,{children:"14,000"}),(0,t.jsx)(e.td,{children:"[0, 0, 0, 980]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"write_local"}),(0,t.jsx)(e.td,{children:"9,500"}),(0,t.jsx)(e.td,{children:"[0, 1,800, 0, 520]"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"protocol-operating-costs",children:"Protocol Operating Costs"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Attribute"}),(0,t.jsx)(e.th,{children:"Description"}),(0,t.jsx)(e.th,{children:"Cost"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"wasmless_transfer_cost"}),(0,t.jsx)(e.td,{children:"Default gas cost for a wasmless transfer."}),(0,t.jsx)(e.td,{children:"100,000,000"})]})})]}),"\n",(0,t.jsxs)(e.h3,{id:"auction-system-contract-costs",children:[(0,t.jsx)(e.code,{children:"Auction"})," System Contract Costs"]}),"\n",(0,t.jsxs)(e.p,{children:["These are the costs of calling ",(0,t.jsx)(e.code,{children:"auction"})," system contract entrypoints."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Entrypoint"}),(0,t.jsx)(e.th,{children:"Description"}),(0,t.jsx)(e.th,{children:"Cost"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get_era_validators"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"get_era_validators"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"10,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"read_seigniorage_recipients"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"read_seigniorage_recipients"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"10,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"add_bid"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"add_bid"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"2,500,000,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"withdraw_bid"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"withdraw_bid"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"2,500,000,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"delegate"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"delegate"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"2,500,000,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"undelegate"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"undelegate"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"2,500,000,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"run_auction"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"run_auction"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"10,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"slash"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"slash"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"10,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"distribute"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"distribute"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"10,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"withdraw_delegator_reward"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"withdraw_delegator_reward"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"10,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"withdraw_validator_reward"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"withdraw_validator_reward"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"10,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"read_era_id"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"read_era_id"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"10,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"activate_bid"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"activate_bid"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"10,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"redelegate"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"redelegate"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"2,500,000,000"})]})]})]}),"\n",(0,t.jsxs)(e.h3,{id:"mint-system-contract-costs",children:[(0,t.jsx)(e.code,{children:"Mint"})," System Contract Costs"]}),"\n",(0,t.jsxs)(e.p,{children:["These are the costs of calling ",(0,t.jsx)(e.code,{children:"mint"})," system contract entrypoints."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Entrypoint"}),(0,t.jsx)(e.th,{children:"Description"}),(0,t.jsx)(e.th,{children:"Cost"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"mint"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"mint"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"2,500,000,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"reduce_total_supply"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"reduce_total_supply"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"10,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"create"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"create"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"2,500,000,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"balance"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"balance"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"10,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"transfer"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"transfer"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"10,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"read_base_round_reward"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"read_base_round_reward"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"10,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"mint_into_existing_purse"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"mint_into_existing_purse"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"2,500,000,000"})]})]})]}),"\n",(0,t.jsxs)(e.h3,{id:"handle_payment-system-contract-costs",children:[(0,t.jsx)(e.code,{children:"Handle_Payment"})," System Contract Costs"]}),"\n",(0,t.jsxs)(e.p,{children:["These are the costs of calling entrypoints on the ",(0,t.jsx)(e.code,{children:"handle_payment"})," system contract."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Entrypoint"}),(0,t.jsx)(e.th,{children:"Description"}),(0,t.jsx)(e.th,{children:"Cost"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get_payment_purse"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"get_payment_purse"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"10,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"set_refund_purse"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"set_refund_purse"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"10,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get_refund_purse"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"get_refund_purse"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"10,000"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"finalize_payment"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"finalize_payment"})," entrypoint."]}),(0,t.jsx)(e.td,{children:"10,000"})]})]})]}),"\n",(0,t.jsxs)(e.h3,{id:"standard_payment-system-contract-costs",children:[(0,t.jsx)(e.code,{children:"Standard_Payment"})," System Contract Costs"]}),"\n",(0,t.jsxs)(e.p,{children:["These settings manage the costs of calling entrypoints on the ",(0,t.jsx)(e.code,{children:"standard_payment"})," system contract."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Entrypoint"}),(0,t.jsx)(e.th,{children:"Description"}),(0,t.jsx)(e.th,{children:"Cost"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pay"}),(0,t.jsxs)(e.td,{children:["Cost of calling the ",(0,t.jsx)(e.code,{children:"pay"})," entrypoint and sending an amount to a payment purse."]}),(0,t.jsx)(e.td,{children:"10,000"})]})})]})]})}function x(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>i});var t=s(96540);const d={},r=t.createContext(d);function c(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);