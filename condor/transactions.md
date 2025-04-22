---
title: Transactions in Casper 2.0
description: A discussion of the new Transaction data type
slug: transactions
date: 2024-10-03T18:00
authors: [ asladeofgreen ]
tags: [v2, smartcontracts]
hide_table_of_contents: false
---

## Transactions in Casper v2.0

In this article we will examine user transactions (previously called deploys) [I AM NOT SURE ABOUT THIS WORDING].  More specifically we will review the expanded set of transaction types and how they are processed by the node's execution engine.

<!-- truncate -->

## Transaction Types

[I BELIEVE THIS DOCUMENT CONFLATES THE IDEA OF A TRANSACTION AND THE IDEA OF A SPECIFIV TRANSACTIONV1 VARIANT OF A TRANSACTION]
Transactions encapsulate user intents.  For example, if Alice intends to transfer CSPR to Bob, she uses software (e.g. a wallet) to construct and sign a transaction that is subsequently dispatched to a trusted node for processing by the network.

Transactions may be either 'native' or 'custom':

- Native transactions are those that interact with system contracts such as mint and/or auction.  They do not require any WASM payload to be constructed,  are normally compact in size, and are processed directly on the metal, i.e. host-side.

- Custom transactions are those that interact with the system via either on-chain smart contracts or in-line session logic.  All such interactions are based upon user-defined WASM binaries, and are executed within one of the node's supported virtual machines.

In Casper 1.0 there was a single native transaction type (Transfer), and a set of custom transaction types (ContractByHash, ContractByHashVersioned, ContractByName, ContractByNameVersioned, ContractBytes). In Casper 2.0 the set of both native & custome transaction types have been expanded.

Casper 2.0 Native Transaction Types:

- System.Mint.Transfer
- System.Mint.Burn
- System.Auction.Bid.Submit
- System.Auction.Bid.Withdraw
- System.Auction.Delegation.Redelegate
- System.Auction.Delegation.Submit
- System.Auction.Delegation.Withdraw
- System.Auction.Staking.Submit
- System.Auction.Staking.Withdraw
[THERE ARE MORE AUCTION TRANSFER V1 TYPES CURRENTLY]

Not all work is identical, e.g. a base token (cspr) transfer differs from a smart contract execution.  

Casper 1.0 supported a set of 6 transaction types, in Casper 2.0 the set is both refined and expanded.

The Transaction stat type has a number of changes from its predecessor, the Deploy. For a detailed discussion of these differences you can see the casper documentation of this discussion of the JSON schema. 


