function ProgrammingLanguages() {
  return (
    <div className="flex flex-row gap-x-5">
      ✨ Languages:
      {["Dart", "Javascript", "TypeScript", "Python"].map((language, index) => {
        return (
          <p key={index} className="text-accent">
            ✔ {language}
          </p>
        );
      })}
    </div>
  );
}

export default ProgrammingLanguages;
