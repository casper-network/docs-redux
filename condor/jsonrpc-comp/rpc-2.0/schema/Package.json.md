```json copy 
{
    "description": "Entity definition, metadata, and security container.",
    "type": "object",
    "required": [
        "disabled_versions",
        "groups",
        "lock_status",
        "versions"
    ],
    "properties": {
        "versions": {
            "description": "All versions (enabled & disabled).",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Array_of_EntityVersionAndHash"
                }
            ]
        },
        "disabled_versions": {
            "description": "Collection of disabled entity versions. The runtime will not permit disabled entity versions to be executed.",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/EntityVersionKey"
            },
            "uniqueItems": true
        },
        "groups": {
            "description": "Mapping maintaining the set of URefs associated with each \"user group\". This can be used to control access to methods in a particular version of the entity. A method is callable by any context which \"knows\" any of the URefs associated with the method's user group.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Array_of_NamedUserGroup"
                }
            ]
        },
        "lock_status": {
            "description": "A flag that determines whether a entity is locked",
            "allOf": [
                {
                    "$ref": "#/components/schemas/PackageStatus"
                }
            ]
        }
    }
} 
``` 
