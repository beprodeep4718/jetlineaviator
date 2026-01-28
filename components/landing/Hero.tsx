"use client"
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative py-24 w-full h-screen flex items-center overflow-hidden">
        <div className="h-screen absolute left-0 top-0 -z-1">
          <img src="https://cdn.prod.website-files.com/6297d52448f7087a39460e88/629df62318bafcb7232b3461_Pattern.svg" alt="" />
        </div>
        <div className="container mx-auto px-4 flex flex-row items-center max-w-7xl text-left gap-12 min-h-screen">
          <div>
            <p className="font-[outfit]">Our Mission is</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 font-[outfit-bold]">
              Connecting
            </h1>
            <h1 className="text-5xl md:text-6xl text-white mb-6 font-[outfit-bold] font-extrabold">
              East and West
            </h1>
            <div className="flex items-center gap-4 justify-center">
              <MoveRight className="text-[#FE0241]" size={"54px"} strokeWidth="1px" />
              <p className="text-xl font-[outfit] md:text-2xl text-white max-w-2xl">
                We cover the huge areas of Central Asia, providing high quality services for the demanding audience.
              </p>
            </div>
          </div>
          <div className="rounded-b-xl overflow-hidden shadow-xl border-2 border-white h-full">
            <Image
              src="/images/hero.webp"
              alt="Flight Insurance"
              width={400}
              height={600}
              className="mx-auto h-full"
              priority
            />
          </div>
        </div>
      </section>
  )
}

export default Hero