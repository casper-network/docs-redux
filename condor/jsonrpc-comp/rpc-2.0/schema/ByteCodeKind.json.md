```json copy 
{
    "description": "The type of Byte code.",
    "oneOf": [
        {
            "description": "Empty byte code.",
            "type": "string",
            "enum": [
                "Empty"
            ]
        },
        {
            "description": "Byte code to be executed with the version 1 Casper execution engine.",
            "type": "string",
            "enum": [
                "V1CasperWasm"
            ]
        }
    ]
} 
``` 
