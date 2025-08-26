import { Award, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to work together? Let's discuss your next project and bring
            your ideas to life.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <Mail className="text-cyan-400" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:dev.mostafarakib@gmail.com"
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    dev.mostafarakib@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <Phone className="text-purple-400" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a
                    href="https://wa.me/+8801850432154"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    +880 1850432154
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <MapPin className="text-green-400" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://linkedin.com/in/mostafa-rakib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full border border-blue-400/30 hover:border-blue-400 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={24} className="text-blue-400" />
                  </a>
                  <a
                    href="https://github.com/mostafarakib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-full border border-gray-400/30 hover:border-gray-400 transition-all duration-300 hover:scale-110"
                  >
                    <Github size={24} className="text-gray-400" />
                  </a>
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-400/20">
                <Award className="text-cyan-400 mx-auto mb-4" size={32} />
                <h4 className="text-lg font-semibold mb-2">
                  HackerRank Profile
                </h4>
                <a
                  href="https://www.hackerrank.com/profile/mostafa_rakib_10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View Coding Achievements
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
