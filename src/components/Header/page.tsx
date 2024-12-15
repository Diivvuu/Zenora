import React, { useState, useEffect, useRef } from "react";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null); // Reference to the menu

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

  // Handle closing the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(
          "button[aria-label='Toggle menu']"
        )
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="mt-[1rem] fixed top-0 w-full z-50">
      {/* Overlay blur */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"></div>
      )}

      <div className="section-padding-sm">
        <nav
          className={`py-2 md:py-3 px-12 transition-colors duration-500 rounded-full ${
            isScrolled ? "bg-black bg-opacity-40" : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between h-16 relative z-50">
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
              ref={menuRef}
              className={`fixed top-0 right-0 h-full w-[60%] bg-black bg-opacity-70 text-white flex flex-col items-start justify-center space-y-8 px-8 transition-transform duration-300 transform gap-10 ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              } md:static md:flex-row md:space-y-0 md:space-x-6 md:transform-none md:bg-transparent md:h-auto md:w-auto`}
            >
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`relative font-normal large-font-size after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-transparent after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:transition-all after:duration-300 hover:after:w-full ${
                      isScrolled || isMenuOpen
                        ? "highlighted-text-light"
                        : "text-white"
                    }`}
                  >
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
