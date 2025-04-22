import { Document } from "mongoose";

export interface IItinerary {
  day: number;
  title: string;
  description: string;
}

export interface IHighlight {
  title: string;
  description: string;
}

export interface IPackage extends Document {
  title: string;
  price: number;
  image: string;
  nights: number;
  days: number;
  location: string;
  category: 'Quick Gateway' | 'Adventure' | 'Relaxation' | 'Cultural' | 'Luxury';
  description: string;
  highlights: IHighlight[]; // Array of highlight objects
  itinerary: IItinerary[]; // Array of itinerary objects
  inclusions: string[]; // Array of inclusion items
  exclusions: string[]; // Array of exclusion items
}