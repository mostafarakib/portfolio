import React from "react";
import profileImage from "../assets/profile2.jpeg";

function About() {
  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        {/* grid layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-none lg:order-2 flex justify-center">
            <img
              src={profileImage}
              alt="My profile"
              className="w-64 h-64 sm:w-74 sm:h-74 rounded-full border-2 border-purple-400 object-cover"
            />
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              With a solid background in software development, I have experience
              working with both international and local clients. I'm proficient
              in modern frameworks like React and AngularJS, as well as core
              technologies like HTML, CSS, and JavaScript.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm eager to take on new challenges and contribute to impactful
              projects worldwide, with a focus on continually advancing my
              skills and career in this dynamic field.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-transparent hover:border-cyan-400/50">
                <div className="text-3xl font-bold text-cyan-400">1+</div>
                <div className="text-sm text-gray-400">Years of Experience</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-transparent hover:border-purple-400/50">
                <div className="text-3xl font-bold text-purple-400">100+</div>
                <div className="text-sm text-gray-400">Issues Resolved</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-cyan-400 mb-8 mt-12 text-center lg:text-left">
              Education
            </h3>
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:border-purple-400/50">
              <h4 className="text-xl font-semibold text-white">
                B.Sc in Computer Science & Engineering
              </h4>
              <p className="text-purple-400 font-medium">
                Northern University Bangladesh
              </p>
              <p className="text-gray-400">September 2021 - 2024</p>
              <p className="text-gray-400">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
