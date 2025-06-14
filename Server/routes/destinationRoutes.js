import express from 'express';
const router = express.Router();

import { upload } from '../middlewares/upload.js';
import {
  getDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination
} from '../controllers/destinationController.js';

// GET all destinations
router.get('/', upload.array('images', 5), getDestinations);

// GET destination by ID
router.get('/:id', getDestinationById);

// POST create new destination
router.post('/', createDestination);

// PUT update destination by ID
router.put('/:id', updateDestination);

// DELETE destination by ID
router.delete('/:id', deleteDestination);

export default router;

