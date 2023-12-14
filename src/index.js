const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(cors());

const carBrands = ["BMW", "VW", "Porsche"];

// route get "/"
app.get("/", (req, res) => {
  res.send("OK");
});

// route get "/brands"
app.get("/brands", (req, res) => {
  res.json(carBrands);
});

app.listen(PORT, () => {
  console.log(`Users server listening on port http://localhost:${PORT}`);
});
