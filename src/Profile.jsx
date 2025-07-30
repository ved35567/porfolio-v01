import  { useState, useEffect } from "react";
import { motion, easeOut } from "framer-motion";

const Profile = () => {
  const [user, setUser] = useState(null); // lowercase

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/profile`, {
          method: "GET",
        });

        if (!res.ok) {
          throw new Error("Unauthorized or Server Error");
        }

        const data = await res.json();
        setUser(data); // ✅ single user object
      } catch (err) {
        console.error("Failed to fetch profile:", err.message);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="flex justify-evenly items-center mx-auto md:mx-10 lg:mx-32 xl:mx-60 2xl:mx-80 flex-wrap gap-5 mt-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: easeOut, delay: 0.2 }}
        className="flex flex-col items-center justify-center gap-[30px] mt-10 mx-5"
      >
        <img className="md:w-16 sm:w-12" src="/Images/logo 1.png" alt="Logo" />
        <h4 className="md:text-3xl font-bold font-[Raleway] tracking-[2px]">
          Hi, I am
        </h4>
        <h2 className="md:text-6xl sm:text-4xl font-bold font-[Raleway] tracking-[5px] mt-[-10px]">
          {user?.name || "Vedvyas"}
        </h2>
        <p className="md:text-4xl sm:text-3xl font-[Raleway] mt-[-30px] tracking-wide text-[#d65959]">
          Front-end Developer
        </p>

        <div className="flex gap-6">
          <a href="">
            <img
              className="shadow-lg shadow-black p-6 md:w-25 md:h-25 sm:w-20"
              src="/Images/mail.png"
              alt="email"
            />
          </a>
          <a href="https://github.com/ved35567">
            <img
              className="shadow-lg shadow-black p-6 md:w-25 md:h-25 sm:w-20"
              src="/Images/github.png"
              alt="github"
            />
          </a>
          <a href="https://www.linkedin.com/in/vedvyas-sahu-838612328/">
            <img
              className="shadow-lg shadow-black p-6 md:w-25 md:h-25 sm:w-20"
              src="/Images/linkdin.png"
              alt="linkedin"
            />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex shadow-lg rounded-lg mx-auto shadow-black mt-5"
      >
        <img
          className="md:h-100 brightness-120 shadow-2xs"
          src={user?.profileImage || "/Images/default.png"}
          alt="developer"
        />
      </motion.div>
    </div>
  );
};

export default Profile;
