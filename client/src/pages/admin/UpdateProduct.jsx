import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../redux/adminSlice";
import { fetchProducts, handleProductChange } from "../../redux/productSlice";
import { fetchProduct } from "../../redux/productSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Rings } from "react-loader-spinner";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store.products);
  console.log(product);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    const product = async () => {
      try {
        await dispatch(fetchProduct({ id: productId }));
      } catch (error) {
        console.log(error.message);
      }
    };

    product();
  }, [dispatch, productId]);

  const [currProduct, setCurrProduct] = useState(product);

  const [name, setName] = useState(product.name);
  const [weight, setWeight] = useState(product.weight);
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);
  const [productImages, setProductImages] = useState(product.images || []);
  const [trending, setTrending] = useState(product.trending);
  const [price, setPrice] = useState(product.price);
  const [ourPrice, setOurPrice] = useState(product.ourPrice);

  const handleFileChange = (e) => {
    setProductImages(e.target.files);
  };

  const handleChange = (name, value) => {
    dispatch(handleProductChange({ name, value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", product._id);
    formData.append("name", product.name);
    formData.append("weight", product.weight);
    formData.append("price", product.price);
    formData.append("ourPrice", product.ourPrice);
    formData.append("description", product.description);
    formData.append("category", product.category);
    formData.append("trending", product.trending);

    for (let i = 0; i < productImages.length; i++) {
      formData.append("productImages", productImages[i]);
    }

    try {
      console.log(formData.get("id"));
      await dispatch(updateProduct(formData));
      dispatch(fetchProducts());
      navigate("/admin", { replace: true });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Rings
          height="80"
          width="80"
          color="#523C1E"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      </div>
    );
  }

  return (
    <section className="bg-secondary">
      <div className="py-24 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-primary mb-4">Update Product</h2>
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
                value={product.name}
                onChange={(e) => handleChange("name", e.target.value)}
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
                value={product.category}
                onChange={(e) => handleChange("category", e.target.value)}
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
                value={product.description}
                onChange={(e) => handleChange("description", e.target.value)}
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
                value={product.weight}
                onChange={(e) => handleChange("weight", e.target.value)}
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
                value={product.price}
                onChange={(e) => handleChange("price", e.target.value)}
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
                value={product.ourPrice}
                onChange={(e) => handleChange("ourPrice", e.target.value)}
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
                  checked={product.trending === true}
                  onChange={() => handleChange("trending", true)}
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
                  checked={product.trending === false}
                  onChange={() => handleChange("trending", false)}
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
            Update Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateProduct;
