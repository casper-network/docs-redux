```json copy 
{
    "description": "Information related to the end of an era, and validator weights for the following era.",
    "type": "object",
    "required": [
        "equivocators",
        "inactive_validators",
        "next_era_gas_price",
        "next_era_validator_weights",
        "rewards"
    ],
    "properties": {
        "equivocators": {
            "description": "The set of equivocators.",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/PublicKey"
            }
        },
        "inactive_validators": {
            "description": "Validators that haven't produced any unit during the era.",
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/PublicKey"
            }
        },
        "next_era_validator_weights": {
            "description": "The validators for the upcoming era and their respective weights.",
            "allOf": [
                {
                    "$ref": "#/components/schemas/Array_of_ValidatorWeight"
                }
            ]
        },
        "rewards": {
            "description": "The rewards distributed to the validators.",
            "type": "object",
            "additionalProperties": {
                "type": "array",
                "items": {
                    "$ref": "#/components/schemas/U512"
                }
            }
        },
        "next_era_gas_price": {
            "type": "integer",
            "format": "uint8",
            "minimum": 0
        }
    }
} 
``` 
