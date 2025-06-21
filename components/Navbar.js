"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // trigger entrance animation on first render
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <AnimatePresence>
      {isMounted && (
        <motion.nav
          key="navbar"
          className="fixed top-0 left-0 w-full bg-white shadow z-50"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="font-bold text-lg text-brand">rhon.dev</h1>

            {/* Desktop nav */}
            <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-brand transition"
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Hamburger menu */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden bg-white px-4 overflow-hidden"
              >
                <ul className="flex flex-col space-y-4 py-4 text-sm font-medium text-gray-800">
                  {links.map(({ href, label }) => (
                    <li key={href}>
                      <button
  onClick={() => {
    closeMenu();
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100); // wait for menu to close
  }}
  className="block text-left w-full hover:text-brand transition"
>
  {label}
</button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
