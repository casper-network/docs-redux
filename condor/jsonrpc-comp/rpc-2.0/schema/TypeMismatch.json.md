```json copy 
{
    "description": "An error struct representing a type mismatch in [`StoredValue`](crate::StoredValue) operations.",
    "type": "object",
    "required": [
        "expected",
        "found"
    ],
    "properties": {
        "expected": {
            "description": "The name of the expected type.",
            "type": "string"
        },
        "found": {
            "description": "The actual type found.",
            "type": "string"
        }
    }
} 
``` 
