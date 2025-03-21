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
        "block": {
          "description": "The block, if found.",
          "anyOf": [
            {
              "$ref": "#/components/schemas/JsonBlock"
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
            "Hash": "13c2d7a68ecdd4b74bf4393c88915c836c863fc4bf11d7f2bd930a1bbccacdcb"
          }
        }
      ],
      "result": {
        "name": "chain_get_block_example_result",
        "value": {
          "api_version": "1.5.6",
          "block": {
            "hash": "13c2d7a68ecdd4b74bf4393c88915c836c863fc4bf11d7f2bd930a1bbccacdcb",
            "header": {
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
            "body": {
              "proposer": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
              "deploy_hashes": [],
              "transfer_hashes": [
                "5c9b3b099c1378aa8e4a5f07f59ff1fcdc69a83179427c7e67ae0377d94d93fa"
              ]
            },
            "proofs": [
              {
                "public_key": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
                "signature": "016291a7b2689e2edcc6e79030be50edd02f9bd7d809921ae2654012f808c7b9a0f125bc32d6aa610cbd012395a9832ccfaa9262023339f1db71ca073a13bb9707"
              }
            ]
          }
        }
      }
    }
  ]
}
 
``` 
