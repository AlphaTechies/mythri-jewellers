import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Filter from "./Filter";
import Navbar from "./Navbar";
import MobileFilter from "./MobileFilter";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";

const Category = () => {
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
  const products=useSelector((store)=>store.products.products);
  const dispatch=useDispatch();
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
    <div className="">
      <Navbar />
      <div className="pt-24">
        <h1 className="text-center text-lg p-4 font-semibold">
          {categoryName}
        </h1>
        <div className="mx-auto max-w-7xl">
          <div className="px-4 sm:px-6 lg:px-8 pb-24">
            <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
              <MobileFilter sizes={data} colors={data} />
              <div className="hidden lg:block">
                <Filter valueKey="sizeId" name="Sizes" data={data} />
                <Filter valueKey="colorId" name="Colors" data={data} />
              </div>
              <div className="mt-6 lg:col-span-4 lg:mt-0">
                {/* {products.length === 0 && <NoResults />} */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {products.filter((item) => item.category === categoryName).map((item, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <Link to={`/category/${categoryName}/${item.name}`}>
                      <div
                        key={index}
                        className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
                      >
                        {/* Image & actions */}
                        <div className="rounded-xl bg-gray-100 relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="object-center rounded-md w-full"
                          />
                        </div>
                        {/* Description */}
                        <div>
                          <p className="font-semibold text-lg">{item.name}</p>
                        </div>
                        <div>Shop Now</div>
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
