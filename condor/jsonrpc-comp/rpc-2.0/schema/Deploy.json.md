```json copy 
{
    "description": "A signed smart contract.",
    "type": "object",
    "required": [
        "approvals",
        "hash",
        "header",
        "payment",
        "session"
    ],
    "properties": {
        "hash": {
            "$ref": "#/components/schemas/DeployHash"
        },
        "header": {
            "$ref": "#/components/schemas/DeployHeader"
        },
        "payment": {
            "$ref": "#/components/schemas/ExecutableDeployItem"
        },
        "session": {
            "$ref": "#/components/schemas/ExecutableDeployItem"
        },
        "approvals": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/Approval"
            },
            "uniqueItems": true
        }
    },
    "additionalProperties": false
} 
``` 
