export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About MC Stone
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              MC Stone has been a leading provider of welding and metal
              fabrication services for over 25 years. We specialize in
              delivering high-quality solutions for industrial, commercial, and
              residential projects.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team of certified welders and fabricators use state-of-the-art
              equipment and techniques to ensure precision, durability, and
              excellence in every project we undertake.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
                <div className="text-gray-600">Expert Team</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
              alt="Metal Fabrication"
              className="rounded-lg shadow-2xl w-full h-125 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-8 rounded-lg shadow-xl">
              <div className="text-3xl font-bold">Certified</div>
              <div className="text-sm">ISO 9001:2015</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
