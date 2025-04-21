import { Request, RequestHandler, Response } from "express";
import { Package } from "../models/packageModel";
// import Package from '../models/packageModel';

// GET all packages
export const getPackages: RequestHandler = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// GET a single package by ID
export const getPackageById: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const singlePackage = await Package.findById(id);

    if (!singlePackage) {
      res.status(404).json({ error: "Package not found" });
    }

    res.status(200).json(singlePackage);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// POST a new package

// export const createPackage: RequestHandler = async (req, res) => {
//   try {
//     // Extract the file path from multer
//     const imagePath = req.file?.filename; // From multer
//     console.log(req.file);

//     // Validate required fields
//     const { title, description } = req.body;
//     if (!title) {
//       res.status(400).json({ error: "Title is required" });
//       return; // Explicitly return void
//     }

//     // Create a new package
//     const newPackage = new Package({
//       title,
//       description,
//       image: imagePath, // Save image filename
//     });

//     // Save the package to the database
//     const savedPackage = await newPackage.save();
//     res.status(201).json(savedPackage);
//     return; // Explicitly return void
//   } catch (error) {
//     console.error("Error creating package:", error);
//     res.status(500).json({ error: "Internal server error" });
//     return; // Explicitly return void
//   }
// };

export const createPackage = async (req: Request, res: Response) => {
  try {
    const imagePath = req.file?.path; // From multer
    console.log(imagePath); // Log the file object to see its properties

    const newPackage = new Package({
      ...req.body,
      image: imagePath, // Save image filename
    });

    const savedPackage = await newPackage.save();
    console.log("Saved package:", savedPackage); // Log the saved package to debug
    res.status(201).json(savedPackage);
  } catch (error) {
    console.error("Error creating package:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// export const createPackage: RequestHandler = async (req, res) => {
//   try {
//     const imagePath = req.file?.filename; // From multer
//     console.log(req.file); // Log the file object to debug
//     console.log(req.body); // Log the form fields to debug

//     // Validate required fields
//     const { title, description } = req.body;
//     if (!title) {
//       res.status(400).json({ error: "Title is required" });
//       return; // Explicitly return void
//     }

//     // Create a new package
//     const newPackage = new Package({
//       title,
//       description,
//       image: imagePath, // Save image filename
//     });

//     // Save the package to the database
//     const savedPackage = await newPackage.save();
//     res.status(201).json(savedPackage);
//     return; // Explicitly return void
//   } catch (error) {
//     console.error("Error creating package:", error);
//     res.status(500).json({ error: "Internal server error" });
//     return; // Explicitly return void
//   }
// };
