const express = require("express");
const router = express.Router();

// POST /contact
router.post("/", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received Contact:", name, email, message);

  // Here you can save to DB or send email using nodemailer
  res.json({ message: "Contact received" });
});

module.exports = router;
