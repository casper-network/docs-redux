# Transaction serialization example

```
**PLEASE NOTE** In this document long snippets representing hex-encoded bytes are split into 64 character lines. Putting such a text in multiple lines does not mean that the newline character is part of the binary payload - newlines are used purely as formatting.
```

In this document we will go through byte-serialization of a full Transaction example. We will first describe an example Transaction of variant Version1 and afterwards serialize it's parts to assemble a binary representation of the transaction.

In this document when we do signing of the hash it has beed done with a secret keys which `der` encoding is:
`0x302e020100300506032b6570042204209090909090909090909090909090909090909090909090909090909090909090`

## Structure of the example transaction

- Transaction

  - Transaction of variant Version1

    - `hash`: 0xde78f579a9afb234cb6ee3ab989a44f44a1544caa991a470dfa0eccde2937337 (hex encoded bytes of the Digest)
    - `payload`:

      - `initiator_addr`: `PublicKey` case with internal key of `Ed25519` variant and the actual key bytes as: `0x011a381879f8a8dc97361d012e3b472207cc7313ed1a81c918eebfa872b93414d9`
      - `timestamp`: timestamp with 1752478672515 milliseconds in unix epoch time
      - `ttl`: time period of 2 hours.
      - `chain_name`: string with value `abc`
      - `pricing_mode`: `PricingMode` of case `Fixed` with values:
        - `additional_computation_factor`: `2`
        - `gas_price_tolerance`: `3`
      - `fields`: A [map](./primitives.md#map-clvalue-map). This `fields` instance will have the following key-value mappings:
        - key `0`; => binary-serialized [`TransactionArgs`](./types.md#transactionargs-transaction-args) of variant `Named` with the inner RuntimeArgs being a map of "a" => "xyz". When serialized, this transaction args structure is 0x1600000000010000000100000061070000000300000078797a0a. An explanation how it was binary serialized see [`serializing transaction args`](#serializing-transaction-args)
        - key `1`; value as binary serialized [`TransactionTarget`](./transaction.md#transactiontarget) of variant `Native`. When serialized, this transaction args structure is 0x0d00000001000000000000000100000000. An explanation how it was binary serialized see [`serializing transaction target`](#serializing-transaction-target)
        - key `2`; value as binary serialized [`TransactionEntryPoint`](./transaction.md#transactionentrypoint) of variant `AddBid`. When serialized, this transaction args structure is 0x0f000000010000000000000000000100000003. An explanation how it was binary serialized see [`serializing transaction entry point`](#serializing-transaction-target)
        - key `3`; value as binary serialized [`TransactionScheduling`](./transaction.md#transactionentrypoint) of variant `Standard`. When serialized, this transaction args structure is 0x0d00000001000000000000000100000000. An explanation how it was binary serialized see [`serializing transaction scheduling`](#serializing-transaction-scheduling)

    - `approvals`:
      - `0`:
        - `signer`: 0x011a381879f8a8dc97361d012e3b472207cc7313ed1a81c918eebfa872b93414d9 (hex encoded bytes of a public key paired with the secret key mentioned a the start of the document)
        - `signature`: 0x01bcc0ee36a4bb5d8d7b8934bbd2e09270456eb201db15f6288490879c9a8e44d5a40514600952e6a541e9bf8f0bcc7f9dcec55533c0faec0b8674c979c8c86000 (hex encoded bytes of the signature)

## Serialization of the example Transaction

The first byte of the serialized pyalod will be `0x01` (based on [this](./transaction.md#version1), knowing that we are serializing `Version1`).
The next bytes are binary representation of [`TransactionV1`](./transaction.md#transactionv1). Binary representation of the `TransactionV1` from the example is:

```
0x030000000000000000000100200000000200150100007b010000de78f579a9
afb234cb6ee3ab989a44f44a1544caa991a470dfa0eccde29373370600000000
000000000001003600000002003e00000003004600000004004d00000005006a
000000c9000000020000000000000000000100010000002200000000011a3818
79f8a8dc97361d012e3b472207cc7313ed1a81c918eebfa872b93414d98366de
079801000000dd6d000000000003000000616263030000000000000000000100
0100000002000200000003000000010302040000000000160000000001000000
0100000061070000000300000078797a0a01000f000000010000000000000000
00010000000002000f00000001000000000000000000010000000303000f0000
0001000000000000000000010000000001000000011a381879f8a8dc97361d01
2e3b472207cc7313ed1a81c918eebfa872b93414d901bcc0ee36a4bb5d8d7b89
34bbd2e09270456eb201db15f6288490879c9a8e44d5a40514600952e6a541e9
bf8f0bcc7f9dcec55533c0faec0b8674c979c8c86000
```

You can find the step-by-step explanation [here](#serialization-of-transactionv1)

The final binary representation of the transaction is:

```
0x01030000000000000000000100200000000200150100007b010000de78f579
a9afb234cb6ee3ab989a44f44a1544caa991a470dfa0eccde293733706000000
00000000000001003600000002003e00000003004600000004004d0000000500
6a000000c9000000020000000000000000000100010000002200000000011a38
1879f8a8dc97361d012e3b472207cc7313ed1a81c918eebfa872b93414d98366
de079801000000dd6d0000000000030000006162630300000000000000000001
0001000000020002000000030000000103020400000000001600000000010000
000100000061070000000300000078797a0a01000f0000000100000000000000
0000010000000002000f00000001000000000000000000010000000303000f00
000001000000000000000000010000000001000000011a381879f8a8dc97361d
012e3b472207cc7313ed1a81c918eebfa872b93414d901bcc0ee36a4bb5d8d7b
8934bbd2e09270456eb201db15f6288490879c9a8e44d5a40514600952e6a541
e9bf8f0bcc7f9dcec55533c0faec0b8674c979c8c86000
```

## Serialization Of TransactionV1

To serialize `TransactionV1` we will use the calltable schema (see [here](./transaction.md#transactionv1)). The exaplanation of the individual bytes are below:

This particular `TransactionV1` consists of three fields:

- `hash`: `0xde78f579a9afb234cb6ee3ab989a44f44a1544caa991a470dfa0eccde2937337` (32 bytes)
- `payload`: `0x0600000000000000000001003600000002003e00000003004600000004004d00000005006a000000c9000000020000000000000000000100010000002200000000011a381879f8a8dc97361d012e3b472207cc7313ed1a81c918eebfa872b93414d98366de079801000000dd6d00000000000300000061626303000000000000000000010001000000020002000000030000000103020400000000001600000000010000000100000061070000000300000078797a0a01000f00000001000000000000000000010000000002000f00000001000000000000000000010000000303000f000000010000000000000000000100000000`
- `approvals` : `0x01000000011a381879f8a8dc97361d012e3b472207cc7313ed1a81c918eebfa872b93414d901bcc0ee36a4bb5d8d7b8934bbd2e09270456eb201db15f6288490879c9a8e44d5a40514600952e6a541e9bf8f0bcc7f9dcec55533c0faec0b8674c979c8c86000`

  | Calltable segment | Hex-fmt representation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Description                                                                 |
  | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
  | HEADER            | 0x03000000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | u32 encoded number of calltable header entries (TransactionV1 has 3 fields) |
  | HEADER            | 0x0000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | u16 encoded field index of the first field (`hash`)                         |
  | HEADER            | 0x00000000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | u32 encoded bytes offset where the `hash` starts in the raw payload         |
  | HEADER            | 0x0100                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | u16 encoded field index of the second field (`payload`)                     |
  | HEADER            | 0x20000000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | u32 encoded bytes offset where the `payload` starts in the raw payload      |
  | HEADER            | 0x0200                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | u16 encoded field index of the third field (`approvals`)                    |
  | HEADER            | 0x15010000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | u32 encoded bytes offset where the `approvals` starts in the raw payload    |
  | PAYLOAD           | 0x7b010000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | u32 encoded number of bytes of the raw payload                              |
  | PAYLOAD           | 0xde78f579a9afb234cb6ee3ab989a44f44a1544caa991a470dfa0eccde2937337                                                                                                                                                                                                                                                                                                                                                                                                                                           | bytes of `hash`                                                             |
  | PAYLOAD           | 0x0600000000000000000001003600000002003e00000003004600000004004d00000005006a000000c9000000020000000000000000000100010000002200000000011a381879f8a8dc97361d012e3b472207cc7313ed1a81c918eebfa872b93414d98366de079801000000dd6d00000000000300000061626303000000000000000000010001000000020002000000030000000103020400000000001600000000010000000100000061070000000300000078797a0a01000f00000001000000000000000000010000000002000f00000001000000000000000000010000000303000f000000010000000000000000000100000000 | bytes of `payload`                                                          |
  | PAYLOAD           | 0x01000000011a381879f8a8dc97361d012e3b472207cc7313ed1a81c918eebfa872b93414d901bcc0ee36a4bb5d8d7b8934bbd2e09270456eb201db15f6288490879c9a8e44d5a40514600952e6a541e9bf8f0bcc7f9dcec55533c0faec0b8674c979c8c86000                                                                                                                                                                                                                                                                                               | bytes of `approvals`                                                        |

Which concatenates to:

```
0x030000000000000000000100200000000200150100007b010000de78f579a9
afb234cb6ee3ab989a44f44a1544caa991a470dfa0eccde29373370600000000
000000000001003600000002003e00000003004600000004004d00000005006a
000000c9000000020000000000000000000100010000002200000000011a3818
79f8a8dc97361d012e3b472207cc7313ed1a81c918eebfa872b93414d98366de
079801000000dd6d000000000003000000616263030000000000000000000100
0100000002000200000003000000010302040000000000160000000001000000
0100000061070000000300000078797a0a01000f000000010000000000000000
00010000000002000f00000001000000000000000000010000000303000f0000
0001000000000000000000010000000001000000011a381879f8a8dc97361d01
2e3b472207cc7313ed1a81c918eebfa872b93414d901bcc0ee36a4bb5d8d7b89
34bbd2e09270456eb201db15f6288490879c9a8e44d5a40514600952e6a541e9
bf8f0bcc7f9dcec55533c0faec0b8674c979c8c86000
```

### Serializing Approvals

To recap, the approvals structure is as follows:

- `approvals`:
  - `0`:
    - `signer`: 0x011a381879f8a8dc97361d012e3b472207cc7313ed1a81c918eebfa872b93414d9 (hex encoded bytes of the public key)
    - `signature`: 0x01bcc0ee36a4bb5d8d7b8934bbd2e09270456eb201db15f6288490879c9a8e44d5a40514600952e6a541e9bf8f0bcc7f9dcec55533c0faec0b8674c979c8c86000 (hex encoded bytes of the signature)

The binary representation "blob" will be:

- 0x01000000 - `u32` encoded number of entries (1)
- 0x011a381879f8a8dc97361d012e3b472207cc7313ed1a81c918eebfa872b93414d9 - the signer bytes
- 0x01bcc0ee36a4bb5d8d7b8934bbd2e09270456eb201db15f6288490879c9a8e44d5a40514600952e6a541e9bf8f0bcc7f9dcec55533c0faec0b8674c979c8c86000 - the signature bytes

Concatenated:

```
0x01000000011a381879f8a8dc97361d012e3b472207cc7313ed1a81c918eebf
a872b93414d901bcc0ee36a4bb5d8d7b8934bbd2e09270456eb201db15f62884
90879c9a8e44d5a40514600952e6a541e9bf8f0bcc7f9dcec55533c0faec0b86
74c979c8c86000
```

### Serializing payload

To serialize `TransactionV1Payload` we will use the calltable schema (see [here](./transaction.md#transactionv1payload)). The exaplanation of the individual bytes are below:

This particular `TransactionV1Payload` consists of six fields:

- `initiator_addr`: it's binary serialization is `0x020000000000000000000100010000002200000000011a381879f8a8dc97361d012e3b472207cc7313ed1a81c918eebfa872b93414d9` (see [here](#serializing-initiatoraddr))
- `timestamp`: it's binary serialization is: `0x8366de0798010000` (see [here](#serializing-timestamp))
- `ttl`: it's binary serialization is: `0x00dd6d0000000000` (see [here](#serializing-ttl))
- `chain_name`: it's binary serialization is: `0x03000000616263` , (see [here](./primitives.md#clvalue-string))
- `pricing_mode`: it's binary serialization is: `0x0300000000000000000001000100000002000200000003000000010302` , (see [here](#serializing-pricing-mode))
- `fields`: it's binary serialization is: `0x0400000000001600000000010000000100000061070000000300000078797a0a01000f00000001000000000000000000010000000002000f00000001000000000000000000010000000303000f000000010000000000000000000100000000` , (see [here](#serializing-fields))

| Calltable segment | Hex-fmt representation                                                                                                                                                                           | Description                                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| HEADER            | 0x06000000                                                                                                                                                                                       | u32 encoded number of calltable header entries (this PricingMode binary representation will only have one field)      |
| HEADER            | 0x0000                                                                                                                                                                                           | index of the first field (`initiator_addr`)                                                                           |
| HEADER            | 0x00000000                                                                                                                                                                                       | bytes offset where the field with index `0` starts in the payload (we have no previous fields, so there is no offset) |
| HEADER            | 0x0100                                                                                                                                                                                           | u16 encoded field index of the second field (`timestamp`)                                                             |
| HEADER            | 0x36000000                                                                                                                                                                                       | u32 encoded bytes offset where the `timestamp` starts in the raw payload                                              |
| HEADER            | 0x0200                                                                                                                                                                                           | u16 encoded field index of the second field (`ttl`)                                                                   |
| HEADER            | 0x3e000000                                                                                                                                                                                       | u32 encoded bytes offset where the `ttl` starts in the raw payload                                                    |
| HEADER            | 0x0300                                                                                                                                                                                           | u16 encoded field index of the second field (`chain_name`)                                                            |
| HEADER            | 0x46000000                                                                                                                                                                                       | u32 encoded bytes offset where the `chain_name` starts in the raw payload                                             |
| HEADER            | 0x0400                                                                                                                                                                                           | u16 encoded field index of the second field (`pricing_mode`)                                                          |
| HEADER            | 0x4d000000                                                                                                                                                                                       | u32 encoded bytes offset where the `pricing_mode` starts in the raw payload                                           |
| HEADER            | 0x0500                                                                                                                                                                                           | u16 encoded field index of the second field (`fields`)                                                                |
| HEADER            | 0x6a000000                                                                                                                                                                                       | u32 encoded bytes offset where the `fields` starts in the raw payload                                                 |
| PAYLOAD           | 0xc9000000                                                                                                                                                                                       | u32 encoded number of bytes of the raw payload                                                                        |
| PAYLOAD           | 0x020000000000000000000100010000002200000000011a381879f8a8dc97361d012e3b472207cc7313ed1a81c918eebfa872b93414d9                                                                                   | bytes of `initiator_addr` value                                                                                       |
| PAYLOAD           | 0x8366de0798010000                                                                                                                                                                               | bytes of `timestamp` value                                                                                            |
| PAYLOAD           | 0x00dd6d0000000000                                                                                                                                                                               | bytes of `ttl` value                                                                                                  |
| PAYLOAD           | 0x03000000616263                                                                                                                                                                                 | bytes of `chain_name` value                                                                                           |
| PAYLOAD           | 0x0300000000000000000001000100000002000200000003000000010302                                                                                                                                     | bytes of `pricing_mode` value                                                                                         |
| PAYLOAD           | 0x0400000000001600000000010000000100000061070000000300000078797a0a01000f00000001000000000000000000010000000002000f00000001000000000000000000010000000303000f000000010000000000000000000100000000 | bytes of `fields` value                                                                                               |

Which concatenates to:

```
  0x0600000000000000000001003600000002003e00000003004600000004004d00000005006a000000c9000000020000000000000000000100010000002200000000011a381879f8a8dc97361d012e3b472207cc7313ed1a81c918eebfa872b93414d98366de079801000000dd6d00000000000300000061626303000000000000000000010001000000020002000000030000000103020400000000001600000000010000000100000061070000000300000078797a0a01000f00000001000000000000000000010000000002000f00000001000000000000000000010000000303000f000000010000000000000000000100000000
```

#### Serializing Pricing Mode

To serialize `PricingMode` we will use the calltable schema (see [here](./transaction.md#pricingmode)). This particular PricingMode is of type `Fixed` The exaplanation of the individual bytes are below:

| Calltable segment | Hex-fmt representation | Description                                                                                                           |
| ----------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------- |
| HEADER            | 0x03000000             | u32 encoded number of calltable header entries (this PricingMode binary representation will only have one field)      |
| HEADER            | 0x0000                 | index of the first field (for PricingMode, this is the `variant discriminator`)                                       |
| HEADER            | 0x00000000             | bytes offset where the field with index `0` starts in the payload (we have no previous fields, so there is no offset) |
| HEADER            | 0x0100                 | u16 encoded field index of the second field (`additional_computation_factor`)                                         |
| HEADER            | 0x01000000             | u32 encoded bytes offset where the `gas_price_tolerance` starts in the raw payload                                    |
| HEADER            | 0x0200                 | u16 encoded field index of the second field (`gas_price_tolerance`)                                                   |
| HEADER            | 0x02000000             | u32 encoded bytes offset where the `additional_computation_factor` starts in the raw payload                          |
| PAYLOAD           | 0x03000000             | u32 encoded number of bytes of the raw payload                                                                        |
| PAYLOAD           | 0x01                   | u8 encoded variant discriminator value for `Fixed` (1)                                                                |
| PAYLOAD           | 0x03                   | u8 encoded value of `gas_price_tolerance`                                                                             |
| PAYLOAD           | 0x02                   | u8 encoded value of `additional_computation_factor`                                                                   |

Which concatenates to:

```
  0x0300000000000000000001000100000002000200000003000000010302
```

#### Serializing payload.fields

Fields is a [map](./primitives.md#map-clvalue-map) which keys are u16 and values are collections of bytes. We can assemble the binary serialization as follows:

| hex-encoded bytes                                      | Explanation                                                                          |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| 0x04000000                                             | u32 encoded number of elements in the map (4)                                        |
| 0x0000                                                 | u16 encoded key: `0`                                                                 |
| 0x1600000000010000000100000061070000000300000078797a0a | binary payload of the first value (see [here](#serializing-transaction-args))        |
| 0x0100                                                 | u16 encoded key: `1`                                                                 |
| 0x0f000000010000000000000000000100000000               | binary payload of the first value (see [here](#serializing-transaction-target))      |
| 0x0200                                                 | u16 encoded key: `2`                                                                 |
| 0x0f000000010000000000000000000100000003               | binary payload of the first value (see [here](#serializing-transaction-entry-point)) |
| 0x0300                                                 | u16 encoded key: `2`                                                                 |
| 0x0f000000010000000000000000000100000000               | binary payload of the first value (see [here](#serializing-transaction-scheduling))  |

Which concatenates to:

```
0x0400000000001600000000010000000100000061070000000300000078797a
0a01000f00000001000000000000000000010000000002000f000000010000
00000000000000010000000303000f00000001000000000000000000010000
0000
```

#### Serializing Timestamp

Value of this field is serialized as explained [here](./types.md#timestamp-timestamp). It's binary serialization is: `0x8366de0798010000`

#### Serializing Ttl

Value of this field is serialized as explained [here](./types.md#timediff-timediff). It's binary serialization is: `0x00dd6d0000000000`

#### Serializing InitiatorAddr

To serialize `InitiatorAddr` we will use the calltable schema (see [here](./transaction.md#initiatoraddr)). This particular InitiatorAddr is of type `PublicKey` The exaplanation of the individual bytes are below:

| Calltable segment | Hex-fmt representation                                               | Description                                                                                                           |
| ----------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| HEADER            | 0x02000000                                                           | u32 encoded number of calltable header entries (this InitiatorAddr binary representation will only have one field)    |
| HEADER            | 0x0000                                                               | index of the first field (for InitiatorAddr, this is the `variant discriminator`)                                     |
| HEADER            | 0x00000000                                                           | bytes offset where the field with index `0` starts in the payload (we have no previous fields, so there is no offset) |
| HEADER            | 0x0100                                                               | index of the second field (for InitiatorAddr, this is the public key)                                                 |
| HEADER            | 0x01000000                                                           | bytes offset where the field with index `0` starts in the payload                                                     |
| PAYLOAD           | 0x22000000                                                           | u32 encoded number of bytes of the raw payload                                                                        |
| PAYLOAD           | 0x00                                                                 | value for the variant discriminator (`0` means "PublicKey")                                                           |
| PAYLOAD           | 0x011a381879f8a8dc97361d012e3b472207cc7313ed1a81c918eebfa872b93414d9 | raw bytes of the public key                                                                                           |

And the concatenated version is:

```
0x020000000000000000000100010000002200000000011a381879f8a8dc9736
1d012e3b472207cc7313ed1a81c918eebfa872b93414d9
```

### Serializing Transaction Args

To recap, the structure of `TransactionArgs` which we want to serialize is `TransactionArgs` of variant `Named`, the inner `RuntimeArgs`being a mapping of `"a" => "xyz"`.
Firstly let's serialize `RuntimeArgs`. It will be a collection of [NamedArg](./types.md#namedarg-namedarg). The collection has one element, so the first 4 bytes will be `0x010000`, followed by the first argumentname ("a") which binary reprentation is `0x0100000061`, followed by cl-value representation of `xyz` string which is `0x070000000300000078797a0a`. This gives binary representation of `RuntimeArgs`: `0x010000000100000061070000000300000078797a0a` By looking at [TransactionArgs doc](./types.md#transactionargs-transaction-args) we see that the binary represenation will be `0x00` followed by serialization of the RuntimeArgs, which gives `0x00010000000100000061070000000300000078797a0a`. We also should notice that the value that we will be putting into the `fields` map is going to be a binary representation of a collection of bytes. We will need to prepend the raw payload with the bytes-length of the payload (as described [here](./types.md#bytes-bytes)). The payload consists of 22 bytes, so the u32 representation of it's length is going to be `0x16000000` So the final "blob" of bytes that we will be putting into the `fields` map will be: `0x1600000000010000000100000061070000000300000078797a0a`.

### Serializing Transaction Target

To recap, the TransactionTarget which we want to serialize is a `Native` one. To serialize this we will be using the calltable scheme. To construct the binary representation we will need:

| Calltable segment | Hex-fmt representation | Description                                                                                                            |
| ----------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| HEADER            | 0x01000000             | u32 encoded number of calltable header entries (this TransactionTarget binary representation will only have one field) |
| HEADER            | 0x0000                 | index of the first field (for TransactionTarget, this is the `variant discriminator`)                                  |
| HEADER            | 0x00000000             | bytes offset where the field with index `0` starts in the payload (we have no previous fields, so there is no offset)  |
| PAYLOAD           | 0x01000000             | u32 encoded number of bytes of the raw payload                                                                         |
| PAYLOAD           | 0x00                   | first field (variant discriminator) value serialized (`TransactionTarget::Native`) serialized as u8                    |

Which gives a binary representation of: `0x010000000000000000000100000000`
We also should notice that the value that we will be putting into the `fields` map is going to be a binary representation of a collection of bytes. We will need to prepend the raw payload with the bytes-length of the payload (as described [here](./types.md#bytes-bytes)). The payload consists of 15 bytes, so the u32 representation of it's length is going to be `0x0f000000` So the final "blob" of bytes that we will be putting into the `fields` map will be: `0x0f000000010000000000000000000100000000`.

### Serializing Transaction Entry Point

To recap, the TransactionEntryPoint which we want to serialize is a `AddBid` one. To serialize this we will be using the calltable scheme. To construct the binary representation we will need:

| Calltable segment | Hex-fmt representation | Description                                                                                                                |
| ----------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| HEADER            | 0x01000000             | u32 encoded number of calltable header entries (this TransactionEntryPoint binary representation will only have one field) |
| HEADER            | 0x0000                 | index of the first field (for TransactionEntryPoint, this is the `variant discriminator`)                                  |
| HEADER            | 0x00000000             | bytes offset where the field with index `0` starts in the payload (we have no previous fields, so there is no offset)      |
| PAYLOAD           | 0x01000000             | u32 encoded number of bytes of the raw payload                                                                             |
| PAYLOAD           | 0x03                   | first field (variant discriminator) value serialized (`TransactionEntryPoint::AddBid`) serialized as u8                    |

Which gives a binary representation of: `0x010000000000000000000100000003`
We also should notice that the value that we will be putting into the `fields` map is going to be a binary representation of a collection of bytes. We will need to prepend the raw payload with the bytes-length of the payload (as described [here](./types.md#bytes-bytes)). The payload consists of 15 bytes, so the u32 representation of it's length is going to be `0x0f000000` So the final "blob" of bytes that we will be putting into the `fields` map will be: `0x0f000000010000000000000000000100000003`.

### Serializing Transaction Scheduling

To recap, the TransactionScheduling which we want to serialize is a `Standard` one. To serialize this we will be using the calltable scheme. To construct the binary representation we will need:

| Calltable segment | Hex-fmt representation | Description                                                                                                                |
| ----------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| HEADER            | 0x01000000             | u32 encoded number of calltable header entries (this TransactionScheduling binary representation will only have one field) |
| HEADER            | 0x0000                 | index of the first field (for TransactionScheduling, this is the `variant discriminator`)                                  |
| HEADER            | 0x00000000             | bytes offset where the field with index `0` starts in the payload (we have no previous fields, so there is no offset)      |
| PAYLOAD           | 0x01000000             | u32 encoded number of bytes of the raw payload                                                                             |
| PAYLOAD           |  0x00                  | raw payload                                                                                                                |

Which gives a binary representation of: `0x010000000000000000000100000000`
We also should notice that the value that we will be putting into the `fields` map is going to be a binary representation of a collection of bytes. We will need to prepend the raw payload with the bytes-length of the payload (as described [here](./types.md#bytes-bytes)). The payload consists of 15 bytes, so the u32 representation of it's length is going to be `0x0f000000` So the final "blob" of bytes that we will be putting into the `fields` map will be: `0x0f000000010000000000000000000100000000`.
