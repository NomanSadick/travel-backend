import express from 'express';
import { getPackages, createPackage, getPackageById } from '../controllers/packageController';

const router = express.Router();

// Route for fetching all packages
router.get('/', getPackages);

// Route for fetching a single package by ID
router.get('/:id', getPackageById);

// Route for creating a new package
router.post('/', createPackage);

export default router;
