```json copy 
{
    "type": "object",
    "required": [
        "validator",
        "weight"
    ],
    "properties": {
        "validator": {
            "$ref": "#/components/schemas/PublicKey"
        },
        "weight": {
            "$ref": "#/components/schemas/U512"
        }
    },
    "additionalProperties": false
} 
``` 
