```json copy 
{
  "openrpc": "1.0.0-rc1",
  "info": {
    "version": "2.0.0",
    "title": "Client API of Casper Node",
    "description": "This describes the JSON-RPC 2.0 API of a node on the Casper network.",
    "contact": {
      "name": "Casper Association",
      "url": "https://docs.casper.network"
    },
    "license": {
      "name": "APACHE LICENSE, VERSION 2.0",
      "url": "https://www.apache.org/licenses/LICENSE-2.0"
    }
  },
  "servers": [
    {
      "name": "any Sidecar with JSON RPC API enabled",
      "url": "http://IP:PORT/rpc/"
    }
  ],
  "methods": [
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
    },
    {
      "name": "account_put_transaction",
      "summary": "receives a Transaction to be executed by the network",
      "params": [
        {
          "name": "transaction",
          "schema": {
            "description": "The `Transaction`.",
            "$ref": "#/components/schemas/Transaction"
          },
          "required": true
        }
      ],
      "result": {
        "name": "account_put_transaction_result",
        "schema": {
          "description": "Result for \"account_put_transaction\" RPC response.",
          "type": "object",
          "required": [
            "api_version",
            "transaction_hash"
          ],
          "properties": {
            "api_version": {
              "description": "The RPC API version.",
              "type": "string"
            },
            "transaction_hash": {
              "description": "The transaction hash.",
              "$ref": "#/components/schemas/TransactionHash"
            }
          },
          "additionalProperties": false
        }
      },
      "examples": [
        {
          "name": "account_put_transaction_example",
          "params": [
            {
              "name": "transaction",
              "value": {
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
              }
            }
          ],
          "result": {
            "name": "account_put_transaction_example_result",
            "value": {
              "api_version": "2.0.0",
              "transaction_hash": {
                "Version1": "f5582cb81a5abda63ebaa4edb3b05210ecbd63ffb8dd17bfbeb3b867f4014468"
              }
            }
          }
        }
      ]
    },
    {
      "name": "info_get_deploy",
      "summary": "returns a Deploy from the network (DEPRECATED: use `info_get_transaction` instead)",
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
            "deploy"
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
              "api_version": "2.0.0",
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
    },
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
    },
    {
      "name": "state_get_account_info",
      "summary": "returns an Account from the network",
      "params": [
        {
          "name": "account_identifier",
          "schema": {
            "description": "The public key of the Account.",
            "$ref": "#/components/schemas/AccountIdentifier"
          },
          "required": true
        },
        {
          "name": "block_identifier",
          "schema": {
            "description": "The block identifier.",
            "anyOf": [
              {
                "$ref": "#/components/schemas/BlockIdentifier"
              },
              {
                "type": "null"
              }
            ]
          },
          "required": false
        }
      ],
      "result": {
        "name": "state_get_account_info_result",
        "schema": {
          "description": "Result for \"state_get_account_info\" RPC response.",
          "type": "object",
          "required": [
            "account",
            "api_version",
            "merkle_proof"
          ],
          "properties": {
            "api_version": {
              "description": "The RPC API version.",
              "type": "string"
            },
            "account": {
              "description": "The account.",
              "$ref": "#/components/schemas/Account"
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
          "name": "state_get_account_info_example",
          "params": [
            {
              "name": "account_identifier",
              "value": "013b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da29"
            },
            {
              "name": "block_identifier",
              "value": {
                "Hash": "0707070707070707070707070707070707070707070707070707070707070707"
              }
            }
          ],
          "result": {
            "name": "state_get_account_info_example_result",
            "value": {
              "api_version": "2.0.0",
              "account": {
                "account_hash": "account-hash-e94daaff79c2ab8d9c31d9c3058d7d0a0dd31204a5638dc1451fa67b2e3fb88c",
                "named_keys": [
                  {
                    "name": "main_purse",
                    "key": "uref-09480c3248ef76b603d386f3f4f8a5f87f597d4eaffd475433f861af187ab5db-007"
                  }
                ],
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
              },
              "merkle_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"
            }
          }
        }
      ]
    },
    {
      "name": "state_get_entity",
      "summary": "returns an AddressableEntity from the network",
      "params": [
        {
          "name": "entity_identifier",
          "schema": {
            "description": "The identifier of the entity.",
            "$ref": "#/components/schemas/EntityIdentifier"
          },
          "required": true
        },
        {
          "name": "block_identifier",
          "schema": {
            "description": "The block identifier.",
            "anyOf": [
              {
                "$ref": "#/components/schemas/BlockIdentifier"
              },
              {
                "type": "null"
              }
            ]
          },
          "required": false
        }
      ],
      "result": {
        "name": "state_get_entity_result",
        "schema": {
          "description": "Result for \"state_get_entity\" RPC response.",
          "type": "object",
          "required": [
            "api_version",
            "entity",
            "merkle_proof"
          ],
          "properties": {
            "api_version": {
              "description": "The RPC API version.",
              "type": "string"
            },
            "entity": {
              "description": "The addressable entity or a legacy account.",
              "$ref": "#/components/schemas/EntityOrAccount"
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
          "name": "state_get_entity_example",
          "params": [
            {
              "name": "entity_identifier",
              "value": {
                "EntityAddr": "entity-account-0000000000000000000000000000000000000000000000000000000000000000"
              }
            },
            {
              "name": "block_identifier",
              "value": {
                "Hash": "0707070707070707070707070707070707070707070707070707070707070707"
              }
            }
          ],
          "result": {
            "name": "state_get_entity_example_result",
            "value": {
              "api_version": "2.0.0",
              "entity": {
                "AddressableEntity": {
                  "entity": {
                    "protocol_version": "2.0.0",
                    "entity_kind": {
                      "Account": "account-hash-e94daaff79c2ab8d9c31d9c3058d7d0a0dd31204a5638dc1451fa67b2e3fb88c"
                    },
                    "package_hash": "package-0000000000000000000000000000000000000000000000000000000000000000",
                    "byte_code_hash": "byte-code-0000000000000000000000000000000000000000000000000000000000000000",
                    "main_purse": "uref-09480c3248ef76b603d386f3f4f8a5f87f597d4eaffd475433f861af187ab5db-007",
                    "associated_keys": [
                      {
                        "account_hash": "account-hash-e94daaff79c2ab8d9c31d9c3058d7d0a0dd31204a5638dc1451fa67b2e3fb88c",
                        "weight": 1
                      }
                    ],
                    "action_thresholds": {
                      "deployment": 1,
                      "upgrade_management": 1,
                      "key_management": 1
                    },
                    "message_topics": [
                      {
                        "topic_name": "topic",
                        "topic_name_hash": "0000000000000000000000000000000000000000000000000000000000000000"
                      }
                    ]
                  },
                  "named_keys": [
                    {
                      "name": "key",
                      "key": "hash-0000000000000000000000000000000000000000000000000000000000000000"
                    }
                  ],
                  "entry_points": [
                    {
                      "V1CasperVm": {
                        "name": "entry_point",
                        "args": [],
                        "ret": "Unit",
                        "access": "Public",
                        "entry_point_type": "Caller",
                        "entry_point_payment": "Caller"
                      }
                    }
                  ]
                }
              },
              "merkle_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"
            }
          }
        }
      ]
    },
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
              "api_version": "2.0.0",
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
    },
    {
      "name": "query_global_state",
      "summary": "a query to global state using either a Block hash or state root hash",
      "params": [
        {
          "name": "key",
          "schema": {
            "description": "The key under which to query.",
            "$ref": "#/components/schemas/Key"
          },
          "required": true
        },
        {
          "name": "state_identifier",
          "schema": {
            "description": "The identifier used for the query. If not provided, the tip of the chain will be used.",
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
                  "$ref": "#/components/schemas/BlockHeader"
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
                "BlockHash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42"
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
              "api_version": "2.0.0",
              "block_header": {
                "Version2": {
                  "parent_hash": "0707070707070707070707070707070707070707070707070707070707070707",
                  "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808",
                  "body_hash": "0505050505050505050505050505050505050505050505050505050505050505",
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
                  "last_switch_block_hash": "0909090909090909090909090909090909090909090909090909090909090909"
                }
              },
              "stored_value": {
                "Account": {
                  "account_hash": "account-hash-e94daaff79c2ab8d9c31d9c3058d7d0a0dd31204a5638dc1451fa67b2e3fb88c",
                  "named_keys": [
                    {
                      "name": "main_purse",
                      "key": "uref-09480c3248ef76b603d386f3f4f8a5f87f597d4eaffd475433f861af187ab5db-007"
                    }
                  ],
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
    },
    {
      "name": "query_balance",
      "summary": "query for a balance using a purse identifier and a state identifier",
      "params": [
        {
          "name": "purse_identifier",
          "schema": {
            "description": "The identifier to obtain the purse corresponding to balance query.",
            "$ref": "#/components/schemas/PurseIdentifier"
          },
          "required": true
        },
        {
          "name": "state_identifier",
          "schema": {
            "description": "The state identifier used for the query, if none is passed the tip of the chain will be used.",
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
        }
      ],
      "result": {
        "name": "query_balance_result",
        "schema": {
          "description": "Result for \"query_balance\" RPC response.",
          "type": "object",
          "required": [
            "api_version",
            "balance"
          ],
          "properties": {
            "api_version": {
              "description": "The RPC API version.",
              "type": "string"
            },
            "balance": {
              "description": "The available balance in motes (total balance - sum of all active holds).",
              "$ref": "#/components/schemas/U512"
            }
          }
        }
      },
      "examples": [
        {
          "name": "query_balance_example",
          "params": [
            {
              "name": "state_identifier",
              "value": {
                "BlockHash": "0707070707070707070707070707070707070707070707070707070707070707"
              }
            },
            {
              "name": "purse_identifier",
              "value": {
                "main_purse_under_account_hash": "account-hash-0909090909090909090909090909090909090909090909090909090909090909"
              }
            }
          ],
          "result": {
            "name": "query_balance_example_result",
            "value": {
              "api_version": "2.0.0",
              "balance": "123456"
            }
          }
        }
      ]
    },
    {
      "name": "query_balance_details",
      "summary": "query for full balance information using a purse identifier and a state identifier",
      "params": [
        {
          "name": "purse_identifier",
          "schema": {
            "description": "The identifier to obtain the purse corresponding to balance query.",
            "$ref": "#/components/schemas/PurseIdentifier"
          },
          "required": true
        },
        {
          "name": "state_identifier",
          "schema": {
            "description": "The identifier for the state used for the query, if none is passed, the latest block will be used.",
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
        }
      ],
      "result": {
        "name": "query_balance_details_result",
        "schema": {
          "description": "Result for \"query_balance_details\" RPC response.",
          "type": "object",
          "required": [
            "api_version",
            "available_balance",
            "holds",
            "total_balance",
            "total_balance_proof"
          ],
          "properties": {
            "api_version": {
              "description": "The RPC API version.",
              "type": "string"
            },
            "total_balance": {
              "description": "The purses total balance, not considering holds.",
              "$ref": "#/components/schemas/U512"
            },
            "available_balance": {
              "description": "The available balance in motes (total balance - sum of all active holds).",
              "$ref": "#/components/schemas/U512"
            },
            "total_balance_proof": {
              "description": "A proof that the given value is present in the Merkle trie.",
              "type": "string"
            },
            "holds": {
              "description": "Holds active at the requested point in time.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/BalanceHoldWithProof"
              }
            }
          }
        }
      },
      "examples": [
        {
          "name": "query_balance_details_example",
          "params": [
            {
              "name": "state_identifier",
              "value": {
                "BlockHash": "0707070707070707070707070707070707070707070707070707070707070707"
              }
            },
            {
              "name": "purse_identifier",
              "value": {
                "main_purse_under_account_hash": "account-hash-0909090909090909090909090909090909090909090909090909090909090909"
              }
            }
          ],
          "result": {
            "name": "query_balance_details_example_result",
            "value": {
              "api_version": "2.0.0",
              "total_balance": "123456",
              "available_balance": "123456",
              "total_balance_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3",
              "holds": [
                {
                  "time": 0,
                  "amount": "123456",
                  "proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"
                }
              ]
            }
          }
        }
      ]
    },
    {
      "name": "info_get_peers",
      "summary": "returns a list of peers connected to the node",
      "params": [],
      "result": {
        "name": "info_get_peers_result",
        "schema": {
          "description": "Result for \"info_get_peers\" RPC response.",
          "type": "object",
          "required": [
            "api_version",
            "peers"
          ],
          "properties": {
            "api_version": {
              "description": "The RPC API version.",
              "type": "string"
            },
            "peers": {
              "description": "The node ID and network address of each connected peer.",
              "$ref": "#/components/schemas/Peers"
            }
          },
          "additionalProperties": false
        }
      },
      "examples": [
        {
          "name": "info_get_peers_example",
          "params": [],
          "result": {
            "name": "info_get_peers_example_result",
            "value": {
              "api_version": "2.0.0",
              "peers": [
                {
                  "node_id": "tls:0101..0101",
                  "address": "127.0.0.1:54321"
                }
              ]
            }
          }
        }
      ]
    },
    {
      "name": "info_get_status",
      "summary": "returns the current status of the node",
      "params": [],
      "result": {
        "name": "info_get_status_result",
        "schema": {
          "description": "Result for \"info_get_status\" RPC response.",
          "type": "object",
          "required": [
            "api_version",
            "available_block_range",
            "block_sync",
            "build_version",
            "chainspec_name",
            "last_progress",
            "peers",
            "protocol_version",
            "reactor_state",
            "starting_state_root_hash",
            "uptime"
          ],
          "properties": {
            "api_version": {
              "description": "The RPC API version.",
              "type": "string"
            },
            "protocol_version": {
              "description": "The current Casper protocol version.",
              "$ref": "#/components/schemas/ProtocolVersion"
            },
            "peers": {
              "description": "The node ID and network address of each connected peer.",
              "$ref": "#/components/schemas/Peers"
            },
            "build_version": {
              "description": "The compiled node version.",
              "type": "string"
            },
            "chainspec_name": {
              "description": "The chainspec name.",
              "type": "string"
            },
            "starting_state_root_hash": {
              "description": "The state root hash of the lowest block in the available block range.",
              "$ref": "#/components/schemas/Digest"
            },
            "last_added_block_info": {
              "description": "The minimal info of the last block from the linear chain.",
              "anyOf": [
                {
                  "$ref": "#/components/schemas/MinimalBlockInfo"
                },
                {
                  "type": "null"
                }
              ]
            },
            "our_public_signing_key": {
              "description": "Our public signing key.",
              "anyOf": [
                {
                  "$ref": "#/components/schemas/PublicKey"
                },
                {
                  "type": "null"
                }
              ]
            },
            "round_length": {
              "description": "The next round length if this node is a validator.",
              "anyOf": [
                {
                  "$ref": "#/components/schemas/TimeDiff"
                },
                {
                  "type": "null"
                }
              ]
            },
            "next_upgrade": {
              "description": "Information about the next scheduled upgrade.",
              "anyOf": [
                {
                  "$ref": "#/components/schemas/NextUpgrade"
                },
                {
                  "type": "null"
                }
              ]
            },
            "uptime": {
              "description": "Time that passed since the node has started.",
              "$ref": "#/components/schemas/TimeDiff"
            },
            "reactor_state": {
              "description": "The name of the current state of node reactor.",
              "type": "string"
            },
            "last_progress": {
              "description": "Timestamp of the last recorded progress in the reactor.",
              "$ref": "#/components/schemas/Timestamp"
            },
            "available_block_range": {
              "description": "The available block range in storage.",
              "$ref": "#/components/schemas/AvailableBlockRange"
            },
            "block_sync": {
              "description": "The status of the block synchronizer builders.",
              "$ref": "#/components/schemas/BlockSynchronizerStatus"
            },
            "latest_switch_block_hash": {
              "description": "The hash of the latest switch block.",
              "anyOf": [
                {
                  "$ref": "#/components/schemas/BlockHash"
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
          "name": "info_get_status_example",
          "params": [],
          "result": {
            "name": "info_get_status_example_result",
            "value": {
              "api_version": "2.0.0",
              "protocol_version": "2.0.0",
              "peers": [
                {
                  "node_id": "tls:0101..0101",
                  "address": "127.0.0.1:54321"
                }
              ],
              "build_version": "1.0.0",
              "chainspec_name": "casper-example",
              "starting_state_root_hash": "0000000000000000000000000000000000000000000000000000000000000000",
              "last_added_block_info": {
                "hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42",
                "timestamp": "2020-11-17T00:39:24.072Z",
                "era_id": 1,
                "height": 10,
                "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808",
                "creator": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"
              },
              "our_public_signing_key": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
              "round_length": "1m 5s 536ms",
              "next_upgrade": {
                "activation_point": 42,
                "protocol_version": "2.0.1"
              },
              "uptime": "13s",
              "reactor_state": "Initialize",
              "last_progress": "1970-01-01T00:00:00.000Z",
              "available_block_range": {
                "low": 0,
                "high": 0
              },
              "block_sync": {
                "historical": {
                  "block_hash": "16ddf28e2b3d2e17f4cef36f8b58827eca917af225d139b0c77df3b4a67dc55e",
                  "block_height": 40,
                  "acquisition_state": "have strict finality(40) for: block hash 16dd..c55e"
                },
                "forward": {
                  "block_hash": "59907b1e32a9158169c4d89d9ce5ac9164fc31240bfcfb0969227ece06d74983",
                  "block_height": 6701,
                  "acquisition_state": "have block body(6701) for: block hash 5990..4983"
                }
              },
              "latest_switch_block_hash": "0000000000000000000000000000000000000000000000000000000000000000"
            }
          }
        }
      ]
    },
    {
      "name": "info_get_reward",
      "summary": "returns the reward for a given era and a validator or a delegator",
      "params": [
        {
          "name": "validator",
          "schema": {
            "description": "The public key of the validator.",
            "$ref": "#/components/schemas/PublicKey"
          },
          "required": true
        },
        {
          "name": "era_identifier",
          "schema": {
            "description": "The era identifier. If `None`, the last finalized era is used.",
            "anyOf": [
              {
                "$ref": "#/components/schemas/EraIdentifier"
              },
              {
                "type": "null"
              }
            ]
          },
          "required": false
        },
        {
          "name": "delegator",
          "schema": {
            "description": "The public key of the delegator. If `Some`, the rewards for the delegator are returned. If `None`, the rewards for the validator are returned.",
            "anyOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              },
              {
                "type": "null"
              }
            ]
          },
          "required": false
        }
      ],
      "result": {
        "name": "info_get_reward_result",
        "schema": {
          "description": "Result for \"info_get_reward\" RPC response.",
          "type": "object",
          "required": [
            "api_version",
            "delegation_rate",
            "era_id",
            "reward_amount"
          ],
          "properties": {
            "api_version": {
              "description": "The RPC API version.",
              "type": "string"
            },
            "reward_amount": {
              "description": "The total reward amount in the requested era.",
              "$ref": "#/components/schemas/U512"
            },
            "era_id": {
              "description": "The era for which the reward was calculated.",
              "$ref": "#/components/schemas/EraId"
            },
            "delegation_rate": {
              "description": "The delegation rate of the validator.",
              "type": "integer",
              "format": "uint8",
              "minimum": 0.0
            }
          },
          "additionalProperties": false
        }
      },
      "examples": [
        {
          "name": "info_get_reward_example",
          "params": [
            {
              "name": "era_identifier",
              "value": {
                "Era": 1
              }
            },
            {
              "name": "validator",
              "value": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"
            },
            {
              "name": "delegator",
              "value": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"
            }
          ],
          "result": {
            "name": "info_get_reward_example_result",
            "value": {
              "api_version": "2.0.0",
              "reward_amount": "42",
              "era_id": 1,
              "delegation_rate": 20
            }
          }
        }
      ]
    },
    {
      "name": "info_get_validator_changes",
      "summary": "returns status changes of active validators",
      "params": [],
      "result": {
        "name": "info_get_validator_changes_result",
        "schema": {
          "description": "Result for the \"info_get_validator_changes\" RPC.",
          "type": "object",
          "required": [
            "api_version",
            "changes"
          ],
          "properties": {
            "api_version": {
              "description": "The RPC API version.",
              "type": "string"
            },
            "changes": {
              "description": "The validators' status changes.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/JsonValidatorChanges"
              }
            }
          },
          "additionalProperties": false
        }
      },
      "examples": [
        {
          "name": "info_get_validator_changes_example",
          "params": [],
          "result": {
            "name": "info_get_validator_changes_example_result",
            "value": {
              "api_version": "2.0.0",
              "changes": [
                {
                  "public_key": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
                  "status_changes": [
                    {
                      "era_id": 1,
                      "validator_change": "Added"
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    {
      "name": "info_get_chainspec",
      "summary": "returns the raw bytes of the chainspec.toml, genesis accounts.toml, and global_state.toml files",
      "params": [],
      "result": {
        "name": "info_get_chainspec_result",
        "schema": {
          "description": "Result for the \"info_get_chainspec\" RPC.",
          "type": "object",
          "required": [
            "api_version",
            "chainspec_bytes"
          ],
          "properties": {
            "api_version": {
              "description": "The RPC API version.",
              "type": "string"
            },
            "chainspec_bytes": {
              "description": "The chainspec file bytes.",
              "$ref": "#/components/schemas/ChainspecRawBytes"
            }
          }
        }
      },
      "examples": [
        {
          "name": "info_get_chainspec_example",
          "params": [],
          "result": {
            "name": "info_get_chainspec_example_result",
            "value": {
              "api_version": "2.0.0",
              "chainspec_bytes": {
                "chainspec_bytes": "2a2a",
                "maybe_genesis_accounts_bytes": null,
                "maybe_global_state_bytes": null
              }
            }
          }
        }
      ]
    },
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
    },
    {
      "name": "chain_get_block_transfers",
      "summary": "returns all transfers for a Block from the network",
      "params": [
        {
          "name": "block_identifier",
          "schema": {
            "description": "The block hash.",
            "$ref": "#/components/schemas/BlockIdentifier"
          },
          "required": false
        }
      ],
      "result": {
        "name": "chain_get_block_transfers_result",
        "schema": {
          "description": "Result for \"chain_get_block_transfers\" RPC response.",
          "type": "object",
          "required": [
            "api_version"
          ],
          "properties": {
            "api_version": {
              "description": "The RPC API version.",
              "type": "string"
            },
            "block_hash": {
              "description": "The block hash, if found.",
              "anyOf": [
                {
                  "$ref": "#/components/schemas/BlockHash"
                },
                {
                  "type": "null"
                }
              ]
            },
            "transfers": {
              "description": "The block's transfers, if found.",
              "type": [
                "array",
                "null"
              ],
              "items": {
                "$ref": "#/components/schemas/Transfer"
              }
            }
          },
          "additionalProperties": false
        }
      },
      "examples": [
        {
          "name": "chain_get_block_transfers_example",
          "params": [
            {
              "name": "block_identifier",
              "value": {
                "Hash": "0707070707070707070707070707070707070707070707070707070707070707"
              }
            }
          ],
          "result": {
            "name": "chain_get_block_transfers_example_result",
            "value": {
              "api_version": "2.0.0",
              "block_hash": "0707070707070707070707070707070707070707070707070707070707070707",
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
              ]
            }
          }
        }
      ]
    },
    {
      "name": "chain_get_state_root_hash",
      "summary": "returns a state root hash at a given Block",
      "params": [
        {
          "name": "block_identifier",
          "schema": {
            "description": "The block hash.",
            "$ref": "#/components/schemas/BlockIdentifier"
          },
          "required": false
        }
      ],
      "result": {
        "name": "chain_get_state_root_hash_result",
        "schema": {
          "description": "Result for \"chain_get_state_root_hash\" RPC response.",
          "type": "object",
          "required": [
            "api_version"
          ],
          "properties": {
            "api_version": {
              "description": "The RPC API version.",
              "type": "string"
            },
            "state_root_hash": {
              "description": "Hex-encoded hash of the state root.",
              "anyOf": [
                {
                  "$ref": "#/components/schemas/Digest"
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
          "name": "chain_get_state_root_hash_example",
          "params": [
            {
              "name": "block_identifier",
              "value": {
                "Height": 10
              }
            }
          ],
          "result": {
            "name": "chain_get_state_root_hash_example_result",
            "value": {
              "api_version": "2.0.0",
              "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808"
            }
          }
        }
      ]
    },
    {
      "name": "state_get_item",
      "summary": "returns a stored value from the network. This RPC is deprecated, use `query_global_state` instead.",
      "params": [
        {
          "name": "state_root_hash",
          "schema": {
            "description": "Hash of the state root.",
            "$ref": "#/components/schemas/Digest"
          },
          "required": true
        },
        {
          "name": "key",
          "schema": {
            "description": "The key under which to query.",
            "$ref": "#/components/schemas/Key"
          },
          "required": true
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
        "name": "state_get_item_result",
        "schema": {
          "description": "Result for \"state_get_item\" RPC response.",
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
          "name": "state_get_item_example",
          "params": [
            {
              "name": "state_root_hash",
              "value": "0808080808080808080808080808080808080808080808080808080808080808"
            },
            {
              "name": "key",
              "value": "deploy-af684263911154d26fa05be9963171802801a0b6aff8f199b7391eacb8edc9e1"
            },
            {
              "name": "path",
              "value": [
                "inner"
              ]
            }
          ],
          "result": {
            "name": "state_get_item_example_result",
            "value": {
              "api_version": "2.0.0",
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
    },
    {
      "name": "state_get_balance",
      "summary": "returns a purse's balance from the network",
      "params": [
        {
          "name": "state_root_hash",
          "schema": {
            "description": "The hash of state root.",
            "$ref": "#/components/schemas/Digest"
          },
          "required": true
        },
        {
          "name": "purse_uref",
          "schema": {
            "description": "Formatted URef.",
            "type": "string"
          },
          "required": true
        }
      ],
      "result": {
        "name": "state_get_balance_result",
        "schema": {
          "description": "Result for \"state_get_balance\" RPC response.",
          "type": "object",
          "required": [
            "api_version",
            "balance_value",
            "merkle_proof"
          ],
          "properties": {
            "api_version": {
              "description": "The RPC API version.",
              "type": "string"
            },
            "balance_value": {
              "description": "The available balance in motes (total balance - sum of all active holds).",
              "$ref": "#/components/schemas/U512"
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
          "name": "state_get_balance_example",
          "params": [
            {
              "name": "state_root_hash",
              "value": "0808080808080808080808080808080808080808080808080808080808080808"
            },
            {
              "name": "purse_uref",
              "value": "uref-09480c3248ef76b603d386f3f4f8a5f87f597d4eaffd475433f861af187ab5db-007"
            }
          ],
          "result": {
            "name": "state_get_balance_example_result",
            "value": {
              "api_version": "2.0.0",
              "balance_value": "123456",
              "merkle_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"
            }
          }
        }
      ]
    },
    {
      "name": "chain_get_era_info_by_switch_block",
      "summary": "returns an EraInfo from the network",
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
        "name": "chain_get_era_info_by_switch_block_result",
        "schema": {
          "description": "Result for \"chain_get_era_info\" RPC response.",
          "type": "object",
          "required": [
            "api_version"
          ],
          "properties": {
            "api_version": {
              "description": "The RPC API version.",
              "type": "string"
            },
            "era_summary": {
              "description": "The era summary.",
              "anyOf": [
                {
                  "$ref": "#/components/schemas/EraSummary"
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
          "name": "chain_get_era_info_by_switch_block_example",
          "params": [
            {
              "name": "block_identifier",
              "value": {
                "Hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42"
              }
            }
          ],
          "result": {
            "name": "chain_get_era_info_by_switch_block_example_result",
            "value": {
              "api_version": "2.0.0",
              "era_summary": {
                "block_hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42",
                "era_id": 42,
                "stored_value": {
                  "EraInfo": {
                    "seigniorage_allocations": [
                      {
                        "Delegator": {
                          "delegator_public_key": "01e1b46a25baa8a5c28beb3c9cfb79b572effa04076f00befa57eb70b016153f18",
                          "validator_public_key": "012a1732addc639ea43a89e25d3ad912e40232156dcaa4b9edfc709f43d2fb0876",
                          "amount": "1000"
                        }
                      },
                      {
                        "Validator": {
                          "validator_public_key": "012a1732addc639ea43a89e25d3ad912e40232156dcaa4b9edfc709f43d2fb0876",
                          "amount": "2000"
                        }
                      }
                    ]
                  }
                },
                "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808",
                "merkle_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"
              }
            }
          }
        }
      ]
    },
    {
      "name": "state_get_auction_info",
      "summary": "returns the bids and validators as of either a specific block (by height or hash), or the most recently added block",
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
        "name": "state_get_auction_info_result",
        "schema": {
          "description": "Result for \"state_get_auction_info\" RPC response.",
          "type": "object",
          "required": [
            "api_version",
            "auction_state"
          ],
          "properties": {
            "api_version": {
              "description": "The RPC API version.",
              "type": "string"
            },
            "auction_state": {
              "description": "The auction state.",
              "$ref": "#/components/schemas/AuctionState"
            }
          },
          "additionalProperties": false
        }
      },
      "examples": [
        {
          "name": "state_get_auction_info_example",
          "params": [
            {
              "name": "block_identifier",
              "value": {
                "Hash": "0707070707070707070707070707070707070707070707070707070707070707"
              }
            }
          ],
          "result": {
            "name": "state_get_auction_info_example_result",
            "value": {
              "api_version": "2.0.0",
              "auction_state": {
                "state_root_hash": "0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b",
                "block_height": 10,
                "era_validators": [
                  {
                    "era_id": 10,
                    "validator_weights": [
                      {
                        "public_key": "01197f6b23e16c8532c6abc838facd5ea789be0c76b2920334039bfa8b3d368d61",
                        "weight": "10"
                      }
                    ]
                  }
                ],
                "bids": [
                  {
                    "public_key": "01197f6b23e16c8532c6abc838facd5ea789be0c76b2920334039bfa8b3d368d61",
                    "bid": {
                      "validator_public_key": "01197f6b23e16c8532c6abc838facd5ea789be0c76b2920334039bfa8b3d368d61",
                      "bonding_purse": "uref-fafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafa-007",
                      "staked_amount": "20",
                      "delegation_rate": 0,
                      "vesting_schedule": null,
                      "delegators": [
                        {
                          "delegator_public_key": "014508a07aa941707f3eb2db94c8897a80b2c1197476b6de213ac273df7d86c4ff",
                          "delegator": {
                            "delegator_public_key": "014508a07aa941707f3eb2db94c8897a80b2c1197476b6de213ac273df7d86c4ff",
                            "staked_amount": "10",
                            "bonding_purse": "uref-fbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfb-007",
                            "validator_public_key": "01197f6b23e16c8532c6abc838facd5ea789be0c76b2920334039bfa8b3d368d61",
                            "vesting_schedule": null
                          }
                        }
                      ],
                      "inactive": false
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    },
    {
      "name": "chain_get_era_summary",
      "summary": "returns the era summary at either a specific block (by height or hash), or the most recently added block",
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
        "name": "chain_get_era_summary_result",
        "schema": {
          "description": "Result for \"chain_get_era_summary\" RPC response.",
          "type": "object",
          "required": [
            "api_version",
            "era_summary"
          ],
          "properties": {
            "api_version": {
              "description": "The RPC API version.",
              "type": "string"
            },
            "era_summary": {
              "description": "The era summary.",
              "$ref": "#/components/schemas/EraSummary"
            }
          },
          "additionalProperties": false
        }
      },
      "examples": [
        {
          "name": "chain_get_era_summary_example",
          "params": [
            {
              "name": "block_identifier",
              "value": {
                "Hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42"
              }
            }
          ],
          "result": {
            "name": "chain_get_era_summary_example_result",
            "value": {
              "api_version": "2.0.0",
              "era_summary": {
                "block_hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42",
                "era_id": 42,
                "stored_value": {
                  "EraInfo": {
                    "seigniorage_allocations": [
                      {
                        "Delegator": {
                          "delegator_public_key": "01e1b46a25baa8a5c28beb3c9cfb79b572effa04076f00befa57eb70b016153f18",
                          "validator_public_key": "012a1732addc639ea43a89e25d3ad912e40232156dcaa4b9edfc709f43d2fb0876",
                          "amount": "1000"
                        }
                      },
                      {
                        "Validator": {
                          "validator_public_key": "012a1732addc639ea43a89e25d3ad912e40232156dcaa4b9edfc709f43d2fb0876",
                          "amount": "2000"
                        }
                      }
                    ]
                  }
                },
                "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808",
                "merkle_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"
              }
            }
          }
        }
      ]
    }
  ],
  "components": {
    "schemas": {
      "Deploy": {
        "description": "A signed smart contract.",
        "type": "object",
        "required": [
          "approvals",
          "hash",
          "header",
          "payment",
          "session"
        ],
        "properties": {
          "hash": {
            "$ref": "#/components/schemas/DeployHash"
          },
          "header": {
            "$ref": "#/components/schemas/DeployHeader"
          },
          "payment": {
            "$ref": "#/components/schemas/ExecutableDeployItem"
          },
          "session": {
            "$ref": "#/components/schemas/ExecutableDeployItem"
          },
          "approvals": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Approval"
            },
            "uniqueItems": true
          }
        },
        "additionalProperties": false
      },
      "DeployHash": {
        "description": "Hex-encoded deploy hash.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Digest"
          }
        ]
      },
      "Digest": {
        "description": "Hex-encoded hash digest.",
        "type": "string"
      },
      "DeployHeader": {
        "description": "The header portion of a [`Deploy`].",
        "type": "object",
        "required": [
          "account",
          "body_hash",
          "chain_name",
          "dependencies",
          "gas_price",
          "timestamp",
          "ttl"
        ],
        "properties": {
          "account": {
            "$ref": "#/components/schemas/PublicKey"
          },
          "timestamp": {
            "$ref": "#/components/schemas/Timestamp"
          },
          "ttl": {
            "$ref": "#/components/schemas/TimeDiff"
          },
          "gas_price": {
            "type": "integer",
            "format": "uint64",
            "minimum": 0.0
          },
          "body_hash": {
            "$ref": "#/components/schemas/Digest"
          },
          "dependencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/DeployHash"
            }
          },
          "chain_name": {
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "PublicKey": {
        "description": "Hex-encoded cryptographic public key, including the algorithm tag prefix.",
        "examples": [
          {
            "name": "SystemPublicKey",
            "description": "A pseudo public key, used for example when the system proposes an immediate switch block after a network upgrade rather than a specific validator. Its hex-encoded value is always '00', as is the corresponding pseudo signature's",
            "value": "00"
          },
          {
            "name": "Ed25519PublicKey",
            "description": "An Ed25519 public key. Its hex-encoded value begins '01' and is followed by 64 characters",
            "value": "018a88e3dd7409f195fd52db2d3cba5d72ca6709bf1d94121bf3748801b40f6f5c"
          },
          {
            "name": "Secp256k1PublicKey",
            "description": "A secp256k1 public key. Its hex-encoded value begins '02' and is followed by 66 characters",
            "value": "0203408e9526316fd1f8def480dd45b2cc72ffd732771c9ceb5d92ffa4051e6ee084"
          }
        ],
        "type": "string"
      },
      "Timestamp": {
        "description": "Timestamp formatted as per RFC 3339",
        "type": "string"
      },
      "TimeDiff": {
        "description": "Human-readable duration.",
        "type": "string"
      },
      "ExecutableDeployItem": {
        "description": "The executable component of a [`Deploy`].",
        "oneOf": [
          {
            "description": "Executable specified as raw bytes that represent Wasm code and an instance of [`RuntimeArgs`].",
            "type": "object",
            "required": [
              "ModuleBytes"
            ],
            "properties": {
              "ModuleBytes": {
                "type": "object",
                "required": [
                  "args",
                  "module_bytes"
                ],
                "properties": {
                  "module_bytes": {
                    "description": "Hex-encoded raw Wasm bytes.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/Bytes"
                      }
                    ]
                  },
                  "args": {
                    "description": "Runtime arguments.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/RuntimeArgs"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Stored contract referenced by its [`AddressableEntityHash`], entry point and an instance of [`RuntimeArgs`].",
            "type": "object",
            "required": [
              "StoredContractByHash"
            ],
            "properties": {
              "StoredContractByHash": {
                "type": "object",
                "required": [
                  "args",
                  "entry_point",
                  "hash"
                ],
                "properties": {
                  "hash": {
                    "description": "Hex-encoded contract hash.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/AddressableEntityHash"
                      }
                    ]
                  },
                  "entry_point": {
                    "description": "Name of an entry point.",
                    "type": "string"
                  },
                  "args": {
                    "description": "Runtime arguments.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/RuntimeArgs"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Stored contract referenced by a named key existing in the signer's account context, entry point and an instance of [`RuntimeArgs`].",
            "type": "object",
            "required": [
              "StoredContractByName"
            ],
            "properties": {
              "StoredContractByName": {
                "type": "object",
                "required": [
                  "args",
                  "entry_point",
                  "name"
                ],
                "properties": {
                  "name": {
                    "description": "Named key.",
                    "type": "string"
                  },
                  "entry_point": {
                    "description": "Name of an entry point.",
                    "type": "string"
                  },
                  "args": {
                    "description": "Runtime arguments.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/RuntimeArgs"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Stored versioned contract referenced by its [`PackageHash`], entry point and an instance of [`RuntimeArgs`].",
            "type": "object",
            "required": [
              "StoredVersionedContractByHash"
            ],
            "properties": {
              "StoredVersionedContractByHash": {
                "type": "object",
                "required": [
                  "args",
                  "entry_point",
                  "hash"
                ],
                "properties": {
                  "hash": {
                    "description": "Hex-encoded contract package hash.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/PackageHash"
                      }
                    ]
                  },
                  "version": {
                    "description": "An optional version of the contract to call. It will default to the highest enabled version if no value is specified.",
                    "type": [
                      "integer",
                      "null"
                    ],
                    "format": "uint32",
                    "minimum": 0.0
                  },
                  "entry_point": {
                    "description": "Entry point name.",
                    "type": "string"
                  },
                  "args": {
                    "description": "Runtime arguments.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/RuntimeArgs"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Stored versioned contract referenced by a named key existing in the signer's account context, entry point and an instance of [`RuntimeArgs`].",
            "type": "object",
            "required": [
              "StoredVersionedContractByName"
            ],
            "properties": {
              "StoredVersionedContractByName": {
                "type": "object",
                "required": [
                  "args",
                  "entry_point",
                  "name"
                ],
                "properties": {
                  "name": {
                    "description": "Named key.",
                    "type": "string"
                  },
                  "version": {
                    "description": "An optional version of the contract to call. It will default to the highest enabled version if no value is specified.",
                    "type": [
                      "integer",
                      "null"
                    ],
                    "format": "uint32",
                    "minimum": 0.0
                  },
                  "entry_point": {
                    "description": "Entry point name.",
                    "type": "string"
                  },
                  "args": {
                    "description": "Runtime arguments.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/RuntimeArgs"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A native transfer which does not contain or reference a Wasm code.",
            "type": "object",
            "required": [
              "Transfer"
            ],
            "properties": {
              "Transfer": {
                "type": "object",
                "required": [
                  "args"
                ],
                "properties": {
                  "args": {
                    "description": "Runtime arguments.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/RuntimeArgs"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "Bytes": {
        "description": "Hex-encoded bytes.",
        "type": "string"
      },
      "RuntimeArgs": {
        "description": "Represents a collection of arguments passed to a smart contract.",
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/NamedArg"
        }
      },
      "NamedArg": {
        "description": "Named arguments to a contract.",
        "type": "array",
        "items": [
          {
            "type": "string"
          },
          {
            "$ref": "#/components/schemas/CLValue"
          }
        ],
        "maxItems": 2,
        "minItems": 2
      },
      "CLValue": {
        "description": "A Casper value, i.e. a value which can be stored and manipulated by smart contracts.\n\nIt holds the underlying data as a type-erased, serialized `Vec<u8>` and also holds the CLType of the underlying data as a separate member.\n\nThe `parsed` field, representing the original value, is a convenience only available when a CLValue is encoded to JSON, and can always be set to null if preferred.",
        "type": "object",
        "required": [
          "bytes",
          "cl_type"
        ],
        "properties": {
          "cl_type": {
            "$ref": "#/components/schemas/CLType"
          },
          "bytes": {
            "type": "string"
          },
          "parsed": true
        },
        "additionalProperties": false
      },
      "CLType": {
        "description": "Casper types, i.e. types which can be stored and manipulated by smart contracts.\n\nProvides a description of the underlying data type of a [`CLValue`](crate::CLValue).",
        "oneOf": [
          {
            "description": "`bool` primitive.",
            "type": "string",
            "enum": [
              "Bool"
            ]
          },
          {
            "description": "`i32` primitive.",
            "type": "string",
            "enum": [
              "I32"
            ]
          },
          {
            "description": "`i64` primitive.",
            "type": "string",
            "enum": [
              "I64"
            ]
          },
          {
            "description": "`u8` primitive.",
            "type": "string",
            "enum": [
              "U8"
            ]
          },
          {
            "description": "`u32` primitive.",
            "type": "string",
            "enum": [
              "U32"
            ]
          },
          {
            "description": "`u64` primitive.",
            "type": "string",
            "enum": [
              "U64"
            ]
          },
          {
            "description": "[`U128`] large unsigned integer type.",
            "type": "string",
            "enum": [
              "U128"
            ]
          },
          {
            "description": "[`U256`] large unsigned integer type.",
            "type": "string",
            "enum": [
              "U256"
            ]
          },
          {
            "description": "[`U512`] large unsigned integer type.",
            "type": "string",
            "enum": [
              "U512"
            ]
          },
          {
            "description": "`()` primitive.",
            "type": "string",
            "enum": [
              "Unit"
            ]
          },
          {
            "description": "`String` primitive.",
            "type": "string",
            "enum": [
              "String"
            ]
          },
          {
            "description": "[`Key`] system type.",
            "type": "string",
            "enum": [
              "Key"
            ]
          },
          {
            "description": "[`URef`] system type.",
            "type": "string",
            "enum": [
              "URef"
            ]
          },
          {
            "description": "[`PublicKey`](crate::PublicKey) system type.",
            "type": "string",
            "enum": [
              "PublicKey"
            ]
          },
          {
            "description": "`Option` of a `CLType`.",
            "type": "object",
            "required": [
              "Option"
            ],
            "properties": {
              "Option": {
                "$ref": "#/components/schemas/CLType"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Variable-length list of a single `CLType` (comparable to a `Vec`).",
            "type": "object",
            "required": [
              "List"
            ],
            "properties": {
              "List": {
                "$ref": "#/components/schemas/CLType"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Fixed-length list of a single `CLType` (comparable to a Rust array).",
            "type": "object",
            "required": [
              "ByteArray"
            ],
            "properties": {
              "ByteArray": {
                "type": "integer",
                "format": "uint32",
                "minimum": 0.0
              }
            },
            "additionalProperties": false
          },
          {
            "description": "`Result` with `Ok` and `Err` variants of `CLType`s.",
            "type": "object",
            "required": [
              "Result"
            ],
            "properties": {
              "Result": {
                "type": "object",
                "required": [
                  "err",
                  "ok"
                ],
                "properties": {
                  "ok": {
                    "$ref": "#/components/schemas/CLType"
                  },
                  "err": {
                    "$ref": "#/components/schemas/CLType"
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Map with keys of a single `CLType` and values of a single `CLType`.",
            "type": "object",
            "required": [
              "Map"
            ],
            "properties": {
              "Map": {
                "type": "object",
                "required": [
                  "key",
                  "value"
                ],
                "properties": {
                  "key": {
                    "$ref": "#/components/schemas/CLType"
                  },
                  "value": {
                    "$ref": "#/components/schemas/CLType"
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          },
          {
            "description": "1-ary tuple of a `CLType`.",
            "type": "object",
            "required": [
              "Tuple1"
            ],
            "properties": {
              "Tuple1": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CLType"
                },
                "maxItems": 1,
                "minItems": 1
              }
            },
            "additionalProperties": false
          },
          {
            "description": "2-ary tuple of `CLType`s.",
            "type": "object",
            "required": [
              "Tuple2"
            ],
            "properties": {
              "Tuple2": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CLType"
                },
                "maxItems": 2,
                "minItems": 2
              }
            },
            "additionalProperties": false
          },
          {
            "description": "3-ary tuple of `CLType`s.",
            "type": "object",
            "required": [
              "Tuple3"
            ],
            "properties": {
              "Tuple3": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CLType"
                },
                "maxItems": 3,
                "minItems": 3
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Unspecified type.",
            "type": "string",
            "enum": [
              "Any"
            ]
          }
        ]
      },
      "AddressableEntityHash": {
        "description": "The hex-encoded address of the addressable entity.",
        "type": "string"
      },
      "PackageHash": {
        "description": "The hex-encoded address of the Package.",
        "type": "string"
      },
      "Approval": {
        "description": "A struct containing a signature of a transaction hash and the public key of the signer.",
        "type": "object",
        "required": [
          "signature",
          "signer"
        ],
        "properties": {
          "signer": {
            "$ref": "#/components/schemas/PublicKey"
          },
          "signature": {
            "$ref": "#/components/schemas/Signature"
          }
        },
        "additionalProperties": false
      },
      "Signature": {
        "description": "Hex-encoded cryptographic signature, including the algorithm tag prefix.",
        "type": "string"
      },
      "Transaction": {
        "description": "A versioned wrapper for a transaction or deploy.",
        "oneOf": [
          {
            "description": "A deploy.",
            "type": "object",
            "required": [
              "Deploy"
            ],
            "properties": {
              "Deploy": {
                "$ref": "#/components/schemas/Deploy"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A version 1 transaction.",
            "type": "object",
            "required": [
              "Version1"
            ],
            "properties": {
              "Version1": {
                "$ref": "#/components/schemas/TransactionV1"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "TransactionV1": {
        "description": "A unit of work sent by a client to the network, which when executed can cause global state to be altered.",
        "type": "object",
        "required": [
          "approvals",
          "body",
          "hash",
          "header"
        ],
        "properties": {
          "hash": {
            "$ref": "#/components/schemas/TransactionV1Hash"
          },
          "header": {
            "$ref": "#/components/schemas/TransactionV1Header"
          },
          "body": {
            "$ref": "#/components/schemas/TransactionV1Body"
          },
          "approvals": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Approval"
            },
            "uniqueItems": true
          }
        },
        "additionalProperties": false
      },
      "TransactionV1Hash": {
        "description": "Hex-encoded TransactionV1 hash.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Digest"
          }
        ]
      },
      "TransactionV1Header": {
        "description": "The header portion of a TransactionV1.",
        "type": "object",
        "required": [
          "body_hash",
          "chain_name",
          "initiator_addr",
          "pricing_mode",
          "timestamp",
          "ttl"
        ],
        "properties": {
          "chain_name": {
            "type": "string"
          },
          "timestamp": {
            "$ref": "#/components/schemas/Timestamp"
          },
          "ttl": {
            "$ref": "#/components/schemas/TimeDiff"
          },
          "body_hash": {
            "$ref": "#/components/schemas/Digest"
          },
          "pricing_mode": {
            "$ref": "#/components/schemas/PricingMode"
          },
          "initiator_addr": {
            "$ref": "#/components/schemas/InitiatorAddr"
          }
        },
        "additionalProperties": false
      },
      "PricingMode": {
        "description": "Pricing mode of a Transaction.",
        "oneOf": [
          {
            "description": "The original payment model, where the creator of the transaction specifies how much they will pay, at what gas price.",
            "type": "object",
            "required": [
              "Classic"
            ],
            "properties": {
              "Classic": {
                "type": "object",
                "required": [
                  "gas_price_tolerance",
                  "payment_amount",
                  "standard_payment"
                ],
                "properties": {
                  "payment_amount": {
                    "description": "User-specified payment amount.",
                    "type": "integer",
                    "format": "uint64",
                    "minimum": 0.0
                  },
                  "gas_price_tolerance": {
                    "description": "User-specified gas_price tolerance (minimum 1). This is interpreted to mean \"do not include this transaction in a block if the current gas price is greater than this number\"",
                    "type": "integer",
                    "format": "uint8",
                    "minimum": 0.0
                  },
                  "standard_payment": {
                    "description": "Standard payment.",
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          },
          {
            "description": "The cost of the transaction is determined by the cost table, per the transaction category.",
            "type": "object",
            "required": [
              "Fixed"
            ],
            "properties": {
              "Fixed": {
                "type": "object",
                "required": [
                  "gas_price_tolerance"
                ],
                "properties": {
                  "gas_price_tolerance": {
                    "description": "User-specified gas_price tolerance (minimum 1). This is interpreted to mean \"do not include this transaction in a block if the current gas price is greater than this number\"",
                    "type": "integer",
                    "format": "uint8",
                    "minimum": 0.0
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          },
          {
            "description": "The payment for this transaction was previously reserved, as proven by the receipt hash (this is for future use, not currently implemented).",
            "type": "object",
            "required": [
              "Reserved"
            ],
            "properties": {
              "Reserved": {
                "type": "object",
                "required": [
                  "receipt"
                ],
                "properties": {
                  "receipt": {
                    "description": "Pre-paid receipt.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/Digest"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "InitiatorAddr": {
        "description": "The address of the initiator of a TransactionV1.",
        "oneOf": [
          {
            "description": "The public key of the initiator.",
            "type": "object",
            "required": [
              "PublicKey"
            ],
            "properties": {
              "PublicKey": {
                "$ref": "#/components/schemas/PublicKey"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "The account hash derived from the public key of the initiator.",
            "type": "object",
            "required": [
              "AccountHash"
            ],
            "properties": {
              "AccountHash": {
                "$ref": "#/components/schemas/AccountHash"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "AccountHash": {
        "description": "Account hash as a formatted string.",
        "type": "string"
      },
      "TransactionV1Body": {
        "description": "Body of a `TransactionV1`.",
        "type": "object",
        "required": [
          "args",
          "entry_point",
          "scheduling",
          "target",
          "transaction_category"
        ],
        "properties": {
          "args": {
            "$ref": "#/components/schemas/RuntimeArgs"
          },
          "target": {
            "$ref": "#/components/schemas/TransactionTarget"
          },
          "entry_point": {
            "$ref": "#/components/schemas/TransactionEntryPoint"
          },
          "transaction_category": {
            "type": "integer",
            "format": "uint8",
            "minimum": 0.0
          },
          "scheduling": {
            "$ref": "#/components/schemas/TransactionScheduling"
          }
        },
        "additionalProperties": false
      },
      "TransactionTarget": {
        "description": "Execution target of a Transaction.",
        "oneOf": [
          {
            "description": "The execution target is a native operation (e.g. a transfer).",
            "type": "string",
            "enum": [
              "Native"
            ]
          },
          {
            "description": "The execution target is a stored entity or package.",
            "type": "object",
            "required": [
              "Stored"
            ],
            "properties": {
              "Stored": {
                "type": "object",
                "required": [
                  "id",
                  "runtime"
                ],
                "properties": {
                  "id": {
                    "description": "The identifier of the stored execution target.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/TransactionInvocationTarget"
                      }
                    ]
                  },
                  "runtime": {
                    "description": "The execution runtime to use.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/TransactionRuntime"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          },
          {
            "description": "The execution target is the included module bytes, i.e. compiled Wasm.",
            "type": "object",
            "required": [
              "Session"
            ],
            "properties": {
              "Session": {
                "type": "object",
                "required": [
                  "module_bytes",
                  "runtime"
                ],
                "properties": {
                  "module_bytes": {
                    "description": "The compiled Wasm.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/Bytes"
                      }
                    ]
                  },
                  "runtime": {
                    "description": "The execution runtime to use.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/TransactionRuntime"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "TransactionInvocationTarget": {
        "description": "Identifier of a `Stored` transaction target.",
        "oneOf": [
          {
            "description": "Hex-encoded entity address identifying the invocable entity.",
            "type": "object",
            "required": [
              "ByHash"
            ],
            "properties": {
              "ByHash": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "The alias identifying the invocable entity.",
            "type": "object",
            "required": [
              "ByName"
            ],
            "properties": {
              "ByName": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "The address and optional version identifying the package.",
            "type": "object",
            "required": [
              "ByPackageHash"
            ],
            "properties": {
              "ByPackageHash": {
                "type": "object",
                "required": [
                  "addr"
                ],
                "properties": {
                  "addr": {
                    "description": "Hex-encoded address of the package.",
                    "type": "string"
                  },
                  "version": {
                    "description": "The package version.\n\nIf `None`, the latest enabled version is implied.",
                    "type": [
                      "integer",
                      "null"
                    ],
                    "format": "uint32",
                    "minimum": 0.0
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          },
          {
            "description": "The alias and optional version identifying the package.",
            "type": "object",
            "required": [
              "ByPackageName"
            ],
            "properties": {
              "ByPackageName": {
                "type": "object",
                "required": [
                  "name"
                ],
                "properties": {
                  "name": {
                    "description": "The package name.",
                    "type": "string"
                  },
                  "version": {
                    "description": "The package version.\n\nIf `None`, the latest enabled version is implied.",
                    "type": [
                      "integer",
                      "null"
                    ],
                    "format": "uint32",
                    "minimum": 0.0
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "TransactionRuntime": {
        "description": "Runtime used to execute a Transaction.",
        "oneOf": [
          {
            "description": "The Casper Version 1 Virtual Machine.",
            "type": "string",
            "enum": [
              "VmCasperV1"
            ]
          },
          {
            "description": "The Casper Version 2 Virtual Machine.",
            "type": "string",
            "enum": [
              "VmCasperV2"
            ]
          }
        ]
      },
      "TransactionEntryPoint": {
        "description": "Entry point of a Transaction.",
        "oneOf": [
          {
            "description": "The standard `call` entry point used in session code.",
            "type": "string",
            "enum": [
              "Call"
            ]
          },
          {
            "description": "A non-native, arbitrary entry point.",
            "type": "object",
            "required": [
              "Custom"
            ],
            "properties": {
              "Custom": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "The `transfer` native entry point, used to transfer `Motes` from a source purse to a target purse.",
            "type": "string",
            "enum": [
              "Transfer"
            ]
          },
          {
            "description": "The `add_bid` native entry point, used to create or top off a bid purse.",
            "type": "string",
            "enum": [
              "AddBid"
            ]
          },
          {
            "description": "The `withdraw_bid` native entry point, used to decrease a stake.",
            "type": "string",
            "enum": [
              "WithdrawBid"
            ]
          },
          {
            "description": "The `delegate` native entry point, used to add a new delegator or increase an existing delegator's stake.",
            "type": "string",
            "enum": [
              "Delegate"
            ]
          },
          {
            "description": "The `undelegate` native entry point, used to reduce a delegator's stake or remove the delegator if the remaining stake is 0.",
            "type": "string",
            "enum": [
              "Undelegate"
            ]
          },
          {
            "description": "The `redelegate` native entry point, used to reduce a delegator's stake or remove the delegator if the remaining stake is 0, and after the unbonding delay, automatically delegate to a new validator.",
            "type": "string",
            "enum": [
              "Redelegate"
            ]
          },
          {
            "description": "The `activate_bid` native entry point, used to used to reactivate an inactive bid.",
            "type": "string",
            "enum": [
              "ActivateBid"
            ]
          },
          {
            "description": "The `change_bid_public_key` native entry point, used to change a bid's public key.",
            "type": "string",
            "enum": [
              "ChangeBidPublicKey"
            ]
          }
        ]
      },
      "TransactionScheduling": {
        "description": "Scheduling mode of a Transaction.",
        "oneOf": [
          {
            "description": "No special scheduling applied.",
            "type": "string",
            "enum": [
              "Standard"
            ]
          },
          {
            "description": "Execution should be scheduled for the specified era.",
            "type": "object",
            "required": [
              "FutureEra"
            ],
            "properties": {
              "FutureEra": {
                "$ref": "#/components/schemas/EraId"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Execution should be scheduled for the specified timestamp or later.",
            "type": "object",
            "required": [
              "FutureTimestamp"
            ],
            "properties": {
              "FutureTimestamp": {
                "$ref": "#/components/schemas/Timestamp"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "EraId": {
        "description": "Era ID newtype.",
        "type": "integer",
        "format": "uint64",
        "minimum": 0.0
      },
      "TransactionHash": {
        "description": "A versioned wrapper for a transaction hash or deploy hash.",
        "oneOf": [
          {
            "description": "A deploy hash.",
            "type": "object",
            "required": [
              "Deploy"
            ],
            "properties": {
              "Deploy": {
                "$ref": "#/components/schemas/DeployHash"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A version 1 transaction hash.",
            "type": "object",
            "required": [
              "Version1"
            ],
            "properties": {
              "Version1": {
                "$ref": "#/components/schemas/TransactionV1Hash"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "ExecutionInfo": {
        "description": "The block hash and height in which a given deploy was executed, along with the execution result if known.",
        "type": "object",
        "required": [
          "block_hash",
          "block_height"
        ],
        "properties": {
          "block_hash": {
            "description": "The hash of the block in which the deploy was executed.",
            "allOf": [
              {
                "$ref": "#/components/schemas/BlockHash"
              }
            ]
          },
          "block_height": {
            "description": "The height of the block in which the deploy was executed.",
            "type": "integer",
            "format": "uint64",
            "minimum": 0.0
          },
          "execution_result": {
            "description": "The execution result if known.",
            "anyOf": [
              {
                "$ref": "#/components/schemas/ExecutionResult"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "additionalProperties": false
      },
      "BlockHash": {
        "description": "Hex-encoded cryptographic hash of a block.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Digest"
          }
        ]
      },
      "ExecutionResult": {
        "description": "The versioned result of executing a single deploy.",
        "oneOf": [
          {
            "description": "Version 1 of execution result type.",
            "type": "object",
            "required": [
              "Version1"
            ],
            "properties": {
              "Version1": {
                "$ref": "#/components/schemas/ExecutionResultV1"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Version 2 of execution result type.",
            "type": "object",
            "required": [
              "Version2"
            ],
            "properties": {
              "Version2": {
                "$ref": "#/components/schemas/ExecutionResultV2"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "ExecutionResultV1": {
        "description": "The result of executing a single deploy.",
        "oneOf": [
          {
            "description": "The result of a failed execution.",
            "type": "object",
            "required": [
              "Failure"
            ],
            "properties": {
              "Failure": {
                "type": "object",
                "required": [
                  "cost",
                  "effect",
                  "error_message",
                  "transfers"
                ],
                "properties": {
                  "effect": {
                    "description": "The effect of executing the deploy.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ExecutionEffect"
                      }
                    ]
                  },
                  "transfers": {
                    "description": "A record of version 1 Transfers performed while executing the deploy.",
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/TransferAddr"
                    }
                  },
                  "cost": {
                    "description": "The cost of executing the deploy.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/U512"
                      }
                    ]
                  },
                  "error_message": {
                    "description": "The error message associated with executing the deploy.",
                    "type": "string"
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          },
          {
            "description": "The result of a successful execution.",
            "type": "object",
            "required": [
              "Success"
            ],
            "properties": {
              "Success": {
                "type": "object",
                "required": [
                  "cost",
                  "effect",
                  "transfers"
                ],
                "properties": {
                  "effect": {
                    "description": "The effect of executing the deploy.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ExecutionEffect"
                      }
                    ]
                  },
                  "transfers": {
                    "description": "A record of Transfers performed while executing the deploy.",
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/TransferAddr"
                    }
                  },
                  "cost": {
                    "description": "The cost of executing the deploy.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/U512"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "ExecutionEffect": {
        "description": "The sequence of execution transforms from a single deploy.",
        "type": "object",
        "required": [
          "operations",
          "transforms"
        ],
        "properties": {
          "operations": {
            "description": "The resulting operations.",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Operation"
            }
          },
          "transforms": {
            "description": "The sequence of execution transforms.",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TransformV1"
            }
          }
        },
        "additionalProperties": false
      },
      "Operation": {
        "description": "An operation performed while executing a deploy.",
        "type": "object",
        "required": [
          "key",
          "kind"
        ],
        "properties": {
          "key": {
            "description": "The formatted string of the `Key`.",
            "type": "string"
          },
          "kind": {
            "description": "The type of operation.",
            "allOf": [
              {
                "$ref": "#/components/schemas/OpKind"
              }
            ]
          }
        },
        "additionalProperties": false
      },
      "OpKind": {
        "description": "The type of operation performed while executing a deploy.",
        "oneOf": [
          {
            "description": "A read operation.",
            "type": "string",
            "enum": [
              "Read"
            ]
          },
          {
            "description": "A write operation.",
            "type": "string",
            "enum": [
              "Write"
            ]
          },
          {
            "description": "An addition.",
            "type": "string",
            "enum": [
              "Add"
            ]
          },
          {
            "description": "An operation which has no effect.",
            "type": "string",
            "enum": [
              "NoOp"
            ]
          },
          {
            "description": "A prune operation.",
            "type": "string",
            "enum": [
              "Prune"
            ]
          }
        ]
      },
      "TransformV1": {
        "description": "A transformation performed while executing a deploy.",
        "type": "object",
        "required": [
          "key",
          "transform"
        ],
        "properties": {
          "key": {
            "description": "The formatted string of the `Key`.",
            "type": "string"
          },
          "transform": {
            "description": "The transformation.",
            "allOf": [
              {
                "$ref": "#/components/schemas/TransformKindV1"
              }
            ]
          }
        },
        "additionalProperties": false
      },
      "TransformKindV1": {
        "description": "The actual transformation performed while executing a deploy.",
        "oneOf": [
          {
            "description": "A transform having no effect.",
            "type": "string",
            "enum": [
              "Identity"
            ]
          },
          {
            "description": "Writes the given CLValue to global state.",
            "type": "object",
            "required": [
              "WriteCLValue"
            ],
            "properties": {
              "WriteCLValue": {
                "$ref": "#/components/schemas/CLValue"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Writes the given Account to global state.",
            "type": "object",
            "required": [
              "WriteAccount"
            ],
            "properties": {
              "WriteAccount": {
                "$ref": "#/components/schemas/AccountHash"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Writes a smart contract as Wasm to global state.",
            "type": "string",
            "enum": [
              "WriteContractWasm"
            ]
          },
          {
            "description": "Writes a smart contract to global state.",
            "type": "string",
            "enum": [
              "WriteContract"
            ]
          },
          {
            "description": "Writes a smart contract package to global state.",
            "type": "string",
            "enum": [
              "WriteContractPackage"
            ]
          },
          {
            "description": "Writes the given DeployInfo to global state.",
            "type": "object",
            "required": [
              "WriteDeployInfo"
            ],
            "properties": {
              "WriteDeployInfo": {
                "$ref": "#/components/schemas/DeployInfo"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Writes the given EraInfo to global state.",
            "type": "object",
            "required": [
              "WriteEraInfo"
            ],
            "properties": {
              "WriteEraInfo": {
                "$ref": "#/components/schemas/EraInfo"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Writes the given version 1 Transfer to global state.",
            "type": "object",
            "required": [
              "WriteTransfer"
            ],
            "properties": {
              "WriteTransfer": {
                "$ref": "#/components/schemas/TransferV1"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Writes the given Bid to global state.",
            "type": "object",
            "required": [
              "WriteBid"
            ],
            "properties": {
              "WriteBid": {
                "$ref": "#/components/schemas/Bid"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Writes the given Withdraw to global state.",
            "type": "object",
            "required": [
              "WriteWithdraw"
            ],
            "properties": {
              "WriteWithdraw": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/WithdrawPurse"
                }
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Adds the given `i32`.",
            "type": "object",
            "required": [
              "AddInt32"
            ],
            "properties": {
              "AddInt32": {
                "type": "integer",
                "format": "int32"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Adds the given `u64`.",
            "type": "object",
            "required": [
              "AddUInt64"
            ],
            "properties": {
              "AddUInt64": {
                "type": "integer",
                "format": "uint64",
                "minimum": 0.0
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Adds the given `U128`.",
            "type": "object",
            "required": [
              "AddUInt128"
            ],
            "properties": {
              "AddUInt128": {
                "$ref": "#/components/schemas/U128"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Adds the given `U256`.",
            "type": "object",
            "required": [
              "AddUInt256"
            ],
            "properties": {
              "AddUInt256": {
                "$ref": "#/components/schemas/U256"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Adds the given `U512`.",
            "type": "object",
            "required": [
              "AddUInt512"
            ],
            "properties": {
              "AddUInt512": {
                "$ref": "#/components/schemas/U512"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Adds the given collection of named keys.",
            "type": "object",
            "required": [
              "AddKeys"
            ],
            "properties": {
              "AddKeys": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/NamedKey"
                }
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A failed transformation, containing an error message.",
            "type": "object",
            "required": [
              "Failure"
            ],
            "properties": {
              "Failure": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Writes the given Unbonding to global state.",
            "type": "object",
            "required": [
              "WriteUnbonding"
            ],
            "properties": {
              "WriteUnbonding": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/UnbondingPurse"
                }
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Writes the addressable entity to global state.",
            "type": "string",
            "enum": [
              "WriteAddressableEntity"
            ]
          },
          {
            "description": "Removes pathing to keyed value within global state. This is a form of soft delete; the underlying value remains in global state and is reachable from older global state root hashes where it was included in the hash up.",
            "type": "object",
            "required": [
              "Prune"
            ],
            "properties": {
              "Prune": {
                "$ref": "#/components/schemas/Key"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Writes the given BidKind to global state.",
            "type": "object",
            "required": [
              "WriteBidKind"
            ],
            "properties": {
              "WriteBidKind": {
                "$ref": "#/components/schemas/BidKind"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "DeployInfo": {
        "description": "Information relating to the given Deploy.",
        "type": "object",
        "required": [
          "deploy_hash",
          "from",
          "gas",
          "source",
          "transfers"
        ],
        "properties": {
          "deploy_hash": {
            "description": "Hex-encoded Deploy hash.",
            "allOf": [
              {
                "$ref": "#/components/schemas/DeployHash"
              }
            ]
          },
          "transfers": {
            "description": "Version 1 transfers performed by the Deploy.",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TransferAddr"
            }
          },
          "from": {
            "description": "Account identifier of the creator of the Deploy.",
            "allOf": [
              {
                "$ref": "#/components/schemas/AccountHash"
              }
            ]
          },
          "source": {
            "description": "Source purse used for payment of the Deploy.",
            "allOf": [
              {
                "$ref": "#/components/schemas/URef"
              }
            ]
          },
          "gas": {
            "description": "Gas cost of executing the Deploy.",
            "allOf": [
              {
                "$ref": "#/components/schemas/U512"
              }
            ]
          }
        },
        "additionalProperties": false
      },
      "TransferAddr": {
        "description": "Hex-encoded version 1 transfer address.",
        "type": "string"
      },
      "URef": {
        "description": "Hex-encoded, formatted URef.",
        "type": "string"
      },
      "U512": {
        "description": "Decimal representation of a 512-bit integer.",
        "type": "string"
      },
      "EraInfo": {
        "description": "Auction metadata.  Intended to be recorded at each era.",
        "type": "object",
        "required": [
          "seigniorage_allocations"
        ],
        "properties": {
          "seigniorage_allocations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/SeigniorageAllocation"
            }
          }
        },
        "additionalProperties": false
      },
      "SeigniorageAllocation": {
        "description": "Information about a seigniorage allocation",
        "oneOf": [
          {
            "description": "Info about a seigniorage allocation for a validator",
            "type": "object",
            "required": [
              "Validator"
            ],
            "properties": {
              "Validator": {
                "type": "object",
                "required": [
                  "amount",
                  "validator_public_key"
                ],
                "properties": {
                  "validator_public_key": {
                    "description": "Validator's public key",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/PublicKey"
                      }
                    ]
                  },
                  "amount": {
                    "description": "Allocated amount",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/U512"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Info about a seigniorage allocation for a delegator",
            "type": "object",
            "required": [
              "Delegator"
            ],
            "properties": {
              "Delegator": {
                "type": "object",
                "required": [
                  "amount",
                  "delegator_public_key",
                  "validator_public_key"
                ],
                "properties": {
                  "delegator_public_key": {
                    "description": "Delegator's public key",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/PublicKey"
                      }
                    ]
                  },
                  "validator_public_key": {
                    "description": "Validator's public key",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/PublicKey"
                      }
                    ]
                  },
                  "amount": {
                    "description": "Allocated amount",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/U512"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "TransferV1": {
        "description": "Represents a version 1 transfer from one purse to another.",
        "type": "object",
        "required": [
          "amount",
          "deploy_hash",
          "from",
          "gas",
          "source",
          "target"
        ],
        "properties": {
          "deploy_hash": {
            "description": "Hex-encoded Deploy hash of Deploy that created the transfer.",
            "allOf": [
              {
                "$ref": "#/components/schemas/DeployHash"
              }
            ]
          },
          "from": {
            "description": "Account from which transfer was executed",
            "allOf": [
              {
                "$ref": "#/components/schemas/AccountHash"
              }
            ]
          },
          "to": {
            "description": "Account to which funds are transferred",
            "anyOf": [
              {
                "$ref": "#/components/schemas/AccountHash"
              },
              {
                "type": "null"
              }
            ]
          },
          "source": {
            "description": "Source purse",
            "allOf": [
              {
                "$ref": "#/components/schemas/URef"
              }
            ]
          },
          "target": {
            "description": "Target purse",
            "allOf": [
              {
                "$ref": "#/components/schemas/URef"
              }
            ]
          },
          "amount": {
            "description": "Transfer amount",
            "allOf": [
              {
                "$ref": "#/components/schemas/U512"
              }
            ]
          },
          "gas": {
            "description": "Gas",
            "allOf": [
              {
                "$ref": "#/components/schemas/U512"
              }
            ]
          },
          "id": {
            "description": "User-defined id",
            "type": [
              "integer",
              "null"
            ],
            "format": "uint64",
            "minimum": 0.0
          }
        },
        "additionalProperties": false
      },
      "Bid": {
        "description": "An entry in the validator map.",
        "type": "object",
        "required": [
          "bonding_purse",
          "delegation_rate",
          "delegators",
          "inactive",
          "staked_amount",
          "validator_public_key"
        ],
        "properties": {
          "validator_public_key": {
            "description": "Validator public key.",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          "bonding_purse": {
            "description": "The purse that was used for bonding.",
            "allOf": [
              {
                "$ref": "#/components/schemas/URef"
              }
            ]
          },
          "staked_amount": {
            "description": "The amount of tokens staked by a validator (not including delegators).",
            "allOf": [
              {
                "$ref": "#/components/schemas/U512"
              }
            ]
          },
          "delegation_rate": {
            "description": "Delegation rate.",
            "type": "integer",
            "format": "uint8",
            "minimum": 0.0
          },
          "vesting_schedule": {
            "description": "Vesting schedule for a genesis validator. `None` if non-genesis validator.",
            "anyOf": [
              {
                "$ref": "#/components/schemas/VestingSchedule"
              },
              {
                "type": "null"
              }
            ]
          },
          "delegators": {
            "description": "This validator's delegators, indexed by their public keys.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Array_of_PublicKeyAndDelegator"
              }
            ]
          },
          "inactive": {
            "description": "`true` if validator has been \"evicted\".",
            "type": "boolean"
          }
        },
        "additionalProperties": false
      },
      "VestingSchedule": {
        "type": "object",
        "required": [
          "initial_release_timestamp_millis"
        ],
        "properties": {
          "initial_release_timestamp_millis": {
            "type": "integer",
            "format": "uint64",
            "minimum": 0.0
          },
          "locked_amounts": {
            "type": [
              "array",
              "null"
            ],
            "items": {
              "$ref": "#/components/schemas/U512"
            },
            "maxItems": 14,
            "minItems": 14
          }
        },
        "additionalProperties": false
      },
      "Array_of_PublicKeyAndDelegator": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/PublicKeyAndDelegator"
        }
      },
      "PublicKeyAndDelegator": {
        "description": "A delegator associated with the given validator.",
        "type": "object",
        "required": [
          "delegator",
          "delegator_public_key"
        ],
        "properties": {
          "delegator_public_key": {
            "description": "The public key of the delegator.",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          "delegator": {
            "description": "The delegator details.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Delegator"
              }
            ]
          }
        }
      },
      "Delegator": {
        "description": "Represents a party delegating their stake to a validator (or \"delegatee\")",
        "type": "object",
        "required": [
          "bonding_purse",
          "delegator_public_key",
          "staked_amount",
          "validator_public_key"
        ],
        "properties": {
          "delegator_public_key": {
            "$ref": "#/components/schemas/PublicKey"
          },
          "staked_amount": {
            "$ref": "#/components/schemas/U512"
          },
          "bonding_purse": {
            "$ref": "#/components/schemas/URef"
          },
          "validator_public_key": {
            "$ref": "#/components/schemas/PublicKey"
          },
          "vesting_schedule": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/VestingSchedule"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "additionalProperties": false
      },
      "WithdrawPurse": {
        "description": "A withdraw purse, a legacy structure.",
        "type": "object",
        "required": [
          "amount",
          "bonding_purse",
          "era_of_creation",
          "unbonder_public_key",
          "validator_public_key"
        ],
        "properties": {
          "bonding_purse": {
            "description": "Bonding Purse",
            "allOf": [
              {
                "$ref": "#/components/schemas/URef"
              }
            ]
          },
          "validator_public_key": {
            "description": "Validators public key.",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          "unbonder_public_key": {
            "description": "Unbonders public key.",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          "era_of_creation": {
            "description": "Era in which this unbonding request was created.",
            "allOf": [
              {
                "$ref": "#/components/schemas/EraId"
              }
            ]
          },
          "amount": {
            "description": "Unbonding Amount.",
            "allOf": [
              {
                "$ref": "#/components/schemas/U512"
              }
            ]
          }
        },
        "additionalProperties": false
      },
      "U128": {
        "description": "Decimal representation of a 128-bit integer.",
        "type": "string"
      },
      "U256": {
        "description": "Decimal representation of a 256-bit integer.",
        "type": "string"
      },
      "NamedKey": {
        "description": "A key with a name.",
        "type": "object",
        "required": [
          "key",
          "name"
        ],
        "properties": {
          "name": {
            "description": "The name of the entry.",
            "type": "string"
          },
          "key": {
            "description": "The value of the entry: a casper `Key` type.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Key"
              }
            ]
          }
        },
        "additionalProperties": false
      },
      "Key": {
        "description": "The key as a formatted string, under which data (e.g. `CLValue`s, smart contracts, user accounts) are stored in global state.",
        "type": "string"
      },
      "UnbondingPurse": {
        "description": "Unbonding purse.",
        "type": "object",
        "required": [
          "amount",
          "bonding_purse",
          "era_of_creation",
          "unbonder_public_key",
          "validator_public_key"
        ],
        "properties": {
          "bonding_purse": {
            "description": "Bonding Purse",
            "allOf": [
              {
                "$ref": "#/components/schemas/URef"
              }
            ]
          },
          "validator_public_key": {
            "description": "Validators public key.",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          "unbonder_public_key": {
            "description": "Unbonders public key.",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          "era_of_creation": {
            "description": "Era in which this unbonding request was created.",
            "allOf": [
              {
                "$ref": "#/components/schemas/EraId"
              }
            ]
          },
          "amount": {
            "description": "Unbonding Amount.",
            "allOf": [
              {
                "$ref": "#/components/schemas/U512"
              }
            ]
          },
          "new_validator": {
            "description": "The validator public key to re-delegate to.",
            "anyOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "additionalProperties": false
      },
      "BidKind": {
        "description": "Auction bid variants.",
        "oneOf": [
          {
            "description": "A unified record indexed on validator data, with an embedded collection of all delegator bids assigned to that validator. The Unified variant is for legacy retrograde support, new instances will not be created going forward.",
            "type": "object",
            "required": [
              "Unified"
            ],
            "properties": {
              "Unified": {
                "$ref": "#/components/schemas/Bid"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A bid record containing only validator data.",
            "type": "object",
            "required": [
              "Validator"
            ],
            "properties": {
              "Validator": {
                "$ref": "#/components/schemas/ValidatorBid"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A bid record containing only delegator data.",
            "type": "object",
            "required": [
              "Delegator"
            ],
            "properties": {
              "Delegator": {
                "$ref": "#/components/schemas/Delegator"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A bridge record pointing to a new `ValidatorBid` after the public key was changed.",
            "type": "object",
            "required": [
              "Bridge"
            ],
            "properties": {
              "Bridge": {
                "$ref": "#/components/schemas/Bridge"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Credited amount.",
            "type": "object",
            "required": [
              "Credit"
            ],
            "properties": {
              "Credit": {
                "$ref": "#/components/schemas/ValidatorCredit"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "ValidatorBid": {
        "description": "An entry in the validator map.",
        "type": "object",
        "required": [
          "bonding_purse",
          "delegation_rate",
          "inactive",
          "maximum_delegation_amount",
          "minimum_delegation_amount",
          "staked_amount",
          "validator_public_key"
        ],
        "properties": {
          "validator_public_key": {
            "description": "Validator public key",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          "bonding_purse": {
            "description": "The purse that was used for bonding.",
            "allOf": [
              {
                "$ref": "#/components/schemas/URef"
              }
            ]
          },
          "staked_amount": {
            "description": "The amount of tokens staked by a validator (not including delegators).",
            "allOf": [
              {
                "$ref": "#/components/schemas/U512"
              }
            ]
          },
          "delegation_rate": {
            "description": "Delegation rate",
            "type": "integer",
            "format": "uint8",
            "minimum": 0.0
          },
          "vesting_schedule": {
            "description": "Vesting schedule for a genesis validator. `None` if non-genesis validator.",
            "anyOf": [
              {
                "$ref": "#/components/schemas/VestingSchedule"
              },
              {
                "type": "null"
              }
            ]
          },
          "inactive": {
            "description": "`true` if validator has been \"evicted\"",
            "type": "boolean"
          },
          "minimum_delegation_amount": {
            "description": "Minimum allowed delegation amount in motes",
            "type": "integer",
            "format": "uint64",
            "minimum": 0.0
          },
          "maximum_delegation_amount": {
            "description": "Maximum allowed delegation amount in motes",
            "type": "integer",
            "format": "uint64",
            "minimum": 0.0
          }
        },
        "additionalProperties": false
      },
      "Bridge": {
        "description": "A bridge record pointing to a new `ValidatorBid` after the public key was changed.",
        "type": "object",
        "required": [
          "era_id",
          "new_validator_public_key",
          "old_validator_public_key"
        ],
        "properties": {
          "old_validator_public_key": {
            "description": "Previous validator public key associated with the bid.",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          "new_validator_public_key": {
            "description": "New validator public key associated with the bid.",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          "era_id": {
            "description": "Era when bridge record was created.",
            "allOf": [
              {
                "$ref": "#/components/schemas/EraId"
              }
            ]
          }
        },
        "additionalProperties": false
      },
      "ValidatorCredit": {
        "description": "Validator credit record.",
        "type": "object",
        "required": [
          "amount",
          "era_id",
          "validator_public_key"
        ],
        "properties": {
          "validator_public_key": {
            "description": "Validator public key",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          "era_id": {
            "description": "The era id the credit was created.",
            "allOf": [
              {
                "$ref": "#/components/schemas/EraId"
              }
            ]
          },
          "amount": {
            "description": "The credit amount.",
            "allOf": [
              {
                "$ref": "#/components/schemas/U512"
              }
            ]
          }
        },
        "additionalProperties": false
      },
      "ExecutionResultV2": {
        "description": "The result of executing a single transaction.",
        "type": "object",
        "required": [
          "consumed",
          "cost",
          "effects",
          "initiator",
          "limit",
          "payment",
          "size_estimate",
          "transfers"
        ],
        "properties": {
          "initiator": {
            "description": "Who initiated this transaction.",
            "allOf": [
              {
                "$ref": "#/components/schemas/InitiatorAddr"
              }
            ]
          },
          "error_message": {
            "description": "If there is no error message, this execution was processed successfully. If there is an error message, this execution failed to fully process for the stated reason.",
            "type": [
              "string",
              "null"
            ]
          },
          "limit": {
            "description": "What was the maximum allowed gas limit for this transaction?.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Gas"
              }
            ]
          },
          "consumed": {
            "description": "How much gas was consumed executing this transaction.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Gas"
              }
            ]
          },
          "cost": {
            "description": "How much was paid for this transaction.",
            "allOf": [
              {
                "$ref": "#/components/schemas/U512"
              }
            ]
          },
          "payment": {
            "description": "Breakdown of payments made to cover the cost.",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/PaymentInfo"
            }
          },
          "transfers": {
            "description": "A record of transfers performed while executing this transaction.",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Transfer"
            }
          },
          "size_estimate": {
            "description": "The size estimate of the transaction",
            "type": "integer",
            "format": "uint64",
            "minimum": 0.0
          },
          "effects": {
            "description": "The effects of executing this transaction.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Effects"
              }
            ]
          }
        },
        "additionalProperties": false
      },
      "Gas": {
        "description": "The `Gas` struct represents a `U512` amount of gas.",
        "allOf": [
          {
            "$ref": "#/components/schemas/U512"
          }
        ]
      },
      "PaymentInfo": {
        "description": "Breakdown of payments made to cover the cost.",
        "type": "object",
        "required": [
          "source"
        ],
        "properties": {
          "source": {
            "description": "Source purse used for payment of the transaction.",
            "allOf": [
              {
                "$ref": "#/components/schemas/URef"
              }
            ]
          }
        }
      },
      "Transfer": {
        "description": "A versioned wrapper for a transfer.",
        "oneOf": [
          {
            "description": "A version 1 transfer.",
            "type": "object",
            "required": [
              "Version1"
            ],
            "properties": {
              "Version1": {
                "$ref": "#/components/schemas/TransferV1"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A version 2 transfer.",
            "type": "object",
            "required": [
              "Version2"
            ],
            "properties": {
              "Version2": {
                "$ref": "#/components/schemas/TransferV2"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "TransferV2": {
        "description": "Represents a version 2 transfer from one purse to another.",
        "type": "object",
        "required": [
          "amount",
          "from",
          "gas",
          "source",
          "target",
          "transaction_hash"
        ],
        "properties": {
          "transaction_hash": {
            "description": "Transaction that created the transfer.",
            "allOf": [
              {
                "$ref": "#/components/schemas/TransactionHash"
              }
            ]
          },
          "from": {
            "description": "Entity from which transfer was executed.",
            "allOf": [
              {
                "$ref": "#/components/schemas/InitiatorAddr"
              }
            ]
          },
          "to": {
            "description": "Account to which funds are transferred.",
            "anyOf": [
              {
                "$ref": "#/components/schemas/AccountHash"
              },
              {
                "type": "null"
              }
            ]
          },
          "source": {
            "description": "Source purse.",
            "allOf": [
              {
                "$ref": "#/components/schemas/URef"
              }
            ]
          },
          "target": {
            "description": "Target purse.",
            "allOf": [
              {
                "$ref": "#/components/schemas/URef"
              }
            ]
          },
          "amount": {
            "description": "Transfer amount.",
            "allOf": [
              {
                "$ref": "#/components/schemas/U512"
              }
            ]
          },
          "gas": {
            "description": "Gas.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Gas"
              }
            ]
          },
          "id": {
            "description": "User-defined ID.",
            "type": [
              "integer",
              "null"
            ],
            "format": "uint64",
            "minimum": 0.0
          }
        },
        "additionalProperties": false
      },
      "Effects": {
        "description": "A log of all transforms produced during execution.",
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/TransformV2"
        }
      },
      "TransformV2": {
        "description": "A transformation performed while executing a deploy.",
        "type": "object",
        "required": [
          "key",
          "kind"
        ],
        "properties": {
          "key": {
            "$ref": "#/components/schemas/Key"
          },
          "kind": {
            "$ref": "#/components/schemas/TransformKindV2"
          }
        },
        "additionalProperties": false
      },
      "TransformKindV2": {
        "description": "Representation of a single transformation occurring during execution.\n\nNote that all arithmetic variants of `TransformKindV2` are commutative which means that a given collection of them can be executed in any order to produce the same end result.",
        "oneOf": [
          {
            "description": "An identity transformation that does not modify a value in the global state.\n\nCreated as a result of reading from the global state.",
            "type": "string",
            "enum": [
              "Identity"
            ]
          },
          {
            "description": "Writes a new value in the global state.",
            "type": "object",
            "required": [
              "Write"
            ],
            "properties": {
              "Write": {
                "$ref": "#/components/schemas/StoredValue"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A wrapping addition of an `i32` to an existing numeric value (not necessarily an `i32`) in the global state.",
            "type": "object",
            "required": [
              "AddInt32"
            ],
            "properties": {
              "AddInt32": {
                "type": "integer",
                "format": "int32"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A wrapping addition of a `u64` to an existing numeric value (not necessarily an `u64`) in the global state.",
            "type": "object",
            "required": [
              "AddUInt64"
            ],
            "properties": {
              "AddUInt64": {
                "type": "integer",
                "format": "uint64",
                "minimum": 0.0
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A wrapping addition of a `U128` to an existing numeric value (not necessarily an `U128`) in the global state.",
            "type": "object",
            "required": [
              "AddUInt128"
            ],
            "properties": {
              "AddUInt128": {
                "$ref": "#/components/schemas/U128"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A wrapping addition of a `U256` to an existing numeric value (not necessarily an `U256`) in the global state.",
            "type": "object",
            "required": [
              "AddUInt256"
            ],
            "properties": {
              "AddUInt256": {
                "$ref": "#/components/schemas/U256"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A wrapping addition of a `U512` to an existing numeric value (not necessarily an `U512`) in the global state.",
            "type": "object",
            "required": [
              "AddUInt512"
            ],
            "properties": {
              "AddUInt512": {
                "$ref": "#/components/schemas/U512"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Adds new named keys to an existing entry in the global state.\n\nThis transform assumes that the existing stored value is either an Account or a Contract.",
            "type": "object",
            "required": [
              "AddKeys"
            ],
            "properties": {
              "AddKeys": {
                "$ref": "#/components/schemas/NamedKeys"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Removes the pathing to the global state entry of the specified key. The pruned element remains reachable from previously generated global state root hashes, but will not be included in the next generated global state root hash and subsequent state accumulated from it.",
            "type": "object",
            "required": [
              "Prune"
            ],
            "properties": {
              "Prune": {
                "$ref": "#/components/schemas/Key"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Represents the case where applying a transform would cause an error.",
            "type": "object",
            "required": [
              "Failure"
            ],
            "properties": {
              "Failure": {
                "$ref": "#/components/schemas/TransformError"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "StoredValue": {
        "description": "A value stored in Global State.",
        "oneOf": [
          {
            "description": "A CLValue.",
            "type": "object",
            "required": [
              "CLValue"
            ],
            "properties": {
              "CLValue": {
                "$ref": "#/components/schemas/CLValue"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "An account.",
            "type": "object",
            "required": [
              "Account"
            ],
            "properties": {
              "Account": {
                "$ref": "#/components/schemas/Account"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Contract wasm.",
            "type": "object",
            "required": [
              "ContractWasm"
            ],
            "properties": {
              "ContractWasm": {
                "$ref": "#/components/schemas/ContractWasm"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A contract.",
            "type": "object",
            "required": [
              "Contract"
            ],
            "properties": {
              "Contract": {
                "$ref": "#/components/schemas/Contract"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A contract package.",
            "type": "object",
            "required": [
              "ContractPackage"
            ],
            "properties": {
              "ContractPackage": {
                "$ref": "#/components/schemas/ContractPackage"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A version 1 (legacy) transfer.",
            "type": "object",
            "required": [
              "LegacyTransfer"
            ],
            "properties": {
              "LegacyTransfer": {
                "$ref": "#/components/schemas/TransferV1"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Info about a deploy.",
            "type": "object",
            "required": [
              "DeployInfo"
            ],
            "properties": {
              "DeployInfo": {
                "$ref": "#/components/schemas/DeployInfo"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Info about an era.",
            "type": "object",
            "required": [
              "EraInfo"
            ],
            "properties": {
              "EraInfo": {
                "$ref": "#/components/schemas/EraInfo"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Variant that stores [`Bid`].",
            "type": "object",
            "required": [
              "Bid"
            ],
            "properties": {
              "Bid": {
                "$ref": "#/components/schemas/Bid"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Variant that stores withdraw information.",
            "type": "object",
            "required": [
              "Withdraw"
            ],
            "properties": {
              "Withdraw": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/WithdrawPurse"
                }
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Unbonding information.",
            "type": "object",
            "required": [
              "Unbonding"
            ],
            "properties": {
              "Unbonding": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/UnbondingPurse"
                }
              }
            },
            "additionalProperties": false
          },
          {
            "description": "An `AddressableEntity`.",
            "type": "object",
            "required": [
              "AddressableEntity"
            ],
            "properties": {
              "AddressableEntity": {
                "$ref": "#/components/schemas/AddressableEntity"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Variant that stores [`BidKind`].",
            "type": "object",
            "required": [
              "BidKind"
            ],
            "properties": {
              "BidKind": {
                "$ref": "#/components/schemas/BidKind"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A `Package`.",
            "type": "object",
            "required": [
              "Package"
            ],
            "properties": {
              "Package": {
                "$ref": "#/components/schemas/Package"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A record of byte code.",
            "type": "object",
            "required": [
              "ByteCode"
            ],
            "properties": {
              "ByteCode": {
                "$ref": "#/components/schemas/ByteCode"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Variant that stores a message topic.",
            "type": "object",
            "required": [
              "MessageTopic"
            ],
            "properties": {
              "MessageTopic": {
                "$ref": "#/components/schemas/MessageTopicSummary"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Variant that stores a message digest.",
            "type": "object",
            "required": [
              "Message"
            ],
            "properties": {
              "Message": {
                "$ref": "#/components/schemas/MessageChecksum"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A NamedKey record.",
            "type": "object",
            "required": [
              "NamedKey"
            ],
            "properties": {
              "NamedKey": {
                "$ref": "#/components/schemas/NamedKeyValue"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A reservation record.",
            "type": "object",
            "required": [
              "Reservation"
            ],
            "properties": {
              "Reservation": {
                "$ref": "#/components/schemas/ReservationKind"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "An entrypoint record.",
            "type": "object",
            "required": [
              "EntryPoint"
            ],
            "properties": {
              "EntryPoint": {
                "$ref": "#/components/schemas/EntryPointValue"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "Account": {
        "description": "Represents an Account in the global state.",
        "type": "object",
        "required": [
          "account_hash",
          "action_thresholds",
          "associated_keys",
          "main_purse",
          "named_keys"
        ],
        "properties": {
          "account_hash": {
            "$ref": "#/components/schemas/AccountHash"
          },
          "named_keys": {
            "$ref": "#/components/schemas/NamedKeys"
          },
          "main_purse": {
            "$ref": "#/components/schemas/URef"
          },
          "associated_keys": {
            "$ref": "#/components/schemas/AccountAssociatedKeys"
          },
          "action_thresholds": {
            "$ref": "#/components/schemas/AccountActionThresholds"
          }
        },
        "additionalProperties": false
      },
      "NamedKeys": {
        "description": "A collection of named keys.",
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/NamedKey"
        }
      },
      "AccountAssociatedKeys": {
        "description": "A collection of weighted public keys (represented as account hashes) associated with an account.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Array_of_AssociatedKey"
          }
        ]
      },
      "Array_of_AssociatedKey": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/AssociatedKey"
        }
      },
      "AssociatedKey": {
        "description": "A weighted public key.",
        "type": "object",
        "required": [
          "account_hash",
          "weight"
        ],
        "properties": {
          "account_hash": {
            "description": "The account hash of the public key.",
            "allOf": [
              {
                "$ref": "#/components/schemas/AccountHash"
              }
            ]
          },
          "weight": {
            "description": "The weight assigned to the public key.",
            "allOf": [
              {
                "$ref": "#/components/schemas/AccountAssociatedKeyWeight"
              }
            ]
          }
        }
      },
      "AccountAssociatedKeyWeight": {
        "description": "The weight associated with public keys in an account's associated keys.",
        "type": "integer",
        "format": "uint8",
        "minimum": 0.0
      },
      "AccountActionThresholds": {
        "description": "Thresholds that have to be met when executing an action of a certain type.",
        "type": "object",
        "required": [
          "deployment",
          "key_management"
        ],
        "properties": {
          "deployment": {
            "description": "Threshold for deploy execution.",
            "allOf": [
              {
                "$ref": "#/components/schemas/AccountAssociatedKeyWeight"
              }
            ]
          },
          "key_management": {
            "description": "Threshold for managing action threshold.",
            "allOf": [
              {
                "$ref": "#/components/schemas/AccountAssociatedKeyWeight"
              }
            ]
          }
        }
      },
      "ContractWasm": {
        "description": "A container for contract's WASM bytes.",
        "type": "object",
        "required": [
          "bytes"
        ],
        "properties": {
          "bytes": {
            "$ref": "#/components/schemas/Bytes"
          }
        }
      },
      "Contract": {
        "description": "Methods and type signatures supported by a contract.",
        "type": "object",
        "required": [
          "contract_package_hash",
          "contract_wasm_hash",
          "entry_points",
          "named_keys",
          "protocol_version"
        ],
        "properties": {
          "contract_package_hash": {
            "$ref": "#/components/schemas/ContractPackageHash"
          },
          "contract_wasm_hash": {
            "$ref": "#/components/schemas/ContractWasmHash"
          },
          "named_keys": {
            "$ref": "#/components/schemas/NamedKeys"
          },
          "entry_points": {
            "$ref": "#/components/schemas/Array_of_NamedEntryPoint"
          },
          "protocol_version": {
            "$ref": "#/components/schemas/ProtocolVersion"
          }
        }
      },
      "ContractPackageHash": {
        "description": "The hash address of the contract package",
        "type": "string"
      },
      "ContractWasmHash": {
        "description": "The hash address of the contract wasm",
        "type": "string"
      },
      "Array_of_NamedEntryPoint": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/NamedEntryPoint"
        }
      },
      "NamedEntryPoint": {
        "type": "object",
        "required": [
          "entry_point",
          "name"
        ],
        "properties": {
          "name": {
            "type": "string"
          },
          "entry_point": {
            "allOf": [
              {
                "$ref": "#/components/schemas/EntryPoint"
              }
            ]
          }
        }
      },
      "EntryPoint": {
        "description": "Type signature of a method. Order of arguments matter since can be referenced by index as well as name.",
        "type": "object",
        "required": [
          "access",
          "args",
          "entry_point_type",
          "name",
          "ret"
        ],
        "properties": {
          "name": {
            "type": "string"
          },
          "args": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Parameter"
            }
          },
          "ret": {
            "$ref": "#/components/schemas/CLType"
          },
          "access": {
            "$ref": "#/components/schemas/EntryPointAccess"
          },
          "entry_point_type": {
            "$ref": "#/components/schemas/EntryPointType"
          }
        }
      },
      "Parameter": {
        "description": "Parameter to a method",
        "type": "object",
        "required": [
          "cl_type",
          "name"
        ],
        "properties": {
          "name": {
            "type": "string"
          },
          "cl_type": {
            "$ref": "#/components/schemas/CLType"
          }
        }
      },
      "EntryPointAccess": {
        "description": "Enum describing the possible access control options for a contract entry point (method).",
        "oneOf": [
          {
            "description": "Anyone can call this method (no access controls).",
            "type": "string",
            "enum": [
              "Public"
            ]
          },
          {
            "description": "Only users from the listed groups may call this method. Note: if the list is empty then this method is not callable from outside the contract.",
            "type": "object",
            "required": [
              "Groups"
            ],
            "properties": {
              "Groups": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Group"
                }
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Can't be accessed directly but are kept in the derived wasm bytes.",
            "type": "string",
            "enum": [
              "Template"
            ]
          }
        ]
      },
      "Group": {
        "description": "A (labelled) \"user group\". Each method of a versioned contract may be associated with one or more user groups which are allowed to call it.",
        "type": "string"
      },
      "EntryPointType": {
        "description": "Context of method execution\n\nMost significant bit represents version i.e. - 0b0 -> 0.x/1.x (session & contracts) - 0b1 -> 2.x and later (introduced installer, utility entry points)",
        "oneOf": [
          {
            "description": "Runs using the calling entity's context. In v1.x this was used for both \"session\" code run using the originating Account's context, and also for \"StoredSession\" code that ran in the caller's context. While this made systemic sense due to the way the runtime context nesting works, this dual usage was very confusing to most human beings.\n\nIn v2.x the renamed Caller variant is exclusively used for wasm run using the initiating account entity's context. Previously installed 1.x stored session code should continue to work as the binary value matches but we no longer allow such logic to be upgraded, nor do we allow new stored session to be installed.",
            "type": "string",
            "enum": [
              "Caller"
            ]
          },
          {
            "description": "Runs using the called entity's context.",
            "type": "string",
            "enum": [
              "Called"
            ]
          },
          {
            "description": "Extract a subset of bytecode and installs it as a new smart contract. Runs using the called entity's context.",
            "type": "string",
            "enum": [
              "Factory"
            ]
          }
        ]
      },
      "ProtocolVersion": {
        "description": "Casper Platform protocol version",
        "type": "string"
      },
      "ContractPackage": {
        "description": "Contract definition, metadata, and security container.",
        "type": "object",
        "required": [
          "access_key",
          "disabled_versions",
          "groups",
          "lock_status",
          "versions"
        ],
        "properties": {
          "access_key": {
            "description": "Key used to add or disable versions",
            "allOf": [
              {
                "$ref": "#/components/schemas/URef"
              }
            ]
          },
          "versions": {
            "description": "All versions (enabled & disabled)",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ContractVersion"
            }
          },
          "disabled_versions": {
            "description": "Disabled versions",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ContractVersionKey"
            },
            "uniqueItems": true
          },
          "groups": {
            "description": "Mapping maintaining the set of URefs associated with each \"user group\". This can be used to control access to methods in a particular version of the contract. A method is callable by any context which \"knows\" any of the URefs associated with the method's user group.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Array_of_NamedUserGroup"
              }
            ]
          },
          "lock_status": {
            "description": "A flag that determines whether a contract is locked",
            "allOf": [
              {
                "$ref": "#/components/schemas/ContractPackageStatus"
              }
            ]
          }
        }
      },
      "ContractVersion": {
        "type": "object",
        "required": [
          "contract_hash",
          "contract_version",
          "protocol_version_major"
        ],
        "properties": {
          "protocol_version_major": {
            "type": "integer",
            "format": "uint32",
            "minimum": 0.0
          },
          "contract_version": {
            "type": "integer",
            "format": "uint32",
            "minimum": 0.0
          },
          "contract_hash": {
            "$ref": "#/components/schemas/ContractHash"
          }
        }
      },
      "ContractHash": {
        "description": "The hash address of the contract",
        "type": "string"
      },
      "ContractVersionKey": {
        "description": "Major element of `ProtocolVersion` combined with `ContractVersion`.",
        "type": "array",
        "items": [
          {
            "type": "integer",
            "format": "uint32",
            "minimum": 0.0
          },
          {
            "type": "integer",
            "format": "uint32",
            "minimum": 0.0
          }
        ],
        "maxItems": 2,
        "minItems": 2
      },
      "Array_of_NamedUserGroup": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/NamedUserGroup"
        }
      },
      "NamedUserGroup": {
        "type": "object",
        "required": [
          "group_name",
          "group_users"
        ],
        "properties": {
          "group_name": {
            "allOf": [
              {
                "$ref": "#/components/schemas/Group"
              }
            ]
          },
          "group_users": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/URef"
            },
            "uniqueItems": true
          }
        }
      },
      "ContractPackageStatus": {
        "description": "A enum to determine the lock status of the contract package.",
        "oneOf": [
          {
            "description": "The package is locked and cannot be versioned.",
            "type": "string",
            "enum": [
              "Locked"
            ]
          },
          {
            "description": "The package is unlocked and can be versioned.",
            "type": "string",
            "enum": [
              "Unlocked"
            ]
          }
        ]
      },
      "AddressableEntity": {
        "description": "Methods and type signatures supported by a contract.",
        "type": "object",
        "required": [
          "action_thresholds",
          "associated_keys",
          "byte_code_hash",
          "entity_kind",
          "main_purse",
          "message_topics",
          "package_hash",
          "protocol_version"
        ],
        "properties": {
          "protocol_version": {
            "$ref": "#/components/schemas/ProtocolVersion"
          },
          "entity_kind": {
            "$ref": "#/components/schemas/EntityKind"
          },
          "package_hash": {
            "$ref": "#/components/schemas/PackageHash"
          },
          "byte_code_hash": {
            "$ref": "#/components/schemas/ByteCodeHash"
          },
          "main_purse": {
            "$ref": "#/components/schemas/URef"
          },
          "associated_keys": {
            "$ref": "#/components/schemas/EntityAssociatedKeys"
          },
          "action_thresholds": {
            "$ref": "#/components/schemas/EntityActionThresholds"
          },
          "message_topics": {
            "$ref": "#/components/schemas/Array_of_MessageTopic"
          }
        }
      },
      "EntityKind": {
        "description": "The type of Package.",
        "oneOf": [
          {
            "description": "Package associated with a native contract implementation.",
            "type": "object",
            "required": [
              "System"
            ],
            "properties": {
              "System": {
                "$ref": "#/components/schemas/SystemEntityType"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Package associated with an Account hash.",
            "type": "object",
            "required": [
              "Account"
            ],
            "properties": {
              "Account": {
                "$ref": "#/components/schemas/AccountHash"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Packages associated with Wasm stored on chain.",
            "type": "object",
            "required": [
              "SmartContract"
            ],
            "properties": {
              "SmartContract": {
                "$ref": "#/components/schemas/TransactionRuntime"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "SystemEntityType": {
        "description": "System contract types.\n\nUsed by converting to a `u32` and passing as the `system_contract_index` argument of `ext_ffi::casper_get_system_contract()`.",
        "oneOf": [
          {
            "description": "Mint contract.",
            "type": "string",
            "enum": [
              "Mint"
            ]
          },
          {
            "description": "Handle Payment contract.",
            "type": "string",
            "enum": [
              "HandlePayment"
            ]
          },
          {
            "description": "Standard Payment contract.",
            "type": "string",
            "enum": [
              "StandardPayment"
            ]
          },
          {
            "description": "Auction contract.",
            "type": "string",
            "enum": [
              "Auction"
            ]
          }
        ]
      },
      "ByteCodeHash": {
        "description": "The hash address of the contract wasm",
        "type": "string"
      },
      "EntityAssociatedKeys": {
        "description": "A collection of weighted public keys (represented as account hashes) associated with an account.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Array_of_AssociatedKey"
          }
        ]
      },
      "EntityActionThresholds": {
        "description": "Thresholds that have to be met when executing an action of a certain type.",
        "type": "object",
        "required": [
          "deployment",
          "key_management",
          "upgrade_management"
        ],
        "properties": {
          "deployment": {
            "description": "Threshold for deploy execution.",
            "allOf": [
              {
                "$ref": "#/components/schemas/EntityAssociatedKeyWeight"
              }
            ]
          },
          "upgrade_management": {
            "description": "Threshold for upgrading contracts.",
            "allOf": [
              {
                "$ref": "#/components/schemas/EntityAssociatedKeyWeight"
              }
            ]
          },
          "key_management": {
            "description": "Threshold for managing action threshold.",
            "allOf": [
              {
                "$ref": "#/components/schemas/EntityAssociatedKeyWeight"
              }
            ]
          }
        }
      },
      "EntityAssociatedKeyWeight": {
        "description": "The weight associated with public keys in an account's associated keys.",
        "type": "integer",
        "format": "uint8",
        "minimum": 0.0
      },
      "Array_of_MessageTopic": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/MessageTopic"
        }
      },
      "MessageTopic": {
        "type": "object",
        "required": [
          "topic_name",
          "topic_name_hash"
        ],
        "properties": {
          "topic_name": {
            "type": "string"
          },
          "topic_name_hash": {
            "allOf": [
              {
                "$ref": "#/components/schemas/TopicNameHash"
              }
            ]
          }
        }
      },
      "TopicNameHash": {
        "description": "The hash of the name of the message topic.",
        "type": "string"
      },
      "Package": {
        "description": "Entity definition, metadata, and security container.",
        "type": "object",
        "required": [
          "disabled_versions",
          "groups",
          "lock_status",
          "versions"
        ],
        "properties": {
          "versions": {
            "description": "All versions (enabled & disabled).",
            "allOf": [
              {
                "$ref": "#/components/schemas/Array_of_EntityVersionAndHash"
              }
            ]
          },
          "disabled_versions": {
            "description": "Collection of disabled entity versions. The runtime will not permit disabled entity versions to be executed.",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/EntityVersionKey"
            },
            "uniqueItems": true
          },
          "groups": {
            "description": "Mapping maintaining the set of URefs associated with each \"user group\". This can be used to control access to methods in a particular version of the entity. A method is callable by any context which \"knows\" any of the URefs associated with the method's user group.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Array_of_NamedUserGroup"
              }
            ]
          },
          "lock_status": {
            "description": "A flag that determines whether a entity is locked",
            "allOf": [
              {
                "$ref": "#/components/schemas/PackageStatus"
              }
            ]
          }
        }
      },
      "Array_of_EntityVersionAndHash": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/EntityVersionAndHash"
        }
      },
      "EntityVersionAndHash": {
        "type": "object",
        "required": [
          "addressable_entity_hash",
          "entity_version_key"
        ],
        "properties": {
          "entity_version_key": {
            "allOf": [
              {
                "$ref": "#/components/schemas/EntityVersionKey"
              }
            ]
          },
          "addressable_entity_hash": {
            "allOf": [
              {
                "$ref": "#/components/schemas/AddressableEntityHash"
              }
            ]
          }
        }
      },
      "EntityVersionKey": {
        "description": "Major element of `ProtocolVersion` combined with `EntityVersion`.",
        "type": "object",
        "required": [
          "entity_version",
          "protocol_version_major"
        ],
        "properties": {
          "protocol_version_major": {
            "description": "Major element of `ProtocolVersion` a `ContractVersion` is compatible with.",
            "type": "integer",
            "format": "uint32",
            "minimum": 0.0
          },
          "entity_version": {
            "description": "Automatically incremented value for a contract version within a major `ProtocolVersion`.",
            "type": "integer",
            "format": "uint32",
            "minimum": 0.0
          }
        }
      },
      "PackageStatus": {
        "description": "A enum to determine the lock status of the package.",
        "oneOf": [
          {
            "description": "The package is locked and cannot be versioned.",
            "type": "string",
            "enum": [
              "Locked"
            ]
          },
          {
            "description": "The package is unlocked and can be versioned.",
            "type": "string",
            "enum": [
              "Unlocked"
            ]
          }
        ]
      },
      "ByteCode": {
        "description": "A container for contract's Wasm bytes.",
        "type": "object",
        "required": [
          "bytes",
          "kind"
        ],
        "properties": {
          "kind": {
            "$ref": "#/components/schemas/ByteCodeKind"
          },
          "bytes": {
            "$ref": "#/components/schemas/Bytes"
          }
        }
      },
      "ByteCodeKind": {
        "description": "The type of Byte code.",
        "oneOf": [
          {
            "description": "Empty byte code.",
            "type": "string",
            "enum": [
              "Empty"
            ]
          },
          {
            "description": "Byte code to be executed with the version 1 Casper execution engine.",
            "type": "string",
            "enum": [
              "V1CasperWasm"
            ]
          }
        ]
      },
      "MessageTopicSummary": {
        "description": "Summary of a message topic that will be stored in global state.",
        "type": "object",
        "required": [
          "blocktime",
          "message_count"
        ],
        "properties": {
          "message_count": {
            "description": "Number of messages in this topic.",
            "type": "integer",
            "format": "uint32",
            "minimum": 0.0
          },
          "blocktime": {
            "description": "Block timestamp in which these messages were emitted.",
            "allOf": [
              {
                "$ref": "#/components/schemas/BlockTime"
              }
            ]
          }
        }
      },
      "BlockTime": {
        "description": "A newtype wrapping a [`u64`] which represents the block time.",
        "type": "integer",
        "format": "uint64",
        "minimum": 0.0
      },
      "MessageChecksum": {
        "description": "Message checksum as a formatted string.",
        "type": "string"
      },
      "NamedKeyValue": {
        "description": "A NamedKey value.",
        "type": "object",
        "required": [
          "name",
          "named_key"
        ],
        "properties": {
          "named_key": {
            "description": "The actual `Key` encoded as a CLValue.",
            "allOf": [
              {
                "$ref": "#/components/schemas/CLValue"
              }
            ]
          },
          "name": {
            "description": "The name of the `Key` encoded as a CLValue.",
            "allOf": [
              {
                "$ref": "#/components/schemas/CLValue"
              }
            ]
          }
        }
      },
      "ReservationKind": {
        "description": "Container for bytes recording location, type and data for a gas reservation",
        "type": "object",
        "required": [
          "receipt",
          "reservation_data",
          "reservation_kind"
        ],
        "properties": {
          "receipt": {
            "$ref": "#/components/schemas/Digest"
          },
          "reservation_kind": {
            "type": "integer",
            "format": "uint8",
            "minimum": 0.0
          },
          "reservation_data": {
            "$ref": "#/components/schemas/Bytes"
          }
        }
      },
      "EntryPointValue": {
        "description": "The encaspulated representation of entrypoints.",
        "oneOf": [
          {
            "description": "Entrypoints to be executed against the V1 Casper VM.",
            "type": "object",
            "required": [
              "V1CasperVm"
            ],
            "properties": {
              "V1CasperVm": {
                "$ref": "#/components/schemas/EntryPoint2"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Entrypoints to be executed against the V2 Casper VM.",
            "type": "object",
            "required": [
              "V2CasperVm"
            ],
            "properties": {
              "V2CasperVm": {
                "$ref": "#/components/schemas/EntryPointV2"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "EntryPoint2": {
        "description": "Type signature of a method. Order of arguments matter since can be referenced by index as well as name.",
        "type": "object",
        "required": [
          "access",
          "args",
          "entry_point_payment",
          "entry_point_type",
          "name",
          "ret"
        ],
        "properties": {
          "name": {
            "type": "string"
          },
          "args": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Parameter"
            }
          },
          "ret": {
            "$ref": "#/components/schemas/CLType"
          },
          "access": {
            "$ref": "#/components/schemas/EntryPointAccess"
          },
          "entry_point_type": {
            "$ref": "#/components/schemas/EntryPointType"
          },
          "entry_point_payment": {
            "$ref": "#/components/schemas/EntryPointPayment"
          }
        }
      },
      "EntryPointPayment": {
        "description": "An enum specifying who pays for the invocation and execution of the entrypoint.",
        "oneOf": [
          {
            "description": "The caller must cover cost",
            "type": "string",
            "enum": [
              "Caller"
            ]
          },
          {
            "description": "Will cover cost to execute self but not cost of any subsequent invoked contracts",
            "type": "string",
            "enum": [
              "SelfOnly"
            ]
          },
          {
            "description": "will cover cost to execute self and the cost of any subsequent invoked contracts",
            "type": "string",
            "enum": [
              "SelfOnward"
            ]
          }
        ]
      },
      "EntryPointV2": {
        "description": "The entry point for the V2 Casper VM.",
        "type": "object",
        "required": [
          "flags",
          "function_index"
        ],
        "properties": {
          "function_index": {
            "description": "The selector.",
            "type": "integer",
            "format": "uint32",
            "minimum": 0.0
          },
          "flags": {
            "description": "The flags.",
            "type": "integer",
            "format": "uint32",
            "minimum": 0.0
          }
        }
      },
      "TransformError": {
        "description": "Error type for applying and combining transforms.\n\nA `TypeMismatch` occurs when a transform cannot be applied because the types are not compatible (e.g. trying to add a number to a string).",
        "oneOf": [
          {
            "description": "Error while (de)serializing data.",
            "type": "object",
            "required": [
              "Serialization"
            ],
            "properties": {
              "Serialization": {
                "$ref": "#/components/schemas/BytesreprError"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Type mismatch error.",
            "type": "object",
            "required": [
              "TypeMismatch"
            ],
            "properties": {
              "TypeMismatch": {
                "$ref": "#/components/schemas/TypeMismatch"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Type no longer supported.",
            "type": "string",
            "enum": [
              "Deprecated"
            ]
          }
        ]
      },
      "BytesreprError": {
        "description": "Serialization and deserialization errors.",
        "oneOf": [
          {
            "description": "Early end of stream while deserializing.",
            "type": "string",
            "enum": [
              "EarlyEndOfStream"
            ]
          },
          {
            "description": "Formatting error while deserializing.",
            "type": "string",
            "enum": [
              "Formatting"
            ]
          },
          {
            "description": "Not all input bytes were consumed in [`deserialize`].",
            "type": "string",
            "enum": [
              "LeftOverBytes"
            ]
          },
          {
            "description": "Out of memory error.",
            "type": "string",
            "enum": [
              "OutOfMemory"
            ]
          },
          {
            "description": "No serialized representation is available for a value.",
            "type": "string",
            "enum": [
              "NotRepresentable"
            ]
          },
          {
            "description": "Exceeded a recursion depth limit.",
            "type": "string",
            "enum": [
              "ExceededRecursionDepth"
            ]
          }
        ]
      },
      "TypeMismatch": {
        "description": "An error struct representing a type mismatch in [`StoredValue`](crate::StoredValue) operations.",
        "type": "object",
        "required": [
          "expected",
          "found"
        ],
        "properties": {
          "expected": {
            "description": "The name of the expected type.",
            "type": "string"
          },
          "found": {
            "description": "The actual type found.",
            "type": "string"
          }
        }
      },
      "AccountIdentifier": {
        "description": "Identifier of an account.",
        "anyOf": [
          {
            "description": "The public key of an account",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          {
            "description": "The account hash of an account",
            "allOf": [
              {
                "$ref": "#/components/schemas/AccountHash"
              }
            ]
          }
        ]
      },
      "BlockIdentifier": {
        "description": "Identifier for possible ways to retrieve a block.",
        "oneOf": [
          {
            "description": "Identify and retrieve the block with its hash.",
            "type": "object",
            "required": [
              "Hash"
            ],
            "properties": {
              "Hash": {
                "$ref": "#/components/schemas/BlockHash"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Identify and retrieve the block with its height.",
            "type": "object",
            "required": [
              "Height"
            ],
            "properties": {
              "Height": {
                "type": "integer",
                "format": "uint64",
                "minimum": 0.0
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "EntityIdentifier": {
        "description": "Identifier of an addressable entity.",
        "oneOf": [
          {
            "description": "The public key of an account.",
            "type": "object",
            "required": [
              "PublicKey"
            ],
            "properties": {
              "PublicKey": {
                "$ref": "#/components/schemas/PublicKey"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "The account hash of an account.",
            "type": "object",
            "required": [
              "AccountHash"
            ],
            "properties": {
              "AccountHash": {
                "$ref": "#/components/schemas/AccountHash"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "The address of an addressable entity.",
            "type": "object",
            "required": [
              "EntityAddr"
            ],
            "properties": {
              "EntityAddr": {
                "$ref": "#/components/schemas/EntityAddr"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "EntityAddr": {
        "description": "The address for an AddressableEntity which contains the 32 bytes and tagging information.",
        "anyOf": [
          {
            "description": "The address for a system entity account or contract.",
            "type": "string"
          },
          {
            "description": "The address of an entity that corresponds to an Account.",
            "type": "string"
          },
          {
            "description": "The address of an entity that corresponds to a Userland smart contract.",
            "type": "string"
          }
        ]
      },
      "EntityOrAccount": {
        "description": "An addressable entity or a legacy account.",
        "oneOf": [
          {
            "description": "An addressable entity.",
            "type": "object",
            "required": [
              "AddressableEntity"
            ],
            "properties": {
              "AddressableEntity": {
                "type": "object",
                "required": [
                  "entity",
                  "entry_points",
                  "named_keys"
                ],
                "properties": {
                  "entity": {
                    "description": "The addressable entity.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/AddressableEntity"
                      }
                    ]
                  },
                  "named_keys": {
                    "description": "The named keys of the addressable entity.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/NamedKeys"
                      }
                    ]
                  },
                  "entry_points": {
                    "description": "The entry points of the addressable entity.",
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/EntryPointValue"
                    }
                  }
                }
              }
            },
            "additionalProperties": false
          },
          {
            "description": "A legacy account.",
            "type": "object",
            "required": [
              "LegacyAccount"
            ],
            "properties": {
              "LegacyAccount": {
                "$ref": "#/components/schemas/Account"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "DictionaryIdentifier": {
        "description": "Options for dictionary item lookups.",
        "oneOf": [
          {
            "description": "Lookup a dictionary item via an Account's named keys.",
            "type": "object",
            "required": [
              "AccountNamedKey"
            ],
            "properties": {
              "AccountNamedKey": {
                "type": "object",
                "required": [
                  "dictionary_item_key",
                  "dictionary_name",
                  "key"
                ],
                "properties": {
                  "key": {
                    "description": "The account key as a formatted string whose named keys contains dictionary_name.",
                    "type": "string"
                  },
                  "dictionary_name": {
                    "description": "The named key under which the dictionary seed URef is stored.",
                    "type": "string"
                  },
                  "dictionary_item_key": {
                    "description": "The dictionary item key formatted as a string.",
                    "type": "string"
                  }
                }
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Lookup a dictionary item via a Contract's named keys.",
            "type": "object",
            "required": [
              "ContractNamedKey"
            ],
            "properties": {
              "ContractNamedKey": {
                "type": "object",
                "required": [
                  "dictionary_item_key",
                  "dictionary_name",
                  "key"
                ],
                "properties": {
                  "key": {
                    "description": "The contract key as a formatted string whose named keys contains dictionary_name.",
                    "type": "string"
                  },
                  "dictionary_name": {
                    "description": "The named key under which the dictionary seed URef is stored.",
                    "type": "string"
                  },
                  "dictionary_item_key": {
                    "description": "The dictionary item key formatted as a string.",
                    "type": "string"
                  }
                }
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Lookup a dictionary item via an entities named keys.",
            "type": "object",
            "required": [
              "EntityNamedKey"
            ],
            "properties": {
              "EntityNamedKey": {
                "type": "object",
                "required": [
                  "dictionary_item_key",
                  "dictionary_name",
                  "key"
                ],
                "properties": {
                  "key": {
                    "description": "The entity address formatted as a string.",
                    "type": "string"
                  },
                  "dictionary_name": {
                    "description": "The named key under which the dictionary seed URef is stored.",
                    "type": "string"
                  },
                  "dictionary_item_key": {
                    "description": "The dictionary item key formatted as a string.",
                    "type": "string"
                  }
                }
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Lookup a dictionary item via its seed URef.",
            "type": "object",
            "required": [
              "URef"
            ],
            "properties": {
              "URef": {
                "type": "object",
                "required": [
                  "dictionary_item_key",
                  "seed_uref"
                ],
                "properties": {
                  "seed_uref": {
                    "description": "The dictionary's seed URef.",
                    "type": "string"
                  },
                  "dictionary_item_key": {
                    "description": "The dictionary item key formatted as a string.",
                    "type": "string"
                  }
                }
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Lookup a dictionary item via its unique key.",
            "type": "object",
            "required": [
              "Dictionary"
            ],
            "properties": {
              "Dictionary": {
                "type": "string"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "GlobalStateIdentifier": {
        "description": "Identifier for possible ways to query Global State",
        "oneOf": [
          {
            "description": "Query using a block hash.",
            "type": "object",
            "required": [
              "BlockHash"
            ],
            "properties": {
              "BlockHash": {
                "$ref": "#/components/schemas/BlockHash"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Query using a block height.",
            "type": "object",
            "required": [
              "BlockHeight"
            ],
            "properties": {
              "BlockHeight": {
                "type": "integer",
                "format": "uint64",
                "minimum": 0.0
              }
            },
            "additionalProperties": false
          },
          {
            "description": "Query using the state root hash.",
            "type": "object",
            "required": [
              "StateRootHash"
            ],
            "properties": {
              "StateRootHash": {
                "$ref": "#/components/schemas/Digest"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "BlockHeader": {
        "description": "The versioned header portion of a block. It encapsulates different variants of the BlockHeader struct.",
        "oneOf": [
          {
            "description": "The legacy, initial version of the header portion of a block.",
            "type": "object",
            "required": [
              "Version1"
            ],
            "properties": {
              "Version1": {
                "$ref": "#/components/schemas/BlockHeaderV1"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "The version 2 of the header portion of a block.",
            "type": "object",
            "required": [
              "Version2"
            ],
            "properties": {
              "Version2": {
                "$ref": "#/components/schemas/BlockHeaderV2"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "BlockHeaderV1": {
        "description": "The header portion of a block.",
        "type": "object",
        "required": [
          "accumulated_seed",
          "body_hash",
          "era_id",
          "height",
          "parent_hash",
          "protocol_version",
          "random_bit",
          "state_root_hash",
          "timestamp"
        ],
        "properties": {
          "parent_hash": {
            "description": "The parent block's hash.",
            "allOf": [
              {
                "$ref": "#/components/schemas/BlockHash"
              }
            ]
          },
          "state_root_hash": {
            "description": "The root hash of global state after the deploys in this block have been executed.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Digest"
              }
            ]
          },
          "body_hash": {
            "description": "The hash of the block's body.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Digest"
              }
            ]
          },
          "random_bit": {
            "description": "A random bit needed for initializing a future era.",
            "type": "boolean"
          },
          "accumulated_seed": {
            "description": "A seed needed for initializing a future era.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Digest"
              }
            ]
          },
          "era_end": {
            "description": "The `EraEnd` of a block if it is a switch block.",
            "anyOf": [
              {
                "$ref": "#/components/schemas/EraEndV1"
              },
              {
                "type": "null"
              }
            ]
          },
          "timestamp": {
            "description": "The timestamp from when the block was proposed.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Timestamp"
              }
            ]
          },
          "era_id": {
            "description": "The era ID in which this block was created.",
            "allOf": [
              {
                "$ref": "#/components/schemas/EraId"
              }
            ]
          },
          "height": {
            "description": "The height of this block, i.e. the number of ancestors.",
            "type": "integer",
            "format": "uint64",
            "minimum": 0.0
          },
          "protocol_version": {
            "description": "The protocol version of the network from when this block was created.",
            "allOf": [
              {
                "$ref": "#/components/schemas/ProtocolVersion"
              }
            ]
          }
        }
      },
      "EraEndV1": {
        "description": "Information related to the end of an era, and validator weights for the following era.",
        "type": "object",
        "required": [
          "era_report",
          "next_era_validator_weights"
        ],
        "properties": {
          "era_report": {
            "description": "Equivocation, reward and validator inactivity information.",
            "allOf": [
              {
                "$ref": "#/components/schemas/EraReport_for_PublicKey"
              }
            ]
          },
          "next_era_validator_weights": {
            "description": "The validators for the upcoming era and their respective weights.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Array_of_ValidatorWeight"
              }
            ]
          }
        }
      },
      "EraReport_for_PublicKey": {
        "description": "Equivocation, reward and validator inactivity information.",
        "type": "object",
        "required": [
          "equivocators",
          "inactive_validators",
          "rewards"
        ],
        "properties": {
          "equivocators": {
            "description": "The set of equivocators.",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/PublicKey"
            }
          },
          "rewards": {
            "description": "Rewards for finalization of earlier blocks.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Array_of_EraReward"
              }
            ]
          },
          "inactive_validators": {
            "description": "Validators that haven't produced any unit during the era.",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/PublicKey"
            }
          }
        }
      },
      "Array_of_EraReward": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/EraReward"
        }
      },
      "EraReward": {
        "description": "A validator's public key paired with a measure of the value of its contribution to consensus, as a fraction of the configured maximum block reward.",
        "type": "object",
        "required": [
          "amount",
          "validator"
        ],
        "properties": {
          "validator": {
            "description": "The validator's public key.",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          "amount": {
            "description": "The reward amount.",
            "type": "integer",
            "format": "uint64",
            "minimum": 0.0
          }
        }
      },
      "Array_of_ValidatorWeight": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/ValidatorWeight"
        }
      },
      "ValidatorWeight": {
        "description": "A validator's public key paired with its weight, i.e. the total number of motes staked by it and its delegators.",
        "type": "object",
        "required": [
          "validator",
          "weight"
        ],
        "properties": {
          "validator": {
            "description": "The validator's public key.",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          "weight": {
            "description": "The validator's weight.",
            "allOf": [
              {
                "$ref": "#/components/schemas/U512"
              }
            ]
          }
        }
      },
      "BlockHeaderV2": {
        "description": "The header portion of a block.",
        "type": "object",
        "required": [
          "accumulated_seed",
          "body_hash",
          "current_gas_price",
          "era_id",
          "height",
          "parent_hash",
          "proposer",
          "protocol_version",
          "random_bit",
          "state_root_hash",
          "timestamp"
        ],
        "properties": {
          "parent_hash": {
            "description": "The parent block's hash.",
            "allOf": [
              {
                "$ref": "#/components/schemas/BlockHash"
              }
            ]
          },
          "state_root_hash": {
            "description": "The root hash of global state after the deploys in this block have been executed.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Digest"
              }
            ]
          },
          "body_hash": {
            "description": "The hash of the block's body.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Digest"
              }
            ]
          },
          "random_bit": {
            "description": "A random bit needed for initializing a future era.",
            "type": "boolean"
          },
          "accumulated_seed": {
            "description": "A seed needed for initializing a future era.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Digest"
              }
            ]
          },
          "era_end": {
            "description": "The `EraEnd` of a block if it is a switch block.",
            "anyOf": [
              {
                "$ref": "#/components/schemas/EraEndV2"
              },
              {
                "type": "null"
              }
            ]
          },
          "timestamp": {
            "description": "The timestamp from when the block was proposed.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Timestamp"
              }
            ]
          },
          "era_id": {
            "description": "The era ID in which this block was created.",
            "allOf": [
              {
                "$ref": "#/components/schemas/EraId"
              }
            ]
          },
          "height": {
            "description": "The height of this block, i.e. the number of ancestors.",
            "type": "integer",
            "format": "uint64",
            "minimum": 0.0
          },
          "protocol_version": {
            "description": "The protocol version of the network from when this block was created.",
            "allOf": [
              {
                "$ref": "#/components/schemas/ProtocolVersion"
              }
            ]
          },
          "proposer": {
            "description": "The public key of the validator which proposed the block.",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          "current_gas_price": {
            "description": "The gas price of the era",
            "type": "integer",
            "format": "uint8",
            "minimum": 0.0
          },
          "last_switch_block_hash": {
            "description": "The most recent switch block hash.",
            "anyOf": [
              {
                "$ref": "#/components/schemas/BlockHash"
              },
              {
                "type": "null"
              }
            ]
          }
        }
      },
      "EraEndV2": {
        "description": "Information related to the end of an era, and validator weights for the following era.",
        "type": "object",
        "required": [
          "equivocators",
          "inactive_validators",
          "next_era_gas_price",
          "next_era_validator_weights",
          "rewards"
        ],
        "properties": {
          "equivocators": {
            "description": "The set of equivocators.",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/PublicKey"
            }
          },
          "inactive_validators": {
            "description": "Validators that haven't produced any unit during the era.",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/PublicKey"
            }
          },
          "next_era_validator_weights": {
            "description": "The validators for the upcoming era and their respective weights.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Array_of_ValidatorWeight"
              }
            ]
          },
          "rewards": {
            "description": "The rewards distributed to the validators.",
            "type": "object",
            "additionalProperties": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/U512"
              }
            }
          },
          "next_era_gas_price": {
            "type": "integer",
            "format": "uint8",
            "minimum": 0.0
          }
        }
      },
      "PurseIdentifier": {
        "description": "Identifier of a purse.",
        "oneOf": [
          {
            "description": "The main purse of the account identified by this public key.",
            "type": "object",
            "required": [
              "main_purse_under_public_key"
            ],
            "properties": {
              "main_purse_under_public_key": {
                "$ref": "#/components/schemas/PublicKey"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "The main purse of the account identified by this account hash.",
            "type": "object",
            "required": [
              "main_purse_under_account_hash"
            ],
            "properties": {
              "main_purse_under_account_hash": {
                "$ref": "#/components/schemas/AccountHash"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "The main purse of the account identified by this entity address.",
            "type": "object",
            "required": [
              "main_purse_under_entity_addr"
            ],
            "properties": {
              "main_purse_under_entity_addr": {
                "$ref": "#/components/schemas/EntityAddr"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "The purse identified by this URef.",
            "type": "object",
            "required": [
              "purse_uref"
            ],
            "properties": {
              "purse_uref": {
                "$ref": "#/components/schemas/URef"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "BalanceHoldWithProof": {
        "type": "object",
        "required": [
          "amount",
          "proof",
          "time"
        ],
        "properties": {
          "time": {
            "description": "The block time at which the hold was created.",
            "allOf": [
              {
                "$ref": "#/components/schemas/BlockTime"
              }
            ]
          },
          "amount": {
            "description": "The amount in the hold.",
            "allOf": [
              {
                "$ref": "#/components/schemas/U512"
              }
            ]
          },
          "proof": {
            "description": "A proof that the given value is present in the Merkle trie.",
            "type": "string"
          }
        }
      },
      "Peers": {
        "description": "Map of peer IDs to network addresses.",
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/PeerEntry"
        }
      },
      "PeerEntry": {
        "description": "Node peer entry.",
        "type": "object",
        "required": [
          "address",
          "node_id"
        ],
        "properties": {
          "node_id": {
            "description": "Node id.",
            "type": "string"
          },
          "address": {
            "description": "Node address.",
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "MinimalBlockInfo": {
        "description": "Minimal info about a `Block` needed to satisfy the node status request.",
        "type": "object",
        "required": [
          "creator",
          "era_id",
          "hash",
          "height",
          "state_root_hash",
          "timestamp"
        ],
        "properties": {
          "hash": {
            "$ref": "#/components/schemas/BlockHash"
          },
          "timestamp": {
            "$ref": "#/components/schemas/Timestamp"
          },
          "era_id": {
            "$ref": "#/components/schemas/EraId"
          },
          "height": {
            "type": "integer",
            "format": "uint64",
            "minimum": 0.0
          },
          "state_root_hash": {
            "$ref": "#/components/schemas/Digest"
          },
          "creator": {
            "$ref": "#/components/schemas/PublicKey"
          }
        },
        "additionalProperties": false
      },
      "NextUpgrade": {
        "description": "Information about the next protocol upgrade.",
        "type": "object",
        "required": [
          "activation_point",
          "protocol_version"
        ],
        "properties": {
          "activation_point": {
            "$ref": "#/components/schemas/ActivationPoint"
          },
          "protocol_version": {
            "$ref": "#/components/schemas/ProtocolVersion"
          }
        }
      },
      "ActivationPoint": {
        "description": "The first era to which the associated protocol version applies.",
        "anyOf": [
          {
            "description": "Era id.",
            "allOf": [
              {
                "$ref": "#/components/schemas/EraId"
              }
            ]
          },
          {
            "description": "Genesis timestamp.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Timestamp"
              }
            ]
          }
        ]
      },
      "AvailableBlockRange": {
        "description": "An unbroken, inclusive range of blocks.",
        "type": "object",
        "required": [
          "high",
          "low"
        ],
        "properties": {
          "low": {
            "description": "The inclusive lower bound of the range.",
            "type": "integer",
            "format": "uint64",
            "minimum": 0.0
          },
          "high": {
            "description": "The inclusive upper bound of the range.",
            "type": "integer",
            "format": "uint64",
            "minimum": 0.0
          }
        },
        "additionalProperties": false
      },
      "BlockSynchronizerStatus": {
        "description": "The status of the block synchronizer.",
        "type": "object",
        "properties": {
          "historical": {
            "description": "The status of syncing a historical block, if any.",
            "anyOf": [
              {
                "$ref": "#/components/schemas/BlockSyncStatus"
              },
              {
                "type": "null"
              }
            ]
          },
          "forward": {
            "description": "The status of syncing a forward block, if any.",
            "anyOf": [
              {
                "$ref": "#/components/schemas/BlockSyncStatus"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "additionalProperties": false
      },
      "BlockSyncStatus": {
        "description": "The status of syncing an individual block.",
        "type": "object",
        "required": [
          "acquisition_state",
          "block_hash"
        ],
        "properties": {
          "block_hash": {
            "description": "The block hash.",
            "allOf": [
              {
                "$ref": "#/components/schemas/BlockHash"
              }
            ]
          },
          "block_height": {
            "description": "The height of the block, if known.",
            "type": [
              "integer",
              "null"
            ],
            "format": "uint64",
            "minimum": 0.0
          },
          "acquisition_state": {
            "description": "The state of acquisition of the data associated with the block.",
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "EraIdentifier": {
        "description": "Identifier for an era.",
        "oneOf": [
          {
            "type": "object",
            "required": [
              "Era"
            ],
            "properties": {
              "Era": {
                "$ref": "#/components/schemas/EraId"
              }
            },
            "additionalProperties": false
          },
          {
            "type": "object",
            "required": [
              "Block"
            ],
            "properties": {
              "Block": {
                "$ref": "#/components/schemas/BlockIdentifier"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "JsonValidatorChanges": {
        "description": "The changes in a validator's status.",
        "type": "object",
        "required": [
          "public_key",
          "status_changes"
        ],
        "properties": {
          "public_key": {
            "description": "The public key of the validator.",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          "status_changes": {
            "description": "The set of changes to the validator's status.",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/JsonValidatorStatusChange"
            }
          }
        },
        "additionalProperties": false
      },
      "JsonValidatorStatusChange": {
        "description": "A single change to a validator's status in the given era.",
        "type": "object",
        "required": [
          "era_id",
          "validator_change"
        ],
        "properties": {
          "era_id": {
            "description": "The era in which the change occurred.",
            "allOf": [
              {
                "$ref": "#/components/schemas/EraId"
              }
            ]
          },
          "validator_change": {
            "description": "The change in validator status.",
            "allOf": [
              {
                "$ref": "#/components/schemas/ValidatorChange"
              }
            ]
          }
        },
        "additionalProperties": false
      },
      "ValidatorChange": {
        "description": "A change to a validator's status between two eras.",
        "oneOf": [
          {
            "description": "The validator got newly added to the validator set.",
            "type": "string",
            "enum": [
              "Added"
            ]
          },
          {
            "description": "The validator was removed from the validator set.",
            "type": "string",
            "enum": [
              "Removed"
            ]
          },
          {
            "description": "The validator was banned from this era.",
            "type": "string",
            "enum": [
              "Banned"
            ]
          },
          {
            "description": "The validator was excluded from proposing new blocks in this era.",
            "type": "string",
            "enum": [
              "CannotPropose"
            ]
          },
          {
            "description": "We saw the validator misbehave in this era.",
            "type": "string",
            "enum": [
              "SeenAsFaulty"
            ]
          }
        ]
      },
      "ChainspecRawBytes": {
        "description": "The raw bytes of the chainspec.toml, genesis accounts.toml, and global_state.toml files.",
        "type": "object",
        "required": [
          "chainspec_bytes"
        ],
        "properties": {
          "chainspec_bytes": {
            "description": "Raw bytes of the current chainspec.toml file.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Bytes"
              }
            ]
          },
          "maybe_genesis_accounts_bytes": {
            "description": "Raw bytes of the current genesis accounts.toml file.",
            "anyOf": [
              {
                "$ref": "#/components/schemas/Bytes"
              },
              {
                "type": "null"
              }
            ]
          },
          "maybe_global_state_bytes": {
            "description": "Raw bytes of the current global_state.toml file.",
            "anyOf": [
              {
                "$ref": "#/components/schemas/Bytes"
              },
              {
                "type": "null"
              }
            ]
          }
        }
      },
      "JsonBlockWithSignatures": {
        "description": "A JSON-friendly representation of a block and the signatures for that block.",
        "type": "object",
        "required": [
          "block",
          "proofs"
        ],
        "properties": {
          "block": {
            "description": "The block.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Block"
              }
            ]
          },
          "proofs": {
            "description": "The proofs of the block, i.e. a collection of validators' signatures of the block hash.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Array_of_BlockProof"
              }
            ]
          }
        },
        "additionalProperties": false
      },
      "Block": {
        "description": "A block after execution.",
        "oneOf": [
          {
            "description": "The legacy, initial version of the block.",
            "type": "object",
            "required": [
              "Version1"
            ],
            "properties": {
              "Version1": {
                "$ref": "#/components/schemas/BlockV1"
              }
            },
            "additionalProperties": false
          },
          {
            "description": "The version 2 of the block.",
            "type": "object",
            "required": [
              "Version2"
            ],
            "properties": {
              "Version2": {
                "$ref": "#/components/schemas/BlockV2"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "BlockV1": {
        "description": "A block after execution, with the resulting global state root hash. This is the core component of the Casper linear blockchain. Version 1.",
        "type": "object",
        "required": [
          "body",
          "hash",
          "header"
        ],
        "properties": {
          "hash": {
            "description": "The block hash identifying this block.",
            "allOf": [
              {
                "$ref": "#/components/schemas/BlockHash"
              }
            ]
          },
          "header": {
            "description": "The header portion of the block.",
            "allOf": [
              {
                "$ref": "#/components/schemas/BlockHeaderV1"
              }
            ]
          },
          "body": {
            "description": "The body portion of the block.",
            "allOf": [
              {
                "$ref": "#/components/schemas/BlockBodyV1"
              }
            ]
          }
        }
      },
      "BlockBodyV1": {
        "description": "The body portion of a block. Version 1.",
        "type": "object",
        "required": [
          "deploy_hashes",
          "proposer",
          "transfer_hashes"
        ],
        "properties": {
          "proposer": {
            "description": "The public key of the validator which proposed the block.",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          "deploy_hashes": {
            "description": "The deploy hashes of the non-transfer deploys within the block.",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/DeployHash"
            }
          },
          "transfer_hashes": {
            "description": "The deploy hashes of the transfers within the block.",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/DeployHash"
            }
          }
        }
      },
      "BlockV2": {
        "description": "A block after execution, with the resulting global state root hash. This is the core component of the Casper linear blockchain. Version 2.",
        "type": "object",
        "required": [
          "body",
          "hash",
          "header"
        ],
        "properties": {
          "hash": {
            "description": "The block hash identifying this block.",
            "allOf": [
              {
                "$ref": "#/components/schemas/BlockHash"
              }
            ]
          },
          "header": {
            "description": "The header portion of the block.",
            "allOf": [
              {
                "$ref": "#/components/schemas/BlockHeaderV2"
              }
            ]
          },
          "body": {
            "description": "The body portion of the block.",
            "allOf": [
              {
                "$ref": "#/components/schemas/BlockBodyV2"
              }
            ]
          }
        }
      },
      "BlockBodyV2": {
        "description": "The body portion of a block. Version 2.",
        "type": "object",
        "required": [
          "rewarded_signatures",
          "transactions"
        ],
        "properties": {
          "transactions": {
            "description": "Map of transactions mapping categories to a list of transaction hashes.",
            "type": "object",
            "additionalProperties": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/TransactionHash"
              }
            }
          },
          "rewarded_signatures": {
            "description": "List of identifiers for finality signatures for a particular past block.",
            "allOf": [
              {
                "$ref": "#/components/schemas/RewardedSignatures"
              }
            ]
          }
        }
      },
      "RewardedSignatures": {
        "description": "Describes finality signatures that will be rewarded in a block. Consists of a vector of `SingleBlockRewardedSignatures`, each of which describes signatures for a single ancestor block. The first entry represents the signatures for the parent block, the second for the parent of the parent, and so on.",
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/SingleBlockRewardedSignatures"
        }
      },
      "SingleBlockRewardedSignatures": {
        "description": "List of identifiers for finality signatures for a particular past block.\n\nThat past block height is current_height - signature_rewards_max_delay, the latter being defined in the chainspec.\n\nWe need to wait for a few blocks to pass (`signature_rewards_max_delay`) to store the finality signers because we need a bit of time to get the block finality.",
        "type": "array",
        "items": {
          "type": "integer",
          "format": "uint8",
          "minimum": 0.0
        }
      },
      "Array_of_BlockProof": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/BlockProof"
        }
      },
      "BlockProof": {
        "description": "A validator's public key paired with a corresponding signature of a given block hash.",
        "type": "object",
        "required": [
          "public_key",
          "signature"
        ],
        "properties": {
          "public_key": {
            "description": "The validator's public key.",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          "signature": {
            "description": "The validator's signature.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Signature"
              }
            ]
          }
        }
      },
      "EraSummary": {
        "description": "The summary of an era",
        "type": "object",
        "required": [
          "block_hash",
          "era_id",
          "merkle_proof",
          "state_root_hash",
          "stored_value"
        ],
        "properties": {
          "block_hash": {
            "description": "The block hash",
            "allOf": [
              {
                "$ref": "#/components/schemas/BlockHash"
              }
            ]
          },
          "era_id": {
            "description": "The era id",
            "allOf": [
              {
                "$ref": "#/components/schemas/EraId"
              }
            ]
          },
          "stored_value": {
            "description": "The StoredValue containing era information",
            "allOf": [
              {
                "$ref": "#/components/schemas/StoredValue"
              }
            ]
          },
          "state_root_hash": {
            "description": "Hex-encoded hash of the state root",
            "allOf": [
              {
                "$ref": "#/components/schemas/Digest"
              }
            ]
          },
          "merkle_proof": {
            "description": "The Merkle proof",
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "AuctionState": {
        "description": "Data structure summarizing auction contract data.",
        "type": "object",
        "required": [
          "bids",
          "block_height",
          "era_validators",
          "state_root_hash"
        ],
        "properties": {
          "state_root_hash": {
            "description": "Global state hash.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Digest"
              }
            ]
          },
          "block_height": {
            "description": "Block height.",
            "type": "integer",
            "format": "uint64",
            "minimum": 0.0
          },
          "era_validators": {
            "description": "Era validators.",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/JsonEraValidators"
            }
          },
          "bids": {
            "description": "All bids.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Array_of_PublicKeyAndBid"
              }
            ]
          }
        },
        "additionalProperties": false
      },
      "JsonEraValidators": {
        "description": "The validators for the given era.",
        "type": "object",
        "required": [
          "era_id",
          "validator_weights"
        ],
        "properties": {
          "era_id": {
            "$ref": "#/components/schemas/EraId"
          },
          "validator_weights": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/JsonValidatorWeights"
            }
          }
        },
        "additionalProperties": false
      },
      "JsonValidatorWeights": {
        "description": "A validator's weight.",
        "type": "object",
        "required": [
          "public_key",
          "weight"
        ],
        "properties": {
          "public_key": {
            "$ref": "#/components/schemas/PublicKey"
          },
          "weight": {
            "$ref": "#/components/schemas/U512"
          }
        },
        "additionalProperties": false
      },
      "Array_of_PublicKeyAndBid": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/PublicKeyAndBid"
        }
      },
      "PublicKeyAndBid": {
        "description": "A bid associated with the given public key.",
        "type": "object",
        "required": [
          "bid",
          "public_key"
        ],
        "properties": {
          "public_key": {
            "description": "The public key of the bidder.",
            "allOf": [
              {
                "$ref": "#/components/schemas/PublicKey"
              }
            ]
          },
          "bid": {
            "description": "The bid details.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Bid"
              }
            ]
          }
        }
      }
    }
  }
}
 
``` 
