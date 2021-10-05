import express from "express";

const app = express();

app.use(express.static(__dirname + "/../site"));

app.get("/script.js", (req, res) => {
  res.sendFile(__dirname + "/script.js");
});

app.listen(6969, () => {
  console.log("Listening on 6969.");
});
