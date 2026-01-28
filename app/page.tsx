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
      <section className="relative flex flex-col items-center justify-center w-full">
        <div className="w-full h-px bg-[#494948] absolute top-0 left-0"></div>
        <div className="w-full grid grid-cols-12 grid-rows-[auto]">
          <Image
            width={600}
            height={400}
            className="w-full row-start-1 row-end-2 col-start-1 col-end-11"
            src="/images/airplane.webp"
            alt=""
          />
          <div className="h-full bg-[#494948] w-px row-start-1 row-end-2 col-start-11 col-end-12"></div>
        </div>
        <div className="w-full h-px bg-[#494948] absolute bottom-0 left-0"></div>
      </section>
      <RegistrationForm />
    </main>
  );
}
