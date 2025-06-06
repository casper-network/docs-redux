```json copy 
{
    "description": "The body portion of a block. Version 2.",
    "type": "object",
    "required": [
        "rewarded_signatures",
        "transactions"
    ],
    "properties": {
        "transactions": {
            "description": "Map of transactions mapping categories to a list of transaction hashes.",
            "type": "object",
            "additionalProperties": {
                "type": "array",
                "items": {
                    "$ref": "#/components/schemas/TransactionHash"
                }
            }
        },
        "rewarded_signatures": {
            "description": "List of identifiers for finality signatures for a particular past block.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/RewardedSignatures"
                }
            ]
        }
    }
} 
``` 
