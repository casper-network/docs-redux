```json copy
{
  "name": "account_put_deploy",
  "summary": "receives a Deploy to be executed by the network (DEPRECATED: use `account_put_transaction` instead)",
  "params": [
    {
      "name": "deploy",
      "schema": {
        "description": "The `Deploy`.",
        "$ref": "#/components/schemas/Deploy"
      },
      "required": true
    }
  ],
  "result": {
    "name": "account_put_deploy_result",
    "schema": {
      "description": "Result for \"account_put_deploy\" RPC response.",
      "type": "object",
      "required": [
        "api_version",
        "deploy_hash"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "deploy_hash": {
          "description": "The deploy hash.",
          "$ref": "#/components/schemas/DeployHash"
        }
      },
      "additionalProperties": false
    }
  },
  "examples": [
    {
      "name": "account_put_deploy_example",
      "params": [
        {
          "name": "deploy",
          "value": {
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
          }
        }
      ],
      "result": {
        "name": "account_put_deploy_example_result",
        "value": {
          "api_version": "2.0.0",
          "deploy_hash": "5c9b3b099c1378aa8e4a5f07f59ff1fcdc69a83179427c7e67ae0377d94d93fa"
        }
      }
    }
  ]
}
```