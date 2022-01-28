import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../../compoents/section_title";
import image from "../../images/scamtis-home.png";

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
        {/* project one */}
        <ProjectTile
          imageAsset={image}
          number={1}
          type={"React js, Django, Miscrosoft SQL Server"}
          name={"SCAMTIS"}
          shortDesc={
            "Student Continuous Assessment & Marks Tallying Information System. This was my final year project at the University of Dar es Salaam, Tanzania."
          }
        />

        {/* project two */}
        <ProjectTile
          imageAsset={image}
          number={2}
          type={"React js, Django, Miscrosoft SQL Server"}
          name={"SCAMTIS"}
          shortDesc={
            "Student Continuous Assessment & Marks Tallying Information System. This was my final year project at the University of Dar es Salaam, Tanzania."
          }
        />
      </div>
    </div>
  );
}

function ProjectTile({ number, imageAsset, type, name, shortDesc }) {
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

  const imageContainerHover = {
    rest: {
      scale: 1,
      ease: "easeOut",
      duration: 0.2,
      type: "tween",
    },
    hover: {
      // padding: "10px",
      scale: 0.9,
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
        <motion.div className="h-[50%] tablet:h-[60%] tabletL:h-[40%] laptop:h-[50%] bg-[#f5f5f5] flex flex-col justify-center items-center rounded-lg rounded-b-none">
          <motion.img
            // variants={imageContainerHover}
            src={imageAsset}
            alt=""
            className=" w-full rounded-lg rounded-b-none"
          />
        </motion.div>
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
                <div>{number}</div>
                <div className="w-[50px] h-[2px] bg-[white] " />
                <motion.div variants={textMotion}>{type}</motion.div>
              </div>
              <h1 className="text-[30px] font-codeBold">{name}</h1>
              <div>{shortDesc} </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
