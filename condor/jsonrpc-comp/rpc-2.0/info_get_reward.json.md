```json copy 
{
  "name": "info_get_reward",
  "summary": "returns the reward for a given era and a validator or a delegator",
  "params": [
    {
      "name": "validator",
      "schema": {
        "description": "The public key of the validator.",
        "$ref": "#/components/schemas/PublicKey"
      },
      "required": true
    },
    {
      "name": "era_identifier",
      "schema": {
        "description": "The era identifier. If `None`, the last finalized era is used.",
        "anyOf": [
          {
            "$ref": "#/components/schemas/EraIdentifier"
          },
          {
            "type": "null"
          }
        ]
      },
      "required": false
    },
    {
      "name": "delegator",
      "schema": {
        "description": "The public key of the delegator. If `Some`, the rewards for the delegator are returned. If `None`, the rewards for the validator are returned.",
        "anyOf": [
          {
            "$ref": "#/components/schemas/PublicKey"
          },
          {
            "type": "null"
          }
        ]
      },
      "required": false
    }
  ],
  "result": {
    "name": "info_get_reward_result",
    "schema": {
      "description": "Result for \"info_get_reward\" RPC response.",
      "type": "object",
      "required": [
        "api_version",
        "delegation_rate",
        "era_id",
        "reward_amount"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "reward_amount": {
          "description": "The total reward amount in the requested era.",
          "$ref": "#/components/schemas/U512"
        },
        "era_id": {
          "description": "The era for which the reward was calculated.",
          "$ref": "#/components/schemas/EraId"
        },
        "delegation_rate": {
          "description": "The delegation rate of the validator.",
          "type": "integer",
          "format": "uint8",
          "minimum": 0.0
        }
      },
      "additionalProperties": false
    }
  },
  "examples": [
    {
      "name": "info_get_reward_example",
      "params": [
        {
          "name": "era_identifier",
          "value": {
            "Era": 1
          }
        },
        {
          "name": "validator",
          "value": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"
        },
        {
          "name": "delegator",
          "value": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"
        }
      ],
      "result": {
        "name": "info_get_reward_example_result",
        "value": {
          "api_version": "2.0.0",
          "reward_amount": "42",
          "era_id": 1,
          "delegation_rate": 20
        }
      }
    }
  ]
}
 
``` 
