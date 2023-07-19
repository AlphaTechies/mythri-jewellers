import { StatusCodes } from "http-status-codes";
import asyncHandler from "express-async-handler";
import Admin from "../models/Admin.js";
import Product from "../models/Product.js";
import { uploadImage } from "../middleware/upload.js";
import Contact from "../models/Contact.js";
//Admin Login
export const Login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ Error: "Please fill all details" });
  }
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ Error: "User not found !" });
    }
    const isPasswordMatched = await admin.comparePassword(password);
    if (!isPasswordMatched) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Invalid Credentials !" });
    }
    const token = admin.createJWT();
    const adminData = await Admin.findOne({ _id: admin._id }).select(
      "-password"
    );
    return res.status(StatusCodes.OK).json({ adminData, token });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
});

//Update Admin Profile
export const updateProfile = asyncHandler(async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.userId).select("-password");
    if (!admin) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "User not found!" });
    }
    const updatedUser = await Admin.findByIdAndUpdate(req.userId, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }).select("-password");
    return res.status(StatusCodes.OK).json({ updatedUser });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
});

//Update Admin Password
export const updatePassword = asyncHandler(async (req, res, next) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;
  if (!oldPassword || !newPassword || !confirmPassword) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ Error: "Please fill all details" });
  }
  const admin = await Admin.findById(req.userId);
  const isPasswordMatched = await admin.comparePassword(oldPassword);
  if (!isPasswordMatched) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Invalid Credentials !" });
  }
  if (newPassword !== confirmPassword) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Password and Confirm Password must be same !" });
  }
  if (oldPassword === newPassword) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "New Password must be different from Old Password" });
  }
  admin.password = newPassword;
  await admin.save();
  return res
    .status(StatusCodes.OK)
    .json({ message: "password updated", admin });
});

//Get Admin Details
export const getMyDetails = asyncHandler(async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.userId);
    res.status(StatusCodes.OK).json({ admin });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
});

//Add Admin
export const addAdmin = asyncHandler(async (req, res, next) => {
  const { name, email, password, mobile } = req.body;
  if (!name || !email || !password || !mobile) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please fill all details" });
  }
  try {
    const isAdmin = await Admin.findOne({ email });
    if (isAdmin) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ message: "Admin Already Exists !" });
    }
    const admin = await Admin.create(req.body);
    const adminData = await Admin.findOne({ _id: admin._id }).select(
      "-password"
    );
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "Admin Added ", adminData });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message, status: "failed" });
  }
});

// Add Product
export const addProduct = asyncHandler(async (req, res, next) => {
  const { name, category, trending, weight, price, ourPrice, description } =
    req.body;
  if (
    !name ||
    !category ||
    !trending ||
    !weight ||
    !price ||
    !ourPrice ||
    !description
  ) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please fill all details", status: "failed" });
  }
  try {
    const isProduct = await Product.findOne({ name });
    if (isProduct) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ message: "Product Already Exists!", status: "failed" });
    }
    const product = new Product({
      name,
      category,
      trending,
      weight,
      price,
      ourPrice,
      description,
    });

    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        await uploadImage(file, "product-images", product._id);
      }

      const imageUrls = req.files.map(
        (file) =>
          `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/product-images/${product._id}/${file.originalname}`
      );

      product.images = imageUrls;
    }

    const createdProduct = await product.save();
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "Product created", createdProduct, status: "success" });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message, status: "failed" });
  }
});

//Update Product
export const updateProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "User not found!", status: "failed" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true, useFindAndModify: false }
    );
    return res.status(StatusCodes.OK).json({
      message: "Product Updated !",
      updatedProduct,
      status: "success",
    });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message, status: "failed" });
  }
});

//Remove Product
export const removeProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  console.log(product);
  if (!product) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: " Product not found !" });
  }
  try {
    const update = await Product.findByIdAndDelete(req.params.id);
    const products = await Product.find();
    return res
      .status(StatusCodes.OK)
      .json({ products, message: "Product Removed !" });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
});
