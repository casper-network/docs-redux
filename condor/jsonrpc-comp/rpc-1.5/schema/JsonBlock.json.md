```json copy 
{
    "description": "A JSON-friendly representation of `Block`.",
    "type": "object",
    "required": [
        "body",
        "hash",
        "header",
        "proofs"
    ],
    "properties": {
        "hash": {
            "description": "`BlockHash`",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BlockHash"
                }
            ]
        },
        "header": {
            "description": "JSON-friendly block header.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/JsonBlockHeader"
                }
            ]
        },
        "body": {
            "description": "JSON-friendly block body.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/JsonBlockBody"
                }
            ]
        },
        "proofs": {
            "description": "JSON-friendly list of proofs for this block.",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/JsonProof"
            }
        }
    },
    "additionalProperties": false
} 
``` 
