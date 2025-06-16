import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react";
import { GrHome } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkstyle = "flex items-center gap-2 transition-all duration-300 ease-in border-b-2 border-transparent";

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar Container */}
      <div className={`py-5 sm:py-6 flex items-center w-full justify-between sticky top-0 z-50 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-[#1b1a2ea9] backdrop-blur-[15px] ${isScrolled ? 'bg-[#1b1a2ea9] sm:backdrop-blur-[15px]' : 'sm:bg-transparent'}`}>
        
        {/* Logo Text */}
        <Link to="/" className="cursor-pointer">
          <h1 className="text-[16px] sm:text-[22px] font-semibold text-[#7EFF7E] tracking-wide lowercase">
            ubaid raza.
          </h1>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden sm:block">
          <ul className="flex lg:gap-12 md:gap-8">
            <li className="flex items-center gap-2 text-white raleway-link">
              <NavLink to="/" className={linkstyle}><GrHome /> Home</NavLink>
            </li>
            <li className="flex items-center gap-2 text-white raleway-link">
              <NavLink to="/about" className={linkstyle}><AiOutlineUser /> About</NavLink>
            </li>
            <li className="flex items-center gap-2 text-white raleway-link">
              <NavLink to="/projects" className={linkstyle}><LiaLaptopCodeSolid /> Projects</NavLink>
            </li>
            <li className="flex items-center gap-2 text-white raleway-link">
              <NavLink to="/resume" className={linkstyle}><IoDocumentTextOutline /> Resume</NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="relative flex items-center justify-center sm:hidden">
          {/* Cross Icon */}
          <RxCross1
            onClick={toggleMobileMenu}
            className={`text-[#ffff] text-2xl cursor-pointer transition-all duration-500 ease-in-out transform absolute right-[1px] ${isMenuOpen ? 'opacity-100 -rotate-180' : 'opacity-0 rotate-0'}`}
          />
          {/* Menu Icon */}
          <HiOutlineMenuAlt3
            onClick={toggleMobileMenu}
            className={`text-[#ffff] text-2xl cursor-pointer transition-all duration-500 ease-in-out transform absolute right-[1px] ${isMenuOpen ? 'opacity-0 -rotate-180' : 'opacity-100 rotate-0'}`}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`z-10 fixed top-[54px] left-0 w-full transition-all duration-500 ease-in-out bg-[#1b1a2ea9] backdrop-blur-[15px]
        ${isMenuOpen ? "opacity-100 max-h-screen pt-6 pb-10" : "opacity-0 max-h-0 overflow-hidden"}`}>
        <ul className="flex flex-col items-center justify-center w-full gap-10">
          <li className="flex items-center gap-2 text-white raleway-link">
            <NavLink to="/" className={linkstyle} onClick={toggleMobileMenu}>
              <GrHome /> Home
            </NavLink>
          </li>
          <li className="flex items-center gap-2 text-white raleway-link">
            <NavLink to="/about" className={linkstyle} onClick={toggleMobileMenu}>
              <AiOutlineUser /> About
            </NavLink>
          </li>
          <li className="flex items-center gap-2 text-white raleway-link">
            <NavLink to="/projects" className={linkstyle} onClick={toggleMobileMenu}>
              <LiaLaptopCodeSolid /> Projects
            </NavLink>
          </li>
          <li className="flex items-center gap-2 text-white raleway-link">
            <NavLink to="/resume" className={linkstyle} onClick={toggleMobileMenu}>
              <IoDocumentTextOutline /> Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
