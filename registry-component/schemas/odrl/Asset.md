# DataType -> [Asset](https://www.w3.org/TR/odrl-vocab/#term-Asset)

A resource or a collection of resources that are the subject of a Rule.

Property | Expected Type | Description
---------|---------------|------------
`uid` | [Unique Identifier](https://www.w3.org/TR/odrl-vocab/#term-uid) - http://www.w3.org/ns/odrl/2/uid | The UID of the Asset
`hasPolicy` | [Target Policy](https://www.w3.org/TR/odrl-vocab/#term-hasPolicy) - http://www.w3.org/ns/odrl/2/hasPolicy | Identifies an ODRL Policy for which the identified Asset is the target Asset to all the Rules.
`partOf` | [Part Of](https://www.w3.org/TR/odrl-vocab/#term-partOf) - http://www.w3.org/ns/odrl/2/partOf | Identifies a PartyCollection that the Asset is a member of.