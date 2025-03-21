```json copy 
{
    "description": "Representation of a single transformation occurring during execution.\n\nNote that all arithmetic variants of `TransformKindV2` are commutative which means that a given collection of them can be executed in any order to produce the same end result.",
    "oneOf": [
        {
            "description": "An identity transformation that does not modify a value in the global state.\n\nCreated as a result of reading from the global state.",
            "type": "string",
            "enum": [
                "Identity"
            ]
        },
        {
            "description": "Writes a new value in the global state.",
            "type": "object",
            "required": [
                "Write"
            ],
            "properties": {
                "Write": {
                    "$ref": "#/components/schemas/StoredValue"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "A wrapping addition of an `i32` to an existing numeric value (not necessarily an `i32`) in the global state.",
            "type": "object",
            "required": [
                "AddInt32"
            ],
            "properties": {
                "AddInt32": {
                    "type": "integer",
                    "format": "int32"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "A wrapping addition of a `u64` to an existing numeric value (not necessarily an `u64`) in the global state.",
            "type": "object",
            "required": [
                "AddUInt64"
            ],
            "properties": {
                "AddUInt64": {
                    "type": "integer",
                    "format": "uint64",
                    "minimum": 0
                }
            },
            "additionalProperties": false
        },
        {
            "description": "A wrapping addition of a `U128` to an existing numeric value (not necessarily an `U128`) in the global state.",
            "type": "object",
            "required": [
                "AddUInt128"
            ],
            "properties": {
                "AddUInt128": {
                    "$ref": "#/components/schemas/U128"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "A wrapping addition of a `U256` to an existing numeric value (not necessarily an `U256`) in the global state.",
            "type": "object",
            "required": [
                "AddUInt256"
            ],
            "properties": {
                "AddUInt256": {
                    "$ref": "#/components/schemas/U256"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "A wrapping addition of a `U512` to an existing numeric value (not necessarily an `U512`) in the global state.",
            "type": "object",
            "required": [
                "AddUInt512"
            ],
            "properties": {
                "AddUInt512": {
                    "$ref": "#/components/schemas/U512"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Adds new named keys to an existing entry in the global state.\n\nThis transform assumes that the existing stored value is either an Account or a Contract.",
            "type": "object",
            "required": [
                "AddKeys"
            ],
            "properties": {
                "AddKeys": {
                    "$ref": "#/components/schemas/NamedKeys"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Removes the pathing to the global state entry of the specified key. The pruned element remains reachable from previously generated global state root hashes, but will not be included in the next generated global state root hash and subsequent state accumulated from it.",
            "type": "object",
            "required": [
                "Prune"
            ],
            "properties": {
                "Prune": {
                    "$ref": "#/components/schemas/Key"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Represents the case where applying a transform would cause an error.",
            "type": "object",
            "required": [
                "Failure"
            ],
            "properties": {
                "Failure": {
                    "$ref": "#/components/schemas/TransformError"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
