const Houses = require('../models/hogwarts_houses');

// Function to select all houses
const housesSelect = async (req, res) => {
    try {
        const allHouses = await Houses.find();
        return res.status(200).json(allHouses);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error retrieving houses" });
    }
};

// Function to add a new house
const housesAdd = async (req, res) => {
    try {
        const newHouse = new Houses(req.body);
        const createdHouse = await newHouse.save();
        return res.status(201).json(createdHouse);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error adding house" });
    }
};

// Function to select one house by ID
const selectOneHouse = async (req, res) => {
    try {
        const { id } = req.params;
        const house = await Houses.findById(id);
        if (!house) {
            return res.status(404).json({ message: "House not found" });
        }
        return res.status(200).json(house);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error retrieving house" });
    }
};

// Function to update a house
const housesPut = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedHouse = await Houses.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedHouse) {
            return res.status(404).json({ message: "House not found" });
        }
        return res.status(200).json(updatedHouse);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error updating house" });
    }
};

// Function to delete a house
const housesDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedHouse = await Houses.findByIdAndDelete(id);
        if (!deletedHouse) {
            return res.status(404).json({ message: "House not found" });
        }
        return res.status(200).json({ message: "House deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error deleting house" });
    }
};

module.exports = { housesSelect, housesAdd, selectOneHouse, housesPut, housesDelete };
