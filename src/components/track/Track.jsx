import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Track() {
  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-blue-500 mb-4">
              Benefits of Shopping at Dinaco
            </h1>

            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                <img
                  className="aspect-[1/1] w-full"
                  src="money.webp"
                  alt="Money Back Gurantee"
                  loading="lazy"
                ></img>
              </div>
              <div className="flex-grow">
                <h2 className="text-blue-500 text-lg title-font font-medium mb-3">
                  7-Day Money-Back Guarantee
                </h2>
                <p className="leading-relaxed text-base text-gray-500">
                  With our 7-day money-back guarantee, you can shop with
                  confidence. If you're not completely satisfied with your
                  purchase, simply reach out to us within seven days for a full
                  refund, no questions asked. Your satisfaction is our priority.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                <img
                  className="aspect-[1/1] w-full"
                  src="/service.webp"
                  alt="24/7 Service"
                  loading="lazy"
                ></img>
              </div>
              <div className="flex-grow">
                <h2 className="text-blue-500 text-lg title-font font-medium mb-3">
                  24/7 Customer Service
                </h2>
                <p className="leading-relaxed text-base text-gray-500">
                  Our 24/7 customer service team is always here to assist you,
                  day or night. We're dedicated to providing prompt and
                  efficient support whenever you need it, ensuring a seamless
                  experience for our valued customers.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                <img
                  className="aspect-[1/1] w-full"
                  src="/love.webp"
                  alt="1 YEAR BRAND WARRANTY"
                  loading="lazy"
                ></img>
              </div>
              <div className="flex-grow">
                <h2 className="text-blue-500 text-lg title-font font-medium mb-3">
                  1 Year Brand Warranty
                </h2>
                <p className="leading-relaxed text-base text-gray-500">
                  Our brand warranty ensures your peace of mind. With every
                  purchase, you receive comprehensive coverage, protecting your
                  investment and ensuring satisfaction with our products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Track;
