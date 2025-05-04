import express from 'express';
import { getPackages, createPackage, getPackageById } from '../controllers/packageController';
import upload from '../utils/multer'; 

const router = express.Router();


router.get('/', getPackages);


router.get('/:id', getPackageById);


router.post('/', upload.single('image'), createPackage); 

export default router;