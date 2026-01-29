import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050B1E]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Skyway Logo"
            width={36}
            height={36}
            className="rounded-md object-cover"
          />
          <span className="text-white font-semibold text-lg tracking-wide">
            JETLINE<span className="text-[#FE0241]">AVIATOR</span>
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-10 text-white/80 text-sm">
          {["Home", "Services", "Training", "Contact"].map((item) => (
            <Link
              key={item}
              href="#"
              className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FE0241] after:transition-all hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex items-center px-6 py-2.5 rounded-xl bg-[#FE0241] text-white text-sm font-medium hover:scale-105 transition">
            Get Started
          </button>
          <button className="md:hidden p-2 rounded-lg hover:bg-white/10 transition">
            <Menu className="text-white" />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
