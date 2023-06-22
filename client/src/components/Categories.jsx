import { useState } from "react";
import categories from "../utils/categories";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="mx-3 md:mx-10 mt-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Explore Our Jewelry Categories
        </h2>
        <p className="text-lg text-primary">
          Discover a wide range of exquisite jewelry pieces for every occasion.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex items-center justify-center flex-col gap-3 p-4 rounded-lg cursor-pointer ${
              selectedCategory === category ? "bg-primary" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            <div className="w-32 h-32 lg:hover:scale-110 duration-500">
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <p
              className={`text-center text-lg font-semibold ${
                selectedCategory === category
                  ? "text-secondary"
                  : "text-primary"
              }`}
            >
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
