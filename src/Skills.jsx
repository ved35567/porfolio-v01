import React from "react";
import { motion, easeOut } from "motion/react";
const Skills = () => {
  return (
    <>
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
    </>
  );
};

export default Skills;
