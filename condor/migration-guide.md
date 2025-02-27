# Casper 2.0 Migration Guide for Crypto Exchanges

The Casper Network is in the process of upgrading to Casper 2.0, which introduces breaking changes to the node software, the protocol and the interfaces associated with interacting with the network. In order to maintain compatibility with Casper Network after the upgrade of mainnet, tentatively scheduled for March 2025, crypto exchanges that offer $CSPR pairs, allow for $CSPR deposits and withdrawals and/or allow their users to stake $CSPR, may need to upgrade their integration with Casper Network. This migration guide will help you determine whether, and if so - how, to migrate your integration in prepartion for the network upgrade.

More information about the specific changes in, and features introduced by Casper 2.0 can be found here (LINK).

This migration guide aims at listing down the key information required for exchanges to make the necessary changes on their side to become Casper 2.0 ready.

## Should I migrate my integration?

Exchanges have different levels of integration with Casper Network, and offer different subsets of functionality relating to $CSPR to their user base. Depending on the specifics of your integration, you may or may not have to migrate your integration prior to the mainnet launch of Casper 2.0. The table below helps you determine your next steps, if any.

| Integration Type     | Description | Migration? |
|---------------------|-------------|------------|
| **Indirect** | Some exchanges do not integrate with Casper Network directly but leverage liquidity provided by other exchanges through their APIs | No migration required (assuming the downstream exchange migrates on time, if needed) |
| **[Run own node](#)** | Some exchanges run their own node and interface with its RPC methods | Exchange needs to upgrade the node software, and participate in the network upgrade process. Additionally, exchange needs to ensure the RPC methods they rely on are either still supported in 2.0 or migrate to new RPC methods |
| **[RPC integration](#)** | Some exchanges use public node infrastructure and interface with those via RPC | Exchange needs to ensure the RPC methods they rely on are either still supported in 2.0, or migrate to new RPC methods |
| **[SDK integration](#)** | Some exchanges use the publicly available Casper SDKs (e.g. JavaScript SDK, C#.NET SDK, Go SDK, etc.) | Depending on the SDK language (e.g. JS, Go) and the methods you use, you may or may not need to migrate prior to mainnet launch |

## Integration-specific Migration Documentation
### Running our own node
If you run your own node, your migration experience will likely involve two distinct paths. 

On the one hand, as a node operator you will participate in the actual mainnet upgrade of Casper Network, which will take place a specific date and time (you will have a number of days to stage the upgrade in advance of the activation point), while on the other hand you will have to possibly migrate the method by which you interface with your own node. Continue with the migration details provided for exchanges with direct RPC integration or SDK integration, depending on which applies to you.

### RPC Integration
Casper 2.0 implements a number of changes to the JSON RPC interface of the node, which includes new methods, renamed methods and methods with a change in response format. 
Importantly, the block structure is different in Casper 2.0 vs. Casper 1.x, and `Deploys` have been renamed to `Transactions`. 

At the same time, legacy (Casper 1.x) deploys will continue to be accepted by Casper 2.0, hence if your entire integration comprises only the submission of Deploys (such as transfers in and out of accounts), you may not have to make any changes prior to mainnet activation of Casper 2.0. 

➡️ To assess your next steps, please evaluate your integration agains the 1.x -> 2.0 JSON RPC changes detailed in this document. 

### SDK Integration
Depending on which SDK language (e.g. JS, Go) you use, and which methods you interface with, you might not have to immediately migrate your integration. However, in order to be safe and future-proof, it is strongly recommended to upgrade your SDK to the latest version applicable to your stack. For most languages, this can be done immediately, as the SDKs maintain both forward (2.x) and backward (1.x) compatibility at the same time. 

While it may not be strictly necessary to upgrade your integration if all you do is submit Deploys to the network (e.g. transfers in and out of accounts), it is STRONGLY RECOMMENDED to upgrade to the new SDK now, to experience a seamless upgrade to Casper 2.0 and beyond.

Please see instructions below for your specific SDK language:

| SDK    | Instructions | 
|---------------------|-------------|
| **JavaScript** | The appropriate SDK to upgrade to is the latest v5.x release can be found [here](https://github.com/casper-ecosystem/casper-js-sdk/releases). |
| | Common use case examples (connect to RPC, send a transfer, etc.) can be found in [Casper JS SDK 5.0 README](https://github.com/casper-ecosystem/casper-js-sdk/tree/feat-5.0.0?tab=readme-ov-file#usage-examples) |
| |To upgrade your integration, follow the detailed [V2 to V5 Migration Guide](https://github.com/casper-ecosystem/casper-js-sdk/blob/feat-5.0.0/resources/migration-guide-v2-v5.md) | 
| **#C .NET** | The appropriate SDK to upgrade to is the latest v3.x release can be found [here](https://github.com/make-software/casper-net-sdk/releases).|
| | Typical use case examples (connect to RPC, send a transfer, etc.) can be found in [the Examples folder](https://github.com/make-software/casper-net-sdk/tree/casper-2.0.0/Docs/Examples). |
| |To upgrade your integration, follow the document [Migration from Casper .NET SDK v2.x to v3.0](https://github.com/make-software/casper-net-sdk/blob/casper-2.0.0/Docs/Articles/Casper20MigrationGuide.md) | 
| **Go** | The appropriate SDK to upgrade to is the latest v2.x release found [here](https://github.com/make-software/casper-go-sdk/releases).|
| |Typical use case examples (connect to RPC, send a transfer, etc.) can be found in the [README](https://github.com/make-software/casper-go-sdk/blob/master/README.md). | 
| **Java** | The appropriate SDK to upgrade to is the latest v2.x release can be found [here](https://github.com/casper-network/casper-java-sdk/releases).|
| |Casper Java SDK in Maven Repository can be found in the link [here](https://central.sonatype.com/artifact/network.casper/casper-java-sdk/2.7.0-BETA.4/overview). | 
| **Other** | If you are using an SDK not listed in this chapter, please contact the Casper Exchange Support Team.|

## Important changes/updates in Casper 2.0(Placeholder - Core Team input required)

Casper 2.0 introduces new block structures, transaction formats and retrograde support. More details can be found below/here (LINK or content below).

### 1. New Block Structure
   
- The main difference is in record formats, but cryptographic signing remains the same.
- Exchanges must adapt to new block structure.


### 2. Transaction Formats
- The new transaction format provides more efficient processing and additional features.
- Exchanges must adapt new transaction formats.

#### 2.1. Transaction Handling and API Adjustments

- How exchanges should update their transaction processing mechanisms.
- New API endpoints and modifications to existing ones
- Expected changes in response formats

### 3. Backward Compatibility/Retrograde Support

### 4. Sidecar Adjustments and Integration with Exchange Systems:

- How the sidecar configuration needs to be updated.

- Common scenarios where the sidecar may disconnect and how to mitigate them.

## Minimal vs. Full Migration (Placeholder - Core Team input required)

It is highly recommended to switch entirely to new API endpoints and adopt new transaction formats.

However, where full migration is not feasible in the short term, exchanges may choose to adapt minimal migration. 

Minimal migration will be adapting new block and transaction structures.


## Common Integration Issues (Placeholder - Core Team input required)

Placeholder:  Cover anticipated issues, including transaction failures and undelegation nuances.


## Casper Exchange Support Team
As an exchange, you likely already have a shared Telegram or Slack channel with the Casper Exchange Support Team. Please keep the Casper team apprised of your progress on migration, as we want to ensure that on the one hand you receive all the possible support from us, and on the other we track ecosystem readiness for Casper 2.0, of which you are an essential component.

If you do not have access to an open channel with the Casper Exchange Support Team, please reach out via one of the following channels:

Telegram: Jiuhong Sun - Exchange Support Engineer: https://t.me/jiu_hong

Email: Casper Exchange Support: exchange-support@casper.network 


## Summary
Casper 2.0 is coming to mainnet in the very foreseeable future, and we're honored and excited that you and your user community are part of this massively consequential event in the history of the Casper blockchain. In order to make sure you and your users are prepared for the mainnet activation of Casper 2.0, please follow these steps:

Determine your [current type of integration](https://docs.make.software/exchange-migration-draft#should-i-migrate-my-integration) with Casper Network

If your integration type requires a migration, follow the [Migration Documentation](https://docs.make.software/exchange-migration-draft#integration-specific-migration-documentation) for your integration

Actively communicate with the [Casper Exchange Support Team](https://docs.make.software/exchange-migration-draft#casper-exchange-support-team), to receive support for a successful migration, and to allow Casper to track ecosystem readiness. 





