```json copy 
{
    "description": "A named key.",
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
            "type": "string"
        }
    },
    "additionalProperties": false
} 
``` 
