import React from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout({ cart }) {
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Cart empty
  if (cart.length === 0) {
    return (
      <section className="min-h-screen bg-gray-100 dark:bg-slate-950 pt-28 px-4">
        <div className="max-w-xl mx-auto text-center py-20">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Your cart is empty 🛒
          </h1>

          <button
            onClick={() => navigate("/all")}
            className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-xl"
          >
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-slate-950 pt-28 pb-10 px-4">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Customer Details */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 shadow">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
              Customer Details
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-slate-800 dark:text-white outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-slate-800 dark:text-white outline-none"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-slate-800 dark:text-white outline-none"
              />

              <textarea
                placeholder="Delivery Address"
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-slate-800 dark:text-white outline-none"
              />

            </div>

          </div>

          {/* Order Summary */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 shadow h-fit">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
              Order Summary
            </h2>

            <div className="space-y-4">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded-lg"
                    />

                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        {item.name}
                      </p>

                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Qty: {item.quantity}
                      </p>
                    </div>

                  </div>

                  <p className="font-bold text-gray-900 dark:text-white">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}

            </div>

            <div className="border-t dark:border-gray-700 mt-5 pt-5 flex justify-between">

              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                Total
              </span>

              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ₹{total}
              </span>

            </div>

            <button
              onClick={() => alert("Order placed successfully! 🎉")}
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
              Place Order
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}