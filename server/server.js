const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const User = require("./models/User");

const app = express();
connectDB();



app.use(cors());
app.use(express.json());



// Routes
app.use("/api/menu", require("./routes/menuRoutes"));
// Login Route
app.post("/api/login", async (req, res) => {
    const { name, password, role } = req.body;
  
    try {
      const user = await User.findOne({ name, password, role });
      if (user) {
        res.json({ success: true, role: user.role });
      } else {
        res.json({ success: false, message: "Invalid credentials" });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });

  

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

