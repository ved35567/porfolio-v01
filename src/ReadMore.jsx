import React from "react";
import { motion, easeOut } from "motion/react";
const ReadMore = () => {
  return (
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
        engaging, and responsive web experiences that not only look great but
        function beautifully across all devices.
      </p>

      <p>
        I believe the front-end is where creativity meets code — where ideas
        come to life in the browser. Whether I’m building smooth animations,
        intuitive interfaces, or clean layouts, I always keep the user at the
        heart of every decision.
      </p>

      <p>
        🧠 <strong>My Approach</strong>
        <br />I focus on writing clean, modular, and maintainable code. I’m a
        huge fan of component-based architecture, reusable UI patterns, and
        performance optimization.
      </p>

      <ul className="list-disc pl-5 space-y-1">
        <li>🎯 Pixel-perfect implementation based on your designs or ideas</li>
        <li>
          ⚙️ Reusable, maintainable code using React and component libraries
        </li>
        <li>💡 Creative, user-centered design thinking</li>
        <li>📱 Mobile-first and fully responsive layouts</li>
        <li>
          ⚡ Smooth interactions using animation tools like Framer Motion & GSAP
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
          <strong>Frameworks/Libraries:</strong> React.js, Tailwind CSS, Framer
          Motion, GSAP
        </li>
        <li>
          <strong>Design:</strong> Figma, Adobe XD
        </li>
        <li>
          <strong>Tools:</strong> Git & GitHub, VS Code, Vite, npm/yarn
        </li>
        <li>
          <strong>Workflow:</strong> Agile, component-driven, version-controlled
        </li>
      </ul>

      <p>
        🤝 <strong>Let’s Build Together</strong>
        <br />
        I’m always excited to collaborate on new and exciting projects — whether
        you’re launching something new or refreshing the old, I’d love to help
        bring your vision to life!
      </p>
    </motion.div>
  );
};

export default ReadMore;
