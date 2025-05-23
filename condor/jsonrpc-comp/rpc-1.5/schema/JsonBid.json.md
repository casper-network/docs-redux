```json copy 
{
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
            "minimum": 0
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
} 
``` 
