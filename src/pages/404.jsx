import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br pt-12 from-gray-900 via-gray-800 to-blue-900 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10">
          {/* 404 Number */}
          <h1 className="text-9xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            404
          </h1>

          {/* Error Message */}
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
            😕 Oops!
          </div>

          <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>

          <p className="text-xl text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
            <span className="block mt-2 text-gray-400">
              Let's get you back on track!
            </span>
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Back to Home
            </Link>

            <Link
              to="/contact-us"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/20 flex items-center justify-center gap-2"
            >
              Contact Support
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-400 mb-4">Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/services"
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                Services
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/why-choose-us"
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                Why Choose Us
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/blogs"
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                Blog
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/galleries"
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
