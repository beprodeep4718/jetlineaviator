import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#050B1E] text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-sm tracking-widest text-[#FE0241] mb-4">
              ABOUT US
            </p>
            <h2 className="text-4xl md:text-5xl font-[outfit] leading-tight">
              Experts in Aviation. <br /> Driven by Innovation.
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-8 text-white/80 text-base md:text-lg">
            <p>
              At Jetlineaviator, we advance the aviation industry through
              tailor-made consulting solutions. With decades of operational
              experience and a global professional network, we help organizations
              navigate complex aviation challenges with confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-white font-semibold mb-2">
                  Global Network
                </h4>
                <p className="text-sm text-white/70">
                  Industry connections across operations, safety, and training.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-white font-semibold mb-2">
                  Proven Experience
                </h4>
                <p className="text-sm text-white/70">
                  Decades of hands-on aviation and regulatory expertise.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
