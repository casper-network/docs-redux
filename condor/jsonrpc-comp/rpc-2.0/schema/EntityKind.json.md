```json copy 
{
    "description": "The type of Package.",
    "oneOf": [
        {
            "description": "Package associated with a native contract implementation.",
            "type": "object",
            "required": [
                "System"
            ],
            "properties": {
                "System": {
                    "$ref": "#/components/schemas/SystemEntityType"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Package associated with an Account hash.",
            "type": "object",
            "required": [
                "Account"
            ],
            "properties": {
                "Account": {
                    "$ref": "#/components/schemas/AccountHash"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Packages associated with Wasm stored on chain.",
            "type": "object",
            "required": [
                "SmartContract"
            ],
            "properties": {
                "SmartContract": {
                    "$ref": "#/components/schemas/TransactionRuntime"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
