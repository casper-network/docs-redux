```json copy 
{
  "name": "chain_get_block",
  "summary": "returns a Block from the network",
  "params": [
    {
      "name": "block_identifier",
      "schema": {
        "description": "The block identifier.",
        "$ref": "#/components/schemas/BlockIdentifier"
      },
      "required": false
    }
  ],
  "result": {
    "name": "chain_get_block_result",
    "schema": {
      "description": "Result for \"chain_get_block\" RPC response.",
      "type": "object",
      "required": [
        "api_version"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "block_with_signatures": {
          "description": "The block, if found.",
          "anyOf": [
            {
              "$ref": "#/components/schemas/JsonBlockWithSignatures"
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "examples": [
    {
      "name": "chain_get_block_example",
      "params": [
        {
          "name": "block_identifier",
          "value": {
            "Hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42"
          }
        }
      ],
      "result": {
        "name": "chain_get_block_example_result",
        "value": {
          "api_version": "2.0.0",
          "block_with_signatures": {
            "block": {
              "Version2": {
                "hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42",
                "header": {
                  "parent_hash": "0707070707070707070707070707070707070707070707070707070707070707",
                  "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808",
                  "body_hash": "48859fb4865d8637d6a35cb224e222cd0e1b1c2dd72928932c1e35ac0550818b",
                  "random_bit": true,
                  "accumulated_seed": "ac979f51525cfd979b14aa7dc0737c5154eabe0db9280eceaa8dc8d2905b20d5",
                  "era_end": {
                    "equivocators": [
                      "013b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da29"
                    ],
                    "inactive_validators": [
                      "018139770ea87d175f56a35466c34c7ecccb8d8a91b4ee37a25df60f5b8fc9b394"
                    ],
                    "next_era_validator_weights": [
                      {
                        "validator": "013b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da29",
                        "weight": "123"
                      },
                      {
                        "validator": "016e7a1cdd29b0b78fd13af4c5598feff4ef2a97166e3ca6f2e4fbfccd80505bf1",
                        "weight": "456"
                      },
                      {
                        "validator": "018a875fff1eb38451577acd5afee405456568dd7c89e090863a0557bc7af49f17",
                        "weight": "789"
                      }
                    ],
                    "rewards": {},
                    "next_era_gas_price": 1
                  },
                  "timestamp": "2020-11-17T00:39:24.072Z",
                  "era_id": 1,
                  "height": 10,
                  "protocol_version": "1.0.0",
                  "proposer": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
                  "current_gas_price": 1,
                  "last_switch_block_hash": "0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a"
                },
                "body": {
                  "transactions": {
                    "0": [
                      {
                        "Version1": "1414141414141414141414141414141414141414141414141414141414141414"
                      }
                    ],
                    "1": [
                      {
                        "Version1": "1515151515151515151515151515151515151515151515151515151515151515"
                      }
                    ],
                    "2": [
                      {
                        "Version1": "1616161616161616161616161616161616161616161616161616161616161616"
                      }
                    ],
                    "3": [
                      {
                        "Version1": "1717171717171717171717171717171717171717171717171717171717171717"
                      }
                    ]
                  },
                  "rewarded_signatures": []
                }
              }
            },
            "proofs": [
              {
                "public_key": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
                "signature": "01e18ca03d2ef0238a6a2460a222e0b818406bda99d4c05502c80232013559b926d1c8bca6bf65386f54a847d7850cb76c0c5fd5e633c34c749b8b9958a638d806"
              }
            ]
          }
        }
      }
    }
  ]
}
 
``` 
