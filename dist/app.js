"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const packageRoutes_1 = __importDefault(require("./routes/packageRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "https://travel-frontend-6rc3.vercel.app",
    credentials: true
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.use(cors());
app.use(express_1.default.json());
app.use('/api/packages', packageRoutes_1.default);
app.get('/', (_req, res) => {
    res.send('Travel API is running...');
});
exports.default = app;
