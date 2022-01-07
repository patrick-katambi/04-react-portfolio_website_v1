import { motion } from "framer-motion";

function SkillsTitle() {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 0.7, delay: 2.7 }}
      className="mb-[100px] text-accent text-[200px] font-codeBold opacity-30"
    >
      <h1>Skills</h1>
    </motion.div>
  );
}

export default SkillsTitle;
