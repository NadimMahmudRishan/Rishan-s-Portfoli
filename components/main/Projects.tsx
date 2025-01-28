import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 animation "
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Smart_ticket.png"
          title="Digital Ticket"
          description="A digital ticket system streamlines ticketing by offering secure, paperless, and easily accessible tickets for travel."
        />
        <ProjectCard
          src="/ReactWebsite.png"
          title="Modern React.js Blog"
          description="A sleek and responsive blog website built with React.js, offering a seamless user experience for reading and sharing engaging content."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="My Protfolio with next.js"
          description="A modern portfolio crafted with Next.js, showcasing projects, skills, and achievements with fast performance and seamless navigation."
        />
      </div>
    </div>
  );
};

export default Projects;
