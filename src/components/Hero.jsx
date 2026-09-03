```jsx
import React from "react";
import { allimage } from "./data.js";
import { FaCartArrowDown, FaHeart, FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="w-full  relative min-h-screen bg-gray-100 dark:bg-slate-950 py-8 sm:py-10 px-3 sm:px-5 md:px-8 transition-colors duration-300">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-7 sm:mb-10">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Trending Keychains
          </h1>

          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 px-2">
            Discover unique and stylish keychains for every personality.
          </p>

        </div>

        {/* Products */}
        <div className="
          grid
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-3
          sm:gap-5
          md:gap-7
        ">

          {allimage.map((item) => (

            <div
              key={item.id}
              className="
                bg-white dark:bg-slate-900
                border border-gray-200 dark:border-slate-800
                rounded-xl sm:rounded-2xl
                shadow-md dark:shadow-black/30
                hover:shadow-2xl
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-1 sm:hover:-translate-y-2
                group
              "
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-full
                    h-40
                    sm:h-52
                    md:h-60
                    lg:h-64
                    object-cover
                    group-hover:scale-110
                    transition duration-500
                  "
                />

                {/* Wishlist */}
                <button
                  className="
                    absolute
                    top-2 right-2
                    sm:top-3 sm:right-3
                    bg-white dark:bg-slate-800
                    text-gray-700 dark:text-gray-200
                    p-1.5 sm:p-2
                    rounded-full
                    shadow
                    hover:bg-gray-500
                    hover:text-white
                    transition
                  "
                >
                  <FaHeart className="text-sm sm:text-base" />
                </button>

                {/* Discount */}
                <span className="
                  absolute top-2 left-2
                  sm:top-3 sm:left-3
                  bg-gray-500
                  text-white
                  text-[10px] sm:text-xs
                  px-2 sm:px-3
                  py-1
                  rounded-full
                ">
                  20% OFF
                </span>

              </div>

              {/* Details */}
              <div className="p-3 sm:p-4">

                {/* Product Name */}
                <h2 className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  font-semibold
                  text-gray-800 dark:text-white
                  line-clamp-2
                  min-h-[40px]
                  sm:min-h-[56px]
                ">
                  {item.name}
                </h2>

                {/* Rating */}
                <div className="
                  flex items-center
                  text-yellow-400
                  my-2
                  text-xs sm:text-sm
                ">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-300 dark:text-gray-600" />

                  <span className="
                    text-gray-500 dark:text-gray-400
                    text-xs sm:text-sm
                    ml-1 sm:ml-2
                  ">
                    (4.8)
                  </span>

                </div>

                {/* Price */}
                <div className="
                  flex
                  flex-wrap
                  items-center
                  gap-1 sm:gap-3
                  mb-3 sm:mb-4
                ">

                  <span className="
                    text-lg
                    sm:text-xl
                    md:text-2xl
                    font-bold
                    text-gray-800 dark:text-white
                  ">
                    ₹{item.price}
                  </span>

                  <span className="
                    text-xs
                    sm:text-sm
                    text-gray-400 dark:text-gray-500
                    line-through
                  ">
                    ₹{Number(item.price) + 200}
                  </span>

                </div>

                {/* Cart Button */}
                <button
                  className="
                    w-full
                    bg-gray-800 dark:bg-white
                    text-white dark:text-gray-900
                    hover:bg-gray-600 dark:hover:bg-gray-200
                    py-2 sm:py-3
                    rounded-lg sm:rounded-xl
                    flex items-center justify-center
                    gap-1 sm:gap-2
                    transition duration-300
                    font-semibold
                    text-xs sm:text-sm md:text-base
                  "
                >
                  <FaCartArrowDown />
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
```
