```json copy 
{
    "description": "Execution target of a Transaction.",
    "oneOf": [
        {
            "description": "The execution target is a native operation (e.g. a transfer).",
            "type": "string",
            "enum": [
                "Native"
            ]
        },
        {
            "description": "The execution target is a stored entity or package.",
            "type": "object",
            "required": [
                "Stored"
            ],
            "properties": {
                "Stored": {
                    "type": "object",
                    "required": [
                        "id",
                        "runtime"
                    ],
                    "properties": {
                        "id": {
                            "description": "The identifier of the stored execution target.",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/TransactionInvocationTarget"
                                }
                            ]
                        },
                        "runtime": {
                            "description": "The execution runtime to use.",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/TransactionRuntime"
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
            "description": "The execution target is the included module bytes, i.e. compiled Wasm.",
            "type": "object",
            "required": [
                "Session"
            ],
            "properties": {
                "Session": {
                    "type": "object",
                    "required": [
                        "module_bytes",
                        "runtime"
                    ],
                    "properties": {
                        "module_bytes": {
                            "description": "The compiled Wasm.",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/Bytes"
                                }
                            ]
                        },
                        "runtime": {
                            "description": "The execution runtime to use.",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/TransactionRuntime"
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
