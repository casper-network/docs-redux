```json copy 
{
    "description": "A key with a name.",
    "type": "object",
    "required": [
        "key",
        "name"
    ],
    "properties": {
        "name": {
            "description": "The name of the entry.",
            "type": "string"
        },
        "key": {
            "description": "The value of the entry: a casper `Key` type.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Key"
                }
            ]
        }
    },
    "additionalProperties": false
} 
``` 
