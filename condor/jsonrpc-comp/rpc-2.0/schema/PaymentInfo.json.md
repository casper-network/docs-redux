```json copy 
{
    "description": "Breakdown of payments made to cover the cost.",
    "type": "object",
    "required": [
        "source"
    ],
    "properties": {
        "source": {
            "description": "Source purse used for payment of the transaction.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/URef"
                }
            ]
        }
    }
} 
``` 
