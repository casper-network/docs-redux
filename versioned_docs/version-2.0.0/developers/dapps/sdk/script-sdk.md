# JavaScript/TypeScript SDK

This page contains details related to a few JavaScript (JS) clients and the Casper JS SDK.

## Usage of JavaScript Clients {#usage-of-javascript-clients}

The Casper team has implemented specific JS clients to support interaction with the Casper contracts.

### Repository & Client Packages {#repository-7-client-packages}

We provide repositories to create clients for Casper contracts and usage examples of such clients dedicated to interacting with smart contracts on Casper:

- The [Casper CEP-78 (NFT) Client](https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/client-js/README.md)
- The [Casper CEP-18 Client](https://github.com/casper-ecosystem/cep18/tree/master/client-js#readme)

These packages give you an easy way to install and interact with the corresponding Casper contract.

## Casper SDK for JavaScript {#casper-sdk-for-javascript}

The [TypeScript/JavaScript SDK](https://github.com/casper-ecosystem/casper-js-sdk) allows developers to interact with a Casper network using TypeScript or JavaScript. Version 5.0 represents a complete rewrite of the SDK with full compatibility for Casper 2.0, introducing new types, improved RPC capabilities, and support for both Transactions (Casper 2.0) and Deploys (legacy).

## Installation {#installation}

To install this library using Node.js, run the following command:

```bash
npm install casper-js-sdk --save
```

**Note**: The `@next` flag is no longer needed as v5.0 is now the stable release.

## Migration from v2.x {#migration}

If you're upgrading from v2.x, please refer to the [v2 to v5 Migration Guide](https://github.com/casper-ecosystem/casper-js-sdk/blob/dev/resources/migration-guide-v2-v5.md) for detailed information about breaking changes and how to update your code.

## Tests {#tests}

You can find basic examples for how to use this library in the `test` directory. To run the tests, use this command:

```bash
npm run test
```

## Usage Examples {#usage-examples}

In this section, we outline essential tasks you can accomplish with the JavaScript SDK:

- Generating account keys
- Sending a native transfer (Casper 2.0 Transaction)
- Sending a legacy deploy (backward compatibility)
- Creating CSPR, CEP-18, and NFT transfers
- Working with the RPC client
- Subscribing to SSE events

### Generating Account Keys {#generating-account-keys}

This example shows you how to use the SDK to generate account keys using the new v5 API:

```javascript
import { KeyAlgorithm, PrivateKey, PublicKey } from "casper-js-sdk";

const generateKeys = async () => {
  // Choose algorithm: KeyAlgorithm.ED25519 or KeyAlgorithm.SECP256K1
  const privateKeyAlgorithm = KeyAlgorithm.ED25519;

  // Generate new private key
  const privateKey = await PrivateKey.generate(privateKeyAlgorithm);

  // Get public key from private key
  const publicKey = privateKey.publicKey;

  // Export keys as hex strings
  const privateKeyHex = privateKey.toHex();
  const publicKeyHex = publicKey.toHex();

  console.log("Private Key (hex):", privateKeyHex);
  console.log("Public Key (hex):", publicKeyHex);

  return { privateKey, publicKey };
};

// Recreate private key from hex string
const loadPrivateKey = async (privateKeyHex, algorithm) => {
  const privateKey = await PrivateKey.fromHex(privateKeyHex, algorithm);
  return privateKey;
};

// Recreate public key from hex string
const loadPublicKey = (publicKeyHex) => {
  const publicKey = PublicKey.fromHex(publicKeyHex);
  return publicKey;
};
```

**Note**: In v5, the key generation API has changed significantly. The old `Keys.Ed25519.new()` pattern is replaced with `PrivateKey.generate()` and related methods.

### Sending a Native Transfer (Casper 2.0) {#sending-a-transfer}

This example shows how to create and send a native CSPR transfer using the new Transaction API (Casper 2.0):

```javascript
import {
  HttpHandler,
  RpcClient,
  NativeTransferBuilder,
  PrivateKey,
  KeyAlgorithm,
  PublicKey,
} from "casper-js-sdk";

const sendNativeTransfer = async () => {
  // Initialize RPC client
  const rpcHandler = new HttpHandler("http://<Node Address>:7777/rpc");
  const rpcClient = new RpcClient(rpcHandler);

  // Load or generate private key
  const privateKey = await PrivateKey.generate(KeyAlgorithm.ED25519);

  // Create a native transfer transaction
  const transaction = new NativeTransferBuilder()
    .from(privateKey.publicKey)
    .target(
      PublicKey.fromHex(
        "0202f5a92ab6da536e7b1a351406f3744224bec85d7acbab1497b65de48a1a707b64"
      )
    )
    .amount("2500000000") // Amount in motes (2.5 CSPR)
    .id(Date.now()) // Transfer ID for tracking
    .chainName("casper-net-1") // Or 'casper-test' for testnet
    .payment(100_000_000) // Payment amount in motes
    .build();

  // Sign the transaction
  transaction.sign(privateKey);

  try {
    // Submit transaction to the network
    const result = await rpcClient.putTransaction(transaction);
    console.log("Transaction Hash:", result.transactionHash);

    // You can check the transaction status on the block explorer:
    // Testnet: https://testnet.cspr.live/transaction/<transaction-hash>
    // Mainnet: https://cspr.live/transaction/<transaction-hash>
    console.log(
      `View on explorer: https://testnet.cspr.live/transaction/${result.transactionHash}`
    );

    return result.transactionHash;
  } catch (error) {
    console.error("Transaction failed:", error);
    throw error;
  }
};
```

### Sending a Legacy Deploy {#sending-legacy-deploy}

For backward compatibility with Casper 1.5, you can still create and send deploys:

```javascript
import {
  Deploy,
  DeployHeader,
  ExecutableDeployItem,
  HttpHandler,
  PublicKey,
  KeyAlgorithm,
  PrivateKey,
  RpcClient,
  TransferDeployItem,
} from "casper-js-sdk";

const sendLegacyDeploy = async () => {
  const rpcHandler = new HttpHandler("http://<Node Address>:7777/rpc");
  const rpcClient = new RpcClient(rpcHandler);

  const senderKey = await PrivateKey.generate(KeyAlgorithm.ED25519);
  const recipientKey = PublicKey.fromHex(
    "010068920746ecf5870e18911EE1fC5db975E0e97fFFcBBF52f5045Ad6C9838D2F"
  );

  const paymentAmount = "10000000000000";
  const transferAmount = "10";
  const transferId = 35;

  // Create session (transfer)
  const session = new ExecutableDeployItem();
  session.transfer = TransferDeployItem.newTransfer(
    transferAmount,
    recipientKey,
    undefined,
    transferId
  );

  // Create payment
  const payment = ExecutableDeployItem.standardPayment(paymentAmount);

  // Create deploy header
  const deployHeader = DeployHeader.default();
  deployHeader.account = senderKey.publicKey;
  deployHeader.chainName = "casper-test";

  // Make deploy
  const deploy = Deploy.makeDeploy(deployHeader, payment, session);

  // Sign deploy
  deploy.sign(senderKey);

  // Submit deploy
  const result = await rpcClient.putDeploy(deploy);
  console.log("Deploy Hash:", result.deployHash);

  // You can check the deploy status on the block explorer:
  // Testnet: https://testnet.cspr.live/transaction/<deploy-hash>
  // Mainnet: https://cspr.live/transaction/<deploy-hash>
  console.log(
    `View on explorer: https://testnet.cspr.live/transaction/${result.deployHash}`
  );

  return result.deployHash;
};
```

### Serializing and Deserializing Transactions {#serialize-transactions}

You can serialize transactions to JSON for storage, transmission, or later processing:

```javascript
import { Transaction } from "casper-js-sdk";

// Serialize a transaction to JSON
const serializeTransaction = (transaction) => {
  const jsonString = JSON.stringify(transaction.toJSON());
  console.log("Serialized Transaction:", jsonString);

  // Store it, send it over network, etc.
  return jsonString;
};

// Deserialize a transaction from JSON
const deserializeTransaction = (json) => {
  const transaction = Transaction.fromJSON(json);
  console.log("Deserialized Transaction:", transaction);

  return transaction;
};

// Example usage
const transaction = new NativeTransferBuilder()
  .from(privateKey.publicKey)
  .target(recipientPublicKey)
  .amount("2500000000")
  .chainName("casper-test")
  .payment(100_000_000)
  .build();

transaction.sign(privateKey);

// Serialize
const serialized = serializeTransaction(transaction);

// Later, deserialize
const restoredTransaction = deserializeTransaction(serialized);

// The restored transaction can now be submitted
await rpcClient.putTransaction(restoredTransaction);
```

### Serializing and Deserializing Deploys {#serialize-deploys}

Similarly, you can serialize and deserialize legacy deploys:

```javascript
import { Deploy } from "casper-js-sdk";

// Serialize a deploy to JSON
const serializeDeploy = (deploy) => {
  const jsonObject = Deploy.toJSON(deploy);
  const jsonString = JSON.stringify(jsonObject);
  console.log("Serialized Deploy:", jsonString);

  // Store it, send it over network, etc.
  return jsonString;
};

// Deserialize a deploy from JSON
const deserializeDeploy = (json) => {
  const deploy = Deploy.fromJSON(json);
  console.log("Deserialized Deploy:", deploy);

  return deploy;
};

// Example usage
const deploy = makeCsprTransferDeploy({
  senderPublicKeyHex: privateKey.publicKey.toHex(),
  recipientPublicKeyHex: "0123456789abcdef...",
  transferAmount: "2500000000",
});

deploy.sign(privateKey);

// Serialize
const serialized = serializeDeploy(deploy);

// Later, deserialize
const restoredDeploy = deserializeDeploy(serialized);

// The restored deploy can now be submitted
await rpcClient.putDeploy(restoredDeploy);
```

**Use Cases for Serialization:**

- Store transactions/deploys in a database
- Send transactions/deploys between different parts of your application
- Create transaction/deploy templates for later signing
- Implement offline transaction signing workflows
- Debug and inspect transaction/deploy structure

### Using Helper Functions for CSPR Transfers {#helper-functions}

The SDK provides convenient helper functions for common operations:

```javascript
import {
  HttpHandler,
  RpcClient,
  KeyAlgorithm,
  PrivateKey,
  makeCsprTransferDeploy,
} from "casper-js-sdk";

const sendCsprTransfer = async () => {
  // Load private key
  const privateKey = await PrivateKey.fromHex(
    "your-private-key-hex",
    KeyAlgorithm.ED25519
  );

  // Create transfer deploy using helper function
  const deploy = makeCsprTransferDeploy({
    senderPublicKeyHex: privateKey.publicKey.toHex(),
    recipientPublicKeyHex: "0123456789abcdef...",
    transferAmount: "2500000000", // 2.5 CSPR in motes
  });

  // Sign deploy
  deploy.sign(privateKey);

  // Initialize RPC client and submit
  const rpcHandler = new HttpHandler("http://<Node Address>:7777/rpc");
  const rpcClient = new RpcClient(rpcHandler);

  const result = await rpcClient.putDeploy(deploy);
  console.log("Deploy Hash:", result.deployHash);

  // Check deploy status on block explorer
  console.log(
    `View on explorer: https://testnet.cspr.live/transaction/${result.deployHash}`
  );

  return result.deployHash;
};
```

### Auction Manager Operations {#auction-manager}

Delegate, undelegate, or redelegate CSPR using the auction manager:

```javascript
import {
  HttpHandler,
  RpcClient,
  KeyAlgorithm,
  PrivateKey,
  makeAuctionManagerDeploy,
  AuctionManagerEntryPoint,
} from "casper-js-sdk";

const delegateStake = async () => {
  const privateKey = await PrivateKey.fromHex(
    "your-private-key-hex",
    KeyAlgorithm.ED25519
  );

  const deploy = makeAuctionManagerDeploy({
    contractEntryPoint: AuctionManagerEntryPoint.delegate,
    delegatorPublicKeyHex: privateKey.publicKey.toHex(),
    validatorPublicKeyHex: "0123456789abcdef...",
    amount: "500000000000", // 500 CSPR in motes
  });

  deploy.sign(privateKey);

  const rpcHandler = new HttpHandler("http://<Node Address>:7777/rpc");
  const rpcClient = new RpcClient(rpcHandler);

  const result = await rpcClient.putDeploy(deploy);
  console.log("Deploy Hash:", result.deployHash);

  return result.deployHash;
};
```

### CEP-18 Token Transfers {#cep18-transfers}

Transfer CEP-18 tokens using the SDK:

```javascript
import {
  HttpHandler,
  RpcClient,
  KeyAlgorithm,
  PrivateKey,
  makeCep18TransferDeploy,
} from "casper-js-sdk";

const transferCep18Token = async () => {
  const privateKey = await PrivateKey.fromHex(
    "your-private-key-hex",
    KeyAlgorithm.ED25519
  );

  const deploy = await makeCep18TransferDeploy({
    contractHash: "hash-of-cep18-contract...",
    senderPublicKeyHex: privateKey.publicKey.toHex(),
    recipientPublicKeyHex: "0123456789abcdef...",
    transferAmount: "25000000000", // Amount with decimals
    paymentAmount: "3000000000", // 3 CSPR in motes
  });

  deploy.sign(privateKey);

  const rpcHandler = new HttpHandler("http://<Node Address>:7777/rpc");
  const rpcClient = new RpcClient(rpcHandler);

  const result = await rpcClient.putDeploy(deploy);
  console.log("Deploy Hash:", result.deployHash);

  return result.deployHash;
};
```

### NFT Transfers {#nft-transfers}

Transfer NFTs using CEP-47 or CEP-78 standards:

```javascript
import {
  HttpHandler,
  RpcClient,
  KeyAlgorithm,
  PrivateKey,
  makeNftTransferDeploy,
  NFTTokenStandard,
} from "casper-js-sdk";

const transferNft = async () => {
  const privateKey = await PrivateKey.fromHex(
    "your-private-key-hex",
    KeyAlgorithm.ED25519
  );

  const deploy = await makeNftTransferDeploy({
    nftStandard: NFTTokenStandard.CEP78, // or NFTTokenStandard.CEP47
    contractPackageHash: "hash-of-nft-contract...",
    senderPublicKeyHex: privateKey.publicKey.toHex(),
    recipientPublicKeyHex: "0123456789abcdef...",
    paymentAmount: "3000000000", // 3 CSPR in motes
    tokenId: 234, // NFT token ID
  });

  deploy.sign(privateKey);

  const rpcHandler = new HttpHandler("http://<Node Address>:7777/rpc");
  const rpcClient = new RpcClient(rpcHandler);

  const result = await rpcClient.putDeploy(deploy);
  console.log("Deploy Hash:", result.deployHash);

  return result.deployHash;
};
```

### Using the RPC Client {#rpc-client}

The RPC client provides access to all Casper network RPC methods:

```javascript
import { HttpHandler, RpcClient } from "casper-js-sdk";

const queryNetwork = async () => {
  const rpcHandler = new HttpHandler("http://<Node Address>:7777/rpc");
  const rpcClient = new RpcClient(rpcHandler);

  // Get deploy information
  const deployHash =
    "3facbc4133e722c5c5630b6ad2331383ba849ef719da582cc026e9dd85e72ac9";
  const deployResult = await rpcClient.getDeploy(deployHash);
  console.log("Deploy Result:", deployResult);

  // Get transaction information (Casper 2.0)
  const txHash =
    "ef6a3f8f6c6412b9b2a6eb392d1ca6822e32b791ed7da3236dd0d062b2759bb5";
  const txResult = await rpcClient.getTransactionByTransactionHash(txHash);
  console.log("Transaction Result:", txResult);

  // Get network status
  const status = await rpcClient.getStatus();
  console.log("Network Status:", status);

  // Get account balance
  const publicKey = "01ab..."; // Account public key hex
  const balance = await rpcClient.queryBalance(publicKey);
  console.log("Account Balance:", balance);
};
```

### Subscribing to SSE Events {#sse-events}

Listen to blockchain events using Server-Sent Events:

```javascript
import { SseClient, EventName } from "casper-js-sdk";

const subscribeToEvents = () => {
  const sseClient = new SseClient("http://<Node Address>:9999/events");

  // Subscribe to block added events
  sseClient.subscribe(EventName.BlockAddedEventType, (rawEvent) => {
    try {
      const parsedEvent = rawEvent.parseAsBlockAddedEvent();
      console.log("New Block Hash:", parsedEvent.BlockAdded.blockHash);
      console.log("Block Height:", parsedEvent.BlockAdded.blockHeader.height);
    } catch (error) {
      console.error("Error processing event:", error);
    }
  });

  // Subscribe to transaction processed events (Casper 2.0)
  sseClient.subscribe(EventName.TransactionProcessedEventType, (rawEvent) => {
    try {
      const parsedEvent = rawEvent.parseAsTransactionProcessedEvent();
      console.log(
        "Transaction Hash:",
        parsedEvent.TransactionProcessed.transactionHash
      );
    } catch (error) {
      console.error("Error processing event:", error);
    }
  });

  // Start the client (optionally with last known event ID)
  const lastEventID = 1234; // Optional: resume from specific event
  sseClient.start(lastEventID);
};
```

## Key Changes in v5 {#key-changes}

1. **New Key Management API**: `PrivateKey` and `PublicKey` classes replace the old `Keys` API
2. **Transaction Support**: New `Transaction` and builder classes for Casper 2.0
3. **Improved Type System**: Complete TypeScript rewrite with better type safety
4. **RPC Client Updates**: New methods supporting both Casper 1.5 and 2.0
5. **Helper Functions**: More utility functions like `makeCsprTransferDeploy`, `makeAuctionManagerDeploy`
6. **SSE Improvements**: Enhanced event handling and parsing
7. **Backward Compatibility**: Continued support for legacy Deploy system

For comprehensive information about all changes, please refer to the [official migration guide](https://github.com/casper-ecosystem/casper-js-sdk/blob/dev/resources/migration-guide-v2-v5.md) and [full documentation](https://casper-ecosystem.github.io/casper-js-sdk/).
