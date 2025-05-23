```json copy 
{
    "description": "Identifier of a purse.",
    "oneOf": [
        {
            "description": "The main purse of the account identified by this public key.",
            "type": "object",
            "required": [
                "main_purse_under_public_key"
            ],
            "properties": {
                "main_purse_under_public_key": {
                    "$ref": "#/components/schemas/PublicKey"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "The main purse of the account identified by this account hash.",
            "type": "object",
            "required": [
                "main_purse_under_account_hash"
            ],
            "properties": {
                "main_purse_under_account_hash": {
                    "$ref": "#/components/schemas/AccountHash"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "The main purse of the account identified by this entity address.",
            "type": "object",
            "required": [
                "main_purse_under_entity_addr"
            ],
            "properties": {
                "main_purse_under_entity_addr": {
                    "$ref": "#/components/schemas/EntityAddr"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "The purse identified by this URef.",
            "type": "object",
            "required": [
                "purse_uref"
            ],
            "properties": {
                "purse_uref": {
                    "$ref": "#/components/schemas/URef"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
