import mongoose, { Document, Schema } from 'mongoose';

export interface IPackage extends Document {
  title: string;
  price: number;
  nights: number;
  days: number;
  location: string;
  category: 'Quick Gateway' | 'Adventure' | 'Relaxation' | 'Cultural' | 'Luxury';
  description: string;
  highlights: string[];
}

const packageSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    nights: { type: Number, required: true },
    days: { type: Number, required: true },
    location: { type: String, required: true },
    category: {
      type: String,
      enum: ['Quick Gateway', 'Adventure', 'Relaxation', 'Cultural', 'Luxury'],
      required: true,
    },
    description: { type: String, required: true },
    highlights: [{ type: String, required: true }],
  },
  { timestamps: true }
);

export default mongoose.model<IPackage>('Package', packageSchema);
