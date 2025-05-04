"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Package = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const highlightSchema = new mongoose_1.default.Schema({
    title: String,
    description: String,
});
const itinerarySchema = new mongoose_1.default.Schema({
    day: String,
    title: String,
    description: String,
});
const timedItemSchema = new mongoose_1.default.Schema({
    value: String,
    time: String,
});
const packageSchema = new mongoose_1.default.Schema({
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
exports.Package = mongoose_1.default.model("Package", packageSchema);
