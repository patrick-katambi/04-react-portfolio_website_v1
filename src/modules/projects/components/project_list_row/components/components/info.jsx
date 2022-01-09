import { motion } from "framer-motion";

function ProjectInfoPreview({ number }) {
  return (
    <motion.div className="h-[250px] w-full bg-primary text-secondary font-codeMedium flex flex-col justify-start items-start rounded-lg rounded-t-none">
      <p className="text-[40px] font-codeBold">{number}</p>
    </motion.div>
  );
}

export default ProjectInfoPreview;
