"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const locations = [
  {
    name: "Bedford",
    address: "2319 Mitchell Rd, Bedford, IN 47421",
    phone: "812-279-8978",
    email: "bedfordtrolley@gmail.com",
    hours: "M-F 9am - 5:30pm, Closed Sat & Sun",
    image: "/locations/image.jpg",
  },
  {
    name: "Paoli",
    address: "107 N Gospel St, Paoli, IN 47454",
    phone: "812-723-4912",
    email: "paolitrolley@gmail.com",
    hours: "M-F 9am - 4pm, Closed Sat & Sun",
    image: "/locations/image2.jpg",
  },
];

export default function LocationsPage() {
  const openMap = (address: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bg-white">
      <Container className="py-12 md:py-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Locations
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Visit us at one of our convenient locations in Bedford or Paoli. 
            We’re here to provide the best service and support for your trolley needs.
          </p>
        </motion.div>

        {/* Locations */}
        <div className="flex flex-col gap-12">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 text-center md:text-left space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {loc.name}
                </h2>

                <p
                  className="text-gray-700 flex items-center cursor-pointer hover:text-red-600 transition-colors"
                  onClick={() => openMap(loc.address)}
                >
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  {loc.address}
                </p>

                <a
                  href={`tel:${loc.phone}`}
                  className="text-gray-700 flex items-center hover:text-red-600 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2 text-red-600" />
                  {loc.phone}
                </a>

                <a
                  href={`mailto:${loc.email}`}
                  className="text-gray-700 flex items-center hover:text-red-600 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2 text-red-600" />
                  {loc.email}
                </a>

                <p className="text-gray-700 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-red-600" />
                  {loc.hours}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
