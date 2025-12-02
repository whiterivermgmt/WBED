"use client";

import React from "react";
import HeroBanner from "@/components/ui/HeroBanner";
import OurServices from "@/components/ui/OurServices";
import HomeAbout from "@/components/HomeAbout";
import Locations from "@/components/ui/Locations";
import HomeGallery from "@/components/ui/HomeGallery";
import Reviews from "@/components/ui/Reviews";
import HomerBanner1 from "@/components/HomerBanner1";

const heroImages = [
  "/locations/image.jpg",
  "/locations/image2.jpg",
  "/locations/image4.jpg",
];

const HomePage = () => {
  return (
    <div className="space-y-16 lg:space-y-24">
      <HeroBanner />
      <HomerBanner1 />
      <HomeAbout />
      <Locations />
       <OurServices />
      <HomeGallery />
      <Reviews />
    </div>
  );
};

export default HomePage;
