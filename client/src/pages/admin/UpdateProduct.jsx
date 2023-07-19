import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/adminSlice";
import { fetchProducts } from "../../redux/productSlice";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);

  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [trending, setTrending] = useState(false);
  const [price, setPrice] = useState("");
  const [ourPrice, setOurPrice] = useState("");

  const handleFileChange = (e) => {
    setProductImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("weight", weight);
    formData.append("price", price);
    formData.append("ourPrice", ourPrice);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("trending", trending);

    for (let i = 0; i < productImages.length; i++) {
      formData.append("productImages", productImages[i]);
    }

    try {
      await dispatch(addProduct(formData));
      dispatch(fetchProducts());
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="bg-secondary">
      <div className="py-24 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-primary mb-4">Add Product</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-2 gap-4 bg-white border border-primary rounded-lg p-4">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="name" className="text-primary font-medium mb-2">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter product name"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="category"
                className="text-primary font-medium mb-2"
              >
                Category
              </label>
              <select
                id="category"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Necklace">Necklace</option>
                <option value="Bangles">Bangles</option>
                <option value="Rings">Rings</option>
                <option value="Watches">Watches</option>
              </select>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="description"
                className="text-primary font-medium mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="4"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter product description"
                required
              ></textarea>
            </div>
            <div className="col-span-1">
              <label htmlFor="weight" className="text-primary font-medium mb-2">
                Weight
              </label>
              <input
                type="number"
                id="weight"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter product weight"
                required
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="price" className="text-primary font-medium mb-2">
                Price
              </label>
              <input
                type="number"
                id="price"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter product price"
                required
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="ourPrice"
                className="text-primary font-medium mb-2"
              >
                Our Price
              </label>
              <input
                type="number"
                id="ourPrice"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                value={ourPrice}
                onChange={(e) => setOurPrice(e.target.value)}
                placeholder="Enter our price"
                required
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="trending"
                className="text-primary font-medium mb-2"
              >
                Trending
              </label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="trendingTrue"
                  name="trending"
                  checked={trending === true}
                  onChange={() => setTrending(true)}
                />
                <label htmlFor="trendingTrue" className="ml-2">
                  True
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="trendingFalse"
                  name="trending"
                  checked={trending === false}
                  onChange={() => setTrending(false)}
                />
                <label htmlFor="trendingFalse" className="ml-2">
                  False
                </label>
              </div>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="productImages"
                className="text-primary font-medium mb-2"
              >
                Product Images
              </label>
              <input
                type="file"
                id="productImages"
                multiple
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="block mt-4 px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50"
          >
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateProduct;
