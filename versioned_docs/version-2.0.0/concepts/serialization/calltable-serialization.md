# Calltable serialization scheme

The `Calltable serialization scheme` is a way to byte-serialize data in a way that can change over time and can retain backwards compatibility.

## Calltable envelope

As mentioned before, the `calltable serialization approach` requires serializing a `calltable evelope`, from now called an `envelope`. The `envelope` consists of:

- `fields` - field which is an ordered collection of [Field](#field). This collection is serialized as a Vec&lt;Field&gt; in the "regular" `Binary Serialization Standard` schema. The invariants for `fields` are:
  - for each f<sub>i</sub>, f<sub>j</sub> given `i` < `j` implies f<sub>i</sub>.index < f<sub>j</sub>.index
  - for each f<sub>i</sub>, f<sub>j</sub> given `i` < `j` implies f<sub>i</sub>.offset < f<sub>j</sub>.offset
- `bytes` - field which is an amorphous blob of bytes serialized as `Bytes` in the "regular" `Binary Serialization Standard` schema.

A <span id="field">`Field`</span> consists of:

- `index` - field (`u16`),
- `offset` - field (`u32`),

The `fields` part of the envelope is the `self describing` data for the binary payload stored in `bytes`. To successfully serialize something into a calltable, we need to assign unique `serialization index` identifiers to it's parts. In a structure those parts would be fields. Let's denote the index of nth field as i<sub>n</sub>. We then byte-serialize (according to Binary Serialization Standard) each field, let's denote the calculated bytes of the n-th field as b<sub>n</sub>.
We create an ordered collection of indices `I` which constist of all the `serialization indices` of fields in an ascending order.

> I = [i<sub>0</sub>, i<sub>1</sub>, ..., i<sub>i-1</sub>, i<sub>i</sub>]

We create an ordered collection of bytes collection `B` from all b<sub>i</sub> keeping i's order, so:

> B = [b<sub>0</sub>, b<sub>1</sub>, ..., b<sub>i-1</sub>, b<sub>i</sub>]

Next, we can create the calltable `fields` and `bytes` with this example implementation:

```python

  def build_calltable_data(I, B):
      assert len(I) == len(B)
      offset = 0
      bytes_arr = bytes([])
      fields = []
      for i in range(0, len(I)):
          this_fields_serialization_index = I[i]
          this_field_bytes = B[i]
          this_field_length = len(this_field_bytes)
          fields.append({
              "index": this_fields_serialization_index,
              "offset": offset,
          })
          offset += this_field_length
          bytes_arr += this_field_bytes
      return {
          "fields": fields,
          "bytes": bytes_arr
      }

```

so in this example of usage:

```python
I = [0, 1, 3, 5]
B = [b'\x00\x01\xff', b'\x37\x0c\x6e\x3c\x0f', b'\x07\x95\x01', b'\x37']
envelope = build_calltable_data(I, B)
```

`envelope["fields"]` would be `[{'index': 0, 'offset': 0}, {'index': 1, 'offset': 3}, {'index': 3, 'offset': 8}, {'index': 5, 'offset': 11}]`

and `envelope["bytes"]` would be an array of bytes, which represented as hex string would look like:

```
00 01 ff 37 0c 6e 3c 0f 07 95 01 37
```

(whitespaces added for clarity)

Once we have the `fields` and `bytes` we can proceed to serialize those in the "default Binary Serialization Standard" way using this script:

```python
  def serialize_calltable_representation(fields, concatenated_serialized_fields):
      bytes_arr = bytes([])
      fields_len = len(fields)
      bytes_arr += fields_len.to_bytes(4, byteorder = 'little')
      for i in range(0, len(fields)):
          bytes_arr += fields[i]["index"].to_bytes(2, byteorder = 'little')
          bytes_arr += fields[i]["offset"].to_bytes(4, byteorder = 'little')
      bytes_arr += concatenated_serialized_fields
      return bytes_arr
```

and once we have all that we can apply the scripts to example:

```python
    I = [0, 1, 3, 5]
    B = [bytes([0, 1, 255]), bytes([55, 12, 110, 60, 15]), bytes([7, 149, 1]), bytes([55])]
    envelope = buildCalltableData(I, B)
    serialized_calltable_representation = serialize_calltable_representation(envelope["fields"], envelope["bytes"])
    print(f"{serialized_calltable_representation.hex()}")
```

which produces:

```
0400000000000000000001000300000003000800000005000b0000000001ff370c6e3c0f07950137
```

In the above hex:
| Serialized length of `fields` collection | field[0].index | field[0].offset | field[1].index | field[1].offset | field[2].index | field[2].offset | field[3].index | field[3].offset | bytes |
| ---------------------------------------- | -------------- | --------------- | -------------- | --------------- | -------------- | --------------- | -------------- | --------------- | ----- |
| 04000000 | 0000 | 00000000 | 0100 | 03000000 | 0300 | 08000000 | 0500 | 0b000000 | 0001ff370c6e3c0f07950137

This concludes how we construct and byte-serialize an `envelope`. In the next paragraphs we will explain what are the assumptions and conventions when dealing with `struct`s and `enum`s.

## Serializing uniform data structures

In this paragraph we will explain how to use `calltable serialization scheme` for non-polymorphic data structure. We know what their fields will be. We assign each field a unique `serialization index`, starting from `0`. For a specific structure, an index used for a field is assigned to that field indefinitely - if we ever decided to retire a field from a structure, we will stop using that index in the serialization. If we ever decide to add a field to a struct, we will add a new index that was never used for that structure. Although it is not required for the indices to be contiguous, the assumption is that we are assigning them one-by-one. Any "holes" in the indexing should indicate that there used to be a field that is no longer used or is not mandatory.

```rust
struct A {
    a: u16,
    b: String,
    c: Vec<OtherStruct>
}
```

In the above example we could assign `a` index `0`, `b` index `1` and `c` index `2`. Knowing this and assuming that we know how to byte-serialize `OtherStruct` we should be able to create an `envelope` for this struct and serialize it in the `calltable` scheme.

## Serializing enums

By `enums` we understand polymorphic, but limited (an instance of an enum can be only one of N known `variants`) data structures that are unions of structures and/or other enums. An enum variant can be:

- empty (tag variant)
- a struct
- a nested enum

As mentioned, there is a polymorphic aspect to these kinds of enums and we handle them by convention - `serialization index` `0` is always reserved for a 1 byte discriminator number which defines which enum variant is being serialized, the next indices are used to serialize the fields of specific variants (for empty tag variants there will be no more indices). So, given an enum:

```rust
  enum X {
     A,
     B {a: u16, b: u32},
     C (u16, u32, u64)
  }
```

First we need to chose variant discriminator values for each of the enum variants, let's select:

- if variant `A` - the variant discriminator will be `0`
- if variant `B` - the variant discriminator will be `1`
- if variant `C` - the variant discriminator will be `2`

Again, as with fields in `Serializing enums` the variant discriminator values don't need to start from `0` and don't need to be contiguous, but that is our convention and any "holes" in the definition would indicate a retired enum variant.

Next we need to assign field `serialization indices` for each variant:

- for A there are no fields so no indices are needed
- for B:
  - `1` for field `a` (remember, `0` is reserved for the discriminator),
  - `2` for field `b`
- for C:
  - `1` for the first tuple element (of type u16) (remember, `0` is reserved for the discriminator),
  - `2` for the second tuple element (of type u32),
  - `3` for the second tuple element (of type u64),

As you can see, `serialization indices` for fields need to be unique in scope of a particular enum variant.
Knowing the above, let's see how the `I` and `B` collections would look like for different instances of this enum:

- when serializing variant `X::A` (assuming python notation):
  ```python
  I = [0]
  B = [(0).to_bytes(1, byteorder = 'little')]
  ```
- when serializing variant `X::B {a: 155, b: 9500}` (assuming python notation):
  ```python
  I = [0, 1, 2]
  B = [(1).to_bytes(1, byteorder = 'little'), (155).to_bytes(2, byteorder = 'little'), (9500).to_bytes(4, byteorder = 'little')]
  ```
- when serializing variant `X::C(5, 10, 15)` (assuming python notation):
  ```python
  I = [0, 1, 2]
  B = [(2).to_bytes(1, byteorder = 'little'), (5).to_bytes(2, byteorder = 'little'), (10).to_bytes(4, byteorder = 'little'), (15).to_bytes(8, byteorder = 'little')]
  ```

You can apply the above `I` and `B` values to the prior defined functions: `build_calltable_data` and `serialize_calltable_representation` to determine the output bytes.
