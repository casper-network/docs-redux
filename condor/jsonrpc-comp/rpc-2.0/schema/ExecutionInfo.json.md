```json copy 
{
    "description": "The block hash and height in which a given deploy was executed, along with the execution result if known.",
    "type": "object",
    "required": [
        "block_hash",
        "block_height"
    ],
    "properties": {
        "block_hash": {
            "description": "The hash of the block in which the deploy was executed.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BlockHash"
                }
            ]
        },
        "block_height": {
            "description": "The height of the block in which the deploy was executed.",
            "type": "integer",
            "format": "uint64",
            "minimum": 0
        },
        "execution_result": {
            "description": "The execution result if known.",
            "anyOf": [
                {
                    "$ref": "#/components/schemas/ExecutionResult"
                },
                {
                    "type": "null"
                }
            ]
        }
    },
    "additionalProperties": false
} 
``` 
