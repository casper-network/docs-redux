```json copy 
{
    "description": "A versioned wrapper for a transfer.",
    "oneOf": [
        {
            "description": "A version 1 transfer.",
            "type": "object",
            "required": [
                "Version1"
            ],
            "properties": {
                "Version1": {
                    "$ref": "#/components/schemas/TransferV1"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "A version 2 transfer.",
            "type": "object",
            "required": [
                "Version2"
            ],
            "properties": {
                "Version2": {
                    "$ref": "#/components/schemas/TransferV2"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
