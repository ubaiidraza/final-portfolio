import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"
import Tools from "../components/Tools"


const About = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-white">
      <AboutMe/>
      <Skills/>
      <Tools/>
    </div>
  )
}

export default About