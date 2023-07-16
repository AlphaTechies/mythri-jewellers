import products from "../utils/products";
import { Link } from "react-router-dom";

const Offers = () => {
  const discountedProducts = products.filter(
    (product) => product.discountedPrice
  );

  return (
    <div
      id="offers"
      className="mx-auto w-full max-w-7xl items-center space-y-4 px-2 py-10 md:space-y-0"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Special Offers</h2>
        <p className="text-lg text-primary">
          Take advantage of these exclusive discounts on selected products.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-10 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {discountedProducts.map((product, index) => (
          <Link key={index}>
            <div className="rounded-xl bg-secondary relative">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full rounded-md"
              />
              <div className="absolute inset-0 rounded-md bg-gradient-to-t from-primary to-transparent"></div>

              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-secondary">
                  {product.name}
                </h1>
                <div className="flex items-center justify-center text-secondary mt-2">
                  <p className="text-sm line-through">{product.price}</p>
                  <p className="ml-2 text-xl font-semibold">
                    {product.discountedPrice}
                  </p>
                </div>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-secondary">
                  Shop Now &rarr;
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Offers;
