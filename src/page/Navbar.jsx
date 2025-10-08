import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { Bio } from "../data/Bio";

const navbarContainer = `flex justify-between items-center py-3 px-4 lg:px-10 border-b border-transparent bg-black/20  backdrop-blur supports-[backdrop-filter]:bg-black/60`;
const logoWrapper = `flex justify-center items-center gap-2 cursor-pointer`;
const logo = ` text-xl text-amber-600 font-bold`;
const nav = ` hidden md:flex justify-center items-center list-none gap-10 `;
const navLink = `relative hover:text-cyan-300 text-lg font-semibold duration-300 cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full`;
const faWrapper =
  "md:hidden cursor-pointer text-cyan-300 hover:text-cyan-200 duration-200";
const mobileNav = "md:hidden h-screen bg-gray-950 w-1/2 fixed right-0 p-2";
const mobileNavUl = "flex flex-col gap-7 justify-center items-center";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const sections = ["about", "skills", "experience", "projects", "contact"];

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="sticky top-0 z-20 text-cyan-200">
        <div className={navbarContainer}>
          <div onClick={() => scrollToTop()} className={logoWrapper}>
            <div className={logo}>{Bio.name}</div>
          </div>
          <div className={nav}>
            {sections &&
              sections.map((section, index) => (
                <li key={index} className={navLink}>
                  <Link
                    activeClass="currentTab"
                    spy={true}
                    to={section}
                    smooth
                    duration={500}
                  >
                    {capitalizeFirstLetter(section)}
                  </Link>
                </li>
              ))}
          </div>

          <div onClick={() => setIsMobile(!isMobile)} className={faWrapper}>
            {isMobile ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
        {isMobile && (
          <div
            className={`${mobileNav} border-l border-transparent bg-black/80 backdrop-blur`}
          >
            <ul className={mobileNavUl}>
              {sections &&
                sections.map((section, index) => (
                  <li key={index} className={navLink}>
                    <Link
                      onClick={() => setIsMobile(!isMobile)}
                      to={section}
                      smooth
                      duration={500}
                    >
                      {capitalizeFirstLetter(section)}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
