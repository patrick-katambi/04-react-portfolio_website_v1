import { motion } from "framer-motion";
import SectionTitle from "../../../compoents/section_title";
import ProgrammingLanguages from "./components/lanuages";
import Technologies from "./components/technologies";

function SkillsList() {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 0.7, delay: 2.7 }}
      className="w-full mx-auto px-[20px] laptop:w-[80%] latop:ml-[10%] mt-[100px] mb-[100px] flex flex-col text-secondary font-codeBold"
    >
      <SectionTitle title={"SKILLS"} />
      <motion.div className="p-5 laptop:p-[50px] mt-[20px] bg-offset rounded-lg flex flex-col items-start">
        <ProgrammingLanguages />
        <Technologies />
      </motion.div>
    </motion.div>
  );
}

export default SkillsList;
