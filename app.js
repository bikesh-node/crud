const express = require("express");
const port = 3005;
const app = express();

const productRoute = require("./src/Api/routes/product");
app.get("/", (req, res) => {
  res.send("Hello Server");
});

app.use("/products", productRoute);

app.listen(port, () => console.log("listening on port " + port));
