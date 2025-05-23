```json copy 
{
  "name": "info_get_status",
  "summary": "returns the current status of the node",
  "params": [],
  "result": {
    "name": "info_get_status_result",
    "schema": {
      "description": "Result for \"info_get_status\" RPC response.",
      "type": "object",
      "required": [
        "api_version",
        "available_block_range",
        "block_sync",
        "build_version",
        "chainspec_name",
        "last_progress",
        "peers",
        "reactor_state",
        "starting_state_root_hash",
        "uptime"
      ],
      "properties": {
        "peers": {
          "description": "The node ID and network address of each connected peer.",
          "$ref": "#/components/schemas/PeersMap"
        },
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "build_version": {
          "description": "The compiled node version.",
          "type": "string"
        },
        "chainspec_name": {
          "description": "The chainspec name.",
          "type": "string"
        },
        "starting_state_root_hash": {
          "description": "The state root hash of the lowest block in the available block range.",
          "$ref": "#/components/schemas/Digest"
        },
        "last_added_block_info": {
          "description": "The minimal info of the last block from the linear chain.",
          "anyOf": [
            {
              "$ref": "#/components/schemas/MinimalBlockInfo"
            },
            {
              "type": "null"
            }
          ]
        },
        "our_public_signing_key": {
          "description": "Our public signing key.",
          "anyOf": [
            {
              "$ref": "#/components/schemas/PublicKey"
            },
            {
              "type": "null"
            }
          ]
        },
        "round_length": {
          "description": "The next round length if this node is a validator.",
          "anyOf": [
            {
              "$ref": "#/components/schemas/TimeDiff"
            },
            {
              "type": "null"
            }
          ]
        },
        "next_upgrade": {
          "description": "Information about the next scheduled upgrade.",
          "anyOf": [
            {
              "$ref": "#/components/schemas/NextUpgrade"
            },
            {
              "type": "null"
            }
          ]
        },
        "uptime": {
          "description": "Time that passed since the node has started.",
          "$ref": "#/components/schemas/TimeDiff"
        },
        "reactor_state": {
          "description": "The current state of node reactor.",
          "$ref": "#/components/schemas/ReactorState"
        },
        "last_progress": {
          "description": "Timestamp of the last recorded progress in the reactor.",
          "$ref": "#/components/schemas/Timestamp"
        },
        "available_block_range": {
          "description": "The available block range in storage.",
          "$ref": "#/components/schemas/AvailableBlockRange"
        },
        "block_sync": {
          "description": "The status of the block synchronizer builders.",
          "$ref": "#/components/schemas/BlockSynchronizerStatus"
        }
      },
      "additionalProperties": false
    }
  },
  "examples": [
    {
      "name": "info_get_status_example",
      "params": [],
      "result": {
        "name": "info_get_status_example_result",
        "value": {
          "peers": [
            {
              "node_id": "tls:0101..0101",
              "address": "127.0.0.1:54321"
            }
          ],
          "api_version": "1.5.6",
          "build_version": "1.5.6",
          "chainspec_name": "casper-example",
          "starting_state_root_hash": "0000000000000000000000000000000000000000000000000000000000000000",
          "last_added_block_info": {
            "hash": "13c2d7a68ecdd4b74bf4393c88915c836c863fc4bf11d7f2bd930a1bbccacdcb",
            "timestamp": "2020-11-17T00:39:24.072Z",
            "era_id": 1,
            "height": 10,
            "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808",
            "creator": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"
          },
          "our_public_signing_key": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
          "round_length": "1m 5s 536ms",
          "next_upgrade": {
            "activation_point": 42,
            "protocol_version": "2.0.1"
          },
          "uptime": "13s",
          "reactor_state": "Initialize",
          "last_progress": "1970-01-01T00:00:00.000Z",
          "available_block_range": {
            "low": 0,
            "high": 0
          },
          "block_sync": {
            "historical": {
              "block_hash": "16ddf28e2b3d2e17f4cef36f8b58827eca917af225d139b0c77df3b4a67dc55e",
              "block_height": 40,
              "acquisition_state": "have strict finality(40) for: block hash 16dd..c55e"
            },
            "forward": {
              "block_hash": "59907b1e32a9158169c4d89d9ce5ac9164fc31240bfcfb0969227ece06d74983",
              "block_height": 6701,
              "acquisition_state": "have block body(6701) for: block hash 5990..4983"
            }
          }
        }
      }
    }
  ]
}
 
``` 
