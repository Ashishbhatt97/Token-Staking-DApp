import { features, iconMap } from "@/Utils/FeaturesDescriptions";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Features = ({ featureReference }: any) => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.from(".feat", {
      duration: 1.5,
      y: -100,
      opacity: 0,
      ease: "power2.out",
      stagger: {
        each: 0.2,
      },
      scrollTrigger: {
        trigger: ".feat",
        start: "top 80%",
        end: "bottom 80%",
      },
    });
  });

  return (
    <section
      ref={featureReference}
      className="w-full py-12 800:py-24 1024:py-32"
    >
      <div className="container px-4 800:px-6 text-black">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Platform Features
          </h2>
          <p className="mt-4 text-lg text-black/80">
            Discover the key features that make our platform stand out.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 1024:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.heading];
            return (
              <div
                key={index}
                className="bg-white/10 rounded-lg p-6 text-center border feat"
              >
                <Icon className="h-8 w-8 mx-auto text-black" />
                <h3 className="mt-6 text-lg font-medium text-black">
                  {feature.heading}
                </h3>
                <p className="mt-2 text-base text-black/80">{feature.para}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Features;
