import ReadMore from "./ReadMore";
import Footer from "./Footer";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";
import Profile from "./Profile";
import { useState } from "react";
function HomePage() {
  const [isOpen, setIsOpen] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const handleClose = () => {
    setIsOpen(true);
  };
  return (
    <>
    <div className="bg-gray-200 w-full h-full ">
      <nav className=" flex bg-black fixed shadow-2xl shadow-red-300 w-full z-50 top-0 gap-10 h-12 items-center justify-end   ">
        <img
          className="w-11  flex justify-start   md:hidden absolute left-0"
          src="/Images/logo.jpeg"
          alt="Logo"
        />
        <div
          className={` ${isOpen ? "hidden" : "block  "}  md:block   
         mt-63 md:mt-0 bg-black flex justify-center items-center  text-black md:bg-black   w-full  border-2  absolute md:relative 
          `}
        >
          <ul className="  md:flex md:justify-center md:items-center [&>*]:text-[1rem]   [&>*]:p-2 [&>*]:text-center  gap-10   font-black  ">
            <li>
              <a
                onClick={handleClose}
                className=" md: text-white   hover:bg-white hover:text-black hover:font-bold hover:rounded-lg focus:bg-white focus: rounded-lg font-bold focus:text-black"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={handleClose}
                className="text-white   hover:bg-white hover:text-black hover:font-bold hover:rounded-lg focus:bg-white focus: rounded-lg font-bold focus:text-black"
                href="#about"
              >
                About me
              </a>
            </li>
            <li>
              <a
                onClick={handleClose}
                className="text-white  hover:bg-white hover:text-black hover:font-bold hover:rounded-lg focus:bg-white focus: rounded-lg font-bold focus:text-black"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                onClick={handleClose}
                className="text-white  hover:bg-white hover:text-black hover:font-bold hover:rounded-lg focus:bg-white focus: rounded-lg font-bold focus:text-black"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                onClick={handleClose}
                className="text-white  hover:bg-white hover:text-black hover:font-bold hover:rounded-lg focus:bg-white focus: rounded-lg font-bold focus:text-black"
                href="#contact"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        <button
          id="display"
          className="md:hidden text-3xl  relative right-7 text-white cursor-pointer "
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>
      <Profile />

      <div className="mt-20">
        <div className="bg-black flex gap-1.5 flex-col  ">
          <h1 className="text-white text-1xl font-bold mx-5">IT BERRIES</h1>
          <div>
            <p className="text-white text-[1rem] mx-5">
              I specialize in building engaging and responsive web interfaces
              that blend performance with visual appeal. With a keen eye for
              design and a focus on usability, I turn ideas into sleek,
              functional websites that deliver real impact.
            </p>
          </div>

          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-500 mx-5  text-left text-[12px] cursor-pointer "
          >
            |READ MORE|
          </button>
        </div>
        {showMore && (
          //
          <ReadMore />
        )}
      </div>
      <div id="about">
        <About />
      </div>

      <div id="skills" className="flex flex-col  items-center gap-7  mt-20">
        <Skills />
      </div>

      <div id="portfolio" className="mt-24">
        <Portfolio />
      </div>
      <div id="contact" className="mt-10">
        <Contact />
      </div>

      <Footer />
    </div>
   
    </>
    
  );
}
export default HomePage