const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/bookings", (req, res) => {
  console.log("Booking received:", req.body);
  res.json({ success: true });
});

app.post("/api/payment", (req, res) => {
  console.log("Payment received:", req.body);
  res.send("Payment successful. Thank you!");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
