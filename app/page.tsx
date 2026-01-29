"use client";
import About from "@/components/landing/About";
import Hero from "@/components/landing/Hero";
import RegistrationForm from "@/components/landing/RegistrationForm";
import Whychooseus from "@/components/landing/Whychooseus";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Whychooseus />
      <section className="relative w-full h-[70vh] min-h-105 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/airplane.webp"
          alt="Aircraft in flight"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#050B1E]/90 via-[#050B1E]/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-xl text-white">
            <h2 className="text-4xl md:text-5xl font-[outfit] leading-tight">
              Comprehensive <br /> Aviation Solutions
            </h2>

            <p className="mt-6 text-white/80 text-base md:text-lg">
              At Jetlineaviator, we deliver end-to-end aviation solutions — from
              aircraft acquisition and management to financing, licensing,
              training, and certification — helping operators and engineers stay
              compliant, efficient, and future-ready.
            </p>

            <button className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-[#FE0241] rounded-xl text-white font-medium hover:scale-105 transition">
              Explore Our Services
            </button>
          </div>
        </div>
      </section>

      <RegistrationForm />
    </main>
  );
}
