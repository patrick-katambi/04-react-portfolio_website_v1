import { motion } from "framer-motion";
import ProjectInfoPreview from "./components/info";
import ProjectPreview from "./components/preview";

function RaisedContainer({ number }) {
  return (
    <motion.div className={`w-full flex flex-col justify-start items-center`}>
      <ProjectPreview />
      <ProjectInfoPreview number={number} />
    </motion.div>
  );
}

export default RaisedContainer;
