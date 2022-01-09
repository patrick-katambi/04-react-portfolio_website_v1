import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../../compoents/section_title";

function Projects() {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 0.7, delay: 2.8 }}
      className="w-full mb-[100px] laptop:w-[90%] mx-auto bg-offset rounded-lg p-[30px] tablet:p-[10%] laptop:p-[50px]"
    >
      <SectionTitle title={"PROJECTS"} />
      <ProjectListItems />
    </motion.div>
  );
}

export default Projects;

function ProjectListItems() {
  return (
    <div className="flex flex-col">
      <div className="w-full gap-[30px] flex flex-col tabletL:flex-row">
        <ProjectTile />
        <ProjectTile />
      </div>
    </div>
  );
}

function ProjectTile() {
  const [hovered, setHovered] = useState(false);

  const textMotion = {
    rest: {
      color: "grey",
      x: 0,
      transition: { duration: 0.2, type: "tween", ease: "easeIn" },
    },
    hover: {
      color: "white",
      x: 20,
      fontSize: "18px",
      transition: { duration: 0.4, type: "tween", ease: "easeOut" },
    },
  };

  const containerHover = {
    rest: {
      backgroundColor: "#19273B",
      ease: "easeOut",
      duration: 0.2,
      type: "tween",
    },
    hover: {
      backgroundColor: "#0A192F",
      transition: { duration: 0.2, type: "tween", ease: "easeIn" },
    },
  };

  return (
    <div className="w-full h-[800px] bg-primary rounded-lg">
      <motion.div
        animate="rest"
        whileHover="hover"
        className="w-full h-full flex flex-col cursor-pointer font-codeMedium"
      >
        <div className="h-[50%] tablet:h-[60%] tabletL:h-[40%] laptop:h-[50%] bg-[grey] rounded-lg rounded-b-none"></div>
        <motion.div className="h-[50%] tablet:h-[40%] tabletL:h-[60%] laptop:h-[50%] rounded-lg rounded-t-none text-secondary">
          <motion.div
            variants={containerHover}
            className="h-full w-full p-[50px]"
          >
            <div className="flex flex-col gap-[30px]">
              <div
                className={`flex flex-row items-center gap-x-4 ${
                  hovered ? "text-opacity-50 text-[20px]" : "text-opacity-100"
                }`}
              >
                <div>01</div>
                <div className="w-[50px] h-[2px] bg-[red] " />
                <motion.div variants={textMotion}>Project name</motion.div>
              </div>
              <h1 className="text-[30px] font-codeBold">Project Highlight</h1>
              <div>
                I helped Ankama on the UX issues they had with their game
                launcher, an interface to discover and play all the games from
                Ankama. Ankama is a French digital company, specialising in
                creating animes, videos games or comics like Wakfu, Dofus or
                Krosmaga.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
