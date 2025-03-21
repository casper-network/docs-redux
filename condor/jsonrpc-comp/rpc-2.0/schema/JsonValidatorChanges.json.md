```json copy 
{
    "description": "The changes in a validator's status.",
    "type": "object",
    "required": [
        "public_key",
        "status_changes"
    ],
    "properties": {
        "public_key": {
            "description": "The public key of the validator.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/PublicKey"
                }
            ]
        },
        "status_changes": {
            "description": "The set of changes to the validator's status.",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/JsonValidatorStatusChange"
            }
        }
    },
    "additionalProperties": false
} 
``` 
