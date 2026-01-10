import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { services } from "../data/services";
import { categories } from "../data/products";
import Logo from "../assets/logo.jpg";

export default function Header() {
  const [fabricationOpen, setFabricationOpen] = useState(false);
  const [galleriesOpen, setGalleriesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleServiceClick = (e, id) => {
    e.preventDefault();
    setFabricationOpen(false);

    if (location.pathname === "/fabrication-services") {
      // Already on the page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Navigate to the page with hash
      window.location.href = `/fabrication-services#${id}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-15 md:h-15 bg-white rounded-full flex items-center justify-center">
              <img
                src={Logo}
                alt="Mc Stone Logo"
                className="w-10 h-10 md:w-15 md:h-15 rounded-full"
              />
            </div>
            <span className="text-white text-xl font-bold">McStone</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-white hover:text-red-500 transition border-b-2 border-red-500 pb-1"
            >
              Home
            </Link>

            <div className="relative">
              <Link
                to="/fabrication-services"
                className="text-white hover:text-red-500 transition flex items-center gap-1"
                onMouseEnter={() => setFabricationOpen(true)}
                onMouseLeave={() => setFabricationOpen(false)}
              >
                Fabrication Services
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              {/* Dropdown Menu */}
              {fabricationOpen && (
                <div
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => setFabricationOpen(true)}
                  onMouseLeave={() => setFabricationOpen(false)}
                >
                  <div className="w-64 bg-white rounded-lg shadow-xl py-2">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/fabrication-services#${service.id}`}
                        onClick={(e) => handleServiceClick(e, service.id)}
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <Link
                to="/galleries"
                className="text-white hover:text-red-500 transition flex items-center gap-1"
                onMouseEnter={() => setGalleriesOpen(true)}
                onMouseLeave={() => setGalleriesOpen(false)}
              >
                Galleries
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              {/* Dropdown Menu */}
              {galleriesOpen && (
                <div
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => setGalleriesOpen(true)}
                  onMouseLeave={() => setGalleriesOpen(false)}
                >
                  <div className="w-64 bg-white rounded-lg shadow-xl py-2">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/galleries?category=${category.id}`}
                        onClick={() => setGalleriesOpen(false)}
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/why-choose-us"
              className="text-white hover:text-red-500 transition"
            >
              Why Choose Us
            </Link>

            <Link
              to="/blogs"
              className="text-white hover:text-red-500 transition"
            >
              Blogs
            </Link>

            <Link
              to="/contact-us"
              className="text-white hover:text-red-500 transition"
            >
              Contact Us
            </Link>
          </nav>

          {/* Call Button */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:flex items-center gap-2 text-white hover:text-red-500 transition">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400">CALL US NOW</div>
                <div className="text-sm font-semibold">(123)456-7890</div>
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-red-500 transition"
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => setFabricationOpen(!fabricationOpen)}
                  className="text-white hover:text-red-500 transition flex items-center justify-between w-full"
                >
                  Fabrication Services
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      fabricationOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {fabricationOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/fabrication-services#${service.id}`}
                        onClick={(e) => {
                          handleServiceClick(e, service.id);
                          setMobileMenuOpen(false);
                        }}
                        className="block text-gray-300 hover:text-red-500 transition py-1"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setGalleriesOpen(!galleriesOpen)}
                  className="text-white hover:text-red-500 transition flex items-center justify-between w-full"
                >
                  Galleries
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      galleriesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {galleriesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/galleries?category=${category.id}`}
                        onClick={() => {
                          setGalleriesOpen(false);
                          setMobileMenuOpen(false);
                        }}
                        className="block text-gray-300 hover:text-red-500 transition py-1"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/why-choose-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-red-500 transition"
              >
                Why Choose Us
              </Link>

              <Link
                to="/blogs"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-red-500 transition"
              >
                Blogs
              </Link>

              <Link
                to="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-red-500 transition"
              >
                Contact Us
              </Link>

              <a
                href="tel:1234567890"
                className="text-white hover:text-red-500 transition flex items-center gap-2 pt-4 border-t border-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>(123) 456-7890</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
