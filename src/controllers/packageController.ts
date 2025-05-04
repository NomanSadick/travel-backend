import { Request, Response, RequestHandler } from 'express';
import { Package } from '../models/packageModel';
// import Package from '../models/packageModel';


export const getPackages: RequestHandler = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};


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



export const createPackage = async (req: Request, res: Response) => {
  try {
    const imagePath = req.file?.path; 
    console.log(req.file); 
    console.log(req.body); 


    const highlights = req.body.highlights ? JSON.parse(req.body.highlights) : [];
    const itinerary = req.body.itinerary ? JSON.parse(req.body.itinerary) : [];
    const inclusions = req.body.inclusions ? JSON.parse(req.body.inclusions) : [];
    const exclusions = req.body.exclusions ? JSON.parse(req.body.exclusions) : [];


    const newPackage = new Package({
      title: req.body.title,
      price: req.body.price,
      image: imagePath, 
      nights: req.body.nights,
      days: req.body.days,
      location: req.body.location,
      category: req.body.category,
      description: req.body.description,
      highlights,
      itinerary,
      inclusions,
      exclusions,
    });

    // Save the package to the database
    const savedPackage = await newPackage.save();
    console.log("Saved package:", savedPackage); 
    res.status(201).json(savedPackage);
  } catch (error) {
    console.error("Error creating package:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
