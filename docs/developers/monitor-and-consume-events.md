import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

# Monitoring and Consuming Events

The Casper platform uses event streaming to signal state changes in smart contracts and nodes. Using Casper's client-side SDKs, dApps actively listening for emitted events can consume these events and perform actions based on event data.

Each Casper node streams events through the SSE (Server Sent Event) server via the port specified as the `event_stream_server.address` in the node's _config.toml_. This port is by default `9999` for nodes on [Testnet](https://testnet.cspr.live/tools/peers) and [Mainnet](https://cspr.live/tools/peers).

Events in `2.0` are all emitted via the firehose `http://<HOST>:<SSE_EVENT_SERVER_PORT>/events` endpoint. Bear in mind that a node is not obligated to have the sse server turned on to operate in the network.

:::note

An `ApiVersion` event is always emitted when a new client connects to a node's SSE server, informing the client of the node's software version.

:::

## Listening to the Event Stream

Applications can listen for such events for a specific account during a particular era, containing certain data. Then, they can parse the data and discard what they do not need. To consume the event stream, you need to set up an event listener in your dApp. Here are example code snippets doing that:

<Tabs>

<TabItem value="js" label="JavaScript">

```javascript
import { SseClient, EventName } from "casper-js-sdk";

const sseClient = new SseClient("http://<Node Address>:9999/events");

sseClient.subscribe(EventName.BlockAddedEventType, (rawEvent) => {
  try {
    const parsedEvent = rawEvent.parseAsBlockAddedEvent();
    console.log(`Block hash: ${parsedEvent.BlockAdded.blockHash}`);
  } catch (error) {
    console.error("Error processing event:", error);
  }
});

// Start the client with the last known event ID ( Optional )
const lastEventID = 1234;

sseClient.start(lastEventID);
```

For more in-depth explanation of features of the SSE client of js-sdk, plese refer to it's (repository and documentation)[https://github.com/casper-ecosystem/casper-js-sdk/blob/dev/src/sse/README.md].
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -s http://NODE_ADDRESS:9999/events/CHANNEL
```

</TabItem>

</Tabs>

You can find node addresses of active online peers to replace `NODE_ADDRESS`, by navigating to [cspr.live](https://cspr.live/tools/peers) for Mainnet and [testnet.cspr.live](https://testnet.cspr.live/tools/peers) for Testnet.

You will find a list with all the possible event types below.

## Event Types

### ApiVersion

The `ApiVersion` event is always the first event emitted when a new client connects to a node's SSE server. It specifies the protocol version of a node on the Casper platform. The following example contains the JSON representation of the `ApiVersion` event structure.

```bash
data:{"ApiVersion":"2.0.0"}
```

### BlockAdded

A `BlockAdded` event is emitted when a new block is added to the blockchain and stored locally in the node. The `BlockAdded` can be in either a `Version1` (1.x compliant) or `Version2` (2.x compliant) variants.

<details>
<summary>Expand to see example of a Version1 BlockAdded</summary>

```json
{
  "BlockAdded": {
    "block_hash": "9571b9b27dacbed06e048cb656829128e4cab06a45ffe84a5ffff88f919f99b1",
    "block": {
      "Version1": {
        "hash": "4fb7be0031f4dc0d107061065c603d79d3691c37f769e9e3285c73357ae952fa",
        "header": {
          "parent_hash": "50fdb9b02e429283ef1ff94c5317185a081eaf56a163f4de0f581eefe999e7b7",
          "state_root_hash": "ec741f31e84de97db9a1f8d3ed1c48f5448656970a59f9b2267430124ab93fb1",
          "body_hash": "7a38b4cf9fb5b1ad88724e67a16ae92fc1b76f8647b8aab0585c683ba3008a2f",
          "random_bit": true,
          "accumulated_seed": "f6167f91fe62d37fb601cb17dd7ec822f49a31c3da10ff8def194a8d118c4389",
          "era_end": null,
          "timestamp": "2025-04-28T10:12:51.985Z",
          "era_id": 100,
          "height": 555,
          "protocol_version": "2.0.0"
        },
        "body": {
          "proposer": "02027ee0d7fdab27eeab089f292d64d78af865c8e79800f9b376e6ce68a3d5f41f5f",
          "deploy_hashes": [
            "040dd42480760133c25ca33b394395c115090f40577c4792cc3c58c5c7c812fb",
            "3f9f0f42b4e548693598e7b0ecd969ae7851087c66e6c9733161ad137d75fddf",
            "8dadb644ca8d6e5678a619c14c7994b832a2d5cfbc222f0ddae6f18ccc61f3f6"
          ],
          "transfer_hashes": []
        }
      }
    }
  }
}
```

- [block_hash](../concepts/serialization/structures.md#block-hash) - The cryptographic hash that identifies a block.
- [block](../concepts/serialization/structures.md#serialization-standard-block) - The JSON representation of the block.

</details>

<details>
<summary>Expand to see example of a Version2 BlockAdded</summary>

```json
{
  "BlockAdded": {
    "block_hash": "290eb1ecd5c4e8bda94dae647fb9c21aeb531fe817467abb60f7c12be6a672eb",
    "block": {
      "Version2": {
        "hash": "290eb1ecd5c4e8bda94dae647fb9c21aeb531fe817467abb60f7c12be6a672eb",
        "header": {
          "parent_hash": "3236c683ec5f220c1936a25a0be96b976cfbe784f06d2319933b432f2a1fe1eb",
          "state_root_hash": "89ba71746096011be36cda29fdf1d1bd8067af51a0ea7eaf65e90666a35bcbf6",
          "body_hash": "11b6c10321aea27c2fc4d292f570a93b32488759c16cf9ee22e747c35c3873fc",
          "random_bit": true,
          "accumulated_seed": "e376199ca38015a57760e9431fc6723e9500ab3f18c93a26830b5b4ccc9f6a29",
          "era_end": null,
          "timestamp": "2025-04-28T10:12:52.090Z",
          "era_id": 246749,
          "height": 2467498,
          "protocol_version": "1.0.0",
          "proposer": "0203c5ecdb1ad56b65cbc7dbbf99ea492e7566a6b2259191f9ab604c58b19d2a01f3",
          "current_gas_price": 1,
          "last_switch_block_hash": "0808080808080808080808080808080808080808080808080808080808080808"
        },
        "body": {
          "transactions": {
            "0": [],
            "1": [
              {
                "Version1": "1f3b12822cfa6ef26d8f1e369ffbab37fa0e963385d124db5ab09ba22d2ec452"
              },
              {
                "Version1": "a13c6a737a926562a02e88f62bf84c3811f2fe20bcc6a9b1454802640dfc730d"
              }
            ],
            "2": [],
            "3": [
              {
                "Deploy": "5825b4fcdb6e180bd80f83d743910b16e6217dd4e74d1147ac0eb656214ab5d4"
              },
              {
                "Deploy": "e83a459beef99015de50e3c33ba0acbe658aea8f0b72f0f55599889dc3025b68"
              }
            ],
            "4": [],
            "5": []
          },
          "rewarded_signatures": []
        }
      }
    }
  }
}
```

- [block_hash](../concepts/serialization/structures.md#block-hash) - The cryptographic hash that identifies a block.
- [block](../concepts/serialization/structures.md#serialization-standard-block) - The JSON representation of the block.

</details>

### TransactionAccepted

`TransactionAccepted` events are emitted when a node on the network receives a transaction. This event will be produced in both cases - if a transaction is of variant Deploy and TransactionV1.

<details>
<summary>Expand to view example of Transaction::Version1</summary>

```json
{
  "TransactionAccepted": {
    "Version1": {
      "hash": "942785a412289a5aaffdb01d58ee91478bb0cc6b68646519531f4e859ed80566",
      "payload": {
        "initiator_addr": {
          "PublicKey": "02020707086bf373174af44dd96ff43cf73ee4ed01d5a563c97926d880acfda55476"
        },
        "timestamp": "2020-08-07T01:30:31.750Z",
        "ttl": "1h 56m 52s 389ms",
        "chain_name": "xyz",
        "pricing_mode": {
          "Fixed": {
            "additional_computation_factor": 0,
            "gas_price_tolerance": 5
          }
        },
        "fields": {
          "args": {
            "Named": [
              [
                "delegator",
                {
                  "cl_type": "PublicKey",
                  "bytes": "01714f5b526d0ce966b0c7d7a6a7eda7fb5b8b10e8b0b18cfe085e8fe7abc0ab66",
                  "parsed": "01714f5b526d0ce966b0c7d7a6a7eda7fb5b8b10e8b0b18cfe085e8fe7abc0ab66"
                }
              ],
              [
                "validator",
                {
                  "cl_type": "PublicKey",
                  "bytes": "01fb60a66cdb914e7448b48213d247edacadc1b17cb2180fbc432460f2fcce497f",
                  "parsed": "01fb60a66cdb914e7448b48213d247edacadc1b17cb2180fbc432460f2fcce497f"
                }
              ],
              [
                "amount",
                {
                  "cl_type": "U512",
                  "bytes": "088063df0de89d7c06",
                  "parsed": "467422081330406272"
                }
              ]
            ]
          },
          "entry_point": "Undelegate",
          "scheduling": "Standard",
          "target": "Native"
        }
      },
      "approvals": [
        {
          "signer": "02020707086bf373174af44dd96ff43cf73ee4ed01d5a563c97926d880acfda55476",
          "signature": "02b049620953b7f2b828d8e435d37608e7b4dfe203056016a66228b0ffd933d1861dcbeeceab8cfc457a381ce4763734bf3cd1ecb912033a3c340c657d436ebe50"
        }
      ]
    }
  }
}
```

- [Version1.hash](../concepts/serialization/hash-types.md) - The blake2b hash of the Transaction.
- [Version1.payload](../concepts/serialization/serialization-standard.md#serialization-standard-account) - Internal data of the Version1 Transaction.
- [Version1.approvals](../concepts/serialization/types_chain.md#approval) - The signer's hexadecimal-encoded public key and signature.

</details>

<details>
<summary>Expand to view example of Transaction::Deploy</summary>

```json
{
  "TransactionAccepted": {
    "Deploy": {
      "hash": "916ab2344cdf29581221d9ff6b9947b683f955b4687455cd8a0f6f63d33b36f6",
      "header": {
        "account": "01800075cc557e3270b686784b2ea3a45bf6e6a7f88f9cc3d17a9c60c96ff16dbd",
        "timestamp": "2020-08-07T01:20:22.509Z",
        "ttl": "4m 12s",
        "gas_price": 22,
        "body_hash": "bc45450393b656a1fb3ee570f0345116dbc5ff1c18a9825955d2387cf62142b5",
        "dependencies": [],
        "chain_name": "casper-example"
      },
      "payment": {
        "StoredContractByName": {
          "name": "casper-example",
          "entry_point": "example-entry-point",
          "args": [
            [
              "amount",
              {
                "cl_type": "U512",
                "bytes": "0400f90295",
                "parsed": "2500000000"
              }
            ]
          ]
        }
      },
      "session": {
        "ModuleBytes": {
          "module_bytes": "6f49f3fc98c1514dd815ddef8ef20de772e72a3f523f562b8b47369e1d5cb4462f7644f8dab833228262b7ce4cbf42554edf98a0e4cc24aa1e77cd76506b922c7d281ffd0769f18e29e0080972b7036468463dde97cf73c11e3f86aa924fbe",
          "args": [
            [
              "l2w4NZKZvxezK52Xb3I6",
              {
                "cl_type": { "List": "U8" },
                "bytes": "05000000f72c275005",
                "parsed": [247, 44, 39, 80, 5]
              }
            ]
          ]
        }
      },
      "approvals": [
        {
          "signer": "01800075cc557e3270b686784b2ea3a45bf6e6a7f88f9cc3d17a9c60c96ff16dbd",
          "signature": "016a1ae5c57d233baec536920a9c4dcf712f32456d07b3a5e669f624ffdd2281e9438780a73fca2fed154e9028b2d9fae118298457d03b232250a3cdbd71625603"
        }
      ]
    }
  }
}
```

- [Deploy.hash](../concepts/serialization/structures.md#deploy-hash) - The blake2b hash of the Deploy.
- [Deploy.body_hash](../concepts/serialization/hash-types.md) - The blake2b hash of the Deploy body.
- [Deploy.session](./developers/writing-onchain-code/contract-hash-vs-package-hash.md#what-is-session-code) - The session logic defining the Deploy's functionality.
- [Deploy.approvals](../json-rpc/types_chain.md#approval) - The signer's hexadecimal-encoded public key and signature.

</details>

For details on custom serializations, check the [Serialization Standard](../../concepts/serialization-standard.md). Also, the [Types](../json-rpc/types_chain.md) page defines the terms used in the event stream output.

### TransactionProcessed

A `TransactionProcessed` event is emitted when a given Deploy has been executed.

<details>
<summary>Expand to view output</summary>

```json
{
  "TransactionProcessed": {
    "transaction_hash": {
      "Version1": "25329c14a4f9307830f2b4b6b529b0c3fd618dec65af7456ad9f9e2c7ba1ff4a"
    },
    "initiator_addr": {
      "PublicKey": "02024e2b994a52bcf4c0cc112512c4be04853c4e824203a8e627c107a8d595707801"
    },
    "timestamp": "2020-08-07T01:30:33.119Z",
    "ttl": "54m 11s 767ms",
    "block_hash": "315210f005e7d2d7130004f0178c29cf7e4718d8b642f3f832a35a028ed094cf",
    "execution_result": {
      "Version1": {
        "Success": {
          "effect": {
            "operations": [],
            "transforms": [
              {
                "key": "12730438218135504636",
                "transform": {
                  "AddUInt256": "16420226327505839383"
                }
              },
              {
                "key": "10696215255214620472",
                "transform": {
                  "AddUInt256": "14018730981435988852"
                }
              },
              {
                "key": "15638241704090226222",
                "transform": {
                  "AddUInt256": "2486508393436959391"
                }
              }
            ]
          },
          "transfers": [],
          "cost": "2379796918402242989"
        }
      }
    },
    "messages": [
      {
        "entity_addr": "entity-contract-a8648307789543cbf38afb24c970844e755654d462a25624edd775219d0cdacf",
        "message": {
          "String": "Sax8BEJtXE6vRPXMqOruOhyDxar7N70OeiyPVtfYqiOVNzvHThJwennWwoOs3HHd"
        },
        "topic_name": "PTgw4HZ6CPRhYmSSBbXsI0rnMOcQXgrr",
        "topic_name_hash": "54a3c9afacf3d475ed69af9de5d4f5496798af12d914aa7f5f8b5cec9935096f",
        "topic_index": 4003932854,
        "block_index": 2261021254199878090
      }
    ]
  }
}
```

- [transaction_hash](../concepts/serialization/structures.md#transaction-hash) - The cryptographic hash of a Deploy.
- [initiator_addr](../concepts/serialization/types.md#initiatoraddr) - Representation of the address that initiated this transaction.
- [timestamp](../concepts/serialization/types.md#timestamp) - A timestamp type representing a concrete moment in time.
- [block_hash](../concepts/serialization/structures.md#block-hash) - A cryptographic hash identifying a Block.
- [execution_result](../concepts/serialization/types.md#execution-result) - The execution status of the transaction. It is a polymorphic type that can be either `Deploy` or `Version1`.

</details>

### TransactionExpired

A `TransactionExpired` event is emitted when the Deploy is no longer valid for processing or being added to a block due to its time to live (TTL) having expired.

<details>
<summary>Expand to view output</summary>

```json
{
  "TransactionExpired": {
    "transaction_hash": {
      "Version1": "fa1bf753a9b361316531f691db06e0798e4cb29e70724e2c7bf8619b8066be8c"
    }
  }
}
```

- [transaction_hash](../concepts/serialization/types.md#transactionhash) - The cryptographic hash of a Transaction.

</details>

### Fault

The `Fault` event is emitted if there is a validator error.

<details>
<summary>Expand the below section to view the Fault event details:</summary>

```json
{
  "Fault": {
    "era_id": 4591448806312642600,
    "public_key": "013da85eb06279da42e28530e1116be04bfd2aa25ed8d63401ebff4d9153a609a9",
    "timestamp": "2023-01-01T01:26:58.364Z"
  }
}
```

- [era_id](../concepts/serialization/types.md#eraid) - A period of time during which the validator set does not change.
- [public_key](../concepts/serialization/types.md#publickey) - The hexadecimal-encoded public key of the validator that caused the fault.
- [timestamp](../concepts/serialization/types.md#timestamp) - A timestamp representing the moment the validator faulted.

</details>

### FinalitySignature

This event indicates validators have signed the final approvals and further alterations to the block will not be allowed. Refer to the [consensus reached](../concepts/transactions-and-transaction-lifecycle.md#consensus-reached) and [block finality](../concepts/glossary/B.md#block-finality) sections to learn more about finality signatures. The body of `FinalitySignature` is polymorphic - it will either hold `V1` or `V2` field. The content of `V1` is to support compatibility with the payload of 1.x node `FinalitySignature` event

<details>
<summary>Expand to view example of FinalitySignature::V1</summary>

```json
{
  "FinalitySignature": {
    "V1": {
      "block_hash": "92be2255d4d47cc236b037b761ee1d2a92b94c5bbac12e43982b1a8736dad97a",
      "era_id": 878101,
      "signature": "02f9c63d28dc1ffb6555de629358d9e784e73f612a7a78bc918b2e7a5e0a67b195162d6606f01069aa2f23e1198268b15e483b0b63a29746f56205d977a0aedf26",
      "public_key": "020355c10a87a7fa97ca0b9b4dad262d8eed977a25e2c4a9dcb85bd954476b496d6f"
    }
  }
}
```

- [block_hash](../concepts/serialization/structures.md#block-hash) - A cryptographic hash identifying a Block.
- [era_id](../concepts/serialization/types.md#eraid) - A period of time during which the validator set does not change.
- [signature](../concepts/serialization/types.md#signature) - Serialized bytes representing the validator's signature.
- [public_key](../concepts/serialization/types.md#publickey) - The hexadecimal-encoded public key of the validator.

</details>

<details>
<summary>Expand to view example of FinalitySignature::V2</summary>

```json
{
  "FinalitySignature": {
    "V2": {
      "block_hash": "75420adf11cc23a52fd45a9a843cce770ce0e7056dd37943584625d97cdac31c",
      "block_height": 15850176021194416983,
      "era_id": 724437,
      "chain_name_hash": "63803374d60b19e25baa34d306a74c19fc09866df48d9dd5a4e645b7cb26026c",
      "signature": "015b88427cffd2d7d58833d09378323d65dec72e2e0a8a9c53991024c53a0bebfe836bcf233f4233bcf63f22f3025b68efb2b00226700bc5d49293cce3a98edc00",
      "public_key": "01a792c3e2db14a130676d2498f70acf15e33aa22945d9b300f3f35021acaeb3cf"
    }
  }
}
```

- [block_hash](../concepts/serialization/structures.md#block-hash) - A cryptographic hash identifying a Block.
- [block_height](../concepts/serialization/primitives.md#clvalue-numeric) - A cryptographic hash identifying a Block.
- [era_id](../concepts/serialization/types.md#eraid) - A period of time during which the validator set does not change.
- [signature](../concepts/serialization/types.md#signature) - Serialized bytes representing the validator's signature.
- [public_key](../concepts/serialization/types.md#publickey) - The hexadecimal-encoded public key of the validator.

</details>

### Step

The `Step` event is emitted at the end of every era and contains the execution effects produced by running the auction contract's `step` function.

<details>
<summary>Expand to view output:</summary>

```json
{
  "Step": {
    "era_id": 1245,
    "execution_effects": [
      {
        "key": "account-hash-0909090909090909090909090909090909090909090909090909090909090909",
        "kind": "Identity"
      },
      {
        "key": "withdraw-0909090909090909090909090909090909090909090909090909090909090909",
        "kind": {
          "AddInt32": 543
        }
      }
    ]
  }
}
```

- [era_id](../concepts/serialization/types.md#eraid) - A period of time during which the validator set does not change.
- [execution_effect](../concepts/serialization/types.md#effects) - The journal of execution effects.

</details>

### Shutdown

The `Shutdown` event is emitted when the node is about to shut down, usually for an upgrade, causing a termination of the event stream.

<details>
<summary>Expand the below section to view the Shutdown event details:</summary>

```bash
"Shutdown"
```

- Shutdown - The "Shutdown" text notifies the event listener that a shutdown will occur.

</details>

## Replaying the Event Stream

This command will replay the event stream from an old event onward. Replace the `NODE_ADDRESS`, `CHANNEL`, and `ID` fields with the values of your scenario.

<Tabs>

<TabItem value="curl" label="cURL">

```bash
curl -sN http://NODE_ADDRESS:9999/events/CHANNEL?start_from=ID
```

_Example:_

```bash
curl -sN http://65.21.235.219:9999/events/main?start_from=29267508
```

</TabItem>

</Tabs>

Each URL can have a query string added to the form `?start_from=ID`, where ID is an integer representing an old event ID. With this query, you can replay the event stream from that old event onward. If you specify an event ID already purged from the cache, the server will replay all the cached events.

:::note

The server keeps only a limited number of events cached to allow replaying the stream to clients using the `?start_from=` query string. The cache size can be set differently on each node using the `event_stream_buffer_length` value in the _config.toml_. By default, it is only 5000.
The intended use case is to allow a client consuming the event stream that loses its connection to reconnect and catch up with events that were emitted while it was disconnected.

:::

## 1.5 vs 2.x compatibility note

The SSE events serve went through significant, backwards incompatible changes. Here are the most important ones of them that need to be taken into consideration:

1. 2.0 SSE supports the firehose `/events` endpoint which channels all the beforementioned events.
1. `DeployAccepted`, `DeployProcessed`, `DeployExpired`
1. `BlockAdded` has a 1.5 incompatible structure
1. `TransactionAccepted` is an event analogous to `DeployAccepted`, but there is no backwards-compatibility guarantee - their structure differs.
1. `TransactionProcessed` is an event analogous to `DeployProcessed`, but there is no backwards-compatibility guarantee - their structure differs.
1. `TransactionExpired` is an event analogous to `DeployExpired`, but there is no backwards-compatibility guarantee - their structure differs.
1. `FinalitySignature` has a 1.5 incompatible structure.

## Sidecar and SSE events

The Sidecar App offers some benefits and extensions to how the SSE of the node itself works. For instance it allows to store events to drive and query them with a separate REST API. It also allows the nodes SSE endpoint to be not-public since Sidecar has the ability to republish SSE events. For details on how it works please consult (Sidecar documentation)[https://github.com/casper-network/casper-sidecar/blob/dev/README.md]
