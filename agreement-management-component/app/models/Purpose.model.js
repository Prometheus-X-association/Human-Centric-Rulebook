const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({

	/**
	 * Purpose name
	 */
	name: String,

	/**
	 * Purpose description
	 */
	description: String,

	/**
	 * List of owned datatypes used by this purpose
	 */
	datatypes: [{ type: Schema.ObjectId, ref: "DataType" }],

	/**
	 * List of imported datatypes used by this purpose
	 */
	importedDatatypes: [
		{
			datatype: {
				type: Schema.ObjectId,
				ref: "DataType",
			},
			used: {
				type: Boolean,
			},
		},
	],

	/**
	 * Service this Purpose belongs to
	 */
	service: {
		type: Schema.ObjectId,
		ref: "Service",
	},
});

schema.virtual("uri").get(function () {
	return `${process.env.RESOURCES_BASE_URL}/purpose/${this._id}`;
});

module.exports = mongoose.model("Purpose", schema);
