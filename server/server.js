const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const menuRoutes = require("./routes/menuRoutes"); // Import routes

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/api/menu", menuRoutes); // This will handle CRUD operations for menu

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
