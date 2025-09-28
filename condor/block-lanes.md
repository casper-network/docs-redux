---
title: Casper v2.0 Block Lanes
description: Introduction to Block Lanes in the Casper v2.0 Release 
slug: block-lanes
date: 2025-04-28T22:00
authors: [ core-team ]
tags: [v2]
hide_table_of_contents: false
---

In Casper 2.0 as part of the changes to the block structure, the body of the block now contains several distinct lanes which contain different transaction variants. Each lane has the following five properties:

An identifier for the lane represented as number, this identifier is simply a label. However, the system does reserve the 0 and 1 lane identifiers for native mint and auction interactions respectively.
1. Max serialized length of the entire transaction in bytes for a given transaction in a certain lane
2. Max args length size in bytes for a given transaction in a certain lane
3. Transaction gas limit for a given transaction in a certain lane
4. The maximum number of transactions the lane can contain

In 2.0, there are three distinct systemic lanes - lanes that must be present and defined. These required lanes are for native transactions (e.g., native transfer and native add-bid), and for the installation and upgrading of stored Wasm. In addition to these three lanes, a Casper network can be set up with a range of user-defined lanes for Wasm transactions. The number of user defined lanes is specific to a given network and is defined in the chainspec for that given network.

The assignment of a given transaction is determined by comparing the transaction's properties against those of a specific lane. If any of the transaction's properties exceed the lane's specified limits, the transaction is deemed ineligible to be part of that lane. It should be noted that during lane determination, the gas limit is determined based on the pricing mode.

In payment-limited mode, the gas limit for a given transaction is determined by the payment amount as specified by the user.
In fixed mode, lane determination first estimates the lane based on the size of the transaction, measured in bytes, and the additional computational factor as specified by the user.