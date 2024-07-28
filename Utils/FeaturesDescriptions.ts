import { BoltIcon, Shield, Wallet2Icon } from "lucide-react";
type FeatureKey = "Secure Staking" | "High APY" | "Flexible Withdrawals";

export const features: { heading: FeatureKey; para: string }[] = [
  {
    heading: "Secure Staking",
    para: "Your tokens are secured by our decentralized smart contracts, ensuring the safety of your assets.",
  },
  {
    heading: "High APY",
    para: "Earn competitive rewards with our high annual percentage yield (APY) on your staked tokens.",
  },
  {
    heading: "Flexible Withdrawals",
    para: "Withdraw your staked tokens and rewards at any time without any lock-up periods.",
  },
];

export const iconMap: Record<FeatureKey, React.ComponentType<any>> = {
  "Secure Staking": Shield,
  "High APY": BoltIcon,
  "Flexible Withdrawals": Wallet2Icon,
};
