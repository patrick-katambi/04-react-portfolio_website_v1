import { motion } from "framer-motion";
import NavigationBar from "./compoents/navigationBar";
import { useState } from "react";
import Slider from "./compoents/slider";

function App() {
  const [loadingMessage, setLoadingMessage] = useState("Loading ....");
  return (
    <div className="flex flex-col justify-start items-start bg-primary relative select-none">
      <Slider />
      <NavigationBar />
      <HeroSection />
    </div>
  );
}

export default App;

function HeroSection() {
  return (
    <>
      <AvailabeleForHire />
      <WhoAmI />
      <Projects />
    </>
  );
}

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

function WhoAmI() {
  return (
    <>
      <motion.div
        initial={{ y: "1000px", rotate: "30deg", scale: 0.8, opacity: 0 }}
        animate={{ y: 0, rotate: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 2.5 }}
        className="bg-primary my-[100px] mx-[10%] text-secondary font-codeBold text-[70px]"
      >
        <h1>
          I do software design & development for the{" "}
          <span className="text-accent underline underline-offset-8">Web</span>{" "}
          and{" "}
          <span className="text-accent underline underline-offset-8">
            Mobile
          </span>
        </h1>
        <div className="w-[60%] font-codeMedium text-[15px] text-accent">
          <p className="my-[40px] ">
            I'm a software engineer based from Dar es Salaam who loves{" "}
            <strong className="text-secondary underline underline-offset-4">
              UI/UX
            </strong>{" "}
            and the attention to details. I have recently graduated from
            University of Dar es Salaam. I'm eager to learn and improve the
            quality of products I produce.
          </p>
          <EmailSection />
        </div>
      </motion.div>
    </>
  );
}

function EmailSection() {
  const [showCopy, setShowCopy] = useState(false);
  const [copyMessage, setCopyMessage] = useState("Copy");

  return (
    <motion.div
      whileHover={{
        backgroundColor: "#0A192F",
        cursor: "pointer",
        fontSize: "16px",
      }}
      // whileTap={{ scale: 1 }}
      onHoverStart={(e) => setShowCopy(true)}
      onHoverEnd={(e) => {
        setShowCopy(false);
        setCopyMessage("Copy");
      }}
      onClick={(e) => {
        setCopyMessage("Copied!");
        const email = document.querySelector(".email").textContent;
      }}
      transition={{ duration: 0.5, type: "spring" }}
      className="w-[60%] bg-offset flex flex-row justify-start items-center text-secondary rounded-lg gap-x-4"
    >
      <div className="w-[70px] h-[70px] p-4 bg-primary rounded-lg border-accent border-[1px] border-solid">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 16"
        >
          <path
            id="ic_markunread_24px"
            d="M20,4H4A2,2,0,0,0,2.01,6L2,18a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,20,4Zm0,4-8,5L4,8V6l8,5,8-5Z"
            transform="translate(-2 -4)"
            fill="#8892B0"
          />
        </svg>
      </div>
      <p className="email">katambipatrick@gmail.com</p>
      {showCopy === true ? (
        <p className="text-accent text-xs underline underline-offset-4">
          {copyMessage}
        </p>
      ) : (
        ""
      )}
    </motion.div>
  );
}

function Projects() {
  return (
    <motion.div className="w-[90%]">
      <ProjectsTitle />
      <ProjectList />
    </motion.div>
  );
}

function ProjectsTitle() {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 0.7, delay: 3.7 }}
      className="mb-[100px] text-accent text-[200px] font-codeBold opacity-30"
    >
      <h1>Projects</h1>
    </motion.div>
  );
}

function ProjectList() {
  return (
    <motion.div>
      <ProjectListRow />
    </motion.div>
  );
}

function ProjectListRow() {
  const projectHeight = 500;
  return (
    <motion.div
      initial={{ y: "1000px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 0.4, delay: 3.7 }}
      className="flex flex-col"
    >
      <div className="mb-[200px] ml-[10%] flex flex-row justify-start items-center gap-x-[100px]">
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

function RaisedContainer({ number }) {
  return (
    <motion.div className={`w-full flex flex-col justify-start items-center`}>
      <ProjectPreview />
      <ProjectInfoPreview number={number} />
    </motion.div>
  );
}

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

function ProjectPreview() {
  return (
    <motion.div className="h-[500px] w-full bg-secondary shadow-lg  rounded-lg rounded-b-none"></motion.div>
  );
}

function ProjectInfoPreview({ number }) {
  return (
    <motion.div className="h-[300px] w-full bg-offset text-secondary font-codeMedium flex flex-col justify-start items-start rounded-lg rounded-t-none">
      <p className="text-[40px] font-codeBold">{number}</p>
    </motion.div>
  );
}
