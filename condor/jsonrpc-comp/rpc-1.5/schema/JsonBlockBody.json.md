```json copy 
{
    "description": "A JSON-friendly representation of `Body`",
    "type": "object",
    "required": [
        "deploy_hashes",
        "proposer",
        "transfer_hashes"
    ],
    "properties": {
        "proposer": {
            "$ref": "#/components/schemas/PublicKey"
        },
        "deploy_hashes": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/DeployHash"
            }
        },
        "transfer_hashes": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/DeployHash"
            }
        }
    },
    "additionalProperties": false
} 
``` 
