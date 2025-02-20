```json copy 
{
  "name": "query_balance_details",
  "summary": "query for full balance information using a purse identifier and a state identifier",
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
        "description": "The identifier for the state used for the query, if none is passed, the latest block will be used.",
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
    "name": "query_balance_details_result",
    "schema": {
      "description": "Result for \"query_balance_details\" RPC response.",
      "type": "object",
      "required": [
        "api_version",
        "available_balance",
        "holds",
        "total_balance",
        "total_balance_proof"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "total_balance": {
          "description": "The purses total balance, not considering holds.",
          "$ref": "#/components/schemas/U512"
        },
        "available_balance": {
          "description": "The available balance in motes (total balance - sum of all active holds).",
          "$ref": "#/components/schemas/U512"
        },
        "total_balance_proof": {
          "description": "A proof that the given value is present in the Merkle trie.",
          "type": "string"
        },
        "holds": {
          "description": "Holds active at the requested point in time.",
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/BalanceHoldWithProof"
          }
        }
      }
    }
  },
  "examples": [
    {
      "name": "query_balance_details_example",
      "params": [
        {
          "name": "state_identifier",
          "value": {
            "BlockHash": "0707070707070707070707070707070707070707070707070707070707070707"
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
        "name": "query_balance_details_example_result",
        "value": {
          "api_version": "2.0.0",
          "total_balance": "123456",
          "available_balance": "123456",
          "total_balance_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3",
          "holds": [
            {
              "time": 0,
              "amount": "123456",
              "proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"
            }
          ]
        }
      }
    }
  ]
}
 
``` 
