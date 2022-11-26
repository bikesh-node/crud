const express = require("express");
const { AllProducts } = require("../controllers/product");
const router = express();

router.post("/", AllProducts);
module.exports = router;
