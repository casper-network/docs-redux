```json copy 
{
    "type": "object",
    "required": [
        "group",
        "keys"
    ],
    "properties": {
        "group": {
            "type": "string"
        },
        "keys": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/URef"
            }
        }
    }
} 
``` 
