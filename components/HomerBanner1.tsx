"use client";

import React from "react";
import Image from "next/image";

const HomeBanner1 = () => {
  return (
    <section className="w-full relative">
      <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
  <Image
    src="/locations/image6.png"
    alt="Home Banner"
    fill
    className="object-cover object-center"
  />
</div>

    </section>
  );
};

export default HomeBanner1;
