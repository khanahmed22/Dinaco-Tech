import React, { Fragment, useContext, useState } from "react";
import MyContext from "../../context/data/myContext";
import { Link, NavLink } from "react-router-dom";
import { Dialog, Transition, Menu } from "@headlessui/react";

import { useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Navbar() {
  const context = useContext(MyContext);
  const { mode, toggleMode } = context;
  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user ? user.user.email : null;
  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="bg-white sticky top-0 z-50">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <ion-icon name="close"></ion-icon>
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <NavLink
                    to={"/"}
                    className="-m-2 block p-2 font-medium text-gray-900"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={"/allproducts"}
                    className="-m-2 block p-2 font-medium text-gray-900 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Our Products
                  </NavLink>
                  {user ? (
                    <NavLink
                      to={"/order"}
                      style={{ color: mode === "dark" ? "white" : "" }}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      My Orders
                    </NavLink>
                  ) : (
                    ""
                  )}
                  {user?.user?.email === "ahmedkhan.mak2030@gmail.com" ? (
                    <NavLink
                      to={"/dashboard"}
                      className="-m-2 block p-2 font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Admin
                    </NavLink>
                  ) : (
                    ""
                  )}
                  {user ? (
                    <a
                      onClick={logout}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Logout
                    </a>
                  ) : (
                    <NavLink
                      to={"/login"}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Sign In
                    </NavLink>
                  )}
                  <Link
                    to={"/"}
                    className="-m-2 block p-2 font-medium cursor-pointer"
                    style={{
                      backgroundColor: mode === "dark" ? "#282c34" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    {userEmail && (
                      <p className="text-sm font-medium  ml-auto">
                        {userEmail}
                      </p>
                    )}
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p
          className="flex h-10 items-center justify-center bg-blue-500 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{
            backgroundColor: mode === "dark" ? "rgb(30 58 138)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          Get Free Delivery on orders over $100 😄
        </p>

        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl "
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="">
            <div className="flex items-center justify-between h-16">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              <div className="ml-4 flex lg:ml-0">
                <Link to="/" className="flex">
                  <div className="flex items-center">
                    <svg
                      id="logo-86"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="ccustom"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z"
                        fill="#007DFC"
                      ></path>
                      <path
                        className="ccustom"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 5.16562e-07C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 5.4439e-06 10L5.00679e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.81469e-06L10 5.16562e-07Z"
                        fill="#007DFC"
                      ></path>
                    </svg>
                    &nbsp;
                    <label className="font-bold text-blue-400">Dinaco</label>
                  </div>
                </Link>
              </div>

              <div className="flex items-center ml-auto space-x-6">
                <div className="hidden lg:flex lg:space-x-6">
                  <NavLink
                    to={"/"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Our Products
                  </NavLink>
                  {user ? (
                    <NavLink
                      to={"/order"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      My Orders
                    </NavLink>
                  ) : (
                    <NavLink
                      to={"/login"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Sign In
                    </NavLink>
                  )}
                  {user?.user?.email === "ahmedkhan.mak2030@gmail.com" ? (
                    <NavLink
                      to={"/dashboard"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Admin
                    </NavLink>
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative flex items-center max-md:hidden">
                  {userEmail && (
                    <div className="ml-6 relative" 
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="My Account"
                    data-tooltip-place="top"
                    data-tooltip-variant="info">
                      <Menu>
                        <Menu.Button className="text-sm font-medium">
                          <ion-icon
                            className="ACCOUNT"
                            name="person"
                          ></ion-icon>
                        </Menu.Button>
                        <Menu.Items className="absolute top-7 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none">
                          <Menu.Item
                            style={{
                              backgroundColor: mode === "dark" ? "#282c34" : "",
                              color: mode === "dark" ? "white" : "",
                            }}
                          >
                            <span className="block px-4 py-2 text-sm text-gray-700">
                              {userEmail}
                            </span>
                          </Menu.Item>
                          <Menu.Item
                            style={{
                              backgroundColor:
                                mode === "dark" ? "rgb(180,68,24)" : "",
                              color: mode === "dark" ? "white" : "",
                            }}
                          >
                            {({ active }) => (
                              <a
                                className={` px-4 py-2 text-sm text-gray-700 font-bold flex ${
                                  active ? "bg-red-500 text-white rounded" : ""
                                }`}
                                href="/"
                                onClick={logout}
                              >
                                Log Out
                                <ion-icon
                                  size="small"
                                  name="log-out"
                                ></ion-icon>
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  )}
                </div>

                <div className="flex">
                  <button
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Change Dark/Light Mode"
                    onClick={toggleMode}
                    id="DisplayChangeButton"
                    data-tooltip-place="top"
                    data-tooltip-variant="info"
                  >
                    {mode === "light" ? (
                      <ion-icon
                        name="sunny-outline"
                        id="lightMode"
                        aria-label="LightMode"
                      ></ion-icon>
                    ) : (
                      <ion-icon
                        name="moon"
                        id="darkMode"
                        aria-label="DarkMode"
                      ></ion-icon>
                    )}
                  </button>
                </div>

                <div className="ml-4 flow-root lg:ml-6" data-tooltip-id="my-tooltip"
                    data-tooltip-content="My Cart"
                    data-tooltip-place="top"
                    data-tooltip-variant="info">
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <ion-icon name="cart"></ion-icon>
                    <div
                      className=" text-xs bg-black px-1.5 text-white border-solid rounded-lg absolute top-12 right-5 max-md:right-1 ml-2  font-medium  group-"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {cartItems.length}
                    </div>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Tooltip id="my-tooltip" />
    </div>
  );
}

export default Navbar;
