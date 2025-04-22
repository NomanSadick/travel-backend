// utils/cloudinary.ts
import dotenv from 'dotenv';
dotenv.config(); // ✅ Load environment variables before using them

import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// ✅ Optional: Debug log (remove in production)
console.log('✅ Cloudinary ENV:', {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET ? '***HIDDEN***' : '❌ Missing',
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

interface ExtendedParams {
  folder: string;
  allowed_formats: string[];
  transformation: { width: number; height: number; crop: string }[];
}

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'travel-packages', // Folder in Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png'],
    transformation: [{ width: 800, height: 600, crop: 'limit' }],
  } as ExtendedParams,
});

export { cloudinary, storage };
