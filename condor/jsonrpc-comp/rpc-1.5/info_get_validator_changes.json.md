```json copy 
{
  "name": "info_get_validator_changes",
  "summary": "returns status changes of active validators",
  "params": [],
  "result": {
    "name": "info_get_validator_changes_result",
    "schema": {
      "description": "Result for the \"info_get_validator_changes\" RPC.",
      "type": "object",
      "required": [
        "api_version",
        "changes"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "changes": {
          "description": "The validators' status changes.",
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/JsonValidatorChanges"
          }
        }
      },
      "additionalProperties": false
    }
  },
  "examples": [
    {
      "name": "info_get_validator_changes_example",
      "params": [],
      "result": {
        "name": "info_get_validator_changes_example_result",
        "value": {
          "api_version": "1.5.6",
          "changes": [
            {
              "public_key": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
              "status_changes": [
                {
                  "era_id": 1,
                  "validator_change": "Added"
                }
              ]
            }
          ]
        }
      }
    }
  ]
}
 
``` 
