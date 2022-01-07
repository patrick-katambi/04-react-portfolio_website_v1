import { motion } from "framer-motion";
import NavigationBar from "./compoents/navigationBar";
import { useState } from "react";
import Slider from "./compoents/slider";
import emailIcon from './images/email_icon.png'

function App() {
  const [loadingMessage, setLoadingMessage] = useState("Loading ....");
  return (
    <div className="flex flex-col justify-start items-start bg-primary relative">
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
        <div className="bg-primary px-6 py-3 rounded-lg">
          Available for hire
        </div>
      </motion.div>
    </>
  );
}

function WhoAmI() {
  return (
    <>
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1, delay: 2.5 }}
        className="w-full bg-primary my-[100px] px-[10%] text-secondary font-codeBold text-[70px]"
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
            I'm a software engineer who loves the attention to details. I have recently graduated from University of Dar es Salaam
          </p>
          <div className="w-[60%] bg-offset flex flex-row justify-start items-center text-secondary rounded-lg gap-x-4">
            <div className="w-[70px] h-[70px] p-4 bg-accent rounded-lg">
              <img className="h-full w-full" src={emailIcon} alt=""/>
            </div>
            <p>katambipatrick@gmail.com</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
