const DatasetModel = require("../models/Dataset.model");
const DataType = require("../models/DataType.model");
const PurposeModel = require("../models/Purpose.model");
const Service = require("../models/Service.model");

exports.getAsset = async (req, res, next) => {
	try {
		const datatype = await DataType.findById(req.params.id);

		if (!datatype)
			return res
				.status(404)
				.json({
					error: "resource-not-found-error",
					message: "The asset does not exist",
				});

		return res.json(datatype);
	} catch (err) {
		return res.status(500).json({ error: "internal-server-error" });
	}
};

exports.getAssetCollection = async (req, res, next) => {
	try {
		const dataset = await DatasetModel.findById(req.params.id);

		if (!dataset)
			return res.status(404).json({
				error: "resource-not-found-error",
				message: "The asset collection does not exist",
			});

		return res.json(dataset);
	} catch (err) {
		return res.status(500).json({ error: "internal-server-error" });
	}
};

exports.getParty = async (req, res, next) => {
	try {
		const service = await Service.findById(req.params.id);

		if (!service)
			return res
				.status(404)
				.json({
					error: "resource-not-found-error",
					message: "The party does not exist",
				});

		return res.json(service);
	} catch (e) {
		return res.status(500).json({ error: "internal-server-error" });
	}
};

exports.getPurpose = async (req, res, next) => {
	try {
		const purpose = await PurposeModel.findById(req.params.uid);

		if (!purpose)
			return res.status(404).json({
				error: "resource-not-found-error",
				message: "The purpose does not exist",
			});

		return res.json(purpose);
	} catch (e) {
		return res.status(500).json({ error: "internal-server-error" });
	}
};
