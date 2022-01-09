function Technologies() {
  return (
    <>
      <p className="mt-[30px]">✨ Technologies:</p>
      <div className="w-full mt-[20px] flex flex-col laptop:flex-row justify-between items-start gap-x-[50px] gap-y-[20px] laptop:gap-y-[50px]">
        <Frontend />
        <Backend />
      </div>
    </>
  );
}

export default Technologies;

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
