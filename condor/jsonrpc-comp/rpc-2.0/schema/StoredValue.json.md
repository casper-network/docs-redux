```json copy 
{
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
} 
``` 
