import mongoose from "mongoose";

const CarouselSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name can't be empty"],
  },
  image: {
    type: String,
    required: [true, "image can't be empty"],
  },
  redirectTo: {
    type: String,
    required: [true, "link ref can't be empty"],
  },
});

export default mongoose.model("Carousel", CarouselSchema);
