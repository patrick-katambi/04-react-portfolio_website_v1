import { motion } from "framer-motion";
import ProjectsTitle from "./components/projects_title";
import ProjectList from "./components/project_list_row";

function Projects() {
    return (
      <motion.div className="w-[90%]">
        <ProjectsTitle />
        <ProjectList />
      </motion.div>
    );
  }

  export default Projects