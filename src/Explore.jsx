import React from "react";
import { motion } from "framer-motion";

const ExplorePage = () => {
  return (
    <motion.div
      className="p-6 max-w-4xl mx-auto max-h-[1000px] overflow-y-auto box-content shadow-2xl shadow-gray-500  border-2 rounded-md "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-3xl font-bold mb-6">My Frontend Developer Journey</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">How I Got Into Frontend</h2>
        <p className="text-gray-700">
          My journey into frontend development started with a deep interest in
          how websites are built and designed...
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Technologies I Use</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>HTML5, CSS3, JavaScript (ES6+)</li>
          <li>React.js (Hooks, Functional Components)</li>
          <li>Tailwind CSS, Bootstrap</li>
          <li>Version Control: Git & GitHub</li>
          <li>Tools: VS Code, Figma (basic), Chrome DevTools</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Projects I've Built</h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>1. Portfolio Website</strong> – Built using React and
            Tailwind CSS. A fully responsive, single-page app showcasing my
            projects and skills.
          </li>
          <li>
            <strong>2. Recipe Finder App</strong> – A React app that fetches
            recipes using an API. Users can search by ingredient or meal type.
            Learned API handling and state management.
          </li>
          <li>
            <strong>3. E-commerce UI</strong> – Created a responsive e-commerce
            frontend with product cards, filters, and cart UI using React and
            CSS Grid/Flexbox.
          </li>
          <li>
            <strong>4. Weather App</strong> – A clean and responsive UI that
            shows real-time weather data using OpenWeather API. Focused on
            responsive design and API integration.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">My Approach</h2>
        <p className="text-gray-700">
          I believe a good UI is clean, intuitive, and fast. I focus on writing
          maintainable code, reusing components, and keeping layouts responsive.
          I also enjoy exploring new libraries and improving user experience
          wherever possible.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Beyond Code</h2>
        <p className="text-gray-700">
          When I'm not coding, I enjoy listening to music, exploring new tech,
          and leveling up my skills. One quote I live by:{" "}
          <em>"Learn continuously, improve constantly."</em>
        </p>
      </section>
      {/* Rest of your sections remain same */}
    </motion.div>
  );
};

export default ExplorePage;
