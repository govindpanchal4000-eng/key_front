import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function DarkMode() {
  const [dark, setDark] = useState(false);

  const changeMode = () => {
    setDark(!dark);

    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={changeMode}
      className="
        p-2
        rounded-full
        bg-gray-200 dark:bg-gray-800
        text-gray-800 dark:text-yellow-400
        hover:scale-110
        transition-all duration-300
      "
    >
      {dark ? (
        <MdLightMode size={25} />
      ) : (
        <MdDarkMode size={25} />
      )}
    </button>
  );
}