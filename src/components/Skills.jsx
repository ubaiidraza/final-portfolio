
import skills from "../assets/MySkills";
import SkillCard from "./SkillCard";



const Skills = () => {
  return (
    <div className="py-14 pt-20">
        <div className="flex flex-row items-center justify-center ">
            <h1 className="text-4xl font-medium">Professional <span className="text-[#76d32e]">Skillset</span></h1>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap lg:px-30 py-8 gap-8 sm:gap-12 items-center justify-center ">
            {
                skills.map((skill) => (
                    <SkillCard
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Skills