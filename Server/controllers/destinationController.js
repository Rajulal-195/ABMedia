import Destination from '../models/Destination.js';

//  GET all destinations
export const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json({ success: true, data: destinations });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//  GET destination by ID
export const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) {
      return res.status(404).json({ success: false, message: 'Destination not found' });
    }
    res.status(200).json({ success: true, data: destination });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//  CREATE new destination
export const createDestination =  async (req, res) => {
  try {
    const {
      name,
      description,
      location,
      bestTimeToVisit,
      tags,
      averageRating,
      numberOfReviews
    } = req.body;

    // Handle comma-separated tags string to array
    const tagsArray = tags?.split(',').map(tag => tag.trim()) || [];

    // Access multiple uploaded files
    const imagePaths = req.files.map(file => `/uploads/${file.filename}`);

    const newDestination = new Destination({
      name,
      description,
      location,
      bestTimeToVisit,
      tags: tagsArray,
      averageRating,
      numberOfReviews,
      image: imagePaths, // Array of image URLs
    });

    await newDestination.save();

    res.status(201).json({
      message: "Destination added successfully",
      data: newDestination
    });
  } catch (error) {
    console.error("Error adding destination:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

//  UPDATE destination by ID
export const updateDestination = async (req, res) => {
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedDestination) {
      return res.status(404).json({ success: false, message: 'Destination not found' });
    }
    res.status(200).json({ success: true, data: updatedDestination });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//  DELETE destination by ID
export const deleteDestination = async (req, res) => {
  try {
    const deleted = await Destination.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Destination not found' });
    }
    res.status(200).json({ success: true, message: 'Destination deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
