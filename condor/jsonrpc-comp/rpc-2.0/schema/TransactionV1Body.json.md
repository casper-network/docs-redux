```json copy 
{
    "description": "Body of a `TransactionV1`.",
    "type": "object",
    "required": [
        "args",
        "entry_point",
        "scheduling",
        "target",
        "transaction_category"
    ],
    "properties": {
        "args": {
            "$ref": "#/components/schemas/RuntimeArgs"
        },
        "target": {
            "$ref": "#/components/schemas/TransactionTarget"
        },
        "entry_point": {
            "$ref": "#/components/schemas/TransactionEntryPoint"
        },
        "transaction_category": {
            "type": "integer",
            "format": "uint8",
            "minimum": 0
        },
        "scheduling": {
            "$ref": "#/components/schemas/TransactionScheduling"
        }
    },
    "additionalProperties": false
} 
``` 
