import React from "react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">
          {/* Main Card with Curved Edge */}
          <div className="relative">
            {/* Decorative Curve */}
            <div className="absolute -left-32 top-0 bottom-0 w-64 bg-white rounded-r-full hidden lg:block"></div>

            {/* Content Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 text-center space-y-8 relative">
              {/* Thank You Title */}
              <h1
                className="text-6xl md:text-7xl font-bold text-teal-700"
                style={{ fontFamily: "cursive" }}
              >
                Thank you
              </h1>

              {/* Main Message */}
              <p className="text-2xl md:text-3xl text-teal-700 leading-relaxed max-w-2xl mx-auto">
                You gave us your data
                <br />
                and we appreciate that so...
              </p>

              {/* Secondary Message */}
              <p className="text-2xl md:text-3xl text-teal-700 pt-4">
                Take this "free" content
              </p>

              {/* Download Button */}
              <div className="pt-8">
                <button className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white text-xl font-semibold py-5 px-16 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
