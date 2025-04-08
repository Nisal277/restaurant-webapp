const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // make sure path is correct
const User = require("./models/User");


dotenv.config();
connectDB();

const seedUsers = async () => {
    try {
      // Sample users
      const users = [
        {
          name: "Admin",
          email: "admin@example.com",
          password: "Admin@123", // Will be hashed via pre-save hook
          role: "admin"
        },
        {
          name: "dilshi",
          email: "dilshi@example.com",
          password: "Dilshi@123",
          role: "customer"
        }
      ];
  
      // Don’t delete existing users
      const existing = await User.find({});
      if (existing.length > 0) {
        console.log("Users already exist. No new users added.");
        process.exit();
      }
  
      await User.insertMany(users);
      console.log("Sample users added ✅");
      process.exit();
    } catch (error) {
      console.error("Error seeding users ❌", error);
      process.exit(1);
    }
  };
  
  seedUsers();
