const Footer = () => {
  return (
    <footer className="w-full bg-white/10 dark:bg-black/20 border-t border-white/20 dark:border-gray-800 backdrop-blur-md shadow-inner relative">
      <div className="absolute inset-0 pointer-events-none rounded-t-xl border-t-2 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-20 blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-white/80 dark:text-gray-300">
        <div className="font-semibold tracking-wide">
          Smart India Hackathon 2025-2026
          <img
            src="src/assets/logo.webp"
            alt="Logo"
            className="h-8 w-8 float-left rounded-2xl object-center mr-3"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
