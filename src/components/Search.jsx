import React from "react";
import { allimage } from "./data";
import { FaCartArrowDown, FaHeart, FaStar } from "react-icons/fa";

export default function Search({ searchTerm = "", addToCart }) {

  const searchResults = allimage.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-slate-950 pt-28 pb-10 px-3 sm:px-5 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Search Results
        </h1>

        {/* Search text */}
        {searchTerm && (
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
            Results for:{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              "{searchTerm}"
            </span>
          </p>
        )}

        {/* No Search */}
        {!searchTerm ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 dark:text-gray-400">
              🔍 Search for a keychain
            </p>
          </div>
        ) : searchResults.length === 0 ? (

          /* No Results */
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No products found 😔
            </p>
          </div>

        ) : (

          /* Products */
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

            {searchResults.map((item) => (

              <div
                key={item.id}
                className="
                  bg-white dark:bg-slate-900
                  rounded-xl sm:rounded-2xl
                  overflow-hidden
                  shadow-md
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all duration-300
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
                      hover:scale-110
                      transition duration-500
                    "
                  />

                  {/* Wishlist */}
                  <button
                    className="
                      absolute
                      top-2 right-2
                      bg-white dark:bg-slate-800
                      text-gray-700 dark:text-white
                      p-2
                      rounded-full
                      shadow
                      hover:text-red-500
                    "
                  >
                    <FaHeart />
                  </button>

                </div>

                {/* Details */}
                <div className="p-2.5 sm:p-4">

                  <h2 className="
                    text-xs
                    sm:text-base
                    md:text-lg
                    font-semibold
                    text-gray-900 dark:text-white
                    line-clamp-2
                    min-h-[32px]
                    sm:min-h-[48px]
                  ">
                    {item.name}
                  </h2>

                  {/* Rating */}
                  <div className="
                    flex items-center
                    gap-1
                    text-yellow-400
                    my-2
                  ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <span className="
                      text-gray-500
                      dark:text-gray-400
                      ml-1
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
                    mb-3
                  ">
                    ₹{item.price}
                  </p>

                  {/* Cart */}
                  <button
                    onClick={() => addToCart(item)}
                    className="
                      w-full
                      bg-gray-800 dark:bg-white
                      text-white dark:text-gray-900
                      py-2 sm:py-3
                      rounded-lg sm:rounded-xl
                      flex items-center justify-center
                      gap-1 sm:gap-2
                      text-xs sm:text-sm md:text-base
                      font-semibold
                      hover:bg-gray-600
                      dark:hover:bg-gray-200
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

        )}

      </div>

    </section>
  );
}