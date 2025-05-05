---
title: OpCode Costs Tables
---

# OpCode Costs

The [list](https://github.com/casper-network/casper-protocol-release/blob/casper/config/chainspec.toml#L240) in the [chainspec.toml](https://github.com/casper-network/casper-protocol-release/blob/casper/config/chainspec.toml) outline the cost, in motes, for a given operation on Casper's Mainnet. 

For each opcode cost there exists a static cost and a dynamic cost.
The static cost is a **fixed cost for each opcode that is hardcoded** and **validated by benchmarks**.

If you are building for a private network or other instance of Casper, you will need to verify these costs in the associated `chainspec.toml`.


:::note

All costs in this table are in [motes](/concepts/glossary/M/#motes), not CSPR.
<!--TODO update the link when 2.0 ships to Testnet/Mainnet. -->
:::

