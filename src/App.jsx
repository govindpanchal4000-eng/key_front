import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/home/Home";

import All from "./components/All";
import Couple from "./components/Couple";
import Metal from "./components/Metal";
import Customize from "./components/Customize";

import Cart from "./components/Cart";
import Login from "./components/Login";
import Search from "./components/Search";
import Wishlist from "./components/Whistlist";
import Checkout from "./components/Checkout";
import Orders from "./components/Order";
export default function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [wishlist, setWishlist] = useState([]);
const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleWishlist = (product) => {
  setWishlist((prevWishlist) => {
    const exists = prevWishlist.some(
      (item) => item.id === product.id
    );

    if (exists) {
      return prevWishlist.filter(
        (item) => item.id !== product.id
      );
    }

    return [...prevWishlist, product];
  });
};

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // REMOVE FROM CART
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  return (
    <>
      <Navbar
        cart={cart}
         wishlist={wishlist}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ALL */}
        <Route
          path="/all"
          element={
            <All
              searchTerm={searchTerm}
              addToCart={addToCart}
                    wishlist={wishlist}
      toggleWishlist={toggleWishlist}
            />
          }
        />

        {/* COUPLE */}
        <Route
          path="/couple"
          element={
            <Couple
              searchTerm={searchTerm}
              addToCart={addToCart}
                    wishlist={wishlist}
      toggleWishlist={toggleWishlist}
            />
          }
        />

        {/* METAL */}
        <Route
          path="/metal"
          element={
            <Metal
              searchTerm={searchTerm}
              addToCart={addToCart}
                    wishlist={wishlist}
      toggleWishlist={toggleWishlist}
            />
          }
        />

        {/* CUSTOMIZE */}
        <Route
          path="/customize"
          element={
            <Customize
              searchTerm={searchTerm}
              addToCart={addToCart}
                    wishlist={wishlist}
      toggleWishlist={toggleWishlist}
            />
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              removeFromCart={removeFromCart}
                    wishlist={wishlist}
      toggleWishlist={toggleWishlist}
            />
          }
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
               setIsLoggedIn={setIsLoggedIn}
        />

        {/* SEARCH */}
        <Route
          path="/search"
          element={
            <Search
              searchTerm={searchTerm}
              addToCart={addToCart}
                    wishlist={wishlist}
      toggleWishlist={toggleWishlist}
            />
            
          }
        />
        <Route
  path="/wishlist"
  element={
    <Wishlist
      wishlist={wishlist}
      toggleWishlist={toggleWishlist}
      addToCart={addToCart}
    />
  }
/>
<Route
  path="/checkout"
  element={
    isLoggedIn ? (
      <Checkout
        cart={cart}
        setCart={setCart}
      />
    ) : (
      <Login
        setIsLoggedIn={setIsLoggedIn}
      />
    )
  }
/>
<Route
path="/Order" element={<order/>}
/>

      </Routes>
    </>
  );
}