"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "keen-slider/keen-slider.min.css";

const projects = [
  {
    id: 1,
    title: "Online Barangay Communication System",
    description: [
      "Created a working prototype that lets residents send reports and feedback to their local barangay",
      "Built an admin dashboard to view and manage over 50 test reports",
      "Connected the system with Telegram’s API to simulate real-time alerts",
      "Tech Stack: HTML, CSS, JavaScript, Bootstrap, PHP, XAMPP",
    ],
    images: ["/projects/barangay1.png", "/projects/barangay2.png"],
    github: "https://github.com/your-username/barangay-system",
  },
  {
    id: 2,
    title: "PRIME Philippines Website Revamp (Internship)",
    description: [
      "Collaborated with a 10-person team to redesign 20+ pages of the company website based on Figma mockups.",
      "Built 15+ reusable UI components to support a consistent and responsive design system.",
      "Improved development workflow by 30% through build optimization and better package management.",
      "Structured front-end data handling to align with backend API requirements, ensuring smoother integration.",
      "Participated in normalizing existing company data to prepare backend database schemas for future use.",
      "Used Git and GitHub for version control, team collaboration, and code reviews.",
      "Tech Stack:** React, TypeScript, Tailwind CSS, Framer Motion, ShadCN, Lucide React, RadixUI, Vite, npm",
    ],
    images: ["/projects/prime1.png", "/projects/prime2.png"],
    github: "https://github.com/your-username/internship-project",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold text-gray-800 border-b border-gray-200 mb-10 pb-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 mb-4">
              Screenshot preview
            </div>
            <button
              onClick={() => handleOpen(project)}
              className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded transition"
            >
              View Project
            </button>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="bg-white w-full max-w-7xl h-[90vh] mx-auto rounded-xl overflow-hidden flex flex-col md:grid md:grid-cols-2 shadow-lg relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              transition={{ duration: 0.3 }}
            >
              <div className="h-1/2 md:h-full">
                <ManualCarousel images={selectedProject.images} />
              </div>
              <div className="p-6 flex flex-col justify-between h-1/2 md:h-full overflow-y-auto">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {selectedProject.title}
                  </h3>
                  <div className="text-gray-600 mb-6 space-y-3">
                    <ul className="list-disc list-inside space-y-2">
                      {selectedProject.description.map((point, index) => (
                        <li key={index} className="leading-relaxed">
                          {point.startsWith("Tech Stack:") ? (
                            <span className="font-semibold">{point}</span>
                          ) : (
                            point
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded transition"
                  >
                    Go to GitHub
                  </a>
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-red-500 text-sm"
                  >
                    Close ✕
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ManualCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const paginate = (dir) => {
    setDirection(dir);
    setCurrent((prev) =>
      dir === 1 ? (prev + 1) % images.length : (prev - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative bg-black flex items-center justify-center h-full overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.img
          key={current}
          src={images[current]}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="object-contain max-h-full max-w-full absolute"
        />
      </AnimatePresence>
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
      >
        ←
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
      >
        →
      </button>
    </div>
  );
}
