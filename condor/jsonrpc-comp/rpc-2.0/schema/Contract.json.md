```json copy 
{
    "description": "Methods and type signatures supported by a contract.",
    "type": "object",
    "required": [
        "contract_package_hash",
        "contract_wasm_hash",
        "entry_points",
        "named_keys",
        "protocol_version"
    ],
    "properties": {
        "contract_package_hash": {
            "$ref": "#/components/schemas/ContractPackageHash"
        },
        "contract_wasm_hash": {
            "$ref": "#/components/schemas/ContractWasmHash"
        },
        "named_keys": {
            "$ref": "#/components/schemas/NamedKeys"
        },
        "entry_points": {
            "$ref": "#/components/schemas/Array_of_NamedEntryPoint"
        },
        "protocol_version": {
            "$ref": "#/components/schemas/ProtocolVersion"
        }
    }
} 
``` 
