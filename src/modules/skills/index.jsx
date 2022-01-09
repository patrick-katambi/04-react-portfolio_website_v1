import { motion } from "framer-motion";
import SectionTitle from "../../compoents/section_title";
import ProgrammingLanguages from "./components/lanuages";
import Technologies from "./components/technologies";

function Skills() {
  return (
    <>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 0.7, delay: 2.7 }}
        className="w-full mx-auto px-[0] laptop:w-[80%] latop:ml-[10%] mt-[100px] mb-[100px] flex flex-col text-secondary font-codeBold"
      >
        <motion.div className="p-[30px] tablet:p-[10%] laptop:p-[50px] laptop:rounded-lg mt-[20px] bg-offset flex flex-col items-start">
          <SectionTitle title={"SKILLS"} />
          <ProgrammingLanguages />
          <Technologies />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Skills;
