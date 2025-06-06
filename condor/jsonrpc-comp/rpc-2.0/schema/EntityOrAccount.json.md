```json copy 
{
    "description": "An addressable entity or a legacy account.",
    "oneOf": [
        {
            "description": "An addressable entity.",
            "type": "object",
            "required": [
                "AddressableEntity"
            ],
            "properties": {
                "AddressableEntity": {
                    "type": "object",
                    "required": [
                        "entity",
                        "entry_points",
                        "named_keys"
                    ],
                    "properties": {
                        "entity": {
                            "description": "The addressable entity.",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/AddressableEntity"
                                }
                            ]
                        },
                        "named_keys": {
                            "description": "The named keys of the addressable entity.",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/NamedKeys"
                                }
                            ]
                        },
                        "entry_points": {
                            "description": "The entry points of the addressable entity.",
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/EntryPointValue"
                            }
                        }
                    }
                }
            },
            "additionalProperties": false
        },
        {
            "description": "A legacy account.",
            "type": "object",
            "required": [
                "LegacyAccount"
            ],
            "properties": {
                "LegacyAccount": {
                    "$ref": "#/components/schemas/Account"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
