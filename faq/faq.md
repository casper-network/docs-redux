---
title: "Casper Network - Frequently Asked Questions"
description: "Comprehensive FAQ covering Casper Network for smart contract developers, validators, operators, and users."
tags: ["Casper", "FAQ", "Validators", "Smart Contracts", "dApps", "Casper Wallet", "Node Operators"]
---

# ❓ Casper Network FAQ

This FAQ addresses common questions from smart contract developers, dApp builders, node operators, validators, and retail users within the Casper Network ecosystem. The answers aim to provide both clarity and guidance for newcomers and experienced participants in the network.

---

## 🧑‍💻 Developer & dApp FAQ

### 1. How do I install `casper-sidecar` on Ubuntu/Debian?

`casper-sidecar` is a companion service to a Casper node that improves performance and scalability by offloading event broadcasting and offering enhanced client-facing features. While typically run alongside a node, it can also operate remotely. To install it on a Debian-based system, follow these steps:

```bash
sudo mkdir -m 0755 -p /etc/apt/keyrings/

sudo curl https://repo.casper.network/casper-repo-pubkey.gpg --output /etc/apt/keyrings/casper-repo-pubkey.gpg

echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/casper-repo-pubkey.gpg] https://repo.casper.network/releases focal main" | sudo tee -a /etc/apt/sources.list.d/casper.list

sudo apt update

sudo apt install casper-sidecar
```

This sequence of commands downloads and stores the Casper repository’s public GPG key, adds the repository to your system’s sources list, updates your package index, and installs the `casper-sidecar` service.

---

### 2. Where can I learn about serialization of transaction payloads?

Serialization is the process of converting complex data into a format that can be transmitted or stored and reconstructed later. Casper uses specific serialization methods for transactions and payloads.

You can explore serialization concepts in the official documentation:  
🔗 [Serialization – Casper Docs](https://docs.casper.network/concepts/serialization)

You can also refer to the JavaScript SDK for practical examples:  
🔗 [casper-js-sdk](https://www.npmjs.com/package/casper-js-sdk)

---

### 3. What causes an "invalid transaction" when using Casper Wallet?

An "invalid transaction" error typically occurs when your system time is not synchronized with the standard internet time. 

Casper's transactions include timestamps, and if the timestamp on your transaction is too far from the network's time, it will be rejected.

✅ Make sure your system clock is set to automatically sync with an NTP (Network Time Protocol) server.

---

### 4. How do I check if a transaction was successful?

Once a transaction is submitted, you can check its status via the node RPC or via explorer tools.

Look for the following field in the JSON response when checking via the node RPC:

```json
result.execution_info.execution_result.Version2.error_message
```

If `error_message` is `null` or empty, it means the transaction executed successfully. If it's populated, it will provide the reason for failure.

You can also search for the transaction by its hash on [CSPR.live](https://cspr.live)

---

### 5. Where can I find Casper 2.0 RPC schema?

The Casper 2.0 RPC schema outlines the expected structure of requests and responses when interacting with the node through JSON-RPC.

You can find it here on GitHub:  
🔗 [Casper RPC Schema](https://github.com/casper-network/casper-sidecar/blob/dev/resources/test/rpc_schema.json)

This is particularly useful for tool builders and integration developers.

---

### 6. How do I migrate from Signer to Casper Wallet?

The Casper Signer is deprecated and replaced by the Casper Wallet. To migrate:

1. Export your keys from Signer.
2. Import them into the Casper Wallet.
3. Follow the guide below to complete the process:  
🔗 [Migration Guide – Casper Wallet](https://www.casperwallet.io/user-guide/signer-user-start-here)

---

### 7. What are the Integration network endpoints for `CSPR.cloud`?

These endpoints are used for developers building integrations or apps that require RPC access to the network.

🔗 [https://node.integration.cspr.cloud/](https://node.integration.cspr.cloud/)

It is recommended to use these for staging and test environments rather than production deployments.

---

## 📊 Node Operator & Validator FAQ

### 1. When is a node considered fully synced?

A node transitions through states such as `CatchUp`, `KeepUp`, and `Validate`. When a node's `reactor_state` becomes `KeepUp`, it means it has caught up with the latest state of the blockchain and is now keeping up with the rest of the network.

You can check this in the node logs, via diagnostic endpoints, or by using the `/etc/casper/node_util.py watch` command directly on the node's terminal through `ssh` connection.

---

### 2. Where can I check staking rewards?

Use [CSPR.live](https://cspr.live) to check staking rewards:

1. Navigate to your account page.
2. Click the "Staking Rewards" tab.
3. You can view detailed reward history per [Era](../docs/concepts/glossary/E#era).

Example:  
🔗 [Staking Rewards Example](https://cspr.live/account/02038baa714f1f45aaacb4443df31bf27a8990369c2f9d585f904ec5c5b85aeb231f)

---

## 👤 General User FAQ

### 1. What is delegation?

Delegation lets you participate in network security by staking your tokens with a validator. You don’t need to run a node. Validators share a portion of the staking rewards with their delegators, keeping a small fee (commission).

This contributes to network decentralization and rewards you with passive income.

---

### 2. How frequently are staking rewards paid?

Staking rewards are distributed every **Era** (approximately every 2 hours). It may take up to 4 hours (2 Eras) for the first rewards to show after delegation.

---

### 3. I’ve delegated my tokens but don’t see rewards?

Staking rewards are added to your current stake and may not appear immediately as spendable balance. To view them:

- Go to [CSPR.live](https://cspr.live)
- Look under your validator in the “Rewards” tab

---

### 4. Is there a lock period after delegation?

There is no lock period when delegating. However, **undelegation** incurs a 7-Era (~14-hour) unbonding period. After this, the tokens are available in your account for transfer, spending, or re-delegation.

---

### 5. Is there slashing? Can I lose tokens?

Currently, Casper does **not** have slashing enabled. If a validator is evicted from the active set, you won’t receive rewards while they’re inactive. In future, when slashing is enabled, delegators may lose a portion of their stake if their validator misbehaves.

---

### 6. What is the cost of delegation (staking) and undelegation (unstaking)?

Each delegation transaction costs **2.5 CSPR**.  
💡 Always keep extra tokens in your account to cover fees for transactions like delegation, undelegation, and transfers.

