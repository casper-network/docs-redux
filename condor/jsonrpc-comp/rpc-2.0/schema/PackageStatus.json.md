```json copy 
{
    "description": "A enum to determine the lock status of the package.",
    "oneOf": [
        {
            "description": "The package is locked and cannot be versioned.",
            "type": "string",
            "enum": [
                "Locked"
            ]
        },
        {
            "description": "The package is unlocked and can be versioned.",
            "type": "string",
            "enum": [
                "Unlocked"
            ]
        }
    ]
} 
``` 
