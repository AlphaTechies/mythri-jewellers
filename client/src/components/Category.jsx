import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Filter from "./Filter";
import Navbar from "./Navbar";
import MobileFilter from "./MobileFilter";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { useLocation } from "react-router-dom";

const Category = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { categoryName } = useParams();
  const data = [
    {
      id: 1,
      name: "Medium",
    },
    {
      id: 2,
      name: "Large",
    },
    {
      id: 3,
      name: "Small",
    },
    {
      id: 4,
      name: "Extra small",
    },
  ];
  const products = useSelector((store) => store.products.products);
  const dispatch = useDispatch();
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
  console.log(products);
  return (
    <div className="">
      <Navbar />
      <div className="pt-24">
        {/* <h1 className="text-center text-lg p-4 font-semibold">
          {categoryName}
        </h1> */}
        <div className="mx-auto max-w-7xl">
          <div className="px-4 sm:px-6 lg:px-8 pb-24">
            <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
              <MobileFilter sizes={data} colors={data} />
              <div className="hidden lg:block">
                <Filter valueKey="sizeId" name="Sizes" data={data} />
                <Filter valueKey="colorId" name="Colors" data={data} />
              </div>
              <div className="mt-6 lg:col-span-4 lg:mt-0">
                {products.length === 0 && (
                  <div className="text-black font-bold flex justify-center">
                    No Results
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {products
                    .filter((item) => item.category === categoryName)
                    .map((item, index) => (
                      <Link
                        key={index}
                        to={`/category/${categoryName}/${item._id}`}
                      >
                        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
                          {/* Image & actions */}
                          <div>
                            <img
                              src={item.images.filter((img) => img != null)[0]}
                              alt={item.name}
                              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
                            />
                            <div className="p-4">
                              <h1 className="inline-flex items-center text-primary text-lg font-semibold">
                                {item.name}
                              </h1>
                              <p className="mt-3 text-sm text-gray-600">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Excepturi, debitis?
                              </p>
                              <div className="mt-4">
                                <span className="mb-2 mr-2 inline-block rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold text-primary">
                                  #{item.category}
                                </span>
                              </div>

                              <div className="mt-5 flex items-center space-x-2">
                                <span className="block text-sm text-primary font-semibold">
                                  Size :{" "}
                                </span>
                                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                                  {item.weight} Grams
                                </span>
                              </div>
                              <button
                                type="button"
                                className="mt-4 w-full rounded-sm bg-primary px-2 py-1.5 text-sm font-semibold text-secondary shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                              >
                                More Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
