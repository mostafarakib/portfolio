import { Menu, X } from "lucide-react";
import React from "react";

function Nav({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Mostafa Rakib
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              "hero",
              "about",
              "experience",
              "projects",
              "skills",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                  activeSection === section ? "text-cyan-400" : "text-white/80"
                }`}
              >
                {section === "hero" ? "Home" : section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {[
              "hero",
              "about",
              "experience",
              "projects",
              "skills",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-2 px-4 capitalize hover:bg-white/10 rounded transition-colors cursor-pointer"
              >
                {section === "hero" ? "Home" : section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
