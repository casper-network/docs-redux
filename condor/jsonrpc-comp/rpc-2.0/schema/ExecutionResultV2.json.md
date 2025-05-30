```json copy 
{
    "description": "The result of executing a single transaction.",
    "type": "object",
    "required": [
        "consumed",
        "cost",
        "effects",
        "initiator",
        "limit",
        "payment",
        "size_estimate",
        "transfers"
    ],
    "properties": {
        "initiator": {
            "description": "Who initiated this transaction.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/InitiatorAddr"
                }
            ]
        },
        "error_message": {
            "description": "If there is no error message, this execution was processed successfully. If there is an error message, this execution failed to fully process for the stated reason.",
            "type": [
                "string",
                "null"
            ]
        },
        "limit": {
            "description": "What was the maximum allowed gas limit for this transaction?.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Gas"
                }
            ]
        },
        "consumed": {
            "description": "How much gas was consumed executing this transaction.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Gas"
                }
            ]
        },
        "cost": {
            "description": "How much was paid for this transaction.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/U512"
                }
            ]
        },
        "payment": {
            "description": "Breakdown of payments made to cover the cost.",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/PaymentInfo"
            }
        },
        "transfers": {
            "description": "A record of transfers performed while executing this transaction.",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/Transfer"
            }
        },
        "size_estimate": {
            "description": "The size estimate of the transaction",
            "type": "integer",
            "format": "uint64",
            "minimum": 0
        },
        "effects": {
            "description": "The effects of executing this transaction.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Effects"
                }
            ]
        }
    },
    "additionalProperties": false
} 
``` 
