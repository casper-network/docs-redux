```json copy 
{
    "description": "The first era to which the associated protocol version applies.",
    "anyOf": [
        {
            "description": "Era id.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/EraId"
                }
            ]
        },
        {
            "description": "Genesis timestamp.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Timestamp"
                }
            ]
        }
    ]
} 
``` 
