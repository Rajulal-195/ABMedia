import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: [String],
  description: String,
  location: String,
  bestTimeToVisit: String,
  tags: [String], // e.g. ["Beach", "Adventure"]
  averageRating: { type: Number, default: 4.5 },
  numberOfReviews: { type: Number, default: 0 },
  isPopular: { type: Boolean, default: true }
}, { timestamps: true });

const Destination = mongoose.model('Destination', destinationSchema);
export default Destination;
