const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
	/**
	 * Data provider
	 */
	dataProvider: { type: Schema.ObjectId, ref: "Service" },

	/**
	 * Datatypes
	 */
	datatypes: [{ type: Schema.ObjectId, ref: "DataType" }],

	/**
	 * Description
	 */
	description: String,

	/**
	 * Reference to the terms of use of this dataset
	 */
	termsOfUse: { type: Schema.ObjectId, ref: "TermsOfUse" },

	/**
	 * Created at
	 */
	createdAt: { type: Date, default: Date.now },
});

schema.virtual("uri").get(function () {
	return `${process.env.RESOURCES_BASE_URL}/assetcollection/${this._id}`;
});

module.exports = mongoose.model("Dataset", schema);