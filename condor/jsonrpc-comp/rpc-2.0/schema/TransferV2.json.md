```json copy 
{
    "description": "Represents a version 2 transfer from one purse to another.",
    "type": "object",
    "required": [
        "amount",
        "from",
        "gas",
        "source",
        "target",
        "transaction_hash"
    ],
    "properties": {
        "transaction_hash": {
            "description": "Transaction that created the transfer.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/TransactionHash"
                }
            ]
        },
        "from": {
            "description": "Entity from which transfer was executed.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/InitiatorAddr"
                }
            ]
        },
        "to": {
            "description": "Account to which funds are transferred.",
            "anyOf": [
                {
                    "$ref": "#/components/schemas/AccountHash"
                },
                {
                    "type": "null"
                }
            ]
        },
        "source": {
            "description": "Source purse.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/URef"
                }
            ]
        },
        "target": {
            "description": "Target purse.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/URef"
                }
            ]
        },
        "amount": {
            "description": "Transfer amount.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/U512"
                }
            ]
        },
        "gas": {
            "description": "Gas.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Gas"
                }
            ]
        },
        "id": {
            "description": "User-defined ID.",
            "type": [
                "integer",
                "null"
            ],
            "format": "uint64",
            "minimum": 0
        }
    },
    "additionalProperties": false
} 
``` 
