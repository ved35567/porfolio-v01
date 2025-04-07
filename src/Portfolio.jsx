import React from "react";
import { useState } from "react";
import { motion, easeOut } from "motion/react";
const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <>
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
    </>
  );
};

export default Portfolio;
