import React from "react";
import categories from "../utils/categories";

const Categories = () => {
  return (
    <div className="mx-auto w-full max-w-7xl items-center space-y-4 px-2 py-10 md:space-y-0">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Explore Our Jewelry Categories
        </h2>
        <p className="text-lg text-primary">
          Discover a wide range of exquisite jewelry pieces for every occasion.
        </p>
      </div>
      <div className="grid grid-cols-2 py-10 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
          >
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
              <p className="mt-2 text-sm text-secondary">
                {category.description}
              </p>
              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-secondary">
                Shop Now &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
