```json copy 
{
    "type": "object",
    "required": [
        "initial_release_timestamp_millis"
    ],
    "properties": {
        "initial_release_timestamp_millis": {
            "type": "integer",
            "format": "uint64",
            "minimum": 0
        },
        "locked_amounts": {
            "type": [
                "array",
                "null"
            ],
            "items": {
                "$ref": "#/components/schemas/U512"
            },
            "maxItems": 14,
            "minItems": 14
        }
    },
    "additionalProperties": false
} 
``` 
