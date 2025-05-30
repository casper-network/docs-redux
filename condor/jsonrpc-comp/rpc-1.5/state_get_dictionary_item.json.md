```json copy 
{
  "name": "state_get_dictionary_item",
  "summary": "returns an item from a Dictionary",
  "params": [
    {
      "name": "state_root_hash",
      "schema": {
        "description": "Hash of the state root",
        "$ref": "#/components/schemas/Digest"
      },
      "required": true
    },
    {
      "name": "dictionary_identifier",
      "schema": {
        "description": "The Dictionary query identifier.",
        "$ref": "#/components/schemas/DictionaryIdentifier"
      },
      "required": true
    }
  ],
  "result": {
    "name": "state_get_dictionary_item_result",
    "schema": {
      "description": "Result for \"state_get_dictionary_item\" RPC response.",
      "type": "object",
      "required": [
        "api_version",
        "dictionary_key",
        "merkle_proof",
        "stored_value"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "dictionary_key": {
          "description": "The key under which the value is stored.",
          "type": "string"
        },
        "stored_value": {
          "description": "The stored value.",
          "$ref": "#/components/schemas/StoredValue"
        },
        "merkle_proof": {
          "description": "The Merkle proof.",
          "type": "string"
        }
      },
      "additionalProperties": false
    }
  },
  "examples": [
    {
      "name": "state_get_dictionary_item_example",
      "params": [
        {
          "name": "state_root_hash",
          "value": "0808080808080808080808080808080808080808080808080808080808080808"
        },
        {
          "name": "dictionary_identifier",
          "value": {
            "URef": {
              "seed_uref": "uref-09480c3248ef76b603d386f3f4f8a5f87f597d4eaffd475433f861af187ab5db-007",
              "dictionary_item_key": "a_unique_entry_identifier"
            }
          }
        }
      ],
      "result": {
        "name": "state_get_dictionary_item_example_result",
        "value": {
          "api_version": "1.5.6",
          "dictionary_key": "dictionary-67518854aa916c97d4e53df8570c8217ccc259da2721b692102d76acd0ee8d1f",
          "stored_value": {
            "CLValue": {
              "cl_type": "U64",
              "bytes": "0100000000000000",
              "parsed": 1
            }
          },
          "merkle_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"
        }
      }
    }
  ]
}
 
``` 
