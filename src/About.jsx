import React from "react";
import { useState } from "react";
import ExplorePage from "./Explore";
import { motion, easeOut } from "motion/react";
const About = () => {
  const [explore, setExplore] = useState(false);
  return (
    <>
      <motion.div
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
    </>
  );
};

export default About;
