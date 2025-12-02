"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";

interface Location {
  name: string;
  address: string;
  phone: string;
  img: string;
  href: string; // fixed typo from 'herf'
}

const locations: Location[] = [
  {
    name: "Bedford Location",
    address: "2319 Mitchell Rd - Bedford, IN 47421",
    phone: "812‑788‑7749",
    img: "/locations/image.jpg",
    href: "/locations",
  },
  {
    name: "Paoli Location",
    address: "107 N Gospel St - Paoli, IN 47454",
    phone: "812‑123‑4567",
    img: "/locations/image2.jpg",
    href: "/locations",
  },
];

const Locations = () => {
  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <Container>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((loc, idx) => (
            <a
              key={idx}
              href={loc.href} // uses individual href
              className="relative rounded-xl overflow-hidden shadow-lg group block"
            >
              <Image
                src={loc.img}
                alt={loc.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                <h3 className="font-bold text-xl">{loc.name}</h3>
                <p>{loc.address}</p>
                <p>{loc.phone}</p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Locations;
