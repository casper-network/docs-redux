```json copy 
{
    "description": "Summary of a message topic that will be stored in global state.",
    "type": "object",
    "required": [
        "blocktime",
        "message_count"
    ],
    "properties": {
        "message_count": {
            "description": "Number of messages in this topic.",
            "type": "integer",
            "format": "uint32",
            "minimum": 0
        },
        "blocktime": {
            "description": "Block timestamp in which these messages were emitted.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BlockTime"
                }
            ]
        }
    }
} 
``` 
