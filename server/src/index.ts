// Module Imports
import cors from "cors";
import express from "express";
const dotenv = require("dotenv").config();
const { connectDb } = require("./database/db.config");
import { todoRoutes } from "./routes/todoRoutes";

// Create an instance of express
const app = express();

// Express Middleware
app.use(cors());
app.use(express.json());

// Enable App Routes
app.use("/api", todoRoutes);

// Env variables for server
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

// Start the server
app.listen(port, () => {
  console.log(`Server up and running at http://localhost:${port}`);
  connectDb(uri);
});
