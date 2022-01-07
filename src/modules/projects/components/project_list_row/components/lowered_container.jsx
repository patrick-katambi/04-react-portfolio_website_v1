import { motion } from "framer-motion";
import ProjectInfoPreview from "./components/info";
import ProjectPreview from "./components/preview";

function LoweredContainer({ number }) {
  return (
    <motion.div
      className={`w-full translate-y-[100px] flex flex-col justify-start items-center`}
    >
      <ProjectPreview />
      <ProjectInfoPreview number={number} />
    </motion.div>
  );
}

export default LoweredContainer;
