```json copy 
{
  "name": "state_get_auction_info",
  "summary": "returns the bids and validators as of either a specific block (by height or hash), or the most recently added block",
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
    "name": "state_get_auction_info_result",
    "schema": {
      "description": "Result for \"state_get_auction_info\" RPC response.",
      "type": "object",
      "required": [
        "api_version",
        "auction_state"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "auction_state": {
          "description": "The auction state.",
          "$ref": "#/components/schemas/AuctionState"
        }
      },
      "additionalProperties": false
    }
  },
  "examples": [
    {
      "name": "state_get_auction_info_example",
      "params": [
        {
          "name": "block_identifier",
          "value": {
            "Hash": "0707070707070707070707070707070707070707070707070707070707070707"
          }
        }
      ],
      "result": {
        "name": "state_get_auction_info_example_result",
        "value": {
          "api_version": "2.0.0",
          "auction_state": {
            "state_root_hash": "0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b",
            "block_height": 10,
            "era_validators": [
              {
                "era_id": 10,
                "validator_weights": [
                  {
                    "public_key": "01197f6b23e16c8532c6abc838facd5ea789be0c76b2920334039bfa8b3d368d61",
                    "weight": "10"
                  }
                ]
              }
            ],
            "bids": [
              {
                "public_key": "01197f6b23e16c8532c6abc838facd5ea789be0c76b2920334039bfa8b3d368d61",
                "bid": {
                  "validator_public_key": "01197f6b23e16c8532c6abc838facd5ea789be0c76b2920334039bfa8b3d368d61",
                  "bonding_purse": "uref-fafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafa-007",
                  "staked_amount": "20",
                  "delegation_rate": 0,
                  "vesting_schedule": null,
                  "delegators": [
                    {
                      "delegator_public_key": "014508a07aa941707f3eb2db94c8897a80b2c1197476b6de213ac273df7d86c4ff",
                      "delegator": {
                        "delegator_public_key": "014508a07aa941707f3eb2db94c8897a80b2c1197476b6de213ac273df7d86c4ff",
                        "staked_amount": "10",
                        "bonding_purse": "uref-fbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfb-007",
                        "validator_public_key": "01197f6b23e16c8532c6abc838facd5ea789be0c76b2920334039bfa8b3d368d61",
                        "vesting_schedule": null
                      }
                    }
                  ],
                  "inactive": false
                }
              }
            ]
          }
        }
      }
    }
  ]
}
 
``` 
