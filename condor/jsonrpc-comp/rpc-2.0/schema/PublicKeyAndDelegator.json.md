```json copy 
{
    "description": "A delegator associated with the given validator.",
    "type": "object",
    "required": [
        "delegator",
        "delegator_public_key"
    ],
    "properties": {
        "delegator_public_key": {
            "description": "The public key of the delegator.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/PublicKey"
                }
            ]
        },
        "delegator": {
            "description": "The delegator details.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Delegator"
                }
            ]
        }
    }
} 
``` 
