```json copy 
{
    "description": "Information about the next protocol upgrade.",
    "type": "object",
    "required": [
        "activation_point",
        "protocol_version"
    ],
    "properties": {
        "activation_point": {
            "$ref": "#/components/schemas/ActivationPoint"
        },
        "protocol_version": {
            "type": "string"
        }
    }
} 
``` 
