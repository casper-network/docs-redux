```json copy 
{
    "description": "List of identifiers for finality signatures for a particular past block.\n\nThat past block height is current_height - signature_rewards_max_delay, the latter being defined in the chainspec.\n\nWe need to wait for a few blocks to pass (`signature_rewards_max_delay`) to store the finality signers because we need a bit of time to get the block finality.",
    "type": "array",
    "items": {
        "type": "integer",
        "format": "uint8",
        "minimum": 0
    }
} 
``` 
