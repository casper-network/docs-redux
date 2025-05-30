```json copy 
{
    "description": "The summary of an era",
    "type": "object",
    "required": [
        "block_hash",
        "era_id",
        "merkle_proof",
        "state_root_hash",
        "stored_value"
    ],
    "properties": {
        "block_hash": {
            "description": "The block hash",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BlockHash"
                }
            ]
        },
        "era_id": {
            "description": "The era id",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EraId"
                }
            ]
        },
        "stored_value": {
            "description": "The StoredValue containing era information",
            "allOf": [
                {
                    "$ref": "#/components/schemas/StoredValue"
                }
            ]
        },
        "state_root_hash": {
            "description": "Hex-encoded hash of the state root",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Digest"
                }
            ]
        },
        "merkle_proof": {
            "description": "The Merkle proof",
            "type": "string"
        }
    },
    "additionalProperties": false
} 
``` 
