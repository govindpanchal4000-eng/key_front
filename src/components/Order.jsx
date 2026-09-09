import React from "react";

export default function Orders() {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-slate-950 pt-28 pb-10 px-4">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          My Orders 📦
        </h1>

        {/* Total Orders */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-md mb-6">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Total Orders:
            <span className="ml-2 text-green-600">
              {orders.length}
            </span>
          </p>
        </div>

        {/* Orders */}
        {orders.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 text-center">
            <p className="text-gray-500">
              No orders placed yet.
            </p>
          </div>
        ) : (
          <div className="space-y-5">

            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-md"
              >

                <div className="flex flex-col sm:flex-row sm:justify-between gap-3">

                  <div>
                    <h2 className="font-bold text-lg text-gray-900 dark:text-white">
                      Order #{order.id}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      {order.date}
                    </p>
                  </div>

                  <span className="w-fit bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {order.status}
                  </span>

                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">

                  <p className="font-semibold text-gray-900 dark:text-white">
                    Customer: {order.customer.name}
                  </p>

                  <p className="text-gray-500">
                    Phone: {order.customer.phone}
                  </p>

                  <p className="text-gray-500">
                    Address: {order.customer.address}
                  </p>

                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">

                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between py-2"
                    >
                      <span className="text-gray-700 dark:text-gray-300">
                        {item.name} × {item.quantity || 1}
                      </span>

                      <span className="font-semibold text-gray-900 dark:text-white">
                        ₹
                        {Number(item.price) *
                          (item.quantity || 1)}
                      </span>
                    </div>
                  ))}

                  <div className="flex justify-between border-t mt-3 pt-3">
                    <span className="font-bold text-gray-900 dark:text-white">
                      Order Total
                    </span>

                    <span className="font-bold text-xl text-gray-900 dark:text-white">
                      ₹{order.total}
                    </span>
                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </section>
  );
}