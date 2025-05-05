# The Transaction type

| Table of contents     |
| --------------------- |
| [Deploy](#deploy)     |
| [Version1](#version1) |

A transaction is an enum-type whose variants represent atomic units of work that can be sent to the node for execution.

Currently it consists of two possible variants:

- Deploy
- Version1

## Deploy

The Transaction::Deploy variant is equivalent to the 1.x Deploy.

Serializing a `Transaction` of variant `Deploy`:

- The first byte is a `0`
- Next bytes are binary representation of a [Deploy](./structures.md#serialization-standard-deploy)

## Version1

Transaction::Version1 is the new way that work can be proposed to a node. It's nature is more amorphic than Transaction::Deploy. This type of Transaction uses a self-describing binary serialization scheme (comparing to other [Binary Serialization Standard](./index.md) types). The self-describing scheme is called `Calltable serialization` in this document. An in-depth description of how this self-describing standard works is in the [calltable serialization](./calltable-serialization.md) document. We will be using `serialization_index` and `variant discriminator` terms, their interpretation is explained in the [calltable serialization](./calltable-serialization.md) document also.

Serializing a `Transaction` of variant `Version1`:

- The first byte is a `1`
- Next bytes are binary representation of a [TransactionV1](#transactionv1)

### TransactionV1

`TransactionV1` (serialized using calltable scheme) consists of:

- `hash` - hash calculated over binary serialization of `payload`. It's `serialization_index` is `0`. In the sense of binary serialization it is a [Digest](./types.md#digest-digest)
- `payload`- of type [`TransactionV1Payload`](#transactionv1payload), contains all the actual data that the transaction sends to node. It's `serialization_index` is `1`
- `approvals` - collection of [Approvals](./structures.md#approval) being signatures over `hash`. It's `serialization_index` is `2`

### TransactionV1Payload

`TransactionV1Payload` (serialized using calltable scheme) consists of:

- `initiator_addr` - of type [InitiatorAddr](#initiatoraddr) identifies the initiator of this Transaction. It's `serialization_index` is `0`
- `timestamp` - [Timestamp](./types.md#timestamp) identifying the self-declared time of creation for this transaction. It's `serialization_index` is `1`
- `ttl` - [TimeDiff](./types.md#timediff) self-declared period in which the transaction should be included in a block and executed. It's `serialization_index` is `2`
- `chain_name` - [`String`](./primitives.md#string-clvalue-string) identifying the network name on which this transaction should be executed. It's `serialization_index` is `3`
- `pricing_mode` - [PricingMode](#pricingmode) declaration of how the transaction should be payed for. It's `serialization_index` is `4`
- `fields` - please see [v1.payload.fields](#v1payloadfields) section. It's `serialization_index` is `5`

#### InitiatorAddr

`InitiatorAddr` (serialized using calltable scheme) consists of:

- in variant InitiatorAddr::PublicKey
  - variant discriminator of value `0`
  - [`PublicKey`](./types.md#publickey-publickey) serialized under serialization key `1`
- in variant InitiatorAddr::AccountHash
  - variant discriminator of value `1`
  - [`AccountHash`](./types.md#account-hash-account-hash) serialized under serialization key `1`

#### PricingMode

`PricingMode` (serialized using calltable scheme) consists of:

- in variant `PaymentLimited`
  - variant discriminator of value `0`
  - field `payment_amount` of type `u64` (8 bytes unsigned [number](./primitives.md#numeric-clvalue-numeric)) with serialization index `1`
  - field `gas_price_tolerance` of type `u8` (1 bytes unsigned [number](./primitives.md#numeric-clvalue-numeric)) with serialization index `2`
  - field `standard_payment` of type [bool](./primitives.md#boolean-clvalue-boolean) with serialization index `3`
- in variant `Fixed`
  - variant discriminator of value `1`
  - field `additional_computation_factor` of type `u8` (1 bytes unsigned [number](./primitives.md#numeric-clvalue-numeric)) with serialization index `1`
  - field `gas_price_tolerance` of type `u8` (1 bytes unsigned [number](./primitives.md#numeric-clvalue-numeric)) with serialization index `2`
- in variant `Prepaid`
  - variant discriminator of value `2`
  - field `receipt` of type [Digest](./types.md#digest-digest) with serialization index `1`

### V1.payload.fields

This is an amorphous data holder. It is serialized as an [ordered collection](./primitives.md#list-clvalue-list) of [tuples](./primitives.md#tuple-clvalue-tuple) holding (u16, [Bytes](./types.md#bytes-bytes)). By u16 we understand an unsigned 2 byte number (see [numeric](./primitives.md#numeric-clvalue-numeric)).
The invariants for this field are:

- keys (first tuple entries) are unique
- the collection is ordered ascending by first element of the tuple (u16)

Breaking the above invariants will cause the node to reject the the transaction as malformed.

This field is design in this amorphous way to facilitate the possibility of reshaping (adding, removing) fields in the future while keeping the byte serialization structure compatible. First tuple entries of this collection discern internal fields, second tuple entries are Binary Serialization Standard compliant serializations of data.

_Currently_ the "keys" (first tuple entries) of the `fields` map are interpreted as:

- payload with key `0`: an instance of [`TransactionArgs`](#transactionargs)
- payload with key `1`: an instance of [`TransactionTarget`](#transactiontarget)
- payload with key `2`: an instance of [`TransactionEntryPoint`](#transactionentrypoint)
- payload with key `3`: an instance of [`TransactionScheduling`](#transactionscheduling)

#### TransactionArgs

`TransactionArgs` (serialized using calltable scheme) consists of:

- in variant `Named`
  - variant discriminator of value `0`
  - [RuntimeArgs](./types.md#runtimeargs-runtimeargs) with serialization index `1`
- in variant `Bytesrepr`
  - variant discriminator of value `1`
  - [Bytes](./types.md#bytes-bytes) with serialization index `1`

#### TransactionTarget

`TransactionTarget` (serialized using calltable scheme) consists of:

- in variant `Native`
  - variant discriminator of value `0`
- in variant `Stored`
  - variant discriminator of value `1`
  - field `id` of type [TransactionInvocationTarget](#transactioninvocationtarget) with serialization index `1`
  - field `runtime` of type [TransactionRuntimeParams](#transactionruntimeparams) with serialization index `2`
- in variant `Session`
  - variant discriminator of value `2`
  - field `is_install_upgrade` of type `bool` with serialization index `1`
  - field `module_bytes` of type `Bytes` with serialization index `2`
  - field `runtime` of type [TransactionRuntimeParams](#transactionruntimeparams) with serialization index `2`

#### TransactionInvocationTarget

`TransactionInvocationTarget` (serialized using calltable scheme) consists of:

- in variant `ByHash`
  - variant discriminator of value `0`
  - `HashAddr` with serialization index `1`
- in variant `ByName`
  - variant discriminator of value `1`
  - `String` with serialization index `1`
- in variant `ByPackageHash`
  - variant discriminator of value `2`
  - field `addr` which is a 32 bytes hash digest with serialization index `1`
  - field `version` of type `Option<u32>` ([option](./primitives.md#option-clvalue-option) of 4 bytes unsigned [number](./primitives.md#numeric-clvalue-numeric)) with serialization index `2`
- in variant `ByPackageName`
  - variant discriminator of value `3`
  - field `name` of type `String` with serialization index `1`
  - field `version` of type `Option<u32>` ([option](./primitives.md#option-clvalue-option) of 4 bytes unsigned [number](./primitives.md#numeric-clvalue-numeric)) with serialization index `2`

#### TransactionRuntimeParams

`TransactionRuntimeParams` (serialized using calltable scheme) consists of:

- in variant `VmCasperV1`:
  - variant discriminator of value `0`
- in variant `VmCasperV2`:
  - variant discriminator of value `1`
  - field `transferred_value` of type `u64` (8 bytes unsigned [number](./primitives.md#numeric-clvalue-numeric)) with serialization index `1`
  - field `seed` of type `Option<[u8; 32]>` ([option](./primitives.md#option-clvalue-option) of 32 bytes [Byte array](./primitives.md#bytearray-clvalue-bytearray)) with serialization index `2`

#### TransactionEntryPoint

`TransactionEntryPoint` (serialized using calltable scheme) consists of:

- in variant `Call`:
  - variant discriminator of value `0`
- in variant `Custom`:
  - variant discriminator of value `1`
  - `String` with serialization index `1`
- in variant `Transfer`:
  - variant discriminator of value `2`
- in variant `AddBid`:
  - variant discriminator of value `3`
- in variant `WithdrawBid`:
  - variant discriminator of value `4`
- in variant `Delegate`:
  - variant discriminator of value `5`
- in variant `Undelegate`:
  - variant discriminator of value `6`
- in variant `Redelegate`:
  - variant discriminator of value `7`
- in variant `ActivateBid`:
  - variant discriminator of value `8`
- in variant `ChangeBidPublicKey`
  - variant discriminator of value `9`
- in variant `AddReservations`:
  - variant discriminator of value `10`
- in variant `CancelReservations`:
  - variant discriminator of value `11`
- in variant `Burn`:
  - variant discriminator of value `12`

#### TransactionScheduling

`TransactionScheduling` (serialized using calltable scheme) consists of:

- in variant `Standard`:
  - variant discriminator of value `0`
