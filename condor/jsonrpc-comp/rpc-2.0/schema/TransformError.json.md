```json copy 
{
    "description": "Error type for applying and combining transforms.\n\nA `TypeMismatch` occurs when a transform cannot be applied because the types are not compatible (e.g. trying to add a number to a string).",
    "oneOf": [
        {
            "description": "Error while (de)serializing data.",
            "type": "object",
            "required": [
                "Serialization"
            ],
            "properties": {
                "Serialization": {
                    "$ref": "#/components/schemas/BytesreprError"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Type mismatch error.",
            "type": "object",
            "required": [
                "TypeMismatch"
            ],
            "properties": {
                "TypeMismatch": {
                    "$ref": "#/components/schemas/TypeMismatch"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Type no longer supported.",
            "type": "string",
            "enum": [
                "Deprecated"
            ]
        }
    ]
} 
``` 
