```json copy 
{
    "description": "Pricing mode of a Transaction.",
    "oneOf": [
        {
            "description": "The original payment model, where the creator of the transaction specifies how much they will pay, at what gas price.",
            "type": "object",
            "required": [
                "Classic"
            ],
            "properties": {
                "Classic": {
                    "type": "object",
                    "required": [
                        "gas_price_tolerance",
                        "payment_amount",
                        "standard_payment"
                    ],
                    "properties": {
                        "payment_amount": {
                            "description": "User-specified payment amount.",
                            "type": "integer",
                            "format": "uint64",
                            "minimum": 0
                        },
                        "gas_price_tolerance": {
                            "description": "User-specified gas_price tolerance (minimum 1). This is interpreted to mean \"do not include this transaction in a block if the current gas price is greater than this number\"",
                            "type": "integer",
                            "format": "uint8",
                            "minimum": 0
                        },
                        "standard_payment": {
                            "description": "Standard payment.",
                            "type": "boolean"
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        },
        {
            "description": "The cost of the transaction is determined by the cost table, per the transaction category.",
            "type": "object",
            "required": [
                "Fixed"
            ],
            "properties": {
                "Fixed": {
                    "type": "object",
                    "required": [
                        "gas_price_tolerance"
                    ],
                    "properties": {
                        "gas_price_tolerance": {
                            "description": "User-specified gas_price tolerance (minimum 1). This is interpreted to mean \"do not include this transaction in a block if the current gas price is greater than this number\"",
                            "type": "integer",
                            "format": "uint8",
                            "minimum": 0
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        },
        {
            "description": "The payment for this transaction was previously reserved, as proven by the receipt hash (this is for future use, not currently implemented).",
            "type": "object",
            "required": [
                "Reserved"
            ],
            "properties": {
                "Reserved": {
                    "type": "object",
                    "required": [
                        "receipt"
                    ],
                    "properties": {
                        "receipt": {
                            "description": "Pre-paid receipt.",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/Digest"
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
