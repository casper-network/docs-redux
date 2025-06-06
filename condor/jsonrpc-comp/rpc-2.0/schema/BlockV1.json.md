```json copy 
{
    "description": "A block after execution, with the resulting global state root hash. This is the core component of the Casper linear blockchain. Version 1.",
    "type": "object",
    "required": [
        "body",
        "hash",
        "header"
    ],
    "properties": {
        "hash": {
            "description": "The block hash identifying this block.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BlockHash"
                }
            ]
        },
        "header": {
            "description": "The header portion of the block.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BlockHeaderV1"
                }
            ]
        },
        "body": {
            "description": "The body portion of the block.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BlockBodyV1"
                }
            ]
        }
    }
} 
``` 
