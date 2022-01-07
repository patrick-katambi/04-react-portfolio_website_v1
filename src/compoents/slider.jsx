import { motion } from "framer-motion";

function Slider() {
  return (
    <motion.div
      animate={{ width: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed bg-gradient-to-r from-primary to-offset h-full w-full flex flex-col justify-center items-center text-secondary font-codeBold z-50"
    ></motion.div>
  );
}

export default Slider;
