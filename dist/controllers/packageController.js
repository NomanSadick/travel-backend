"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPackage = exports.getPackageById = exports.getPackages = void 0;
const packageModel_1 = require("../models/packageModel");
// import Package from '../models/packageModel';
const getPackages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const packages = yield packageModel_1.Package.find();
        res.status(200).json(packages);
    }
    catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.getPackages = getPackages;
const getPackageById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const singlePackage = yield packageModel_1.Package.findById(id);
        if (!singlePackage) {
            res.status(404).json({ error: 'Package not found' });
        }
        res.status(200).json(singlePackage);
    }
    catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.getPackageById = getPackageById;
const createPackage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const imagePath = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
        console.log(req.file);
        console.log(req.body);
        const highlights = req.body.highlights ? JSON.parse(req.body.highlights) : [];
        const itinerary = req.body.itinerary ? JSON.parse(req.body.itinerary) : [];
        const inclusions = req.body.inclusions ? JSON.parse(req.body.inclusions) : [];
        const exclusions = req.body.exclusions ? JSON.parse(req.body.exclusions) : [];
        const newPackage = new packageModel_1.Package({
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
        const savedPackage = yield newPackage.save();
        console.log("Saved package:", savedPackage);
        res.status(201).json(savedPackage);
    }
    catch (error) {
        console.error("Error creating package:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.createPackage = createPackage;
