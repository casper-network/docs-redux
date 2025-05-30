```json copy 
{
    "description": "The body portion of a block. Version 1.",
    "type": "object",
    "required": [
        "deploy_hashes",
        "proposer",
        "transfer_hashes"
    ],
    "properties": {
        "proposer": {
            "description": "The public key of the validator which proposed the block.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/PublicKey"
                }
            ]
        },
        "deploy_hashes": {
            "description": "The deploy hashes of the non-transfer deploys within the block.",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/DeployHash"
            }
        },
        "transfer_hashes": {
            "description": "The deploy hashes of the transfers within the block.",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/DeployHash"
            }
        }
    }
} 
``` 
