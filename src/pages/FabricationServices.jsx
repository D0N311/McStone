import { services } from "../data/services";

export default function FabricationServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[350px] bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80')",
            filter: "brightness(0.4)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/30"></div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">
              Fabrication Services
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Comprehensive metal fabrication solutions tailored to your
              specific needs. From concept to completion, we deliver excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Fabrication Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial consultation to final delivery, we ensure quality at
              every step.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Consultation
              </h3>
              <p className="text-gray-600 text-sm">
                Understanding your requirements and specifications
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600 text-sm">
                Creating detailed plans and technical drawings
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fabrication
              </h3>
              <p className="text-gray-600 text-sm">
                Precision manufacturing with quality control
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600 text-sm">
                Installation and final inspection at your site
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12  bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Fabrication Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              We offer a wide range of metal fabrication services using
              state-of-the-art equipment and techniques to ensure precision and
              quality.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-6 items-center bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition scroll-mt-24`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[300px] object-cover"
                  />
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-red-600 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded font-semibold transition text-sm">
                    Request a Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Fabrication Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our team today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get a Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition">
              Call (123) 456-7890
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
