```json copy 
{
    "description": "A validator's public key paired with its weight, i.e. the total number of motes staked by it and its delegators.",
    "type": "object",
    "required": [
        "validator",
        "weight"
    ],
    "properties": {
        "validator": {
            "description": "The validator's public key.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/PublicKey"
                }
            ]
        },
        "weight": {
            "description": "The validator's weight.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/U512"
                }
            ]
        }
    }
} 
``` 
