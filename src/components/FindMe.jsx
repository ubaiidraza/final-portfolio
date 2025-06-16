import { FaGithub } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";

const FindMe = () => {
  return (
    <div className="flex items-center justify-center w-full py-10">
      <div className="flex flex-col items-center w-full gap-8 text-white">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-medium">FIND ME</h1>
          <h3 className="text-base">
            Feel free to <span className="text-[#76d32e]">connect</span> with me
          </h3>
        </div>
        <div className="flex flex-row items-center justify-center w-full gap-7">
          {/* GitHub */}
          <a href="https://github.com/ubaiidraza" target="_blank" rel="noopener noreferrer">
            <div className="bg-white p-3 rounded-full cursor-pointer hover:shadow-[0_0_10px_5px_rgba(118,211,46,0.7)] transition-shadow duration-300">
              <FaGithub className="text-[#5aa422]" size={20} />
            </div>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ubaid-raza-dev/" target="_blank" rel="noopener noreferrer">
            <div className="bg-white p-3 rounded-full cursor-pointer hover:shadow-[0_0_10px_5px_rgba(118,211,46,0.7)] transition-shadow duration-300">
              <ImLinkedin2 className="text-[#5aa422]" size={20} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindMe;
