```json copy 
{
    "description": "The encaspulated representation of entrypoints.",
    "oneOf": [
        {
            "description": "Entrypoints to be executed against the V1 Casper VM.",
            "type": "object",
            "required": [
                "V1CasperVm"
            ],
            "properties": {
                "V1CasperVm": {
                    "$ref": "#/components/schemas/EntryPoint2"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Entrypoints to be executed against the V2 Casper VM.",
            "type": "object",
            "required": [
                "V2CasperVm"
            ],
            "properties": {
                "V2CasperVm": {
                    "$ref": "#/components/schemas/EntryPointV2"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
