import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";

import { DiNodejs } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";

import { SiMongodb } from "react-icons/si";

import { FaGithubAlt } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { DiRedis } from "react-icons/di";

import { TbBrandReactNative } from "react-icons/tb";


const skills = [
    {
        name: "React",
        icon: <FaReact size={30}/>
    },
    {
        name: "React-Native",
        icon: <TbBrandReactNative size={30}/>
    },
    {
        name: "Javascript",
        icon: <IoLogoJavascript size={30} />
    },
    
    {
        name: "NodeJS",
        icon: <DiNodejs size={30} />
    },
    {
        name: "NextJS",
        icon: <RiNextjsFill size={30} />
    },
    
    {
        name: "MongoDB",
        icon: <SiMongodb size={30} />
    },
   
]

const tools = [
    {
        name: "Github",
        icon: <FaGithubAlt size={30} />
    },
    {
        name: "Redux",
        icon: <TbBrandRedux size={30} />
    },
    {
        name: "Postman",
        icon: <SiPostman size={30} />
    },
    {
        name: "Redis",
        icon: <DiRedis size={30} />
    },
   

]




export default skills;
export {tools}