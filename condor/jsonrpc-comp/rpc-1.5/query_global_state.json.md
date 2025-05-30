```json copy 
{
  "name": "query_global_state",
  "summary": "a query to global state using either a Block hash or state root hash",
  "params": [
    {
      "name": "key",
      "schema": {
        "description": "`casper_types::Key` as formatted string.",
        "type": "string"
      },
      "required": true
    },
    {
      "name": "state_identifier",
      "schema": {
        "description": "The identifier used for the query. If none is passed the tip of the chain will be used.",
        "anyOf": [
          {
            "$ref": "#/components/schemas/GlobalStateIdentifier"
          },
          {
            "type": "null"
          }
        ]
      },
      "required": false
    },
    {
      "name": "path",
      "schema": {
        "description": "The path components starting from the key as base.",
        "default": [],
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "required": false
    }
  ],
  "result": {
    "name": "query_global_state_result",
    "schema": {
      "description": "Result for \"query_global_state\" RPC response.",
      "type": "object",
      "required": [
        "api_version",
        "merkle_proof",
        "stored_value"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "block_header": {
          "description": "The block header if a Block hash was provided.",
          "anyOf": [
            {
              "$ref": "#/components/schemas/JsonBlockHeader"
            },
            {
              "type": "null"
            }
          ]
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
      "name": "query_global_state_example",
      "params": [
        {
          "name": "state_identifier",
          "value": {
            "BlockHash": "13c2d7a68ecdd4b74bf4393c88915c836c863fc4bf11d7f2bd930a1bbccacdcb"
          }
        },
        {
          "name": "key",
          "value": "deploy-af684263911154d26fa05be9963171802801a0b6aff8f199b7391eacb8edc9e1"
        },
        {
          "name": "path",
          "value": []
        }
      ],
      "result": {
        "name": "query_global_state_example_result",
        "value": {
          "api_version": "1.5.6",
          "block_header": {
            "parent_hash": "0707070707070707070707070707070707070707070707070707070707070707",
            "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808",
            "body_hash": "cd502c5393a3c8b66d6979ad7857507c9baf5a8ba16ba99c28378d3a970fff42",
            "random_bit": true,
            "accumulated_seed": "ac979f51525cfd979b14aa7dc0737c5154eabe0db9280eceaa8dc8d2905b20d5",
            "era_end": {
              "era_report": {
                "equivocators": [
                  "013b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da29"
                ],
                "rewards": [
                  {
                    "validator": "018a88e3dd7409f195fd52db2d3cba5d72ca6709bf1d94121bf3748801b40f6f5c",
                    "amount": 1000
                  }
                ],
                "inactive_validators": [
                  "018139770ea87d175f56a35466c34c7ecccb8d8a91b4ee37a25df60f5b8fc9b394"
                ]
              },
              "next_era_validator_weights": [
                {
                  "validator": "016e7a1cdd29b0b78fd13af4c5598feff4ef2a97166e3ca6f2e4fbfccd80505bf1",
                  "weight": "456"
                },
                {
                  "validator": "018a875fff1eb38451577acd5afee405456568dd7c89e090863a0557bc7af49f17",
                  "weight": "789"
                },
                {
                  "validator": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
                  "weight": "123"
                }
              ]
            },
            "timestamp": "2020-11-17T00:39:24.072Z",
            "era_id": 1,
            "height": 10,
            "protocol_version": "1.0.0"
          },
          "stored_value": {
            "Account": {
              "account_hash": "account-hash-e94daaff79c2ab8d9c31d9c3058d7d0a0dd31204a5638dc1451fa67b2e3fb88c",
              "named_keys": [],
              "main_purse": "uref-09480c3248ef76b603d386f3f4f8a5f87f597d4eaffd475433f861af187ab5db-007",
              "associated_keys": [
                {
                  "account_hash": "account-hash-e94daaff79c2ab8d9c31d9c3058d7d0a0dd31204a5638dc1451fa67b2e3fb88c",
                  "weight": 1
                }
              ],
              "action_thresholds": {
                "deployment": 1,
                "key_management": 1
              }
            }
          },
          "merkle_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"
        }
      }
    }
  ]
}
 
``` 
