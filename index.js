const express = require("express");
const { connect } = require("./db");
const server = express();

function runServer() {
  connect();

  server.get("/", (req, res) => {
    return res.json({ message: "Hello World" });
  });

  server.use("/api/v1/portfolios", require("./routes/portofolios"));

  const PORT = parseInt(process.env.PORT, 10) || 8080;
  server.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("Server ready on port ", PORT);
  });
}

runServer();

// cara runningnya #nodemon index.js
