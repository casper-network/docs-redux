```json copy 
{
    "description": "Equivocation and reward information to be included in the terminal block.",
    "type": "object",
    "required": [
        "equivocators",
        "inactive_validators",
        "rewards"
    ],
    "properties": {
        "equivocators": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/PublicKey"
            }
        },
        "rewards": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/Reward"
            }
        },
        "inactive_validators": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/PublicKey"
            }
        }
    },
    "additionalProperties": false
} 
``` 
