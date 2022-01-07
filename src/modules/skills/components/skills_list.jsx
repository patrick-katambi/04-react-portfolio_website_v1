import { motion } from "framer-motion";
import ProgrammingLanguages from "./components/lanuages";
import Technologies from "./components/technologies";

function SkillsList() {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 0.7, delay: 2.7 }}
      className="w-[80%] ml-[10%] mt-[50px] mb-[100px] flex flex-col text-secondary font-codeBold"
    >
      <h1>Languages & Technologies</h1>
      <motion.div className="p-[50px] mt-[20px] bg-offset rounded-lg flex flex-col items-start">
        <ProgrammingLanguages />
        <Technologies />
      </motion.div>
    </motion.div>
  );
}

export default SkillsList;
