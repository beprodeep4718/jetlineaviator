import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050B1E]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="text-white font-bold text-lg tracking-wide">
          SKY<span className="text-[#FE0241]">WAY</span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-10 text-white/80 text-sm">
          <Link href="#" className="hover:text-white transition">Home</Link>
          <Link href="#" className="hover:text-white transition">Services</Link>
          <Link href="#" className="hover:text-white transition">Training</Link>
          <Link href="#" className="hover:text-white transition">Contact</Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-5 py-2 rounded-lg bg-[#FE0241] text-white text-sm hover:scale-105 transition">
            Get Started
          </button>
          <Menu className="md:hidden text-white" />
        </div>

      </div>
    </header>
  );
};

export default Navbar;
