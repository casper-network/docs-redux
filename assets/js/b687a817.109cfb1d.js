"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[1627],{13663:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=s(74848),t=s(28453);const o={},r="Casper Node Networking Protocol",d={id:"concepts/design/networking-protocol",title:"Casper Node Networking Protocol",description:"Casper Node Networking Protocol (Mainnet Protocol Version 1.5.0)",source:"@site/versioned_docs/version-1.5.X/concepts/design/networking-protocol.md",sourceDirName:"concepts/design",slug:"/concepts/design/networking-protocol",permalink:"/docs-redux/concepts/design/networking-protocol",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724759228e3,frontMatter:{}},a={},c=[{value:"Casper Node Networking Protocol (Mainnet Protocol Version 1.5.0)",id:"casper-node-networking-protocol-mainnet-protocol-version-150",level:2},{value:"Connection Level",id:"connection-level",level:2},{value:"Reciprocity, retries and data direction",id:"reciprocity-retries-and-data-direction",level:3},{value:"TLS parameters",id:"tls-parameters",level:3},{value:"Discovery",id:"discovery",level:3},{value:"Framing",id:"framing",level:2},{value:"Encoding",id:"encoding",level:2},{value:"The <code>Message</code> Type",id:"the-message-type",level:2},{value:"Handshake Behavior",id:"handshake-behavior",level:2},{value:"Blocking Nodes",id:"blocking-nodes",level:2},{value:"The <code>Payload</code> Type",id:"the-payload-type",level:2},{value:"Consensus",id:"consensus",level:3},{value:"Gossiping",id:"gossiping",level:3},{value:"Unsafe-for-syncing",id:"unsafe-for-syncing",level:3},{value:"Gossiping",id:"gossiping-1",level:2},{value:"GetRequests",id:"getrequests",level:2},{value:"Finality Signatures",id:"finality-signatures",level:2},{value:"Trie Chunking",id:"trie-chunking",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"casper-node-networking-protocol",children:"Casper Node Networking Protocol"})}),"\n",(0,i.jsx)(n.h2,{id:"casper-node-networking-protocol-mainnet-protocol-version-150",children:"Casper Node Networking Protocol (Mainnet Protocol Version 1.5.0)"}),"\n",(0,i.jsxs)(n.p,{children:["This is a description of the ",(0,i.jsx)(n.code,{children:"casper-node"}),"'s networking protocol. This document follows the conventions laid out in ",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc2119",children:"RFC2119"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"connection-level",children:"Connection Level"}),"\n",(0,i.jsxs)(n.p,{children:["Any ",(0,i.jsx)(n.code,{children:"casper-node"})," taking part in the Casper network SHOULD open connections to every other casper-node it is aware of and has not blocked. These connections are established using TLS, presenting a client certificate."]}),"\n",(0,i.jsx)(n.h3,{id:"reciprocity-retries-and-data-direction",children:"Reciprocity, retries and data direction"}),"\n",(0,i.jsxs)(n.p,{children:["A connection that was initiated by a node is considered an ",(0,i.jsx)(n.em,{children:"outgoing"})," connection by the node itself, but an ",(0,i.jsx)(n.em,{children:"incoming"})," connection by all other peers."]}),"\n",(0,i.jsx)(n.p,{children:"A node that created an outgoing connection SHOULD terminate the connection if it does not detect an incoming connection from the connected-to node within a short amount of time."}),"\n",(0,i.jsx)(n.p,{children:"A node that receives an incoming connection MUST eventually establish an outgoing connection to the node."}),"\n",(0,i.jsx)(n.p,{children:"A node SHOULD retry any failed outgoing connection periodically with exponential backoff. A node MUST NOT attempt to reconnect more than once per second."}),"\n",(0,i.jsx)(n.p,{children:"Nodes MUST NOT send data through incoming connections, other than handshakes. Nodes MUST NOT accept any data coming through outgoing connections, other than handshakes."}),"\n",(0,i.jsx)(n.h3,{id:"tls-parameters",children:"TLS parameters"}),"\n",(0,i.jsx)(n.p,{children:"Any node creating a connection to a node MUST present a client certificate with the following properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Signature algorithm: ",(0,i.jsx)(n.code,{children:"ECDSA_WITH_SHA512"})]}),"\n",(0,i.jsx)(n.li,{children:"Subject name: Same as issuer name (self-signed certificate!)"}),"\n",(0,i.jsx)(n.li,{children:"Serial number: 1"}),"\n",(0,i.jsx)(n.li,{children:'Expiration ("not before"): Must be earlier than current time.'}),"\n",(0,i.jsx)(n.li,{children:'Expiration ("not after"): Must be later than current time.'}),"\n",(0,i.jsxs)(n.li,{children:["Signature: Must be using ",(0,i.jsx)(n.code,{children:"SECP521R1"})," with ",(0,i.jsx)(n.code,{children:"SHA512"})," and valid."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The SHA512 fingerprint of the ",(0,i.jsx)(n.em,{children:"public key"})," is considered the ",(0,i.jsx)(n.strong,{children:"NodeID"})," of the node."]}),"\n",(0,i.jsx)(n.p,{children:"Any node MUST immediately terminate a connection if it does not match the given parameters. The same certificate MUST be used as a server certificate for other clients connecting to this node."}),"\n",(0,i.jsx)(n.p,{children:"An incoming connection with a valid TLS certificate SHOULD be accepted. As all certificates are self-signed, no further checking is done."}),"\n",(0,i.jsx)(n.h3,{id:"discovery",children:"Discovery"}),"\n",(0,i.jsx)(n.p,{children:"A node address is defined as an IPv4 address and a port. A node's address is the publicly reachable IP address and port that it is listening on for node-to-node-communication."}),"\n",(0,i.jsxs)(n.p,{children:["Every node SHOULD have one or more so-called ",(0,i.jsx)(n.em,{children:"known node addresses"})," of other nodes configured."]}),"\n",(0,i.jsx)(n.p,{children:"On start-up, a node SHOULD attempt to connect to all known nodes. A node SHOULD never forget a known node address."}),"\n",(0,i.jsx)(n.p,{children:"Every node MUST periodically gossip its own node address to the network (see gossiping below)."}),"\n",(0,i.jsxs)(n.p,{children:["A node ",(0,i.jsx)(n.em,{children:"learns"})," new node addresses through receiving a gossiped node address, or being told of an address through the handshake."]}),"\n",(0,i.jsx)(n.p,{children:"Upon learning of a previously unknown node address, a node SHOULD attempt to connect to it."}),"\n",(0,i.jsxs)(n.p,{children:["After failing to connect to a node address, a node MAY forget it after a certain amount of retries, this process is called ",(0,i.jsx)(n.em,{children:"forgetting"})," a node. An address that has been forgotten will be considered new the next time it is learned."]}),"\n",(0,i.jsx)(n.p,{children:"A node MUST NOT forget the known addresses it was configured with initially."}),"\n",(0,i.jsx)(n.h2,{id:"framing",children:"Framing"}),"\n",(0,i.jsx)(n.p,{children:"To send a message to a peer across an established TLS connection, a node MUST send a message length header consisting of a 32 byte big endian integer with the message length first."}),"\n",(0,i.jsx)(n.p,{children:"A node receiving a message length header that exceeds the maximum message size specified in the chainspec MUST immediately terminate the connection."}),"\n",(0,i.jsx)(n.h2,{id:"encoding",children:"Encoding"}),"\n",(0,i.jsxs)(n.p,{children:["The node uses three encoding schemes: Handshakes (see below) are encoded using ",(0,i.jsx)(n.a,{href:"https://msgpack.org",children:"MessagePack"}),", while regular messages are encoded using ",(0,i.jsx)(n.a,{href:"https://docs.rs/bincode",children:"bincode"}),". Many (but not all) data objects use ",(0,i.jsx)(n.a,{href:"https://docs.rs/casper-types/latest/casper_types/bytesrepr/index.html",children:(0,i.jsx)(n.code,{children:"bytesrepr"})})," for serialization."]}),"\n",(0,i.jsxs)(n.p,{children:["The node uses the ",(0,i.jsx)(n.a,{href:"https://docs.rs/rmp-serde/0.14.4/rmp_serde/index.html",children:(0,i.jsx)(n.code,{children:"rmp-serde"})})," crate, version ",(0,i.jsx)(n.code,{children:"0.14.4"}),", which is kept fixed to ensure handshake compatibility with protocol version 1.0 of the node."]}),"\n",(0,i.jsxs)(n.p,{children:["All nodes MUST use the following settings for ",(0,i.jsx)(n.code,{children:"bincode"})," encoding of network messages:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Byte limit: Unlimited"}),"\n",(0,i.jsx)(n.li,{children:"Endianness: Little Endian"}),"\n",(0,i.jsx)(n.li,{children:"Integer Encoding: Varint"}),"\n",(0,i.jsx)(n.li,{children:"Trailing Bytes: Not allowed"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Any other use of ",(0,i.jsx)(n.code,{children:"bincode"})," encoding (e.g. for GetRequest payloads, see below) MUST use the following ",(0,i.jsx)(n.code,{children:"bincode"})," encoding settings:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Byte limit: Unlimited"}),"\n",(0,i.jsx)(n.li,{children:"Endianness: Little Endian"}),"\n",(0,i.jsx)(n.li,{children:"Integer Encoding: Fixint"}),"\n",(0,i.jsx)(n.li,{children:"Trailing Bytes: Allowed"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Unless noted otherwise, any structure encoded as MessagePack or bincode is serialized using the standard  ",(0,i.jsx)(n.a,{href:"https://serde.rs",children:(0,i.jsx)(n.code,{children:"serde"})}),"-derived encoding. For ",(0,i.jsx)(n.code,{children:"bytesrepr"})," serialization refer to the specific implementations in the ",(0,i.jsx)(n.code,{children:"bytesrepr"})," crate."]}),"\n",(0,i.jsxs)(n.p,{children:["Any data types given from here on out are described using simplified ",(0,i.jsx)(n.a,{href:"https://www.rust-lang.org/",children:"Rust"})," structure definitions."]}),"\n",(0,i.jsxs)(n.h2,{id:"the-message-type",children:["The ",(0,i.jsx)(n.code,{children:"Message"})," Type"]}),"\n",(0,i.jsx)(n.p,{children:"The following data types make up the networking protocol:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"enum Message {\n    Handshake {\n        network_name: String,\n        public_addr: SocketAddr,\n        // default: 1.0\n        protocol_version: ProtocolVersion,\n        // default: `None`\n        consensus_certificate: Option<ConsensusCertificate>,\n        // default: false\n        is_syncing: bool,\n        // default: `None`\n        chainspec_hash: Option<Digest>,\n    },\n    Payload(Payload),\n}\n\nstruct ConsensusCertificate {\n    public_key: PublicKey,\n    signature: Signature,\n}\n\nstruct Digest([u8; 32]);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.a,{href:"https://doc.rust-lang.org/std/string/struct.String.html",children:(0,i.jsx)(n.code,{children:"String"})}),", ",(0,i.jsx)(n.a,{href:"https://doc.rust-lang.org/std/net/enum.SocketAddr.html",children:(0,i.jsx)(n.code,{children:"SocketAddr"})}),", ",(0,i.jsx)(n.a,{href:"https://docs.rs/casper-types/latest/casper_types/struct.ProtocolVersion.html",children:(0,i.jsx)(n.code,{children:"ProtocolVersion"})}),", ",(0,i.jsx)(n.a,{href:"https://doc.rust-lang.org/std/option/enum.Option.html",children:(0,i.jsx)(n.code,{children:"Option"})}),", ",(0,i.jsx)(n.a,{href:"https://docs.rs/casper-types/latest/casper_types/crypto/enum.PublicKey.html",children:(0,i.jsx)(n.code,{children:"PublicKey"})}),", ",(0,i.jsx)(n.a,{href:"https://docs.rs/casper-types/latest/casper_types/crypto/enum.Signature.html",children:(0,i.jsx)(n.code,{children:"Signature"})})," see the respective docs and details below."]}),"\n",(0,i.jsx)(n.h2,{id:"handshake-behavior",children:"Handshake Behavior"}),"\n",(0,i.jsx)(n.p,{children:"A node establishing a new connection MUST immediately send a handshake through said connection to the peer, regardless of whether an incoming or outgoing connection was established (this is an exception to the restriction of only sending data through outgoing connections)."}),"\n",(0,i.jsxs)(n.p,{children:["A handshake MUST be encoded using the ",(0,i.jsx)(n.code,{children:"Message::Handshake"})," structure. A node running version 1.5 SHOULD NOT omit any of the fields for which default values are available (",(0,i.jsx)(n.code,{children:"protocol_version"}),", ",(0,i.jsx)(n.code,{children:"consensus_certificate"}),", ",(0,i.jsx)(n.code,{children:"is_syncing"}),", ",(0,i.jsx)(n.code,{children:"chainspec_hash"}),"). A node MUST accept any handshake that omits one or more of these fields and fill them with defaults."]}),"\n",(0,i.jsxs)(n.p,{children:["After receiving a handshake, a node MUST compare the ",(0,i.jsx)(n.code,{children:"network_name"}),", ",(0,i.jsx)(n.code,{children:"protocol_version"})," and ",(0,i.jsx)(n.code,{children:"chainspec_hash"})," fields against its own configuration: If any of these do not match, it MUST disconnect from the node and SHOULD block it."]}),"\n",(0,i.jsxs)(n.p,{children:["A node MUST mark any peer that connects to it (thus is an incoming connection from the perspective of the node) with a value of ",(0,i.jsx)(n.code,{children:"is_syncing"})," set to ",(0,i.jsx)(n.code,{children:"true"}),' as "syncing" and MUST NOT allow any of its own messages that are marked unsafe-for-syncing to be sent to that node, by silently dropping them instead.']}),"\n",(0,i.jsxs)(n.p,{children:["A node MAY compare peers that provide a ",(0,i.jsx)(n.code,{children:"consensus_certificate"})," to the currently active set of validators and mark it as an active validator to give it preferential treatment when outgoing bandwidth is limited."]}),"\n",(0,i.jsxs)(n.p,{children:["Upon handshake completion, the node SHOULD learn the provided ",(0,i.jsx)(n.code,{children:"public_addr"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"blocking-nodes",children:"Blocking Nodes"}),"\n",(0,i.jsx)(n.p,{children:"If a node blocks a peer, it MUST sever all incoming and outgoing connections to said node. It MUST take note of the NodeId of the node, marking it as blocked and MUST not allow any new connection to proceed past the handshake."}),"\n",(0,i.jsx)(n.p,{children:"A node MUST NOT block peers based on IP address or port. Nodes MUST NOT block peers for more than an hour."}),"\n",(0,i.jsxs)(n.p,{children:["After a block on a node is expired, the node SHOULD ",(0,i.jsx)(n.em,{children:"forget"})," the nodes IP address, allowing a later ",(0,i.jsx)(n.em,{children:"learning"})," of said address again."]}),"\n",(0,i.jsxs)(n.h2,{id:"the-payload-type",children:["The ",(0,i.jsx)(n.code,{children:"Payload"})," Type"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Payload"})," (found in the node sources as ",(0,i.jsx)(n.code,{children:"Message"})," in ",(0,i.jsx)(n.code,{children:"payload.rs"}),") contains variants for all node-to-node communicating subsystems of a running node, which are described below. Note that some of the variants have been renamed for clarity in this specification. Since field names are not used in ",(0,i.jsx)(n.code,{children:"bincode"})," encoding, this should have no effect on implementations."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"enum Payload {\n    Consensus(ConsensusMessage),\n    DeployGossiper(DeployGossiperMessage),\n    AddressGossiper(AddressGossiperMessage),\n    GetRequest {\n        tag: Tag,\n        serialized_id: Vec<u8>,\n    },\n    GetResponse {\n        tag: Tag,\n        serialized_item: Vec<[u8]>,\n    },\n    FinalitySignature(FinalitySignature),\n}\n\nenum DeployGossiperMessage {\n    Gossip(DeployHash),\n    GossipResponse {\n        item_id: DeployHash,\n        is_already_held: bool,\n    },\n}\n\nenum AddressGossiperMessage {\n    Gossip(GossippedAddress),\n    GossipResponse {\n        item_id: GossippedAddress,\n        is_already_held: bool,\n    },\n}\n\nstruct DeployHash(Digest);\nstruct GossipedAddress(SocketAddr);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"consensus",children:"Consensus"}),"\n",(0,i.jsxs)(n.p,{children:["A consensus message is sent exclusively between instances of the consensus component, from one peer to another. A precise description of the Highway consensus protocol is out of scope of this document, see the ",(0,i.jsx)(n.code,{children:"consensus::Message"})," type or an appropriate description of the underlying protocol for details."]}),"\n",(0,i.jsx)(n.h3,{id:"gossiping",children:"Gossiping"}),"\n",(0,i.jsx)(n.p,{children:"Gossiping messages are sent by a node to a subset of its peers to announce the availability of new data items. Peers MUST be distinguished by NodeID, not by listening address."}),"\n",(0,i.jsxs)(n.p,{children:["A node must support a gossiper for deploys and one for ",(0,i.jsx)(n.code,{children:"GossippedAddress"}),", which is an alias for the regular Rust standard library's ",(0,i.jsx)(n.code,{children:"SocketAddr"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["A node SHOULD begin a gossiping process for all deploys previously unknown to it. A node MUST periodically send an ",(0,i.jsx)(n.code,{children:"AddressGossiperMessage::Gossip"})," message to a random subset selected in a similar manner as the one for deploy gossip to make its own address known, see the gossiping process section below for details."]}),"\n",(0,i.jsx)(n.h3,{id:"unsafe-for-syncing",children:"Unsafe-for-syncing"}),"\n",(0,i.jsxs)(n.p,{children:["A node that is syncing MUST indicate this by setting ",(0,i.jsx)(n.code,{children:"is_syncing"})," to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["A node MAY implement a scheme for request throttling/backpressure for GetRequests (see below) of ",(0,i.jsx)(n.code,{children:"TrieNode"}),"s that can cause issues with peers that are also sending GetRequests."]}),"\n",(0,i.jsxs)(n.p,{children:["A node that succeeds in a handshake with a peer that has set ",(0,i.jsx)(n.code,{children:"is_syncing"})," MUST make note of this flag. If the node itself is implementing the feature described above, it MUST NOT make any GetRequests directed at this peer for ",(0,i.jsx)(n.code,{children:"TrieNode"}),"s."]}),"\n",(0,i.jsx)(n.h2,{id:"gossiping-1",children:"Gossiping"}),"\n",(0,i.jsx)(n.p,{children:"Gossiping is distributing items across the network by sending it to a subset of known peers that do not have the item already, and having them repeat this process until a certain degree of saturation is observed."}),"\n",(0,i.jsx)(n.p,{children:"Any item has an associated ID type which denotes what is used to uniquely identify it when gossiping. If an item is small enough, the ID may just be the item itself."}),"\n",(0,i.jsx)(n.p,{children:"Gossiper messages have the following structure:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"enum GossiperMessage {\n    Gossip(Id),\n    GossipResponse {\n        item_id: Id,\n        is_already_held: bool,\n    },\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To gossip, a node MAY send a ",(0,i.jsx)(n.code,{children:"GossiperMessage::Gossip"})," message to a random subset of configurable size of peers to announce that it has received and validated a new item. Any peer receiving such a message SHOULD answer with a ",(0,i.jsx)(n.code,{children:"GossiperMessage:GossipResponse"}),", citing the given id and using ",(0,i.jsx)(n.code,{children:"is_already_held"})," to indicate whether it already possessed the given item."]}),"\n",(0,i.jsx)(n.p,{children:"The node SHOULD attempt to continue to find peers with a negative response, up to a configurable limit of attempts and/or success rate, or until running out of valid peers."}),"\n",(0,i.jsxs)(n.p,{children:["The node that initiated the gossip MUST keep track of which peer replied with a positive (",(0,i.jsx)(n.code,{children:"is_already_held"}),"  being ",(0,i.jsx)(n.code,{children:"true"}),") response and MUST NOT send another ",(0,i.jsx)(n.code,{children:"Gossip"})," message for same ID to any of these peers during this gossip process. However, it MAY restart gossiping the same item at a later time, considering these peers again."]}),"\n",(0,i.jsxs)(n.p,{children:["If a node receives a negative ",(0,i.jsx)(n.code,{children:"GossiperMessage::GossipResponse"})," (i.e. ",(0,i.jsx)(n.code,{children:"is_already_held"}),"  being ",(0,i.jsx)(n.code,{children:"false"}),"), and the item's ID is not the item itself, it MUST handle that repsponse as if the peer had sent a ",(0,i.jsx)(n.code,{children:"GetRequest"})," for the item (see GetRequests section below)."]}),"\n",(0,i.jsx)(n.h2,{id:"getrequests",children:"GetRequests"}),"\n",(0,i.jsx)(n.p,{children:'The "GetRequests" mechanism allows retrieving various items through primary or derived keys from peers.'}),"\n",(0,i.jsxs)(n.p,{children:["A peer MAY send a ",(0,i.jsx)(n.code,{children:"GetRequest"})," (see ",(0,i.jsx)(n.code,{children:"Payload::GetRequest"}),") with a ",(0,i.jsx)(n.code,{children:"Tag"})," and ",(0,i.jsx)(n.code,{children:"serialized_id"})," payload. Both ",(0,i.jsx)(n.code,{children:"serialized_id"})," and ",(0,i.jsx)(n.code,{children:"serialized_item"})," MUST be encoded using ",(0,i.jsx)(n.code,{children:"bincode"}),' (see "Encoding" section for details).']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"pub enum Tag {\n    Deploy,\n    FinalizedApprovals,\n    Block,\n    GossipedAddress,\n    BlockAndMetadataByHeight,\n    BlockHeaderByHash,\n    BlockHeaderAndFinalitySignaturesByHeight,\n    TrieOrChunk,\n    BlockAndDeploysByHash,\n    BlockHeaderBatch,\n    FinalitySignaturesByHash,\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The tag dictates which item is being retrieved, and which key (ID type) is being used."}),"\n",(0,i.jsxs)(n.p,{children:["A node that receives a ",(0,i.jsx)(n.code,{children:"GetRequest"})," from a peer SHOULD return a ",(0,i.jsx)(n.code,{children:"GetResponse"})," (see ",(0,i.jsx)(n.code,{children:"Payload::GetResponse"}),"). The ",(0,i.jsx)(n.code,{children:"GetResponse"})," MUST use the same ",(0,i.jsx)(n.code,{children:"Tag"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"pub enum FetchedOrNotFound<T, Id> {\n    Fetched(T),\n    NotFound(Id),\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the item was found, ",(0,i.jsx)(n.code,{children:"serialized_item"})," MUST contain a serialized ",(0,i.jsx)(n.code,{children:"FetchedOrNotFound::Fetched"})," instance, with the inner value ",(0,i.jsx)(n.code,{children:"T"})," being the item."]}),"\n",(0,i.jsxs)(n.p,{children:["If the item was not found, ",(0,i.jsx)(n.code,{children:"serialized_item"})," MUST contain a ",(0,i.jsx)(n.code,{children:"FetchedOrNotFound::NotFound"})," instance, with the inner value ",(0,i.jsx)(n.code,{children:"Id"})," being the ID found in the originating ",(0,i.jsx)(n.code,{children:"GetRequest"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"A node MUST not send any items to a peer that it itself has not verified."}),"\n",(0,i.jsxs)(n.p,{children:["The following table shows which tag corresponds to which ID and item type. Type definitions for ",(0,i.jsx)(n.code,{children:"DeployHash"})," and ",(0,i.jsx)(n.code,{children:"GossippedAddress"})," can be found earlier in this document, other types are described following this section.  Further details of many of these types can be found in the ",(0,i.jsx)(n.a,{href:"/docs-redux/concepts/serialization-standard",children:"Serialization Standard"}),", but be aware that those docs describe serializing using bytesrepr rather than bincode."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Tag"}),(0,i.jsx)(n.th,{children:"ID type"}),(0,i.jsx)(n.th,{children:"Payload (item) type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Deploy"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DeployHash"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Deploy"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"FinalizedApprovals"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DeployHash"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"FinalizedApprovalsWithId"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Block"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BlockHash"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Block"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"GossipedAddress"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"GossipedAddress"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"GossipedAddress"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BlockAndMetadataByHeight"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"u64"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BlockWithMetadata"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BlockHeaderByHash"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BlockHash"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BlockHeader"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BlockHeaderAndFinalitySignaturesByHeight"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"u64"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BlockHeaderWithMetadata"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TrieOrChunk"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"TrieOrChunkId"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"TrieOrChunk"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BlockAndDeploysByHash"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BlockHash"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BlockAndDeploys"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BlockHeaderBatch"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BlockHeadersBatchId"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BlockHeadersBatch"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"FinalitySignaturesByHash"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BlockHash"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BlockSignatures"})})]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"pub struct Deploy {\n    hash: DeployHash,\n    header: DeployHeader,\n    payment: ExecutableDeployItem,\n    session: ExecutableDeployItem,\n    approvals: BTreeSet<Approval>,\n}\n\nstruct DeployHeader {\n    account: PublicKey,\n    timestamp: u64,\n    ttl: u64,\n    gas_price: u64,\n    body_hash: Digest,\n    dependencies: Vec<DeployHash>,\n    chain_name: String,\n}\n\nenum PublicKey {\n    System,\n    Ed25519(Vec<u8>),\n    Secp256k1(Vec<u8>),\n}\n\nenum ExecutableDeployItem {\n    ModuleBytes {\n        module_bytes: Vec<u8>,\n        args: RuntimeArgs,\n    },\n    StoredContractByHash {\n        hash: [u8; 32],\n        entry_point: String,\n        args: RuntimeArgs,\n    },\n    StoredContractByName {\n        name: String,\n        entry_point: String,\n        args: RuntimeArgs,\n    },\n    StoredVersionedContractByHash {\n        hash: [u8; 32],\n        version: Option<u32>,\n        entry_point: String,\n        args: RuntimeArgs,\n    },\n    StoredVersionedContractByName {\n        name: String,\n        version: Option<u32>,\n        entry_point: String,\n        args: RuntimeArgs,\n    },\n    Transfer { args: RuntimeArgs },\n}\n\nstruct RuntimeArgs(Vec<NamedArg>);\n\nstruct NamedArg(String, CLValue);\n\nstruct CLValue(CLType, Vec<u8>);\n\nenum CLType {\n    Bool,\n    I32,\n    I64,\n    U8,\n    U32,\n    U64,\n    U128,\n    U256,\n    U512,\n    Unit,\n    String,\n    Key,\n    URef,\n    PublicKey,\n    Option(Box<CLType>),\n    List(Box<CLType>),\n    ByteArray(u32),\n    Result { ok: Box<CLType>, err: Box<CLType> },\n    Map { key: Box<CLType>, value: Box<CLType> },\n    Tuple1([Box<CLType>; 1]),\n    Tuple2([Box<CLType>; 2]),\n    Tuple3([Box<CLType>; 3]),\n    Any,\n}\n\nstruct Approval {\n    signer: PublicKey,\n    signature: Signature,\n}\n\nenum Signature {\n    System,\n    Ed25519(Vec<u8>),\n    Secp256k1(Vec<u8>),\n}\n\nstruct FinalizedApprovalsWithId {\n    id: DeployHash,\n    approvals: FinalizedApprovals,\n}\n\nstruct FinalizedApprovals(BTreeSet<Approval>);\n\nstruct Block {\n    hash: BlockHash,\n    header: BlockHeader,\n    body: BlockBody,\n}\n\nstruct BlockHash(Digest);\n\nstruct BlockHeader {\n    parent_hash: BlockHash,\n    state_root_hash: Digest,\n    body_hash: Digest,\n    random_bit: bool,\n    accumulated_seed: Digest,\n    era_end: Option<EraEnd>,\n    timestamp: u64,\n    era_id: u64,\n    height: u64,\n    protocol_version: ProtocolVersion,\n}\n\nstruct EraEnd {\n    era_report: EraReport,\n    next_era_validator_weights: BTreeMap<PublicKey, U512>,\n}\n\nstruct EraReport<VID> {\n    equivocators: Vec<PublicKey>,\n    rewards: BTreeMap<PublicKey, u64>,\n    inactive_validators: Vec<PublicKey>,\n}\n\nstruct ProtocolVersion {\n    major: u32,\n    minor: u32,\n    patch: u32,\n}\n\nstruct BlockBody {\n    proposer: PublicKey,\n    deploy_hashes: Vec<DeployHash>,\n    transfer_hashes: Vec<DeployHash>,\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Custom variable length encoding is used when serializing ",(0,i.jsx)(n.code,{children:"U512"}),", ",(0,i.jsx)(n.code,{children:"U256"})," and ",(0,i.jsx)(n.code,{children:"U128"})," types.  They are encoded in a way equivalent to encoding the following pseudo struct:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"struct Bigint {\n    serialized_length: u8,\n    little_endian_unpadded_bytes: [u8, serialized_length - 1],\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"In other words, the following steps are taken:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"convert the bigint to an array of bytes in little-endian form"}),"\n",(0,i.jsxs)(n.li,{children:["strip the contiguous range of irrelevant padding ",(0,i.jsx)(n.code,{children:"0"})," bytes from the right hand end, if any"]}),"\n",(0,i.jsx)(n.li,{children:"prefix this remaining array with a byte holding the number of remaining bytes + 1, to indicate the length of the final byte array including the length byte itself"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For a description explaining the use of ",(0,i.jsx)(n.code,{children:"TrieOrChunk"}),' and related types, see the "Trie chunking" section.  The relevant types are:']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"struct TrieOrChunkId(u64, Digest);\n\nenum TrieOrChunk {\n    Trie(Bytes),\n    ChunkWithProof(ChunkWithProof),\n}\n\nstruct ChunkWithProof {\n    proof: IndexedMerkleProof,\n    chunk: Bytes,\n}\n\nstruct IndexedMerkleProof {\n    index: u64,\n    count: u64,\n    merkle_proof: Vec<Digest>,\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"BlockHeadersBatchId"})," is used to request multiple ",(0,i.jsx)(n.code,{children:"BlockHeader"}),"s with a single request."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"struct BlockHeadersBatchId {\n    highest: u64,\n    lowest: u64,\n}\n\nstruct BlockWithMetadata {\n    block: Block,\n    finality_signatures: BlockSignatures,\n}\n\nstruct BlockHeaderWithMetadata {\n    block_header: BlockHeader,\n    block_signatures: BlockSignatures,\n}\n\nstruct BlockSignatures {\n    block_hash: BlockHash,\n    era_id: u64,\n    proofs: BTreeMap<PublicKey, Signature>,\n}\n\nstruct BlockAndDeploys {\n    block: Block,\n    deploys: Vec<Deploy>,\n}\n\nstruct BlockHeadersBatch(Vec<BlockHeader>);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"finality-signatures",children:"Finality Signatures"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Payload::FinalitySignature"})," variant is used when broadcasting finality signatures."]}),"\n",(0,i.jsx)(n.p,{children:"A node that is an active validator MUST create and broadcast, i.e. send to all connected peers, a finality signature for every valid block it receives or creates."}),"\n",(0,i.jsx)(n.h2,{id:"trie-chunking",children:"Trie Chunking"}),"\n",(0,i.jsxs)(n.p,{children:["Large trie nodes are split when transferred across the network, according to ",(0,i.jsx)(n.code,{children:"CHUNK_SIZE_BYTES"}),", which is set to 8388608 bytes (8 megabytes). Any trie node that is less than 8388608 in size will be represented by a ",(0,i.jsx)(n.code,{children:"TrieOrChunk::Trie"})," instance."]}),"\n",(0,i.jsxs)(n.p,{children:["Should a trie node be larger than this, a Merkle tree is constructed with ",(0,i.jsx)(n.code,{children:"CHUNK_SIZE_BYTES"})," sized chunks and is identified by the root hash of the resulting tree instead."]}),"\n",(0,i.jsxs)(n.p,{children:["Peers MUST only request chunks. The ",(0,i.jsx)(n.code,{children:"TrieOrChunkId"})," type allows for requesting the n-th chunk of a given trie node. See the ",(0,i.jsx)(n.a,{href:"https://docs.rs/casper-hashing",children:"casper-hashing"})," crate for details."]}),"\n",(0,i.jsxs)(n.p,{children:["A node receiving a ",(0,i.jsx)(n.code,{children:"TrieOrChunk"})," item from a peer MUST validate it by checking the given Merkle proof against the item hash (which is the tree's root hash), before accepting it."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var i=s(96540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);