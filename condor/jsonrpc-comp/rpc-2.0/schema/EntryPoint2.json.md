```json copy 
{
    "description": "Type signature of a method. Order of arguments matter since can be referenced by index as well as name.",
    "type": "object",
    "required": [
        "access",
        "args",
        "entry_point_payment",
        "entry_point_type",
        "name",
        "ret"
    ],
    "properties": {
        "name": {
            "type": "string"
        },
        "args": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/Parameter"
            }
        },
        "ret": {
            "$ref": "#/components/schemas/CLType"
        },
        "access": {
            "$ref": "#/components/schemas/EntryPointAccess"
        },
        "entry_point_type": {
            "$ref": "#/components/schemas/EntryPointType"
        },
        "entry_point_payment": {
            "$ref": "#/components/schemas/EntryPointPayment"
        }
    }
} 
``` 
