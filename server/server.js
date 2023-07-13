import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import connectDB from "./db/connectDB.js";
import AdminRouter from "./routes/adminRoute.js";
import ProductRouter from "./routes/productRoute.js";

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

app.use("/api/admin", AdminRouter);
app.use("/api/products", ProductRouter);

const port = process.env.PORT || 5000;

// Start the server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
