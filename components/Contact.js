"use client";
import { Mail, Github, Phone, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-xl mx-auto text-center">
      <motion.h2
        className="text-3xl font-semibold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Let's Connect
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Feel free to reach out via email, phone, or socials below.
      </motion.p>

      <motion.div
        className="space-y-4 text-sm text-gray-700 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center space-x-2">
          <Phone className="w-5 h-5 text-brand" />
          <span className="font-medium">+63 956 268 1437</span>
          <span className="text-gray-500">(Phone/Viber)</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Mail className="w-5 h-5 text-brand" />
          <a
            href="mailto:rhonmercado520@gmail.com"
            className="text-brand hover:text-brand-dark"
          >
            rhonmercado520@gmail.com
          </a>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center flex-wrap gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <ContactButton
          icon={<Github className="w-5 h-5" />}
          label="GitHub"
          link="https://github.com/rhonmercado"
        />
        <ContactButton
          icon={<Facebook className="w-5 h-5" />}
          label="Facebook"
          link="https://www.facebook.com/rhon.edrian.mercado"
        />
        <ContactButton
          icon={<Instagram className="w-5 h-5" />}
          label="Instagram"
          link="https://www.instagram.com/raw.nly99/"
        />
      </motion.div>
    </section>
  );
}

function ContactButton({ icon, label, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-2 border border-gray-300 hover:border-brand text-gray-700 hover:text-brand px-4 py-2 rounded-full transition"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
