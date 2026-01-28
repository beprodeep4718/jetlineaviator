import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center w-full"
    >
      <div className="w-full h-px bg-[#494948] absolute top-0 left-0"></div>
      <div className="w-11/12 h-full grid grid-cols-12 grid-rows-[auto] gap-x-10">
        <div className="col-start-2 col-end-3 row-start-1 row-end-2">
          <h1 className="font-[outfit] mt-10">About</h1>
        </div>
        <div className="h-full bg-[#494948] w-px row-start-1 row-end-2 col-start-3 col-end-4"></div>
        <div className="row-start-1 row-end-2 col-start-4 col-end-10 py-20">
          <p className="font-[outfit]">
            Central Asia is the ancient communication hub linking East and West.
            Nowadays, here cross the key aviation routes between Europe and
            Asia. Therefore, the establishment of a luxury category aviation
            company in Kyrgyzstan, the mountain region of Central Asia, has
            become a consequence of the rapid development of the transport
            business.
          </p>
        </div>
      </div>
      <div className="w-full h-px bg-[#494948] absolute bottom-0 left-0"></div>
    </section>
  );
};

export default About;
