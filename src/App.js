// src/App.js
import React from "react";
import KittenParticles from "./KittenParticles";

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-100 via-yellow-50 to-pink-100 text-gray-800 font-sans overflow-x-hidden">
      <KittenParticles />

      {/* Navbar */}
      <header className="w-full py-6 px-8 flex justify-between items-center z-10 relative">
        <h1 className="text-2xl font-bold text-pink-700">Aarav Sharma</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center text-center mt-20 px-4 z-10 relative">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-2">
          Electrical & Computer Science Engineer
        </h2>
        <p className="text-lg max-w-xl text-gray-700">
          Hi! I'm Aarav — a developer with an eye for design and a love for building aesthetic,
          responsive, and fun digital experiences. Coding, engineering, and creativity all in one.
        </p>
      </section>

      {/* About */}
      <section id="about" className="mt-28 px-6 z-10 relative">
        <h3 className="text-3xl font-semibold text-orange-700 mb-4">🌴 About Me</h3>
        <p className="text-gray-800 max-w-3xl">
          I'm currently a 2nd-year B.Tech student exploring both the world of software and core engineering.
          With a foundation in Electrical and Computer Science Engineering, I enjoy building full-stack web apps,
          solving real-world problems, and adding a touch of aesthetic flair to everything.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="mt-24 px-6 z-10 relative">
        <h3 className="text-3xl font-semibold text-orange-700 mb-4">🛠️ Skills</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl text-gray-700">
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML & CSS</li>
          <li>Python</li>
          <li>C++</li>
          <li>Git & GitHub</li>
          <li>Tailwind CSS</li>
          <li>Learning DSA</li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-24 px-6 z-10 relative">
        <h3 className="text-3xl font-semibold text-orange-700 mb-4">🚀 Projects</h3>
        <p className="text-gray-700">
          This section will include some of my cool personal and collaborative projects like this very portfolio.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-24 px-6 pb-20 z-10 relative">
        <h3 className="text-3xl font-semibold text-orange-700 mb-4">📬 Contact Me</h3>
        <p className="text-gray-700">
          Let’s connect! Reach out via email: <a href="mailto:aarav@example.com" className="text-blue-600 underline">aarav@example.com</a>
        </p>
      </section>
    </div>
  );
}

export default App;
