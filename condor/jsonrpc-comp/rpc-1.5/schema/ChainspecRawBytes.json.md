```json copy 
{
    "description": "The raw bytes of the chainspec.toml, genesis accounts.toml, and global_state.toml files.",
    "type": "object",
    "required": [
        "chainspec_bytes",
        "maybe_genesis_accounts_bytes",
        "maybe_global_state_bytes"
    ],
    "properties": {
        "chainspec_bytes": {
            "description": "Hex-encoded raw bytes of the current chainspec.toml file.",
            "type": "string"
        },
        "maybe_genesis_accounts_bytes": {
            "description": "Hex-encoded raw bytes of the current genesis accounts.toml file.",
            "type": "string"
        },
        "maybe_global_state_bytes": {
            "description": "Hex-encoded raw bytes of the current global_state.toml file.",
            "type": "string"
        }
    }
} 
``` 
