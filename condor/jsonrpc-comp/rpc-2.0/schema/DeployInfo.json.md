```json copy 
{
    "description": "Information relating to the given Deploy.",
    "type": "object",
    "required": [
        "deploy_hash",
        "from",
        "gas",
        "source",
        "transfers"
    ],
    "properties": {
        "deploy_hash": {
            "description": "Hex-encoded Deploy hash.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/DeployHash"
                }
            ]
        },
        "transfers": {
            "description": "Version 1 transfers performed by the Deploy.",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/TransferAddr"
            }
        },
        "from": {
            "description": "Account identifier of the creator of the Deploy.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/AccountHash"
                }
            ]
        },
        "source": {
            "description": "Source purse used for payment of the Deploy.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/URef"
                }
            ]
        },
        "gas": {
            "description": "Gas cost of executing the Deploy.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/U512"
                }
            ]
        }
    },
    "additionalProperties": false
} 
``` 
