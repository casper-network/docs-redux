```json copy 
{
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
            "minimum": 0
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
            "minimum": 0
        },
        "maximum_delegation_amount": {
            "description": "Maximum allowed delegation amount in motes",
            "type": "integer",
            "format": "uint64",
            "minimum": 0
        }
    },
    "additionalProperties": false
} 
``` 
