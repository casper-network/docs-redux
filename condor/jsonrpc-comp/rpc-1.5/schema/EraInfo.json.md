```json copy 
{
    "description": "Auction metadata.  Intended to be recorded at each era.",
    "type": "object",
    "required": [
        "seigniorage_allocations"
    ],
    "properties": {
        "seigniorage_allocations": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/SeigniorageAllocation"
            }
        }
    },
    "additionalProperties": false
} 
``` 
