const express = require("express");
const { getPortfolios, getPortfolioById, createPortfolio, updatePortfolio } = require("../controllers/portofoliosController");
const router = express.Router();

router.get("", getPortfolios);
router.get("/:id", getPortfolioById);

router.post("", createPortfolio);

router.patch("/:id", updatePortfolio);

module.exports = router;
