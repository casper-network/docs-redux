"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[1520],{4997:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var c=s(4848),t=s(8453);const a={title:"Interaction Workflow"},i="Interacting with the NFT Contract using the Rust Casper Client",r={id:"resources/tokens/cep78/using-casper-client/interacting-with-NFTs",title:"Interaction Workflow",description:"This document describes interacting with NFTs on a Casper network using the Rust command-line client.",source:"@site/docs/resources/tokens/cep78/using-casper-client/interacting-with-NFTs.md",sourceDirName:"resources/tokens/cep78/using-casper-client",slug:"/resources/tokens/cep78/using-casper-client/interacting-with-NFTs",permalink:"/docs-redux/resources/tokens/cep78/using-casper-client/interacting-with-NFTs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Interaction Workflow"},sidebar:"resources",previous:{title:"Installation Workflow",permalink:"/docs-redux/resources/tokens/cep78/using-casper-client/full-installation-tutorial"},next:{title:"CEP-78 Contract Details",permalink:"/docs-redux/resources/tokens/cep78/using-casper-client/querying-NFTs"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Directly Invoking Entrypoints",id:"directly-invoking-entrypoints",level:2},{value:"Minting NFTs",id:"minting-nfts",level:2},{value:"Minting NFTs using Wasm",id:"minting-nfts-using-wasm",level:3},{value:"Transferring NFTs",id:"transferring-nfts",level:2},{value:"Transferring NFTs using Wasm",id:"transferring-nfts-using-wasm",level:3},{value:"Checking Balances",id:"checking-balances",level:2},{value:"Approving an Account",id:"approving-an-account",level:2},{value:"Burning NFTs",id:"burning-nfts",level:2},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"interacting-with-the-nft-contract-using-the-rust-casper-client",children:"Interacting with the NFT Contract using the Rust Casper Client"})}),"\n",(0,c.jsx)(n.p,{children:"This document describes interacting with NFTs on a Casper network using the Rust command-line client."}),"\n",(0,c.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Install the contract using the ",(0,c.jsx)(n.a,{href:"/docs-redux/resources/tokens/cep78/using-casper-client/quickstart-guide",children:"Quickstart"})," or the ",(0,c.jsx)(n.a,{href:"/docs-redux/resources/tokens/cep78/using-casper-client/full-installation-tutorial",children:"Full Installation"})," tutorials"]}),"\n",(0,c.jsxs)(n.li,{children:["Learn to ",(0,c.jsx)(n.a,{href:"/docs-redux/resources/tokens/cep78/using-casper-client/querying-NFTs",children:"Query NFT Contracts"})," and save the various hashes and URefs required throughout this document"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"#directly-invoking-entrypoints",children:"Directly Invoking Entrypoints"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"#minting-nfts",children:"Minting NFTs"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"#transferring-nfts",children:"Transferring NFTs"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"#checking-balances",children:"Checking Balances"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"#approving-an-account",children:"Approving an Account"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"#burning-nfts",children:"Burning NFTs"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"#next-steps",children:"Next Steps"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"directly-invoking-entrypoints",children:"Directly Invoking Entrypoints"}),"\n",(0,c.jsxs)(n.p,{children:["With the release of CEP-78 version 1.1, users interacting with a CEP-78 contract that does not use ",(0,c.jsx)(n.code,{children:"ReverseLookupMode"})," should opt out of using the client Wasm files provided as part of the release. Opting out in this situation is recommended, as directly invoking the entrypoints incurs a lower gas cost than using the provided client Wasm to invoke the entrypoint."]}),"\n",(0,c.jsxs)(n.p,{children:["You may invoke the ",(0,c.jsx)(n.code,{children:"mint"}),", ",(0,c.jsx)(n.code,{children:"transfer"}),", or ",(0,c.jsx)(n.code,{children:"burn"})," entrypoints directly through either the contract package hash or the contract hash directly."]}),"\n",(0,c.jsxs)(n.p,{children:["In the case of ",(0,c.jsx)(n.code,{children:"mint"}),", fewer runtime arguments must be provided, thereby reducing the total gas cost of minting an NFT."]}),"\n",(0,c.jsxs)(s,{children:[(0,c.jsx)("summary",{children:(0,c.jsxs)("b",{children:["Example ",(0,c.jsx)(n.code,{children:"mint"})," using the stored package hash"]})}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy --node-address http://localhost:11101/rpc/ \\\n--chain-name "casper-net-1\u201d \\\n--payment-amount 5000000000 \\\n--secret-key ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem \\\n--session-package-hash hash-2b61207cd0e94ce1b1d40801b0abb1ab55fd7dae94c9dcf670292243f3791a30 \\\n--session-entry-point "mint" \\\n--session-arg "token_owner:key=\'account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655\'" \\\n--session-arg "token_meta_data:string=\'{\\"name\\": \\"John Doe\\",\\"token_uri\\": \\"https:\\/\\/www.barfoo.com\\",\\"checksum\\": \\"940bffb3f2bba35f84313aa26da09ece3ad47045c6a1292c2bbd2df4ab1a55fb\\"}\'"\n'})})]}),"\n",(0,c.jsxs)(s,{children:[(0,c.jsx)("summary",{children:(0,c.jsxs)("b",{children:["Example ",(0,c.jsx)(n.code,{children:"transfer"})," using the stored contract hash"]})}),(0,c.jsxs)(n.p,{children:["Based on the identifier mode for the given contract instance, either the ",(0,c.jsx)(n.code,{children:"token_id"})," runtime argument must be passed in or, in the case of the hash identifier mode, the ",(0,c.jsx)(n.code,{children:"token_hash"})," runtime argument."]}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy --node-address http://localhost:11101/rpc/ \\\n--chain-name "casper-net-1\u201d \\\n--payment-amount 5000000000 \\\n--secret-key ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem \\\n--session-hash hash-378a43e38bc5129d8aa3bcd04f5c9a97be73f85b5be574182ac1346f04520796 \\\n--session-entry-point "transfer" \\\n--session-arg "source_key:key=\'account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655\'" \\\n--session-arg "target_key:key=\'account-hash-0ea7998b2822afe5b62b08a21d54c941ad791279b089f3f7ede0d72b477eca34\'" \\\n--session-arg "token_id:u64=\'0\'"\n'})})]}),"\n",(0,c.jsx)(n.h2,{id:"minting-nfts",children:"Minting NFTs"}),"\n",(0,c.jsxs)(n.p,{children:["Below is an example of a ",(0,c.jsx)(n.code,{children:"casper-client"})," command that uses the ",(0,c.jsx)(n.code,{children:"mint"})," entrypoint of the contract to mint an NFT for the user associated with ",(0,c.jsx)(n.code,{children:"node-1"})," in an ",(0,c.jsx)(n.a,{href:"/docs-redux/developers/dapps/nctl-test",children:"NCTL environment"}),"."]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:'casper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" --payment-amount 5000000000 -k ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem --session-entry-point "mint"'})}),"\n"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-package-hash hash-2b61207cd0e94ce1b1d40801b0abb1ab55fd7dae94c9dcf670292243f3791a30"})}),"\n",(0,c.jsx)(n.p,{children:"The package hash of the previously installed CEP-78 NFT contract from which we will be minting."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-arg \"token_owner:key='account-hash-e9ff87766a1d2bab2565bfd5799054946200b51b20c3ca7e54a9269e00fe7cfb'\""})}),"\n",(0,c.jsx)(n.p,{children:"The collection name of the NFT to be minted."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:'--session-arg "token_meta_data:string=\'{\\"name\\": \\"John Doe\\",\\"token_uri\\": \\"https:\\/\\/www.barfoo.com\\",\\"checksum\\": \\"940bffb3f2bba35f84313aa26da09ece3ad47045c6a1292c2bbd2df4ab1a55fb\\"}\'"'})}),"\n",(0,c.jsxs)(n.p,{children:["Metadata describing the NFT to be minted, passed in as a ",(0,c.jsx)(n.code,{children:"string"}),"."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s,{children:[(0,c.jsx)("summary",{children:(0,c.jsx)("b",{children:"Casper client command without comments"})}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy --node-address http://localhost:11101/rpc/ \\\n--chain-name "casper-net-1\u201d \\\n--payment-amount 5000000000 \\\n--secret-key ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem \\\n--session-entry-point "mint" \\\n--session-package-hash hash-2b61207cd0e94ce1b1d40801b0abb1ab55fd7dae94c9dcf670292243f3791a30 \\\n--session-arg "token_owner:key=\'account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655\'" \\\n--session-arg "token_meta_data:string=\'{\\"name\\": \\"John Doe\\",\\"token_uri\\": \\"https:\\/\\/www.barfoo.com\\",\\"checksum\\": \\"940bffb3f2bba35f84313aa26da09ece3ad47045c6a1292c2bbd2df4ab1a55fb\\"}\'"\n'})})]}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:["If the ",(0,c.jsx)(n.code,{children:"identifier_mode"})," was set to hash (1) during installation, the ",(0,c.jsx)(n.code,{children:"token_hash"})," runtime argument needs to be specified during minting. Since you already know the NFT's identifier, you can easily query the NFT's ",(0,c.jsx)(n.code,{children:"meta_data"}),", which is a very useful feature. This example uses an ordinal (0) ",(0,c.jsx)(n.code,{children:"identifier_mode"}),"."]})}),"\n",(0,c.jsx)(n.h3,{id:"minting-nfts-using-wasm",children:"Minting NFTs using Wasm"}),"\n",(0,c.jsxs)(n.p,{children:["This example invokes the ",(0,c.jsx)(n.code,{children:"mint_call.wasm"})," session code provided in the ",(0,c.jsx)(n.code,{children:"client"})," folder."]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:'casper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" --payment-amount 5000000000 -k ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem --session-path ~/casper/enhanced-nft/client/mint_session/target/wasm32-unknown-unknown/release/mint_call.wasm'})}),"\n"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-arg \"nft_contract_hash:key='hash-206339c3deb8e6146974125bb271eb510795be6f250c21b1bd4b698956669f95'\""})}),"\n",(0,c.jsx)(n.p,{children:"The contract hash of the previously installed CEP-78 NFT contract from which we will be minting."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-arg \"collection_name:string='cep78_<collection_name>'\""})}),"\n",(0,c.jsx)(n.p,{children:"The collection name of the previously installed CEP-78 NFT contract from which we will be minting."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-arg \"token_owner:key='account-hash-e9ff87766a1d2bab2565bfd5799054946200b51b20c3ca7e54a9269e00fe7cfb'\""})}),"\n",(0,c.jsx)(n.p,{children:"The collection name of the NFT to be minted."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:'--session-arg "token_meta_data:string=\'{\\"name\\": \\"John Doe\\",\\"token_uri\\": \\"https:\\/\\/www.barfoo.com\\",\\"checksum\\": \\"940bffb3f2bba35f84313aa26da09ece3ad47045c6a1292c2bbd2df4ab1a55fb\\"}\'"'})}),"\n",(0,c.jsxs)(n.p,{children:["Metadata describing the NFT to be minted, passed in as a ",(0,c.jsx)(n.code,{children:"string"}),"."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s,{children:[(0,c.jsx)("summary",{children:(0,c.jsx)("b",{children:"Casper client command without comments"})}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy --node-address http://localhost:11101/rpc/ \\\n--chain-name "casper-net-1\u201d \\\n--payment-amount 5000000000 \\\n--secret-key ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem \\\n--session-path ~/casper/enhanced-nft/client/mint_session/target/wasm32-unknown-unknown/release/mint_call.wasm \\\n--session-arg "nft_contract_hash:key=\'hash-206339c3deb8e6146974125bb271eb510795be6f250c21b1bd4b698956669f95\'" \\\n--session-arg "collection_name:string=\'cep78_<collection_name>\'" \\\n--session-arg "token_owner:key=\'account-hash-e9ff87766a1d2bab2565bfd5799054946200b51b20c3ca7e54a9269e00fe7cfb\'"  \\\n--session-arg "token_meta_data:string=\'{\\"name\\": \\"John Doe\\",\\"token_uri\\": \\"https:\\/\\/www.barfoo.com\\",\\"checksum\\": \\"940bffb3f2bba35f84313aa26da09ece3ad47045c6a1292c2bbd2df4ab1a55fb\\"}\'"\n'})})]}),"\n",(0,c.jsx)(n.h2,{id:"transferring-nfts",children:"Transferring NFTs"}),"\n",(0,c.jsxs)(n.p,{children:["Below is an example of a ",(0,c.jsx)(n.code,{children:"casper-client"})," command that uses the ",(0,c.jsx)(n.code,{children:"transfer"})," entrypoint to transfer ownership of an NFT from one user to another."]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:'casper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" --payment-amount 5000000000 -k ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem --session-entry-point "transfer"'})}),"\n"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-hash hash-52e78ae3f6c485d036a74f65ebbb8c75fcc7c33fb42eb667fb32aeba72c63fb5'\""})}),"\n",(0,c.jsx)(n.p,{children:"The contract hash of the CEP-78 NFT Contract associated with the NFT to be transferred."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-arg \"source_key:key='account-hash-e9ff87766a1d2bab2565bfd5799054946200b51b20c3ca7e54a9269e00fe7cfb'\""})}),"\n",(0,c.jsx)(n.p,{children:"The account hash of the user that currently owns the NFT and wishes to transfer it."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-arg \"target_key:key='account-hash-b4772e7c47e4deca5bd90b7adb2d6e884f2d331825d5419d6cbfb59e17642aab'\""})}),"\n",(0,c.jsx)(n.p,{children:"The account hash of the user that will receive the NFT."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-arg \"is_hash_identifier_mode:bool='false'\""})}),"\n",(0,c.jsxs)(n.p,{children:["The argument that the hash identifier mode is ordinal, thereby requiring a ",(0,c.jsx)(n.code,{children:"token_id"})," rather than a ",(0,c.jsx)(n.code,{children:"token_hash"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-arg \"token_id:u64='0'\""})}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"token_id"})," of the NFT to be transferred."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s,{children:[(0,c.jsx)("summary",{children:(0,c.jsx)("b",{children:"Casper client command without comments"})}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" \\\n--payment-amount 5000000000 \\\n-k ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem \\\n--session-entry-point "transfer" \\\n--session-hash hash-52e78ae3f6c485d036a74f65ebbb8c75fcc7c33fb42eb667fb32aeba72c63fb5 \\\n--session-arg "source_key:key=\'account-hash-e9ff87766a1d2bab2565bfd5799054946200b51b20c3ca7e54a9269e00fe7cfb\'" \\\n--session-arg "target_key:key=\'account-hash-b4772e7c47e4deca5bd90b7adb2d6e884f2d331825d5419d6cbfb59e17642aab\'" \\\n--session-arg "is_hash_identifier_mode:bool=\'false\'" \\\n--session-arg "token_id:u64=\'0\'"\n'})})]}),"\n",(0,c.jsxs)(n.p,{children:["This command will return a deploy hash that you can query using ",(0,c.jsx)(n.code,{children:"casper-client get-deploy"}),". Querying the deploy allows you to verify execution success, but you will need to use the ",(0,c.jsx)(n.code,{children:"balance_of"})," entrypoint to verify the account's balance as shown ",(0,c.jsx)(n.a,{href:"#checking-balances",children:"below"}),"."]}),"\n",(0,c.jsx)(n.h3,{id:"transferring-nfts-using-wasm",children:"Transferring NFTs using Wasm"}),"\n",(0,c.jsxs)(n.p,{children:["This example uses the ",(0,c.jsx)(n.code,{children:"transfer_call.wasm"})," session code to transfer ownership of an NFT from one user to another."]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:'casper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" --payment-amount 5000000000 -k ~/secret_key.pem --session-path ~/casper/enhanced-nft/client/transfer_session/target/wasm32-unknown-unknown/release/transfer_call.wasm'})}),"\n"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-arg \"nft_contract_hash:key='hash-52e78ae3f6c485d036a74f65ebbb8c75fcc7c33fb42eb667fb32aeba72c63fb5'\""})}),"\n",(0,c.jsx)(n.p,{children:"The contract hash of the CEP-78 NFT Contract associated with the NFT to be transferred."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-arg \"source_key:key='account-hash-e9ff87766a1d2bab2565bfd5799054946200b51b20c3ca7e54a9269e00fe7cfb'\""})}),"\n",(0,c.jsx)(n.p,{children:"The account hash of the user that currently owns the NFT and wishes to transfer it."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-arg \"target_key:key='account-hash-b4772e7c47e4deca5bd90b7adb2d6e884f2d331825d5419d6cbfb59e17642aab'\""})}),"\n",(0,c.jsx)(n.p,{children:"The account hash of the user that will receive the NFT."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-arg \"is_hash_identifier_mode:bool='false'\""})}),"\n",(0,c.jsxs)(n.p,{children:["Argument that the hash identifier mode is ordinal, thereby requiring a ",(0,c.jsx)(n.code,{children:"token_id"})," rather than a ",(0,c.jsx)(n.code,{children:"token_hash"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-arg \"token_id:u64='0'\""})}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"token_id"})," of the NFT to be transferred."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s,{children:[(0,c.jsx)("summary",{children:(0,c.jsx)("b",{children:"Casper client command without comments"})}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" \\\n--payment-amount 5000000000 \\\n-k ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-2/keys/secret_key.pem \\\n--session-path ~/casper/enhanced-nft/client/transfer_session/target/wasm32-unknown-unknown/release/transfer_call.wasm \\\n--session-arg "nft_contract_hash:key=\'hash-52e78ae3f6c485d036a74f65ebbb8c75fcc7c33fb42eb667fb32aeba72c63fb5\'" \\\n--session-arg "source_key:key=\'account-hash-e9ff87766a1d2bab2565bfd5799054946200b51b20c3ca7e54a9269e00fe7cfb\'" \\\n--session-arg "target_key:key=\'account-hash-b4772e7c47e4deca5bd90b7adb2d6e884f2d331825d5419d6cbfb59e17642aab\'" \\\n--session-arg "is_hash_identifier_mode:bool=\'false\'" \\\n--session-arg "token_id:u64=\'0\'"\n'})})]}),"\n",(0,c.jsx)(n.h2,{id:"checking-balances",children:"Checking Balances"}),"\n",(0,c.jsxs)(n.p,{children:["To check an account's balance, get the latest state root hash and query the ",(0,c.jsx)(n.code,{children:"balances"}),' dictionary given the NFT contract hash and the owner\'s account hash without the "account-hash-" prefix, as shown below.']}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"casper-client get-dictionary-item -n http://localhost:11101/rpc"})}),"\n"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--state-root-hash f22e8ecfb3d2700d5f902c83da456c32f130b73d0d35037fe89b2d4b4933673f"})}),"\n",(0,c.jsx)(n.p,{children:"The latest state root hash."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--contract-hash hash-378a43e38bc5129d8aa3bcd04f5c9a97be73f85b5be574182ac1346f04520796"})}),"\n",(0,c.jsx)(n.p,{children:"The NFT contract hash."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:'--dictionary-name "balances"'})}),"\n",(0,c.jsx)(n.p,{children:"The dictionary tracking the number of tokens for each account hash."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:'--dictionary-item-key "0ea7998b2822afe5b62b08a21d54c941ad791279b089f3f7ede0d72b477eca34"'})}),"\n",(0,c.jsxs)(n.p,{children:["The account hash of the user whose token balance we are checking without the ",(0,c.jsx)(n.code,{children:"account-hash-"})," prefix."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s,{children:[(0,c.jsx)("summary",{children:(0,c.jsx)("b",{children:"Casper client commands without comments"})}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'casper-client get-state-root-hash --node-address https://rpc.testnet.casperlabs.io/\n\ncasper-client get-dictionary-item -n http://localhost:11101/rpc/ \\\n--state-root-hash f22e8ecfb3d2700d5f902c83da456c32f130b73d0d35037fe89b2d4b4933673f \\\n--contract-hash hash-378a43e38bc5129d8aa3bcd04f5c9a97be73f85b5be574182ac1346f04520796 \\\n--dictionary-name "balances" \\\n--dictionary-item-key "0ea7998b2822afe5b62b08a21d54c941ad791279b089f3f7ede0d72b477eca34"\n'})})]}),"\n",(0,c.jsx)(n.h2,{id:"approving-an-account",children:"Approving an Account"}),"\n",(0,c.jsxs)(n.p,{children:["The Casper NFT contract features an ",(0,c.jsx)(n.code,{children:"approve"})," entrypoint, allowing another account to manage a specific token. During contract installation, the ",(0,c.jsx)(n.code,{children:"ownership_mode"})," must be set to 2, meaning ",(0,c.jsx)(n.code,{children:"Transferable"}),"."]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:'casper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" --payment-amount 5000000000 -k ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem --session-entry-point "approve"'})}),"\n"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-hash hash-52e78ae3f6c485d036a74f65ebbb8c75fcc7c33fb42eb667fb32aeba72c63fb5"})}),"\n",(0,c.jsx)(n.p,{children:"The contract hash of the previously installed CEP-78 NFT contract."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-arg \"spender:key='account-hash-17192017d32db5dc9f598bf8ac6ac35ee4b64748669b00572d88335941479513'\""})}),"\n",(0,c.jsx)(n.p,{children:"The hash of the account receiving the approval."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-arg \"token_id:u64='1'\""})}),"\n",(0,c.jsx)(n.p,{children:"The token ID of the approved NFT."}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s,{children:[(0,c.jsx)("summary",{children:(0,c.jsx)("b",{children:"Casper client command without comments"})}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy -n http://localhost:11101/rpc/ \\\n--chain-name "casper-net-1" \\\n--payment-amount 5000000000 \\\n-k ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem \\\n--session-entry-point "approve" \\\n--session-hash hash-52e78ae3f6c485d036a74f65ebbb8c75fcc7c33fb42eb667fb32aeba72c63fb5 \\\n--session-arg "spender:key=\'account-hash-17192017d32db5dc9f598bf8ac6ac35ee4b64748669b00572d88335941479513\'" \\\n--session-arg "token_id:u64=\'1\'"\n'})})]}),"\n",(0,c.jsx)(n.h2,{id:"burning-nfts",children:"Burning NFTs"}),"\n",(0,c.jsxs)(n.p,{children:["Below is an example of a ",(0,c.jsx)(n.code,{children:"casper-client"})," command that uses the ",(0,c.jsx)(n.code,{children:"burn"})," entrypoint to burn an NFT within a CEP-78 collection. If this command is used, the NFT in question will no longer be accessible by anyone."]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:'casper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" --payment-amount 5000000000 -k ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem'})}),"\n"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-hash hash-52e78ae3f6c485d036a74f65ebbb8c75fcc7c33fb42eb667fb32aeba72c63fb5"})}),"\n",(0,c.jsx)(n.p,{children:"The session hash corresponding to the NFT's contract hash."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:'--session-entry-point "burn"'})}),"\n",(0,c.jsxs)(n.p,{children:["The entrypoint corresponding to the ",(0,c.jsx)(n.code,{children:"burn"})," function."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"--session-arg \"token_id:u64='1'\""})}),"\n",(0,c.jsxs)(n.p,{children:["The token ID for the NFT to be burned. If the ",(0,c.jsx)(n.code,{children:"identifier_mode"})," is not set to ",(0,c.jsx)(n.code,{children:"Ordinal"}),", you must provide the ",(0,c.jsx)(n.code,{children:"token_hash"})," instead."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s,{children:[(0,c.jsx)("summary",{children:(0,c.jsx)("b",{children:"Casper client command without comments"})}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy -n http://localhost:11101/rpc --chain-name "casper-net-1" \\\n--payment-amount 5000000000 \\\n-k ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem \\\n--session-hash hash-52e78ae3f6c485d036a74f65ebbb8c75fcc7c33fb42eb667fb32aeba72c63fb5 \\\n--session-entry-point "burn" \\\n--session-arg "token_id:u64=\'1\'"\n'})})]}),"\n",(0,c.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/docs-redux/resources/tokens/cep78/using-casper-client/testing-NFTs",children:"Testing Framework for CEP-78"})}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var c=s(6540);const t={},a=c.createContext(t);function i(e){const n=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);