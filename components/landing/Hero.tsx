"use client";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#050B1E]">
      {/* Background Pattern */}
      <img
        src="https://cdn.prod.website-files.com/6297d52448f7087a39460e88/629df62318bafcb7232b3461_Pattern.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-14">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[outfit] text-white leading-tight">
              Empowering Aviation <br />
              with Expertise and Innovation
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/80 max-w-xl mx-auto md:mx-0">
              Your Trusted Aviation Consulting Partner. Delivering comprehensive
              solutions for aircraft acquisition, management, and certification
              needs.
            </p>

            <div className="mt-10 flex items-center justify-center md:justify-start gap-4">
              <button className="px-8 py-4 bg-[#FE0241] text-white rounded-xl font-medium hover:scale-105 transition">
                Get Started
              </button>

              <MoveRight className="text-[#FE0241]" size={36} />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full">
            <Image
              src="/images/hero.webp"
              alt="Flight Insurance"
              width={600}
              height={800}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
