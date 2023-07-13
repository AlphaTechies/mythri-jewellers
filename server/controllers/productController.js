import Product from "../models/Product.js";
import { StatusCodes } from "http-status-codes";
import asyncHandler from "express-async-handler";

//Get All Products
export const getAllProducts = asyncHandler(async (req, res, next) => {
  try {
    const products = await Product.find();
    const count = products.length;
    res.status(StatusCodes.OK).json({ count, products });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
});

//Get Single Product
export const getEachProduct = asyncHandler(async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(StatusCodes.OK).json({ product });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
});
