```json copy 
{
    "description": "A transformation performed while executing a deploy.",
    "type": "object",
    "required": [
        "key",
        "transform"
    ],
    "properties": {
        "key": {
            "description": "The formatted string of the `Key`.",
            "type": "string"
        },
        "transform": {
            "description": "The transformation.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Transform"
                }
            ]
        }
    },
    "additionalProperties": false
} 
``` 
