```json copy 
{
    "type": "object",
    "required": [
        "contract_hash",
        "contract_version",
        "protocol_version_major"
    ],
    "properties": {
        "protocol_version_major": {
            "type": "integer",
            "format": "uint32",
            "minimum": 0
        },
        "contract_version": {
            "type": "integer",
            "format": "uint32",
            "minimum": 0
        },
        "contract_hash": {
            "$ref": "#/components/schemas/ContractHash"
        }
    }
} 
``` 
