import mongoose from "mongoose";

const highlightSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const itinerarySchema = new mongoose.Schema({
  day: String,
  title: String,
  description: String,
});

const timedItemSchema = new mongoose.Schema({
  value: String,
  time: String,
});

const packageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number },
  image: { type: String },
  location: { type: String },
  description: { type: String },
  category: {
    type: String,
    enum: ['Quick Gateway', 'Adventure', 'Relaxation', 'Cultural', 'Luxury'],
    required: true,
  },
  days: { type: Number, required: true },     
  nights: { type: Number, required: true },
  highlights: [highlightSchema],
  itinerary: [itinerarySchema],
  inclusions: [timedItemSchema],
  exclusions: [timedItemSchema],
});

export const Package = mongoose.model("Package", packageSchema);
