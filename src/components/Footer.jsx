import { FaGithub, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-white flex gap-2 flex-col sm:flex-row items-center justify-between py-4 bg-[#1b1a2ea9] backdrop-blur-[15px]">
      <p className="md:w-[190px] lg:w-auto">Designed and Developed by Ubaid Raza</p>
      <p className="lg:pr-50">Copyright &copy; {new Date().getFullYear()}</p>

      {/* Social Links */}
      <ul className="flex flex-row items-center justify-center gap-5">
        {/* GitHub */}
        <a href="https://github.com/ubaiidraza" target="_blank" rel="noopener noreferrer">
          <li className="cursor-pointer hover:text-[#76d32e] transition-colors duration-300">
            <FaGithub size={20} />
          </li>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/ubaid-raza-dev/" target="_blank" rel="noopener noreferrer">
          <li className="cursor-pointer hover:text-[#76d32e] transition-colors duration-300">
            <ImLinkedin2 size={20} />
          </li>
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/ubaid_Webdev" target="_blank" rel="noopener noreferrer">
          <li className="cursor-pointer hover:text-[#76d32e] transition-colors duration-300">
            <FaInstagram size={20} />
          </li>
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/03112112414" target="_blank" rel="noopener noreferrer">
          <li className="cursor-pointer hover:text-[#76d32e] transition-colors duration-300">
            <FaWhatsapp size={20} />
          </li>
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com/profile.php?id=61554483642741" target="_blank" rel="noopener noreferrer">
          <li className="cursor-pointer hover:text-[#76d32e] transition-colors duration-300">
            <FaFacebookF size={20} />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Footer;
