```json copy 
{
  "name": "state_get_account_info",
  "summary": "returns an Account from the network",
  "params": [
    {
      "name": "account_identifier",
      "schema": {
        "description": "The public key of the Account.",
        "$ref": "#/components/schemas/AccountIdentifier"
      },
      "required": true
    },
    {
      "name": "block_identifier",
      "schema": {
        "description": "The block identifier.",
        "anyOf": [
          {
            "$ref": "#/components/schemas/BlockIdentifier"
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
    "name": "state_get_account_info_result",
    "schema": {
      "description": "Result for \"state_get_account_info\" RPC response.",
      "type": "object",
      "required": [
        "account",
        "api_version",
        "merkle_proof"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "account": {
          "description": "The account.",
          "$ref": "#/components/schemas/Account"
        },
        "merkle_proof": {
          "description": "The Merkle proof.",
          "type": "string"
        }
      },
      "additionalProperties": false
    }
  },
  "examples": [
    {
      "name": "state_get_account_info_example",
      "params": [
        {
          "name": "account_identifier",
          "value": "013b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da29"
        },
        {
          "name": "block_identifier",
          "value": {
            "Hash": "13c2d7a68ecdd4b74bf4393c88915c836c863fc4bf11d7f2bd930a1bbccacdcb"
          }
        }
      ],
      "result": {
        "name": "state_get_account_info_example_result",
        "value": {
          "api_version": "1.5.6",
          "account": {
            "account_hash": "account-hash-e94daaff79c2ab8d9c31d9c3058d7d0a0dd31204a5638dc1451fa67b2e3fb88c",
            "named_keys": [],
            "main_purse": "uref-09480c3248ef76b603d386f3f4f8a5f87f597d4eaffd475433f861af187ab5db-007",
            "associated_keys": [
              {
                "account_hash": "account-hash-e94daaff79c2ab8d9c31d9c3058d7d0a0dd31204a5638dc1451fa67b2e3fb88c",
                "weight": 1
              }
            ],
            "action_thresholds": {
              "deployment": 1,
              "key_management": 1
            }
          },
          "merkle_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"
        }
      }
    }
  ]
}
 
``` 
