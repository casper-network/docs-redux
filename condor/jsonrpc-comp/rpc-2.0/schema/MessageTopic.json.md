```json copy 
{
    "type": "object",
    "required": [
        "topic_name",
        "topic_name_hash"
    ],
    "properties": {
        "topic_name": {
            "type": "string"
        },
        "topic_name_hash": {
            "allOf": [
                {
                    "$ref": "#/components/schemas/TopicNameHash"
                }
            ]
        }
    }
} 
``` 
