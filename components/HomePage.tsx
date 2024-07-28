import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomePage = () => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from("#heading", {
      y: -20,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "power1",
    });

    gsap.from("#subheading", {
      y: -20,
      opacity: 0,
      duration: 1,
      ease: "power1",
      delay: 2,
    });

    gsap.from(".btn", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power1",
      delay: 2.5,
    });
  });

  const router = useRouter();
  return (
    <section className="w-full py-12 800:py-24 1024:py-32">
      <div className="container px-4 800:px-6 text-center text-black">
        <h1
          id="heading"
          className="text-4xl font-bold tracking-tight sm:text-5xl 800:text-6xl "
        >
          Decentralized Token Staking
        </h1>
        <p
          id="subheading"
          className="mt-3 max-w-md mx-auto text-lg text-black/80 "
        >
          Earn rewards by staking your tokens on our secure and decentralized
          platform.
        </p>
        <div className="mt-8 flex justify-center gap-x-6">
          <Button
            onClick={() => router.push("/stake")}
            className="btn px-4 py-2 rounded-md text-sm font-medium text-primary-foreground bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
          >
            Start Staking
          </Button>
          <Link
            href="#"
            className="btn inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-black/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
            prefetch={false}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
