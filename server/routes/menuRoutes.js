const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const MenuItem = require("../models/MenuItem");



// ✅ Get all menu items
router.get("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
});

// ✅ Get a single menu item by ID
router.get("/:id", async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ error: "Menu item not found" });
    }
    res.status(200).json(menuItem);
  } catch (error) {
    res.status(500).json({ error: "Error fetching menu item" });
  }
});

// ✅ Add a new menu item
router.post("/", async (req, res) => {
  const { name, price, category, imageUrl } = req.body;

  if (!name || !price || !category || !imageUrl) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newItem = new MenuItem({ name, price, category, imageUrl });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Error adding menu item" });
  }
});

// ✅ Update a menu item by ID
router.put("/:id", async (req, res) => {
  const { name, price, category, imageUrl } = req.body;

  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      { name, price, category, imageUrl },
      { new: true, runValidators: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ error: "Menu item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: "Error updating menu item" });
  }
});

// ✅ Delete a menu item by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: "Menu item not found" });
    }
    res.status(200).json({ message: "Menu item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting menu item" });
  }
});

module.exports = router;









