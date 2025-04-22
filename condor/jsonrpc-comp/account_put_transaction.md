## account_put_transaction
The [account_put_transaction](./rpc-2.0/account_put_transaction.json.md) method replaces the pre-existing [account_put_deploy](./rpc-1.5/account_put_deploy.json.md) method. [This is a false statement. `account_put_deploy` is retained, `account_put_transaction` is a completely new method.] To some extent, it simply mirrors the pre-existing method. However, the new Transaction datatype is used instead of the legacy Deploy.

- Parameters
  - Accepts a [Transaction](./rpc-2.0/schema/Transaction.json.md) instead of a [Deploy](./rpc-1.5/schema/Deploy.json.md)   
- Results
  - Returns a [TransactionHash](./rpc-2.0/schema/TransactionHash.json.md) instead of a [DeployHash](./rpc-1.5/schema/DeployHash.json.md)