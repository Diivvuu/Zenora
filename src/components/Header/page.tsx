import React, { useState, useEffect } from "react";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define menu items
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  // Handle scrolling to toggle navbar background color
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Fixed container */}
      <div className="section-padding">
        <nav
          className={`transition-colors duration-500 rounded-full ${
            isScrolled ? "bg-black bg-opacity-40" : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between h-16 relative">
            {/* Logo */}
            <a href="#" className="text-white text-2xl font-bold">
              Logo
            </a>

            {/* Hamburger Menu */}
            <button
              className="flex flex-col gap-1 w-8 h-8 justify-center items-center md:hidden z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-1 w-8 bg-white rounded transform transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-1 w-8 bg-white rounded transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-1 w-8 bg-white rounded transform transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>

            {/* Nav Links */}
            <ul
              className={`fixed top-0 right-0 h-full w-64 bg-gray-700 text-white flex flex-col items-start justify-center space-y-8 px-8 transition-transform duration-300 transform ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              } md:static md:flex-row md:space-y-0 md:space-x-6 md:transform-none md:bg-transparent md:h-auto md:w-auto`}
            >
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-yellow-400">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
