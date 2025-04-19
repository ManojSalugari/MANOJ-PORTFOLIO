import React, { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants"; // Your project data

const ProjectCard = ({ index, name, description, tags, video, project_link }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="cursor-pointer w-full"
      onClick={() => window.open(project_link, "_blank")}
    >
      <Tilt className="w-full">
        <div className="bg-[#000000] p-6 rounded-2xl flex flex-col items-center shadow-lg h-[800px]">
          {isVisible && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="w-full h-[600px] object-contain rounded-2xl"
            />
          )}
          <div className="mt-6 w-full text-center">
            <h3 className="text-white text-[28px] font-bold">{name}</h3>
            <p className="mt-4 text-gray-300 text-[16px]">{description}</p>
            <div className="mt-4 flex justify-center flex-wrap gap-3">
              {tags.map((tag, idx) => (
                <span key={idx} className="text-sm text-gray-300 font-semibold">
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div id="projects" className="bg-[rgba(0,0,0,0.3)] min-h-screen py-20 px-5">
      <motion.div variants={textVariant()}>
        <h2 className="text-white text-5xl font-extrabold text-center mb-16">
          My Works
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Works;
