```json copy 
{
    "description": "Represents an Account in the global state.",
    "type": "object",
    "required": [
        "account_hash",
        "action_thresholds",
        "associated_keys",
        "main_purse",
        "named_keys"
    ],
    "properties": {
        "account_hash": {
            "$ref": "#/components/schemas/AccountHash"
        },
        "named_keys": {
            "$ref": "#/components/schemas/NamedKeys"
        },
        "main_purse": {
            "$ref": "#/components/schemas/URef"
        },
        "associated_keys": {
            "$ref": "#/components/schemas/AccountAssociatedKeys"
        },
        "action_thresholds": {
            "$ref": "#/components/schemas/AccountActionThresholds"
        }
    },
    "additionalProperties": false
} 
``` 
