```json copy 
{
    "description": "A bid associated with the given public key.",
    "type": "object",
    "required": [
        "bid",
        "public_key"
    ],
    "properties": {
        "public_key": {
            "description": "The public key of the bidder.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/PublicKey"
                }
            ]
        },
        "bid": {
            "description": "The bid details.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Bid"
                }
            ]
        }
    }
} 
``` 
