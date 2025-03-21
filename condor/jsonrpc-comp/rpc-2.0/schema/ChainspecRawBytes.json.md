```json copy 
{
    "description": "The raw bytes of the chainspec.toml, genesis accounts.toml, and global_state.toml files.",
    "type": "object",
    "required": [
        "chainspec_bytes"
    ],
    "properties": {
        "chainspec_bytes": {
            "description": "Raw bytes of the current chainspec.toml file.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Bytes"
                }
            ]
        },
        "maybe_genesis_accounts_bytes": {
            "description": "Raw bytes of the current genesis accounts.toml file.",
            "anyOf": [
                {
                    "$ref": "#/components/schemas/Bytes"
                },
                {
                    "type": "null"
                }
            ]
        },
        "maybe_global_state_bytes": {
            "description": "Raw bytes of the current global_state.toml file.",
            "anyOf": [
                {
                    "$ref": "#/components/schemas/Bytes"
                },
                {
                    "type": "null"
                }
            ]
        }
    }
} 
``` 
