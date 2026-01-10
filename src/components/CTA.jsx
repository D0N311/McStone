export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your Next Project?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Get in touch with MC Stone today and let our expert team bring your
          metal fabrication vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
            Request a Quote
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition">
            Contact Us
          </button>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center text-left sm:text-center">
          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
              <svg
                className="w-6 h-6"
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
              <span className="font-semibold">Call Us</span>
            </div>
            <div className="text-lg">(123) 456-7890</div>
          </div>
          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-semibold">Email Us</span>
            </div>
            <div className="text-lg">info@mcstone.com</div>
          </div>
        </div>
      </div>
    </section>
  );
}
