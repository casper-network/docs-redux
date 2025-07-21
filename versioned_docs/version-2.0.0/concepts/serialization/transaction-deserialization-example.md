# Transaction deserialization example

```
**PLEASE NOTE** In this document long snippets representing hex-encoded bytes are split into 64 character lines. Putting such a text in multiple lines does not mean that the newline character is part of the binary payload - newlines are used purely as formatting.
```

In this document we will go through byte-deserialization of a full Transaction example. We will assume an examble binary payload and we will step-by-step deserialize it. The goal here is to show a real-life example of how calltable serialization works. To achieve that we will have a Transaction::Version1 variant since Transaction::Deploy doesn't use calltable serialization.

Here is an example hex-encoded byte array payload:

```
0x01030000000000000000000100200000000200170100007d01000013891c67
a803d1803c932c6a9c342a44e8adb7be3f287cd69a8cab8b2a446fa606000000
00000000000001003600000002003e0000000300460000000400520000000500
7d000000cb00000002000000000000000000010001000000220000000001d9bf
2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c7b00
00000000000080ee360000000000080000006d792d636861696e040000000000
0000000001000100000002000900000003000a0000000b0000000053aa080000
000000010104000000000005000000000000000001000f000000010000000000
00000000010000000002000f0000000100000000000000000001000000050300
0f0000000100000000000000000001000000000100000001d9bf2148748a85c8
9da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c013104d575cdd9a8
65a54eae377586dd2ea9912fde9511d3471f63a73c1162b7f6c7a290611a527f
c14247e4eb86c308c27f45d2ece4abc506291c600c54ee720b
```

## Deserializing Transaction

The first byte of the payload is `01`, by which we know that we need to attempt to treat it as a Transaction::Version1. We will drop the first byte and proceed deserializing the rest as `TransactionV1` - since that is the internal payload of Transaction::Version1

## Deserializing TransactionV1

After unpacking the discriminator byte for `Transaction` we are left with the following bytes:

```
0x030000000000000000000100200000000200170100007d01000013891c67a8
03d1803c932c6a9c342a44e8adb7be3f287cd69a8cab8b2a446fa60600000000
000000000001003600000002003e00000003004600000004005200000005007d
000000cb00000002000000000000000000010001000000220000000001d9bf21
48748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c7b0000
000000000080ee360000000000080000006d792d636861696e04000000000000
00000001000100000002000900000003000a0000000b0000000053aa08000000
0000010104000000000005000000000000000001000f00000001000000000000
000000010000000002000f00000001000000000000000000010000000503000f
0000000100000000000000000001000000000100000001d9bf2148748a85c89d
a5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c013104d575cdd9a865
a54eae377586dd2ea9912fde9511d3471f63a73c1162b7f6c7a290611a527fc1
4247e4eb86c308c27f45d2ece4abc506291c600c54ee720b
```

TransactionV1 is serialized using calltable representation. From the [calltable serialization](./calltable-serialization.md) document we know that we need to split the bytes into a header and payload:

Interpretation of the bytes representing header of the calltable envelope:

| hex formatted bytes | Interpretation                                                                                                                                              |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0x03000000          | le-encoded number of entries in the calltable header for TransactionV1                                                                                      |
| 0x0000              | le encoded `index` of the first calltable entry: `0` means `hash`                                                                                           |
| 0x00000000          | le encoded `offset` of the first calltable entry                                                                                                            |
| 0x0100              | le encoded `index` of the second calltable entry: `1` means `payload`                                                                                       |
| 0x20000000          | le encoded `offset` of the second calltable entry: `32` means that the bytes of `payload` start at byte 32 of the binary payload of the calltable envelope  |
| 0x0200              | le encoded `index` of the third calltable entry: `2` means `approvals`                                                                                      |
| 0x17010000          | le encoded `offset` of the third calltable entry: `279` means that the bytes of `payload` start at byte 279 of the binary payload of the calltable envelope |

Interpretation of the bytes representing payload of the calltable envelope:

| hex formatted bytes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Interpretation                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 0x7d010000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 381 (4-bytes unsigned LE) - number of bytes in the paylod                                            |
| 0x13891c67a803d1803c932c6a9c342a44e8adb7be3f287cd69a8cab8b2a446fa6                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `hash` field of type Digest, should be interpreted as [here](./types.md#digest-digest)               |
| 0x0600000000000000000001003600000002003e000000030046000000040052<br>00000005007d000000cb00000002000000000000000000010001000000220000<br>000001d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0a<br>e2900c7b0000000000000080ee360000000000080000006d792d636861696e04<br>00000000000000000001000100000002000900000003000a0000000b00000000<br>53aa080000000000010104000000000005000000000000000001000f00000001<br>000000000000000000010000000002000f000000010000000000000000000100<br>00000503000f000000010000000000000000000100000000 | binary representation of `payload` deserialization drill-down [here](#payload-field-deserialization) |
| 0x0100000001d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536<br>354f0ae2900c013104d575cdd9a865a54eae377586dd2ea9912fde9511d3471f<br>63a73c1162b7f6c7a290611a527fc14247e4eb86c308c27f45d2ece4abc50629<br>1c600c54ee720b                                                                                                                                                                                                                                                                                                                   | binary representation of a collection [Approvals](#deserializing-approvals)                          |

### `payload` field deserialization

Previously we established that the `payload` fields raw bytes are:

```
0x0600000000000000000001003600000002003e000000030046000000040052
00000005007d000000cb00000002000000000000000000010001000000220000
000001d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0a
e2900c7b0000000000000080ee360000000000080000006d792d636861696e04
00000000000000000001000100000002000900000003000a0000000b00000000
53aa080000000000010104000000000005000000000000000001000f00000001
000000000000000000010000000002000f000000010000000000000000000100
00000503000f000000010000000000000000000100000000
```

now we will attempt to deserialize it as an instance of `TransactionV1Payload`.

TransactionV1Payload is serialized using calltable representation. From the [calltable serialization](./calltable-serialization.md) document we know that we need to split the bytes into a header and payload:

Interpretation of the bytes representing header of the calltable envelope:

| hex formatted bytes | Interpretation                                                                                                             |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 0x06000000          | le-encoded number of entries in the calltable header for TransactionV1Payload                                              |
| 0x0000              | le encoded `index` of the first calltable entry: `0` means `initiator_addr`                                                |
| 0x00000000          | le encoded `offset` of the first calltable entry - means that the initiator_addr starts at index 0 of the envelope payload |
| 0x0100              | le encoded `index` of the second calltable entry: `1` means `timestamp`                                                    |
| 0x36000000          | le encoded `offset` of the second calltable entry - means that the timestamp starts at index 54 of the envelope payload    |
| 0x0200              | le encoded `index` of the third calltable entry: `2` means `ttl`                                                           |
| 0x3e000000          | le encoded `offset` of the third calltable entry - means that the ttl starts at index 62 of the envelope payload           |
| 0x0300              | le encoded `index` of the fourth calltable entry: `3` means `chain_name`                                                   |
| 0x46000000          | le encoded `offset` of the fourth calltable entry - means that the chain_name starts at index 70 of the envelope payload   |
| 0x0400              | le encoded `index` of the fifth calltable entry: `4` means `pricing_mode`                                                  |
| 0x52000000          | le encoded `offset` of the fifth calltable entry - means that the pricing_mode starts at index 82 of the envelope payload  |
| 0x0500              | le encoded `index` of the sixth calltable entry: `5` means `fields`                                                        |
| 0x7d000000          | le encoded `offset` of the sixth calltable entry - means that the fields starts at index 125 of the envelope payload       |

Interpretation of the bytes representing payload of the calltable envelope:

| hex formatted bytes                                                                                                                                                    | Interpretation                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0xcb000000                                                                                                                                                             | 203 (4-bytes unsigned LE) - number of bytes in the paylod                                                                                              |
| 0x02000000000000000000010001000000220000000001d9bf2148748a85c89d<br>a5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c                                                     | bytes which should be interpreted as `InitiatorAddr`                                                                                                   |
| 0x7b00000000000000                                                                                                                                                     | bytes which should be interpreted as `Timestamp` (le unsigned 8 bytes unix-style milliseconds value which translates to `123`)                         |
| 0x80ee360000000000                                                                                                                                                     | bytes which should be interpreted as `TTL` (le unsigned 8 bytes value which translates to `3600000`)                                                   |
| 0x080000006d792d636861696e                                                                                                                                             | bytes which should be interpreted as [`String`](./primitives.md#string-clvalue-string)                                                                 |
| 0x0400000000000000000001000100000002000900000003000a0000000b0000<br>000053aa0800000000000101                                                                           | bytes which should be interpreted as `PricingMode`                                                                                                     |
| 0x04000000000005000000000000000001000f00000001000000000000000000<br>010000000002000f00000001000000000000000000010000000503000f000000<br>010000000000000000000100000000 | bytes which should be interpreted as a map of field id -> field mapping. Please see [this paragraph](#payloadfields-field-deserialization) for details |

### `payload.initiator_addr` field deserialization

Previously we established that the `initiator_addr` fields raw bytes were:

```
0x02000000000000000000010001000000220000000001d9bf2148748a85c89
da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c
```

now we will attempt to deserialize it as an instance of `InitiatorAddr`.

InitiatorAddr is serialized using calltable representation. From the [calltable serialization](./calltable-serialization.md) document we know that we need to split the bytes into a header and payload:

Interpretation of the bytes representing header of the calltable envelope:

| hex formatted bytes | Interpretation                                                                                                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0x02000000          | le-encoded number of entries in the calltable header for InitiatorAddr                                                                                     |
| 0x0000              | le encoded `index` of the first calltable entry: `0` means variant discriminator of the union type (since InitiatorAddr is a union type)                   |
| 0x00000000          | le encoded `offset` of the first calltable entry - means that the variant discriminator starts at byte 0 of the envelope payload.                          |
| 0x0100              | le encoded `index` of the second calltable entry: `1` - we don't really know what field it is at this moment since we don't know what the variant is       |
| 0x01000000          | le encoded `offset` of the second calltable entry - means that the payload of the first field of the strucure starts at position 1 of the envelope payload |

Interpretation of the bytes representing payload of the calltable envelope:

| hex formatted bytes                                                      | Interpretation                                                                                                                                      |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0x22000000                                                               | 34 (4-bytes unsigned LE) - number of bytes in the paylod                                                                                            |
| 0x00                                                                     | value of the discriminator - deserializes to `PublicKey` variant. We now know that `index = 1` from the header points to an instance of `PublicKey` |
| 0x01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2<br>900c | `PublicKey` whish should be interpreted as [`explained here`](./types.md#publickey-publickey)                                                       |

### `payload.pricing_mode` field deserialization

Previously we established that the `pricing_mode` fields raw bytes were:

```
0x0400000000000000000001000100000002000900000003000a0000000b000
0000053aa0800000000000101
```

now we will attempt to deserialize it as an instance of `PricingMode`.

PricingMode is serialized using calltable representation. From the [calltable serialization](./calltable-serialization.md) document we know that we need to split the bytes into a header and payload:

Interpretation of the bytes representing header of the calltable envelope:

| hex formatted bytes | Interpretation                                                                                                                                            |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0x04000000          | le-encoded number of entries in the calltable header for PricingMode                                                                                      |
| 0x0000              | le encoded `index` of the first calltable entry: `0` means variant discriminator of the union type (since PricingMode is a union type)                    |
| 0x00000000          | le encoded `offset` of the first calltable entry - means that the variant discriminator starts at byte 0 of the envelope payload.                         |
| 0x0100              | le encoded `index` of the second calltable entry: `1` - we don't really know what field it is at this moment since we don't know what the variant is      |
| 0x01000000          | le encoded `offset` of the second calltable entry - means that the payload of the first field of the strucure starts at index 1 of the envelope payload   |
| 0x0200              | le encoded `index` of the third calltable entry: `2` - we don't really know what field it is at this moment since we don't know what the variant is       |
| 0x09000000          | le encoded `offset` of the third calltable entry - means that the payload of the second field of the strucure starts at index 9 of the envelope payload   |
| 0x0300              | le encoded `index` of the fourth calltable entry: `3` - we don't really know what field it is at this moment since we don't know what the variant is      |
| 0x0a000000          | le encoded `offset` of the fourth calltable entry - means that the payload of the second field of the strucure starts at index 10 of the envelope payload |

Interpretation of the bytes representing payload of the calltable envelope:

| hex formatted bytes | Interpretation                                                                                                                                                                                                                                                                                                                                            |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0x0b000000          | 11 (4-bytes unsigned LE) - number of bytes in the paylod                                                                                                                                                                                                                                                                                                  |
| 0x00                | value of the discriminator - deserializes to `PaymentLimited` variant. We now know that: `index = 1` from the header points to a 8 bytes unsigned number `payment_amount` field; `index = 2` from the header points to a 1 byte unsigned number `gas_price_tolerance` field; `index = 3` from the header points to a 1 byte bool `standard_payment` field |
| 0x53aa080000000000  | 567891 (8-bytes unsigned LE `payment_amount` )                                                                                                                                                                                                                                                                                                            |
| 0x01                | 1 (1-bytes unsigned LE) `gas_price_tolerance`                                                                                                                                                                                                                                                                                                             |
| 0x01                | true `standard_payment`                                                                                                                                                                                                                                                                                                                                   |

### `payload.fields` field deserialization

Previously we established that the `fields` fields raw bytes were:

```
0x04000000000005000000000000000001000f00000001000000000000000000
010000000002000f00000001000000000000000000010000000503000f000000
010000000000000000000100000000
```

Payload of this field is not serialized using calltable. It is serialized as a map (for details, see [here](#version1payloadfields)). We will attempt to deconstruct the payload:

| hex formatted bytes              | Interpretation                                                                                                                                                                                                                                                        |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0x04000000                       | `4` - number of entries in the map (4 bytes LE encoded unsigned number)                                                                                                                                                                                               |
| 0x0000                           | `0` - key of first entry (2 bytes encoded unsigned number)                                                                                                                                                                                                            |
| 0x05000000                       | `5` - number of bytes of the payload of the value under key `0` (4 bytes encoded unsigned number)                                                                                                                                                                     |
| 0x0000000000                     | 5 bytes read which is the raw payload for key `0`. Based on the fields index table [here](#version1payloadfields) we see that it should be interpreted as `TransactionArgs`. To deserialize `TransactionArgs` see [here](./types.md#transactionargs-transaction-args) |
| 0x0100                           | `1` - key of second entry (2 bytes encoded unsigned number)                                                                                                                                                                                                           |
| 0x0f000000                       | `15` - number of bytes of the payload of the value under key `1` (4 bytes encoded unsigned number)                                                                                                                                                                    |
| 0x010000000000000000000100000000 | 15 bytes read which is the raw payload for key `1`. Based on the fields index table [here](#version1payloadfields) we see that it should be interpreted as `TransactionTarget`. Deserialization explanation is [here](#payloadfields1-field-deserialization)          |
| 0x0200                           | `2` - key of third entry (2 bytes encoded unsigned number)                                                                                                                                                                                                            |
| 0x0f000000                       | `15` - number of bytes of the payload of the value under key `2` (4 bytes encoded unsigned number)                                                                                                                                                                    |
| 0x010000000000000000000100000005 | 15 bytes read which is the raw payload for key `2`. Based on the fields index table [here](#version1payloadfields) we see that it should be interpreted as `TransactionEntryPoint`. Deserialization explanation is [here](#payloadfields2-field-deserialization)      |
| 0x0300                           | `3` - key of third entry (2 bytes encoded unsigned number)                                                                                                                                                                                                            |
| 0x0f000000                       | `15` - number of bytes of the payload of the value under key `2` (4 bytes encoded unsigned number)                                                                                                                                                                    |
| 0x010000000000000000000100000000 | 15 bytes read which is the raw payload for key `2`. Based on the fields index table [here](#version1payloadfields) we see that it should be interpreted as `TransactionScheduling`. Deserialization explanation is [here](#payloadfields3-field-deserialization)      |

### `payload.fields.1` field deserialization

Previously we established that the TransactionTarget fields map entry raw bytes are:

```
0x010000000000000000000100000000
```

TransactionTarget is serialized using calltable representation. From the [calltable serialization](./calltable-serialization.md) document we know that we need to split the bytes into a header and payload:

Interpretation of the bytes representing header of the calltable envelope:

| hex formatted bytes | Interpretation                                                                                                                         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 0x01000000          | le-encoded number of entries in the calltable header for TransactionTarget                                                             |
| 0x0000              | le encoded `index` of the first calltable entry: `0` means variant discriminator of the union type (since PricingMode is a union type) |
| 0x00000000          | le encoded `offset` of the first calltable entry - means that the variant discriminator starts at byte 0 of the envelope payload.      |

Interpretation of the bytes representing payload of the calltable envelope:

| hex formatted bytes | Interpretation                                                                                |
| ------------------- | --------------------------------------------------------------------------------------------- |
| 0x01000000          | 1 (4-bytes unsigned LE) - number of bytes in the paylod                                       |
| 0x00                | `0` value of the discriminator - deserializes to `Native` variant. This variant has no fields |

### `payload.fields.2` field deserialization

Previously we established that the TransactionEntryPoint fields map entry raw bytes are:

```
0x010000000000000000000100000005
```

TransactionEntryPoint is serialized using calltable representation. From the [calltable serialization](./calltable-serialization.md) document we know that we need to split the bytes into a header and payload:

Interpretation of the bytes representing header of the calltable envelope:

| hex formatted bytes | Interpretation                                                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0x01000000          | le-encoded number of entries in the calltable header for TransactionEntryPoint                                                                   |
| 0x0000              | le encoded `index` of the first calltable entry: `0` means variant discriminator of the union type (since TransactionEntryPoint is a union type) |
| 0x00000000          | le encoded `offset` of the first calltable entry - means that the variant discriminator starts at byte 0 of the envelope payload.                |

Interpretation of the bytes representing payload of the calltable envelope:

| hex formatted bytes | Interpretation                                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| 0x01000000          | 1 (4-bytes unsigned LE) - number of bytes in the paylod                                         |
| 0x05                | `5` value of the discriminator - deserializes to `Delegate` variant. This variant has no fields |

### `payload.fields.3` field deserialization

Previously we established that the TransactionScheduling fields map entry raw bytes are:

```
0x010000000000000000000100000000
```

TransactionScheduling is serialized using calltable representation. From the [calltable serialization](./calltable-serialization.md) document we know that we need to split the bytes into a header and payload:

Interpretation of the bytes representing header of the calltable envelope:

| hex formatted bytes | Interpretation                                                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0x01000000          | le-encoded number of entries in the calltable header for TransactionScheduling                                                                   |
| 0x0000              | le encoded `index` of the first calltable entry: `0` means variant discriminator of the union type (since TransactionScheduling is a union type) |
| 0x00000000          | le encoded `offset` of the first calltable entry - means that the variant discriminator starts at byte 0 of the envelope payload.                |

Interpretation of the bytes representing payload of the calltable envelope:

| hex formatted bytes | Interpretation                                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| 0x01000000          | 1 (4-bytes unsigned LE) - number of bytes in the paylod                                         |
| 0x00                | `0` value of the discriminator - deserializes to `Standard` variant. This variant has no fields |

### deserializing Approvals

Previously we established that the `approvals` raw bytes are:

```
0x0100000001d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536
354f0ae2900c013104d575cdd9a865a54eae377586dd2ea9912fde9511d3471f
63a73c1162b7f6c7a290611a527fc14247e4eb86c308c27f45d2ece4abc50629
1c600c54ee720b
```

We can deserialize the above as [collection](./primitives.md#clvalue-list) of [approvals](./types.md#approval-approval)

## Helper script

The binary payload used in this example can be reproduced using the following script written in rust and facilitating the reference implementation [casper-types](https://crates.io/crates/casper-types) library.

```rust
    use casper_types::{
        Approval, Digest, InitiatorAddr, PricingMode, PublicKey, RuntimeArgs, SecretKey, TimeDiff,
        Timestamp, Transaction, TransactionArgs, TransactionEntryPoint, TransactionHash,
        TransactionScheduling, TransactionTarget, TransactionV1, TransactionV1Hash,
        TransactionV1Payload, bytesrepr::ToBytes,
    };
    use std::collections::{BTreeMap, BTreeSet};

    let signer_secret_key =
        SecretKey::ed25519_from_bytes([15u8; SecretKey::ED25519_LENGTH]).unwrap();
    let signer_public_key = PublicKey::from(&signer_secret_key);
    let timestamp = Timestamp::from(123);
    let ttl = TimeDiff::from_seconds(3600);
    let pricing_mode = PricingMode::PaymentLimited {
        payment_amount: 567_891_u64,
        gas_price_tolerance: 1,
        standard_payment: true,
    };
    let initiator_addr = InitiatorAddr::PublicKey(signer_public_key);
    let mut fields = BTreeMap::new();

    let arg = TransactionArgs::Named(RuntimeArgs::new());
    let arg_bytes = arg
        .to_bytes()
        .expect("should be able to serialize transaction args to bytes");
    fields.insert(0_u16, arg_bytes.into());

    let transaction_target = TransactionTarget::Native;
    let target_bytes = transaction_target
        .to_bytes()
        .expect("should be able to serialize transaction_target to bytes");
    fields.insert(1_u16, target_bytes.into());

    let entry_point = TransactionEntryPoint::Delegate;
    let entry_point_bytes = entry_point
        .to_bytes()
        .expect("should be able to serialize entry_point to bytes");
    fields.insert(2_u16, entry_point_bytes.into());

    let scheduling = TransactionScheduling::Standard;
    let scheduling_bytes = scheduling
        .to_bytes()
        .expect("should be able to serialize scheduling to bytes");
    fields.insert(3_u16, scheduling_bytes.into());

    let payload = TransactionV1Payload::new(
        "my-chain".to_owned(),
        timestamp,
        ttl,
        pricing_mode,
        initiator_addr,
        fields,
    );
    let payload_bytes = payload
        .to_bytes()
        .expect("It should be possible to turn payload into bytes");
    let hash = Digest::hash(payload_bytes);
    let approval = Approval::create(
        &TransactionHash::V1(TransactionV1Hash::from(hash)),
        &signer_secret_key,
    );
    let mut approvals = BTreeSet::new();
    approvals.insert(approval);

    let transaction_v1 = TransactionV1::new(hash.into(), payload, approvals);
    let transaction = Transaction::V1(transaction_v1);
    println!(
        "{}",
        hex::encode(
            transaction
                .to_bytes()
                .expect("Expected transaction to correctly serialize")
        )
    );
```
