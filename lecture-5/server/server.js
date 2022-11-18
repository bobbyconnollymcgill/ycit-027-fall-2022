const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ name: "Bobby Connolly" });
});

app.listen(3333);
