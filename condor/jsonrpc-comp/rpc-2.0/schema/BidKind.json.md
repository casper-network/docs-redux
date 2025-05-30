```json copy 
{
    "description": "Auction bid variants.",
    "oneOf": [
        {
            "description": "A unified record indexed on validator data, with an embedded collection of all delegator bids assigned to that validator. The Unified variant is for legacy retrograde support, new instances will not be created going forward.",
            "type": "object",
            "required": [
                "Unified"
            ],
            "properties": {
                "Unified": {
                    "$ref": "#/components/schemas/Bid"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "A bid record containing only validator data.",
            "type": "object",
            "required": [
                "Validator"
            ],
            "properties": {
                "Validator": {
                    "$ref": "#/components/schemas/ValidatorBid"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "A bid record containing only delegator data.",
            "type": "object",
            "required": [
                "Delegator"
            ],
            "properties": {
                "Delegator": {
                    "$ref": "#/components/schemas/Delegator"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "A bridge record pointing to a new `ValidatorBid` after the public key was changed.",
            "type": "object",
            "required": [
                "Bridge"
            ],
            "properties": {
                "Bridge": {
                    "$ref": "#/components/schemas/Bridge"
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Credited amount.",
            "type": "object",
            "required": [
                "Credit"
            ],
            "properties": {
                "Credit": {
                    "$ref": "#/components/schemas/ValidatorCredit"
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
