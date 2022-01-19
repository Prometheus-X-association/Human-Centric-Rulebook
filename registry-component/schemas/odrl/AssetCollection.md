# Dataset -> [AssetCollection](https://www.w3.org/TR/odrl-vocab/#term-AssetCollection)
*Extends [Asset](https://www.w3.org/TR/odrl-vocab/#term-Asset)*

An Asset that is collection of individual resources

Property | Expected Type | Description
---------|---------------|------------
`uid` | [Unique Identifier](https://www.w3.org/TR/odrl-vocab/#term-uid) - http://www.w3.org/ns/odrl/2/uid | The UID of the AssetCollection
`source` | [Source](https://www.w3.org/TR/odrl-vocab/#term-source) - http://www.w3.org/ns/odrl/2/source | Reference to a Asset/PartyCollection
`refinement` | [Refinement](https://www.w3.org/TR/odrl-vocab/#term-refinement) - http://www.w3.org/ns/odrl/2/refinement | Constraint used to refine the semantics of an Action, or Party/Asset Collection