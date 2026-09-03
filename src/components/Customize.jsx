
import React from "react";
import { allimage } from "./data";
import { FaCartArrowDown, FaHeart, FaStar } from "react-icons/fa";

export default function Customize({  searchTerm = "", addToCart}) {
  const customizeProducts = allimage.filter(
    (item) => item.category === "customize"&& item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-slate-950 pt-24 sm:pt-28 pb-10 px-3 sm:px-5 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6 sm:mb-10">
          Customize Keychains
        </h1>

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

          {customizeProducts.map((item) => (

            <div
              key={item.id}
              className="
                bg-white dark:bg-slate-900
                rounded-xl sm:rounded-2xl
                overflow-hidden
                shadow-md hover:shadow-xl
                transition-all duration-300
                hover:-translate-y-1
                sm:hover:-translate-y-2
              "
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-full
                    h-36
                    sm:h-48
                    md:h-56
                    lg:h-64
                    object-cover
                    hover:scale-105
                    sm:hover:scale-110
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
                    text-gray-700 dark:text-white
                    p-2 sm:p-3
                    rounded-full
                    shadow
                    text-sm sm:text-base
                    hover:text-red-500
                    transition
                  "
                >
                  <FaHeart />
                </button>

              </div>

              {/* Details */}
              <div className="p-2.5 sm:p-4">

                {/* Name */}
                <h2
                  className="
                    text-xs
                    sm:text-base
                    md:text-lg
                    font-semibold
                    text-gray-900 dark:text-white
                    line-clamp-2
                    min-h-[32px]
                    sm:min-h-[48px]
                    md:min-h-[56px]
                  "
                >
                  {item.name}
                </h2>

                {/* Rating */}
                <div
                  className="
                    flex items-center
                    gap-0.5 sm:gap-1
                    text-yellow-400
                    my-2 sm:my-3
                    text-xs sm:text-base
                  "
                >
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                  <span className="
                    text-gray-500 dark:text-gray-400
                    ml-1 sm:ml-2
                    text-xs sm:text-sm
                  ">
                    4.8
                  </span>
                </div>

                {/* Price */}
                <p className="
                  text-base
                  sm:text-xl
                  md:text-2xl
                  font-bold
                  text-gray-900 dark:text-white
                  mb-2 sm:mb-4
                ">
                  ₹{item.price}
                </p>

                {/* Add To Cart */}
         <button
  onClick={() => addToCart(item)}
  className="
    w-full
    bg-gray-800
    hover:bg-gray-600
    text-white
    py-3 rounded-xl
    flex justify-center items-center gap-2
    transition
  "
>
  <FaCartArrowDown />
  Add To Cart
</button>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

