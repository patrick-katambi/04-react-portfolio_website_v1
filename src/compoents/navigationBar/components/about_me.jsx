import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.div
      initial={{ y: "-300px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1, delay: 2.5 }}
      className="flex flex-row justify-start items-center gap-x-4 font-codeBold"
    >
      <div>About Me</div>
      <div className="h-[2px] w-[50px] bg-secondary rounded-lg" />
    </motion.div>
  );
}

export default AboutMe;
