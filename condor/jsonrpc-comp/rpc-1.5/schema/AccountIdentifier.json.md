```json copy 
{
    "description": "Identifier of an account.",
    "anyOf": [
        {
            "description": "The public key of an account",
            "allOf": [
                {
                    "$ref": "#/components/schemas/PublicKey"
                }
            ]
        },
        {
            "description": "The account hash of an account",
            "allOf": [
                {
                    "$ref": "#/components/schemas/AccountHash"
                }
            ]
        }
    ]
} 
``` 
