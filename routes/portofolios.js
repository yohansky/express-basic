const express = require("express");
const { getPortfolios, getPortfolioById, createPortfolio } = require("../controllers/portofoliosController");
const router = express.Router();

router.get("", getPortfolios);
router.get("/:id", getPortfolioById);

router.post("", createPortfolio);

module.exports = router;
