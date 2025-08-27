---
title: Join a Network
---

# Joining a Running Network

Each Casper network is permissionless, enabling new validators to join the network and provide additional security to the system. This page outlines the sequence of recommended steps to spin up a validating node and join an existing network.

## Step 1: Provisioning Hardware {#step-1-provision-hardware}

Visit the [Hardware Specifications](./hardware.md) section and provision your node hardware.

## Step 2: Setting Up the Node {#step-2-set-up-the-node}

Follow the instructions on the [Node Setup](./install-node.md) page. 

## Step 3: Creating and Fund Keys for Bonding {#step-3-create--fund-keys-for-bonding}

See the [Node Setup](./basic-node-configuration.md#create-fund-keys) instructions if you have not generated a validator key. This lives in `/etc/casper/validator_keys`.
This will need funded to allow bonding.

## Step 4: Updating the Trusted Hash {#step-5-update-the-trusted-hash}

The node's `config.toml` needs to be updated with a recent trusted hash. 

See the [Trusted Hash for Synchronizing](./basic-node-configuration.md#trusted-hash-for-synchronizing) instructions if you have not set up a trusted hash during node installation.

## Step 5: Setting sync mode

The default mode in config for sync is `ttl`. Available options are listed as comments in the `config.toml`. The only sync modes for an operating node are `nosync`, `ttl`, or `genesis`.

`ttl` syncs the Time To Live data, which is the minimum history needed to operate as a validator. `nosync` would need to wait for the ttl period to get this history until possible to transition into `Validate`.

The sync condition needs to be met before it is possible to transition from `KeepUp` to `Validate`. There are two reasons why `ttl` is recommended for a validator.

### Improved performance of caching

`ttl` sync reduces disk space drastically compared to a `genesis` sync archive mode. This improves performance of LMDB DB as it is memory cached and gives higher probablity of cache hits.

### Dangers of `genesis` sync archival validators

A node must sync to the tip of the chain and be in `KeepUp` state before transitioning to `Validate` state. However, prior to this transition, the historical sync operation must complete.

With a `ttl` node this is the minimum state required to operate as a validator. Even if a node has been shut down for some time, acquiring this data is generally fast.

If a node is in `genesis` sync mode, the historical state required is all the way back to the highest block previously synced. The node cannot transition to `Validate` mode until the full historical sync is complete. Historical sync is deprioritized, so this can cause a considerable delay in getting back operational as a validator after prolonged downtime.

## Step 5: Confirming the Node is Synchronized {#step-5-confirm-the-node-is-synchronized}

The `casper-node-util watch` command gives display of current node status. And example output is given on the  [Node Setup](./basic-node-configuration.md#create-fund-keys) page.

The node has a reactor state machine displayed as `Reactor State:` in the `watch` command. This is coming from the `localhost:8888/status` endpoint.

Full status endpoint output can be seen with: `curl localhost:8888/status | jq`. We are piping to `jq` for clean `json` output.

## Step 6: Sending the Bonding Request {#step-6-send-the-bonding-request}

You can submit a [bonding request](../becoming-a-validator/bonding.md) to change your synchronized node to a validating node.

The bonding request must be sent after the node has synchronized the protocol state and linear blockchain to avoid being ejected for liveness failures.
