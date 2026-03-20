import React, { useEffect, useState } from "react";
import { FaXmark, FaBars, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { link: "Home", id: "hero" },
    { link: "About", id: "about" },
    { link: "Projects", id: "work" },
    { link: "Experience", id: "experience" },
    { link: "Contact", id: "contact" },
  ];

  return (
    <div
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? "shadow-md bg-white/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      {/* Main Nav */}
      <nav className="py-4 lg:px-14 px-4">
        <div className="flex justify-between items-center gap-8 border-b-2 border-white/40">
          <Link
            to="hero"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer text-2xl font-semibold flex items-center space-x-3"
          >
            <span className="text-3xl font-EB-Garamond pl-6">Danushan Ravendran</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, id }) => (
              <li key={id} className="text-base text-black first:font-medium">
                <Link
                  to={id}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="cursor-pointer hover:text-blue-600 transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a href="https://www.instagram.com/dhanu_thazan_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 text-black hover:text-blue-600 duration-150" />
            </a>
            <a href="https://www.facebook.com/danu.deviil/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="w-6 h-6 text-black hover:text-blue-600 duration-150" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? <FaXmark className="h-6 w-6 text-gray-800" /> : <FaBars className="h-6 w-6 text-gray-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-white ${isMenuOpen ? "block fixed top-0 right-0 left-0 shadow-lg" : "hidden"}`}>
          {navItems.map(({ link, id }) => (
            <li key={id} className="list-none text-base text-black">
              <Link
                to={id}
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-blue-600 transition-colors block py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
