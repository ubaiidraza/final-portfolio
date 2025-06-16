import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import dev from "../assets/new.svg";

const Hero = () => {
  return (
    <div className="">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-between pt-20 pb-10 sm:flex-row lg:pt-10 max-sm:gap-10"
      >
        <div className="flex flex-col gap-9">
          <h1 className="text-3xl font-medium text-white lg:text-4xl">
            Hi There! <span className='wave'>👋</span>
          </h1>
          <h2 className="text-5xl font-medium text-white">
            I&apos;M <span className="text-[#76d32e] font-bold audiowide-regular">UBAID RAZA</span>
          </h2>
          <p className="max-sm:text-2xl text-3xl lg:text-4xl font-medium text-[#76d32e] pt-6 pb-6">
            <Typewriter
              words={['Frontend Developer']}
              loop={false}
              cursor
              cursorStyle='|'
              typeSpeed={120}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </p>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/ubaid-raza-dev/"
            rel="noopener noreferrer"
          >
            <button className="text-white cursor-pointer p-4 border w-[185px] bg-transparent transition-all duration-300 ease-in hover:bg-white hover:text-black">
              Connect with me
            </button>
          </a>
        </div>

        <img src={dev} alt="Developer Illustration" className='w-[500px] sm:w-[300px] lg:w-[500px] h-auto' />
      </motion.div>

    </div>
  );
};

export default Hero;
