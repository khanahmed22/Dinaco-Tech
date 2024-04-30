import React, { useContext, useEffect, useState } from "react";
import MyContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Modal from "../../components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/cartSlice";
import { Toaster, toast } from "sonner";

function Cart() {
  const context = useContext(MyContext);
  const { mode } = context;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Item deleted from cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [totalAmout, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp += parseInt(cartItem.price);
    });
    setTotalAmount(temp);
  }, [cartItems]);

  const shipping = parseInt(100);
  const grandTotal = shipping + totalAmout;

  return (
    <Layout>
      {cartItems.length > 0 ? (
        <div
          className="h-full bg-gray-100 pt-5 mb-[60%] "
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
            <div className="rounded-lg md:w-2/3 ">
              {cartItems.map((item, index) => {
                const { title, price, description, imageUrl } = item;
                return (
                  <div
                    key={index}
                    className="justify-between mb-6 rounded-lg border drop-shadow-xl bg-white p-6 sm:flex sm:justify-start"
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    <img
                      src={imageUrl}
                      alt="product-image"
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2
                          className="text-lg font-bold text-gray-900"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          {title}
                        </h2>
                        <p
                          className="mt-1 text-xs font-semibold text-gray-700"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          ${price}
                        </p>
                      </div>
                      <div
                        onClick={() => deleteCart(item)}
                        className="cursor-pointer mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
                      >
                        <ion-icon size="large" name="trash-outline"></ion-icon>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3"
              style={{
                backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <div className="mb-2 flex justify-between">
                <p
                  className="text-gray-700"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Subtotal
                </p>
                <p
                  className="text-gray-700"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ${totalAmout}
                </p>
              </div>
              <div className="flex justify-between">
                <p
                  className="text-gray-700"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Shipping
                </p>
                <p
                  className="text-gray-700"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ${shipping}
                </p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between mb-3">
                <p
                  className="text-lg font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total
                </p>
                <div>
                  <p
                    className="mb-1 text-lg font-bold"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    ${grandTotal}
                  </p>
                </div>
                <Toaster richColors position="bottom-center" />
              </div>
              <Modal />
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-30 mt-10 flex items-center justify-center">
          <svg
            fill="#4287f5"
            width="80"
            height="80"
            version="1.1"
            id="lni_lni-cart"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 64 64"
            style={{ enableBackground: "new 0 0 64 64" }}
            xml:space="preserve"
          >
            <g>
              <path
                d="M37.1,47.8c-4,0-7.2,3.2-7.2,7.2c0,4,3.2,7.2,7.2,7.2c4,0,7.2-3.2,7.2-7.2C44.3,51.1,41,47.8,37.1,47.8z M37.1,57.8
              c-1.5,0-2.7-1.2-2.7-2.7c0-1.5,1.2-2.7,2.7-2.7c1.5,0,2.7,1.2,2.7,2.7C39.8,56.5,38.5,57.8,37.1,57.8z"
              />
              <path
                d="M18.1,47.8c-4,0-7.2,3.2-7.2,7.2c0,4,3.2,7.2,7.2,7.2s7.2-3.2,7.2-7.2C25.3,51.1,22,47.8,18.1,47.8z M18.1,57.8
              c-1.5,0-2.7-1.2-2.7-2.7c0-1.5,1.2-2.7,2.7-2.7c1.5,0,2.7,1.2,2.7,2.7C20.8,56.5,19.6,57.8,18.1,57.8z"
              />
              <path
                d="M58.2,1.8h-5.4c-2.4,0-4.5,1.8-4.8,4.2l-1.6,11.5H6.9c-1,0-2,0.5-2.7,1.3c-0.6,0.8-0.9,1.9-0.6,2.9c0,0.1,0,0.1,0,0.2
              l6.2,18.7c0.4,1.4,1.7,2.4,3.2,2.4h27.6c3.7,0,6.9-2.8,7.4-6.5l4.2-29.9c0-0.2,0.2-0.3,0.4-0.3h5.4c1.2,0,2.3-1,2.3-2.3
              S59.4,1.8,58.2,1.8z M43.7,35.8c-0.2,1.5-1.5,2.6-3,2.6H13.9L8.5,22h37.2L43.7,35.8z"
              />
            </g>
          </svg>

          <p className="text-lg text-blue-500 font-bold">
            Your cart is empty...
          </p>
        </div>
      )}
    </Layout>
  );
}

export default Cart;
