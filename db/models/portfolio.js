const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  //   startDate: {type: String},
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
