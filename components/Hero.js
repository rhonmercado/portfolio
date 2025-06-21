import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.div
      className="h-screen flex items-center justify-center flex-col text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-gray-800">Hi, I'm Rhonel 👋</h1>
      <p className="mt-4 text-lg text-gray-500 max-w-xl">
        An adaptable and motivated aspiring IT professional with interests in web development, tech support, and digital operations.
      </p>
      <a href="#projects" className="mt-6 px-6 py-2 bg-brand hover:bg-brand-dark text-white rounded transition">
        View My Works
      </a>
    </motion.div>
  )
}
