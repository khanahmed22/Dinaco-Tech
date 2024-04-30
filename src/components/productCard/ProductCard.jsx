import React, { useContext, useEffect } from "react";
import MyContext from "../../context/data/myContext";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function ProductCard() {
  const context = useContext(MyContext);
  const { mode, product, searchkey, filterType, filterPrice } = context;
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Check Out Our BestSellers!
          </h1>
          <div className="h-1 w-20 bg-blue-600 rounded"></div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {product
            .filter((obj) => obj.title.toLowerCase().includes(searchkey))
            .filter((obj) => obj.category.toLowerCase().includes(filterType))
            .filter((obj) => obj.price.includes(filterPrice))
            .slice(0, location.pathname === "/" ? 4 : product.length)
            .map((item, index) => {
              const { title, price, imageUrl } = item;
              return (
                <>
                  <div
                    key={index}
                    className="cursor-pointer  rounded-lg shadow-md bg-white overflow-hidden hover:shadow-lg transition duration-300 ease-in-out md:w-full" // Responsive sizing
                    onClick={() =>
                      (window.location.href = `/productinfo/${item.id}`)
                    }
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    <img
                      className="w-full h-48 object-contain p-2"
                      loading="lazy"
                      src={imageUrl}
                      alt="productImage"
                    />
                    <div className="p-5">
                      <h5 className=" font-bold mb-2 text-lg">{title}</h5>
                      <p className=" text-base mb-3">${price}</p>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
