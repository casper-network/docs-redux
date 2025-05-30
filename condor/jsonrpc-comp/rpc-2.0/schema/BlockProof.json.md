```json copy 
{
    "description": "A validator's public key paired with a corresponding signature of a given block hash.",
    "type": "object",
    "required": [
        "public_key",
        "signature"
    ],
    "properties": {
        "public_key": {
            "description": "The validator's public key.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/PublicKey"
                }
            ]
        },
        "signature": {
            "description": "The validator's signature.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Signature"
                }
            ]
        }
    }
} 
``` 
