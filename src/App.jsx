import { motion, easeOut } from "motion/react";
import { useState } from "react";
import ExplorePage from "./Explore";
import { use } from "react";
function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [explore, setExplore] = useState(false);
  const handleClose = () => {
    setIsOpen(true);
  };
  return (
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
      <div className="flex justify-evenly items-center mx-a md:mx-10   lg:mx-32 xl:mx-60  2xl:mx-80 flex-wrap gap-5   mx-10 mt-12  max-w-4xl ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.2 }}
          className="  flex flex-col items-center justify-center gap-[30px] mt-10 mx-5  
          "
        >
          <img
            className="md:w-16  sm:w-12 "
            src="/Images/logo 1.png"
            alt="Logo"
          />
          <h4
            className="md:text-3xl 
            font-bold font-[Raleway] tracking-[2px] "
          >
            Hi,I am
          </h4>
          <h2 className="md:text-6xl sm:text-4xl font-bold font-[Raleway] tracking-[5px] mt-[-10px]">
            Vedvyas
          </h2>
          <p className="md:text-4xl sm:text-3xl font-[Raleway] mt-[-30px] tracking-wide text-[#d65959]">
            Frond-end Developer
          </p>

          <div className="flex gap-6 ">
            <a href="">
              <img
                className="shadow-lg
                  shadow-black p-6  md:w-25 md:h-25 sm:w-20
                  "
                src="/Images/mail.png"
                alt="email"
              />
            </a>
            <a href="https://github.com/ved35567">
              <img
                className="shadow-lg
                  shadow-black p-6  md:w-25 md:h-25 sm:w-20
                  "
                src="/Images/github.png"
                alt="github"
              />
            </a>
            <a href="https://www.linkedin.com/in/vedvyas-sahu-838612328/">
              <img
                className="shadow-lg
                  shadow-black p-6  md:w-25 md:h-25 sm:w-20
                  "
                src="/Images/linkdin.png"
                alt="linkdin"
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex shadow-lg rounded-lg mx-auto shadow-black  mt-5  
          "
        >
          <img
            className="  md:h-100  brightness-120   shadow-2xs   "
            src=" /Images/vedvyas.png"
            alt="devloper-imgage"
          />
        </motion.div>
      </div>

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
          <motion.div
            className="mt-4 text-sm text-gray-700 z-30 w-full p-6 space-y-4  flex flex-col justify-start items-start drop-shadow-2xl rounded-lg bg-white max-h-[600px] overflow-y-auto "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>
              👋 <strong>Hello Again!</strong>
              <br />
              As a front-end developer, I’m passionate about creating seamless,
              engaging, and responsive web experiences that not only look great
              but function beautifully across all devices.
            </p>

            <p>
              I believe the front-end is where creativity meets code — where
              ideas come to life in the browser. Whether I’m building smooth
              animations, intuitive interfaces, or clean layouts, I always keep
              the user at the heart of every decision.
            </p>

            <p>
              🧠 <strong>My Approach</strong>
              <br />I focus on writing clean, modular, and maintainable code.
              I’m a huge fan of component-based architecture, reusable UI
              patterns, and performance optimization.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>
                🎯 Pixel-perfect implementation based on your designs or ideas
              </li>
              <li>
                ⚙️ Reusable, maintainable code using React and component
                libraries
              </li>
              <li>💡 Creative, user-centered design thinking</li>
              <li>📱 Mobile-first and fully responsive layouts</li>
              <li>
                ⚡ Smooth interactions using animation tools like Framer Motion
                & GSAP
              </li>
            </ul>

            <p>
              🔧 <strong>Tech Stack I Love</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Languages:</strong> HTML5, CSS3, JavaScript (ES6+)
              </li>
              <li>
                <strong>Frameworks/Libraries:</strong> React.js, Tailwind CSS,
                Framer Motion, GSAP
              </li>
              <li>
                <strong>Design:</strong> Figma, Adobe XD
              </li>
              <li>
                <strong>Tools:</strong> Git & GitHub, VS Code, Vite, npm/yarn
              </li>
              <li>
                <strong>Workflow:</strong> Agile, component-driven,
                version-controlled
              </li>
            </ul>

            <p>
              🤝 <strong>Let’s Build Together</strong>
              <br />
              I’m always excited to collaborate on new and exciting projects —
              whether you’re launching something new or refreshing the old, I’d
              love to help bring your vision to life!
            </p>
          </motion.div>
        )}
      </div>
      <motion.div
        id="about"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-5 items-center mt-18 mx-auto"
      >
        <h1
          className="text-black font-bold border-2 p-2 tracking-[5px] font-[Montserrat]
          text-2xl mt-14"
        >
          ABOUT ME
        </h1>
        <p className=" text-black  font-[Open Sans] text-[1rem] mx-5 box-content ">
          I am a passionate front-end developer with a strong eye for detail and
          a love for crafting clean, user-friendly interfaces. <br /> From
          wireframes to fully responsive websites, I bring ideas to life using
          modern tools and technologies. I focus on <br /> performance,
          accessibility, and delivering seamless digital experiences that align
          with both user needs and business goals.
        </p>
        <button
          className="font-bold text-blue-500 cursor-pointer"
          onClick={() => setExplore(!explore)}
        >
          | EXPLORE |
        </button>
        {explore && <ExplorePage></ExplorePage>}
        <img
          className="mt-10"
          src="/Images/separatorBlack 1.png"
          alt="seprator"
        />
      </motion.div>
      <div>
        <motion.div
          className="flex flex-col items-center gap-14 mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-20 [&>*]:mx-5">
            <div className="flex-col flex  items-center  ">
              <h4 className="text-center font-[Montserrat] font-bold">
                DESIGN
              </h4>
              <p className="">
                I can design the site based on your needs and suggestions. I can
                also design the <br></br> site from scratch and consult you
                during the job. l will work closely with you to <br /> bring
                your vision to life with a focus on UX/UI best practices.
              </p>
            </div>
            <div className="flex-col ">
              <h4 className="text-center font-[Montserrat] font-extrabold ">
                DEVELOPMENT
              </h4>
              <p>
                I develop responsive, high-performance websites using modern
                frameworks <br /> like React, Tailwind CSS,and animation
                libraries like Framer Motion and GSAP.
                <br></br> My goal is to deliver code that’s clean, maintainable,
                and scalable.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mx-5">
            <h4 className="font-[Montserrat] font-extrabold">MAINTENANCE</h4>
            <p className="about-content2 text[1rem]">
              Need updates, bug fixes, or ongoing support ? I offer reliable
              maintenance to ensure your site <br /> stays fresh, secure, and
              up-to-date so you can focus on your business while I handle the
              tech.
            </p>
          </div>
          <img
            className="separator-black"
            src="/Images/separatorBlack 1.png"
            alt="seprator"
          />
        </motion.div>
      </div>
      <div id="skills" className="flex flex-col  items-center gap-7  mt-20">
        <h3
          className="text-black font-bold border-2 p-2 tracking-[5px] font-[Montserrat]
          text-2xl mt-14"
        >
          SKILLS
        </h3>
        <h3 className=" text-black font-bold font-[Montserrat] ">USING NOW:</h3>
        <div className="max-w-2xl">
          <div className="flex justify-center flex-wrap mx-5    gap-10  ">
            {[
              "html",
              "css",
              "tailwind-css",
              "js",
              "react",
              "bootstrap",
              "git",
              "mysql",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className=" flex-col items-center justify-center  "
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <img
                  className="w-24 h-20 aspect-square"
                  src={`/Images/${skill}.svg`}
                  alt=""
                />
                <p className="text-center">{skill.toUpperCase()}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <h3 className=" text-black font-bold font-[Montserrat] mt-5">
          LEARNING:
        </h3>
        <div className="flex justify-center flex-wrap mx-5  gap-10   ">
          {["nodejs", "mongodb", "figma"].map((skill, index) => (
            <motion.div
              key={skill}
              className=" flex-col items-center  "
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <img
                className=" aspect-square"
                src={`/Images/${skill}.png`}
                alt=""
              />
              <p className="text-center">{skill.toUpperCase()}</p>
            </motion.div>
          ))}
        </div>
        <h3 className=" text-black font-bold font-[Montserrat] mt-5">
          OTHER SKILLS:
        </h3>
        <div className="flex justify-center flex-wrap mx-5  gap-10  ">
          {["c++", "c"].map((skill, index) => (
            <motion.div
              key={skill}
              className=" flex-col items-center  "
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <img src={`/Images/${skill}.svg`} alt="" />
              <p className="text-center">{skill.toUpperCase()}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div id="portfolio" className="mt-24">
        <motion.div
          className="bg-[url('/Images/bgportfolio.png')] bg-center bg-cover flex justify-center items-center h-80 transition-transform duration-500 "
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }} // Repeats animation when scrolled into view
        >
          <motion.h1
            className="text-black font-bold border-2 p-2 tracking-[5px] font-[Montserrat] text-center text-2xl h-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }} // Repeats animation every scroll
          >
            PORTFOLIO
          </motion.h1>
        </motion.div>

        <div className="bg-black p-5 ">
          <div className="flex justify-center flex-wrap items-center gap-20  text-white [&>*]:cursor-pointer   ">
            <div className="flex justify-center flex-wrap items-center gap-20 text-white [&>*]:cursor-pointer">
              <button
                className="flex flex-col items-center justify-center focus:text-red-500 focus:font-bold hover:text-blue-400 hover:scale-110 transition-transform duration-300"
                onClick={() => setSelectedCategory("All")}
              >
                All <span>________</span>
              </button>
              <button
                onClick={() => setSelectedCategory("CODED")}
                className="flex flex-col items-center justify-center focus:text-red-500 focus:font-bold hover:text-blue-400 hover:scale-110 transition-transform duration-300"
              >
                CODED <span>__________</span>
              </button>
              <button
                onClick={() => setSelectedCategory("DESIGNED")}
                className="flex flex-col items-center justify-center focus:text-red-500 focus:font-bold hover:text-blue-400 hover:scale-110 transition-transform duration-300"
              >
                DESIGNED <span>_____________</span>
              </button>
            </div>
          </div>
        </div>
        <div className="h-90 border-4 border-blue-500 flex justify-center items-center">
          {selectedCategory === "All" && (
            <div className="  bg-amber-200 w-full h-90 ">
              {" "}
              <p className="text-center">Showing All Items</p>
            </div>
          )}
          {selectedCategory === "CODED" && (
            <div className="bg-cyan-200 w-full h-90 ">
              {" "}
              <p className="text-center">Showing Coded Projects</p>{" "}
            </div>
          )}
          {selectedCategory === "DESIGNED" && (
            <div className="bg-red-200 w-full h-90">
              {" "}
              <p className="text-center">Showing Designed Projects</p>{" "}
            </div>
          )}
        </div>
        <div className="bg-black flex justify-center items-center h-10">
          <h3 className="text-white text-center ">Add many more to come!</h3>
        </div>
      </div>
      <div id="contact" className="mt-10">
        <div className="flex flex-col items-center">
          <h3
            className="text-black font-bold border-2 p-2 tracking-[5px] font-[Montserrat]  text-center 
          text-2xl mt-14"
          >
            CONTACT
          </h3>
          <div className="flex flex-col items-center justify-center flex-wrap gap-12 mt-5 mx-5">
            <motion.p
              className="text-[1rem] "
              initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and move up
              whileInView={{ opacity: 1, y: 0 }} // Fade in and move to normal position
              transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
            >
              Got a project in mind or just want to connect? I m always open to
              discussing new ideas, collaborations, or freelance <br />{" "}
              opportunities. Let build something great together — drop me a
              message and I will get back to you as soon as possible!
            </motion.p>
            <img
              className="separator-black"
              src="/Images/separatorBlack 1.png"
              alt="seprator"
            />
          </div>
        </div>

        <motion.div
          className="flex flex-col items-center mt-20  "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <form
              className=" flex flex-col items-center justify-center  gap-5"
              action="https://formsubmit.co/vedvyassahu2001@gmail.com "
              method="POST"
            >
              {/* Name Input */}
              <motion.input
                className="border-l-2 w-80 border-b-2 p-2"
                type="text"
                name="username"
                required
                placeholder="ENTER YOUR NAME*"
                whileFocus={{ scale: 1.02 }}
              />

              {/* Email Input */}
              <motion.input
                className="border-l-2 w-80 border-b-2 p-2"
                type="email"
                name="email"
                required
                placeholder="ENTER YOUR EMAIL*"
                whileFocus={{ scale: 1.02 }}
              />

              {/* Phone Input */}
              <motion.input
                className="border-l-2 border-b-2 p-2 w-80"
                type="tel"
                name="phone"
                placeholder="PHONE NUMBER"
                whileFocus={{ scale: 1.02 }}
              />

              {/* Message Input */}
              <motion.textarea
                className="border-l-2 border-b-2 w-80 "
                required
                name="message"
                placeholder="YOUR MESSAGE*"
                rows="4"
                whileFocus={{ scale: 1.02 }}
              />

              {/* Submit Button */}
              <motion.button
                className="font-semibold tracking-[5px]"
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                | SUBMIT |
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="bg-black text-white mt-10 p-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }} // Re-animates on scroll
      >
        <a href="#">
          <motion.img
            className="mx-auto"
            src="Images/arrow.svg"
            alt=""
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
          <motion.h3
            className="text-center p-1 "
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            Back To Top
          </motion.h3>
        </a>

        <div className="flex p-2 gap-8 justify-center items-center">
          {[
            { src: "Images/fb.svg", alt: "Facebook" },
            { src: "Images/linkdin.svg", alt: "LinkedIn" },
            { src: "Images/insta.svg", alt: "Instagram" },
            { src: "Images/mail.svg", alt: "Email" },
          ].map((icon, index) => (
            <motion.a
              key={index}
              href=""
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img src={icon.src} alt={icon.alt} />
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center items-center p-2">
          <p className="font-[Nunito]">
            @2025 Vedvyas Sahu All Rights Reserved
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
