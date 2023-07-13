import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name can't be empty"],
  },
  email: {
    type: String,
    required: [true, "email can't be empty"],
    validate: {
      validator: validator.isEmail,
      message: "Not a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "password can't be empty"],
  },
  mobile: {
    type: Number,
    required: [true, "mobile number can't be empty"],
    // validate: {
    //   validator: validator.isMobilePhone,
    //   message: "not a valid mobile number",
    // },
  },
});

AdminSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

AdminSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

AdminSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("Admin", AdminSchema);
