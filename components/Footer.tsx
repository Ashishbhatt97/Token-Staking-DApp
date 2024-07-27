import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-3 mt-6 w-full shrink-0  items-center px-4 800:px-6 border-t border-black/20">
      <div className="container flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-black">
          &copy; 2024 Decentralized Staking. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
          <Link
            href="#"
            className="text-sm text-black hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-sm text-black hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm text-black hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
