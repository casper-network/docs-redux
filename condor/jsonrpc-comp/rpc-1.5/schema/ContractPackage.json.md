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
            "$ref": "#/components/schemas/URef"
        },
        "versions": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/ContractVersion"
            }
        },
        "disabled_versions": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/DisabledVersion"
            }
        },
        "groups": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/Groups"
            }
        },
        "lock_status": {
            "$ref": "#/components/schemas/ContractPackageStatus"
        }
    },
    "additionalProperties": false
} 
``` 
