"use client";

import { Mail, Phone, MapPin, MoveRight } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#050B1E] text-white">

      {/* CTA STRIP */}

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div className="md:col-span-1">
          <Image
                      src="/images/logo-dark-transparent.png"
                      alt="Skyway Logo"
                      width={180}
                      height={36}
                      className="rounded-md object-cover"
                    />
          <p className="text-white/70 text-sm leading-relaxed">
            Delivering world-class aviation consulting, compliance, and
            operational solutions across global markets.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="hover:text-white transition cursor-pointer">About</li>
            <li className="hover:text-white transition cursor-pointer">Why Choose Us</li>
            <li className="hover:text-white transition cursor-pointer">Careers</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="hover:text-white transition cursor-pointer">Consulting</li>
            <li className="hover:text-white transition cursor-pointer">Training</li>
            <li className="hover:text-white transition cursor-pointer">Licensing</li>
            <li className="hover:text-white transition cursor-pointer">Operations</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>

          <div className="space-y-4 text-sm text-white/70">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-[#FE0241]" />
              <span>Kyrgyzstan • Central Asia</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#FE0241]" />
              <span>info@jetlineaviator.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#FE0241]" />
              <span>+996 XXX XXX XXX</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-white/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Jetlineaviator. All rights reserved.</span>
          <span>Privacy Policy • Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
