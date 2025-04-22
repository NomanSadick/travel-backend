import multer from 'multer';

import { storage } from './cloudinary'; // Import the Cloudinary storage

const upload = multer({ storage });

export default upload;







// import { Request } from "express";
// import fs from "fs";
// import multer, { FileFilterCallback } from "multer";
// import { storage as cloudinaryStorage } from './cloudinary';
// import path from "path";

// // Ensure the uploads directory exists
// const uploadsDir = path.join(__dirname, "../../uploads");
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir, { recursive: true });
// }

// // Set storage engine
// const localStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     // console.log("Destination:", '/uploads'+ file.originalname); // Log the destination path
//     cb(null, uploadsDir); // Use the absolute path for the 'uploads' folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}_${file.originalname}`); // Name the file with a unique timestamp
//   },
// });

// // File filter to accept only images
// const fileFilter = (
//   req: Request,
//   file: Express.Multer.File,
//   cb: FileFilterCallback
// ) => {
//   const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Invalid file type, only JPEG and PNG are allowed!"));
//   }
// };

// // Multer configuration
// const upload = multer({ storage: localStorage });

// export default upload;




