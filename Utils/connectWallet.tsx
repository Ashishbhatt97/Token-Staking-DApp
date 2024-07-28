import YesTokenABI from "@/app/Contract/YesTokenABI.json";
import StakingABI from "@/app/Contract/StakingABI.json";
import { BrowserProvider, Contract, ethers, Signer } from "ethers";

const connectWallet = async () => {
  try {
    let [signer, provider, stakingContract, yesTokenContract, chainId]: [
      Signer | null,
      BrowserProvider | null,
      Contract | null,
      Contract | null,
      number | null
    ] = [null, null, null, null, null];

    const { ethereum }: any = window;

    if (!ethereum) {
      throw new Error("Metamask is Not Installed");
    }

    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    const chainIdHex = await ethereum.request({
      method: "eth_chainId",
    });

    chainId = parseInt(chainIdHex, 10);
    const account = accounts[0];
    provider = new ethers.BrowserProvider(ethereum);
    signer = await provider.getSigner();

    const stakingContractAddress = "0xF3F830b8D73F4e948eFA296973cD14D59694eCb1";
    const yesTokenContractAddress =
      "0x64e0c1875BC1af5AFC842484686a53aAAa6041DA";

    stakingContract = new Contract(
      stakingContractAddress,
      StakingABI.abi,
      signer
    );

    yesTokenContract = new Contract(
      yesTokenContractAddress,
      YesTokenABI.abi,
      signer
    );

    return {
      provider,
      account,
      yesTokenContract,
      stakingContract,
      chainId,
    };
  } catch (error) {
    console.log(error);
  }
};

export default connectWallet;
