import React from "react";

const Projects = () => {
  const projects = [
    { id: 1, name: "Project 1", description: "Description of project 1", link: "#" },
    { id: 2, name: "Project 2", description: "Description of project 2", link: "#" },
  ];

  return (
    <div id="projects" className="bg-gray-200 py-12" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4" data-aos="zoom-in">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-4 bg-white rounded shadow"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-gray-700">{project.description}</p>
              <a href={project.link} className="text-blue-500 underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
