```json copy 
{
  "name": "info_get_peers",
  "summary": "returns a list of peers connected to the node",
  "params": [],
  "result": {
    "name": "info_get_peers_result",
    "schema": {
      "description": "Result for \"info_get_peers\" RPC response.",
      "type": "object",
      "required": [
        "api_version",
        "peers"
      ],
      "properties": {
        "api_version": {
          "description": "The RPC API version.",
          "type": "string"
        },
        "peers": {
          "description": "The node ID and network address of each connected peer.",
          "$ref": "#/components/schemas/PeersMap"
        }
      },
      "additionalProperties": false
    }
  },
  "examples": [
    {
      "name": "info_get_peers_example",
      "params": [],
      "result": {
        "name": "info_get_peers_example_result",
        "value": {
          "api_version": "1.5.6",
          "peers": [
            {
              "node_id": "tls:0101..0101",
              "address": "127.0.0.1:54321"
            }
          ]
        }
      }
    }
  ]
}
 
``` 
