const express = require("express");
const router = express.Router();
const whoisController = require('../controllers/whois')


router.get("/whois/:lookup", whoisController.getApi)

module.exports = router;

