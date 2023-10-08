"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CustomLink } from "../link";

const menuItems = [
  { name: "Shop", href: "/shop" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact", href: "#" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      // Disable scrolling on the body when the mobile menu is opened
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the mobile menu is closed
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <header
      className={`p-3 ${
        isScrolled ? "bg-baseDark" : ""
      } sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className={`font-bold text-xl ${
            isScrolled ? "text-white" : "text-baseDark"
          }`}
        >
          BRAND
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className={`${isScrolled ? "text-white" : "text-baseDark"}`}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-4 absolute left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2">
        {menuItems.map((item) => (
          <CustomLink
            key={item.name}
            href={item.href}
            className={`font-semibold ${
              isScrolled ? "hover:text-gray-300" : "hover:text-gray-700"
            } ${isScrolled ? "text-white" : "text-baseDark"}`}
          >
            {item.name}
          </CustomLink>
        ))}
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-basePrimary flex justify-center items-center z-50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-4 right-4">
          <button onClick={toggleMenu} className="text-baseDark">
            <FaTimes size="1.5em" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 text-center">
          {menuItems.map((item) => (
            <CustomLink
              key={item.name}
              href={item.href}
              className={`hover:underline text-baseDark`}
            >
              {item.name}
            </CustomLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
