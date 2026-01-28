"use client"
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative py-24 w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="h-screen absolute left-0 top-0 -z-1">
          <img src="https://cdn.prod.website-files.com/6297d52448f7087a39460e88/629df62318bafcb7232b3461_Pattern.svg" alt="" />
        </div>
        <div className="container w-11/12 h-full grid grid-cols-12 grid-rows-[auto] gap-x-10 flex-1  min-h-screen items-center pt-20">
            <div className='row-start-1 row-end-2 col-start-2 col-end-7'>
              <p className="font-[outfit] mt-10">Our Mission is</p>
              <h1 className="text-6xl md:text-7xl text-white font-[outfit] mt-10">
                Connecting
              </h1>
              <h1 className="text-6xl md:text-7xl text-white font-[outfit] mt-5">
                East and West
              </h1>
            </div>
              <MoveRight className="text-[#FE0241] row-start-2 row-end-3 col-start-2 col-end-3" size={"54px"} strokeWidth="1px" />
            <div className="row-start-2 row-end-3 col-start-3 col-end-6">
              <p className="text-lg font-[outfit] text-white">
                We cover the huge areas of Central Asia, providing high quality services for the demanding audience.
              </p>
            </div>
          <div className="row-start-1 row-end-3 col-start-7  col-end-13 rounded-b-xl overflow-hidden">
            <Image
              src="/images/hero.webp"
              alt="Flight Insurance"
              width={400}
              height={600}
              className="mx-auto w-full h-full"
              priority
            />
          </div>
        </div>
      </section>
  )
}

export default Hero