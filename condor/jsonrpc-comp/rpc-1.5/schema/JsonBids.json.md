```json copy 
{
    "description": "A Json representation of a single bid.",
    "type": "object",
    "required": [
        "bid",
        "public_key"
    ],
    "properties": {
        "public_key": {
            "$ref": "#/components/schemas/PublicKey"
        },
        "bid": {
            "$ref": "#/components/schemas/JsonBid"
        }
    },
    "additionalProperties": false
} 
``` 
