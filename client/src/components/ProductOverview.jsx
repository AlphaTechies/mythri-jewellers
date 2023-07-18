import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProduct } from "../redux/productSlice";
import { useLocation } from "react-router-dom";
import ImageSlider from "./ImageSlider";

export function ProductOverview() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const params = useParams();
  const { categoryName, productId } = params;
  const { product, loading, productImages } = useSelector(
    (store) => store.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchResult = async () => {
      try {
        await dispatch(fetchProduct({ id: productId }));
        console.log(product);
      } catch (error) {
        console.log(error.message);
      }
    };
    console.log("Loading");
    fetchResult();
  }, [productId, dispatch]);
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="mx-auto max-w-7xl text-primary px-4 md:px-8 2xl:px-16">
      {/* <div className="pt-8">
        <div className="flex items-center">
          <ol className="flex w-full items-center overflow-hidden">
            <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
              <Link to="/">Home</Link>
            </li>
            <li className="text-body mt-0.5 text-base">/</li>
            <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
              <Link className="capitalize" to={`/category/${categoryName}`}>
                {categoryName}
              </Link>
            </li>
            <li className="text-body mt-0.5 text-base">/</li>
            <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
              <Link
                className="capitalize"
                to={`/category/${categoryName}/${productId}`}
              >
                {product.name}
              </Link>
            </li>
          </ol>
        </div>
      </div> */}
      <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
        {productImages.length > 0 && (
          <div className="col-span-5">
            <ImageSlider data={productImages} />
          </div>
        )}

        <div className="col-span-4 pt-8 lg:pt-10">
          <div className="mb-7 border-b border-primary pb-7">
            <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
              {product.name}
            </h2>
            <p className="text-body text-sm leading-6 lg:text-base lg:leading-8">
              {product.description}
            </p>
            <div className="mt-5 flex items-center ">
              <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                {product.ourPrice} INR
              </div>
              <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                {product.price} INR
              </span>
            </div>
          </div>
          <div className="border-b border-gray-300 pb-3  ">
            <div className="mb-4">
              <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                Ring Size
              </h3>
              <ul className="sizes -mr-3 flex flex-wrap">
                {["5", "6", "7", "8"].map((size) => (
                  <li
                    key={size}
                    className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm"
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="py-6 ">
            <ul className="space-y-5 pb-1 text-sm">
              <li>
                <span className="text-heading inline-block pr-2 font-semibold">
                  SKU:
                </span>
                N/A
              </li>
              <li>
                <span className="text-heading inline-block pr-2 font-semibold">
                  Category:
                </span>
                <a
                  className="hover:text-heading transition hover:underline"
                  href="#"
                >
                  {product.category}
                </a>
              </li>
              <li className="productTags">
                <span className="text-heading inline-block pr-2 font-semibold">
                  Tags:
                </span>
                <a
                  className="hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline"
                  href="#"
                >
                  Rings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;
