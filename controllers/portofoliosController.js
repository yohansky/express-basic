const mongoose = require("mongoose");
const Portfolio = mongoose.model("Portfolio");

exports.getPortfolios = async (req, res) => {
  // return res.json({ data: [10, 20, 3, 4] });
  const portofolios = await Portfolio.find({});
  return res.json(portofolios); //didalam Dbportofolios dengan collection name "portfolios", jadi ini nama collectionnya
};

exports.getPortfolioById = async (req, res) => {
  // console.log(req.param.id);
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio);
  } catch (err) {
    return res.status(422).send("API error");
  }
};
