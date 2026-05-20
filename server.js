require("dotenv").config();

const express = require("express");
const cors = require("cors");

const schoolRoutes = require("./js/routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", schoolRoutes);

const PORT = process.env.PORT || 5000;

module.exports = app;