---
title: Runtime
slug: /runtime
---

# Runtime Economics

The economics of the runtime layer should incentivize efficient allocation of computational resources, primarily CPU time, to users. The Casper 2.0 release has introduced several new economic features:

- A form of [dynamic pricing](#dynamic-gas-pricing) that increments or decrements the gas price in motes for a new era depending on blockchain utilization in the previous era.
- Blocks are structured into [lanes](#lanes-lanes) that can only hold a particular number of transactions of specified types.

These economic features are configurable using chainspec parameters.

<!--TODO add state pruning on this page? -->

## Gas Allocation {#gas-allocation}

Any finite resource on a publicly accessible computer network must be rate-limited, as, otherwise, overuse of this resource is an attack vector \-- a minimal requirement for platform security. However, rate-limiting, implemented on our platform as a simple block gas limit with several lanes, leaves the platform with the problem of fairly and efficiently allocating the [gas](./gas-concepts.md).

We are researching the optimal structure for spot and futures gas markets, and interested readers should consult the relevant [CEPs](https://github.com/casper-network/ceps). In the meantime, this section outlines some basic features of the platform that would underpin any allocation scheme. Currently, gas is allocated according to a first-in, first-out transaction model.

### Consensus before execution & basics of payment {#consensus-before-execution-basics-of-payment}

The Zug and Highway protocols reach consensus on a block before it is executed, introducing a subtle difference from platforms like Ethereum. In addition, transactions sent to a Casper network can only be selected based on claimed rather than used gas.

Additionally, a minimal amount of CSPR must be present in the user account or contract's main purse to cover the payment computation. The community may introduce additional balance checks in the future.

### Costs and limits {#costs-and-limits}

Gas cost is a measure of the relative time used by different primitive operations of the execution engine, which is also assumed to be additive. By additivity, we mean that the time to execute a program is approximately proportional to the sum of gas expended by the opcodes and functions called within the program. Casper assigns gas costs to primitive execution engine opcodes and specific, more complex _host-side_ functions that are callable from within the execution engine context. Gas costs for opcodes and host-side functions are specified in the [chainspec](../glossary/C.md#chainspec) and may vary according to arguments. Read more about how Casper measures computational work [here](../../concepts/design/casper-design.md#measuring-computational-work-execution-semantics-gas).

We expect to refine the current gas cost table to more closely reflect time use, with updates introduced in future upgrades.

### Lanes and gas costs {#lanes}

There are several platform parameters that delineate the sets of transactions that may be included in a valid block:

- **Number of lanes and lane types**
   - System interaction lanes for Mint (transfers) and Auction transactions.
   - WASM lanes serving transactions that carry opaque WASM. These lanes come with different slot sizes. Users need to specify a fixed quantity of gas for a transaction.
   - All lanes can contain some finite number of transactions, set separately for each lane.
   - For a call to a smart contract, the gas cost is always the same (given the transaction category), but the amount of CSPR that gets locked depends also on the gas price at the time.
- **Block gas and size limits**
   - The block gas limit imposes an absolute ceiling on how much gas can be allocated to the occupied slots.
   - The block size limit imposes an absolute ceiling on the total byte size of included transactions.
   - Individual transaction size limits are also enforced.

The lane configuration settings for the Casper 2.0 release on Mainnet is available in the `[transactions.v1]` section of the [chainspec.toml](https://github.com/casper-network/casper-protocol-release/blob/casper/config/chainspec.toml#L202). 
<!--TODO check and update these settings after the launch or link to the chainspec file directly.-->


The block gas and size limits for the Casper 2.0 release on Mainnet is available in the `[transactions]` section of the [chainspec.toml](https://github.com/casper-network/casper-protocol-release/blob/casper/config/chainspec.toml#L183).
<!--TODO check and update these settings after the launch or link to the chainspec file directly.-->


## Dynamic Gas Pricing

A [dynamic gas pricing](./dynamic-gas-pricing.md) system assigns the gas price based on block vacancy (or consumption), preventing malicious actors from flooding the network with useless transactions and ensuring network integrity. Dynamic gas pricing acts as a supply and demand-based check on the cost of network usage. If usage is low, the price multiple drifts down over time, incentivizing casual usage. If usage is high, the price multiple climbs up, incentivizing prioritized usage. Dynamic gas pricing also protects against long-range consumption attacks. An attacker attempting to fill blocks to deny usage drives the price up, which requires them to have increasing amounts of tokens available to cover rising gas costs to maintain their attack.

See [Gas](./gas-concepts.md) for more details.
