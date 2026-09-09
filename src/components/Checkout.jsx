import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * (item.quantity || 1),
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const placeOrder = () => {
    // Check customer details
    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.address.trim()
    ) {
      setError("Please fill in all details before placing the order.");
      return;
    }

    // Get existing orders
    const oldOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    // Create order
    const newOrder = {
      id: Date.now(),
      customer: {
        name: form.name,
        phone: form.phone,
        address: form.address,
      },
      items: cart,
      total: total,
      status: "Placed",
      date: new Date().toLocaleString(),
    };

    // Save order
    localStorage.setItem(
      "orders",
      JSON.stringify([...oldOrders, newOrder])
    );

    // Show success message
    setSuccess(
      `Order placed successfully! Order #${newOrder.id}`
    );

    // Clear cart
    setCart([]);

    // Go to Orders page after 2 seconds
    setTimeout(() => {
      navigate("/orders");
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-slate-950 pt-28 pb-10 px-4">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Checkout
        </h1>

        {/* Success Message */}
        {success && (
          <div className="mb-6 bg-green-100 dark:bg-green-900/30 border border-green-400 text-green-700 dark:text-green-400 rounded-xl p-4 text-center font-semibold">
            ✅ {success}
            <br />
            <span className="text-sm font-normal">
              Your order has been added to the order list.
            </span>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">

          {/* Customer Details */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-md">

            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
              Customer Details
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-slate-800 dark:text-white outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-slate-800 dark:text-white outline-none"
              />

              <textarea
                name="address"
                placeholder="Delivery Address"
                rows="4"
                value={form.address}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-slate-800 dark:text-white outline-none"
              />

              {/* Error */}
              {error && (
                <p className="text-red-500 text-sm font-medium">
                  ⚠️ {error}
                </p>
              )}

              <button
                onClick={placeOrder}
                disabled={success}
                className="w-full bg-gray-800 hover:bg-gray-600 disabled:bg-gray-400 text-white py-3 rounded-xl font-semibold transition"
              >
                Place Order
              </button>

            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-md h-fit">

            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
              Order Summary
            </h2>

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-3 border-b border-gray-200 dark:border-gray-700 py-3"
              >
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity || 1}
                  </p>
                </div>

                <p className="font-bold text-gray-900 dark:text-white">
                  ₹
                  {Number(item.price) *
                    (item.quantity || 1)}
                </p>
              </div>
            ))}

            <div className="flex justify-between mt-6">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Total
              </span>

              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ₹{total}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}