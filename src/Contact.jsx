import React from "react";
import { motion, easeOut } from "motion/react";
const Contact = () => {
  return (
    <>
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
    </>
  );
};

export default Contact;
