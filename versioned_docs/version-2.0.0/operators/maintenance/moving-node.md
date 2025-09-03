---
title: Move a Node
---

#  Moving a Validating Node

This guide is for active validators who want to move their node to another machine.

## Setup two nodes running in parallel

This method limits downtime and enables a smooth transition from the old to the new node. It keeps the node in sync with the tip of the chain. 

Existing node should be running and in sync with network. We will call this `old node`. It is using your active `validator key`. 
Create a second node (`new node`) on another machine. This should sync with the network as `ttl`. This server needs a new key when started, we will call this `backup key`.

Important: You NEVER want to run two nodes using the same validator key. Our swap procedure will always stop a node running validator key first.

### Preparation of keys on both nodes

Prepare to swap keys by following these steps:

    - Create the following folder structure on both nodes under the `/etc/casper/validator_keys/` directory.
    - Create subdirectories for the `validator` and `backup`.
    - Copy each node's keyset under the corresponding directories.

```bash
    /etc/casper/validator_keys/
    ├── public_key.pem
    ├── public_key_hex
    ├── secret_key.pem
    ├── validator
    │   ├── public_key.pem
    │   ├── public_key_hex
    │   └── secret_key.pem
    └── backup
    |   ├── public_key.pem
    |   ├── public_key_hex
    |   └── secret_key.pem
```

By having both keys available, we can swap back if we have any issues.

This setup allows key swapping by running the `sudo -u casper cp * ../` command, as shown below.

After creating the keys, check and fix file permissions by running `casper-node-util check_premissions` and use `sudo casper-node-util fix_permissions` if needed.

### Swapping the keys

To swap keys, we want the node to be stopped first. 

```bash
sudo /etc/casper/node_util.py stop
```

To enable a node to run as validator, we want to copy keys from `validator` directory.

```bash
    cd /etc/casper/validator_keys/validator
    sudo -u casper cp * ../
```

To enable a node to run as backup, we want to copy keys from `backup` directory.

```bash
    cd /etc/casper/validator_keys/backup
    sudo -u casper cp * ../
```

### Timing of swap for consensus

With Zug consensus, all needed state is persisted to the DB. This allows full network resume if all validators were stopped and started again. This does not
allow moving consensus state as easy as moving unit_files. We are working on a utility to export this and allow importing on new node.

If a node is moved without this data and started too soon, we get a situation where the new node signs blocks previously signed. This causes issues.

The best method to swap currently uses the Era boundaries to isolate finality signature sending.

This will describe how to manually find the last switch block time. 

We will use the `get-era-summary` command in the `casper-client` to find the last switch block. Then get the block to find the time. 
The commands will be shown separated, in case the give errors. If everything works, the single command at the end will give you the time.

```bash
$ casper-client get-era-summary | jq -r .result.era_summary.block_hash
2487f80a5b1aed5bd36e19f1ccad075a277d5159319da14b07c3d3d954d269dc
```

We can take the block_hash (2487f80a5b1aed5bd36e19f1ccad075a277d5159319da14b07c3d3d954d269dc) to get that block and timestamp.

```bash
$ casper-client get-block -b 2487f80a5b1aed5bd36e19f1ccad075a277d5159319da14b07c3d3d954d269dc | jq -r .result.block_with_signatures.block.Version2.header.timestamp
2025-09-03T13:15:58.738Z
```

This can be combined into a single command:

`casper-client get-block -b $(casper-client get-era-summary | jq -r .result.era_summary.block_hash | tr -d '/n') | jq -r .result.block_with_signatures.block.Version
2.header.timestamp`

Time of the era will be 2 hours after this time.  Current time in the same format can be shown with `date -Is`.

We want to start the change over just before the era transition.

### Swap operation

Starting at 5 minutes before era transition.  Stop both nodes with:

`sudo /etc/casper/node_util.py stop`

We do not want to start again until after the Era transition, but we can prepare.

On the `old node` we replace the validator key, so if it restarts we do not have two of the same keys running.

```bash
    cd /etc/casper/validator_keys/backup
    sudo -u casper cp * ../
```

On the `new node` we setup the validator key.

```bash
    cd /etc/casper/validator_keys/validator
    sudo -u casper cp * ../
```

Wait until the era transitions past the switch block. This can be monitored using the appropriate `cspr.live` website for the network.

Start the `new node`:

`sudo /etc/casper/node_util.py start`

Start the `old node` if you want it as a backup.
