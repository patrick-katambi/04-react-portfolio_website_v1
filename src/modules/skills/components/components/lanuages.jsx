function ProgrammingLanguages() {
  return (
    <div className="flex flex-col laptop:items-center laptop:flex-row gap-x-5">
      <p className="text-secondary">✨ Languages:</p>
      <div className="flex flex-row items-center gap-x-5 mt-3 laptop:mt-0">
        {["Dart", "Javascript", "TypeScript", "Python"].map(
          (language, index) => {
            return (
              <div
                key={index}
                className="text-accent mobile:text-xs tablet:text-sm laptop:text-lg bg-primary p-2 rounded-lg"
              >
              {language}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default ProgrammingLanguages;
