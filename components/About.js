"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const [expandedWork, setExpandedWork] = useState(null);
  const [expandedEdu, setExpandedEdu] = useState(null);

  const toggleWork = (idx) => {
    setExpandedWork(expandedWork === idx ? null : idx);
  };

  const toggleEdu = (idx) => {
    setExpandedEdu(expandedEdu === idx ? null : idx);
  };

  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold text-gray-800 mb-10 border-b border-gray-200 pb-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-3 gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center md:justify-start">
          <div className="w-48 h-48 rounded-full bg-gray-200 overflow-hidden relative">
            <Image
              src="/pfp.jpg"
              alt="Profile Placeholder"
              fill
              sizes="(max-width: 768px) 100vw, 200px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-2 space-y-6 text-gray-700 text-base leading-relaxed px-2 md:px-0">
          <p>
            I'm an adaptable and motivated aspiring IT professional based in Marilao, Bulacan, with hands-on experience in front-end development, user support, data handling, and digital operations.
          </p>
          <p>
            I enjoy learning new tools, solving technical problems, and finding ways to make things work more efficiently. Whether it's building interfaces, supporting users, or organizing digital processes, I focus on clear, accurate solutions and teamwork.
          </p>
          <p>
            I'm open to roles where I can contribute to tech solutions, day-to-day support, or digital innovation.
          </p>
        </div>
      </motion.div>

      {/* Work Experience Timeline */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Work Experience</h3>
        <div className="border-l-2 border-gray-300 space-y-6 pl-6">
          {workHistory.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative cursor-pointer border border-gray-200 rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden"
              onClick={() => toggleWork(idx)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-[14px] top-6 w-3 h-3 bg-brand rounded-full" />
              <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.role}</h4>
              <p className="text-sm text-gray-500">{item.company} — {item.period}</p>
              <AnimatePresence>
                {expandedWork === idx && (
                  <motion.ul
                    className="list-disc list-inside mt-4 space-y-2 text-gray-700"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {item.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education Timeline */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
        <div className="border-l-2 border-gray-300 space-y-6 pl-6">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative cursor-pointer border border-gray-200 rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden"
              onClick={() => toggleEdu(idx)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-[14px] top-6 w-3 h-3 bg-brand rounded-full" />
              <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.degree}</h4>
              <p className="text-sm text-gray-500">{item.school} — {item.period}</p>
              <AnimatePresence>
                {expandedEdu === idx && (
                  <motion.ul
                    className="list-disc list-inside mt-4 space-y-2 text-gray-700"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {item.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Certifications</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
          <p className="text-gray-800 font-medium">NC II – Computer Systems Servicing (CSS)</p>
          <p className="text-gray-500 text-sm">In Progress – Expected September 2025</p>
        </div>
      </motion.div>
    </section>
  );
}


const workHistory = [
  {
    role: "Front-End Web Development Intern",
    company: "PRIME Philippines",
    period: "Mar 2025 – May 2025",
    details: [
      "Collaborated with a 10-person team to redesign 20+ pages of the company website based on Figma mockups.",
      "Built 15+ reusable UI components to support a consistent and responsive design system.",
      "Improved development workflow by 30% through build optimization and better package management.",
      "Structured front-end data handling to align with backend API requirements, ensuring smoother integration.",
      "Participated in normalizing existing company data to prepare backend database schemas for future use.",
      "Used Git and GitHub for version control, team collaboration, and code reviews.",
      "Tech Stack: React, TypeScript, Tailwind CSS, Framer Motion, ShadCN, Lucide React, RadixUI, Vite, npm",
    ],
  },
  {
    role: "Printing Production Assistant",
    company: "NWGT Printing Services",
    period: "Jan 2020 – Jan 2021",
    details: [
      "Assisted in end-to-end T-shirt printing operations, including garment preparation, design sampling, print production, and final order fulfillment.",
      "Helped prepare and align 100+ garments weekly for heat press or screen printing, supporting accurate design placement and production flow",
      "Performed quality checks on 500+ printed shirts per month to ensure print consistency and reduce rework.",
      "Supported delivery coordination by organizing and loading completed orders into transport trucks before shift end.",
      "Developed time management, teamwork, and multitasking skills in a fast-paced production environment.",
    ],
  },
  {
    role: "Customer Service Representative (Seasonal)",
    company: "Inspiro Manila",
    period: "Nov 2019 – Dec 2019",
    details: [
      "Delivered multi-channel customer support (voice, chat, email) in a high-pressure, performance-focused setting.",
      "Resolved both general and technical issues with a clear, step-by-step approach.",
      "Maintained an average customer satisfaction (CSAT) score of around 90% through consistent and timely support.",
    ],
  },
  {
    role: "Technical Assistant (Internet Cafe - Summer Job)",
    company: "Gabriel’s Cyberzone",
    period: "Apr 2015 – May 2015",
    details: [
      "Installed software and helped troubleshoot Windows PCs",
      "Guided users through formatting, printing, and other basic computer tasks",
      "Monitored sessions and kept systems running smoothly with routine maintenance",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Access Computer College – Caloocan City",
    period: "Expected Graduation: September 2025",
    details: [
      "Relevant Coursework: Web Development, Database Management (MySQL), Basic Networking Setup & Configuration, Hardware/Software Installation & Troubleshooting"
    ],
  },
  {
    degree: "High School Diploma",
    school: "St. Therese of Rose School – Caloocan City",
    period: "Graduated",
    details: [
      "Supreme Student Government – Events Coordinator",
      "Coordinated and supported the planning and scheduling of school events in collaboration with various departments.",
      "Delivered announcements and updates across classrooms, enhancing communication flow",
      "Member of Music Club and Dance Troupe."
    ],
  },
];
