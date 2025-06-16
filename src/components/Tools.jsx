import { tools } from "../assets/MySkills";
import SkillCard from "./SkillCard";


const Tools = () => {
  return (
    <div className="pb-20">
        <div className="flex flex-row items-center justify-center ">
            <h1 className="text-4xl font-medium"><span className="text-[#76d32e]">Tools</span> I Use</h1>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap lg:px-60 py-6 gap-8 sm:gap-12 items-center justify-center">
            {
                tools.map((tool) => (
                    <SkillCard
                    key={tool.name}
                    name={tool.name}
                    icon={tool.icon}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Tools