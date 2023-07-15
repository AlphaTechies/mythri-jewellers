import React, { useEffect } from "react";
import { fetchProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Trending = () => {
  const dispatch=useDispatch();
  const products=useSelector((store)=>store.products.products);
  useEffect(()=>{
    const fetchResult=async()=>{
     try{
        await dispatch(fetchProducts());
        console.log(products);
     }catch(error){
      console.log(error.message);
     }
    };
    fetchResult();
  },[dispatch])
  return (
    <div className="mx-auto bg-primary rounded-lg w-full max-w-7xl items-center space-y-4 px-2 md:px-6 lg:px-8 py-10 md:space-y-0">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-secondary mb-4">
          Trending Products
        </h2>
        <p className="text-lg text-secondary">
          Explore the latest trending jewelry designs.
        </p>
      </div>
      <div className="grid grid-cols-2 py-10 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.filter((item)=>item.trending).map((product, index) => (
          <div
            key={index}
            className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 rounded-md bg-gradient-to-t from-secondary to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-primary">
                {product.name}
              </h1>
              <p className="mt-2 text-sm text-primary">{product.description}</p>
              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-primary">
                Shop Now &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
