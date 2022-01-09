import { motion } from "framer-motion";
import EmailSection from "./components/email_section";

function WhoAmI() {
  return (
    <>
      <motion.div
        initial={{ y: "1000px", rotate: "30deg", scale: 0.8, opacity: 0 }}
        animate={{ y: 0, rotate: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 2.5 }}
        className="bg-primary laptop:my-[100px] laptop:mx-[10%] text-secondary font-codeBold text-[70px]"
      >
        <MainText />
        <div className="laptop:w-[60%] font-codeMedium text-[15px] text-accent laptopL:text-center">
          <QuickInfo />
          <EmailSection />
        </div>
      </motion.div>
    </>
  );
}

export default WhoAmI;

function MainText() {
  return (
    <div className="mobile:text-[30px] mobile:px-5 laptopL:text-[75px]">
      <h1>
        I do software design & development for the{" "}
        <motion.div
          whileHover={{ scale: 1.1, color: "#CCD6F6" }}
          transition={{ duration: 0.5, type: "spring" }}
          className="text-accent underline underline-offset-8 inline-block"
        >
          Web
        </motion.div>{" "}
        and{" "}
        <motion.div
          whileHover={{ scale: 1.1, color: "#CCD6F6" }}
          transition={{ duration: 0.5, type: "spring" }}
          className="text-accent underline underline-offset-8 inline-block"
        >
          Mobile
        </motion.div>
      </h1>
    </div>
  );
}

function QuickInfo() {
  return (
    <div className="my-[40px] mobile:my-[10px] mobile:text-[16px] mobile:p-5">
      <p>
        I'm a software engineer who loves{" "}
        <motion.div
          whileHover={{ scale: 1.1, color: "#CCD6F6" }}
          transition={{ duration: 0.5, type: "spring" }}
          className="text-accent underline underline-offset-4 inline-block"
        >
          UI/UX
        </motion.div>{" "}
        design and implementation whilst having good attention to details.
      </p>
    </div>
  );
}
