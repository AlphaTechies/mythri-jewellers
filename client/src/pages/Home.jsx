import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Trending from '../components/Trending'
import Offers from '../components/Offers'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Categories/>
        <Trending/>
        <Offers/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home