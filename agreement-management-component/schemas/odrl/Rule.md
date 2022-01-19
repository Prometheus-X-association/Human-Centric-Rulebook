# [Rule](https://www.w3.org/TR/odrl-vocab/#term-Rule)

An abstract concept that represents the common characteristics of Permissions, Prohibitions, and Duties.

Property | Expected Type | Description
---------|---------------|------------
`uid` | [Unique Identifier](https://www.w3.org/TR/odrl-vocab/#term-uid) - http://www.w3.org/ns/odrl/2/uid | The UID of the Rule
`output` | [Output](https://www.w3.org/TR/odrl-vocab/#term-output) - http://www.w3.org/ns/odrl/2/output | The output property specifies the Asset which is created from the output of the Action.
`failure`| [Failure](https://www.w3.org/TR/odrl-vocab/#term-failure) - http://www.w3.org/ns/odrl/2/failure | Failure is an abstract property that defines the violation (or unmet) relationship between Rules.
`relation`| [Relation](https://www.w3.org/TR/odrl-vocab/#term-relation) - http://www.w3.org/ns/odrl/2/relation | Relation is an abstract property which creates an explicit link between an Action and an Asset.
`target`| [Target](https://www.w3.org/TR/odrl-vocab/#term-target) - http://www.w3.org/ns/odrl/2/target | The target property indicates the Asset that is the primary subject to which the Rule action directly applies.
`function`| [Function](https://www.w3.org/TR/odrl-vocab/#term-function) - http://www.w3.org/ns/odrl/2/function | Function is an abstract property whose sub-properties define the functional roles which may be fulfilled by a party in relation to a Rule.
[`action`](https://www.w3.org/TR/odrl-vocab/#term-action)| [Action](https://www.w3.org/TR/odrl-vocab/#term-action) - http://www.w3.org/ns/odrl/2/action | The operation relating to the Asset for which the Rule is being subjected.
`constraint`| [Has Constraint](https://www.w3.org/TR/odrl-vocab/#term-constraint) - http://www.w3.org/ns/odrl/2/constraint | Constraint applied to a Rule
[`assignee`](https://www.w3.org/TR/odrl-vocab/#term-assignee) | [Party](https://www.w3.org/TR/odrl-vocab/#term-Party) - http://www.w3.org/ns/odrl/2/Party | The Party that is the recipient of the Rule.
[`assigner`](https://www.w3.org/TR/odrl-vocab/#term-assignee) | [Party](https://www.w3.org/TR/odrl-vocab/#term-Party) - http://www.w3.org/ns/odrl/2/Party| The Party that is the issuer of the Rule.