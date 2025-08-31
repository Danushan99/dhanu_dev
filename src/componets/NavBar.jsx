import React, { useEffect, useState } from "react";
import { FaXmark, FaBars, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/aboutpage" },
    { link: "Services", path: "/services" },
    { link: "Contact", path: "/contact" },
  ];

  return (
    <div className={`w-full fixed top-0 left-0 right-0 z-50 ${isSticky ? "shadow-md bg-transparent" : "bg-transparent"}`}>
      {/* Top Info Bar */}
      <div className={`flex justify-between py-2 px-20 font-Jost ${isSticky ? "hidden" : "block"}`}>
        <h1>SOFTWARE ENGINEER</h1>
        <h1>
          TEXT OR TALK • <a href="tel:+94779299587">+94 77 929 9587</a>
        </h1>
      </div>

      {/* Main Nav */}
      <nav className="py-4 bg-transparent lg:px-14 px-4">
        <div className="flex justify-between items-center gap-8 border-b-2 border-white">
          <Link to="/" className="text-2xl font-semibold flex items-center space-x-3">
            <span className="text-3xl font-EB-Garamond pl-6">Danushan Ravendran</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <li key={path} className="text-base text-black hover:text-gray-1 first:font-medium">
                <Link to={path}>{link}</Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a href="https://www.instagram.com/dhanu_thazan_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 text-black hover:text-gray-100 duration-150" />
            </a>
            <a href="https://www.facebook.com/danu.deviil/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="w-6 h-6 text-black hover:text-gray-100 duration-150" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-1 focus:outline-none">
              {isMenuOpen ? <FaXmark className="h-6 w-6 text-gray-1" /> : <FaBars className="h-6 w-6 text-gray-1" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-white ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <li key={path} className="text-base text-black hover:text-yellow-500 first:font-medium">
              <Link to={path} onClick={() => setIsMenuOpen(false)}>{link}</Link>
            </li>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
