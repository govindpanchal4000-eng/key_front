import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosLogIn } from "react-icons/io";
import {
  FaCartArrowDown,
  FaBars,
  FaTimes,
   FaHeart 
} from "react-icons/fa";
import DarkMode from "./Darkmode";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar({
  cart = [],
  wishlist=[],
  searchTerm = "",
  setSearchTerm,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate();

  // ================= NAV LINK =================
  const navClass = ({ isActive }) =>
    `relative transition-all duration-300 ${
      isActive
        ? "text-white after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-white"
        : "text-white/90 hover:text-white"
    }`;

  // ================= SEARCH =================
  const handleSearch = (e) => {
    const value = e.target.value;

    setSearchTerm(value);

    // Product search page open
    if (value.trim() !== "") {
      navigate("/search");
    }
  };

  // ================= LOGO =================
  const handleLogo = () => {
    navigate("/");
    setSearchOpen(false);
    setSearchTerm("");
  };

  return (
    <nav
      className="
        fixed top-0 left-0 z-50
        w-full h-20
        bg-black/70
        backdrop-blur-xl
        border-b border-white/10
        shadow-lg shadow-black/30
        text-white
      "
    >

      {/* ================= MAIN NAVBAR ================= */}
      <div className="h-full flex items-center justify-between px-4 sm:px-6 md:px-10">

        {/* ================= LOGO ================= */}
        <div
          onClick={handleLogo}
          className="
            relative
            w-14 h-14
            sm:w-16 sm:h-16
            flex items-center justify-center
            rounded-full
            bg-white/10
            backdrop-blur-md
            border border-white/30
            shadow-lg
            hover:bg-white/20
            hover:border-white/60
            hover:scale-110
            transition-all duration-300
            cursor-pointer
          "
        >
          {/* Glow */}
          <div className="absolute inset-1 rounded-full bg-white/10 blur-md"></div>

          <img
            src="https://res.cloudinary.com/yeqfmgur/image/upload/v1784305483/ChatGPT_Image_Jul_17_2026_09_51_06_PM_mrqwsf.png"
            alt="Keychain Logo"
            className="
              relative
              w-11 h-11
              sm:w-13 sm:h-13
              object-contain
              drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]
            "
          />
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 text-lg font-semibold">

          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/all" className={navClass}>
            All
          </NavLink>

          <NavLink to="/couple" className={navClass}>
            Couple
          </NavLink>

          <NavLink to="/metal" className={navClass}>
            Metal
          </NavLink>

          <NavLink to="/customize" className={navClass}>
            Customize
          </NavLink>

        </div>

        {/* ================= RIGHT ICONS ================= */}
        <div className="flex items-center gap-3 sm:gap-5 text-xl sm:text-2xl">

          {/* ================= SEARCH ICON ================= */}
          <button
            onClick={() => setSearchOpen((prev) => !prev)}
            className="
              cursor-pointer
              hover:text-gray-300
              hover:scale-110
              transition
            "
            title="Search"
          >
            <CiSearch />
          </button>

          {/* ================= SEARCH BOX ================= */}
          {searchOpen && (
            <div
              className="
                absolute
                top-[74px]
                right-3
                sm:right-10
                w-52
                sm:w-64
                bg-black/95
                backdrop-blur-xl
                border border-white/20
                rounded-lg
                shadow-xl
                p-2
              "
            >
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search keychains..."
                autoFocus
                className="
                  w-full
                  px-3 py-2
                  text-sm
                  rounded-md
                  bg-white/10
                  border border-white/20
                  text-white
                  placeholder:text-gray-400
                  outline-none
                  focus:border-white/50
                "
              />
            </div>
          )}

          {/* ================= LOGIN ================= */}
          <NavLink
            to="/login"
            className="
              hover:text-gray-400
              hover:scale-110
              transition
            "
            title="Login"
          >
            <IoIosLogIn />
          </NavLink>

          {/* ================= CART ================= */}
          <NavLink
            to="/cart"
            className="
              relative
              flex items-center
              cursor-pointer
              hover:text-gray-400
              hover:scale-110
              transition
            "
            title="Cart"
          >
            <FaCartArrowDown />

            {/* Cart Count */}
            {cart.length > 0 && (
              <span
                className="
                  absolute
                  -top-3
                  -right-3
                  bg-red-500
                  text-white
                  text-xs
                  font-bold
                  w-5 h-5
                  rounded-full
                  flex items-center justify-center
                "
              >
                {cart.reduce(
                  (total, item) =>
                    total + (item.quantity || 1),
                  0
                )}
              </span>
            )}
          </NavLink>
          <NavLink
  to="/wishlist"
  className="relative hover:text-gray-400 transition"
>
  <FaHeart />

  {wishlist.length > 0 && (
    <span className="
      absolute -top-3 -right-3
      bg-red-500 text-white
      text-xs w-5 h-5
      rounded-full
      flex items-center justify-center
    ">
      {wishlist.length}
    </span>
  )}
</NavLink>

          {/* ================= DARK MODE ================= */}
          <DarkMode />

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              md:hidden
              hover:text-gray-300
              hover:scale-110
              transition
            "
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div
          className="
            md:hidden
            bg-black/95
            backdrop-blur-xl
            border-t border-white/10
            px-5 py-3
            shadow-xl
          "
        >

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={navClass}
          >
            <div className="py-3 border-b border-white/10">
              Home
            </div>
          </NavLink>

          <NavLink
            to="/all"
            onClick={() => setMenuOpen(false)}
            className={navClass}
          >
            <div className="py-3 border-b border-white/10">
              All
            </div>
          </NavLink>

          <NavLink
            to="/couple"
            onClick={() => setMenuOpen(false)}
            className={navClass}
          >
            <div className="py-3 border-b border-white/10">
              Couple
            </div>
          </NavLink>

          <NavLink
            to="/metal"
            onClick={() => setMenuOpen(false)}
            className={navClass}
          >
            <div className="py-3 border-b border-white/10">
              Metal
            </div>
          </NavLink>

          <NavLink
            to="/customize"
            onClick={() => setMenuOpen(false)}
            className={navClass}
          >
            <div className="py-3">
              Customize
            </div>
          </NavLink>

        </div>
      )}

    </nav>
  );
}