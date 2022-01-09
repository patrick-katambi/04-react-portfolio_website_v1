import { motion } from "framer-motion";

function SectionTitle({ title }) {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 0.7, delay: 2.8 }}
      className="mb-[10px] ml-[30px] laptop:ml-0 text-accent text-[100px] font-codeBold opacity-20"
    >
      <h1>{title}</h1>
    </motion.div>
  );
}

export default SectionTitle;
