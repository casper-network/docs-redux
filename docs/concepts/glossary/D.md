# D

---

[A](./A.md) [B](./B.md) [C](./C.md) [D](./D.md) [E](./E.md) [F](./F.md) [G](./G.md) [H](./H.md) [I](./I.md) [J](./J.md) [K](./K.md) [L](./L.md) [M](./M.md) [N](./N.md) [O](./O.md) [P](./P.md) [Q](./Q.md) [R](./R.md) [S](./S.md) [T](./T.md) [U](./U.md) [V](./V.md) [W](./W.md) [X](./X.md) [Y](./Y.md) [Z](./Z.md)

---

## dApp {#dapp}

A decentralized application (dApp) employs [smart contracts](./S.md#smart-contract) installed on a decentralized peer-to-peer network such as a blockchain.

## Delegation rate {#delegation-rate}

Node operators ([validators](./V.md#validator)) define a delegation rate that they take in exchange for providing staking services. This delegation rate is a percentage of the rewards that the node operator retains for their services.

## Delegator {#delegator}

Delegators are users who participate in the platform's security by delegating their tokens to validators (which adds to their weight) and collecting a part of the rewards proportional to their delegations, net of a cut ("delegation rate") that is collected by the validator.

## Deploy {#deploy}

Deploys are units of work when executed cause global state to be altered. Deploys can contain Wasm to be executed and/or Wasm to be stored on chain. Among many examples, Deploys can transfer tokens from one Account's purse to another, reward node validation, or execute Wasm on the network.

Casper 2.0 release introduces the [Transaction](./T.md#transaction). Legacy deploys are a subset of the new transaction architecture and, in most cases, will continue to function as expected.

All deploys on a Casper network can be broadly categorized as some unit of work that, when executed and committed, affects change to the [global state](./G.md#global-state).

Review the [deploy data structure](../serialization/structures.md#serialization-standard-deploy) and the [deploy implementation](https://github.com/casper-network/casper-node/blob/master/node/src/types/deploy.rs#L475) for more details.

## Dictionary {#dictionary}

A `Dictionary` is a storage data structure on a Casper network. Dictionaries represent a more efficient and scalable form of data storage when compared to [`NamedKeys`](./N.md#named-keys).

More information can be found in the [Reading and Writing to Dictionaries](../dictionaries.md) document.

## Dynamic gas pricing {#dynamic-gas-pricing}

Dynamic gas pricing acts as a supply and demand-based check on the cost of network usage. If usage is low, the price multiple drifts down over time, incentivizing casual usage. If usage is high, the price multiple climbs up, incentivizing prioritized usage. Find more details [here](../economics/dynamic-gas-pricing.md).