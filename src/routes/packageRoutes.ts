import express from 'express';
import { getPackages, createPackage } from '../controllers/packageController';

const router = express.Router();

router.get('/', getPackages);
router.post('/', createPackage);

export default router;
