import express from "express";
import isAuthenticated from "../middleware/auth.js";
import {
  Login,
  addAdmin,
  addProduct,
  getMyDetails,
  removeProduct,
  updatePassword,
  updateProduct,
  updateProfile,
} from "../controllers/AdminControllers.js";
const router = express.Router();

//Actions for Admin
router.route("/login").post(Login);
router
  .route("/profile")
  .patch(isAuthenticated, updateProfile)
  .get(isAuthenticated, getMyDetails);
router.route("/password").patch(isAuthenticated, updatePassword);
router.route("/new").post(addAdmin);

//Actions for Product
router.route("/products").post(isAuthenticated, addProduct);
router
  .route("/product/:id")
  .delete(isAuthenticated, removeProduct)
  .patch(isAuthenticated, updateProduct);

export default router;
