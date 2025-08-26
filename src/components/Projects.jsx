import { ExternalLink } from "lucide-react";
import React from "react";

function Projects() {
  const projects = [
    {
      title: "eFootball Tracker",
      description:
        "A data driven, analytical web application that provides AI based prediction for eFootball game events by processing and analyzing historical match data. It helps players make informed choices in-game with improved accuracy and insights.",
      period: "May 2025 - Present",
      tech: [
        "React JS",
        "Appwrite",
        "Redux-toolkit",
        "Shadcn UI",
        "Tailwind CSS",
      ],
      link: "https://efootballtracker.netlify.app/",
      highlights: [
        "Integrated Appwrite for authentication and secure user data handling.",
        "Built AI-based prediction engine using historical gameplay data.",
        "Implemented Redux Toolkit for global state management.",
        "Designed a responsive, modern UI with Tailwind CSS and Shadcn components.",
        "Optimized the app to deliver real-time event insights and user-friendly dashboards.",
      ],
    },
    {
      title: "PVT (Pressure, Value & Temperature) Calculator",
      description:
        "A complete analytical Laboratory management systems software built for the Oil & Gas industry to calculate various chemical equations and keep track of their production, and analyze the data to make better decisions.",
      period: "January 2023 - February 2024",
      tech: ["JavaScript", "React JS", "Node.js", "MS SQL Server"],
      highlights: [
        "Worked as a team member in Developing an internal and customized labratory management system tailored for the Oil & Gas industry to calculate and analyze chemical behaviors under pressure, volume, and temperature (PVT) conditions.",
        "Built various interactive forms to collect various input elements for calculations.",
        "Implemented features to export forms, tables, charts, and results as downloadable PDF and CSV files.",
        "Participated in daily client meetings and feature deployments discussions.",
      ],
    },
    {
      title: "EZassist",
      description:
        "CRM Solution app dedicated to manage leads, orders, delivery & making the communication smooth and effective between customers and SME business owners.",
      period: "April 2023 - February 2024",
      tech: ["JavaScript", "AngularJS", "Node.js", "MS SQL Server"],
      link: "https://www.ezassist.me/",
      highlights: [
        "Built various web templates for CRM modules like POS, Clothing, and Medical e-commerce.",
        "Debugged and resolved UI/UX issues to enhance product usability.",
        "Designed SQL queries with joins, filters, and stored procedures. Implemented features like paginations, export data as PDF.",
      ],
    },
    {
      title: "Revenue Aid",
      description:
        "A law consultancy firm website which demonstrates their business, goals & achievements.",
      period: "September 2022 - October 2022",
      tech: ["JavaScript", "Bootstrap", "CSS"],
      link: "https://revenueaid.com.bd/",
      highlights: [
        "Developed the frontend of a legal consultancy firm’s business website.",
        "Implemented modern CSS and animations for smooth interactions.",
      ],
    },
  ];
  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <p className="text-purple-400 text-sm mb-4">{project.period}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded text-xs border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="text-gray-400 text-sm space-y-1">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
