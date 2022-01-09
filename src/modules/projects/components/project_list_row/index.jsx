import { motion } from "framer-motion";
import RaisedContainer from "./components/raised_container";
import LoweredContainer from "./components/lowered_container";

function ProjectList() {
  return (
    <motion.div
      initial={{ y: "1000px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 0.4, delay: 2.9 }}
      className="flex flex-col"
    >
      <div className="mb-[200px] flex flex-col laptop:flex-row justify-start items-center gap-x-[50px]">
        <RaisedContainer number={1} />
        <LoweredContainer number={2} />
      </div>
      <motion.div className="mb-[200px] ml-[10%] translate-y-[-100px] flex flex-row justify-start items-center gap-x-[100px]">
        <RaisedContainer number={3} />
        <LoweredContainer number={4} />
      </motion.div>
    </motion.div>
  );
}

export default ProjectList;
