import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-black text-white border-b border-white/10 shadow-md">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="font-mono text-xl font-bold text-white hover:text-pink-400 transition"
          >
            farwa<span className="text-pink-400">.dev</span>
          </Link>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-2xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-pink-400 transition">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-pink-400 transition">About</Link>
            <Link to="/projects" className="text-gray-300 hover:text-pink-400 transition">Projects</Link>
            <Link to="/contact" className="text-gray-300 hover:text-pink-400 transition">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
