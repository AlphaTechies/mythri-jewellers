import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name can't be empty"],
    },
    category: {
      type: String,
      required: [true, "category can't be empty"],
    },
    weight: {
      type: Number,
      required: [true, "weight can't be empty"],
    },
    price: {
      type: Number,
      required: [true, "price can't be empty"],
    },
    ourPrice: {
      type: Number,
      default: function () {
        return this.price;
      },
    },
    images: {
      type: String,
      default:
        "https://mythri-jewellers.s3.ap-south-1.amazonaws.com/category-1.webp",
    },
    trending: {
      type: Boolean,
      default: false,
    },
  },
  {
    virtuals: {
      discount: {
        get() {
          return ((this.price - this.ourPrice) * 100) / this.price;
        },
      },
    },
  }
);

export default mongoose.model("Product", ProductSchema);
