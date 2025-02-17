import { motion, easeOut } from "motion/react";
import { useState } from "react";
function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showMenu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((showMenu) => !showMenu);
    console.log(showMenu);
  };

  return (
    <div className="bg-gray-200 w-full h-full">
      <div className="flex justify-evenly items-center bg-black [&>*]:text-[1rem] h-12 [&>*]:my-auto fixed [&>*]:p-2 top-0 z-50 w-full ">
        <a
          className="text-white   hover:bg-white hover:text-black hover:font-bold hover:rounded-lg focus:bg-white focus:rounded-lg font-bold focus:text-black "
          href="#"
        >
          Home
        </a>
        <a
          className="text-white text-2xl  hover:bg-white hover:text-black hover:font-bold hover:rounded-lg focus:bg-white focus: rounded-lg font-bold focus:text-black"
          href="#about"
        >
          About me
        </a>
        <a
          className="text-white  hover:bg-white hover:text-black hover:font-bold hover:rounded-lg focus:bg-white focus: rounded-lg font-bold focus:text-black"
          href="#skills"
        >
          Skills
        </a>
        <a
          className="text-white  hover:bg-white hover:text-black hover:font-bold hover:rounded-lg focus:bg-white focus: rounded-lg font-bold focus:text-black"
          href="#portfolio"
        >
          Portfolio
        </a>
        <a
          className="text-white  hover:bg-white hover:text-black hover:font-bold hover:rounded-lg focus:bg-white focus: rounded-lg font-bold focus:text-black"
          href="#contact"
        >
          Contact Me
        </a>

        <button className="text-white  " onClick={toggleMenu}>
          <span className="text-3xl  md:hidden  relative right-7">&#9776;</span>
        </button>
      </div>
      <div className="flex  justify-evenly items-center md:mx-10   lg:mx-32 xl:mx-60 2xl:mx-96   flex-wrap gap-5 mx-10 mt-12  max-w-4xl  ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.2 }}
          className="  flex flex-col items-center justify-center gap-[30px] mt-10 mx-5  
          "
        >
          <img
            className=" hover:animate-spin"
            src="/Images/logo 1.png"
            alt="Logo"
          />
          <h4
            className="text-4xl 
            font-bold font-[Raleway] tracking-[5px] "
          >
            Hi,I am
          </h4>
          <h2 className="text-7xl font-bold font-[Raleway] tracking-[5px]">
            Vedvyas
          </h2>
          <p className="text-[1.5rem] font-[Raleway] mt-[-30px] tracking-wide text-[#d65959]">
            Frond-end Developer
          </p>

          <div className="flex gap-6 ">
            <a href="">
              <img
                className="shadow-lg
                  shadow-black p-6 w-25 h-25
                  "
                src="/Images/mail.png"
                alt="email"
              />
            </a>
            <a href="">
              <img
                className="shadow-lg
                  shadow-black p-6 w-25 h-25
                  "
                src="/Images/github.png"
                alt="github"
              />
            </a>
            <a href="">
              <img
                className="shadow-lg
                  shadow-black p-6 w-25 h-25
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
          className="flex shadow-lg shadow-red-800 rounded-lg mx-auto  mt-5  
          "
        >
          <img
            className="  h-100   "
            src=" /Images/image 17.png"
            alt="devloper-imgage"
          />
        </motion.div>
      </div>

      <div className="mt-5">
        <div className="bg-black flex gap-1.5 flex-col  p-2">
          <h1 className="text-white text-2xl font-bold mx-5">IT BERRIES</h1>
          <div>
            <p className="text-white text-[1rem] mx-5">
              Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
              varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
              quis libero viverra facilisis ut ac est. Morbi commodo, eros in
              dignissim tempus, lacus odio rutrum augue, in semper sem magna
              quis tellus.<br></br> Etiam enim erat, suscipit eu semper a,
              dictum sit amet elit. Nunc egestas nisi eget enim gravida
              facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut
              ante justo, consequat vitae elementum tempor, accumsan nec eros.{" "}
            </p>
          </div>
          <a href="">
            <p className="text-white mx-5 ">|READ MORE|</p>
          </a>
        </div>
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
          text-2xl"
        >
          ABOUT ME
        </h1>
        <p className=" text-black  font-[Open Sans] text-[1rem] mx-5 ">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus.<br></br> Sed ornare sit amet lorem sed viverra. In vel
          urna quis libero viverra facilisis ut ac est.
        </p>
        <p className="font-bold">| EXPLORE |</p>
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
            <div className="flex-col flex items-center  ">
              <h4 className="text-center font-[Montserrat] font-bold">
                DESIGN
              </h4>
              <p className="">
                I can design the site based on your needs and suggestions.
                <br></br> I can also design the site from scratch and consult
                you during the job.
              </p>
            </div>
            <div className="flex-col ">
              <h4 className="text-center font-[Montserrat] font-extrabold ">
                DEVELOPMENT
              </h4>
              <p>
                I can design the site based on your needs and suggestions.
                <br></br> I can also design the site from scratch and consult
                you during the job.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mx-5">
            <h4 className="font-[Montserrat] font-extrabold">MAINTENANCE</h4>
            <p className="about-content2 text[1rem]">
              I can design the site based on your needs and suggestions.
              <br></br> I can also design the site from scratch and consult you
              during the job.
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
          text-2xl"
        >
          SKILLS
        </h3>
        <h3 className=" text-black font-bold font-[Montserrat] ">USING NOW:</h3>
        <div className="max-w-2xl">
          <div className="flex justify-center flex-wrap mx-5    gap-10  ">
            {[
              "html",
              "css",
              "sass",
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
                <img src={`/Images/${skill}.svg`} alt="" />
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
              <img src={`/Images/${skill}.png`} alt="" />
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
      <div id="portfolio" className="mt-10">
        <div className=" bg-[url('/Images/bgportfolio.png')] bg-center bg-cover  flex justify-center  h-64">
          <h1
            className="text-black font-bold border-2 p-2 tracking-[5px] font-[Montserrat] text-center  
          text-2xl  h-12
              mt-25"
          >
            PORTFOLIO
          </h1>
        </div>
        <div className="bg-black p-5 ">
          <div className="flex justify-center flex-wrap items-center gap-20  text-white [&>*]:cursor-pointer   ">
            <button
              className="flex flex-col items-center justify-center focus:text-red-500 focus:font-bold  "
              onClick={() => setSelectedCategory("All")}
            >
              All <span>________</span>{" "}
            </button>
            <button
              onClick={() => setSelectedCategory("CODED")}
              className="flex flex-col items-center justify-center  focus:text-red-500 focus:font-bold "
            >
              CODED <span>__________</span>{" "}
            </button>
            <button
              onClick={() => setSelectedCategory("DESIGNED")}
              className="flex flex-col items-center justify-center  focus:text-red-500 focus:font-bold "
            >
              {" "}
              DESIGNED <span>_____________</span>
            </button>
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
          text-2xl"
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
              Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
              varius finibus.<br></br> Sed ornare sit amet lorem sed viverra. In
              vel urna quis libero viverra facilisis ut ac est.
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
              action="#"
            >
              {/* Name Input */}
              <motion.input
                className="border-l-2 w-80 border-b-2 p-2"
                type="text"
                required
                placeholder="ENTER YOUR NAME*"
                whileFocus={{ scale: 1.02 }}
              />

              {/* Email Input */}
              <motion.input
                className="border-l-2 w-80 border-b-2 p-2"
                type="email"
                required
                placeholder="ENTER YOUR EMAIL*"
                whileFocus={{ scale: 1.02 }}
              />

              {/* Phone Input */}
              <motion.input
                className="border-l-2 border-b-2 p-2 w-80"
                type="tel"
                placeholder="PHONE NUMBER"
                whileFocus={{ scale: 1.02 }}
              />

              {/* Message Input */}
              <motion.textarea
                className="border-l-2 border-b-2 w-80 "
                required
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
      <div className="bg-black text-white mt-10 p-5">
        {" "}
        <a href="#">
          <img className="mx-auto" src="Images/arrow.svg" alt="" />
          <h3 className="text-center p-1">Back To Top</h3>
        </a>
        <div className="flex p-2 gap-8 justify-center items-center ">
          <a href="">
            <img src="Images/fb.svg" alt="facebook" />{" "}
          </a>
          <a href="">
            <img src="Images/linkdin.svg" alt="Linkdin" />
          </a>
          <a href="">
            <img src="Images/insta.svg" alt="instagram" />
          </a>
          <a href="">
            {" "}
            <img src="Images/mail.svg" alt="Email" />
          </a>
        </div>
        <div className="flex justify-center items-center p-2">
          <p className="font-[Nunito]">@2025 Vedvyas sahu All Right Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default App;
