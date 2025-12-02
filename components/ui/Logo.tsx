"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="block select-none">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-start w-fit origin-left hover:scale-105 transition-transform duration-300"
      >
        <Image
          src="/logo/logo5.png"
          alt="Gerkin Construction Logo"
          width={240}
          height={80}
          className="w-[100px] sm:w-[130px] md:w-[140px] lg:w-[160px] h-auto"
          priority
        />
      </motion.div>
    </Link>
  );
};

export default Logo;
