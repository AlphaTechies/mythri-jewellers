import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { Rings } from "react-loader-spinner";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";
import { addProduct } from "../../redux/adminSlice";
import { fetchProducts } from "../../redux/productSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);

  const [name, setName] = useState("");
  const [weight, setWeight] = useState();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [trending, setTrending] = useState("");
  const [price, setPrice] = useState();
  const [ourPrice, setOurPrice] = useState();
  const formData = new FormData();

  const handleFileChange = (e) => {
    const myFiles = e.target.files;
    const selectedFiles = [];

    Object.keys(myFiles).forEach((key) => {
      selectedFiles.push(myFiles.item(key));
    });

    setProductImages(selectedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    formData.append("name", name);
    formData.append("weight", weight);
    formData.append("price", price);
    formData.append("ourPrice", ourPrice);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("trending", trending);

    productImages.forEach((file) => {
      formData.append("productImages", file);
    });

    console.log("formData", formData.getAll("productImages"));

    try {
      await dispatch(addProduct(formData));
      dispatch(fetchProducts());
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="bg-secondary">
      <div className="pt-24 max-w-7xl mx-auto px-8">
        <h2 className="mb-4 text-xl font-bold text-primary">Add Product</h2>
        <form onSubmit={handleSubmit} encType="mulipart">
          <div className="grid gap-4 sm:grid-cols-2 bg-white border-2 border-primary rounded-lg p-4 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-primary"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-white border border-black text-black text-sm rounded-lg focus:outline-none focus:ring-primary-600 focus:border-primary-600 placeholder-gray-500 caret-black block w-full p-2.5"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type product name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-black"
              >
                Category
              </label>
              <select
                id="category"
                className="bg-white border border-black text-black text-sm rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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

            <div>
              <label
                htmlFor="trending"
                className="block mb-2 text-sm font-medium text-black"
              >
                Trending
              </label>
              <input
                type="radio"
                name="trending"
                onClick={(e) => setTrending(e.target.value)}
                value="true"
              />
              True
              <input
                type="radio"
                name="trending"
                onClick={(e) => setTrending(e.target.value)}
                value="false"
              />
              False
            </div>

            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-black"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-white border border-black text-black text-sm rounded-lg focus:outline-none focus:ring-primary-600 focus:border-primary-600 placeholder-gray-500 caret-black block w-full p-2.5"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Product Price"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="ourPrice"
                className="block mb-2 text-sm font-medium text-black"
              >
                Our Price
              </label>
              <input
                type="number"
                name="ourPrice"
                id="ourPrice"
                className="bg-white border border-black text-black text-sm rounded-lg focus:outline-none focus:ring-primary-600 focus:border-primary-600 placeholder-gray-500 caret-black block w-full p-2.5"
                value={ourPrice}
                onChange={(e) => setOurPrice(e.target.value)}
                placeholder="Book author"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="weight"
                className="block mb-2 text-sm font-medium text-black"
              >
                Weight
              </label>
              <input
                type="number"
                name="weight"
                id="weight"
                className="bg-white border border-black text-black text-sm rounded-lg focus:outline-none focus:ring-primary-600 focus:border-primary-600 placeholder-gray-500 caret-black block w-full p-2.5"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Product Weight"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-black"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="8"
                className="block p-2.5 w-full text-sm text-black bg-white rounded-lg border border-black placeholder-gray-500 caret-black focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Your description here"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="productImages"
                className="block mb-2 text-sm font-medium text-black"
              >
                Product Images
              </label>
              <input
                type="file"
                name="productImages"
                id="productImages"
                multiple
                className="bg-white border border-black text-black text-sm rounded-lg focus:outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-white bg-primary rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
