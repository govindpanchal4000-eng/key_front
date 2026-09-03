import React from "react";
import { allimage } from "../components/data";
import {
  FaCartArrowDown,
  FaHeart,
  FaStar,
} from "react-icons/fa";

export default function All({
  searchTerm = "",
  addToCart,
  wishlist = [],
  toggleWishlist,
}) {
  // Search filter
  const filteredProducts = allimage.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-slate-950 py-8 sm:py-10 px-3 sm:px-5 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-bold
            text-center
            text-gray-900 dark:text-white
            mb-7 sm:mb-10
          "
        >
          All Keychains
        </h1>

        {/* No Products */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">

            <div className="text-5xl mb-4">
              🔍
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              No products found
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Try searching another keychain.
            </p>

          </div>
        ) : (

          /* Products */
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-3
              sm:gap-5
              md:gap-7
            "
          >

            {filteredProducts.map((item) => {

              const isWishlisted = wishlist.some(
                (product) => product.id === item.id
              );

              return (
                <div
                  key={item.id}
                  className="
                    bg-white dark:bg-slate-900
                    rounded-xl sm:rounded-2xl
                    overflow-hidden
                    shadow-md
                    hover:shadow-2xl
                    transition duration-300
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
                        h-40
                        sm:h-52
                        md:h-60
                        lg:h-64
                        object-cover
                        hover:scale-110
                        transition duration-500
                      "
                    />

                    {/* Wishlist */}
                    <button
                      onClick={() => toggleWishlist(item)}
                      className="
                        absolute
                        top-2 right-2
                        sm:top-3 sm:right-3
                        bg-white dark:bg-slate-800
                        p-1.5 sm:p-2
                        rounded-full
                        shadow
                        transition
                        hover:scale-110
                      "
                    >
                      <FaHeart
                        className={`
                          text-sm sm:text-base
                          ${
                            isWishlisted
                              ? "text-red-500"
                              : "text-gray-700 dark:text-white"
                          }
                        `}
                      />
                    </button>

                  </div>

                  {/* Details */}
                  <div className="p-3 sm:p-4">

                    {/* Name */}
                    <h2
                      className="
                        text-sm
                        sm:text-base
                        md:text-lg
                        font-semibold
                        text-gray-900 dark:text-white
                        line-clamp-2
                        min-h-[40px]
                        sm:min-h-[56px]
                      "
                    >
                      {item.name}
                    </h2>

                    {/* Rating */}
                    <div
                      className="
                        flex
                        items-center
                        gap-0.5
                        sm:gap-1
                        text-yellow-400
                        my-2
                        text-xs sm:text-sm
                      "
                    >
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />

                      <span
                        className="
                          text-gray-500 dark:text-gray-400
                          ml-1 sm:ml-2
                          text-xs sm:text-sm
                        "
                      >
                        4.8
                      </span>
                    </div>

                    {/* Price */}
                    <p
                      className="
                        text-lg
                        sm:text-xl
                        md:text-2xl
                        font-bold
                        text-gray-900 dark:text-white
                        mb-3 sm:mb-4
                      "
                    >
                      ₹{item.price}
                    </p>

                    {/* Add To Cart */}
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
                      <span>Add To Cart</span>
                    </button>

                  </div>

                </div>
              );
            })}

          </div>
        )}

      </div>

    </section>
  );
}