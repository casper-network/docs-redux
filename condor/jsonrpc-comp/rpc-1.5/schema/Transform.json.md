```json copy 
{
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
                    "minimum": 0
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
} 
``` 
