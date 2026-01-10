export default function Partners() {
  const partners = [
    "Acme Corporation",
    "Tech Industries",
    "BuildCo",
    "Manufacturing Pro",
    "Steel Works Ltd",
    "Industrial Solutions",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Partners & Customers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to work with leading companies across various
            industries. Our partnerships are built on trust, quality, and
            excellence.
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition flex items-center justify-center h-32"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600">
                    {partner.charAt(0)}
                  </span>
                </div>
                <div className="text-xs text-gray-600 font-semibold">
                  {partner}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex gap-1 text-red-600 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-4 italic">
              "MC Stone delivered exceptional quality on our industrial project.
              Their attention to detail is unmatched."
            </p>
            <div className="font-semibold text-gray-900">John Smith</div>
            <div className="text-sm text-gray-500">CEO, Acme Corporation</div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex gap-1 text-red-600 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-4 italic">
              "Professional, reliable, and always on time. MC Stone is our go-to
              partner for all fabrication needs."
            </p>
            <div className="font-semibold text-gray-900">Sarah Johnson</div>
            <div className="text-sm text-gray-500">Director, BuildCo</div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex gap-1 text-red-600 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-4 italic">
              "Outstanding craftsmanship and customer service. They transformed
              our vision into reality."
            </p>
            <div className="font-semibold text-gray-900">Michael Chen</div>
            <div className="text-sm text-gray-500">
              Manager, Tech Industries
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
