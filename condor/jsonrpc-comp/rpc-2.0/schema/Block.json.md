```json copy 
{
    "description": "A block after execution.",
    "oneOf": [
        {
            "description": "The legacy, initial version of the block.",
            "type": "object",
            "required": [
                "Version1"
            ],
            "properties": {
                "Version1": {
                    "$ref": "#/components/schemas/BlockV1"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "The version 2 of the block.",
            "type": "object",
            "required": [
                "Version2"
            ],
            "properties": {
                "Version2": {
                    "$ref": "#/components/schemas/BlockV2"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
