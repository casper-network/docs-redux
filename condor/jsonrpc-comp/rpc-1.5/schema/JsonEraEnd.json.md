```json copy 
{
    "type": "object",
    "required": [
        "era_report",
        "next_era_validator_weights"
    ],
    "properties": {
        "era_report": {
            "$ref": "#/components/schemas/JsonEraReport"
        },
        "next_era_validator_weights": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/ValidatorWeight"
            }
        }
    },
    "additionalProperties": false
} 
``` 
