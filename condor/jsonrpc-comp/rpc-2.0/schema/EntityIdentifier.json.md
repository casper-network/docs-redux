```json copy 
{
    "description": "Identifier of an addressable entity.",
    "oneOf": [
        {
            "description": "The public key of an account.",
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
            "description": "The account hash of an account.",
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
        },
        {
            "description": "The address of an addressable entity.",
            "type": "object",
            "required": [
                "EntityAddr"
            ],
            "properties": {
                "EntityAddr": {
                    "$ref": "#/components/schemas/EntityAddr"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
