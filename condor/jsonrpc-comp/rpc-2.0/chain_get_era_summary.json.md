```json copy 
{
  "name": "chain_get_era_summary",
  "summary": "returns the era summary at either a specific block (by height or hash), or the most recently added block",
  "params": [
    {
      "name": "block_identifier",
      "schema": {
        "description": "The block identifier.",
        "$ref": "#/components/schemas/BlockIdentifier"
      },
      "required": false
    }
  ],
  "result": {
    "name": "chain_get_era_summary_result",
    "schema": {
      "description": "Result for \"chain_get_era_summary\" RPC response.",
      "type": "object",
      "required": [
        "api_version",
        "era_summary"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "era_summary": {
          "description": "The era summary.",
          "$ref": "#/components/schemas/EraSummary"
        }
      },
      "additionalProperties": false
    }
  },
  "examples": [
    {
      "name": "chain_get_era_summary_example",
      "params": [
        {
          "name": "block_identifier",
          "value": {
            "Hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42"
          }
        }
      ],
      "result": {
        "name": "chain_get_era_summary_example_result",
        "value": {
          "api_version": "2.0.0",
          "era_summary": {
            "block_hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42",
            "era_id": 42,
            "stored_value": {
              "EraInfo": {
                "seigniorage_allocations": [
                  {
                    "Delegator": {
                      "delegator_public_key": "01e1b46a25baa8a5c28beb3c9cfb79b572effa04076f00befa57eb70b016153f18",
                      "validator_public_key": "012a1732addc639ea43a89e25d3ad912e40232156dcaa4b9edfc709f43d2fb0876",
                      "amount": "1000"
                    }
                  },
                  {
                    "Validator": {
                      "validator_public_key": "012a1732addc639ea43a89e25d3ad912e40232156dcaa4b9edfc709f43d2fb0876",
                      "amount": "2000"
                    }
                  }
                ]
              }
            },
            "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808",
            "merkle_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"
          }
        }
      }
    }
  ]
}
 
``` 
