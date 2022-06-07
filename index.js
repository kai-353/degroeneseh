const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => res.sendFile(path.join(__dirname + "/index.html")));

app.get("/css/:file", (req, res) =>
  res.sendFile(path.join(__dirname + `/css/${req.params.file}`))
);

app.get("/images/:file", (req, res) =>
  res.sendFile(path.join(__dirname + `/images/${req.params.file}`))
);

app.listen(5000, () => console.log("running on 5000"));
