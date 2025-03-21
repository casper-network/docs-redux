```json copy 
{
    "description": "Contract definition, metadata, and security container.",
    "type": "object",
    "required": [
        "access_key",
        "disabled_versions",
        "groups",
        "lock_status",
        "versions"
    ],
    "properties": {
        "access_key": {
            "description": "Key used to add or disable versions",
            "allOf": [
                {
                    "$ref": "#/components/schemas/URef"
                }
            ]
        },
        "versions": {
            "description": "All versions (enabled & disabled)",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/ContractVersion"
            }
        },
        "disabled_versions": {
            "description": "Disabled versions",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/ContractVersionKey"
            },
            "uniqueItems": true
        },
        "groups": {
            "description": "Mapping maintaining the set of URefs associated with each \"user group\". This can be used to control access to methods in a particular version of the contract. A method is callable by any context which \"knows\" any of the URefs associated with the method's user group.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Array_of_NamedUserGroup"
                }
            ]
        },
        "lock_status": {
            "description": "A flag that determines whether a contract is locked",
            "allOf": [
                {
                    "$ref": "#/components/schemas/ContractPackageStatus"
                }
            ]
        }
    }
} 
``` 
