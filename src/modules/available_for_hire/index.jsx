import { motion } from "framer-motion";

function AvailabeleForHire() {
  return (
    <>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1, delay: 2.5 }}
        className="mobile:px-[30px] mobile:py-4 tablet:py-6 tablet:px-[10%] mobile:text-[12px] tablet:text-sm laptop:text-lg bg-offset font-codeBold text-sm flex flex-row justify-start items-center gap-x-2 tablet:gap-x-8 text-secondary rounded-lg rounded-l-none"
      >
        <h4>Hi! 👋, I'm Patrick</h4>
        <div className="mobile:h-0 mobile:w-0 tablet:h-[2px] tablet:w-[50px] bg-secondary rounded-lg" />
        <div
          className="bg-primary px-6 py-3 rounded-lg"
        >
          Available for hire
        </div>
      </motion.div>
    </>
  );
}

export default AvailabeleForHire
