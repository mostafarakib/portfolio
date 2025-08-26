import {
  Braces,
  Code,
  CodeXml,
  Database,
  Lightbulb,
  Wrench,
} from "lucide-react";
import React from "react";

function Skills() {
  const skills = {
    programmingLanguages: ["JavaScript", "Python"],
    frontend: [
      "React",
      "Next.js",
      "AngularJS",
      "Redux",
      "SCSS",
      "Bootstrap",
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI",
    ],
    backend: ["Node.js", "Express.js"],
    database: ["MongoDB", "MS SQL Server"],
    tools: [
      "Git",
      "GitHub",
      "Firebase",
      "Appwrite",
      "Figma",
      "Chrome DevTools",
    ],
    familiarWith: [
      "Svelte",
      "TypeScript",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
    ],
  };
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
            <div className="flex items-center mb-4">
              <Braces className="text-blue-400 mr-3" size={30} />
              <h3 className="text-xl font-bold">Programming Languages</h3>
            </div>
            <div className="space-y-2">
              {skills.programmingLanguages.map((language, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full text-sm mr-2 mb-2 border border-blue-400/30"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
            <div className="flex items-center mb-4">
              <Code className="text-cyan-400 mr-3" size={24} />
              <h3 className="text-xl font-bold">Frontend</h3>
            </div>
            <div className="space-y-2">
              {skills.frontend.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm mr-2 mb-2 border border-cyan-400/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
            <div className="flex items-center mb-4">
              <Database className="text-purple-400 mr-3" size={24} />
              <h3 className="text-xl font-bold">Backend</h3>
            </div>
            <div className="space-y-2">
              {skills.backend.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm mr-2 mb-2 border border-purple-400/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
            <div className="flex items-center mb-4">
              <Database className="text-green-400 mr-3" size={24} />
              <h3 className="text-xl font-bold">Database</h3>
            </div>
            <div className="space-y-2">
              {skills.database.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full text-sm mr-2 mb-2 border border-green-400/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
            <div className="flex items-center mb-4">
              <Wrench className="text-orange-400 mr-3" size={24} />
              <h3 className="text-xl font-bold">Tools</h3>
            </div>
            <div className="space-y-2">
              {skills.tools.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full text-sm mr-2 mb-2 border border-orange-400/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
            <div className="flex items-center mb-4">
              <Lightbulb className="text-yellow-400 mr-3" size={24} />
              <h3 className="text-xl font-bold">Familiar</h3>
            </div>
            <div className="space-y-2">
              {skills.familiarWith.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full text-sm mr-2 mb-2 border border-yellow-400/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
