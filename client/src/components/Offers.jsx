import products from "../utils/products";

const Offers = () => {
  const discountedProducts = products.filter(
    (product) => product.discountedPrice
  );

  return (
    <div className="mx-3 md:mx-10 mt-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Special Offers</h2>
        <p className="text-lg text-primary">
          Take advantage of these exclusive discounts on selected products.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {discountedProducts.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-lg"
          >
            <div className="w-32 h-32 lg:hover:scale-110 duration-500">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <p className="text-center text-lg font-semibold text-primary mt-2">
              {product.name}
            </p>
            <div className="flex items-center justify-center mt-2">
              <p className="text-sm text-gray-500 line-through">
                {product.price}
              </p>
              <p className="ml-2 text-xl font-semibold text-primary">
                {product.discountedPrice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
