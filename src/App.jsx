import NavigationBar from "./compoents/navigationBar";
import { useState } from "react";
import Slider from "./compoents/slider";
import AvailabeleForHire from "./modules/available_for_hire";
import WhoAmI from "./modules/who_am_i";
import Projects from "./modules/projects";

function App() {
  const [loadingMessage, setLoadingMessage] = useState("Loading ....");
  return (
    <div className="flex flex-col justify-start items-start bg-primary relative select-none">
      <Slider />
      <NavigationBar />
      <AvailabeleForHire />
      <WhoAmI />
      <Projects />
    </div>
  );
}

export default App;
