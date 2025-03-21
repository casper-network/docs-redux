```json copy 
{
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
} 
``` 
