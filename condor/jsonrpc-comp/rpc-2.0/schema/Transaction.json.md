```json copy 
{
    "description": "A versioned wrapper for a transaction or deploy.",
    "oneOf": [
        {
            "description": "A deploy.",
            "type": "object",
            "required": [
                "Deploy"
            ],
            "properties": {
                "Deploy": {
                    "$ref": "#/components/schemas/Deploy"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "A version 1 transaction.",
            "type": "object",
            "required": [
                "Version1"
            ],
            "properties": {
                "Version1": {
                    "$ref": "#/components/schemas/TransactionV1"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
