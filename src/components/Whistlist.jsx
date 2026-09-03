import React from "react";
import { FaCartArrowDown, FaHeart, FaTrash } from "react-icons/fa";

export default function Wishlist({
  wishlist = [],
  toggleWishlist,
  addToCart,
}) {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-slate-950 pt-28 pb-10 px-3 sm:px-5 md:px-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          My Wishlist ❤️
        </h1>

        {wishlist.length === 0 ? (
          <div className="text-center py-20">

            <div className="text-6xl mb-5">
              🤍
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Your Wishlist is Empty
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Add your favorite keychains here.
            </p>

          </div>
        ) : (

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

            {wishlist.map((item) => (

              <div
                key={item.id}
                className="
                  bg-white dark:bg-slate-900
                  rounded-xl sm:rounded-2xl
                  overflow-hidden
                  shadow-md
                  hover:shadow-xl
                  transition-all duration-300
                "
              >

                {/* Image */}
                <div className="relative">

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
                    "
                  />

                  {/* Remove Wishlist */}
                  <button
                    onClick={() => toggleWishlist(item)}
                    className="
                      absolute
                      top-2 right-2
                      bg-white dark:bg-slate-800
                      p-2
                      rounded-full
                      shadow
                      text-red-500
                      hover:scale-110
                      transition
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

                  <p className="
                    text-base
                    sm:text-xl
                    md:text-2xl
                    font-bold
                    text-gray-900 dark:text-white
                    my-3
                  ">
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