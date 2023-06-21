import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const images = [
  "/herobanners/banner-1.jpg",
  "/herobanners/banner-3.jpg",
  "/herobanners/banner-4.jpg",
  "/herobanners/banner-5.jpg",
  "/herobanners/banner-6.jpg",
];

const Hero = () => {
  return (
    <div className="">
      <div className="hidden md:block cursor-pointer mx-10 mt-3">
        <Splide
          options={{
            rewind: true,
            speed: "1000",
            arrows: true,
            interval: 3000,
            autoplay: true,
          }}
          aria-label="React Splide Example"
          data-splide-interval="1000"
        >
          {images.map((image, index) => {
            return (
              <SplideSlide key={index}>
                <img src={image} alt="Banner" />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className="block md:hidden mx-3 mt-1">
        <Splide
          options={{
            rewind: true,
            speed: "1000",
            arrows: false,
            
            interval: 3000,
            autoplay: true,
          }}
          aria-label="React Splide Example"
          data-splide-interval="1000"
        >
          {images.map((image, index) => {
            return (
              <SplideSlide key={index}>
                <img src={image} alt="Banner" />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Hero;
