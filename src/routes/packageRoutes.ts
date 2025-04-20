import express from 'express';
import { getPackages, createPackage, getPackageById } from '../controllers/packageController';

const router = express.Router();

router.get('/', getPackages);
router.get('/:id', getPackageById); // Now works!
router.post('/', createPackage);

export default router;
