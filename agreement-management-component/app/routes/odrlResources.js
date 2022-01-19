const express = require("express");

const ctrl = require("./../controllers/odrlController");

const router = express.Router();

router.get("/asset/:id", ctrl.getAsset);
router.get("/assetcollection/:id", ctrl.getAssetCollection);
router.get("/party/:id", ctrl.getParty);
router.get("/purpose/:id", ctrl.getPurpose);

module.exports = router;
