import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const categories = [
  {
    name: "Category-1",
    image: "/categories/category-1.webp",
  },
  {
    name: "Category-2",
    image: "/categories/category-2.webp",
  },
  {
    name: "Category-3",
    image: "/categories/category-3.webp",
  },
  {
    name: "Category-4",
    image: "/categories/category-4.webp",
  },
  {
    name: "Category-5",
    image: "/categories/category-5.webp",
  },
  {
    name: "Category-6",
    image: "/categories/category-6.webp",
  },
  {
    name: "Category-7",
    image: "/categories/category-7.webp",
  },
  {
    name: "Category-8",
    image: "/categories/category-8.webp",
  },
  {
    name: "Category-9",
    image: "/categories/category-9.webp",
  },
  {
    name: "Category-10",
    image: "/categories/category-10.webp",
  },
];

const Categories = () => {
  return (
    <div className="cursor-pointer mx-3 md:mx-10 mt-3">
      <h2 className="text-center font-semibold text-lg m-6 text-primary">Explore our Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          categories.map((category,index)=>{
            return(
              <div key={index} className="flex items-center justify-center flex-col gap-3">
                <div className="lg:hover:scale-110 duration-500 cursor-pointer">
                  <img src={category.image} alt={category.name} className=""/>
                </div>
                <p>{category.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
    // <div className="mt-6">
    //   <div className="">
    //     <Splide
    //       options={{
    //         rewind: true,
    //         speed: "1000",
    //         arrows: true,
    //         interval: 3000,
    //         autoplay: true,
    //         perPage: 5,
    //       }}
    //     >
    //       {categories.map((category, index) => {
    //         return (
    //           <SplideSlide
    //             key={index}
    //             className="flex items-center justify-center flex-col gap-4"
    //           >
    //             <div className="lg:hover:scale-110 duration-500 cursor-pointer">
    //               <img src={category.image} alt={category.name} className="" />
    //             </div>
    //             <p>{category.name}</p>
    //           </SplideSlide>
    //         );
    //       })}
    //     </Splide>
    //   </div>
    // </div>
  );
};

export default Categories;
