import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";

import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to="/allproducts" aria-label="Link to Our Products Page">
          <button
            id="SeeMoreButton"
            title="See More Button"
            className=" bg-gray-300 px-5 py-2 rounded-xl mt-9 font-bold"
          >
            See More
          </button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
