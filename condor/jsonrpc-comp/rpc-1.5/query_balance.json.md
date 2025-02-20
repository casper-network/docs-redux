```json copy 
{
  "name": "query_balance",
  "summary": "query for a balance using a purse identifier and a state identifier",
  "params": [
    {
      "name": "purse_identifier",
      "schema": {
        "description": "The identifier to obtain the purse corresponding to balance query.",
        "$ref": "#/components/schemas/PurseIdentifier"
      },
      "required": true
    },
    {
      "name": "state_identifier",
      "schema": {
        "description": "The state identifier used for the query, if none is passed the tip of the chain will be used.",
        "anyOf": [
          {
            "$ref": "#/components/schemas/GlobalStateIdentifier"
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
    "name": "query_balance_result",
    "schema": {
      "description": "Result for \"query_balance\" RPC response.",
      "type": "object",
      "required": [
        "api_version",
        "balance"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "balance": {
          "description": "The balance represented in motes.",
          "$ref": "#/components/schemas/U512"
        }
      }
    }
  },
  "examples": [
    {
      "name": "query_balance_example",
      "params": [
        {
          "name": "state_identifier",
          "value": {
            "BlockHash": "13c2d7a68ecdd4b74bf4393c88915c836c863fc4bf11d7f2bd930a1bbccacdcb"
          }
        },
        {
          "name": "purse_identifier",
          "value": {
            "main_purse_under_account_hash": "account-hash-0909090909090909090909090909090909090909090909090909090909090909"
          }
        }
      ],
      "result": {
        "name": "query_balance_example_result",
        "value": {
          "api_version": "1.5.6",
          "balance": "123456"
        }
      }
    }
  ]
}
 
``` 
