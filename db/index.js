const config = require("../config/dev");
const mongoose = require("mongoose");

require("./models/portfolio");

exports.connect = () => {
  async function connectDB() {
    try {
      await mongoose.connect(config.DB_URI, {});
      console.log("Connected to DB!");
    } catch (err) {
      console.error("Can't connect to DB!", err);
    }
  }
  connectDB();
};
