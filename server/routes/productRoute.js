import express from "express";
import {
  getAllProducts,
  getEachProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/:id").get(getEachProduct);

export default router;
