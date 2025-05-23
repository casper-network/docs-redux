---
title: Set up Ledger
slug: /workflow/ledger-setup/
---

# Ledger Setup with Casper

A Ledger device is a hardware wallet considered one of the most secure ways to store your digital assets. Ledger uses an offline, or cold storage, method of generating private keys, making it a preferred method for many crypto users. 

## Prerequisites {#prerequisites}

1. Configure your Ledger and the Ledger Live application as described in the [Getting Started with Ledger Live](https://support.ledger.com/hc/en-us/articles/4404389503889?docs=true) article.
2. **<span style={{color:"#ee5945"}}>CRITICAL</span>**: Write down and hide your recovery codes! These are necessary to be able to restore your account if you lose or damage the hardware key.
3. Make sure the Ledger Live application version is at least at `2.73.1`, which is the version that includes Casper accounts.

:::note

If you need help, contact us on [Twitter](https://twitter.com/Casper_Network), [Discord](https://discord.gg/caspernetwork), or [Telegram](https://t.me/casperblockchain).

:::

## Installing the Casper App on a Ledger Device {#install-the-casper-app-on-the-ledger-device}

Install the Casper app on the Ledger device by following the steps below. You can find similar instructions on the official [Ledger support site](https://support.ledger.com/hc/en-us/articles/4416379141009-Casper-CSPR-?docs=true).

1. In Ledger Live, open My Ledger at the bottom of the left-hand menu.

![Open My Ledger](./_ledger-cspr-live/ledger-live/open-my-ledger.png)

2. Connect the Ledger device to your computer and unlock it by entering your device PIN.

![Unlock your Ledger device](./_ledger-cspr-live/ledger-live/casper-unlock.png)

3. If asked, allow Ledger manager on your device.

![Allow Ledger](./_ledger-cspr-live/ledger-live/allow-ledger.png)

4.  Find **Casper** in the app catalog.

![Find the Casper app](./_ledger-cspr-live/ledger-live/find-casper.png)

:::important

Having trouble finding the Casper app?
Please search "Casper," not "CSPR" when searching for the app in the "My Ledger" tab in Ledger Live.

:::

5.  Click the **Install** button of the app.

   - An installation window appears.
   - Your device will display **"Processing..."**
   - The app installation is confirmed.

![Casper installation confirmed](./_ledger-cspr-live/ledger-live/casper-installed.png)

6. Open the Casper App on your Ledger device by clicking both buttons on the device, and keep it open while doing the next steps.

![Select Casper on Ledger](./_ledger-cspr-live/ledger-live/select-casper.png)

![Casper app is ready](./_ledger-cspr-live/ledger-live/casper-ready.png)

## Sending and Receiving Tokens

To send and receive CSPR tokens using the accounts on your Ledger device, you have two options:

1. [Manage Casper Accounts using Ledger and Ledger Live](./ledger-live.md)
2. [Manage Casper Accounts using Ledger and CSPR.live](./ledger-cspr-live.md)

To stake CSPR tokens with a validator on the Casper Mainnet, you need to use the CSPR.live block explorer, as described in [Delegating with Ledger Devices](./staking-ledger.md).

Buying, selling, or swapping CSPR are not currently supported in Ledger Live. For these operations, you need to visit an exchange.
