```json copy 
{
    "description": "Identifier for possible ways to query Global State",
    "oneOf": [
        {
            "description": "Query using a block hash.",
            "type": "object",
            "required": [
                "BlockHash"
            ],
            "properties": {
                "BlockHash": {
                    "$ref": "#/components/schemas/BlockHash"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Query using a block height.",
            "type": "object",
            "required": [
                "BlockHeight"
            ],
            "properties": {
                "BlockHeight": {
                    "type": "integer",
                    "format": "uint64",
                    "minimum": 0
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Query using the state root hash.",
            "type": "object",
            "required": [
                "StateRootHash"
            ],
            "properties": {
                "StateRootHash": {
                    "$ref": "#/components/schemas/Digest"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
