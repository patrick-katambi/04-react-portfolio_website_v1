import { motion } from "framer-motion";

function ProjectsTitle() {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 0.7, delay: 2.8 }}
      className="mb-[100px] text-accent text-[200px] font-codeBold opacity-30"
    >
      <h1>Projects</h1>
    </motion.div>
  );
}

export default ProjectsTitle;
