```json copy 
{
    "description": "An operation performed while executing a deploy.",
    "type": "object",
    "required": [
        "key",
        "kind"
    ],
    "properties": {
        "key": {
            "description": "The formatted string of the `Key`.",
            "type": "string"
        },
        "kind": {
            "description": "The type of operation.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/OpKind"
                }
            ]
        }
    },
    "additionalProperties": false
} 
``` 
