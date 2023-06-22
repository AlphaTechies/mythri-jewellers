import { useState } from "react";
import products from "../utils/products";

const Trending = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="mx-3 md:mx-10 mt-6 bg-primary p-6 rounded-lg">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-secondary mb-4">
          Trending Products
        </h2>
        <p className="text-lg text-secondary">
          Explore the latest trending jewelry designs.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-3 p-4 rounded-lg cursor-pointer ${
              selectedProduct === product ? "bg-secondary" : ""
            }`}
            onClick={() => handleProductClick(product)}
          >
            <div className="w-32 h-32 md:w-52 md:h-36 lg:w-72 lg:h-36 px-2 lg:hover:scale-110 duration-500">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <p
              className={`text-lg font-semibold ${
                selectedProduct === product ? "text-primary" : "text-secondary"
              }`}
            >
              {product.name}
            </p>
            <p
              className={`text-center text-lg font-semibold ${
                selectedProduct === product ? "text-primary" : "text-secondary"
              }`}
            >
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
