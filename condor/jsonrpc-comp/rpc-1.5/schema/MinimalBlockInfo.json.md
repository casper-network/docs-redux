```json copy 
{
    "description": "Minimal info of a `Block`.",
    "type": "object",
    "required": [
        "creator",
        "era_id",
        "hash",
        "height",
        "state_root_hash",
        "timestamp"
    ],
    "properties": {
        "hash": {
            "$ref": "#/components/schemas/BlockHash"
        },
        "timestamp": {
            "$ref": "#/components/schemas/Timestamp"
        },
        "era_id": {
            "$ref": "#/components/schemas/EraId"
        },
        "height": {
            "type": "integer",
            "format": "uint64",
            "minimum": 0
        },
        "state_root_hash": {
            "$ref": "#/components/schemas/Digest"
        },
        "creator": {
            "$ref": "#/components/schemas/PublicKey"
        }
    },
    "additionalProperties": false
} 
``` 
