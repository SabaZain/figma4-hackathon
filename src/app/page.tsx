import React from 'react'
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import LatestProducts from './components/LatestProducts';
import ShopexOffer from './components/ShopexOffer';
import UniqueFeatures from './components/UniqueFeatures';
import TrendingProducts from './components/TrendingProducts';
import DiscountItems from './components/DiscountItems';
import FullImage from './components/FullImage';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div>
    <Topbar />
    <Navbar />
    <Hero />
    <FeaturedProducts />
    <LatestProducts />
    <ShopexOffer />
    <UniqueFeatures />
    <TrendingProducts />
    <DiscountItems />
    <FullImage />
    <Blogs />
    <Footer />
    </div>
  )
}

export default HomePage;
