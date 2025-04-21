import cors from "cors";
import express from "express";
import path from "path";

import packageRoutes from "./routes/packageRoutes";

const app = express();
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/api/packages", packageRoutes);
app.use("/uploads", express.static(path.join(__dirname, "../uploads"))); // Serve static files from the 'uploads' directory

app.get("/", (_req, res) => {
  res.send("Travel API is running...");
});

export default app;
