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

**Casper Sidecar**

One of the major changes in the **Casper 2.0** upgrade is the introduction of **[casper-sidecar](https://github.com/casper-network/condor-info/blob/a7af985d60aa719454cbd219d4982bd5c79eee84/articles/034-sidecar.md)**.  

The **sidecar** runs as a dedicated process, bound to a node’s **binary port** and/or **SSE port**. It takes full responsibility for running the **JSON-RPC server** and exposing **JSON-RPC endpoints** to the internet.  

As a result, the **node software itself no longer exposes a JSON-RPC API** to consumers—this function is now handled exclusively by the **sidecar**.

**Node Binary Port**

The Casper 2.0 Node now exposes a pure Binary Port API, which allows connection over TCP/IP and pure binary serialization for your remote procedure calls. Depending on your use case, you may be interested in considering this option for interacting with Casper v2.0.

- **Key Considerations:**</br>
  - Enabling Binary Port for Forward-Facing APIs
    - Sidecar Dependency: In Casper 2.0, the JSON-RPC service is moved to the casper-sidecar, which forwards requests to the node’s binary RPC port​. 
    - Operators who need a public-facing API must enable the binary port on the node (the sidecar is a consumer of this service​)
    - Binary Port doesn't need to be a public port (it only needs to be exposed to sidecar)

**SSE (Server Side Events) Server**

Casper 2.0 introduces a realtime API of events, emitted by the node when processing blocks and/or transactions.


**Transactions in Casper 2.0**  

Transactions are a higher-order concept that encapsulate both **Deploys** and **V1 transactions**.  

A **Transaction** is a polymorphic data structure that, for now, can be either:  
- A **Deploy**, which remains compliant with the **1.x definition**.  
- A **V1 transaction**, representing the new standard moving forward.  

Secondly, Casper 2.0 includes new methods, renamed methods and methods with a change in response format. 

At the same time, Casper 1.x deploys will continue to be accepted by Casper 2.0, hence if your entire integration comprises only the submission of Deploys (such as transfers in and out of accounts), you may want to take into account the below considerations prior to Mainnet activation of Casper 2.0. 

### Preparing for Casper 2.0: Compatibility Considerations  

Exchanges **may not need to make immediate changes** before the mainnet activation of **Casper 2.0**; however, this depends on how they interact with the network.  

While the **account-put-deploy** JSON-RPC method continues to accept the same input structure as in **1.x**, the response format of **info_get_deploy** is **not backwards compatible** with **1.x**.  

If an exchange relies on the results of **info_get_deploy**, updates will be required to handle the new response format properly.  

Using 1.x Deploys in a 2.x Node:

   - Casper 2.0 introduces a new Transaction model (replacing the old “Deploy”), but it will continue to accept and execute valid 1.x deploys for now​.
   
   - Casper Sidecar's `account_put_deploy` will be compatible with 1.x node `account_put_deploy`
   
   - This means the sidecar’s deploy submission method (`account_put_deploy`) remains usable with Casper 2.0 nodes, preserving compatibility for existing integration code. (In the Casper 2.0 JSON-RPC, this method is formally renamed to `account_put_transaction`​)
   
   - However, Casper Sidecar's `info_get_deploy` isn't 100% compatible with 1.x nodes `info_get_deploy`. 

Therefore, Exchanges should review how they retrieve deploys/transactions and be aware of the response schema changes when querying for transaction status or details. For schema changes please refer the link [here](https://docs.casper.network/condor/jsonrpc#json-rpc-schema-definitions). 


>[!IMPORTANT]
> **Deprecation of 1.x Structures (e.g. Deploys)**
> 
> **1.x structures, such as Deploys, are being deprecated.** While they will continue to function in **Casper 2.0**, they are scheduled to be phased out.  
> 
> Exchanges should be aware of this evolution and prepare for the transition towards **TransactionV1** as the go-forward model.

#### **Action Required**  

➡️ Exchanges should review their integration and assess whether their systems depend on **info_get_deploy** results. If so, necessary updates must be made to ensure compatibility with **Casper 2.0**.

➡️ To assess your next steps, please evaluate your integration against the 1.x -> 2.0 JSON RPC changes detailed in the link [here](https://docs.casper.network/condor/jsonrpc#json-rpc-schema-definitions). 

Please refer to this [page](https://docs.casper.network/condor/jsonrpc) for more details on **casper-sidecar** and **JSON RPC** changes.

### SDK Integration
Depending on which SDK language (e.g. JavaScript, Go) you use, and which methods you interface with, you might not have to immediately migrate your integration. However, in order to be safe and future-proof, it is strongly recommended to upgrade your SDK to the latest version applicable to your stack. For most languages, this can be done immediately, as the SDKs maintain both forward (2.x) and backward (1.x) compatibility at the same time. 

While it may not be strictly necessary to upgrade your integration if all you do is submit Deploys to the network (e.g. transfers in and out of accounts), it is STRONGLY RECOMMENDED to upgrade to the new SDK now, to experience a seamless upgrade to Casper 2.0 and beyond.

>[!IMPORTANT]
> **Addressable Entity is not enabled in Casper 2.0.**
> 
> Updating to a Casper 2.0-compatible SDK will be necessary when the **addressable entity** is enabled.
> 
> Once the **addressable entity** is enabled, exchanges will be required to use an SDK compatible with the Entity.


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





