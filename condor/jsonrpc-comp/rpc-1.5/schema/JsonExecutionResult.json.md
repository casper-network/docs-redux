```json copy 
{
    "description": "The execution result of a single deploy.",
    "type": "object",
    "required": [
        "block_hash",
        "result"
    ],
    "properties": {
        "block_hash": {
            "description": "The block hash.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BlockHash"
                }
            ]
        },
        "result": {
            "description": "Execution result.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/ExecutionResult"
                }
            ]
        }
    },
    "additionalProperties": false
} 
``` 
