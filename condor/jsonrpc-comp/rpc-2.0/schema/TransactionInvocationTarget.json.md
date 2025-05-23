```json copy 
{
    "description": "Identifier of a `Stored` transaction target.",
    "oneOf": [
        {
            "description": "Hex-encoded entity address identifying the invocable entity.",
            "type": "object",
            "required": [
                "ByHash"
            ],
            "properties": {
                "ByHash": {
                    "type": "string"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "The alias identifying the invocable entity.",
            "type": "object",
            "required": [
                "ByName"
            ],
            "properties": {
                "ByName": {
                    "type": "string"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "The address and optional version identifying the package.",
            "type": "object",
            "required": [
                "ByPackageHash"
            ],
            "properties": {
                "ByPackageHash": {
                    "type": "object",
                    "required": [
                        "addr"
                    ],
                    "properties": {
                        "addr": {
                            "description": "Hex-encoded address of the package.",
                            "type": "string"
                        },
                        "version": {
                            "description": "The package version.\n\nIf `None`, the latest enabled version is implied.",
                            "type": [
                                "integer",
                                "null"
                            ],
                            "format": "uint32",
                            "minimum": 0
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        },
        {
            "description": "The alias and optional version identifying the package.",
            "type": "object",
            "required": [
                "ByPackageName"
            ],
            "properties": {
                "ByPackageName": {
                    "type": "object",
                    "required": [
                        "name"
                    ],
                    "properties": {
                        "name": {
                            "description": "The package name.",
                            "type": "string"
                        },
                        "version": {
                            "description": "The package version.\n\nIf `None`, the latest enabled version is implied.",
                            "type": [
                                "integer",
                                "null"
                            ],
                            "format": "uint32",
                            "minimum": 0
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
