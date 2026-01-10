import { useState, useEffect } from "react";

export default function WhyChooseUs() {
  const [countersStarted, setCountersStarted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const reasons = [
    {
      icon: "shield",
      title: "Certified Excellence",
      description:
        "Our facility is ISO 9001:2015 certified, ensuring consistent quality management and adherence to international standards in every project we undertake.",
    },
    {
      icon: "clock",
      title: "On-Time Delivery",
      description:
        "With over 95% on-time delivery rate, we understand that your schedule matters. Our efficient project management ensures timely completion without compromising quality.",
    },
    {
      icon: "team",
      title: "Expert Craftsmen",
      description:
        "Our team consists of certified welders and fabricators with decades of combined experience, bringing unmatched expertise to every custom project.",
    },
    {
      icon: "quality",
      title: "Quality Assurance",
      description:
        "Every product undergoes rigorous quality inspection at multiple stages. We don't just meet standards—we exceed them, guaranteeing superior craftsmanship.",
    },
    {
      icon: "tools",
      title: "State-of-the-Art Equipment",
      description:
        "We invest in the latest fabrication technology and equipment, enabling us to handle complex projects with precision and efficiency.",
    },
    {
      icon: "support",
      title: "Dedicated Support",
      description:
        "From initial consultation to post-installation support, our team is with you every step of the way, ensuring complete satisfaction and peace of mind.",
    },
  ];

  const stats = [
    { number: "25+", label: "Years of Experience" },
    { number: "5000+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "100%", label: "Quality Guaranteed" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setCountersStarted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      name: "John Martinez",
      company: "Grand Hotel & Resort",
      text: "Mc Stone delivered exceptional commercial kitchen equipment for our hotel. Their attention to detail and commitment to quality is unmatched. Every piece was custom-fitted perfectly.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      company: "Downtown Restaurant Group",
      text: "We've worked with many fabricators, but Mc Stone stands out for their reliability. They completed our multi-location project on time and within budget. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Thompson",
      company: "Industrial Solutions Inc.",
      text: "The quality of their stainless steel fabrication is outstanding. Their team was professional, responsive, and delivered exactly what we needed. We're now long-term clients.",
      rating: 5,
    },
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "AWS Certified Welders",
    "OSHA Compliant Facility",
    "NSF Certified Products",
    "Licensed & Insured",
  ];

  const getIcon = (iconName) => {
    const iconClass = "w-8 h-8";
    switch (iconName) {
      case "shield":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        );
      case "clock":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "team":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        );
      case "quality":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        );
      case "tools":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        );
      case "support":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-24 mt-16 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent animate-fade-in">
              Why Choose Mc Stone
            </h1>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              When precision, reliability, and quality matter most, industry
              leaders choose Mc Stone.
              <span className="block mt-2 text-red-300 font-semibold">
                Let's build something amazing together! 🚀
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Animated */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-red-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div
                      className={`text-6xl font-bold bg-gradient-to-br from-red-600 to-red-400 bg-clip-text text-transparent transition-all duration-500 transform group-hover:scale-110 ${
                        countersStarted ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-lg text-gray-600 mt-3 font-medium group-hover:text-red-600 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              ✨ What Makes Us Different
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Fabrication Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We don't just fabricate metal—we build lasting relationships
              through reliability, quality, and unwavering commitment to
              excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 cursor-pointer border-2 ${
                  hoveredCard === index
                    ? "border-red-500 shadow-2xl -translate-y-2"
                    : "border-transparent hover:shadow-xl"
                }`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-red-50 to-transparent rounded-2xl transition-opacity duration-500 ${
                    hoveredCard === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-500 ${
                      hoveredCard === index
                        ? "bg-red-600 text-white scale-110 rotate-6"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {getIcon(reason.icon)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Animated arrow */}
                  <div
                    className={`mt-4 flex items-center text-red-600 font-semibold transition-all duration-300 ${
                      hoveredCard === index
                        ? "translate-x-2 opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    Learn more
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
              🏆 Certified & Trusted
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Industry-Leading Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our certifications are your assurance of quality and reliability
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-white px-8 py-5 rounded-2xl border-2 border-gray-100 hover:border-green-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 group-hover:bg-green-500 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {cert}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              💬 Client Stories
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Loved by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it—hear what our clients have to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-200 transform hover:-translate-y-2"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg
                    className="w-16 h-16 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex mb-6 space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current transform group-hover:scale-110 transition-transform"
                      style={{ transitionDelay: `${i * 50}ms` }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 mb-8 text-lg leading-relaxed italic relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 border-t pt-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white py-24 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-64 h-64 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
            👋 Let's Work Together
          </div>
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Ready to Experience the{" "}
            <span className="text-red-400">Difference</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join thousands of satisfied clients who trust Mc Stone for their
            fabrication needs.
            <span className="block mt-2 text-red-300">
              Let's discuss your project today—we're just a message away!
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-10 py-5 bg-red-600 text-white rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Request a Quote
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
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
            <button className="group px-10 py-5 bg-white text-gray-900 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
              Schedule Consultation
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>

          {/* Contact info */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-red-400"
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
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-red-400"
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
              <span>info@mcstone.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
