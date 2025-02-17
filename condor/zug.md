---
title: Zug consensus in Casper 2.0
description: A discussion of the Zug consensus model
slug: zug
date: 2024-10-03T18:00
authors: [ alexanderlimonov ]
tags: [v2, consensus]
hide_table_of_contents: false
---

## The Zug consensus mechanism
In this article we will break down the Zug consensus mechanism in Casper v2.0

<!-- truncate -->

## Highway
The Highway consensus protocol, developed by CasperLabs, was the first in-house consensus protocol that was deployed with the launch of 1.0 mainnet. 

### Concept
Highway's distinctive feature is the ability to explicitly vary the "speed" of different validators by dynamically altering a parameter that governs which and how many rounds they participate in within an era.

### Limitations with Highway
Highway is highly complex and opaque. It is difficult to develop a good intuition for how the internal state of the protocol evolves. Additionally, the ability to vary validators "speed" was likely of limited benefit, since, in practice, the maximum "speed" (i.e., block time) was set conservatively.

## Zug
Due to limitations of Highway, a simpler protocol, called Zug, was developed. Its internal state is much simpler, allowing the same number of validators to quickly reach consensus with fewer messages.

### How Zug works
The Zug protocol can be summarized as follows:

* In every round, the round leader proposes a new block, `B`.
* Every validator creates and broadcasts an _echo_ message, with a signature of `B`.
* When a suitable block `B` has received echoes from 67% of the validators:
    * The next round begins. The next leader can propose a child of `B`.
    * Every validator signs and broadcasts a _vote_ message, voting `yes`.
* If this does not happen before a timeout, the validators vote `no` instead.
    * If there are `no` votes from 67%, the next round begins, too.
      The next leader can propose a child from an earlier block and skip this round.
* If there are `yes` votes from 67%, `B` is finalized and gets executed, together with all its ancestors. (Usually, the next round has already started at this point.)


Notice that proposals, votes, and echoes are broadcast, so if one correct node receives a message, all nodes will eventually receive it. An honest validator sends only one echo or vote per round. So, unless 34% of validators double-sign, at most one block per round gets 67% echoes, and no finalized block can ever be skipped, ensuring safety. As long as there are 67% of echoes for a proposal, the next round begins and Zug doesn't get stuck. If there are not, everyone votes `no`, and the next round also begins.

## Impact on validator set size
Because Zug has a smaller communication overhead, it may allow an increase in the size of the validator set.

### Summary
The adoption of the Zug protocol represents a leap for ward for the Casper network in terms of efficiency and extensibility. 

