import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  description: String,
  price: String,
  duration: String, // e.g., "7 Days / 6 Nights"
  destinationsCovered: [String],
  includes: [String], // e.g., ["Hotel", "Breakfast", "Guide"]
  averageRating: { type: Number, default: 4.4 },
  numberOfBookings: { type: Number, default: 0 },
  isTopSelling: { type: Boolean, default: false },
  planType: {
  type: String,
  enum: ['Base Plan', 'Premium Plan', 'VIP Plan'],
  default: 'Base Plan'
}

}, { timestamps: true });

const Package= mongoose.model('Package', packageSchema);
export default Package;