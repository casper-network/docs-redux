```json copy 
{
    "description": "Container for bytes recording location, type and data for a gas reservation",
    "type": "object",
    "required": [
        "receipt",
        "reservation_data",
        "reservation_kind"
    ],
    "properties": {
        "receipt": {
            "$ref": "#/components/schemas/Digest"
        },
        "reservation_kind": {
            "type": "integer",
            "format": "uint8",
            "minimum": 0
        },
        "reservation_data": {
            "$ref": "#/components/schemas/Bytes"
        }
    }
} 
``` 
