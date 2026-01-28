"use client";

import { Mail, Phone, MapPin, MoveRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full mt-20">

      {/* top divider */}
      <div className="w-full h-px bg-[#494948]" />

      {/* background brand */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-8xl md:text-9xl font-[outfit-bold] uppercase tracking-widest text-muted-foreground/5">
          Jetlineaviator
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h2 className="font-[outfit-bold] text-2xl mb-4">Jetlineaviator</h2>
          <p className="font-[outfit] text-muted-foreground max-w-sm">
            Connecting East and West with premium aviation services, operational
            excellence, and industry-leading expertise.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-[outfit-bold] mb-4">Explore</h3>
          <ul className="space-y-3 font-[outfit] text-muted-foreground">
            <li className="hover:text-white transition cursor-pointer">About</li>
            <li className="hover:text-white transition cursor-pointer">Services</li>
            <li className="hover:text-white transition cursor-pointer">Why Choose Us</li>
            <li className="hover:text-white transition cursor-pointer">Apply</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-[outfit-bold] mb-4">Contact</h3>

          <div className="space-y-4 font-[outfit] text-muted-foreground">
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Kyrgyzstan, Central Asia</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>info@jetlineaviator.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+996 XXX XXX XXX</span>
            </div>

            <button className="mt-4 inline-flex items-center gap-3 text-[#FE0241] hover:gap-4 transition-all">
              Contact Us <MoveRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="w-full h-px bg-[#494948]" />

      <div className="py-6 text-center text-sm font-[outfit] text-muted-foreground">
        © {new Date().getFullYear()} Jetlineaviator. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
