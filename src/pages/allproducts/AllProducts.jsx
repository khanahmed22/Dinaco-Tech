import React, { useContext, useEffect } from "react";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function Allproducts() {
  const context = useContext(MyContext);
  const {
    mode,
    product,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
  } = context;

  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Filter
        setSearchkey={setSearchkey}
        setFilterType={setFilterType}
        setFilterPrice={setFilterPrice}
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1
              className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Best Tech Products Delivered!
            </h1>
            <div className="h-1 w-20 bg-blue-600 rounded"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product
              .filter((obj) =>
                obj.title.toLowerCase().includes(searchkey.toLowerCase())
              )
              .filter((obj) => obj.category.toLowerCase().includes(filterType))
              .filter((obj) => obj.price.includes(filterPrice))
              .map((item, index) => {
                const { title, price, description, imageUrl, id } = item;
                return (
                  <div
                    onClick={() =>
                      (window.location.href = `/productinfo/${id}`)
                    }
                    key={index}
                    className="p-4"
                  >
                    <div
                      className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                      style={{
                        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      <div className="flex justify-center cursor-pointer">
                        <img
                          className="object-contain rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                          src={imageUrl}
                          alt="product"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5 border-t-2">
                        <h1
                          className="title-font text-lg font-medium text-gray-900 mb-3"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          {title}
                        </h1>
                        <p
                          className="leading-relaxed mb-3"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          ${price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {product
            .filter((obj) =>
              obj.title.toLowerCase().includes(searchkey.toLowerCase())
            )
            .filter((obj) => obj.category.toLowerCase().includes(filterType))
            .filter((obj) => obj.price.includes(filterPrice)).length === 0 && (
            <div className="flex flex-col items-center mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#199be2"
                  d="M35.983,32.448l-3.536,3.536l7.87,7.87c0.195,0.195,0.512,0.195,0.707,0l2.828-2.828	c0.195-0.195,0.195-0.512,0-0.707L35.983,32.448z"
                />
                <radialGradient
                  id="KGt2acGa95QyN2j07oBX6a"
                  cx="20.024"
                  cy="20.096"
                  r="19.604"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".693" stopColor="#006185" />
                  <stop offset=".921" stopColor="#35c1f1" />
                </radialGradient>
                <polygon
                  fill="url(#KGt2acGa95QyN2j07oBX6a)"
                  points="31.601,28.065 28.065,31.601 32.448,35.983 35.983,32.448"
                />
                <linearGradient
                  id="KGt2acGa95QyN2j07oBX6b"
                  x1="8.911"
                  x2="31.339"
                  y1="8.911"
                  y2="31.339"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#a3ffff" />
                  <stop offset=".223" stopColor="#9dfbff" />
                  <stop offset=".53" stopColor="#8bf1ff" />
                  <stop offset=".885" stopColor="#6ee0ff" />
                  <stop offset="1" stopColor="#63daff" />
                </linearGradient>
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  fill="url(#KGt2acGa95QyN2j07oBX6b)"
                />
              </svg>
              <p className="mt-5 text-lg font-bold">No Results</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Allproducts;
