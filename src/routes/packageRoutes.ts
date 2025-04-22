import express from 'express';
import { getPackages, createPackage, getPackageById } from '../controllers/packageController';
import upload from '../utils/multer'; // Import multer

const router = express.Router();

// Route for fetching all packages
router.get('/', getPackages);

// Route for fetching a single package by ID
router.get('/:id', getPackageById);

// Route for creating a new package with image upload
router.post('/', upload.single('image'), createPackage); // 'image' should match the field name in the form

export default router;