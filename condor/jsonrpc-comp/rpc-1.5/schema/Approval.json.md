```json copy 
{
    "description": "A struct containing a signature of a deploy hash and the public key of the signer.",
    "type": "object",
    "required": [
        "signature",
        "signer"
    ],
    "properties": {
        "signer": {
            "$ref": "#/components/schemas/PublicKey"
        },
        "signature": {
            "$ref": "#/components/schemas/Signature"
        }
    },
    "additionalProperties": false
} 
``` 
