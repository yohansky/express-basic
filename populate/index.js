const config = require("../config/dev");
const mongoose = require("mongoose");
const FakeDB = require("./FakeDB");

async function connectAndPopulateDB() {
  try {
    await mongoose.connect(config.DB_URI);
    console.log("> Starting Populating DB");
    await FakeDB.populate();
    await mongoose.connection.close();
    console.log("> DB has been populated...");
  } catch (err) {
    console.error(err);
  }
}

connectAndPopulateDB();

// mongoose.connect(config.DB_URI, async (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("> Starting Populating DB");
//     await FakeDB.populate();
//     await mongoose.connection.close();
//     console.log("> DB has been populated...");
//   }
// });
