```json copy 
{
    "description": "Information about a seigniorage allocation",
    "oneOf": [
        {
            "description": "Info about a seigniorage allocation for a validator",
            "type": "object",
            "required": [
                "Validator"
            ],
            "properties": {
                "Validator": {
                    "type": "object",
                    "required": [
                        "amount",
                        "validator_public_key"
                    ],
                    "properties": {
                        "validator_public_key": {
                            "description": "Validator's public key",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/PublicKey"
                                }
                            ]
                        },
                        "amount": {
                            "description": "Allocated amount",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/U512"
                                }
                            ]
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        },
        {
            "description": "Info about a seigniorage allocation for a delegator",
            "type": "object",
            "required": [
                "Delegator"
            ],
            "properties": {
                "Delegator": {
                    "type": "object",
                    "required": [
                        "amount",
                        "delegator_public_key",
                        "validator_public_key"
                    ],
                    "properties": {
                        "delegator_public_key": {
                            "description": "Delegator's public key",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/PublicKey"
                                }
                            ]
                        },
                        "validator_public_key": {
                            "description": "Validator's public key",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/PublicKey"
                                }
                            ]
                        },
                        "amount": {
                            "description": "Allocated amount",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/U512"
                                }
                            ]
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        }
    ]
} 
``` 
