import ProjectCard from "../components/ProjectCard"
import { motion } from "framer-motion"
import projects from "../assets/MyProjects"


const Projects = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }} // Start invisible and move up
    animate={{ opacity: 1, y: 0 }} // Fade in and slide into place
    transition={{ duration: 0.9, ease: "easeOut" }} // Smooth transition 
    className="px-6 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-white pb-10">

      <div className="flex flex-col items-center justify-center gap-3 py-20">
        <h1 className="text-4xl font-medium">My Recent <span className="text-[#76d32e]">Projects</span></h1>
        <p>Here are few projects I&apos;ve worked on recently</p>
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 gap-10 pb-20 sm:grid-cols-2 lg:grid-cols-3">

        {
          projects.map((project) => (
            <ProjectCard
            key={project.name}
            image={project.image}
            name={project.name}
            description={project.description}
            gitLink={project.gitLink}
            liveLink={project.liveLink}
            live={project.isLive}
            />
          ))
        }
      </div>

    </motion.div>
  )
}

export default Projects