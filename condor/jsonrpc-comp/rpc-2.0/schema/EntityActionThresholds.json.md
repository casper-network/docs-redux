```json copy 
{
    "description": "Thresholds that have to be met when executing an action of a certain type.",
    "type": "object",
    "required": [
        "deployment",
        "key_management",
        "upgrade_management"
    ],
    "properties": {
        "deployment": {
            "description": "Threshold for deploy execution.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EntityAssociatedKeyWeight"
                }
            ]
        },
        "upgrade_management": {
            "description": "Threshold for upgrading contracts.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EntityAssociatedKeyWeight"
                }
            ]
        },
        "key_management": {
            "description": "Threshold for managing action threshold.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EntityAssociatedKeyWeight"
                }
            ]
        }
    }
} 
``` 
