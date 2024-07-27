import React from "react";
import image from "@/app/Assets/tokens.avif";
import { Check } from "lucide-react";
import Image from "next/image";

const Staking = ({ stakingReference }: any) => {
  return (
    <section ref={stakingReference} className="w-full py-12 800:py-24 1024:py-32 ">
      <div className="container px-6 800:px-6 text-black ">
        <div className="grid grid-cols-1 800:grid-cols-2 gap-8">
          <div className="pl-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Earn Rewards by Staking
            </h2>
            <p className="mt-4 text-lg text-black/80">
              Stake your tokens on our decentralized platform and earn rewards.
              The more you stake, the higher your rewards will be.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-black" />
                </div>
                <p className="ml-3 text-lg text-black/80">
                  Secure your tokens with our decentralized smart contracts
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-black" />
                </div>
                <p className="ml-3 text-lg text-black/80">
                  Earn rewards based on your staked amount and the
                  platform&apos;s APY
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-black" />
                </div>
                <p className="ml-3 text-lg text-black/80">
                  Withdraw your tokens and rewards at any time
                </p>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={image}
              width="500"
              height="500"
              alt="Staking"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staking;
