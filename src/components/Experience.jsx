import React from "react";

function Experience() {
  const experiences = [
    {
      title: "Junior Software Developer",
      company: "Loosely Coupled Technologies",
      period: "April 2023 – February 2024",
      location: "Dhaka, Bangladesh - Hybrid",
      description:
        "Actively involved in various aspects of the software development life cycle, contributing significantly to the development of software solutions.",
      tech: ["JavaScript", "React JS", "AngularJS", "Node.js", "MS SQL Server"],
    },
    {
      title: "Software Developer Intern",
      company: "Loosely Coupled Technologies",
      period: "January 2023 – March 2023",
      location: "Dhaka, Bangladesh - Onsite",
      description:
        "Worked on a Laboratory Management System Software. Promoted within 3 months due to strong performance and organizational impact (Three months ahead of schedule).",
      tech: ["JavaScript", "React JS", "AngularJS", "Node.js", "MS SQL Server"],
    },
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "August 2022 – Present",
      location: "Remote",
      description:
        "Developed interactive websites, designed frontend features; Actively communicated with UI/UX designers and backend developers to ensure alignment on project requirements.",
      tech: [
        "JavaScript",
        "React JS",
        "SCSS",
        "Bootstrap",
        "Tailwind CSS",
        "HTML",
      ],
    },
  ];
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-cyan-400 font-semibold">{exp.company}</p>
                </div>
                <div className="text-right mt-2 lg:mt-0">
                  <p className="text-purple-400 font-medium">{exp.period}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm border border-cyan-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
