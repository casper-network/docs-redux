```json copy 
{
    "description": "A change to a validator's status between two eras.",
    "oneOf": [
        {
            "description": "The validator got newly added to the validator set.",
            "type": "string",
            "enum": [
                "Added"
            ]
        },
        {
            "description": "The validator was removed from the validator set.",
            "type": "string",
            "enum": [
                "Removed"
            ]
        },
        {
            "description": "The validator was banned from this era.",
            "type": "string",
            "enum": [
                "Banned"
            ]
        },
        {
            "description": "The validator was excluded from proposing new blocks in this era.",
            "type": "string",
            "enum": [
                "CannotPropose"
            ]
        },
        {
            "description": "We saw the validator misbehave in this era.",
            "type": "string",
            "enum": [
                "SeenAsFaulty"
            ]
        }
    ]
} 
``` 
