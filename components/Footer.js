export default function Footer() {
  return (
    <footer className="text-center text-xs sm:text-sm text-gray-500 py-6 px-4 border-t mt-12 leading-relaxed">
      © {new Date().getFullYear()} All Rights Reserved

      {/* Add space between the two lines */}
      <div className="mt-2">
         React | Next.js | JavaScript | Tailwind CSS | Framer Motion | Lucide React
      </div>
    </footer>
  );
}
