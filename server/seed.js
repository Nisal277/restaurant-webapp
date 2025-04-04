const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const MenuItem = require("./models/MenuItem");

dotenv.config();
connectDB();

const sampleMenu = [
  {
    name: "Steak",
    price: 870,
    category: "Dinner",
    imageUrl: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RlYWt8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Kottu",
    price: 800,
    category: "Dinner",
    imageUrl: "https://media.istockphoto.com/id/1786987960/photo/kottu-or-kottu-roti-a-popular-sri-lankan-street-food.jpg?s=2048x2048&w=is&k=20&c=-oVWU2Fbh6BraVUVLtRcN9hReUhejOkaPI6T2xn7a0Q="
  },
  {
    name: "Nooldles",
    price: 390,
    category: "Dinner",
    imageUrl: "https://plus.unsplash.com/premium_photo-1676316419643-a5a20b0d77eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bm9vZGxlfGVufDB8fDB8fHww"
  },
  {
    name: "Pasta",
    price: 340,
    category: "Dinner",
    imageUrl: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Pizza",
    price: 1230,
    category: "Dinner",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Hoppers",
    price: 320,
    category: "Dinner",
    imageUrl: "https://media.istockphoto.com/id/543977960/photo/sri-lankan-egg-hopper.jpg?s=2048x2048&w=is&k=20&c=jbWEZc5v6TJZ0RLOjQ4ejMzSka4kX6yPs8ESc9sd_Dk="
  }
];

const seedDatabase = async () => {
  try {
    /*await MenuItem.deleteMany();*/ // Clears old data
    await MenuItem.insertMany(sampleMenu);
    console.log("Database Seeded Successfully! 🎉");
    process.exit();
  } catch (error) {
    console.error("Seeding Failed ❌", error);
    process.exit(1);
  }
};

seedDatabase();


