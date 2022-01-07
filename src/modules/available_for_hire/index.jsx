import { motion } from "framer-motion";

function AvailabeleForHire() {
  return (
    <>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1, delay: 2.5 }}
        className="py-6 px-[10%] bg-offset font-codeBold text-sm flex flex-row justify-start items-center gap-x-8 text-secondary rounded-lg rounded-l-none"
      >
        <h4>Hi! 👋, I'm Patrick</h4>
        <div className="h-[2px] w-[50px] bg-secondary rounded-lg" />
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-primary px-6 py-3 rounded-lg"
        >
          Available for hire
        </motion.div>
      </motion.div>
    </>
  );
}

export default AvailabeleForHire
