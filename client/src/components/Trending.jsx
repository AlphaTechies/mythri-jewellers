import { useEffect } from "react";
import { fetchProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import categories from "../utils/categories";
import { Link } from "react-router-dom";

const Trending = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.products);
  useEffect(() => {
    const fetchResult = async () => {
      try {
        await dispatch(fetchProducts());
        console.log(products);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchResult();
  }, [dispatch]);
  return (
    <div
      id="trending"
      className="mx-auto rounded-lg w-full max-w-7xl items-center space-y-4 px-2 md:px-6 lg:px-8 py-10 md:space-y-0 text-primary"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Trending Products</h2>
        <p className="text-lg">Explore the latest trending jewelry designs.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-10 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {categories.map((category, index) => (
          <Link to={`/category/${category.name}`} key={index} className="">
            {/* Image & actions */}
            <div className="rounded-xl bg-gray-100 relative">
              <img
                src={category.image}
                alt={category.name}
                className="z-0 h-full w-full rounded-md object-cover"
              />
              <div className="absolute inset-0 rounded-md bg-gradient-to-t from-primary to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-secondary">
                  {category.name}
                </h1>
                {/* <p className="mt-2 text-sm text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi, debitis?
                    </p> */}
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-secondary">
                  Shop Now &rarr;
                </button>
              </div>

              <div>Shop Now</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Trending;
