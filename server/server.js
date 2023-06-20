import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 25 * 1024 * 1024,
  },
});

const port = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with a failure code
  }
};

// Start the server
const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
