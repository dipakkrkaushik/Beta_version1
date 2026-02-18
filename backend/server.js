const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Contact route
app.use("/contact", contactRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
