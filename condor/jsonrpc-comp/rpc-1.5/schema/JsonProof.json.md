```json copy 
{
    "description": "A JSON-friendly representation of a proof, i.e. a block's finality signature.",
    "type": "object",
    "required": [
        "public_key",
        "signature"
    ],
    "properties": {
        "public_key": {
            "$ref": "#/components/schemas/PublicKey"
        },
        "signature": {
            "$ref": "#/components/schemas/Signature"
        }
    },
    "additionalProperties": false
} 
``` 
