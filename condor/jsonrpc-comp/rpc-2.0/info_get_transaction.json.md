```json copy 
{
  "name": "info_get_transaction",
  "summary": "returns a Transaction from the network",
  "params": [
    {
      "name": "transaction_hash",
      "schema": {
        "description": "The transaction hash.",
        "$ref": "#/components/schemas/TransactionHash"
      },
      "required": true
    },
    {
      "name": "finalized_approvals",
      "schema": {
        "description": "Whether to return the transaction with the finalized approvals substituted. If `false` or omitted, returns the transaction with the approvals that were originally received by the node.",
        "default": false,
        "type": "boolean"
      },
      "required": false
    }
  ],
  "result": {
    "name": "info_get_transaction_result",
    "schema": {
      "description": "Result for \"info_get_transaction\" RPC response.",
      "type": "object",
      "required": [
        "api_version",
        "transaction"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "transaction": {
          "description": "The transaction.",
          "$ref": "#/components/schemas/Transaction"
        },
        "execution_info": {
          "description": "Execution info, if available.",
          "anyOf": [
            {
              "$ref": "#/components/schemas/ExecutionInfo"
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
      "name": "info_get_transaction_example",
      "params": [
        {
          "name": "transaction_hash",
          "value": {
            "Version1": "f5582cb81a5abda63ebaa4edb3b05210ecbd63ffb8dd17bfbeb3b867f4014468"
          }
        },
        {
          "name": "finalized_approvals",
          "value": true
        }
      ],
      "result": {
        "name": "info_get_transaction_example_result",
        "value": {
          "api_version": "2.0.0",
          "transaction": {
            "Version1": {
              "hash": "f5582cb81a5abda63ebaa4edb3b05210ecbd63ffb8dd17bfbeb3b867f4014468",
              "header": {
                "chain_name": "casper-example",
                "timestamp": "2020-11-17T00:39:24.072Z",
                "ttl": "1h",
                "body_hash": "aa24833ffbf31d62c8c8c4265349e7c09cd71952fcbce6f7b12daf5e340bf2cc",
                "pricing_mode": {
                  "Fixed": {
                    "gas_price_tolerance": 5
                  }
                },
                "initiator_addr": {
                  "PublicKey": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"
                }
              },
              "body": {
                "args": [
                  [
                    "source",
                    {
                      "cl_type": {
                        "Option": "URef"
                      },
                      "bytes": "010a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a07",
                      "parsed": "uref-0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a-007"
                    }
                  ],
                  [
                    "target",
                    {
                      "cl_type": "URef",
                      "bytes": "1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b00",
                      "parsed": "uref-1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b-000"
                    }
                  ],
                  [
                    "amount",
                    {
                      "cl_type": "U512",
                      "bytes": "0500ac23fc06",
                      "parsed": "30000000000"
                    }
                  ],
                  [
                    "id",
                    {
                      "cl_type": {
                        "Option": "U64"
                      },
                      "bytes": "01e703000000000000",
                      "parsed": 999
                    }
                  ]
                ],
                "target": "Native",
                "entry_point": "Transfer",
                "transaction_category": 0,
                "scheduling": "Standard"
              },
              "approvals": [
                {
                  "signer": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
                  "signature": "0137d3f468d8f8a6e63f4110d79be29b8c8428e9cd858a92049660e7851ae16a299640d1fc1c930ab6cb424f1a6eec0b194df74bede14f4af1b5133106f1280d0b"
                }
              ]
            }
          },
          "execution_info": {
            "block_hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42",
            "block_height": 10,
            "execution_result": {
              "Version2": {
                "initiator": {
                  "PublicKey": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"
                },
                "error_message": null,
                "limit": "123456",
                "consumed": "100000",
                "cost": "246912",
                "payment": [
                  {
                    "source": "uref-0101010101010101010101010101010101010101010101010101010101010101-001"
                  }
                ],
                "transfers": [
                  {
                    "Version2": {
                      "transaction_hash": {
                        "Version1": "0101010101010101010101010101010101010101010101010101010101010101"
                      },
                      "from": {
                        "AccountHash": "account-hash-0202020202020202020202020202020202020202020202020202020202020202"
                      },
                      "to": "account-hash-0303030303030303030303030303030303030303030303030303030303030303",
                      "source": "uref-0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a-007",
                      "target": "uref-1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b-000",
                      "amount": "1000000000000",
                      "gas": "2500000000",
                      "id": 999
                    }
                  }
                ],
                "size_estimate": 186,
                "effects": [
                  {
                    "key": "account-hash-2c4a11c062a8a337bfc97e27fd66291caeb2c65865dcb5d3ef3759c4c97efecb",
                    "kind": {
                      "AddUInt64": 8
                    }
                  },
                  {
                    "key": "deploy-af684263911154d26fa05be9963171802801a0b6aff8f199b7391eacb8edc9e1",
                    "kind": "Identity"
                  }
                ]
              }
            }
          }
        }
      }
    }
  ]
}
 
``` 
