import { motion } from "framer-motion";
import dev from "../assets/about.svg";

const AboutMe = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 35 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col-reverse items-center justify-between pt-2 pb-10 lg:flex-row lg:pt-10 max-sm:gap-10"
      >
        <div className="flex flex-col gap-9">
          <div className="flex items-center justify-center w-full">
            <h1 className="text-4xl font-medium">
              Know Who <span className="text-[#76d32e]">I AM</span>
            </h1>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-base sm:text-[20px] font-normal leading-loose text-justify">
              Hi again! I'm <span className="text-[#76d32e] font-bold">Ubaid Raza</span>, a passionate{" "}
              <span className="text-[#76d32e] font-bold">Frontend Developer</span> from{" "}
              <span className="text-[#76d32e] font-bold">Karachi, Pakistan</span>. I love building clean,
              responsive, and interactive web applications using modern web technologies.
            </p>

            <p className="leading-normal text-base sm:text-[20px] font-normal text-justify">
              I started my development journey with a deep interest in UI/UX design, which naturally led
              me to frontend development. My goal is to create visually appealing and accessible websites
              that provide the best user experience.
            </p>

            <p className="leading-normal text-base sm:text-[20px] font-normal text-justify">
              I specialize in <span className="text-[#76d32e] italic">React.js, Vite, Tailwind CSS, and Framer Motion</span>,
              and I'm constantly learning and improving my skills through real-world projects and freelance work.
            </p>

            <p className="leading-normal text-base sm:text-[20px] font-normal pt-10 pb-10 text-justify">
              Apart from coding, I enjoy exploring new design trends, helping fellow developers, and
              staying updated with the latest in tech. In my free time, you'll find me experimenting with
              new frontend libraries or creating portfolio templates for designers and developers.
            </p>

            <p className="leading-normal text-base sm:text-[20px] font-normal pb-5 text-justify">
              I'm always open to new opportunities and collaborations. Let’s connect and build something
              amazing together!
            </p>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/ubaid-raza"
              rel="noopener noreferrer"
            >
              <button className="text-white cursor-pointer p-4 border w-[185px] bg-transparent transition-all duration-300 ease-in hover:bg-white hover:text-black">
                Connect with me
              </button>
            </a>
          </div>
        </div>

        <img
          src={dev}
          alt="Frontend Developer Illustration"
          className="w-[300px] sm:w-[400px] lg:w-[500px] h-auto lg:-mt-55"
        />
      </motion.div>
    </div>
  );
};

export default AboutMe;
