```json copy 
{
    "type": "object",
    "required": [
        "account_hash",
        "weight"
    ],
    "properties": {
        "account_hash": {
            "$ref": "#/components/schemas/AccountHash"
        },
        "weight": {
            "type": "integer",
            "format": "uint8",
            "minimum": 0
        }
    },
    "additionalProperties": false
} 
``` 
