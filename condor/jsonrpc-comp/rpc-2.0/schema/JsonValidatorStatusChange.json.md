```json copy 
{
    "description": "A single change to a validator's status in the given era.",
    "type": "object",
    "required": [
        "era_id",
        "validator_change"
    ],
    "properties": {
        "era_id": {
            "description": "The era in which the change occurred.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EraId"
                }
            ]
        },
        "validator_change": {
            "description": "The change in validator status.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/ValidatorChange"
                }
            ]
        }
    },
    "additionalProperties": false
} 
``` 
