import { motion } from "framer-motion";
import { useState } from "react";
import copy from "copy-text-to-clipboard";
import CopyText from "./components/copy_text";
import EmailIcon from "./components/email_icon";
import Email from "./components/email";

function EmailSection() {
  const [showCopy, setShowCopy] = useState(false);
  const [copyMessage, setCopyMessage] = useState("Copy");

  const onHoverStart = (e) => setShowCopy(true);

  const onHoverEnd = (e) => {
    setShowCopy(false);
    setCopyMessage("Copy");
  };

  const onClick = (e) => {
    setCopyMessage("Copied!");
    const email = document.querySelector(".email").textContent;
    copy(email);
  };

  const whileHover = {
    backgroundColor: "#0A192F",
    cursor: "pointer",
    // fontSize: "16px",
    scale: 1.1
  };

  return (
    <motion.div
      whileHover={whileHover}
      whileTap={{ scale: 0.9 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onClick={onClick}
      transition={{ duration: 0.5, type: "spring" }}
      className="bg-offset flex flex-row justify-start items-center text-secondary rounded-lg mobile:gap-x-2 tablet:gap-x-4"
    >
      <EmailIcon />
      <Email />
      <CopyText showCopy={showCopy} copyMessage={copyMessage} />
    </motion.div>
  );
}

export default EmailSection;
