import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  return (
    <section className="w-full py-12 800:py-24 1024:py-32">
      <div className="container px-4 800:px-6 text-center text-black">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl 800:text-6xl">
          Decentralized Token Staking
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-black/80">
          Earn rewards by staking your tokens on our secure and decentralized
          platform.
        </p>
        <div className="mt-8 flex justify-center gap-x-6">
          <Button
            onClick={() => router.push("/stake")}
            className="px-4 py-2 rounded-md text-sm font-medium text-primary-foreground bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Start Staking
          </Button>
          <Link
            href="#"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-black/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
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
