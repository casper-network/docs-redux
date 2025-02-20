```json copy 
{
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
} 
``` 
