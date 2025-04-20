import { Request, Response, RequestHandler } from 'express';
import { Package } from '../models/packageModel';
// import Package from '../models/packageModel';

// GET all packages
export const getPackages: RequestHandler = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// GET a single package by ID
export const getPackageById: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const singlePackage = await Package.findById(id);

    if (!singlePackage) {
      res.status(404).json({ error: 'Package not found' });
    }

    res.status(200).json(singlePackage);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// POST a new package
export const createPackage = async (req: Request, res: Response) => {
  console.log("Creating package with data:", req.body); // Debugging line
  try {
    const newPackage = new Package(req.body);
    const savedPackage = await newPackage.save();
    console.log(savedPackage);
    res.status(201).json(savedPackage);
  
  } catch (error) {
    console.error("Error creating package:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
