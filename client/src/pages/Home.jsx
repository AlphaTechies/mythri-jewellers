import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Trending from "../components/Trending";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SpecialOffers from "../components/SpecialOffers";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <Trending />
      <SpecialOffers />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
