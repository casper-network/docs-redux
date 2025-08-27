---
title: Installation
---

# Installing a Node

Ensure the requirements listed in the following sections are met before you start setting up the node on the network, either on Mainnet or Testnet.

## Network Requirements {#network-requirements}

The following ports are used by the node:

- 35000 (required to be externally visible)
- 7777 RPC endpoint for interaction with JSON-RPC API. (The default port for JSON-RPC server, is now served by Casper Sidecar from Casper 2.0 onwards)
- 8888 REST endpoint for status and metrics (having this accessible allows your node to be part of network status)
- 9999 SSE endpoint for event stream

Of these `35000` is the only port required to be open for your node to function, however, opening `8888` will allow others to know general network health. For more details, see the additional information on [Node Endpoints](./node-endpoints.md).

## Operating System Requirements
The recommended OS version is Ubuntu 22.04, Ubuntu 24.04 or Debian 13.
The current binary build OS is Ubuntu 22.04 and a Debian based system with Clib equal to or newer than the build system will work.

## Required Clean Up

If you were running a previous node on this box, this will clean up state. If packages are not installed, the `apt remove` may give errors, but this is not a problem.

```bash
sudo /etc/casper/node_util.py stop
sudo apt remove -y casper-client
sudo apt remove -y casper-node
sudo apt remove -y casper-node-launcher
sudo rm /etc/casper/casper-node-launcher-state.toml
sudo rm -rf /etc/casper/1_*
sudo rm -rf /etc/casper/2_*
sudo rm -rf /var/lib/casper/*
```

## Required Packages

The following commands will set up the Casper repository for packages:

```bash
sudo mkdir -m 0755 -p /etc/apt/keyrings/
sudo curl https://repo.casper.network/casper-repo-pubkey.gpg --output /etc/apt/keyrings/casper-repo-pubkey.gpg
echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/casper-repo-pubkey.gpg] https://repo.casper.network/releases jammy main" | sudo tee -a /etc/apt/sources.list.d/casper.list
sudo apt update
```
We are creating `/etc/apt/keyrings` if needed, so we don't have the issue with this key being trusted by all APT requests if stored in `/etc/apt/trusted.gpg.d`.

## Required Tools

```bash
sudo apt install -y casper-client casper-node-launcher casper-sidecar jq
```

## Enable Bash Auto-Completion for `casper-client` (Optional)

```bash
sudo casper-client generate-completion
```

It defaults to `bash` but can be changed with the `--shell` argument:
```bash
--shell <STRING>    The type of shell to generate the completion script for [default: bash]  [possible values:
                            zsh, bash, fish, powershell, elvish]

sudo casper-client generate-completion --shell bash
```

You need to source the new auto completion script or log out and log in again to activate it for the current shell:
```bash
source /usr/share/bash-completion/completions/casper-client
```

Now you can use `casper-client` and press the `tab` key to get auto completion for your commands.

## Required Number of Open Files

Before beginning, [update the maximum open files limit](./open-files.md) for your system. Specifically, update the node's `/etc/security/limits.conf` file as described [here](./open-files.md#updating-limits-conf), to ensure proper node operation.

## Installing All Protocols

On **Mainnet**, run:

```bash
sudo -u casper casper-node-util stage_protocols casper.conf
```

On **Testnet**, run:

```bash
sudo -u casper casper-node-util stage_protocols casper-test.conf
```

## Validator Keys

If you do not have keys yet, you can create them using the following command:

```bash
sudo -u casper casper-client keygen /etc/casper/validator_keys
```

For more details, see the [Node Setup](./basic-node-configuration.md#create-fund-keys) page.

## Getting a Trusted Hash

In the past, we have used a lower `trusted_hash`. Connecting at the tip, we now use as high of a `trusted_hash` as possible. Find out more about [Fast Sync](./fast-sync.md).

### Node Address

NODE_ADDR can be set to an IP of a trusted node, or to Casper Association public nodes

You can find active peers at https://cspr.live/tools/peers or use the following Casper Association's public nodes:

* Testnet - NODE_ADDR=https://node.testnet.casper.network/rpc

* Mainnet - NODE_ADDR=https://node.mainnet.casper.network/rpc

### Protocol Version

Protocol version should be set to the largest available protocol version you see in `ls /etc/casper`.  As of writing this, it was 2_0_0:

```bash
PROTOCOL=2_0_0
```

### Load `trusted_hash` in Config.toml of the Protocol Version

The following command uses the previously established NODE_ADDR and PROTOCOL to load the `trusted_hash`:

```bash
NODE_ADDR=https://node.mainnet.casper.network/rpc
PROTOCOL=2_0_0
sudo sed -i "/trusted_hash =/c\trusted_hash = '$(casper-client get-block --node-address $NODE_ADDR | jq -r .result.block_with_signatures.block.Version2.hash | tr -d '\n')'" /etc/casper/$PROTOCOL/config.toml
```

## Syncing to Genesis

In the latest protocol version's *Config.toml*, you will find the option `sync_handling`. By default, this value will be set to `ttl`, which means the node will attempt to acquire all block data to comply with time to live enforcement, but will not attempt to sync all the way back to genesis.

**If you are planning to run a validator node, leave this option at the default value of `ttl`**; this will increase node performance.

If you are using the node for historical data and want to query back to genesis, then this option should be changed to:

```bash
sync_handling = genesis
```

DB archives are made of networks and if you are launching an archival node, requesting these from Casper will make node setup much faster. Historical block syncing is the lowest priority in network operation and take more time as the chain grows.

## Starting the Node

Start the node using the following commands:

```bash
sudo casper_node_util start
``` 

### Monitoring the Synchronization Process

The following command will display the node synchronization details:

```bash
casper_node_util watch
```

```bash
Last Block: 5473886 (Era: 19015)
Peer Count: 125
Uptime: 7days 15h 52m 32s
Build: 2.0.3-4c7068d
Key: 01b08d9184ec9daed7f1d2766674746d6cd8460ca6e0274fa48d01c3ded165da4c
Next Upgrade: None

Reactor State: KeepUp
Available Block Range - Low: 0  High: 5473886

● casper-node-launcher.service - Casper Node Launcher
     Loaded: loaded (/usr/lib/systemd/system/casper-node-launcher.service; enabled; preset: enabled)
     Active: active (running) since Wed 2025-08-13 20:41:05 UTC; 1 week 0 days ago
       Docs: https://docs.casper.network
   Main PID: 76968 (casper-node-lau)
      Tasks: 8 (limit: 18921)
     Memory: 10.2G (peak: 11.0G)
        CPU: 1d 17h 2min 43.802s
     CGroup: /system.slice/casper-node-launcher.service
             ├─76968 /usr/bin/casper-node-launcher
             └─76971 /var/lib/casper/bin/2_0_3/casper-node validator /etc/casper/2_0_3/config.toml

Aug 13 20:41:05 ip-10-0-5-211 systemd[1]: Started casper-node-launcher.service - Casper Node Launcher.
```

The reactor state will be in CatchUp mode until it acquires the full tip state, at which point it will shift to KeepUp mode. If you left `sync_to_genesis` as `true`, it will begin syncing back history at this time.

Seeing available block range - Low: 0 High: 0 is normal until the fill tip is downloaded. You can see download progress with a look at metrics:

```bash
$ curl -s 127.0.0.1:8888/metrics | grep trie_or_chunk
# HELP trie_or_chunk_fetch_total number of trie_or_chunk all fetch requests made
# TYPE trie_or_chunk_fetch_total counter
trie_or_chunk_fetch_total 102647
# HELP trie_or_chunk_found_in_storage number of fetch requests that found trie_or_chunk in local storage
# TYPE trie_or_chunk_found_in_storage counter
trie_or_chunk_found_in_storage 0
# HELP trie_or_chunk_found_on_peer number of fetch requests that fetched trie_or_chunk from peer
# TYPE trie_or_chunk_found_on_peer counter
trie_or_chunk_found_on_peer 102263
# HELP trie_or_chunk_timeouts number of trie_or_chunk fetch requests that timed out
# TYPE trie_or_chunk_timeouts counter
trie_or_chunk_timeouts 0
```

If the node is not showing active (running) status, it is either stopped or in the process of restarting.
Indexing of the DB on startup can take some time if the node is archival.

### Monitoring the Running Node

The community has created a few tools to monitor your node once it is running, such as:

- Status.py: https://github.com/RapidMark/casper-tools
- Grafana: https://github.com/matsuro-hadouken/casper-tools

## A Note on Speculative Execution

The `speculative_exec_server` defaults to off and can be enabled in your *Config.toml* file.

While this is a useful tool, understand that it is also an attack vector for a node.  The intent is for someone to run on their node as a tool. You ***should not*** use this if you are an active validator, as requests into this port can block execution_engine processing for legitimate network traffic.
