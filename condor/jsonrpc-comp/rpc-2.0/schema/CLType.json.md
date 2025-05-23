```json copy 
{
    "description": "Casper types, i.e. types which can be stored and manipulated by smart contracts.\n\nProvides a description of the underlying data type of a [`CLValue`](crate::CLValue).",
    "oneOf": [
        {
            "description": "`bool` primitive.",
            "type": "string",
            "enum": [
                "Bool"
            ]
        },
        {
            "description": "`i32` primitive.",
            "type": "string",
            "enum": [
                "I32"
            ]
        },
        {
            "description": "`i64` primitive.",
            "type": "string",
            "enum": [
                "I64"
            ]
        },
        {
            "description": "`u8` primitive.",
            "type": "string",
            "enum": [
                "U8"
            ]
        },
        {
            "description": "`u32` primitive.",
            "type": "string",
            "enum": [
                "U32"
            ]
        },
        {
            "description": "`u64` primitive.",
            "type": "string",
            "enum": [
                "U64"
            ]
        },
        {
            "description": "[`U128`] large unsigned integer type.",
            "type": "string",
            "enum": [
                "U128"
            ]
        },
        {
            "description": "[`U256`] large unsigned integer type.",
            "type": "string",
            "enum": [
                "U256"
            ]
        },
        {
            "description": "[`U512`] large unsigned integer type.",
            "type": "string",
            "enum": [
                "U512"
            ]
        },
        {
            "description": "`()` primitive.",
            "type": "string",
            "enum": [
                "Unit"
            ]
        },
        {
            "description": "`String` primitive.",
            "type": "string",
            "enum": [
                "String"
            ]
        },
        {
            "description": "[`Key`] system type.",
            "type": "string",
            "enum": [
                "Key"
            ]
        },
        {
            "description": "[`URef`] system type.",
            "type": "string",
            "enum": [
                "URef"
            ]
        },
        {
            "description": "[`PublicKey`](crate::PublicKey) system type.",
            "type": "string",
            "enum": [
                "PublicKey"
            ]
        },
        {
            "description": "`Option` of a `CLType`.",
            "type": "object",
            "required": [
                "Option"
            ],
            "properties": {
                "Option": {
                    "$ref": "#/components/schemas/CLType"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Variable-length list of a single `CLType` (comparable to a `Vec`).",
            "type": "object",
            "required": [
                "List"
            ],
            "properties": {
                "List": {
                    "$ref": "#/components/schemas/CLType"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Fixed-length list of a single `CLType` (comparable to a Rust array).",
            "type": "object",
            "required": [
                "ByteArray"
            ],
            "properties": {
                "ByteArray": {
                    "type": "integer",
                    "format": "uint32",
                    "minimum": 0
                }
            },
            "additionalProperties": false
        },
        {
            "description": "`Result` with `Ok` and `Err` variants of `CLType`s.",
            "type": "object",
            "required": [
                "Result"
            ],
            "properties": {
                "Result": {
                    "type": "object",
                    "required": [
                        "err",
                        "ok"
                    ],
                    "properties": {
                        "ok": {
                            "$ref": "#/components/schemas/CLType"
                        },
                        "err": {
                            "$ref": "#/components/schemas/CLType"
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Map with keys of a single `CLType` and values of a single `CLType`.",
            "type": "object",
            "required": [
                "Map"
            ],
            "properties": {
                "Map": {
                    "type": "object",
                    "required": [
                        "key",
                        "value"
                    ],
                    "properties": {
                        "key": {
                            "$ref": "#/components/schemas/CLType"
                        },
                        "value": {
                            "$ref": "#/components/schemas/CLType"
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        },
        {
            "description": "1-ary tuple of a `CLType`.",
            "type": "object",
            "required": [
                "Tuple1"
            ],
            "properties": {
                "Tuple1": {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/CLType"
                    },
                    "maxItems": 1,
                    "minItems": 1
                }
            },
            "additionalProperties": false
        },
        {
            "description": "2-ary tuple of `CLType`s.",
            "type": "object",
            "required": [
                "Tuple2"
            ],
            "properties": {
                "Tuple2": {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/CLType"
                    },
                    "maxItems": 2,
                    "minItems": 2
                }
            },
            "additionalProperties": false
        },
        {
            "description": "3-ary tuple of `CLType`s.",
            "type": "object",
            "required": [
                "Tuple3"
            ],
            "properties": {
                "Tuple3": {
                    "type": "array",
                    "items": {
                        "$ref": "#/components/schemas/CLType"
                    },
                    "maxItems": 3,
                    "minItems": 3
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Unspecified type.",
            "type": "string",
            "enum": [
                "Any"
            ]
        }
    ]
} 
``` 
