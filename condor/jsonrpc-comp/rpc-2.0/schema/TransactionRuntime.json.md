```json copy 
{
    "description": "Runtime used to execute a Transaction.",
    "oneOf": [
        {
            "description": "The Casper Version 1 Virtual Machine.",
            "type": "string",
            "enum": [
                "VmCasperV1"
            ]
        },
        {
            "description": "The Casper Version 2 Virtual Machine.",
            "type": "string",
            "enum": [
                "VmCasperV2"
            ]
        }
    ]
} 
``` 
