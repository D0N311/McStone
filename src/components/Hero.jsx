import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80",
      title: "Expert Welding & Metal Fabrication",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=1920&q=80",
      title: "Professional Metal Fabrication Services",
      description:
        "Expert welding and metal fabrication solutions for industrial and commercial projects. Quality craftsmanship with precision and care.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80",
      title: "Custom Steel Solutions for Your Business",
      description:
        "From design to installation, we provide comprehensive metal fabrication services tailored to your specific needs and requirements.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen bg-gray-900 pb-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url('${slides[currentSlide].image}')`,
          filter: "brightness(0.4)",
        }}
      ></div>

      {/* Blue/Purple Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/30"></div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-500">
            {slides[currentSlide].title}
          </h1>

          <p className="text-gray-300 mb-8 leading-relaxed transition-all duration-500">
            {slides[currentSlide].description}
          </p>

          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-semibold transition">
            Contact Us
          </button>

          {/* Slider Dots */}
          <div className="flex gap-3 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 transition-all ${
                  index === currentSlide ? "w-12 bg-red-600" : "w-8 bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Next Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition"
      >
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Social Media Icons */}
      <div className="absolute bottom-32 right-6 flex flex-col gap-4">
        <a
          href="#"
          className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded flex items-center justify-center text-white transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded flex items-center justify-center text-white transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
