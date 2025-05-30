```json copy 
{
  "name": "info_get_deploy",
  "summary": "returns a Deploy from the network",
  "params": [
    {
      "name": "deploy_hash",
      "schema": {
        "description": "The deploy hash.",
        "$ref": "#/components/schemas/DeployHash"
      },
      "required": true
    },
    {
      "name": "finalized_approvals",
      "schema": {
        "description": "Whether to return the deploy with the finalized approvals substituted. If `false` or omitted, returns the deploy with the approvals that were originally received by the node.",
        "default": false,
        "type": "boolean"
      },
      "required": false
    }
  ],
  "result": {
    "name": "info_get_deploy_result",
    "schema": {
      "description": "Result for \"info_get_deploy\" RPC response.",
      "type": "object",
      "required": [
        "api_version",
        "deploy",
        "execution_results"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "deploy": {
          "description": "The deploy.",
          "$ref": "#/components/schemas/Deploy"
        },
        "execution_results": {
          "description": "The map of block hash to execution result.",
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/JsonExecutionResult"
          }
        },
        "block_hash": {
          "description": "The hash of this deploy's block.",
          "$ref": "#/components/schemas/BlockHash"
        },
        "block_height": {
          "description": "The height of this deploy's block.",
          "type": "integer",
          "format": "uint64",
          "minimum": 0.0
        }
      },
      "additionalProperties": false
    }
  },
  "examples": [
    {
      "name": "info_get_deploy_example",
      "params": [
        {
          "name": "deploy_hash",
          "value": "5c9b3b099c1378aa8e4a5f07f59ff1fcdc69a83179427c7e67ae0377d94d93fa"
        },
        {
          "name": "finalized_approvals",
          "value": true
        }
      ],
      "result": {
        "name": "info_get_deploy_example_result",
        "value": {
          "api_version": "1.5.6",
          "deploy": {
            "hash": "5c9b3b099c1378aa8e4a5f07f59ff1fcdc69a83179427c7e67ae0377d94d93fa",
            "header": {
              "account": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
              "timestamp": "2020-11-17T00:39:24.072Z",
              "ttl": "1h",
              "gas_price": 1,
              "body_hash": "d53cf72d17278fd47d399013ca389c50d589352f1a12593c0b8e01872a641b50",
              "dependencies": [
                "0101010101010101010101010101010101010101010101010101010101010101"
              ],
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
                      "cl_type": "I32",
                      "bytes": "e8030000",
                      "parsed": 1000
                    }
                  ]
                ]
              }
            },
            "session": {
              "Transfer": {
                "args": [
                  [
                    "amount",
                    {
                      "cl_type": "I32",
                      "bytes": "e8030000",
                      "parsed": 1000
                    }
                  ]
                ]
              }
            },
            "approvals": [
              {
                "signer": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
                "signature": "014c1a89f92e29dd74fc648f741137d9caf4edba97c5f9799ce0c9aa6b0c9b58db368c64098603dbecef645774c05dff057cb1f91f2cf390bbacce78aa6f084007"
              }
            ]
          },
          "execution_results": [
            {
              "block_hash": "13c2d7a68ecdd4b74bf4393c88915c836c863fc4bf11d7f2bd930a1bbccacdcb",
              "result": {
                "Success": {
                  "effect": {
                    "operations": [
                      {
                        "key": "account-hash-2c4a11c062a8a337bfc97e27fd66291caeb2c65865dcb5d3ef3759c4c97efecb",
                        "kind": "Write"
                      },
                      {
                        "key": "deploy-af684263911154d26fa05be9963171802801a0b6aff8f199b7391eacb8edc9e1",
                        "kind": "Read"
                      }
                    ],
                    "transforms": [
                      {
                        "key": "uref-2c4a11c062a8a337bfc97e27fd66291caeb2c65865dcb5d3ef3759c4c97efecb-007",
                        "transform": {
                          "AddUInt64": 8
                        }
                      },
                      {
                        "key": "deploy-af684263911154d26fa05be9963171802801a0b6aff8f199b7391eacb8edc9e1",
                        "transform": "Identity"
                      }
                    ]
                  },
                  "transfers": [
                    "transfer-5959595959595959595959595959595959595959595959595959595959595959",
                    "transfer-8282828282828282828282828282828282828282828282828282828282828282"
                  ],
                  "cost": "123456"
                }
              }
            }
          ]
        }
      }
    }
  ]
}
 
``` 
