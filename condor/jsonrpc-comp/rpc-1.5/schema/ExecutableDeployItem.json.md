```json copy 
{
    "description": "Represents possible variants of an executable deploy.",
    "anyOf": [
        {
            "description": "Executable specified as raw bytes that represent WASM code and an instance of [`RuntimeArgs`].",
            "type": "object",
            "required": [
                "ModuleBytes"
            ],
            "properties": {
                "ModuleBytes": {
                    "type": "object",
                    "required": [
                        "args",
                        "module_bytes"
                    ],
                    "properties": {
                        "module_bytes": {
                            "description": "Hex-encoded raw Wasm bytes.",
                            "type": "string"
                        },
                        "args": {
                            "description": "Runtime arguments.",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/RuntimeArgs"
                                }
                            ]
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Stored contract referenced by its [`ContractHash`], entry point and an instance of [`RuntimeArgs`].",
            "type": "object",
            "required": [
                "StoredContractByHash"
            ],
            "properties": {
                "StoredContractByHash": {
                    "type": "object",
                    "required": [
                        "args",
                        "entry_point",
                        "hash"
                    ],
                    "properties": {
                        "hash": {
                            "description": "Hex-encoded hash.",
                            "type": "string"
                        },
                        "entry_point": {
                            "description": "Name of an entry point.",
                            "type": "string"
                        },
                        "args": {
                            "description": "Runtime arguments.",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/RuntimeArgs"
                                }
                            ]
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Stored contract referenced by a named key existing in the signer's account context, entry point and an instance of [`RuntimeArgs`].",
            "type": "object",
            "required": [
                "StoredContractByName"
            ],
            "properties": {
                "StoredContractByName": {
                    "type": "object",
                    "required": [
                        "args",
                        "entry_point",
                        "name"
                    ],
                    "properties": {
                        "name": {
                            "description": "Named key.",
                            "type": "string"
                        },
                        "entry_point": {
                            "description": "Name of an entry point.",
                            "type": "string"
                        },
                        "args": {
                            "description": "Runtime arguments.",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/RuntimeArgs"
                                }
                            ]
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Stored versioned contract referenced by its [`ContractPackageHash`], entry point and an instance of [`RuntimeArgs`].",
            "type": "object",
            "required": [
                "StoredVersionedContractByHash"
            ],
            "properties": {
                "StoredVersionedContractByHash": {
                    "type": "object",
                    "required": [
                        "args",
                        "entry_point",
                        "hash"
                    ],
                    "properties": {
                        "hash": {
                            "description": "Hex-encoded hash.",
                            "type": "string"
                        },
                        "version": {
                            "description": "An optional version of the contract to call. It will default to the highest enabled version if no value is specified.",
                            "type": [
                                "integer",
                                "null"
                            ],
                            "format": "uint32",
                            "minimum": 0
                        },
                        "entry_point": {
                            "description": "Entry point name.",
                            "type": "string"
                        },
                        "args": {
                            "description": "Runtime arguments.",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/RuntimeArgs"
                                }
                            ]
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Stored versioned contract referenced by a named key existing in the signer's account context, entry point and an instance of [`RuntimeArgs`].",
            "type": "object",
            "required": [
                "StoredVersionedContractByName"
            ],
            "properties": {
                "StoredVersionedContractByName": {
                    "type": "object",
                    "required": [
                        "args",
                        "entry_point",
                        "name"
                    ],
                    "properties": {
                        "name": {
                            "description": "Named key.",
                            "type": "string"
                        },
                        "version": {
                            "description": "An optional version of the contract to call. It will default to the highest enabled version if no value is specified.",
                            "type": [
                                "integer",
                                "null"
                            ],
                            "format": "uint32",
                            "minimum": 0
                        },
                        "entry_point": {
                            "description": "Entry point name.",
                            "type": "string"
                        },
                        "args": {
                            "description": "Runtime arguments.",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/RuntimeArgs"
                                }
                            ]
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        },
        {
            "description": "A native transfer which does not contain or reference a WASM code.",
            "type": "object",
            "required": [
                "Transfer"
            ],
            "properties": {
                "Transfer": {
                    "type": "object",
                    "required": [
                        "args"
                    ],
                    "properties": {
                        "args": {
                            "description": "Runtime arguments.",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/RuntimeArgs"
                                }
                            ]
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
