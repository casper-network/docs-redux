```json copy 
{
    "description": "A delegator associated with the given validator.",
    "type": "object",
    "required": [
        "bonding_purse",
        "delegatee",
        "public_key",
        "staked_amount"
    ],
    "properties": {
        "public_key": {
            "$ref": "#/components/schemas/PublicKey"
        },
        "staked_amount": {
            "$ref": "#/components/schemas/U512"
        },
        "bonding_purse": {
            "$ref": "#/components/schemas/URef"
        },
        "delegatee": {
            "$ref": "#/components/schemas/PublicKey"
        }
    },
    "additionalProperties": false
} 
``` 
