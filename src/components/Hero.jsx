import { ChevronDown } from "lucide-react";
import React from "react";

function Hero({ scrollToSection }) {
  return (
    <section
      id="hero"
      className="pt-30 sm:pt-0 pb-20 sm:pb-0 min-h-fit sm:min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mohammad Mostafa Kawsar Rakib
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full-Stack JavaScript Developer with expertise in React, Node.js,
            and modern web technologies. Passionate about creating impactful
            software solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown
          size={32}
          className="text-cyan-400 cursor-pointer"
          onClick={() => {
            scrollToSection("about");
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
