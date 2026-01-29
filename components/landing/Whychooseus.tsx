import {
  Briefcase,
  Building,
  Calendar,
  Globe,
  Home,
  MoveRight,
} from "lucide-react";

type Service = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

const Whychooseus: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Calendar strokeWidth={1.5} />,
      title: "Experience You Can Trust",
      description:
        "Decades of real-world aviation experience delivering reliable, compliant, and efficient operations.",
    },
    {
      icon: <Globe strokeWidth={1.5} />,
      title: "Global Reach, Local Focus",
      description:
        "International expertise combined with deep understanding of regional aviation regulations.",
    },
    {
      icon: <MoveRight strokeWidth={1.5} />,
      title: "Customized Solutions",
      description:
        "Tailored consulting strategies built around your operational and business goals.",
    },
    {
      icon: <Home strokeWidth={1.5} />,
      title: "Industry-Leading Experts",
      description:
        "Specialists in aircraft management, licensing, training, and certification.",
    },
    {
      icon: <Building strokeWidth={1.5} />,
      title: "Innovative Approach",
      description:
        "Modern tools, evolving compliance strategies, and forward-thinking operations.",
    },
    {
      icon: <Briefcase strokeWidth={1.5} />,
      title: "24/7 Client Support",
      description:
        "Dedicated support teams ensuring uninterrupted operations and rapid response.",
    },
  ];

  return (
    <section className="w-full bg-[#050B1E] text-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm tracking-widest text-[#FE0241] mb-4">
            WHY CHOOSE US
          </p>
          <h2 className="text-4xl md:text-5xl font-[outfit] leading-tight">
            Trusted Aviation Consulting <br /> Built on Experience
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FE0241]/50 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#FE0241]/10 text-[#FE0241] mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whychooseus;
