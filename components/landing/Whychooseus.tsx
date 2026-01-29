import { Briefcase, Building, Calendar, Globe, Home, MoveRight } from 'lucide-react'

type Service = {
    icon: React.ReactElement
    title: string
    description: string
}

const Whychooseus: React.FC = () => {
    const services: Service[] = [
        {
            icon: <Calendar strokeWidth={"1.5"} />,
            title: "Experience You Can Trust",
            description:
                "With decades of experience in the aviation sector, our team brings unparalleled insight and expertise to every project.",
        },
        {
            icon: <Globe strokeWidth={"1.5"}/>,
            title: "Global Reach, Local Focus",
            description:
                "We’ve worked with clients across continents, offering global solutions with localized expertise.",
        },
        {
            icon: <MoveRight strokeWidth={"1.5"}/>,
            title: "Customized Solutions",
            description:
                "Every client’s needs are unique, and we tailor our services to meet the specific requirements of your business.",
        },
        {
            icon: <Home strokeWidth={"1.5"}/>,
            title: "Industry-Leading Experts",
            description:
                "Our team consists of seasoned professionals with deep expertise in aircraft management, licensing, training, and certification.",
        },
        {
            icon: <Building strokeWidth={"1.5"}/>,
            title: "Innovative Approach",
            description:
                "We stay ahead of industry trends, leveraging the latest technology and best practices to provide innovative, forward-thinking solutions for our clients.",
        },
        {
            icon: <Briefcase strokeWidth={"1.5"}/>,
            title: "24/7 Client Support",
            description:
                "Our dedicated team is available around the clock to provide ongoing support, ensuring that any issues are swiftly addressed, and your operations run smoothly.",
        },
    ]
    return (
        <section className="relative flex flex-col items-center justify-center w-full">
            <div className="w-full flex items-center justify-center relative py-10">
                <h1 className="md:text-8xl text-4xl font-[outfit-bold] uppercase tracking-wider text-muted-foreground/5">
                    Jetlineaviator
                </h1>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h1 className="font-[outfit-bold] md:text-4xl text-2xl">Why Choose Us ?</h1>
                </div>
            </div>
            <div className="flex w-full max-w-6xl items-center justify-center flex-wrap">
                {services.map((item) => (
                    <div
                        key={item.title}
                        className="w-1/3 min-w-[320px] flex flex-col items-center px-8 py-10"
                    >
                        <span className="text-5xl mb-4 text-[#FE0241]">{item.icon}</span>
                        <h2 className="font-[outfit-bold] text-2xl mb-2 text-center">
                            {item.title}
                        </h2>
                        <p className="text-center font-[outfit] text-muted-foreground">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Whychooseus