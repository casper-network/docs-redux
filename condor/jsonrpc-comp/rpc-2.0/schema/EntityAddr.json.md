```json copy 
{
    "description": "The address for an AddressableEntity which contains the 32 bytes and tagging information.",
    "anyOf": [
        {
            "description": "The address for a system entity account or contract.",
            "type": "string"
        },
        {
            "description": "The address of an entity that corresponds to an Account.",
            "type": "string"
        },
        {
            "description": "The address of an entity that corresponds to a Userland smart contract.",
            "type": "string"
        }
    ]
} 
``` 
