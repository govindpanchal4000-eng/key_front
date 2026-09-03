import React from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Cart({ cart, setCart, removeFromCart }) {

  // Increase quantity
  const navigate = useNavigate();
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: (item.quantity || 1) - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Total price
  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * (item.quantity || 1),
    0
  );

  // Total items
  const totalItems = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-slate-950 pt-28 pb-10 px-3 sm:px-5">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          My Cart 🛒
        </h1>

        {/* Empty Cart */}
        {cart.length === 0 ? (

          <div className="text-center py-20">

            <div className="text-6xl mb-5">
              🛒
            </div>

            <p className="text-xl text-gray-500 dark:text-gray-400">
              Your cart is empty
            </p>

          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-6">

            {/* ================= PRODUCTS ================= */}
            <div className="lg:col-span-2 space-y-4">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="
                    bg-white dark:bg-slate-900
                    rounded-2xl
                    p-3 sm:p-4
                    flex gap-3 sm:gap-4
                    items-center
                    shadow-md
                  "
                >

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-20 h-20
                      sm:w-28 sm:h-28
                      object-cover
                      rounded-xl
                    "
                  />

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">

                    <h2
                      className="
                        font-semibold
                        text-sm sm:text-lg
                        text-gray-900 dark:text-white
                        line-clamp-2
                      "
                    >
                      {item.name}
                    </h2>

                    {/* Price */}
                    <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mt-1">
                      ₹{item.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-3">

                      {/* Minus */}
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="
                          w-8 h-8
                          flex items-center justify-center
                          bg-gray-200 dark:bg-slate-700
                          text-gray-800 dark:text-white
                          rounded-lg
                          hover:bg-gray-300
                          dark:hover:bg-slate-600
                          transition
                        "
                      >
                        <FaMinus size={11} />
                      </button>

                      {/* Quantity */}
                      <span className="font-semibold text-gray-900 dark:text-white min-w-[20px] text-center">
                        {item.quantity || 1}
                      </span>

                      {/* Plus */}
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="
                          w-8 h-8
                          flex items-center justify-center
                          bg-gray-800
                          text-white
                          rounded-lg
                          hover:bg-gray-600
                          transition
                        "
                      >
                        <FaPlus size={11} />
                      </button>

                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="
                        mt-3
                        flex items-center gap-2
                        text-red-500
                        hover:text-red-700
                        text-sm
                        transition
                      "
                    >
                      <FaTrash />
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* ================= SUMMARY ================= */}
            <div
              className="
                bg-white dark:bg-slate-900
                rounded-2xl
                p-5 sm:p-6
                shadow-md
                h-fit
              "
            >

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
                Order Summary
              </h2>

              {/* Items */}
              <div className="flex justify-between text-gray-600 dark:text-gray-300 mb-4">

                <span>
                  Items
                </span>

                <span className="font-semibold">
                  {totalItems}
                </span>

              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">

                <div className="flex justify-between">

                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ₹{total}
                  </span>

                </div>

              </div>

              {/* Checkout */}
              <button
              onClick={() => navigate("/checkout")}
                className="
                  w-full mt-6
                  bg-gray-800
                  hover:bg-gray-600
                  text-white
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                Checkout
              </button>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}