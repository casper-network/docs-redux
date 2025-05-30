```json copy 
{
    "description": "The header portion of a block.",
    "type": "object",
    "required": [
        "accumulated_seed",
        "body_hash",
        "current_gas_price",
        "era_id",
        "height",
        "parent_hash",
        "proposer",
        "protocol_version",
        "random_bit",
        "state_root_hash",
        "timestamp"
    ],
    "properties": {
        "parent_hash": {
            "description": "The parent block's hash.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/BlockHash"
                }
            ]
        },
        "state_root_hash": {
            "description": "The root hash of global state after the deploys in this block have been executed.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Digest"
                }
            ]
        },
        "body_hash": {
            "description": "The hash of the block's body.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Digest"
                }
            ]
        },
        "random_bit": {
            "description": "A random bit needed for initializing a future era.",
            "type": "boolean"
        },
        "accumulated_seed": {
            "description": "A seed needed for initializing a future era.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Digest"
                }
            ]
        },
        "era_end": {
            "description": "The `EraEnd` of a block if it is a switch block.",
            "anyOf": [
                {
                    "$ref": "#/components/schemas/EraEndV2"
                },
                {
                    "type": "null"
                }
            ]
        },
        "timestamp": {
            "description": "The timestamp from when the block was proposed.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Timestamp"
                }
            ]
        },
        "era_id": {
            "description": "The era ID in which this block was created.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EraId"
                }
            ]
        },
        "height": {
            "description": "The height of this block, i.e. the number of ancestors.",
            "type": "integer",
            "format": "uint64",
            "minimum": 0
        },
        "protocol_version": {
            "description": "The protocol version of the network from when this block was created.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/ProtocolVersion"
                }
            ]
        },
        "proposer": {
            "description": "The public key of the validator which proposed the block.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/PublicKey"
                }
            ]
        },
        "current_gas_price": {
            "description": "The gas price of the era",
            "type": "integer",
            "format": "uint8",
            "minimum": 0
        },
        "last_switch_block_hash": {
            "description": "The most recent switch block hash.",
            "anyOf": [
                {
                    "$ref": "#/components/schemas/BlockHash"
                },
                {
                    "type": "null"
                }
            ]
        }
    }
} 
``` 
