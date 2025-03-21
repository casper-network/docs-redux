```json copy 
{
  "name": "info_get_chainspec",
  "summary": "returns the raw bytes of the chainspec.toml, genesis accounts.toml, and global_state.toml files",
  "params": [],
  "result": {
    "name": "info_get_chainspec_result",
    "schema": {
      "description": "Result for the \"info_get_chainspec\" RPC.",
      "type": "object",
      "required": [
        "api_version",
        "chainspec_bytes"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "chainspec_bytes": {
          "description": "The chainspec file bytes.",
          "$ref": "#/components/schemas/ChainspecRawBytes"
        }
      }
    }
  },
  "examples": [
    {
      "name": "info_get_chainspec_example",
      "params": [],
      "result": {
        "name": "info_get_chainspec_example_result",
        "value": {
          "api_version": "1.5.6",
          "chainspec_bytes": {
            "chainspec_bytes": "2a2a",
            "maybe_genesis_accounts_bytes": null,
            "maybe_global_state_bytes": null
          }
        }
      }
    }
  ]
}
 
``` 
