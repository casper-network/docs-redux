```json copy 
{
    "components": {
        "schemas": {
            "Deploy": {
                "description": "A deploy; an item containing a smart contract along with the requester's signature(s).",
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
                "type": "integer",
                "format": "uint64",
                "minimum": 0.0
            },
            "TimeDiff": {
                "description": "Human-readable duration.",
                "type": "integer",
                "format": "uint64",
                "minimum": 0.0
            },
            "ExecutableDeployItem": {
                "description": "Represents possible variants of an executable deploy.",
                "anyOf": [
                    {
                        "description": "Executable specified as raw bytes that represent WASM code and an instance of [`RuntimeArgs`].",
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
                        "description": "Stored contract referenced by its [`ContractHash`], entry point and an instance of [`RuntimeArgs`].",
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
                                        "description": "Hex-encoded hash.",
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
                        "description": "Stored versioned contract referenced by its [`ContractPackageHash`], entry point and an instance of [`RuntimeArgs`].",
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
                                        "description": "Hex-encoded hash.",
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
                        "description": "A native transfer which does not contain or reference a WASM code.",
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
                "anyOf": [
                    {
                        "type": "string",
                        "enum": [
                            "Bool",
                            "I32",
                            "I64",
                            "U8",
                            "U32",
                            "U64",
                            "U128",
                            "U256",
                            "U512",
                            "Unit",
                            "String",
                            "Key",
                            "URef",
                            "PublicKey",
                            "Any"
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
                    }
                ]
            },
            "Approval": {
                "description": "A struct containing a signature of a deploy hash and the public key of the signer.",
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
            "JsonExecutionResult": {
                "description": "The execution result of a single deploy.",
                "type": "object",
                "required": [
                    "block_hash",
                    "result"
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
                    "result": {
                        "description": "Execution result.",
                        "allOf": [
                            {
                                "$ref": "#/components/schemas/ExecutionResult"
                            }
                        ]
                    }
                },
                "additionalProperties": false
            },
            "BlockHash": {
                "description": "A cryptographic hash identifying a [`Block`](struct.Block.html).",
                "allOf": [
                    {
                        "$ref": "#/components/schemas/Digest"
                    }
                ]
            },
            "ExecutionResult": {
                "description": "The result of executing a single deploy.",
                "anyOf": [
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
                "description": "The journal of execution transforms from a single deploy.",
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
                        "description": "The journal of execution transforms.",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/TransformEntry"
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
                "type": "string",
                "enum": [
                    "Read",
                    "Write",
                    "Add",
                    "NoOp"
                ]
            },
            "TransformEntry": {
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
                                "$ref": "#/components/schemas/Transform"
                            }
                        ]
                    }
                },
                "additionalProperties": false
            },
            "Transform": {
                "description": "The actual transformation performed while executing a deploy.",
                "anyOf": [
                    {
                        "type": "string",
                        "enum": [
                            "Identity",
                            "WriteContractWasm",
                            "WriteContract",
                            "WriteContractPackage"
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
                        "description": "Writes the given Transfer to global state.",
                        "type": "object",
                        "required": [
                            "WriteTransfer"
                        ],
                        "properties": {
                            "WriteTransfer": {
                                "$ref": "#/components/schemas/Transfer"
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
                    }
                ]
            },
            "AccountHash": {
                "description": "Hex-encoded account hash.",
                "type": "string"
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
                        "description": "The relevant Deploy.",
                        "allOf": [
                            {
                                "$ref": "#/components/schemas/DeployHash"
                            }
                        ]
                    },
                    "transfers": {
                        "description": "Transfers performed by the Deploy.",
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
                "description": "Hex-encoded transfer address.",
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
                "anyOf": [
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
            "Transfer": {
                "description": "Represents a transfer from one purse to another",
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
                        "description": "Deploy that created the transfer",
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
                    "delegators": {
                        "description": "This validator's delegators, indexed by their public keys",
                        "type": "object",
                        "additionalProperties": {
                            "$ref": "#/components/schemas/Delegator"
                        }
                    },
                    "inactive": {
                        "description": "`true` if validator has been \"evicted\"",
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
            "EraId": {
                "description": "Era ID newtype.",
                "type": "integer",
                "format": "uint64",
                "minimum": 0.0
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
                "description": "A named key.",
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
                        "type": "string"
                    }
                },
                "additionalProperties": false
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
                "anyOf": [
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
            "Account": {
                "description": "Structure representing a user's account, stored in global state.",
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
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/NamedKey"
                        }
                    },
                    "main_purse": {
                        "$ref": "#/components/schemas/URef"
                    },
                    "associated_keys": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/AssociatedKey"
                        }
                    },
                    "action_thresholds": {
                        "$ref": "#/components/schemas/ActionThresholds"
                    }
                },
                "additionalProperties": false
            },
            "AssociatedKey": {
                "type": "object",
                "required": [
                    "account_hash",
                    "weight"
                ],
                "properties": {
                    "account_hash": {
                        "$ref": "#/components/schemas/AccountHash"
                    },
                    "weight": {
                        "type": "integer",
                        "format": "uint8",
                        "minimum": 0.0
                    }
                },
                "additionalProperties": false
            },
            "ActionThresholds": {
                "description": "Thresholds that have to be met when executing an action of a certain type.",
                "type": "object",
                "required": [
                    "deployment",
                    "key_management"
                ],
                "properties": {
                    "deployment": {
                        "type": "integer",
                        "format": "uint8",
                        "minimum": 0.0
                    },
                    "key_management": {
                        "type": "integer",
                        "format": "uint8",
                        "minimum": 0.0
                    }
                },
                "additionalProperties": false
            },
            "DictionaryIdentifier": {
                "description": "Options for dictionary item lookups.",
                "anyOf": [
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
            "StoredValue": {
                "description": "Representation of a value stored in global state.\n\n`Account`, `Contract` and `ContractPackage` have their own `json_compatibility` representations (see their docs for further info).",
                "anyOf": [
                    {
                        "description": "An instance of any variant of CLValue",
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
                        "description": "A contract's Wasm",
                        "type": "object",
                        "required": [
                            "ContractWasm"
                        ],
                        "properties": {
                            "ContractWasm": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": false
                    },
                    {
                        "description": "Methods and type signatures supported by a contract.",
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
                        "description": "A contract definition, metadata, and security container.",
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
                        "description": "A record of a transfer",
                        "type": "object",
                        "required": [
                            "Transfer"
                        ],
                        "properties": {
                            "Transfer": {
                                "$ref": "#/components/schemas/Transfer"
                            }
                        },
                        "additionalProperties": false
                    },
                    {
                        "description": "A record of a deploy",
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
                        "description": "Auction metadata",
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
                        "description": "A bid",
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
                        "description": "A withdraw",
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
                        "description": "A collection of unbonding purses",
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
                    }
                ]
            },
            "Contract": {
                "description": "A contract struct that can be serialized as  JSON object.",
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
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/NamedKey"
                        }
                    },
                    "entry_points": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/EntryPoint"
                        }
                    },
                    "protocol_version": {
                        "type": "string"
                    }
                },
                "additionalProperties": false
            },
            "ContractPackageHash": {
                "description": "The hash address of the contract package",
                "type": "string"
            },
            "ContractWasmHash": {
                "description": "The hash address of the contract wasm",
                "type": "string"
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
                "anyOf": [
                    {
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
                    }
                ]
            },
            "Group": {
                "description": "A (labelled) \"user group\". Each method of a versioned contract may be associated with one or more user groups which are allowed to call it.",
                "type": "string"
            },
            "EntryPointType": {
                "description": "Context of method execution",
                "type": "string",
                "enum": [
                    "Session",
                    "Contract"
                ]
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
                        "$ref": "#/components/schemas/URef"
                    },
                    "versions": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/ContractVersion"
                        }
                    },
                    "disabled_versions": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/DisabledVersion"
                        }
                    },
                    "groups": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/Groups"
                        }
                    },
                    "lock_status": {
                        "$ref": "#/components/schemas/ContractPackageStatus"
                    }
                },
                "additionalProperties": false
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
            "DisabledVersion": {
                "type": "object",
                "required": [
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
                    }
                }
            },
            "Groups": {
                "type": "object",
                "required": [
                    "group",
                    "keys"
                ],
                "properties": {
                    "group": {
                        "type": "string"
                    },
                    "keys": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/URef"
                        }
                    }
                }
            },
            "ContractPackageStatus": {
                "description": "A enum to determine the lock status of the contract package.",
                "type": "string",
                "enum": [
                    "Locked",
                    "Unlocked"
                ]
            },
            "GlobalStateIdentifier": {
                "description": "Identifier for possible ways to query Global State",
                "anyOf": [
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
            "JsonBlockHeader": {
                "description": "JSON representation of a block header.",
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
                        "description": "The parent hash.",
                        "allOf": [
                            {
                                "$ref": "#/components/schemas/BlockHash"
                            }
                        ]
                    },
                    "state_root_hash": {
                        "description": "The state root hash.",
                        "allOf": [
                            {
                                "$ref": "#/components/schemas/Digest"
                            }
                        ]
                    },
                    "body_hash": {
                        "description": "The body hash.",
                        "allOf": [
                            {
                                "$ref": "#/components/schemas/Digest"
                            }
                        ]
                    },
                    "random_bit": {
                        "description": "Randomness bit.",
                        "type": "boolean"
                    },
                    "accumulated_seed": {
                        "description": "Accumulated seed.",
                        "allOf": [
                            {
                                "$ref": "#/components/schemas/Digest"
                            }
                        ]
                    },
                    "era_end": {
                        "description": "The era end.",
                        "anyOf": [
                            {
                                "$ref": "#/components/schemas/JsonEraEnd"
                            },
                            {
                                "type": "null"
                            }
                        ]
                    },
                    "timestamp": {
                        "description": "The block timestamp.",
                        "allOf": [
                            {
                                "$ref": "#/components/schemas/Timestamp"
                            }
                        ]
                    },
                    "era_id": {
                        "description": "The block era id.",
                        "allOf": [
                            {
                                "$ref": "#/components/schemas/EraId"
                            }
                        ]
                    },
                    "height": {
                        "description": "The block height.",
                        "type": "integer",
                        "format": "uint64",
                        "minimum": 0.0
                    },
                    "protocol_version": {
                        "description": "The protocol version.",
                        "allOf": [
                            {
                                "$ref": "#/components/schemas/ProtocolVersion"
                            }
                        ]
                    }
                },
                "additionalProperties": false
            },
            "JsonEraEnd": {
                "type": "object",
                "required": [
                    "era_report",
                    "next_era_validator_weights"
                ],
                "properties": {
                    "era_report": {
                        "$ref": "#/components/schemas/JsonEraReport"
                    },
                    "next_era_validator_weights": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/ValidatorWeight"
                        }
                    }
                },
                "additionalProperties": false
            },
            "JsonEraReport": {
                "description": "Equivocation and reward information to be included in the terminal block.",
                "type": "object",
                "required": [
                    "equivocators",
                    "inactive_validators",
                    "rewards"
                ],
                "properties": {
                    "equivocators": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/PublicKey"
                        }
                    },
                    "rewards": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/Reward"
                        }
                    },
                    "inactive_validators": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/PublicKey"
                        }
                    }
                },
                "additionalProperties": false
            },
            "Reward": {
                "type": "object",
                "required": [
                    "amount",
                    "validator"
                ],
                "properties": {
                    "validator": {
                        "$ref": "#/components/schemas/PublicKey"
                    },
                    "amount": {
                        "type": "integer",
                        "format": "uint64",
                        "minimum": 0.0
                    }
                },
                "additionalProperties": false
            },
            "ValidatorWeight": {
                "type": "object",
                "required": [
                    "validator",
                    "weight"
                ],
                "properties": {
                    "validator": {
                        "$ref": "#/components/schemas/PublicKey"
                    },
                    "weight": {
                        "$ref": "#/components/schemas/U512"
                    }
                },
                "additionalProperties": false
            },
            "ProtocolVersion": {
                "description": "Casper Platform protocol version",
                "type": "string"
            },
            "PurseIdentifier": {
                "description": "Identifier of a purse.",
                "anyOf": [
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
            "PeersMap": {
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
                "description": "Minimal info of a `Block`.",
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
                        "type": "string"
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
            "ReactorState": {
                "description": "The state of the reactor.",
                "type": "string",
                "enum": [
                    "Initialize",
                    "CatchUp",
                    "Upgrading",
                    "KeepUp",
                    "Validate",
                    "ShutdownForUpgrade"
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
                "type": "string",
                "enum": [
                    "Added",
                    "Removed",
                    "Banned",
                    "CannotPropose",
                    "SeenAsFaulty"
                ]
            },
            "ChainspecRawBytes": {
                "description": "The raw bytes of the chainspec.toml, genesis accounts.toml, and global_state.toml files.",
                "type": "object",
                "required": [
                    "chainspec_bytes",
                    "maybe_genesis_accounts_bytes",
                    "maybe_global_state_bytes"
                ],
                "properties": {
                    "chainspec_bytes": {
                        "description": "Hex-encoded raw bytes of the current chainspec.toml file.",
                        "type": "string"
                    },
                    "maybe_genesis_accounts_bytes": {
                        "description": "Hex-encoded raw bytes of the current genesis accounts.toml file.",
                        "type": "string"
                    },
                    "maybe_global_state_bytes": {
                        "description": "Hex-encoded raw bytes of the current global_state.toml file.",
                        "type": "string"
                    }
                }
            },
            "JsonBlock": {
                "description": "A JSON-friendly representation of `Block`.",
                "type": "object",
                "required": [
                    "body",
                    "hash",
                    "header",
                    "proofs"
                ],
                "properties": {
                    "hash": {
                        "description": "`BlockHash`",
                        "allOf": [
                            {
                                "$ref": "#/components/schemas/BlockHash"
                            }
                        ]
                    },
                    "header": {
                        "description": "JSON-friendly block header.",
                        "allOf": [
                            {
                                "$ref": "#/components/schemas/JsonBlockHeader"
                            }
                        ]
                    },
                    "body": {
                        "description": "JSON-friendly block body.",
                        "allOf": [
                            {
                                "$ref": "#/components/schemas/JsonBlockBody"
                            }
                        ]
                    },
                    "proofs": {
                        "description": "JSON-friendly list of proofs for this block.",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/JsonProof"
                        }
                    }
                },
                "additionalProperties": false
            },
            "JsonBlockBody": {
                "description": "A JSON-friendly representation of `Body`",
                "type": "object",
                "required": [
                    "deploy_hashes",
                    "proposer",
                    "transfer_hashes"
                ],
                "properties": {
                    "proposer": {
                        "$ref": "#/components/schemas/PublicKey"
                    },
                    "deploy_hashes": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/DeployHash"
                        }
                    },
                    "transfer_hashes": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/DeployHash"
                        }
                    }
                },
                "additionalProperties": false
            },
            "JsonProof": {
                "description": "A JSON-friendly representation of a proof, i.e. a block's finality signature.",
                "type": "object",
                "required": [
                    "public_key",
                    "signature"
                ],
                "properties": {
                    "public_key": {
                        "$ref": "#/components/schemas/PublicKey"
                    },
                    "signature": {
                        "$ref": "#/components/schemas/Signature"
                    }
                },
                "additionalProperties": false
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
                        "description": "All bids contained within a vector.",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/JsonBids"
                        }
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
            "JsonBids": {
                "description": "A Json representation of a single bid.",
                "type": "object",
                "required": [
                    "bid",
                    "public_key"
                ],
                "properties": {
                    "public_key": {
                        "$ref": "#/components/schemas/PublicKey"
                    },
                    "bid": {
                        "$ref": "#/components/schemas/JsonBid"
                    }
                },
                "additionalProperties": false
            },
            "JsonBid": {
                "description": "An entry in a founding validator map representing a bid.",
                "type": "object",
                "required": [
                    "bonding_purse",
                    "delegation_rate",
                    "delegators",
                    "inactive",
                    "staked_amount"
                ],
                "properties": {
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
                        "description": "The delegation rate.",
                        "type": "integer",
                        "format": "uint8",
                        "minimum": 0.0
                    },
                    "delegators": {
                        "description": "The delegators.",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/JsonDelegator"
                        }
                    },
                    "inactive": {
                        "description": "Is this an inactive validator.",
                        "type": "boolean"
                    }
                },
                "additionalProperties": false
            },
            "JsonDelegator": {
                "description": "A delegator associated with the given validator.",
                "type": "object",
                "required": [
                    "bonding_purse",
                    "delegatee",
                    "public_key",
                    "staked_amount"
                ],
                "properties": {
                    "public_key": {
                        "$ref": "#/components/schemas/PublicKey"
                    },
                    "staked_amount": {
                        "$ref": "#/components/schemas/U512"
                    },
                    "bonding_purse": {
                        "$ref": "#/components/schemas/URef"
                    },
                    "delegatee": {
                        "$ref": "#/components/schemas/PublicKey"
                    }
                },
                "additionalProperties": false
            }
        }
    }
} 
``` 
