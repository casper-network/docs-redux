```json copy 
{
    "description": "The versioned header portion of a block. It encapsulates different variants of the BlockHeader struct.",
    "oneOf": [
        {
            "description": "The legacy, initial version of the header portion of a block.",
            "type": "object",
            "required": [
                "Version1"
            ],
            "properties": {
                "Version1": {
                    "$ref": "#/components/schemas/BlockHeaderV1"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "The version 2 of the header portion of a block.",
            "type": "object",
            "required": [
                "Version2"
            ],
            "properties": {
                "Version2": {
                    "$ref": "#/components/schemas/BlockHeaderV2"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
