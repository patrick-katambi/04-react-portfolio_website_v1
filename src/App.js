import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col justify-start items-start bg-primary">
      <nav className="h-[80px] w-full px-[5%] bg-primary shadow-lg text-accent font-codeMedium flex flex-row justify-between items-center">
        <div>
          <h3 className="font-codeLight text-xs">
            Patric<span className="font-codeBold">Katambi</span>
          </h3>
        </div>
        <div className="flex flex-row items-center gap-x-8 text-xs">
          {["Landing", "Case studies & Projects", "Contact", "About me"].map(
            (menuItem, index) => {
              return (
                <p
                  key={index}
                  className={`${
                    index === 0 ? "font-codeBold text-sm" : "font-codeLight"
                  }`}
                >
                  {menuItem}
                </p>
              );
            }
          )}
          <div className="px-6 py-3 border-accent border-[1px] border-solid rounded-lg">Resume</div>
        </div>
      </nav>
    </div>
  );
}

export default App;
