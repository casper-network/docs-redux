```json copy 
{
    "description": "Describes finality signatures that will be rewarded in a block. Consists of a vector of `SingleBlockRewardedSignatures`, each of which describes signatures for a single ancestor block. The first entry represents the signatures for the parent block, the second for the parent of the parent, and so on.",
    "type": "array",
    "items": {
        "$ref": "#/components/schemas/SingleBlockRewardedSignatures"
    }
} 
``` 
