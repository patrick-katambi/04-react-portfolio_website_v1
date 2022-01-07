import { motion } from "framer-motion";

function SkillsList() {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 0.7, delay: 2.7 }}
      className="w-[80%] ml-[10%] mt-[50px] mb-[100px] flex flex-col text-secondary font-codeBold"
    >
      <h1>Languages & Technologies</h1>
      <motion.div className="p-[50px] mt-[20px] bg-offset rounded-lg flex flex-col items-start">
        <ProgrammingLanguages />
        <p className="mt-[30px]">✨ Technologies:</p>
        <motion.div className="w-full mt-[20px] flex flex-row justify-between items-start gap-x-[50px]">
          <Frontend />
          <Backend />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SkillsList;

function ProgrammingLanguages() {
  return (
    <div className="flex flex-row gap-x-5">
      ✨ Languages: 
      {["Dart", "Javascript", "TypeScript", "Python"].map((language, index) => {
        return <p key={index} className="text-accent">
            ✔ {language}
        </p>;
      })}
    </div>
  );
}

function Frontend() {
  return (
    <div className="p-[40px] w-full bg-primary rounded-lg">
      <div className="flex flex-col justify-center">
        <p>👉 In the frontend</p>
        <div className="ml-[20px] mt-2">
          {[
            "Flutter",
            "React js",
            "Vue js",
            "HTML, CSS, TailWind Css, Framer Motion",
            "Adobe XD",
            "Figma",
          ].map((skill, index) => {
            return (
              <p key={index} className="pt-4 text-accent">
                ✔ {skill}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Backend() {
  return (
    <div className="p-[40px] bg-primary w-full rounded-lg">
      <div className="flex flex-col justify-center">
        <p>👉 In the backend</p>
        <div className="ml-[20px] mt-2">
          {[
            "Node js",
            "Django",
            "MongoDB",
            "Microsoft Sql Server",
            "Web Scraping",
          ].map((skill, index) => {
            return (
              <p key={index} className="pt-4 text-accent">
                ✔ {skill}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
