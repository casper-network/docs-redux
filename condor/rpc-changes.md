---
title: JSON RPC Changes in Casper 2.0
description: A discussion of the changes to the JSON RPC in Casper v2.0
slug: jsonrpc
date: 2024-10-06T18:00
authors: [ melpadden ]
tags: [v2, json-rpc]
hide_table_of_contents: false
---

# Casper 1.X -> Casper 2.0 :: JSON-RPC API changes  

## Introduction

This article is intended for developers consuming the Casper 2.0 JSON RPC, such as dApp developers, SDK developers, or others relying on the JSON-RPC API. In this article we examine the JSON-RPC  and break down the differences between v1.5.6 and v2.0.0.

Since the network's inception, the Casper node has exposed an API over HTTP, using JSON, which is known as the JSON-RPC. This API allows client software such as dApps and SDKs to communicate and interact with the node, giving access to query node state, chain state, balance details and other information, as well as to write information to the chain by submitting transactions.  

<!-- truncate -->

## Changes for v2.0

### Casper Sidecar

One of the major changes in the v2.0 upgrade is the new [casper-sidecar](https://github.com/casper-network/casper-sidecar). The sidecar runs in a **dedicated** process and and is bound to a node's binary port and/or SSE port.  The sidecar assumes **all** responsibility for running the JSON-RPC server and exposing the JSON-RPC endpoints to the internet, i.e. the node software itself no longer exposes a JSON RPC API to the consumer - <u>this job is now done by the sidecar</u>.  

Because the sidecar runs in a dedicated process, it is possible to run a sidecar upon a different machine to the node.  However in practice, most node operators will likely operate a sidecar process on the same machine as the node.  Furthermore an operator's deployment setup is opaque to to a DApp that interacts with the JSON-RPC API via an SDK.  

There are several benefits to moving the JSON-RPC API to a sidecar:  
- The JSON-RPC API can now evolve independently of the node  
- A node operator now has a finer degree of control over their operational setup
- The sidecar reduces the amount of work that the node itself has to do, thereby simplifying the deployment of alternative node implementations (e.g. mojo, go, zig, c++)

### Node Binary Port

The Casper 2.0 Node now exposes a pure Binary Port API, which allows connection over TCP/IP and pure binary serialization for your remote procedure calls.  Depending on your use case, you may be interested in considering this option for interacting with Casper v2.0. In general, the binary port offers better performance and features compared to the JSON RPC.  A detailed discussion of the Binary Port will be contained in a future article.  It is anticipated that all SDKs will be updated so as to support the new Binary Port API.

#### JSON-RPC Differences  

The biggest immediately obvious change in the RPC is the change in name from deploy to transaction.  Casper 1.X used the name "deploy" for a unit of work submitted to the blockchain, in Casper 2.0 a unit of work is now renamed as "Transaction". 

### JSON-RPC Schema Definitions

See [here](./jsonrpc-comp/rpc-1.5/schema.json.md) for Casper 1.5 node JSON-RPC.

See [here](./jsonrpc-comp/rpc-2.0/schema.json.md) for Casper 2.0 node JSON-RPC.

## Table of v1.5 & v2.0 JSON-RPC API differences

| Function in v1.5                                                                                        | Function in v2.0                                                                                        | Remarks                                                                                        |
|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [account_put_deploy](./jsonrpc-comp/rpc-1.5/account_put_deploy.json.md)                                 | [account_put_transaction](./jsonrpc-comp/rpc-2.0/account_put_transaction.json.md)                       | [Renamed](./jsonrpc-comp/account_put_transaction.md)                                           |  
| [chain_get_block_transfers](./jsonrpc-comp/rpc-1.5/chain_get_block_transfers)                           | [chain_get_block_transfers](./jsonrpc-comp/rpc-2.0/chain_get_block_transfers.json.md)                   | Unchanged                                                                                      |
| [chain_get_block](./jsonrpc-comp/rpc-1.5/chain_get_block.json.md)                                            | [chain_get_block](./jsonrpc-comp/rpc-2.0/chain_get_block.json.md)                                       | [Now returns Block with Signatures](./jsonrpc-comp/chain_get_block.md)                         |
| [chain_get_era_info_by_switch_block](./jsonrpc-comp/rpc-1.5/chain_get_era_info_by_switch_block.json.md) | [chain_get_era_info_by_switch_block](./jsonrpc-comp/rpc-2.0/chain_get_era_info_by_switch_block.json.md) | Unchanged                                                                                      |
| [chain_get_era_summary](./jsonrpc-comp/rpc-1.5/chain_get_era_summary.json.md)                           | [chain_get_era_summary](./jsonrpc-comp/rpc-2.0/chain_get_era_summary.json.md)                           | Unchanged                                                                                      |
| [chain_get_state_root_hash](./jsonrpc-comp/rpc-1.5/chain_get_state_root_hash.json.md)                   | [chain_get_state_root_hash](./jsonrpc-comp/rpc-2.0/chain_get_state_root_hash.json.md)                   | Unchanged                                                                                      |
| [info_get_chainspec](./jsonrpc-comp/rpc-1.5/info_get_chainspec.json.md)                                 | [info_get_chainspec](./jsonrpc-comp/rpc-2.0/info_get_chainspec.json.md)                                 | Unchanged                                                                                      |
| [info_get_deploy](./jsonrpc-comp/rpc-1.5/info_get_deploy.json.md)                                       | [info_get_transaction](./jsonrpc-comp/rpc-2.0/info_get_transaction.json.md)                             | [Renamed](./jsonrpc-comp/info_get_transaction.md)                                              |
| [info_get_peers](./jsonrpc-comp/rpc-1.5/info_get_peers.json.md)                                         | [info_get_peers](./jsonrpc-comp/rpc-2.0/info_get_peers.json.md)                                         | Unchanged                                                                                      |
| [info_get_status](./jsonrpc-comp/rpc-1.5/info_get_status.json.md)                                       | [info_get_status](./jsonrpc-comp/rpc-2.0/info_get_status.json.md)                                       | Latest [switch block hash](./jsonrpc-comp/rpc-2.0/schema/BlockHash.json.md) included in result |
| [info_get_validator_changes](./jsonrpc-comp/rpc-1.5/info_get_validator_changes.json.md)                 | [info_get_validator_changes](./jsonrpc-comp/rpc-2.0/info_get_validator_changes.json.md)                 | Unchanged                                                                                      |
| [query_balance](./jsonrpc-comp/rpc-1.5/query_balance.json.md)                                           | [query_balance](./jsonrpc-comp/rpc-2.0/query_balance.json.md)                                           | Unchanged                                                                                      |
|                                                                                                         | [query_balance_details](./jsonrpc-comp/rpc-2.0/query_balance_details.json.md)                           | Added                                                                                          |
| [query_global_state](./jsonrpc-comp/rpc-1.5/query_global_state.json.md)                                 | [query_global_state](./jsonrpc-comp/rpc-2.0/query_global_state.json.md)                                 | Unchanged                                                                                      |
| [state_get_account_info](./jsonrpc-comp/rpc-1.5/state_get_account_info.json.md)                         | [state_get_account_info](./jsonrpc-comp/rpc-2.0/state_get_account_info.json.md)                         | Unchanged                                                                                      |
| [state_get_auction_info](./jsonrpc-comp/rpc-1.5/state_get_auction_info.json.md)                         | [state_get_auction_info](./jsonrpc-comp/rpc-2.0/state_get_auction_info.json.md)                         | Unchanged                                                                                      |
| [state_get_balance](./jsonrpc-comp/rpc-1.5/state_get_balance.json.md)                                   | [state_get_balance](./jsonrpc-comp/rpc-2.0/state_get_balance.json.md)                                   | [Balance now reflects all active holds](./jsonrpc-comp/state_get_balance.md)                   |
| [state_get_dictionary_item](./jsonrpc-comp/rpc-1.5/state_get_dictionary_item.json.md)                   | [state_get_dictionary_item](./jsonrpc-comp/rpc-2.0/state_get_dictionary_item.json.md)                   | Unchanged                                                                                      |
| [state_get_item](./jsonrpc-comp/rpc-1.5/state_get_item.json.md)                                         | [state_get_entity](./jsonrpc-comp/rpc-2.0/state_get_entity.json.md)                                     | Renamed                                                                                        |


---
## Summary

The major changes in the JSON-RPC between v1.5.6 and v2.0.0 are:

- The [casper-sidecar](https://github.com/casper-network/casper-sidecar) is now responsible for serving the JSON-RPC API.
- The sidecar may also expose the Server Side Events API, this is of some relevance to developers relying upon the Casper Event Standard (CES).
- Deploys are now called Transactions as per the industry norm.  There are differences in the representation of these data structures.
