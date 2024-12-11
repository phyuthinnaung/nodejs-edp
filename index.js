const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

const busArray = require("./api/bus/busresult");
const seatPlanArray = require("./api/bus/seatplan");

app.get("/", (req, res) => {
  res.send("Hello, Docker!");
});

app.get("/buses", async (req, res) => {
  try {
    const data = await busArray();
    res.json(data);
  } catch (error) {
    console.log(process.env.BACKEND_GQL_URL);
    res.status(500).json({ error: "Failed to fetch data from the backend" });
  }
});

app.get("/buses/seatplan", async (req, res) => {
  try {
    const data = await seatPlanArray();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from the backend" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
