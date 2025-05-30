```json copy 
{
    "description": "The address of the initiator of a TransactionV1.",
    "oneOf": [
        {
            "description": "The public key of the initiator.",
            "type": "object",
            "required": [
                "PublicKey"
            ],
            "properties": {
                "PublicKey": {
                    "$ref": "#/components/schemas/PublicKey"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "The account hash derived from the public key of the initiator.",
            "type": "object",
            "required": [
                "AccountHash"
            ],
            "properties": {
                "AccountHash": {
                    "$ref": "#/components/schemas/AccountHash"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
