```json copy 
{
    "description": "Major element of `ProtocolVersion` combined with `EntityVersion`.",
    "type": "object",
    "required": [
        "entity_version",
        "protocol_version_major"
    ],
    "properties": {
        "protocol_version_major": {
            "description": "Major element of `ProtocolVersion` a `ContractVersion` is compatible with.",
            "type": "integer",
            "format": "uint32",
            "minimum": 0
        },
        "entity_version": {
            "description": "Automatically incremented value for a contract version within a major `ProtocolVersion`.",
            "type": "integer",
            "format": "uint32",
            "minimum": 0
        }
    }
} 
``` 
