"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Jobify",
    description:
      "A job searching and posting platform for users and companies to connect with potential candidates and job opportunities.Technologies: ReactJS, NextJS, MySQL, MongoDB, TailwindCSS, NodeJS, ExpressJS",
    image: "/images/projects/pr1.2.png",
    galleryImages: [
      "/images/projects/pr1.1.png",
      "/images/projects/pr1.2.png",
      "/images/projects/pr1.3.png",
      "/images/projects/pr1.4.png",
      "/images/projects/pr1.5.png",
      "/images/projects/pr1.6.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Alumni Association",
    galleryImages: ["/images/projects/pr2.1.png", "/images/projects/pr2.2.png"],

    description:
      "A platform that helps students find study abroad opportunities, including accommodation, job placements, and university info. Technologies: ReactJS, .NET, MSSQL",
    image: "/images/projects/pr2.1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce VirtualMeds",
    description:
      "An e-commerce platform for online medication shopping, providing users with an accessible way to purchase their medications. Technologies: WordPress, MySQL",
    image: "/images/projects/pr4.1.png",
    galleryImages: [
      "/images/projects/pr4.1.png",
      "/images/projects/pr4.2.png",
      "/images/projects/pr4.3.png",
    ],

    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Skincare line site - HonestCo",
    description:
      "An interactive platform for showcasing skincare products tailored to different skin types, enabling users to easily explore and discover new items. Technologies: HTML, CSS, JavaScript, PHP.",
    image: "/images/projects/pr3.1.1.png",
    galleryImages: [
      "/images/projects/pr3.1.1.png",
      "/images/projects/pr3.2.png",
      "/images/projects/pr3.4.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Skincare line - VersedCo",
    description:
      "An interactive e-commerce platform for skincare products tailored to various skin types, featuring a visually appealing UI and enhanced user experience. Technologies: Vue.js, Node.js, HTML, CSS.",
    image: "/images/projects/pr5.2.png",
    galleryImages: [
      "/images/projects/pr5.2.png",
      "/images/projects/pr5.1.png",
      "/images/projects/pr5.3.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Angry Birds Clone",
    video: true,
    description:
      "Developed a physics-based game using Unity, inspired by the classic Angry Birds. The project features engaging gameplay mechanics, vibrant graphics, and various levels, showcasing my skills in game design and development.",
    image: "/images/projects/202151031-FjollaAliu.mp4",
    galleryImages: [],
    tag: ["All", "Game"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game"
          isSelected={tag === "Game"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              galleryImages={project?.galleryImages}
              video={project?.video}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
