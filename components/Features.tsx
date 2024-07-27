import { BoltIcon, Shield, Wallet2Icon } from "lucide-react";

const Features = ({ featureReference }: any) => {
  return (
    <section
      ref={featureReference}
      className="w-full py-12 800:py-24 1024:py-32 "
    >
      <div className="container px-4 800:px-6 text-black">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Platform Features
          </h2>
          <p className="mt-4 text-lg text-black/80 ">
            Discover the key features that make our platform stand out.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 1024:grid-cols-3 gap-8">
          <div className="bg-white/10 rounded-lg p-6 text-center border">
            <Shield className="h-8 w-8 mx-auto text-black" />
            <h3 className="mt-6 text-lg font-medium text-black">
              Secure Staking
            </h3>
            <p className="mt-2 text-base text-black/80">
              Your tokens are secured by our decentralized smart contracts,
              ensuring the safety of your assets.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-6 text-center border">
            <BoltIcon className="h-8 w-8 mx-auto text-black" />
            <h3 className="mt-6 text-lg font-medium text-black">High APY</h3>
            <p className="mt-2 text-base text-black/80">
              Earn competitive rewards with our high annual percentage yield
              (APY) on your staked tokens.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-6 text-center border">
            <Wallet2Icon className="h-8 w-8 mx-auto text-black" />
            <h3 className="mt-6 text-lg font-medium text-black">
              Flexible Withdrawals
            </h3>
            <p className="mt-2 text-base text-black/80">
              Withdraw your staked tokens and rewards at any time without any
              lock-up periods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
