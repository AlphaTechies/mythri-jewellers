import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
const Categories = () => {
  const dispatch=useDispatch();
  const products=useSelector((store)=>store.products.products);
  useEffect(()=>{
    const fetchResult=async()=>{
     try{
        await dispatch(fetchProducts());
     }catch(error){
      console.log(error.message);
     }
    };
    fetchResult();
  },[dispatch])
  return (
    <div id="categories" className="mx-auto max-w-7xl text-primary py-12">
      <div className="space-y-4">
        <div className="px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-2xl pb-8">Categories</h3>
          {/* {items.length === 0 && <NoResults />} */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((category, index) => (
              <Link
                to={`/category/${category.name}`}
                key={index}
                className="bg-primary text-secondary group cursor-pointer rounded-xl border p-3 space-y-4"
              >
                {/* Image & actions */}
                <div className="rounded-xl bg-gray-100 relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-center rounded-md w-full"
                  />
                </div>
                {/* Description */}
                <div>
                  <p className="font-semibold text-lg">{category.name}</p>
                </div>
                <div>Shop Now</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
