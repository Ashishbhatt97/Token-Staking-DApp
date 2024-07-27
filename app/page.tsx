"use client";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Staking from "@/components/Staking";
import { useRef } from "react";

const Page = () => {
  const stakingRef = useRef(null);
  const featureRef = useRef(null);

  return (
    <>
      <Navbar stakingReference={stakingRef} featureReference={featureRef} />
      <HomePage />
      <Staking stakingReference={stakingRef} />
      <Features featureReference={featureRef} />
      <Footer />;
    </>
  );
};

export default Page;
