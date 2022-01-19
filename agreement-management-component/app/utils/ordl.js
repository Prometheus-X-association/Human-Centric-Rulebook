module.exports = {

    /**
     * Builds the permission object matching the json-ld format
     * @param {string} type The permission @type property
     * @param {string} dataset The URI of the dataset
     * @param {string} provider The URI of the data provider
     * @param {string} consumer The URI of the data consumer
     * @param {string} action The action of the permission, ex: use, play, display...
     * @param {string} purpose The URI of the purpose acting as refinement of the action
     * @returns {object} The built permission
     */
    buildPermission: (type = "Agreement", dataset, provider, consumer, action, purpose) => {
        let object = {
					"@context": "http://www.w3.org/ns/odrl.jsonld",
                    "@type": type                    
				};

        object.permission = {}

        if (dataset)
            object.permission.target = dataset;

        if (provider)
            object.permission.assigner = provider;

        if (consumer)
            object.permission.assignee = provider;

        let refinement = undefined;
        if (purpose)
            refinement = [{
                "leftOperand": "purpose",
                "operator": "eq",
                "rightOperand": purpose
            }]

        object.permission.action = [{
            action: action,
            refinement: refinement
        }]

        return object;
    }
}