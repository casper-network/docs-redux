```json copy 
{
    "type": "object",
    "required": [
        "amount",
        "validator"
    ],
    "properties": {
        "validator": {
            "$ref": "#/components/schemas/PublicKey"
        },
        "amount": {
            "type": "integer",
            "format": "uint64",
            "minimum": 0
        }
    },
    "additionalProperties": false
} 
``` 
