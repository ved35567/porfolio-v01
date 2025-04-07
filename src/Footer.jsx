import React from "react";

import { motion, easeOut } from "motion/react";
const Footer = () => {
  return (
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
        <p className="font-[Nunito]">@2025 Vedvyas Sahu All Rights Reserved</p>
      </div>
    </motion.div>
  );
};

export default Footer;
