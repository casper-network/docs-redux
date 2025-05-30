```json copy 
{
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
} 
``` 
