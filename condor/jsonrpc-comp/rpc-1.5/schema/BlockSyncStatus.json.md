```json copy 
{
    "description": "The status of syncing an individual block.",
    "type": "object",
    "required": [
        "acquisition_state",
        "block_hash"
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
        "block_height": {
            "description": "The height of the block, if known.",
            "type": [
                "integer",
                "null"
            ],
            "format": "uint64",
            "minimum": 0
        },
        "acquisition_state": {
            "description": "The state of acquisition of the data associated with the block.",
            "type": "string"
        }
    },
    "additionalProperties": false
} 
``` 
