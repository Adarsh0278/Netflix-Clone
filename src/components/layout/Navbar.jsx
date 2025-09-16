import React, { useState, useEffect, useRef } from "react";
import Images from "../constant/Image";
import { IoSearch } from "react-icons/io5";
import { FaRegBell, FaCaretDown, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLogin(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar flex items-center justify-between px-6 md:px-12 py-4  text-white relative fixed top-0 left-0 right-0 z-50">
      {/* Left Side */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <img src={Images.logo} alt="Logo" className="h-7 cursor-pointer" />

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6">
          {["Home", "Movies", "My List", "TV Shows"].map((link) => (
            <li key={link}>
              <a href="/" className="hover:text-gray-300 transition">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <IoSearch
          className="text-xl cursor-pointer hover:text-gray-300"
          aria-label="Search"
        />
        <p className="cursor-pointer hover:text-gray-300">Children</p>
        <FaRegBell
          className="text-xl cursor-pointer hover:text-gray-300"
          aria-label="Notifications"
        />

        {/* Profile Dropdown */}
        <div
          ref={dropdownRef}
          className="relative flex items-center gap-2 cursor-pointer"
        >
          <img
            src={Images.profile_img}
            alt="Profile"
            className="h-10 w-10 rounded-sm"
            onClick={() => setLogin(!login)}
          />
          <FaCaretDown onClick={() => setLogin(!login)} />

          {login && (
            <div className="absolute top-12 right-0 bg-black border border-gray-700 flex flex-col z-50 w-40 rounded shadow-lg transition duration-200">
              <a href="/" className="px-4 py-2 hover:bg-gray-800">
                Settings
              </a>
              <a href="/" className="px-4 py-2 hover:bg-gray-800">
                Logout
              </a>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <FaTimes
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl cursor-pointer hover:text-gray-300"
            />
          ) : (
            <FaBars
              onClick={() => setIsMenuOpen(true)}
              className="text-2xl cursor-pointer hover:text-gray-300"
            />
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 md:hidden transition-all duration-300">
          {["Home", "Movies", "My List", "TV Shows"].map((link) => (
            <a
              key={link}
              href="/"
              className="py-2 px-20 hover:bg-gray-800 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
