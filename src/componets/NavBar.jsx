import React, { useEffect, useState } from "react";
// react icons
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // togle function

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { link: "Home", path: "#" },
    { link: "About", path: "#" },
    { link: "Services", path: "#" },
    { link: "Contact", path: "#" },
  ];

  return (
    <div
      className={`w-full ${
        isSticky ? "bg-home" : "bg-home"
      } fixed  left-0 right-0`}
    >
      <div
        className={`flex justify-between py-2 px-20 bg-cont font-Jost ${
          isSticky ? "hidden" : "block"
        }`}
      >
        <h1>SOFTWARE ENGINEER</h1>
        <h1>
          TEXT OR TALK • <a href="tel:+94779299587">+94 779299587</a>
        </h1>
      </div>
      <nav className='py-4 bg-nav-bar lg:px-14 px-4 ${isSticky ? "sticky top-0 right-0 left-0 border-b transition-all bg-gray-4 duration-300 : "" }'>
        <div className="flex justify-between items-center text_base gap-8  border-b-2 border-white ">
          {/* border-b-2 border-black  */}
          <Link
            to="/AboutPage"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <span className="text-3xl font-EB-Garamond pl-6 ">
              Danushan Ravendran
            </span>
          </Link>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <li
                key={path}
                className="block text-base text-black hover:text-gray-1 first:font-medium"
              >
                <Link to={`/${path}`}>{link}</Link>
              </li>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="https://www.instagram.com/dhanu_thazan_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-black bg-transparent  hover:text-gray-100 duration-150">
                <FaInstagram className="w-6 h-6" />
              </button>
            </a>
            <a
              href="https://www.facebook.com/danu.deviil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-black  hover:text-gray-100 font-bold text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                <FaFacebookF className="w-6 h-6" />
              </button>
            </a>
          </div>

          {/* menu for btn mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-1 focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-gray-1" />
              ) : (
                <FaBars className="h-6 w-6 text-gray-1" />
              )}
            </button>
          </div>
        </div>
        {/* nav for mobile */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-white ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <li
              key={path}
              className="block text-base text-black hover:text-yello first:font-medium"
            >
              <a href={`/${path}`}>{link}</a>
            </li>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
