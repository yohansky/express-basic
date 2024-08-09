const express = require("express");
const { getPortfolios, getPortfolioById } = require("../controllers/portofoliosController");
const router = express.Router();

router.get("/", getPortfolios);
router.get("/:id", getPortfolioById);

module.exports = router;
