```json copy 
{
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
            "minimum": 0
        }
    }
} 
``` 
