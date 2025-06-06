```json copy 
{
    "description": "Represents a version 1 transfer from one purse to another.",
    "type": "object",
    "required": [
        "amount",
        "deploy_hash",
        "from",
        "gas",
        "source",
        "target"
    ],
    "properties": {
        "deploy_hash": {
            "description": "Hex-encoded Deploy hash of Deploy that created the transfer.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/DeployHash"
                }
            ]
        },
        "from": {
            "description": "Account from which transfer was executed",
            "allOf": [
                {
                    "$ref": "#/components/schemas/AccountHash"
                }
            ]
        },
        "to": {
            "description": "Account to which funds are transferred",
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
            "description": "Source purse",
            "allOf": [
                {
                    "$ref": "#/components/schemas/URef"
                }
            ]
        },
        "target": {
            "description": "Target purse",
            "allOf": [
                {
                    "$ref": "#/components/schemas/URef"
                }
            ]
        },
        "amount": {
            "description": "Transfer amount",
            "allOf": [
                {
                    "$ref": "#/components/schemas/U512"
                }
            ]
        },
        "gas": {
            "description": "Gas",
            "allOf": [
                {
                    "$ref": "#/components/schemas/U512"
                }
            ]
        },
        "id": {
            "description": "User-defined id",
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
