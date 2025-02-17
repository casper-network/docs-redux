## info_get_transaction
The [info_get_transaction](./rpc-2.0/info_get_transaction.json.md) method replaces the pre-existing [info_get_deploy](./rpc-1.5/info_get_deploy.json.md) method. to some extent, it simply mirrors the pre-existing method. 

- Parameters
  - Accepts a [TransactionHash](./rpc-2.0/schema/TransactionHash.json.md) instead of a [DeployHash](./rpc-1.5/schema/DeployHash.json.md)   
- Results
  - Returns a [Transaction](./rpc-2.0/schema/Transaction.json.md) instead of a [Deploy](./rpc-1.5/schema/Deploy.json.md)
  - Returns an [ExecutionInfo](./rpc-2.0/schema/ExecutionInfo.json.md) instead of [ExecutionResult](./rpc-1.5/schema/JsonExecutionResult.json.md)