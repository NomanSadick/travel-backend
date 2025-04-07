import { Document } from "mongoose";
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