```json copy 
{
    "type": "object",
    "required": [
        "addressable_entity_hash",
        "entity_version_key"
    ],
    "properties": {
        "entity_version_key": {
            "allOf": [
                {
                    "$ref": "#/components/schemas/EntityVersionKey"
                }
            ]
        },
        "addressable_entity_hash": {
            "allOf": [
                {
                    "$ref": "#/components/schemas/AddressableEntityHash"
                }
            ]
        }
    }
} 
``` 
