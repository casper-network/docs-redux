```json copy 
{
    "description": "Hex-encoded cryptographic public key, including the algorithm tag prefix.",
    "examples": [
        {
            "name": "SystemPublicKey",
            "description": "A pseudo public key, used for example when the system proposes an immediate switch block after a network upgrade rather than a specific validator. Its hex-encoded value is always '00', as is the corresponding pseudo signature's",
            "value": "00"
        },
        {
            "name": "Ed25519PublicKey",
            "description": "An Ed25519 public key. Its hex-encoded value begins '01' and is followed by 64 characters",
            "value": "018a88e3dd7409f195fd52db2d3cba5d72ca6709bf1d94121bf3748801b40f6f5c"
        },
        {
            "name": "Secp256k1PublicKey",
            "description": "A secp256k1 public key. Its hex-encoded value begins '02' and is followed by 66 characters",
            "value": "0203408e9526316fd1f8def480dd45b2cc72ffd732771c9ceb5d92ffa4051e6ee084"
        }
    ],
    "type": "string"
} 
``` 
