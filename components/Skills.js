"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  const sections = [
    {
      title: "Core Competencies",
      items: [
        "Troubleshooting",
        "Programming",
        "Web Development",
        "UI/UX Collaboration",
        "Technical Support",
        "Version Control",
        "Basic Network Setup & Configuration",
        "Hardware/Software Installation",
      ],
    },
    {
      title: "Languages",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "C++"],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        "React",
        "Tailwind CSS",
        "Bootstrap",
        "ShadCN",
        "Radix UI",
        "Framer Motion",
        "Lucide React",
      ],
    },
    {
      title: "Database & Backend",
      items: ["MySQL", "XAMPP"],
    },
    {
      title: "Version Control & Deployment",
      items: ["Git", "GitHub", "GitHub Desktop", "Vercel"],
    },
    {
      title: "Design & Prototyping",
      items: ["Figma", "Adobe Photoshop", "Canva"],
    },
    {
      title: "IDEs & Tools",
      items: ["VS Code", "Vite", "Microsoft Office"],
    },
  ];

  const additionalSkills = [
    "Adaptable",
    "Team Player",
    "Good Communicator",
    "Problem Solver",
    "Organized",
    "Detail-Oriented",
    "Time-Efficient",
    "English",
    "Filipino",
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold text-gray-800 border-b border-gray-200 mb-10 pb-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Skills
      </motion.h2>

      <div className="grid gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            className="bg-white border border-gray-200 rounded-xl shadow p-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              {section.title}
            </h3>
            <div className="flex flex-wrap gap-3 text-gray-600">
              {section.items.map((item) => (
                <span
                  key={item}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Additional Skills
        </h3>
        <div className="flex flex-wrap gap-3 text-gray-600">
          {additionalSkills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
