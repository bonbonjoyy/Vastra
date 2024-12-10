// backend/server.js
const express = require("express");
const cors = require("cors");
const router = require("./routes/index.js");

require("dotenv").config();

const app = express();
const port = 3333;

app.use(
  cors({
    exposedHeaders: ["Content-Type", "Authorization"],
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use("/uploads", express.static("public/uploads"));
app.use(router);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
