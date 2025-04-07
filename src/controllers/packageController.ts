import { Request, Response } from 'express';
import Package from '../models/packageModel';

// GET all packages
export const getPackages = async (req: Request, res: Response) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};



// POST a new package
export const createPackage = async (req: Request, res: Response) => {
  try {
    const newPackage = new Package(req.body);
    const saved = await newPackage.save();
    res.status(201).json(saved);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};



