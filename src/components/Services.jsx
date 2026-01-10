import { useState, useEffect } from "react";

export default function Services() {
  const [activeProductIndex, setActiveProductIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProductIndex((prev) => {
        if (prev === 5) return 1;
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Visit And Choose Our Best Products",
      description: "",
      icon: "gear",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      btnColor: "bg-red-600",
    },
    {
      title: "Kitchen Tables",
      description: "",
      icon: "table",
      bgColor: "bg-red-600",
      textColor: "text-white",
      btnColor: "bg-white",
      btnTextColor: "text-red-600",
    },
    {
      title: "Stainless Steel Sinks",
      description: "",
      icon: "sink",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      btnColor: "bg-gray-900",
    },
    {
      title: "Range Hoods",
      description: "",
      icon: "hood",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      btnColor: "bg-gray-900",
    },
    {
      title: "Gas Burners",
      description: "",
      icon: "burner",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      btnColor: "bg-gray-900",
    },
    {
      title: "Custom Metal Works",
      description: "",
      icon: "custom",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      btnColor: "bg-gray-900",
    },
  ];

  const getIcon = (iconName) => {
    switch (iconName) {
      case "gear":
        return (
          <svg
            className="w-16 h-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        );
      case "table":
        return (
          <svg
            className="w-16 h-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        );
      case "sink":
        return (
          <svg
            className="w-16 h-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        );
      case "hood":
        return (
          <svg
            className="w-16 h-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        );
      case "burner":
        return (
          <svg
            className="w-16 h-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        );
      case "custom":
        return (
          <svg
            className="w-16 h-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative z-10 mt-8 md:-mt-40 lg:-mt-35 mb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Desktop Layout */}
        <div className="hidden lg:flex gap-0 overflow-hidden shadow-2xl ">
          {/* First large card */}
          <div className="bg-white p-10 lg:w-[350px] flex-shrink-0 rounded-tl-3xl rounded-bl-3xl">
            <div className="flex flex-col h-full">
              <div className="mb-6 text-gray-300">{getIcon("gear")}</div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Visit And Choose Our
                <br />
                Best Products
              </h3>
            </div>
          </div>

          {/* Remaining service cards in a row */}
          <div className="flex flex-1">
            {services.slice(1).map((service, index) => {
              const productIndex = index + 1;
              const isActive = productIndex === activeProductIndex;
              return (
                <div
                  key={index}
                  className={`${
                    isActive
                      ? "bg-red-600 text-white"
                      : "bg-white text-gray-900"
                  } p-8 flex-1 border-l border-gray-200 hover:shadow-xl transition-all duration-500 relative`}
                >
                  <div className="flex flex-col h-full items-center text-center">
                    <div
                      className={`mb-6 transition-colors duration-500 ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {getIcon(service.icon)}
                    </div>

                    <h3 className="text-lg font-bold mb-auto">
                      {service.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden space-y-0 shadow-2xl rounded-3xl overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} ${service.textColor} p-6 sm:p-8 md:p-10 border-b last:border-b-0 border-gray-200`}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`mb-4 sm:mb-6 ${
                    service.bgColor === "bg-red-600"
                      ? "text-white"
                      : service.icon === "gear"
                      ? "text-gray-300"
                      : "text-gray-400"
                  }`}
                >
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
