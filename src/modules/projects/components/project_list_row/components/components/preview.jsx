import { motion } from "framer-motion";
import image from '../../../../../../images/scamtis-home.png'

function ProjectPreview() {
  return (
    <motion.div className="h-[300px] tablet:h-[400px] laptop:h-[500px] w-full bg-secondary shadow-lg  rounded-lg rounded-b-none">
      <img src={image} alt="image" />
    </motion.div>
  );
}

export default ProjectPreview;
