```json copy 
{
    "description": "Options for dictionary item lookups.",
    "oneOf": [
        {
            "description": "Lookup a dictionary item via an Account's named keys.",
            "type": "object",
            "required": [
                "AccountNamedKey"
            ],
            "properties": {
                "AccountNamedKey": {
                    "type": "object",
                    "required": [
                        "dictionary_item_key",
                        "dictionary_name",
                        "key"
                    ],
                    "properties": {
                        "key": {
                            "description": "The account key as a formatted string whose named keys contains dictionary_name.",
                            "type": "string"
                        },
                        "dictionary_name": {
                            "description": "The named key under which the dictionary seed URef is stored.",
                            "type": "string"
                        },
                        "dictionary_item_key": {
                            "description": "The dictionary item key formatted as a string.",
                            "type": "string"
                        }
                    }
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Lookup a dictionary item via a Contract's named keys.",
            "type": "object",
            "required": [
                "ContractNamedKey"
            ],
            "properties": {
                "ContractNamedKey": {
                    "type": "object",
                    "required": [
                        "dictionary_item_key",
                        "dictionary_name",
                        "key"
                    ],
                    "properties": {
                        "key": {
                            "description": "The contract key as a formatted string whose named keys contains dictionary_name.",
                            "type": "string"
                        },
                        "dictionary_name": {
                            "description": "The named key under which the dictionary seed URef is stored.",
                            "type": "string"
                        },
                        "dictionary_item_key": {
                            "description": "The dictionary item key formatted as a string.",
                            "type": "string"
                        }
                    }
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Lookup a dictionary item via an entities named keys.",
            "type": "object",
            "required": [
                "EntityNamedKey"
            ],
            "properties": {
                "EntityNamedKey": {
                    "type": "object",
                    "required": [
                        "dictionary_item_key",
                        "dictionary_name",
                        "key"
                    ],
                    "properties": {
                        "key": {
                            "description": "The entity address formatted as a string.",
                            "type": "string"
                        },
                        "dictionary_name": {
                            "description": "The named key under which the dictionary seed URef is stored.",
                            "type": "string"
                        },
                        "dictionary_item_key": {
                            "description": "The dictionary item key formatted as a string.",
                            "type": "string"
                        }
                    }
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Lookup a dictionary item via its seed URef.",
            "type": "object",
            "required": [
                "URef"
            ],
            "properties": {
                "URef": {
                    "type": "object",
                    "required": [
                        "dictionary_item_key",
                        "seed_uref"
                    ],
                    "properties": {
                        "seed_uref": {
                            "description": "The dictionary's seed URef.",
                            "type": "string"
                        },
                        "dictionary_item_key": {
                            "description": "The dictionary item key formatted as a string.",
                            "type": "string"
                        }
                    }
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Lookup a dictionary item via its unique key.",
            "type": "object",
            "required": [
                "Dictionary"
            ],
            "properties": {
                "Dictionary": {
                    "type": "string"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
