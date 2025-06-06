```json copy 
{
    "description": "A JSON-friendly representation of a block and the signatures for that block.",
    "type": "object",
    "required": [
        "block",
        "proofs"
    ],
    "properties": {
        "block": {
            "description": "The block.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Block"
                }
            ]
        },
        "proofs": {
            "description": "The proofs of the block, i.e. a collection of validators' signatures of the block hash.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Array_of_BlockProof"
                }
            ]
        }
    },
    "additionalProperties": false
} 
``` 
