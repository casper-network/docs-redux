```json copy 
{
    "description": "Identifier for possible ways to retrieve a block.",
    "oneOf": [
        {
            "description": "Identify and retrieve the block with its hash.",
            "type": "object",
            "required": [
                "Hash"
            ],
            "properties": {
                "Hash": {
                    "$ref": "#/components/schemas/BlockHash"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Identify and retrieve the block with its height.",
            "type": "object",
            "required": [
                "Height"
            ],
            "properties": {
                "Height": {
                    "type": "integer",
                    "format": "uint64",
                    "minimum": 0
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
