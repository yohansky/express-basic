const express = require("express");
const server = express();

server.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

const PORT = parseInt(process.env.PORT, 10) || 8080;
server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server ready on port ", PORT);
});
