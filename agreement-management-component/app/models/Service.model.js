const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const schema = new Schema({
	/**
	 * Service Name
	 */
	name: String,

	/**
	 * Logo of the service
	 */
	logo: String,

	/**
	 * Service password used to authenticate to Visions account
	 */
	password: String,

	/**
	 * List of all purposes of the service
	 */
	purposes: [{ type: Schema.ObjectId, ref: "Purpose" }],

	/**
	 * List of all datatypes of a service
	 */
	datatypes: [{ type: Schema.ObjectId, ref: "DataType" }],

	/**
	 * If the service is a processor for another service
	 */
	isProcessing: {
		type: Boolean,
		default: false,
	},

	/**
	 * User identifiers in that service
	 */
	identifiers: [{ type: Schema.ObjectId, ref: "Identifier" }],

	/**
	 * Public service Key
	 */
	serviceKey: String,

	/**
	 * Secret service key, used to generate JWT for authenticating to the API
	 */
	serviceSecretKey: String,

	/**
	 * The endpoints of the service
	 */
	endpoints: {
		/**
		 * Endpoint of the service used to export data
		 */
		dataExport: String,
		/**
		 * Endpoint to send signed consent to exporting service
		 */
		consentImport: String,
		/**
		 * Endpoint used by importing service
		 */
		dataImport: String,
		/**
		 * Endpoint of the service used to authenticate a new user
		 */
		consentExport: String,

		/**
		 * Website of the service
		 */
		website: String,
	},

	/**
	 * Governance info of the service
	 */
	governance: {
		registration: {
			type: String,
			default: "",
		},
		registeredOfficeAddress: {
			type: String,
			default: "",
		},
		legalRepresentative: {
			name: {
				type: String,
				default: "",
			},
			email: {
				type: String,
				default: "",
			},
			profession: {
				type: String,
				default: "",
			},
		},
		dataProtectionOfficer: {
			name: {
				type: String,
				default: "",
			},
			email: {
				type: String,
				default: "",
			},
		},
	},
});

schema.virtual("uri").get(function () {
	return `${process.env.RESOURCES_BASE_URL}/party/${this._id}`;
});

schema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

module.exports = mongoose.model("Service", schema);
