```json copy 
{
    "type": "object",
    "required": [
        "group_name",
        "group_users"
    ],
    "properties": {
        "group_name": {
            "allOf": [
                {
                    "$ref": "#/components/schemas/Group"
                }
            ]
        },
        "group_users": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/URef"
            },
            "uniqueItems": true
        }
    }
} 
``` 
