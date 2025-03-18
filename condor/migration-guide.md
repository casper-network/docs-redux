# Casper 2.0 Migration Guide for Crypto Exchanges

The Casper Network is in the process of upgrading to Casper 2.0, which introduces breaking changes to the node software, the protocol, and the API Interfaces. 

In order to maintain compatibility with Casper Network after the upgrade of Mainnet, which is tentatively scheduled for end of March/mid-April 2025, crypto exchanges that offer $CSPR pairs, allow for $CSPR deposits and withdrawals and/or allow their users to stake $CSPR, may need to upgrade their integration with Casper Network. This migration guide will help you determine whether, and if so - how to update your integration in preparation for the network upgrade.

This guide will help you assess whether any changes are needed on your end and, if so, how to update your integration to ensure compatibility with Casper 2.0.

## Should I update my integration?

Exchanges integrate with Casper Network at different levels, offering varying $CSPR functionalities. 

Whether you need to migrate before Casper 2.0’s Mainnet launch depends on your integration. The table below can help you determine your next steps.

| Integration Type     | Required actions |
|---------------------|-------------|
| **Indirect integration via 3rd party Partner [<sup>ⓘ<sup>](a "Exchanges that don’t directly integrate with Casper Network but use liquidity from other exchanges via APIs.")** | No migration required, assuming the partner updates their integration.| 
| **[Running your own node](#) [<sup>ⓘ<sup>](a "Exchanges that run their own node and interface with its RPC methods")** | Node software upgrade is required |
| **[SDK Integration](#) [<sup>ⓘ<sup>](a "Exchanges that use the publicly available Casper SDKs(e.g. JavaScript SDK, C#.NET SDK, Go SDK, etc.)")** | Depending on the SDK language (e.g. JS, Go) and the methods you use, upgrade to a Casper 2.0 compatible version is required|

More information about the specific changes in, and features introduced by Casper 2.0 can be found [here](https://docs.casper.network/condor/index).

NOTE: If you have additional use cases or are using a different integration type, please contact us at exchange-support@casper.network for assistance.

## Integration Types

### Running your own node
If you run your own node, your migration experience will likely involve two distinct paths. 

On the one hand, as a node operator you will participate in the actual Mainnet upgrade of Casper Network, which will take place a specific date and time (you will have a number of days to stage the upgrade in advance of the activation point), while on the other hand you will have to possibly migrate the method by which you interface with your own node. Continue with the migration details provided for exchanges with direct RPC integration or SDK integration, depending on which applies to you.

### SDK Integration
Casper 2.0 introduces changes essential for the network’s future evolution, which also include modifications to data structures that impact API responses. Since historical blockchain data cannot be altered due to cryptographic signatures, both legacy and new data structures will coexist in Casper 2.0 and be returned by the API.

To simplify the transition for developers, we prepared new backward and forward-compatible Casper SDKs that provide a uniform data interface across both Casper 1.5.x and Casper 2.0. This ensures that developers can work with consistent data types, regardless of the network version in which the data was created.

Upgrading to a new version of Casper SDKs makes it possible to have one integration that guarantees future compatibility with Casper 2.0 while maintaining the existing compatibility with Casper 1.5. The network upgrade will require no changes in the consumer code, ensuring no disruption in the service.

Please see instructions below for your specific SDK language:

**JavaScript:**
- The appropriate SDK to upgrade to is the latest v5.x release can be found [here](https://github.com/casper-ecosystem/casper-js-sdk/releases)
- Common use case examples (connect to RPC, send a transfer, etc.) can be found in [Casper JS SDK 5.0 README](https://github.com/casper-ecosystem/casper-js-sdk/tree/feat-5.0.0?tab=readme-ov-file#usage-examples)
- To upgrade your integration, follow the detailed [V2 to V5 Migration Guide](https://github.com/casper-ecosystem/casper-js-sdk/blob/feat-5.0.0/resources/migration-guide-v2-v5.md)

**C# / .NET:**
- The appropriate SDK to upgrade to is the latest v3.x release can be found [here](https://github.com/make-software/casper-net-sdk/releases).
- Typical use case examples (connect to RPC, send a transfer, etc.) can be found in [the Examples folder](https://github.com/make-software/casper-net-sdk/tree/casper-2.0.0/Docs/Examples).
- To upgrade your integration, follow the document [Migration from Casper .NET SDK v2.x to v3.0](https://github.com/make-software/casper-net-sdk/blob/casper-2.0.0/Docs/Articles/Casper20MigrationGuide.md).

**Go:**
- The appropriate SDK to upgrade to is the latest v2.x release found [here](https://github.com/make-software/casper-go-sdk/releases).
- Typical use case examples (connect to RPC, send a transfer, etc.) can be found in the [README](https://github.com/make-software/casper-go-sdk/blob/master/README.md).

**Java:**
- The appropriate SDK to upgrade to is the latest v2.x release can be found [here](https://github.com/casper-network/casper-java-sdk/releases).
- Casper Java SDK in Maven Repository can be found in the link [here](https://central.sonatype.com/artifact/network.casper/casper-java-sdk/2.7.0-BETA.4/overview).

**Other:**
- If you are using an SDK not listed in this chapter, please contact the Casper Exchange Support Team.


## Important changes/updates in Casper 2.0

Casper 2.0 introduces new block structures, transaction formats and retrograde support. More details can be found below.

### 1. New Block Structure
   
- The main difference is in record formats, but cryptographic signing remains the same.
- Exchanges must adapt to new block structure.


### 2. Transaction Formats

**Transactions in Casper 2.0**  

Transactions are a higher-order concept that encapsulate both **Deploys** and **V1 transactions**.  

A **Transaction** is a polymorphic data structure that, for now, can be either:  
- A **Deploy**, which remains compliant with the **1.x definition**.  
- A **TransactionV1**, representing the new type of transaction, introduced alongside the `Deploy` type.   

Secondly, Casper 2.0 includes new methods, renamed methods and methods with a change in response format. 

At the same time, Casper 1.x deploys will continue to be accepted by Casper 2.0, hence if your entire integration comprises only the submission of Deploys (such as transfers in and out of accounts), you may want to take into account the below considerations prior to Mainnet activation of Casper 2.0. 

- The new transaction format provides more efficient processing and additional features.
- Exchanges must adapt new transaction formats.

#### 2.1. Transaction Handling and API Adjustments

- How exchanges should update their transaction processing mechanisms.
- New API endpoints and modifications to existing ones
- Expected changes in response formats

>[!IMPORTANT]
> **Deprecation of 1.x Structures (e.g. Deploys)**
> 
> **1.x structures, such as Deploys, are being deprecated.** While they will continue to function in **Casper 2.0**, they are scheduled to be phased out.  
> 
> Exchanges should be aware of this evolution and prepare for the transition towards **TransactionV1** as the go-forward model.

### 3. Backward Compatibility/Retrograde Support

### 4. Sidecar Adjustments and Integration with Exchange Systems:

- How the sidecar configuration needs to be updated.

- Common scenarios where the sidecar may disconnect and how to mitigate them.

## Minimal vs. Full Migration

It is highly recommended to switch entirely to new API endpoints and adopt new transaction formats.

However, where full migration is not feasible in the short term, exchanges may choose to adapt minimal migration. 

Minimal migration will be adapting new block and transaction structures.


## Casper Exchange Support Team
As an exchange, you likely already have a shared Telegram or Slack channel with the Casper Exchange Support Team. Please keep the Casper team apprised of your progress on migration, as we want to ensure that on the one hand you receive all the possible support from us, and on the other we track ecosystem readiness for Casper 2.0, of which you are an essential component.

If you do not have access to an open channel with the Casper Exchange Support Team, please reach out via one of the following channels:

Telegram: Jiuhong Sun - Exchange Support Engineer: https://t.me/jiu_hong

Email: Casper Exchange Support: exchange-support@casper.network 


## Summary
Casper 2.0 is coming to Mainnet in the very foreseeable future, and we're honored and excited that you and your user community are part of this massively consequential event in the history of the Casper blockchain. In order to make sure you and your users are prepared for the Mainnet activation of Casper 2.0, please follow these steps:

Determine your [current type of integration](https://docs.make.software/exchange-migration-draft#should-i-migrate-my-integration) with Casper Network

If your integration type requires a migration, follow the [Migration Documentation](https://docs.make.software/exchange-migration-draft#integration-specific-migration-documentation) for your integration

Actively communicate with the [Casper Exchange Support Team](https://docs.make.software/exchange-migration-draft#casper-exchange-support-team), to receive support for a successful migration, and to allow Casper to track ecosystem readiness. 





