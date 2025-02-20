```json copy 
{
    "description": "Session kind of a Transaction.",
    "oneOf": [
        {
            "description": "A standard (non-special-case) session.\n\nThis kind of session is not allowed to install or upgrade a stored contract, but can call stored contracts.",
            "type": "string",
            "enum": [
                "Standard"
            ]
        },
        {
            "description": "A session which installs a stored contract.",
            "type": "string",
            "enum": [
                "Installer"
            ]
        },
        {
            "description": "A session which upgrades a previously-installed stored contract.  Such a session must have \"package_id: PackageIdentifier\" runtime arg present.",
            "type": "string",
            "enum": [
                "Upgrader"
            ]
        },
        {
            "description": "A session which doesn't call any stored contracts.\n\nThis kind of session is not allowed to install or upgrade a stored contract.",
            "type": "string",
            "enum": [
                "Isolated"
            ]
        }
    ]
} 
``` 
