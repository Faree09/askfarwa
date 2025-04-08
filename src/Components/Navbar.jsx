import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-mono text-xl font-bold text-white">
            farwa<span className="text-pink-400">.dev</span>
          </Link>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white text-2xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-pink-400 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors">About</Link>
            <Link to="/projects" className="text-gray-300 hover:text-pink-400 transition-colors">Projects</Link>
            <Link to="/contact" className="text-gray-300 hover:text-pink-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
