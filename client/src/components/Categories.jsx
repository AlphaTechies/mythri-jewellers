import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import categories from "../utils/categories";
const Categories = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.products);
  console.log(products);
  useEffect(() => {
    const fetchResult = async () => {
      try {
        await dispatch(fetchProducts());
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchResult();
  }, [dispatch]);
  return (
    <div id="categories" className="mx-auto max-w-7xl text-primary py-12">
      <div className="space-y-4">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Explore Our Jewelry Categories
            </h2>
            <p className="text-lg text-primary">
              Discover a wide range of exquisite jewelry pieces for every
              occasion.
            </p>
          </div>

          {/* {items.length === 0 && <NoResults />} */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
