```json copy 
{
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
} 
``` 
