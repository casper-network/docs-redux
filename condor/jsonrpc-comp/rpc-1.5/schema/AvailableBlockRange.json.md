```json copy 
{
    "description": "An unbroken, inclusive range of blocks.",
    "type": "object",
    "required": [
        "high",
        "low"
    ],
    "properties": {
        "low": {
            "description": "The inclusive lower bound of the range.",
            "type": "integer",
            "format": "uint64",
            "minimum": 0
        },
        "high": {
            "description": "The inclusive upper bound of the range.",
            "type": "integer",
            "format": "uint64",
            "minimum": 0
        }
    },
    "additionalProperties": false
} 
``` 
