import connectWallet from "@/utils/connectWallet";
import React, { useState } from "react";
import { Button } from "./ui/button";

const Wallet = () => {
  const [state, setState] = useState({
    provider: null,
    account: null,
    stakingContract: null,
    yesTokenContract: null,
    chainId: null,
  });

  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const handleWallet = async () => {
    try {
      setIsLoading(true);
      const {
        provider,
        account,
        stakingContract,
        yesTokenContract,
        chainId,
      }: any = await connectWallet();

      setState({
        provider,
        account,
        stakingContract,
        yesTokenContract,
        chainId,
      });

      console.log({
        provider,
        account,
        stakingContract,
        yesTokenContract,
        chainId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button variant={"secondary"} onClick={() => handleWallet()}>
      Connect Wallet
    </Button>
  );
};

export default Wallet;
