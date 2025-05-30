```json copy 
{
    "description": "The result of executing a single deploy.",
    "anyOf": [
        {
            "description": "The result of a failed execution.",
            "type": "object",
            "required": [
                "Failure"
            ],
            "properties": {
                "Failure": {
                    "type": "object",
                    "required": [
                        "cost",
                        "effect",
                        "error_message",
                        "transfers"
                    ],
                    "properties": {
                        "effect": {
                            "description": "The effect of executing the deploy.",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/ExecutionEffect"
                                }
                            ]
                        },
                        "transfers": {
                            "description": "A record of Transfers performed while executing the deploy.",
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/TransferAddr"
                            }
                        },
                        "cost": {
                            "description": "The cost of executing the deploy.",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/U512"
                                }
                            ]
                        },
                        "error_message": {
                            "description": "The error message associated with executing the deploy.",
                            "type": "string"
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        },
        {
            "description": "The result of a successful execution.",
            "type": "object",
            "required": [
                "Success"
            ],
            "properties": {
                "Success": {
                    "type": "object",
                    "required": [
                        "cost",
                        "effect",
                        "transfers"
                    ],
                    "properties": {
                        "effect": {
                            "description": "The effect of executing the deploy.",
                            "allOf": [
                                {
                                    "$ref": "#/components/schemas/ExecutionEffect"
                                }
                            ]
                        },
                        "transfers": {
                            "description": "A record of Transfers performed while executing the deploy.",
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/TransferAddr"
                            }
                        },
                        "cost": {
                            "description": "The cost of executing the deploy.",
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
