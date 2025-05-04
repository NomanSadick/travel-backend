"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const packageController_1 = require("../controllers/packageController");
const multer_1 = __importDefault(require("../utils/multer"));
const router = express_1.default.Router();
router.get('/', packageController_1.getPackages);
router.get('/:id', packageController_1.getPackageById);
router.post('/', multer_1.default.single('image'), packageController_1.createPackage);
exports.default = router;
