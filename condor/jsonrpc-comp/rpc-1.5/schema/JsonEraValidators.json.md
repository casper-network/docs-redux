```json copy 
{
    "description": "The validators for the given era.",
    "type": "object",
    "required": [
        "era_id",
        "validator_weights"
    ],
    "properties": {
        "era_id": {
            "$ref": "#/components/schemas/EraId"
        },
        "validator_weights": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/JsonValidatorWeights"
            }
        }
    },
    "additionalProperties": false
} 
``` 
