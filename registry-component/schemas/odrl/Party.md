# Service -> [Party](https://www.w3.org/TR/odrl-vocab/#term-Party)
*Extends [schema:Organization](https://schema.org/Organization)*

An entity or a collection of entities that undertake Roles in a Rule.

## ODRL properties
Property | Expected Type | Description
---------|---------------|------------
`uid` | [Unique Identifier](https://www.w3.org/TR/odrl-vocab/#term-uid) - http://www.w3.org/ns/odrl/2/uid | The UID of the Party
`assigneeOf` | [Assignee Of](https://www.w3.org/TR/odrl-vocab/#term-assigneeOf) - http://www.w3.org/ns/odrl/2/assigneeOf | Identifies an ODRL Policy for which the identified Party undertakes the assignee functional role.
`assignerOf` | [Assigner Of](https://www.w3.org/TR/odrl-vocab/#term-assignerOf) - 	http://www.w3.org/ns/odrl/2/assignerOf | Identifies an ODRL Policy for which the identified Party undertakes the assigner functional role.
`partOf` | [Part Of](https://www.w3.org/TR/odrl-vocab/#term-partOf) - http://www.w3.org/ns/odrl/2/partOf | Identifies an Asset/PartyCollection that the Asset/Party is a member of.
`endpoints.consentExport` | String | Endpoint receiving a consent for data sharing and generating an access token for other services to make a data request
`endpoints.consentImport` | String | Endpoint for the processing of a consent to make a data request to another service
`endpoints.dataExport` | String | Endpoint called including a consent and access token to request data
`endpoints.dataImport` | String | Endpoint to receive send data from another service