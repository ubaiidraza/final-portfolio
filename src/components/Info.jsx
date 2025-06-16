import infodev from "../assets/info.png";

const Info = () => {
  return (
    <div className="flex flex-col-reverse items-center py-10 text-white sm:flex-row lg:gap-20 xl:gap-36 2xl:gap-50">
      <img src={infodev} alt="info illustration" className="w-[300px]" />
      <div className="flex flex-col gap-10">
        <h1 className="p-1 text-4xl font-medium text-white lg:pl-10 max-sm:text-center">
          LET ME <span className="text-[#76d32e]">INTRODUCE</span> MYSELF
        </h1>
        <div className="flex flex-col gap-5 text-xl">
          <p>
            I&apos;m a <span className="text-[#76d32e] font-semibold italic">Frontend Developer</span> who thrives on turning complex challenges into intuitive digital experiences.
          </p>
          <p>
            My tech toolkit includes{" "}
            <span className="text-[#76d32e] font-semibold italic">
              React.js, Vite, Tailwind CSS, Framer Motion, Firebase, and JavaScript
            </span>, with a focus on building responsive, accessible and scalable applications.
          </p>
          <p>
            I&apos;m currently exploring{" "}
            <span className="text-[#76d32e] font-semibold italic">
              AI integration
            </span>{" "}
            and{" "}
            <span className="text-[#76d32e] font-semibold italic">
              real-time collaboration tools
            </span>{" "}
            that enhance how we work and communicate.
          </p>
          <p>
            Let&apos;s connect and discuss how we can build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
