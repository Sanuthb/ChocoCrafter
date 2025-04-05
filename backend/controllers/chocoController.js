import Chocolate from "../models/Chocolate.js";

// Create Chocolate Customization
export const createChocolate = async (req, res) => {
  try {
    const chocolate = await Chocolate.create({ ...req.body });
    res.status(201).json(chocolate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get All Custom Chocolates
export const getAllChocolates = async (req, res) => {
  try {
    const chocolates = await Chocolate.find();
    res.status(200).json(chocolates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
