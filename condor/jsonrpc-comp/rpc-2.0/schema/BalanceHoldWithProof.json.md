```json copy 
{
    "type": "object",
    "required": [
        "amount",
        "proof",
        "time"
    ],
    "properties": {
        "time": {
            "description": "The block time at which the hold was created.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BlockTime"
                }
            ]
        },
        "amount": {
            "description": "The amount in the hold.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/U512"
                }
            ]
        },
        "proof": {
            "description": "A proof that the given value is present in the Merkle trie.",
            "type": "string"
        }
    }
} 
``` 
