import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Fixed import

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    message: "",
  });
  const [status,setStatusMessage]=useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://backend-portfolio-v01.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        navigate("/thank-you", { replace: true });
      } else {
        setStatusMessage(`❌ ${data.message || "Something went wrong."}`);
      }
    } catch (err) {
      setStatusMessage("❌ Server error. Please try again later.");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className="text-black font-bold border-2 p-2 tracking-[5px] font-[Montserrat] text-center text-2xl mt-14">
          CONTACT
        </h3>
        <div className="flex flex-col items-center justify-center flex-wrap gap-12 mt-5 mx-5">
          <motion.p
            className="text-[1rem]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Got a project in mind or just want to connect? I m always open to
            discussing new ideas, collaborations, or freelance opportunities.
            Let’s build something great together — drop me a message and I will
            get back to you as soon as possible!
          </motion.p>
          <img
            className="separator-black"
            src="/Images/separatorBlack 1.png"
            alt="separator"
          />
        </div>
      </div>

      <motion.div
        className="flex flex-col items-center mt-20"
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
            className="flex flex-col items-center justify-center gap-5"
            onSubmit={handleSubmit}
          >
            {/* Name Input */}
            <motion.input
              className="border-l-2 w-80 border-b-2 p-2"
              type="text"
              name="name"
              required
              placeholder="ENTER YOUR NAME*"
              value={formData.name}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
            />

            {/* Email Input */}
            <motion.input
              className="border-l-2 w-80 border-b-2 p-2"
              type="email"
              name="email"
              required
              placeholder="ENTER YOUR EMAIL*"
              value={formData.email}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
            />

            {/* Phone Input */}
            <motion.input
              className="border-l-2 border-b-2 p-2 w-80"
              type="tel"
              name="phone_no"
              placeholder="PHONE NUMBER"
              value={formData.phone_no}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
            />

            {/* Message Input */}
            <motion.textarea
              className="border-l-2 border-b-2 w-80"
              required
              name="message"
              placeholder="YOUR MESSAGE*"
              rows="4"
              value={formData.message}
              onChange={handleChange}
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
