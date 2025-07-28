---
title: Unbonding
---

# Unbonding as a Validator

Once a bid is placed, it will remain in the state of the auction contract, even if the bid fails to win a slot immediately. New slots may become available if bonded validators leave the network or reduce their bond amounts. Therefore, a bid must be explicitly withdrawn to remove it from the auction.

## Method 1: Unbonding with the System Auction Contract {#withdraw-system-auction}

This method withdraws a bid using the system auction contract. Call the existing `withdraw_bid` entry point from the system auction contract. Using this method, you do not need to build any contracts, reducing costs and complexity.

```bash
sudo -u casper casper-client put-deploy \
--node-address <HOST:PORT> \
--secret-key <PATH> \
--chain-name <CHAIN_NAME> \
--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \
--session-hash <SESSION_HASH> \
--session-entry-point withdraw_bid \
--session-arg="public_key:public_key='<PUBLIC_KEY_HEX>'" \
--session-arg="amount:u512='<AMOUNT_TO_WITHDRAW>'"
```

1. `node-address` - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777
2. `secret-key` - The file name containing the secret key of the account paying for the Deploy
3. `chain-name` - The chain-name to the network where you wish to send the Deploy. For Mainnet, use *casper*. For Testnet, use *casper-test*
4. `payment-amount` - The payment for the Deploy in motes. This entry point call needs 2.5 CSPR for node version [1.5.1](https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml)
5. `session-hash` - Hex-encoded hash of the stored auction contract, which depends on the network you are using. For Casper's Mainnet and Testnet, the hashes are as follows:

- **Testnet**: `hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2`
- **Mainnet**: `hash-ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea`

6. `session-entry-point` - Name of the entrypoint that will be used when calling the contract

The `withdraw_bid` entry point expects two arguments, while the third one is optional:

7. `public key`: The hexadecimal public key of the account's purse to withdraw. This key must match the secret key that signs the deploy and has to match the public key of a bid in the auction contract
8. `amount`: The amount being withdrawn

The command will return a deploy hash, which is needed to verify the deploy's processing results.

:::note

Calling the `withdraw_bid` entry point on the auction contract has a fixed cost of 2.5 CSPR.

:::

## `withdraw-bid` Guardrails

There are additional guardrails in place to ensure accidental full withdrawal/unstaking of the stakes.

- `withdraw-bid` will check if the withdraw bid will not result in a Validator's stake dropping below the Validator minimum bid threshold. It will return an error if a Validator's staked amount will fall below the minimum bid amount for Validators when executing the transaction.
- `withdraw-bid-all` is a sub-command that takes in a public key of a Validator and produces a withdraw bid transaction that will completely unbond the Validator.
- A minimum-bid override flag `min-bid-override` is available for Validators to log a warning to the standard output and produce/send the withdraw bid transaction.
- The withdraw-bid guardrails have been extended to `put-transaction` and `put-deploy` subcommands that invoke the entry point via stored contract by hash/name and package by hash/name.

**Example:**

This example command uses the Casper Testnet to withdraw 5 CSPR from the bid:

```bash
sudo -u casper casper-client put-deploy \
--node-address http://65.21.75.254:7777 \
--secret-key /etc/casper/validator_keys/secret_key.pem \
--chain-name casper-test \
--payment-amount 2500000000 \
--session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \
--session-entry-point withdraw_bid \
--session-arg "public_key:public_key='01c297d2931fec7e22b2fb1ae3ca5afdfacc2c82ba501e8ed158eecef82b4dcdee'" \
--session-arg "amount:U512='$[5 * 1000000000]'"
```

Below is the same command with the optional purse set to a different purse where the amount will be returned. **Adjust all the values to your use case.**

```bash
sudo -u casper casper-client put-deploy \
--node-address http://65.21.75.254:7777 \
--secret-key /etc/casper/validator_keys/secret_key.pem \
--chain-name casper-test \
--payment-amount 2500000000 \
--session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \
--session-entry-point withdraw_bid \
--session-arg "public_key:public_key='01c297d2931fec7e22b2fb1ae3ca5afdfacc2c82ba501e8ed158eecef82b4dcdee'" \
--session-arg "amount:U512='$[5 * 1000000000]'"
```

## Check the Auction Contract {#check-the-auction-contract}

Check the auction contract for updates to the bid amounts.

```bash
casper-client get-auction-info --node-address http://<HOST:PORT>
```

## Unbonding Wait Period {#unbonding-wait-period}

To prevent long-range attacks, requests to unbond must go through a mandatory wait period, currently set to 7 eras lasting approximately 14-16 hours.
